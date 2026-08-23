import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", app: "Deutsch Lernen 🇩🇪" });
  });

  // AI Tutor endpoint
  app.post("/api/tutor", async (req: Request, res: Response) => {
    try {
      const { message, level = "A1", topic = "General", history = [] } = req.body;

      if (!message || typeof message !== "string") {
        res.status(400).json({ error: "الرجاء إدخال رسالة صالحة." });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // High quality smart fallback responses for offline mode or missing API key
        const fallback = generateSmartFallback(message, level, topic);
        res.json({
          reply: fallback.german,
          arabicExplanation: fallback.arabic,
          corrections: fallback.corrections || null,
          suggestedFollowUps: fallback.suggestions,
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const systemInstruction = `
أنت معلم لغة ألمانية ذكي وودود مخصص للناطقين باللغة العربية في تطبيق "Deutsch Lernen 🇩🇪".
المستوى الحالي للمتعلم هو: ${level} (مستويات: A1.1, A1.2, A2.1, A2.2).
الموضوع أو السياق: ${topic}.

المطلوب منك بدقة:
1. الرد باللغة الألمانية بمستوى يناسب بدقة مستوى المتعلم (${level}):
   - إذا كان A1: استخدم جملاً بسيطة وواضحة وكلمات شائعة.
   - إذا كان A2: استخدم تراكيب أكثر قليلاً، وروابط مثل weil, dass, modal verbs.
2. تصحيح أي أخطاء لغوية أو نحوية أو إملائية في رسالة المتعلم بلطف وشرح القاعدة باللغة العربية.
3. كتابة ترجمة عربية وشرح مبسط لكل ما تقوله.
4. إعطاء 2-3 خيارات ردود مقترحة للمتعلم ليتابع المحادثة.

أرجع النتيجة بصيغة JSON حصراً بالشكل التالي:
{
  "reply": "الرد باللغة الألمانية",
  "arabicExplanation": "الترجمة والشرح باللغة العربية",
  "corrections": "تصحيح أي خطأ في كلام المستخدم مع الشرح بالعربي، أو null إذا لم يكن هناك خطأ",
  "suggestedFollowUps": ["اقتراح 1 بالألمانية", "اقتراح 2 بالألمانية", "اقتراح 3 بالألمانية"]
}
`;

      const contentsHistory = history.map((item: { sender: string; text: string }) => ({
        role: item.sender === "user" ? "user" : "model",
        parts: [{ text: item.text }],
      }));

      contentsHistory.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: contentsHistory as any,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      try {
        const parsed = JSON.parse(text);
        res.json(parsed);
      } catch {
        res.json({
          reply: text,
          arabicExplanation: "ترجمة الرد وملاحظات التعلم",
          corrections: null,
          suggestedFollowUps: ["Wie geht es dir?", "Danke schön!", "Ich verstehe."],
        });
      }
    } catch (err: any) {
      console.error("Gemini Tutor Error:", err?.message || err);
      // Return helpful fallback instead of failing completely
      const { message, level = "A1", topic = "General" } = req.body;
      const fallback = generateSmartFallback(message || "", level, topic);
      res.json({
        reply: fallback.german,
        arabicExplanation: fallback.arabic,
        corrections: fallback.corrections || null,
        suggestedFollowUps: fallback.suggestions,
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Deutsch Lernen server running on http://localhost:${PORT}`);
  });
}

function generateSmartFallback(input: string, level: string, _topic: string) {
  const lower = input.toLowerCase().trim();

  if (lower.includes("hallo") || lower.includes("guten tag") || lower.includes("مرحبا") || lower.includes("أهلا")) {
    return {
      german: "Hallo! Wie geht es dir heute? Was möchtest du auf Deutsch üben?",
      arabic: "مرحباً! كيف حالك اليوم؟ ماذا تود أن تتدرب عليه باللغة الألمانية؟",
      corrections: null,
      suggestions: ["Mir geht es gut, danke!", "Ich möchte Grammatik üben.", "Ich möchte neue Wörter lernen."],
    };
  }

  if (lower.includes("wie geht") || lower.includes("كيف حالك")) {
    return {
      german: "Mir geht es sehr gut, danke der Nachfrage! Und wie läuft dein Deutschlernen?",
      arabic: "أنا بخير جداً، شكراً لسؤالك! وكيف تسير دراستك للألمانية؟",
      corrections: null,
      suggestions: ["Es läuft gut!", "Ich lerne A1.", "Deutsch ist interessant."],
    };
  }

  if (lower.includes("ich heiße") || lower.includes("mein name") || lower.includes("اسمي")) {
    return {
      german: "Sehr angenehm! Freut mich, dich kennenzulernen. Woher kommst du?",
      arabic: "تشرفت بمعرفتك جداً! من أين أنت؟ (Woher kommst du?)",
      corrections: null,
      suggestions: ["Ich komme aus Ägypten.", "Ich komme aus Syrien.", "Ich komme aus Marokko."],
    };
  }

  if (lower.includes("woher") || lower.includes("komme aus")) {
    return {
      german: "Sehr schön! Ein wunderbares Land. Wo wohnst du jetzt? Wohnst du in Deutschland?",
      arabic: "جميل جداً! بلد رائع. أين تسكن الآن؟ هل تعيش في ألمانيا؟",
      corrections: null,
      suggestions: ["Ja, ich wohne in Deutschland.", "Nein, ich wohne noch in meiner Heimat.", "Ich wohne in Berlin."],
    };
  }

  if (level.startsWith("A2")) {
    return {
      german: "Das ist ein interessanter Gedanke! Auf A2-Niveau können wir gerne Nebensätze mit 'weil' oder 'dass' üben. Erzähl mir mehr darüber!",
      arabic: "هذه فكرة شيقة! في مستوى A2 يمكننا التدرب على الجمل الجانبية باستخدام weil (لأن) أو dass (أن). أخبرني المزيد عن ذلك!",
      corrections: null,
      suggestions: ["Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", "Ich denke, dass Deutsch nicht so schwer ist.", "Können wir eine Übung machen?"],
    };
  }

  return {
    german: "Sehr gut! Du machst tolle Fortschritte. Schreib mir gerne einen weiteren Satz auf Deutsch!",
    arabic: "أحسنت! أنت تحرز تقدماً ممتازاً. اكتب لي جملة أخرى باللغة الألمانية وسأساعدك في مراجعتها وشرحها.",
    corrections: null,
    suggestions: ["Ich habe eine Frage.", "Kannst du das erklären?", "Lass uns weitermachen!"],
  };
}

startServer();
