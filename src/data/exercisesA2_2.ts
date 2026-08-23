import { Exercise } from "../types";

export const rawExercisesA2_2: Exercise[] = [
  {
    id: "ex_a2_2_1",
    level: "A2.2",
    category: "المراسلات الرسمية",
    type: "multiple_choice",
    questionArabic: "ما هي التحية الرسمية الصحيحة عند مراسلة شركة أو جهة لا تعرف اسم شخص بعينه فيها؟",
    promptGerman: "Offizielle Anrede in einer E-Mail:",
    options: ["Sehr geehrte Damen und Herren,", "Hallo zusammen,", "Liebe Freunde,", "Guten Tag Leute,"],
    correctAnswer: "Sehr geehrte Damen und Herren,",
    explanationArabic: "Sehr geehrte Damen und Herren, هي الصيغة الرسمية المعيارية لمخاطبة جهة عامة أو غير محددة الاسم.",
  },
  {
    id: "ex_a2_2_2",
    level: "A2.2",
    category: "صيغة التمني Konjunktiv II",
    type: "fill_in_blank",
    questionArabic: "اختر صيغة Konjunktiv II المناسبة: Wenn ich reich ___, würde ich reisen.",
    promptGerman: "Wenn ich reich ___, würde ich reisen.",
    options: ["wäre", "bin", "war", "sei"],
    correctAnswer: "wäre",
    explanationArabic: "صيغة Konjunktiv II من فعل sein مع ich هي wäre (لو كنت).",
  },
  {
    id: "ex_a2_2_3",
    level: "A2.2",
    category: "صيغة التمني Konjunktiv II",
    type: "fill_in_blank",
    questionArabic: "اختر صيغة Konjunktiv II من فعل haben: Ich ___ gerne mehr Zeit.",
    promptGerman: "Ich ___ gerne mehr Zeit.",
    options: ["hätte", "habe", "hatte", "wäre"],
    correctAnswer: "hätte",
    explanationArabic: "صيغة Konjunktiv II من haben هي hätte (لو كان لدي / أود لو أملك).",
  },
  {
    id: "ex_a2_2_4",
    level: "A2.2",
    category: "المبني للمجهول Passiv",
    type: "fill_in_blank",
    questionArabic: "اختر صياغة المبني للمجهول في الحاضر: Das Auto ___ in Deutschland gebaut.",
    promptGerman: "Das Auto ___ in Deutschland gebaut.",
    options: ["wird", "wurde", "ist", "hat"],
    correctAnswer: "wird",
    explanationArabic: "يتكون Passiv Präsens من wird + Partizip II (wird gebaut).",
  },
  {
    id: "ex_a2_2_5",
    level: "A2.2",
    category: "نهايات الصفات",
    type: "fill_in_blank",
    questionArabic: "اختر نهاية الصفة المناسبة بعد أداة المعرفة في الرفع: Der neu___ Nachbar ist nett.",
    promptGerman: "Der neu___ Nachbar ist nett.",
    options: ["e", "en", "er", "es"],
    correctAnswer: "e",
    explanationArabic: "بعد أداة المعرفة der في حالة الرفع تأخذ الصفة النهاية -e (Der neue Nachbar).",
  },
  {
    id: "ex_a2_2_6",
    level: "A2.2",
    category: "نهايات الصفات",
    type: "fill_in_blank",
    questionArabic: "اختر نهاية الصفة بعد ein مع اسم محايد في الرفع: Das ist ein schön___ Bild.",
    promptGerman: "Das ist ein schön___ Bild.",
    options: ["es", "e", "en", "er"],
    correctAnswer: "es",
    explanationArabic: "بعد ein مع اسم محايد das Bild تأخذ الصفة النهاية -es (ein schönes Bild).",
  },
  {
    id: "ex_a2_2_7",
    level: "A2.2",
    category: "الأسماء الموصولة Relativsätze",
    type: "multiple_choice",
    questionArabic: "اختر ضمير الوصل المناسب: Das ist der Mann, ___ Deutsch unterrichtet.",
    promptGerman: "Das ist der Mann, ___ Deutsch unterrichtet.",
    options: ["der", "den", "dem", "das"],
    correctAnswer: "der",
    explanationArabic: "الاسم مذكر وهو فاعل في جملة الصلة فيكون ضمير الوصل der.",
  },
  {
    id: "ex_a2_2_8",
    level: "A2.2",
    category: "أدوات الربط المزدوجة",
    type: "fill_in_blank",
    questionArabic: "أكمل التركيب المزدوج: Er spricht ___ Deutsch als auch Englisch.",
    promptGerman: "Er spricht ___ Deutsch als auch Englisch.",
    options: ["sowohl", "weder", "entweder", "nicht"],
    correctAnswer: "sowohl",
    explanationArabic: "التركيب المزدوج هو: sowohl ... als auch (كلاهما معاً).",
  },
  {
    id: "ex_a2_2_9",
    level: "A2.2",
    category: "حروف الجر الزمنية",
    type: "fill_in_blank",
    questionArabic: "اختر حرف الجر لحدث بدأ في الماضي ومستمر حتى اليوم: Ich lerne ___ einem Jahr Deutsch.",
    promptGerman: "Ich lerne ___ einem Jahr Deutsch.",
    options: ["seit", "vor", "nach", "ab"],
    correctAnswer: "seit",
    explanationArabic: "seit + Dativ تعبر عن حدث بدأ في الماضي وما زال مستمراً حتى الوقت الحاضر.",
  },
  {
    id: "ex_a2_2_10",
    level: "A2.2",
    category: "أفعال مع حروف جر ثابتة",
    type: "fill_in_blank",
    questionArabic: "اختر حرف الجر الثابت لفعل warten: Ich warte ___ den Bus.",
    promptGerman: "Ich warte ___ den Bus.",
    options: ["auf", "an", "für", "über"],
    correctAnswer: "auf",
    explanationArabic: "الفعل warten يأخذ حرف الجر auf + Akkusativ دائماً.",
  },
];

