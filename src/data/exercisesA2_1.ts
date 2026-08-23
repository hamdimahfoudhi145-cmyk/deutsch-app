import { Exercise } from "../types";

export const rawExercisesA2_1: Exercise[] = [
  {
    id: "ex_a2_1_1",
    level: "A2.1",
    category: "الجمل السببية weil",
    type: "multiple_choice",
    questionArabic: "أين يقع الفعل المصرف في جملة 'weil'؟",
    promptGerman: "Ich lerne Deutsch, weil ich in Deutschland arbeiten ___.",
    options: ["möchte (في نهاية الجملة)", "möchte (في المركز 2)", "möchte (في البداية)", "لا نستخدم فعلاً"],
    correctAnswer: "möchte (في نهاية الجملة)",
    explanationArabic: "في الجمل الجانبية مع weil يذهب الفعل المصرف دائماً إلى نهاية الجملة تماماً.",
  },
  {
    id: "ex_a2_1_2",
    level: "A2.1",
    category: "المقارنة والتفضيل",
    type: "fill_in_blank",
    questionArabic: "ما هي صيغة المقارنة الصحيحة من الصفة 'gut'؟",
    promptGerman: "Ali spricht ___ Deutsch als ich.",
    options: ["besser", "guter", "am besten", "mehr gut"],
    correctAnswer: "besser",
    explanationArabic: "المقارنة من gut هي besser (شاذة).",
  },
  {
    id: "ex_a2_1_3",
    level: "A2.1",
    category: "المقارنة والتفضيل",
    type: "fill_in_blank",
    questionArabic: "ما هي صيغة التفضيل الأقصى من الصفة 'schnell'؟",
    promptGerman: "Das Flugzeug ist ___ (schnell).",
    options: ["am schnellsten", "schneller", "am schnellste", "schnellst"],
    correctAnswer: "am schnellsten",
    explanationArabic: "صيغة التفضيل الأقصى: am schnellsten.",
  },
  {
    id: "ex_a2_1_4",
    level: "A2.1",
    category: "الأفعال المنعكسة",
    type: "fill_in_blank",
    questionArabic: "اختر ضمير الانعكاس المناسب مع ich: Ich freue ___ auf das Wochenende.",
    promptGerman: "Ich freue ___ auf das Wochenende.",
    options: ["mich", "dich", "sich", "mir"],
    correctAnswer: "mich",
    explanationArabic: "ضمير الانعكاس مع ich في حالة النصب هو mich.",
  },
  {
    id: "ex_a2_1_5",
    level: "A2.1",
    category: "الماضي البسيط Präteritum",
    type: "fill_in_blank",
    questionArabic: "اختر صيغة الماضي لفعل sein: Gestern ___ ich krank.",
    promptGerman: "Gestern ___ ich krank.",
    options: ["war", "bin", "hatte", "wäre"],
    correctAnswer: "war",
    explanationArabic: "الماضي من sein مع ich هو war (كنت).",
  },
  {
    id: "ex_a2_1_6",
    level: "A2.1",
    category: "الماضي البسيط Präteritum",
    type: "fill_in_blank",
    questionArabic: "اختر صيغة الماضي لفعل haben: Wir ___ gestern viel Spaß.",
    promptGerman: "Wir ___ gestern viel Spaß.",
    options: ["hatten", "haben", "waren", "hattet"],
    correctAnswer: "hatten",
    explanationArabic: "الماضي من haben مع wir هو hatten (كان لدينا).",
  },
  {
    id: "ex_a2_1_7",
    level: "A2.1",
    category: "حروف الجر المتغيرة",
    type: "multiple_choice",
    questionArabic: "ما هي الحالة الإعرابية عند السؤال عن المكان الثابت (Wo?) مع حروف الجر التسعة؟",
    promptGerman: "Das Buch liegt auf ___ Tisch. (der Tisch - Wo?)",
    options: ["dem (Dativ)", "den (Akkusativ)", "der (Nominativ)", "des (Genitiv)"],
    correctAnswer: "dem (Dativ)",
    explanationArabic: "السؤال عن الموقع الثابت Wo? يطلب Dativ فتصبح auf dem Tisch.",
  },
  {
    id: "ex_a2_1_8",
    level: "A2.1",
    category: "حروف الجر المتغيرة",
    type: "multiple_choice",
    questionArabic: "ما هي الحالة الإعرابية عند السؤال عن الاتجاه والحركة (Wohin?)؟",
    promptGerman: "Ich lege das Buch auf ___ Tisch. (der Tisch - Wohin?)",
    options: ["den (Akkusativ)", "dem (Dativ)", "der (Nominativ)", "das"],
    correctAnswer: "den (Akkusativ)",
    explanationArabic: "الحركة والاتجاه Wohin? تطلب Akkusativ فتصبح auf den Tisch.",
  },
  {
    id: "ex_a2_1_9",
    level: "A2.1",
    category: "الجمل الشرطية wenn",
    type: "word_order",
    questionArabic: "رتب الجملة الشرطية إذا بدأنا بـ Wenn:",
    promptGerman: "Wenn es regnet / wir / bleiben / zu Hause",
    options: [
      "Wenn es regnet, bleiben wir zu Hause.",
      "Wenn es regnet, wir bleiben zu Hause.",
      "Bleiben wir zu Hause, wenn es regnet nicht.",
      "Wenn regnet es, bleiben wir zu Hause."
    ],
    correctAnswer: "Wenn es regnet, bleiben wir zu Hause.",
    explanationArabic: "بعد جملة wenn تبدأ الجملة الرئيسية بالفعل المصرف مباشرة (bleiben wir).",
  },
  {
    id: "ex_a2_1_10",
    level: "A2.1",
    category: "الجمل الجانبية dass",
    type: "fill_in_blank",
    questionArabic: "اختر الترتيب الصحيح: Ich weiß, dass du Recht ___.",
    promptGerman: "Ich weiß, dass du Recht ___.",
    options: ["hast", "hast du", "habe", "haben"],
    correctAnswer: "hast",
    explanationArabic: "في جملة dass يذهب الفعل المصرف hast إلى نهاية الجملة.",
  },
];

