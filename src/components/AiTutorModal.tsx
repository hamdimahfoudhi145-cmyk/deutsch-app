import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Volume2, X, Bot, User, Loader2, RotateCcw } from "lucide-react";
import { Level } from "../types";
import { TTSManager } from "../utils/tts";

interface AiTutorModalProps {
  currentLevel: Level;
  initialPrompt?: string;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "tutor";
  text: string;
  germanSnippets?: string[];
  timestamp: number;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  currentLevel,
  initialPrompt,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome_1",
      sender: "tutor",
      text: `مرحباً بك! أنا معلمك الذكي للغة الألمانية (Deutsch Tutor 🇩🇪).
أنا هنا لمساعدتك في شرح القواعد، تصحيح كتابتك، ترجمة النصوص مع توضيح الإعراب، أو إجراء محادثات تدريبية لمستوى ${currentLevel}.
ما الذي ترغب في تعلمه أو السؤال عنه اليوم؟`,
      germanSnippets: ["Guten Tag! Wie kann ich dir heute beim Deutschlernen helfen?"],
      timestamp: Date.now(),
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>(initialPrompt || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    "اشرح لي الفرق بين Akkusativ و Dativ",
    "صحح جملتي الألمانية مع الشرح النحوي",
    "تدريب محادثة تسوق في السوبرماركت (A1)",
    "كيف أستعد لأسئلة امتحان Goethe A2؟",
    "أهم الجمل عند مراجعة الطبيب والمستشفى",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim() !== "") {
      handleSendMessage(initialPrompt);
    }
  }, []);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = (customText || inputPrompt).trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInputPrompt("");
    setIsLoading(true);

    try {
      // Call server backend /api/tutor
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: textToSend,
          level: currentLevel,
          context: "تطبيق Deutsch Lernen لتعليم الألمانية للعرب من A1.1 إلى A2.2",
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const tutorReply = data.reply || data.text || "أعتذر، حدث خطأ أثناء معالجة الطلب.";
        
        // Extract German phrases if available
        const germanMatches = tutorReply.match(/["«]([A-Za-zäöüÄÖÜß\s,?.!'-]+)["»]/g) || [];
        const snippets = germanMatches.map((s: string) => s.replace(/["«»]/g, "").trim()).filter((s: string) => s.length > 2);

        setMessages((prev) => [
          ...prev,
          {
            id: `tut_${Date.now()}`,
            sender: "tutor",
            text: tutorReply,
            germanSnippets: snippets.slice(0, 3),
            timestamp: Date.now(),
          },
        ]);
      } else {
        throw new Error("Server response not ok");
      }
    } catch (err) {
      // Local intelligent fallback engine if backend is unreachable
      const fallbackReply = generateLocalTutorFallback(textToSend, currentLevel);
      setMessages((prev) => [
        ...prev,
        {
          id: `tut_${Date.now()}`,
          sender: "tutor",
          text: fallbackReply.text,
          germanSnippets: fallbackReply.snippets,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateLocalTutorFallback = (prompt: string, level: Level) => {
    const p = prompt.toLowerCase();
    if (p.includes("akkusativ") || p.includes("dativ") || p.includes("نصب") || p.includes("مجرور")) {
      return {
        text: `الفرق الأساسي بين Akkusativ و Dativ في الألمانية:
1. Akkusativ (حالة النصب / المفعول به المباشر):
- تتغير فيه فقط أداة المذكر der إلى den (و ein إلى einen).
- الأسماء المؤنثة والمحايدة والجمع تبقى أدواتها كما هي (die, das, die).
- يعبر مع حروف الجر المتغيرة عن الحركة والاتجاه (Wohin?).
مثال: "Ich kaufe den Tisch." (أشتري الطاولة).

2. Dativ (حالة المجرور / القابل):
- تتغير فيه جميع الأدوات: der -> dem, das -> dem, die -> der, die (Plural) -> den + n.
- يعبر مع حروف الجر المتغيرة عن الموقع الثابت (Wo?).
- تأخذه أفعال محددة مثل helfen, danken, gefallen.
مثال: "Ich helfe dem Mann." (أساعد الرجل).`,
        snippets: ["Ich kaufe den Tisch.", "Ich helfe dem Mann.", "Das Buch liegt auf dem Tisch."],
      };
    }

    if (p.includes("طبيب") || p.includes("arzt") || p.includes("مستشفى")) {
      return {
        text: `إليك أهم العبارات عند مراجعة الطبيب في ألمانيا (Beim Arzt):
- "Ich brauche einen Termin." (أحتاج إلى موعد).
- "Ich habe starke Kopfschmerzen." (عندي صداع شديد).
- "Mein Bauch tut weh." (بطني يؤلمني).
- "Ich brauche ein Rezept für das Medikament." (أحتاج وصفة طبية للدواء).
- "Gute Besserung!" (بالشفاء العاجل!).`,
        snippets: [
          "Ich brauche einen Termin.",
          "Ich habe starke Kopfschmerzen.",
          "Gute Besserung!",
        ],
      };
    }

    return {
      text: `شكراً لسؤالك حول: "${prompt}".
في مستوى ${level}، نركز على بناء الجملة السليمة مع وضع الفعل المصرف في المركز الثاني في الجملة الرئيسية، واستخدام حروف الجر والأدوات بدقة.
هل ترغب في أن نتناول مثالاً عملياً مع النطق الصوتي أو تدريباً على هذا المفهوم؟`,
      snippets: ["Deutsch lernen macht Spaß!", "Übung macht den Meister."],
    };
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#161616] border border-white/10 rounded-3xl max-w-2xl w-full h-[90vh] max-h-[700px] flex flex-col shadow-2xl overflow-hidden text-right">
        {/* Modal Header */}
        <div className="p-4 bg-[#1E1E1E] border-b border-white/5 flex items-center justify-between gap-2 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-black flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                المعلم الذكي للألمانية (AI Tutor)
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  {currentLevel}
                </span>
              </h2>
              <p className="text-xs text-white/50">إجابات فورية وشروح نحوية مبسطة بالعربية</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  msg.sender === "user"
                    ? "bg-white text-black"
                    : "bg-emerald-500 text-black"
                }`}
              >
                {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#1E1E1E] border border-white/10 text-white"
                    : "bg-[#161616] border border-white/5 text-white/90 shadow-md"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* German Audio Snippets if available */}
                {msg.germanSnippets && msg.germanSnippets.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-white/5 space-y-1.5">
                    <span className="text-[10px] font-bold text-emerald-400 block">
                      استمع للنطق الألماني:
                    </span>
                    {msg.germanSnippets.map((snippet, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => TTSManager.speak(snippet)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#252525] text-white/90 text-xs border border-white/5 cursor-pointer text-right w-full transition-all"
                        dir="ltr"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{snippet}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-white/50 text-xs p-3 bg-white/5 rounded-2xl w-fit">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
              <span>المعلم الذكي يكتب الإجابة ويجهز الشرح...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 bg-[#121212] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-shrink-0">
          {quickChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(chip)}
              className="px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#252525] text-white/70 hover:text-white text-[11px] font-semibold border border-white/5 whitespace-nowrap cursor-pointer transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#161616] border-t border-white/5 flex items-center gap-2 flex-shrink-0">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="اكتب سؤالك، أو ألصق جملتك لطلب تصحيحها وشرحها..."
            className="flex-1 bg-[#1E1E1E] border border-white/10 rounded-2xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-white/30"
          />

          <button
            id="btn-send-ai-tutor"
            onClick={() => handleSendMessage()}
            disabled={!inputPrompt.trim() || isLoading}
            className="p-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black transition-all cursor-pointer shadow-md flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