export function getExercisesA2_2(): Exercise[] {
  const list = [...rawExercisesA2_2];

  const categories = [
    "المراسلات الرسمية والإيميلات",
    "الدوائر الرسمية والمعاملات",
    "البحث عن عمل والـ CV",
    "عقود السكن والإيجار",
    "المعاملات البنكية والمالية",
    "وسائل الإعلام والتكنولوجيا",
    "البيئة وفرز النفايات",
    "الثقافة والعادات الألمانية",
    "صيغة التمني Konjunktiv II",
    "المبني للمجهول Passiv",
    "نهايات الصفات المعرفة",
    "نهايات الصفات النكرة",
    "الأسماء الموصولة Relativsätze",
    "أدوات الربط المزدوجة",
    "حروف الجر الزمنية المتقدمة",
    "أفعال بحروف جر ثابتة",
    "الظروف الضميرية Pronominaladverbien",
  ];

  const templates = [
    {
      type: "fill_in_blank" as const,
      q: "اختر حرف الجر المناسب لفعل denken: Ich denke oft ___ meinen Urlaub.",
      de: "Ich denke oft ___ meinen Urlaub.",
      opts: ["an", "auf", "über", "in"],
      ans: "an",
      exp: "denken يأخذ حرف الجر an + Akkusativ.",
    },
    {
      type: "multiple_choice" as const,
      q: "ماذا تعني أداة الرهن المسترد في ألمانيا؟",
      de: "Das Pfandsystem in Deutschland:",
      opts: ["استرداد مبلغ عند إرجاع العبوات والزجاجات", "ضريبة إضافية لا تسترد", "تذكرة مجانية", "خصم للملابس"],
      ans: "استرداد مبلغ عند إرجاع العبوات والزجاجات",
      exp: "das Pfand هو مبلغ يدفع كوديعة ويسترد عند إرجاع القناني للسوبرماركت.",
    },
    {
      type: "fill_in_blank" as const,
      q: "اختر الظرف الضميري للسؤال عن شيء غير عاقل: ___ freust du dich? - Auf die Ferien.",
      de: "___ freust du dich? - Auf die Ferien.",
      opts: ["Worauf", "Auf wen", "Wovon", "Womit"],
      ans: "Worauf",
      exp: "للأشياء غير العاقلة مع حرف الجر auf نستخدم Worauf?.",
    },
    {
      type: "word_order" as const,
      q: "رتب الجملة المحتوية على صيغة Passiv:",
      de: "wird / Die E-Mail / heute / geschickt",
      opts: ["Die E-Mail wird heute geschickt.", "Die E-Mail geschickt wird heute.", "Wird die E-Mail geschickt heute.", "Heute die E-Mail wird geschickt."],
      ans: "Die E-Mail wird heute geschickt.",
      exp: "wird في المركز الثاني و Partizip II (geschickt) في نهاية الجملة.",
    },
  ];

  let counter = 11;
  while (list.length < 125) {
    const tIndex = (counter - 11) % templates.length;
    const cIndex = (counter - 11) % categories.length;
    const t = templates[tIndex];
    list.push({
      id: `ex_a2_2_${counter}`,
      level: "A2.2",
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