export function getExercisesA2_1(): Exercise[] {
  const list = [...rawExercisesA2_1];

  const categories = [
    "السفر وحجز التذاكر",
    "الفندق والإقامة",
    "المطعم والضيافة",
    "الطبيب والصحة",
    "المواعيد والاتصالات",
    "المواصلات ووصف الطريق",
    "بيئة العمل والمكاتب",
    "المواقف اليومية واللباقة",
    "الماضي التام المتقدم Perfekt",
    "الماضي البسيط Präteritum",
    "Akkusativ مقابل Dativ",
    "حروف الجر المتغيرة Wechselpräpositionen",
    "الأفعال المنعكسة Reflexive Verben",
    "المقارنة والتفضيل",
    "الجمل السببية مع weil",
    "الجمل الجانبية مع dass",
    "الجمل الشرطية مع wenn",
  ];

  const templates = [
    {
      type: "fill_in_blank" as const,
      q: "اختر أداة الربط المناسبة: Ich gehe nicht spazieren, ___ es kalt ist.",
      de: "Ich gehe nicht spazieren, ___ es kalt ist.",
      opts: ["weil", "und", "aber", "oder"],
      ans: "weil",
      exp: "weil تفيد السبب وترسل الفعل إلى النهاية.",
    },
    {
      type: "fill_in_blank" as const,
      q: "اختر صيغة الطلب المهذب: ___ Sie mir bitte helfen?",
      de: "___ Sie mir bitte helfen?",
      opts: ["Könnten", "Kann", "Muss", "Soll"],
      ans: "Könnten",
      exp: "Könnten Sie bitte... تفيد الطلب بأقصى درجات الأدب.",
    },
    {
      type: "article_selection" as const,
      q: "حدد الأداة الصحيحة للاتجاه: Wir gehen in ___ Park. (der Park - حركة)",
      de: "Wir gehen in ___ Park.",
      opts: ["den", "dem", "der", "das"],
      ans: "den",
      exp: "مع حركة الدخول Wohin? نستخدم Akkusativ (in den Park).",
    },
    {
      type: "translation" as const,
      q: "ماذا تعني 'Gute Besserung'؟",
      de: "Gute Besserung!",
      opts: ["بالشفاء العاجل!", "رحلة سعيدة!", "شهية طيبة!", "مع السلامة!"],
      ans: "بالشفاء العاجل!",
      exp: "Gute Besserung تقال للشخص المريض متمنين له الشفاء.",
    },
  ];

  let counter = 11;
  while (list.length < 125) {
    const tIndex = (counter - 11) % templates.length;
    const cIndex = (counter - 11) % categories.length;
    const t = templates[tIndex];
    list.push({
      id: `ex_a2_1_${counter}`,
      level: "A2.1",
      category: categories[cIndex],
      type: t.type,
      questionArabic: `${t.q} [تمرين ${counter}]`,
      promptGerman: t.de,
      options: t.opts,
      correctAnswer: t.ans,
      explanationArabic: t.exp,
    });
    counter++;
  }

  return list;
}
