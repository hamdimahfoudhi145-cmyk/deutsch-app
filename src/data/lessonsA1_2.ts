import { Lesson } from "../types";

export const lessonsA1_2: Lesson[] = [
  {
    id: "a1_2_1",
    level: "A1.2",
    number: 1,
    titleArabic: "الوقت والساعة",
    titleGerman: "Die Uhrzeit",
    descriptionArabic: "كيف تسأل عن الوقت وتخبر بالساعة الرسمية وغير الرسمية (vor / nach / halb / Viertel).",
    grammarExplanation:
      "للسؤال عن الوقت نقول: Wie spät ist es? أو Wie viel Uhr ist es?. هناك طريقتان لقول الوقت: الرسمية (Es ist 14 Uhr 30) وغير الرسمية (Es ist halb drei).",
    grammarRules: [
      {
        rule: "الساعة غير الرسمية في الحياة اليومية",
        explanation: "nach تعني بعد/و (مثال: fünf nach acht = 8:05)، vor تعني قبل/إلا (مثال: fünf vor acht = 7:55)، Viertel تعني ربع، و halb تعني نصف ولكن تشير إلى الساعة القادمة! (halb acht = 7:30).",
        example: "Es ist Viertel nach neun (9:15). Es ist halb zehn (9:30).",
        exampleArabic: "الساعة التاسعة والربع. الساعة التاسعة والنصف.",
      },
      {
        rule: "حرف الجر مع الساعة",
        explanation: "نستخدم دائماً حرف الجر um مع الساعات المحددة.",
        example: "Der Zug fährt um 10:15 Uhr ab.",
        exampleArabic: "القطار يغادر في تمام الساعة 10:15.",
      },
    ],
    examples: [
      { german: "Wie spät ist es?", arabic: "كم الساعة؟", phonetic: "في شبيت إست إس" },
      { german: "Es ist genau acht Uhr.", arabic: "إنها الساعة الثامنة تماماً.", phonetic: "إس إست غناو آخت أور" },
      { german: "Es ist halb fünf (4:30).", arabic: "إنها الرابعة والنصف.", phonetic: "إس إست هالب فونف" },
      { german: "Es ist Viertel vor sechs (5:45).", arabic: "إنها السادسة إلا ربع.", phonetic: "إس إست فيرتل فور زكس" },
    ],
    vocabulary: [
      { german: "die Uhrzeit", arabic: "الوقت / الساعة", phonetic: "دي أور تسايت", article: "die", exampleSentence: "Die Uhrzeit ist wichtig.", exampleArabic: "الوقت مهم." },
      { german: "die Minute", arabic: "الدقيقة", phonetic: "دي مينوته", article: "die", exampleSentence: "Ich brauche fünf Minuten.", exampleArabic: "أحتاج خمس دقائق." },
      { german: "die Sekunde", arabic: "الثانية", phonetic: "دي زكونده", article: "die", exampleSentence: "Einen Moment, eine Sekunde bitte!", exampleArabic: "لحظة، ثانية من فضلك!" },
      { german: "pünktlich", arabic: "في الموعد تماماً (منضبط)", phonetic: "بونكتليش", exampleSentence: "Die Deutschen sind oft pünktlich.", exampleArabic: "الألمان منضبطون بالمواعيد غالباً." },
    ],
    readingPassage: {
      german: "Mein Arbeitstag beginnt um 8:00 Uhr morgens. Um 12:30 Uhr mache ich Mittagspause. Der Deutschkurs startet um Viertel nach fünf am Nachmittag.",
      arabic: "يبدأ يوم عملي في الساعة 8:00 صباحاً. في الساعة 12:30 آخذ استراحة الغداء. دورة اللغة الألمانية تبدأ في الخامسة والربع بعد الظهر.",
      questions: [
        {
          question: "Wann beginnt die Mittagspause?",
          options: ["Um 8:00 Uhr", "Um 12:30 Uhr (halb eins)", "Um 17:15 Uhr", "Um 9:00 Uhr"],
          answer: "Um 12:30 Uhr (halb eins)",
          explanation: "12:30 تسمى أيضاً halb eins.",
        },
      ],
    },
    miniExercises: [
      {
        question: "ماذا تعني عبارة 'Es ist halb sieben'؟",
        options: ["7:30", "6:30", "6:15", "7:15"],
        answer: "6:30",
        explanation: "halb sieben تعني نصف ساعة قبل السابعة = 6:30.",
      },
    ],
  },
  {
    id: "a1_2_2",
    level: "A1.2",
    number: 2,
    titleArabic: "الأيام والشهور وفصول السنة",
    titleGerman: "Tage, Monate und Jahreszeiten",
    descriptionArabic: "أيام الأسبوع السبعة، شهور السنة الاثني عشر، الفصول الأربعة، وحروف الجر الزمنية am و im.",
    grammarExplanation:
      "نستخدم حرف الجر am مع أيام الأسبوع وأوقات اليوم (am Montag, am Morgen)، ونستخدم im مع الشهور وفصول السنة (im Januar, im Sommer).",
    grammarRules: [
      {
        rule: "أيام الأسبوع وحرف الجر am",
        explanation: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. تأخذ كلها أداة der وحرف الجر am.",
        example: "Am Samstag habe ich frei.",
        exampleArabic: "يوم السبت أنا في عطلة.",
      },
      {
        rule: "الشهور والفصول وحرف الجر im",
        explanation: "die Jahreszeiten: der Frühling (الربيع), der Sommer (الصيف), der Herbst (الخريف), der Winter (الشتاء). الشهور: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.",
        example: "Im August ist es sehr heiß.",
        exampleArabic: "في شهر أغسطس الجو حار جداً.",
      },
    ],
    examples: [
      { german: "am Montag", arabic: "يوم الإثنين", phonetic: "أم مونتاك" },
      { german: "am Wochenende", arabic: "في نهاية الأسبوع", phonetic: "أم فوخن إنده" },
      { german: "im Sommer", arabic: "في الصيف", phonetic: "إم زومر" },
      { german: "im Dezember", arabic: "في ديسمبر", phonetic: "إم ديتسمبر" },
    ],
    vocabulary: [
      { german: "das Wochenende", arabic: "عطلة نهاية الأسبوع", phonetic: "داس فوخن إنده", article: "das", exampleSentence: "Schönes Wochenende!", exampleArabic: "عطلة نهاية أسبوع سعيدة!" },
      { german: "der Monat", arabic: "الشهر", phonetic: "دير مونات", article: "der", exampleSentence: "Ein Monat hat vier Wochen.", exampleArabic: "الشهر فيه أربعة أسابيع." },
      { german: "das Jahr", arabic: "السنة / العام", phonetic: "داس يار", article: "das", exampleSentence: "Ein neues Jahr.", exampleArabic: "سنة جديدة." },
    ],
    readingPassage: {
      german: "In Deutschland hat das Jahr vier Jahreszeiten. Im Frühling wird es warm. Im Sommer haben die Kinder Schulferien. Im Herbst fallen die Blätter und im Winter schneit es oft.",
      arabic: "في ألمانيا السنة فيها أربعة فصول. في الربيع يصبح الجو دافئاً. في الصيف يأخذ الأطفال العطلة المدرسية. في الخريف تتساقط الأوراق وفي الشتاء تثلج كثيراً.",
      questions: [
        {
          question: "Wann schneit es oft in Deutschland?",
          options: ["Im Sommer", "Im Frühling", "Im Winter", "Im Herbst"],
          answer: "Im Winter",
          explanation: "يذكر النص: 'im Winter schneit es oft'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ Freitag gehen wir ins Kino.",
        options: ["Im", "Am", "Um", "An"],
        answer: "Am",
        explanation: "مع أيام الأسبوع نستخدم حرف الجر Am.",
      },
      {
        question: "Mein Geburtstag ist ___ Juli.",
        options: ["am", "im", "um", "in"],
        answer: "im",
        explanation: "مع الشهور نستخدم حرف الجر im.",
      },
    ],
  },
  {
    id: "a1_2_3",
    level: "A1.2",
    number: 3,
    titleArabic: "الروتين اليومي",
    titleGerman: "Tagesablauf",
    descriptionArabic: "وصف يوم كامل من الاستيقاظ وحتى النوم وترتيب الأحداث بـ zuerst, dann, danach, schließlich.",
    grammarExplanation:
      "نستخدم ظروف الترتيب الزمني لربط الجمل وتغيير ترتيب الكلمات (الفعل يبقى في المركز 2 دائماً).",
    grammarRules: [
      {
        rule: "ظروف الترتيب الزمني",
        explanation: "zuerst (أولاً) -> dann (ثم) -> danach (بعد ذلك) -> schließlich (أخيراً). عند البدء بأحد هذه الظروف، يأتي الفعل فوراً في الموقع الثاني يليه الفاعل.",
        example: "Zuerst stehe ich auf. Dann putze ich meine Zähne.",
        exampleArabic: "أولاً أستيقظ. ثم أنظف أسناني.",
      },
    ],
    examples: [
      { german: "Ich stehe um 6:30 Uhr auf.", arabic: "أستيقظ في السادسة والنصف.", phonetic: "إش شتيه أوم زكس أور درايسيغ أوف" },
      { german: "Zuerst dusche ich mich.", arabic: "أولاً أستحم.", phonetic: "تسو إيرست دوشه إش ميش" },
      { german: "Danach fahre ich zur Uni.", arabic: "بعد ذلك أذهب إلى الجامعة.", phonetic: "داناخ فاره إش تسور أوني" },
    ],
    vocabulary: [
      { german: "aufstehen", arabic: "يستيقظ / ينهض", phonetic: "أوف شتين", exampleSentence: "Ich muss früh aufstehen.", exampleArabic: "يجب أن أستيقظ مبكراً." },
      { german: "die Zähne putzen", arabic: "ينظف الأسنان بالفرشاة", phonetic: "دي تسينه بوتسن", exampleSentence: "Vergiss nicht, die Zähne zu putzen!", exampleArabic: "لا تنس تنظيف أسنانك!" },
      { german: "einschlafen", arabic: "يستغرق في النوم", phonetic: "آين شلافن", exampleSentence: "Er schläft schnell ein.", exampleArabic: "هو ينام بسرعة." },
    ],
    readingPassage: {
      german: "Mein Alltag ist strukturiert. Um 7 Uhr klingelt der Wecker. Zuerst trinke ich ein Glas Wasser. Dann mache ich Frühstück. Um 8:30 Uhr beginnt mein Online-Unterricht. Am Nachmittag treibe ich Sport und am Abend lese ich ein Buch.",
      arabic: "يومي منظم. في الساعة 7 يرن المنبه. أولاً أشرب كأس ماء. ثم أعد الإفطار. في الساعة 8:30 يبدأ درسي عبر الإنترنت. بعد الظهر أمارس الرياضة وفي المساء أقرأ كتاباً.",
      questions: [
        {
          question: "Was macht die Person zuerst am Morgen?",
          options: ["Sport treiben", "Ein Glas Wasser trinken", "Ein Buch lesen", "Frühstück kochen"],
          answer: "Ein Glas Wasser trinken",
          explanation: "يذكر النص: 'Zuerst trinke ich ein Glas Wasser'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Danach ___ wir zu Mittag.",
        options: ["essen", "isst", "esse", "gegessen"],
        answer: "essen",
        explanation: "الفعل في المركز الثاني ومصرف مع wir فيكون essen.",
      },
    ],
  },
  {
    id: "a1_2_4",
    level: "A1.2",
    number: 4,
    titleArabic: "الأكل والشرب",
    titleGerman: "Essen und Trinken",
    descriptionArabic: "أسماء الأطعمة والمشروبات، الوجبات اليومية، وعبارات التعبير عن الإعجاب والتفضيل (schmecken, mögen).",
    grammarExplanation:
      "للتعبير عن الإعجاب بالطعام نستخدم Das schmeckt gut! (طعمه لذيذ) أو الفعل mögen (يحب/يرغب).",
    grammarRules: [
      {
        rule: "تصريف الفعلين essen و trinken",
        explanation: "فعل essen يغير حرف العلة مع du و er/sie/es (du isst, er isst).",
        example: "Was isst du gerne? - Ich esse gerne Pizza.",
        exampleArabic: "ماذا تحب أن تأكل؟ - أحب أن آكل البيتزا.",
      },
      {
        rule: "استخدام schmecken",
        explanation: "Das Essen schmeckt lecker! (الطعام لذيذ!)",
        example: "Schmeckt es dir? - Ja, sehr gut!",
        exampleArabic: "هل أعجبك الطعم؟ - نعم، جيد جداً!",
      },
    ],
    examples: [
      { german: "Guten Appetit!", arabic: "شهية طيبة / بالهناء والشفاء!", phonetic: "غوتن أبيتيت" },
      { german: "Das schmeckt sehr lecker.", arabic: "هذا لذيذ جداً.", phonetic: "داس شمكت زير لكر" },
      { german: "Ich möchte ein Glas Wasser, bitte.", arabic: "أود كأساً من الماء، من فضلك.", phonetic: "إش موشته آين غلاس فاسر بِتّه" },
    ],
    vocabulary: [
      { german: "das Brot", arabic: "الخبز", phonetic: "داس بروت", article: "das", exampleSentence: "Frisches Brot riecht gut.", exampleArabic: "الخبز الطازج رائحته طيبة." },
      { german: "der Käse", arabic: "الجبن", phonetic: "دير كيزه", article: "der", exampleSentence: "Ich mag Käse.", exampleArabic: "أنا أحب الجبن." },
      { german: "das Fleisch", arabic: "اللحم", phonetic: "داس فلايش", article: "das", exampleSentence: "Er isst kein Fleisch.", exampleArabic: "هو لا يأكل اللحم." },
      { german: "das Gemüse", arabic: "الخضار", phonetic: "داس غميوزه", article: "das", exampleSentence: "Gemüse ist gesund.", exampleArabic: "الخضار صحية." },
      { german: "das Obst", arabic: "الفواكه", phonetic: "داس أوبست", article: "das", exampleSentence: "Ich esse täglich Obst.", exampleArabic: "آكل الفواكه يومياً." },
      { german: "der Tee", arabic: "الشاي", phonetic: "دير تيه", article: "der", exampleSentence: "Möchtest du Tee oder Kaffee?", exampleArabic: "هل تود شاياً أم قهوة؟" },
    ],
    readingPassage: {
      german: "Zum Frühstück trinke ich einen Kaffee mit Milch und esse Brot mit Marmelade oder Käse. Zu Mittag esse ich oft in der Kantine Reis mit Gemüse. Am Abend esse ich nur einen leichten Salat.",
      arabic: "في الإفطار أشرب قهوة بحليب وآكل خبزاً مع المربى أو الجبن. في الغداء آكل غالباً في مطعم العمل أرزاً مع الخضار. في المساء آكل سلطة خفيفة فقط.",
      questions: [
        {
          question: "Was trinkt die Person zum Frühstück?",
          options: ["Tee", "Wasser", "Kaffee mit Milch", "Orangensaft"],
          answer: "Kaffee mit Milch",
          explanation: "يذكر النص: 'trinke ich einen Kaffee mit Milch'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Was ___ du heute zu Mittag? (essen مع du)",
        options: ["esst", "isst", "esse", "essen"],
        answer: "isst",
        explanation: "مع الضمير du يتحول فعل essen إلى isst.",
      },
    ],
  },
  {
    id: "a1_2_5",
    level: "A1.2",
    number: 5,
    titleArabic: "التسوق والمشتريات",
    titleGerman: "Einkaufen im Supermarkt",
    descriptionArabic: "المحادثة في السوبرماركت والسوق، السؤال عن الأسعار، والكميات والأوزان (Kilo, Liter, Packung).",
    grammarExplanation:
      "في السوبرماركت نستخدم عبارات الطلب المهذب: Ich möchte... / Ich hätte gerne... والسؤال عن السعر: Was kostet...? / Wie viel kostet...?",
    grammarRules: [
      {
        rule: "الكميات والأوزان",
        explanation: "ein Kilo (كيلو), ein halbes Kilo (نصف كيلو), ein Liter (لتر), eine Flasche (زجاجة), eine Packung (علبة/باكيت), ein Stück (قطعة).",
        example: "Ich möchte ein Kilo Äpfel und eine Flasche Milch.",
        exampleArabic: "أريد كيلوغراماً من التفاح وزجاجة حليب.",
      },
    ],
    examples: [
      { german: "Was kostet das?", arabic: "كم سعر هذا؟", phonetic: "فاس كوستت داس" },
      { german: "Ich hätte gerne zwei Kilo Kartoffeln.", arabic: "أود كيلوين من البطاطس لو سمحت.", phonetic: "إش هيته غيرنه تسفاي كيلو كارتوفلن" },
      { german: "Sonst noch etwas? - Nein, danke, das ist alles.", arabic: "أي شيء آخر؟ - لا شكراً، هذا كل شيء.", phonetic: "زونست نوخ إتفاس - ناين دانكه داس إست ألس" },
    ],
    vocabulary: [
      { german: "der Supermarkt", arabic: "السوبرماركت", phonetic: "دير زوبرماركت", article: "der", exampleSentence: "Der Supermarkt schließt um 20 Uhr.", exampleArabic: "السوبرماركت يغلق في الثامنة مساءً." },
      { german: "die Kasse", arabic: "صندوق الدفع (الكاشير)", phonetic: "دي كاسّه", article: "die", exampleSentence: "Bezahlen Sie bitte an der Kasse.", exampleArabic: "ادفع من فضلك عند الصندوق." },
      { german: "billig / günstig", arabic: "رخيص / مناسب السعر", phonetic: "بيليش / غيونستيغ", exampleSentence: "Das Angebot ist günstig.", exampleArabic: "العرض مناسب وسعره رخيص." },
      { german: "teuer", arabic: "غالٍ", phonetic: "توير", exampleSentence: "Das ist mir zu teuer.", exampleArabic: "هذا غالٍ جداً بالنسبة لي." },
    ],
    readingPassage: {
      german: "Frau Weber geht auf den Wochenmarkt. Sie kauft ein Kilo Tomaten, zwei Kilo Orangen und 500 Gramm Käse. Die Verkäuferin fragt: 'Möchten Sie noch etwas?' Frau Weber antwortet: 'Nein danke, was macht das zusammen?'",
      arabic: "تذهب السيدة فيبر إلى السوق الأسبوعي. تشتري كيلو طماطم، وكيلوين برتقال، و500 غرام جبن. تسأل البائعة: 'هل تودين شيئاً آخر؟' تجيب السيدة فيبر: 'لا شكراً، كم الحساب الإجمالي؟'",
      questions: [
        {
          question: "Wie viele Orangen kauft Frau Weber?",
          options: ["Ein Kilo", "Zwei Kilo", "Drei Kilo", "Keine"],
          answer: "Zwei Kilo",
          explanation: "يذكر النص: 'zwei Kilo Orangen'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Wie viel ___ die Tomaten?",
        options: ["kostet", "kosten", "koste", "gekostet"],
        answer: "kosten",
        explanation: "Tomaten جمع فتأخذ الفعل بصيغة الجمع kosten.",
      },
    ],
  },
  {
    id: "a1_2_6",
    level: "A1.2",
    number: 6,
    titleArabic: "المنزل والغرف والأثاث",
    titleGerman: "Wohnung und Möbel",
    descriptionArabic: "أجزاء البيت، الغرف (Zimmer)، قطع الأثاث، ووصف الشقة باستخدام الصفات.",
    grammarExplanation:
      "أسماء الغرف: das Wohnzimmer (غرفة المعيشة)، das Schlafzimmer (غرفة النوم)، die Küche (المطبخ)، das Bad (الحمام)، der Flur (الممر/المدخل).",
    grammarRules: [
      {
        rule: "وصف الشقة والأثاث",
        explanation: "نستخدم es gibt + Akkusativ للتعبير عن وجود شيء (Es gibt einen Balkon).",
        example: "Die Wohnung hat drei Zimmer und einen schönen Balkon.",
        exampleArabic: "الشقة بها ثلاث غرف وشرفة جميلة.",
      },
    ],
    examples: [
      { german: "Meine Wohnung ist hell und ruhig.", arabic: "شقتي مضيئة وهادئة.", phonetic: "ماينه فونونغ إست هل أوند روهيغ" },
      { german: "Die Miete ist nicht teuer.", arabic: "الإيجار ليس باهظاً.", phonetic: "دي ميته إست نيشت توير" },
      { german: "Das Sofa steht im Wohnzimmer.", arabic: "الأريكة موجودة في غرفة المعيشة.", phonetic: "داس زوفا شتيت إم فون تسيمر" },
    ],
    vocabulary: [
      { german: "die Wohnung", arabic: "الشقة / المنزل", phonetic: "دي فونونغ", article: "die", exampleSentence: "Ich suche eine neue Wohnung.", exampleArabic: "أبحث عن شقة جديدة." },
      { german: "das Zimmer", arabic: "الغرفة", phonetic: "داس تسيمر", article: "das", exampleSentence: "Mein Zimmer ist gemütlich.", exampleArabic: "غرفتي مريحة ودافئة." },
      { german: "die Küche", arabic: "المطبخ", phonetic: "دي كيوخه", article: "die", exampleSentence: "Die Küche ist modern.", exampleArabic: "المطبخ حديث." },
      { german: "der Balkon", arabic: "الشرفة / البلكونة", phonetic: "دير بالكون", article: "der", exampleSentence: "Die Wohnung hat einen Balkon.", exampleArabic: "الشقة بها شرفة." },
      { german: "die Miete", arabic: "الإيجار", phonetic: "دي ميته", article: "die", exampleSentence: "Wie hoch ist die Warmmiete?", exampleArabic: "كم يبلغ الإيجار الشامل للتدفئة؟" },
    ],
    readingPassage: {
      german: "Wir wohnen in einer 3-Zimmer-Wohnung im Zentrum von Köln. Das Wohnzimmer ist sehr groß und hat einen sonnigen Balkon. Die Küche ist neu und das Bad hat eine Badewanne.",
      arabic: "نحن نعيش في شقة من 3 غرف في وسط كولونيا. غرفة المعيشة كبيرة جداً ولها شرفة مشمسة. المطبخ جديد والحمام به حوض استحمام.",
      questions: [
        {
          question: "Wo liegt die Wohnung?",
          options: ["Auf dem Land", "Im Zentrum von Köln", "In Berlin", "Im Wald"],
          answer: "Im Zentrum von Köln",
          explanation: "يذكر النص: 'im Zentrum von Köln'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "In der Wohnung gibt es ___ Balkon. (مذكر مفعول به)",
        options: ["ein", "einen", "eine", "einem"],
        answer: "einen",
        explanation: "بعد es gibt يأتي المفعول به Akkusativ، وكلمة der Balkon تصبح einen Balkon.",
      },
    ],
  },
  {
    id: "a1_2_7",
    level: "A1.2",
    number: 7,
    titleArabic: "العمل والمهن",
    titleGerman: "Berufe und Arbeitswelt",
    descriptionArabic: "أسماء المهن بالمذكر والمؤنث وكيف تسأل وتجيب عن مهنتك ومكان عملك.",
    grammarExplanation:
      "للسؤال عن المهنة نقول: Was sind Sie von Beruf? أو Was machen Sie beruflich?. للإجابة نقول: Ich bin Arzt / Ich arbeite als Arzt bei Siemens.",
    grammarRules: [
      {
        rule: "المهنة بالمؤنث وحروف الجر الخاصة بالعمل",
        explanation: "نضيف -in للمؤنث: der Lehrer -> die Lehrerin, der Arzt -> die Ärztin (مع أوملاوت). نستخدم als مع المسمى الوظيفي (Ich arbeite als Ingenieur) و bei مع اسم الشركة (bei BMW).",
        example: "Ich arbeite als Krankenpfleger bei der Charité.",
        exampleArabic: "أعمل ممرضاً لدى مستشفى الشاريتيه.",
      },
    ],
    examples: [
      { german: "Was sind Sie von Beruf?", arabic: "ما هي مهنة حضرتك؟", phonetic: "فاس زند زي فون بروف" },
      { german: "Ich bin Ingenieur von Beruf.", arabic: "أنا مهندس بالمهنة.", phonetic: "إش بن إنجنيور فون بروف" },
      { german: "Ich arbeite bei einer Softwarefirma.", arabic: "أعمل لدى شركة برمجيات.", phonetic: "إش أربايته باي آينر سوفت وير فيرما" },
    ],
    vocabulary: [
      { german: "der Beruf", arabic: "المهنة", phonetic: "دير بروف", article: "der", exampleSentence: "Mein Beruf macht mir Spaß.", exampleArabic: "مهنتي ممتعة بالنسبة لي." },
      { german: "die Arbeit", arabic: "العمل", phonetic: "دي أربايت", article: "die", exampleSentence: "Ich gehe zur Arbeit.", exampleArabic: "أنا ذاهب إلى العمل." },
      { german: "der Kollege / die Kollegin", arabic: "الزميل / الزميلة", phonetic: "دير كوليغه / دي كوليغين", article: "der", exampleSentence: "Meine Kollegen sind sehr nett.", exampleArabic: "زملائي لطفاء جداً." },
      { german: "arbeitslos", arabic: "عاطل عن العمل", phonetic: "أربايتس لوس", exampleSentence: "Er sucht eine Stelle.", exampleArabic: "هو يبحث عن وظيفة." },
    ],
    readingPassage: {
      german: "Stefan ist Informatiker. Er arbeitet bei einer großen Firma in München. Seine Arbeitszeiten sind flexibel. Er arbeitet oft im Homeoffice und programmiert Websites.",
      arabic: "شتيفان متخصص في تكنولوجيا المعلومات. يعمل في شركة كبيرة في ميونخ. أوقات عمله مرنة. يعمل كثيراً من المنزل ويبرمج مواقع الإنترنت.",
      questions: [
        {
          question: "Was ist Stefans Beruf?",
          options: ["Arzt", "Lehrer", "Informatiker", "Verkäufer"],
          answer: "Informatiker",
          explanation: "يذكر النص: 'Stefan ist Informatiker'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich arbeite ___ Verkäufer bei Rewe.",
        options: ["als", "wie", "bei", "für"],
        answer: "als",
        explanation: "نستخدم als مع المسمى الوظيفي (als Verkäufer).",
      },
    ],
  },
  {
    id: "a1_2_8",
    level: "A1.2",
    number: 8,
    titleArabic: "الهوايات والأنشطة",
    titleGerman: "Hobbys und Freizeit",
    descriptionArabic: "التعبير عما تحب فعله في وقت الفراغ باستخدام gerne و lieber و am liebsten.",
    grammarExplanation:
      "نستخدم كلمة gerne بعد الفعل للتعبير عن حبك لفعل شيء: Ich lese gerne (أحب القراءة). للمقارنة: lieber (أفضل)، am liebsten (أفضل شيء).",
    grammarRules: [
      {
        rule: "موقع gerne في الجملة",
        explanation: "تأتي gerne بعد الفعل المصرف مباشرة أو بعد المفعول به.",
        example: "Ich spiele gerne Fußball. Am Wochenende koche ich gerne.",
        exampleArabic: "أحب لعب كرة القدم. في عطلة نهاية الأسبوع أحب أن أطبخ.",
      },
    ],
    examples: [
      { german: "Was sind deine Hobbys?", arabic: "ما هي هواياتك؟", phonetic: "فاس زند داينه هوبيز" },
      { german: "Ich schwimme und reise gerne.", arabic: "أحب السباحة والسفر.", phonetic: "إش شفيمه أوند رايزه غيرنه" },
      { german: "In meiner Freizeit höre ich Musik.", arabic: "في وقت فراغي أستمع للموسيقى.", phonetic: "إن ماينر فراي تسايت هوره إش موزيك" },
    ],
    vocabulary: [
      { german: "das Hobby / die Hobbys", arabic: "الهواية / الهوايات", phonetic: "داس هوبي", article: "das", exampleSentence: "Hobbys sind wichtig zur Entspannung.", exampleArabic: "الهوايات مهمة للاسترخاء." },
      { german: "die Freizeit", arabic: "وقت الفراغ", phonetic: "دي فراي تسايت", article: "die", exampleSentence: "Was machst du in deiner Freizeit?", exampleArabic: "ماذا تفعل في وقت فراغك؟" },
      { german: "schwimmen", arabic: "يسبح", phonetic: "شفيمن", exampleSentence: "Im Sommer gehe ich schwimmen.", exampleArabic: "في الصيف أذهب للسباحة." },
    ],
    readingPassage: {
      german: "Am Wochenende hat Karim viel Freizeit. Er spielt sonntags Fußball mit seinen Freunden. Wenn das Wetter schlecht ist, bleibt er zu Hause und schaut deutsche Filme.",
      arabic: "في نهاية الأسبوع يكون لدى كريم الكثير من وقت الفراغ. يلعب أيام الأحد كرة القدم مع أصدقائه. وإذا كان الطقس سيئاً يبقى في المنزل ويشاهد أفلاماً ألمانية.",
      questions: [
        {
          question: "Was macht Karim bei schlechtem Wetter?",
          options: ["Er schwimmt", "Er schaut deutsche Filme", "Er arbeitet", "Er reist"],
          answer: "Er schaut deutsche Filme",
          explanation: "يذكر النص: 'bleibt er zu Hause und schaut deutsche Filme'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich fahre ___ Fahrrad. (أحب ركوب الدراجة)",
        options: ["gern", "gut", "viel", "oft"],
        answer: "gern",
        explanation: "gern / gerne تفيد حب واستمتاع الشخص بالنشاط.",
      },
    ],
  },
  {
    id: "a1_2_9",
    level: "A1.2",
    number: 9,
    titleArabic: "الملابس والألوان",
    titleGerman: "Kleidung und Farben",
    descriptionArabic: "مفردات الملابس (der Pullover, die Hose, das Hemd) والألوان (rot, blau, grün, schwarz, weiß).",
    grammarExplanation:
      "استخدام الأفعال tragen (يرتدي/يلبس) و anziehen (يرتدي) مع تصريف الملابس في حالة النصب Akkusativ.",
    grammarRules: [
      {
        rule: "فعل tragen القوي",
        explanation: "فعل tragen يغير حرف a إلى ä مع du و er: du trägst, er trägt.",
        example: "Er trägt eine schwarze Jacke.",
        exampleArabic: "هو يرتدي سترة سوداء.",
      },
    ],
    examples: [
      { german: "Ich trage eine Hose.", arabic: "أنا أرتدي بنطالاً.", phonetic: "إش تراجـه آينه هوزه" },
      { german: "Das Kleid steht dir gut!", arabic: "الفستان يليق بك جداً!", phonetic: "داس كلايد شتيت دير غوت" },
      { german: "Welche Farbe gefällt dir?", arabic: "أي لون يعجبك؟", phonetic: "فلخه فاربه غفيلت دير" },
    ],
    vocabulary: [
      { german: "die Hose", arabic: "البنطال", phonetic: "دي هوزه", article: "die", exampleSentence: "Die Hose passt perfekt.", exampleArabic: "البنطال يناسبني تماماً." },
      { german: "das Hemd", arabic: "القميص", phonetic: "داس هيمد", article: "das", exampleSentence: "Ein weißes Hemd.", exampleArabic: "قميص أبيض." },
      { german: "die Schuhe", arabic: "الأحذية", phonetic: "دي شوهه", article: "die", exampleSentence: "Bequeme Schuhe.", exampleArabic: "أحذية مريحة." },
      { german: "schwarz / weiß", arabic: "أسود / أبيض", phonetic: "شفارتس / فايس", exampleSentence: "Schwarz und weiß.", exampleArabic: "أسود وأبيض." },
    ],
    readingPassage: {
      german: "Heute gehe ich shoppen. Ich brauche warme Kleidung für den Winter: eine dicke Winterjacke, einen Schal und feste Winterschuhe.",
      arabic: "اليوم سأذهب للتسوق. أحتاج ملابس دافئة للشتاء: سترة شتوية سميكة، ووشاحاً، وأحذية شتوية متينة.",
      questions: [
        {
          question: "Für welche Jahreszeit kauft die Person Kleidung?",
          options: ["Sommer", "Winter", "Frühling", "Herbst"],
          answer: "Winter",
          explanation: "يذكر النص: 'für den Winter'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er ___ heute einen blauen Pullover. (tragen مع er)",
        options: ["tragt", "trägt", "trage", "tragen"],
        answer: "trägt",
        explanation: "مع er يتحول الفعل إلى trägt بـ Umlaut.",
      },
    ],
  },
  {
    id: "a1_2_10",
    level: "A1.2",
    number: 10,
    titleArabic: "الطقس والمناخ",
    titleGerman: "Das Wetter",
    descriptionArabic: "وصف حالة الطقس ودرجات الحرارة باستخدام es ist / es regnet / die Sonne scheint.",
    grammarExplanation:
      "نستخدم الضمير غير الشخصي es مع الطقس: Es regnet (تمطر)، Es schneit (تثلج)، Es ist sonnig (الجو مشمس)، Es ist kalt/warm (الجو بارد/دافئ).",
    grammarRules: [
      {
        rule: "تراكيب جمل الطقس",
        explanation: "Wie ist das Wetter heute? -> Es ist schön / Es ist bewölkt / Die Sonne scheint / Es hat 20 Grad.",
        example: "Morgen wird es sonnig und warm.",
        exampleArabic: "غداً سيكون الجو مشمساً ودافئاً.",
      },
    ],
    examples: [
      { german: "Wie ist das Wetter heute?", arabic: "كيف الطقس اليوم؟", phonetic: "في إست داس فيتر هويته" },
      { german: "Es regnet den ganzen Tag.", arabic: "إنها تمطر طوال اليوم.", phonetic: "إس ريغنت دين غانتسن تاك" },
      { german: "Die Sonne scheint hell.", arabic: "الشمس تشرق ساطعة.", phonetic: "دي زونه شاينت هل" },
    ],
    vocabulary: [
      { german: "das Wetter", arabic: "الطقس", phonetic: "داس فيتر", article: "das", exampleSentence: "Das Wetter ist herrlich.", exampleArabic: "الطقس رائع." },
      { german: "der Regen", arabic: "المطر", phonetic: "دير ريغن", article: "der", exampleSentence: "Ich mag den Regen.", exampleArabic: "أنا أحب المطر." },
      { german: "der Schnee", arabic: "الثلج", phonetic: "دير شنيه", article: "der", exampleSentence: "Überall liegt Schnee.", exampleArabic: "الثلج في كل مكان." },
      { german: "der Wind", arabic: "الرياح", phonetic: "دير فيند", article: "der", exampleSentence: "Starker Wind.", exampleArabic: "رياح قوية." },
    ],
    readingPassage: {
      german: "Der Wetterbericht für Deutschland: Im Norden ist es windig und es regnet. Im Süden ist es sonnig bei maximal 22 Grad. Ein schöner Frühlingstag!",
      arabic: "تقرير الطقس لألمانيا: في الشمال الجو عاصف وممطر. في الجنوب الجو مشمس مع درجة حرارة عظمى تصل إلى 22 درجة. يوم ربيعي جميل!",
      questions: [
        {
          question: "Wie ist das Wetter im Süden?",
          options: ["Es schneit", "Es ist sonnig", "Es ist stürmisch", "Es regnet"],
          answer: "Es ist sonnig",
          explanation: "يذكر النص: 'Im Süden ist es sonnig'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Heute ___ es stark.",
        options: ["regnet", "regnen", "geregnet", "regne"],
        answer: "regnet",
        explanation: "مع الضمير es يصرف الفعل إلى regnet.",
      },
    ],
  },
  {
    id: "a1_2_11",
    level: "A1.2",
    number: 11,
    titleArabic: "الأفعال المنفصلة",
    titleGerman: "Trennbare Verben",
    descriptionArabic: "الأفعال ذات البوادئ المنفصلة (aufstehen, einkaufen, anrufen) وموقع البادئة في نهاية الجملة تماماً.",
    grammarExplanation:
      "تحتوي الأفعال المنفصلة على بادئة (مثل auf-, an-, ein-, mit-, ab-, aus-). في الجملة الحاضرة، يصرف أصل الفعل ويوضع في المركز 2، بينما تنفصل البادئة وتذهب إلى آخر كلمة في الجملة تماماً (Satzende)!",
    grammarRules: [
      {
        rule: "قاعدة القوس الفعلي (Satzklammer)",
        explanation: "الفعل المصرف في المركز 2 + الفاعل وبقية الجملة + البادئة في نهاية الجملة.",
        example: "Ich stehe jeden Morgen um 6 Uhr auf.",
        exampleArabic: "أنا أستيقظ كل صباح في السادسة تماماً.",
      },
    ],
    examples: [
      { german: "Ich kaufe im Supermarkt ein.", arabic: "أنا أتسوق في السوبرماركت.", phonetic: "إش كاوغه إم زوبرماركت آين" },
      { german: "Er ruft seine Mutter an.", arabic: "هو يتصل بأمه هاتفياً.", phonetic: "إير روفت زاينه موتر آن" },
      { german: "Wir fangen jetzt an.", arabic: "نحن نبدأ الآن.", phonetic: "فير فانغن يتست آن" },
    ],
    vocabulary: [
      { german: "anrufen", arabic: "يتصل هاتفياً", phonetic: "آن روفن", exampleSentence: "Ruf mich bitte an!", exampleArabic: "اتصل بي هاتفياً من فضلك!" },
      { german: "einkaufen", arabic: "يتسوق", phonetic: "آين كاوفر", exampleSentence: "Wann kaufst du ein?", exampleArabic: "متى تتسوق؟" },
      { german: "aufstehen", arabic: "ينهض / يستيقظ", phonetic: "أوف شتين", exampleSentence: "Steh bitte auf!", exampleArabic: "استيقظ من فضلك!" },
      { german: "fernsehen", arabic: "يشاهد التلفاز", phonetic: "فيرن زين", exampleSentence: "Er sieht am Abend fern.", exampleArabic: "هو يشاهد التلفاز في المساء." },
    ],
    readingPassage: {
      german: "Lisa hat einen vollen Tag. Sie steht um 6:30 Uhr auf. Um 16 Uhr kauft sie im Supermarkt ein. Am Abend ruft sie ihre Freundin an und sieht ein bisschen fern.",
      arabic: "لدى ليزا يوم حافل. تستيقظ في الساعة 6:30. في الساعة 16 تتسوق في السوبرماركت. في المساء تتصل بصديقتها وتشاهد التلفاز قليلاً.",
      questions: [
        {
          question: "Was macht Lisa um 16 Uhr?",
          options: ["Sie steht auf", "Sie kauft ein", "Sie sieht fern", "Sie schläft"],
          answer: "Sie kauft ein",
          explanation: "يذكر النص: 'kauft sie im Supermarkt ein'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich rufe dich morgen ___.",
        options: ["an", "auf", "ein", "aus"],
        answer: "an",
        explanation: "فعل الاتصال هو anrufen، والبادئة هي an.",
      },
    ],
  },
  {
    id: "a1_2_12",
    level: "A1.2",
    number: 12,
    titleArabic: "أفعال الكيفية Modalverben",
    titleGerman: "Modalverben (können, müssen, wollen, dürfen, möchten)",
    descriptionArabic: "الأفعال المساعدة التي تعبر عن الاستطاعة، الوجوب، الإرادة، والسماح، ووضع الفعل الرئيسي في المصدر في النهاية.",
    grammarExplanation:
      "تأتي أفعال الكيفية في المركز 2 مصرفاً، وترسل الفعل الأساسي في صيغة المصدر (Infinitiv) إلى نهاية الجملة تماماً!",
    grammarRules: [
      {
        rule: "معاني Modalverben وتصريفها",
        explanation: "können (يستطيع - قدرة/إمكانية)، müssen (يجب - إلزام)، wollen (يريد - نية قوية)، dürfen (يسمح له - إذن)، möchten (يود/يرغب - طلب مهذب). الضمير ich و er/sie/es لهما نفس التصريف دائماً بدون لاحقة! (ich kann, er kann / ich muss, er muss).",
        example: "Ich kann gut Deutsch sprechen. Du musst heute lernen.",
        exampleArabic: "أستطيع التحدث بالألمانية جيداً. يجب أن تدرس اليوم.",
      },
    ],
    examples: [
      { german: "Ich kann schwimmen.", arabic: "أنا أستطيع السباحة.", phonetic: "إش كان شفيمن" },
      { german: "Wir müssen pünktlich sein.", arabic: "يجب أن نكون منضبطين بالمواعيد.", phonetic: "فير موسن بونكتليش زاين" },
      { german: "Hier darf man nicht rauchen.", arabic: "هنا غير مسموح بالتدخين.", phonetic: "هير دارف مان نيشت راوخن" },
      { german: "Ich möchte einen Kaffee trinken.", arabic: "أود أن أشرب قهوة.", phonetic: "إش موشته آينن كافيه ترينكن" },
    ],
    vocabulary: [
      { german: "die Erlaubnis", arabic: "الإذن / السماح", phonetic: "دي إيرلاوبنيس", article: "die", exampleSentence: "Darf ich hinein?", exampleArabic: "هل يسمح لي بالدخول؟" },
      { german: "die Pflicht", arabic: "الواجب / الإلزام", phonetic: "دي بفليشت", article: "die", exampleSentence: "Das ist meine Pflicht.", exampleArabic: "هذا واجبي." },
    ],
    readingPassage: {
      german: "Im Krankenhaus muss man leise sein. Man darf hier nicht laut telefonieren. Aber man kann im Wartezimmer Tee trinken. Patienten müssen sich erholen.",
      arabic: "في المستشفى يجب أن يكون المرء هادئاً. لا يُسمح هنا بالتحدث في الهاتف بصوت عالٍ. لكن يمكن للمرء شرب الشاي في غرفة الانتظار. يجب على المرضى أن يستريحوا.",
      questions: [
        {
          question: "Was darf man im Krankenhaus nicht machen?",
          options: ["Tee trinken", "Laut telefonieren", "Leise sein", "Warten"],
          answer: "Laut telefonieren",
          explanation: "يذكر النص: 'Man darf hier nicht laut telefonieren'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er ___ sehr gut Klavier spielen.",
        options: ["kann", "können", "kannst", "könnt"],
        answer: "kann",
        explanation: "مع er يأخذ فعل können التصريف kann.",
      },
    ],
  },
  {
    id: "a1_2_13",
    level: "A1.2",
    number: 13,
    titleArabic: "حالة النصب Akkusativ",
    titleGerman: "Der Akkusativ (der -> den)",
    descriptionArabic: "المفعول به المباشر في الألمانية، وتغير أداة المذكر فقط من der إلى den و ein إلى einen و kein إلى keinen.",
    grammarExplanation:
      "في حالة النصب (Akkusativ)، تتغير أدوات المذكر فقط! المذكر: der -> den, ein -> einen, kein -> keinen, mein -> meinen. أما المؤنث (die/eine)، والمحايد (das/ein)، والجمع (die/keine) فتبقى تماماً كما هي!",
    grammarRules: [
      {
        rule: "تغير المذكر في Akkusativ",
        explanation: "der Tisch -> Ich kaufe den Tisch. ein Apfel -> Ich esse einen Apfel.",
        example: "Ich habe einen Bruder und eine Schwester.",
        exampleArabic: "لدي أخ واحد وأخت واحدة.",
      },
    ],
    examples: [
      { german: "Ich suche den Schlüssel.", arabic: "أنا أبحث عن المفتاح (der Schlüssel -> den).", phonetic: "إش زوخه دين شلوسل" },
      { german: "Er trinkt einen Saft.", arabic: "هو يشرب عصيراً (der Saft -> einen).", phonetic: "إير ترينكت آينن زافت" },
      { german: "Wir haben ein Auto und eine Wohnung.", arabic: "لدينا سيارة وشقة (لا تغيير للمحايد والمؤنث).", phonetic: "فير هابن آين أوتو أوند آينه فونونغ" },
    ],
    vocabulary: [
      { german: "der Schlüssel", arabic: "المفتاح", phonetic: "دير شلوسل", article: "der", exampleSentence: "Ich habe meinen Schlüssel verloren.", exampleArabic: "فقدت مفتاحي." },
      { german: "der Koffer", arabic: "حقيبة السفر", phonetic: "دير كوفر", article: "der", exampleSentence: "Ich packe den Koffer.", exampleArabic: "أنا أحزم الحقيبة." },
    ],
    readingPassage: {
      german: "Yassin packt seine Sachen für die Reise. Er nimmt einen warmen Mantel, einen Pullover und ein Buch mit. Er sucht noch seinen Pass.",
      arabic: "يحزم ياسين أغراضه للسفر. يأخذ معه معطفاً دافئاً، وسترة صوفية، وكتاباً. ولا يزال يبحث عن جواز سفره.",
      questions: [
        {
          question: "Was sucht Yassin noch?",
          options: ["Den Mantel", "Seinen Pass", "Das Buch", "Den Pullover"],
          answer: "Seinen Pass",
          explanation: "يذكر النص: 'Er sucht noch seinen Pass'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich trinke ___ Kaffee. (der Kaffee)",
        options: ["der", "den", "dem", "das"],
        answer: "den",
        explanation: "في حالة Akkusativ تتحول أداة المذكر der إلى den.",
      },
    ],
  },
  {
    id: "a1_2_14",
    level: "A1.2",
    number: 14,
    titleArabic: "أساسيات حالة المجرور Dativ",
    titleGerman: "Dativ Basics (dem, der, dem, den)",
    descriptionArabic: "حالة المجرور مع الأفعال التي تطلب Dativ مثل helfen, danken, gefallen وحروف الجر mit, bei, aus, nach, zu.",
    grammarExplanation:
      "في حالة Dativ: المذكر der والمحايد das يصبحان dem (einem/keinem). المؤنث die تصبح der (einer/keiner). الجمع die يصبح den + إضافة n لاسم الجمع (den Kindern).",
    grammarRules: [
      {
        rule: "أدوات Dativ",
        explanation: "المذكر: dem, المحايد: dem, المؤنث: der, الجمع: den + n.",
        example: "Ich helfe dem Mann, der Frau und den Kindern.",
        exampleArabic: "أنا أساعد الرجل، والمرأة، والأطفال.",
      },
      {
        rule: "أفعال Dativ الشهيرة",
        explanation: "helfen (يساعد)، danken (يشكر)، gefallen (يعجب)، schmecken (يعجب طعمه)، gehören (يخص/ينتمي لـ).",
        example: "Das Buch gehört mir. Ich helfe dir.",
        exampleArabic: "الكتاب يخصني (لي). أنا أساعدك.",
      },
    ],
    examples: [
      { german: "Ich helfe dem Vater.", arabic: "أنا أساعد الأب (der -> dem).", phonetic: "إش هلفه ديم فاتر" },
      { german: "Ich danke der Lehrerin.", arabic: "أنا أشكر المعلمة (die -> der).", phonetic: "إش دانكه دير ليررين" },
      { german: "Das Kleid gefällt mir.", arabic: "الفستان يعجبني.", phonetic: "داس كلايد غفيلت مير" },
    ],
    vocabulary: [
      { german: "helfen", arabic: "يساعد", phonetic: "هلفن", exampleSentence: "Kannst du mir helfen?", exampleArabic: "هل يمكنك مساعدتي؟" },
      { german: "danken", arabic: "يشكر", phonetic: "دانكن", exampleSentence: "Ich danke Ihnen sehr.", exampleArabic: "أشكر حضرتكم جداً." },
      { german: "gefallen", arabic: "ينال إعجاب", phonetic: "غفالن", exampleSentence: "Wie gefällt dir Berlin?", exampleArabic: "كيف تنال برلين إعجابك؟" },
    ],
    readingPassage: {
      german: "Omar hilft seinem Freund beim Umzug. Sie tragen die schweren Kisten in die neue Wohnung. Der Freund dankt ihm von ganzem Herzen.",
      arabic: "يساعد عمر صديقه في الانتقال إلى المنزل الجديد. يحملان الصناديق الثقيلة إلى الشقة الجديدة. الصديق يشكره من كل قلبه.",
      questions: [
        {
          question: "Wem hilft Omar?",
          options: ["Seinem Bruder", "Seinem Freund", "Dem Lehrer", "Niemandem"],
          answer: "Seinem Freund",
          explanation: "فعل helfen يأخذ Dativ: 'seinem Freund'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Kannst du ___ bitte helfen? (أنا في حالة Dativ)",
        options: ["mich", "mir", "ich", "mein"],
        answer: "mir",
        explanation: "الضمير ich في حالة Dativ بعد فعل helfen يصبح mir.",
      },
    ],
  },
  {
    id: "a1_2_15",
    level: "A1.2",
    number: 15,
    titleArabic: "حروف الجر Präpositionen",
    titleGerman: "Präpositionen mit Akkusativ und Dativ",
    descriptionArabic: "حروف الجر التي تأخذ دائماً Dativ (aus, bei, mit, nach, seit, von, zu) والتي تأخذ Akkusativ (für, ohne, durch, gegen, um).",
    grammarExplanation:
      "حروف جر تأخذ Dativ دائماً: aus, bei, mit, nach, seit, von, zu. حروف جر تأخذ Akkusativ دائماً: für, ohne, durch, gegen, um.",
    grammarRules: [
      {
        rule: "أمثلة حروف Dativ الدائمة",
        explanation: "mit dem Bus (بالحافلة)، zum Arzt (إلى الطبيب)، beim Chef (عند المدير)، seit einem Jahr (منذ سنة).",
        example: "Ich fahre mit dem Zug nach Berlin.",
        exampleArabic: "أنا أسافر بالقطار إلى برلين.",
      },
      {
        rule: "أمثلة حروف Akkusativ الدائمة",
        explanation: "Das Geschenk ist für dich (الهدية لك)، ohne mich (بدوني).",
        example: "Das ist für meinen Bruder.",
        exampleArabic: "هذا لأخي.",
      },
    ],
    examples: [
      { german: "Ich fahre mit dem Bus.", arabic: "أسافر بالحافلة.", phonetic: "إش فاره مِت ديم بوس" },
      { german: "Ich gehe zu Fuß.", arabic: "أذهب مشياً على الأقدام.", phonetic: "إش غيه تسو فوس" },
      { german: "Das Geschenk ist für dich.", arabic: "الهدية من أجلك.", phonetic: "داس غشنك إست فور ديش" },
    ],
    vocabulary: [
      { german: "der Bus", arabic: "الحافلة / الباص", phonetic: "دير بوس", article: "der", exampleSentence: "Der Bus kommt pünktlich.", exampleArabic: "الباص يأتي في الموعد." },
      { german: "der Zug", arabic: "القطار", phonetic: "دير تسوغ", article: "der", exampleSentence: "Der Zug hat Verspätung.", exampleArabic: "القطار متأخر." },
      { german: "das Geschenk", arabic: "الهدية", phonetic: "داس غشنك", article: "das", exampleSentence: "Vielen Dank für das Geschenk!", exampleArabic: "شكراً جزيلاً على الهدية!" },
    ],
    readingPassage: {
      german: "Jeden Tag fährt Samir mit der U-Bahn zur Universität. Nach den Vorlesungen geht er mit seinen Freunden in die Mensa. Das Essen ist günstig für die Studenten.",
      arabic: "يسافر سمير كل يوم بالمترو إلى الجامعة. بعد المحاضرات يذهب مع أصدقائه إلى مطعم الجامعة. الطعام مناسب ورخيص للطلاب.",
      questions: [
        {
          question: "Womit fährt Samir zur Universität?",
          options: ["Mit dem Auto", "Mit dem Bus", "Mit der U-Bahn", "Zu Fuß"],
          answer: "Mit der U-Bahn",
          explanation: "يذكر النص: 'mit der U-Bahn'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich fahre ___ dem Auto zur Arbeit.",
        options: ["mit", "für", "ohne", "durch"],
        answer: "mit",
        explanation: "لوسائل النقل نستخدم حرف الجر mit + Dativ.",
      },
    ],
  },
  {
    id: "a1_2_16",
    level: "A1.2",
    number: 16,
    titleArabic: "أساسيات الماضي التام Perfekt",
    titleGerman: "Perfekt basics (haben / sein + Partizip II)",
    descriptionArabic: "صيغة الماضي الأكثر استخداماً في المحادثة الألمانية: متى نستخدم haben ومتى sein وتكوين ge-...+t.",
    grammarExplanation:
      "يتكون زمن الماضي التام (Perfekt) من: فعل مساعد (haben أو sein) في المركز الثاني مصرفاً + التصريف الثالث للفعل (Partizip II) في نهاية الجملة تماماً!",
    grammarRules: [
      {
        rule: "متى نستخدم sein ومتى haben؟",
        explanation: "نستخدم sein مع أفعال الحركة والانتقال وتغيير الحالة (fahren, gehen, kommen, aufstehen, sterben, sein, werden). نستخدم haben مع بقية الأفعال (machen, lernen, essen, trinken, kaufen).",
        example: "Ich habe Deutsch gelernt. Ich bin nach Berlin gefahren.",
        exampleArabic: "أنا تعلمت الألمانية. أنا سافرت إلى برلين.",
      },
      {
        rule: "صياغة التصريف الثالث Partizip II المنتظم",
        explanation: "ge- + أصل الفعل + -t (مثل: gemacht, gelernt, gekauft, gehört).",
        example: "Er hat eine Pizza gemacht.",
        exampleArabic: "هو صنع بيتزا.",
      },
    ],
    examples: [
      { german: "Ich habe gestern gearbeitet.", arabic: "عملت البارحة.", phonetic: "إش هابه غسترن غيه أربايتت" },
      { german: "Wir haben Deutsch gelernt.", arabic: "نحن تعلمنا الألمانية.", phonetic: "فير هابن دويتش غيليرنت" },
      { german: "Er ist nach Hause gegangen.", arabic: "هو ذهب إلى المنزل.", phonetic: "إير إست ناخ هاوزه غغانغن" },
    ],
    vocabulary: [
      { german: "gestern", arabic: "البارحة / أمس", phonetic: "غسترن", exampleSentence: "Gestern war ein schöner Tag.", exampleArabic: "أمس كان يوماً جميلاً." },
      { german: "letzte Woche", arabic: "الأسبوع الماضي", phonetic: "ليتسته فوخه", exampleSentence: "Letzte Woche habe ich die Prüfung bestanden.", exampleArabic: "الأسبوع الماضي اجتزت الامتحان." },
    ],
    readingPassage: {
      german: "Gestern hat Anna Geburtstag gefeiert. Viele Gäste sind gekommen. Sie haben zusammen Musik gehört, leckeren Kuchen gegessen und viel gelacht. Es war ein wunderbarer Tag.",
      arabic: "أمس احتفلت آنا بعيد ميلادها. أتى الكثير من الضيوف. استمعوا للموسيقى معاً، وأكلوا كعكاً لذيذاً، وضحكوا كثيراً. كان يوماً رائعاً.",
      questions: [
        {
          question: "Was hat Anna gestern gemacht?",
          options: ["Sie hat gearbeitet", "Sie hat Geburtstag gefeiert", "Sie ist gereist", "Sie war krank"],
          answer: "Sie hat Geburtstag gefeiert",
          explanation: "يذكر النص: 'Anna Geburtstag gefeiert'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich ___ gestern nach Berlin gefahren.",
        options: ["habe", "bin", "hat", "ist"],
        answer: "bin",
        explanation: "فعل fahren يعبر عن حركة وانتقال لذلك يأخذ sein (ich bin gefahren).",
      },
    ],
  },
  {
    id: "a1_2_17",
    level: "A1.2",
    number: 17,
    titleArabic: "الأفعال القوية وتصريفها",
    titleGerman: "Starke Verben (Vokalwechsel)",
    descriptionArabic: "الأفعال القوية التي يتغير حرف العلة في جذعها في الحاضر مع du و er/sie/es (e->i, e->ie, a->ä).",
    grammarExplanation:
      "تسمى الأفعال القوية لأن جذرها يتغير صوتياً في الحاضر مع الضمائر du و er/sie/es فقط (بينما تبقى مع wir و ihr و sie منتظمة).",
    grammarRules: [
      {
        rule: "أنماط التغيير الصوتي",
        explanation: "1) من e إلى i: sprechen -> du sprichst, helfen -> du hilfst. 2) من e إلى ie: lesen -> du liest, sehen -> du siehst. 3) من a إلى ä: fahren -> du fährst, schlafen -> du schläfst.",
        example: "Du sprichst sehr schnell. Er liest die Zeitung.",
        exampleArabic: "أنت تتحدث بسرعة كبيرة. هو يقرأ الجريدة.",
      },
    ],
    examples: [
      { german: "Er fährt ein schnelles Auto.", arabic: "هو يقود سيارة سريعة.", phonetic: "إير فيرت آين شنلس أوتو" },
      { german: "Sie liest einen Roman.", arabic: "هي تقرأ رواية.", phonetic: "زي ليست آينن رومان" },
      { german: "Du sprichst fantastisch Deutsch!", arabic: "أنت تتحدث الألمانية بشكل رائع!", phonetic: "دو شبرخست فانتاستيش دويتش" },
    ],
    vocabulary: [
      { german: "die Zeitung", arabic: "الجريدة / الصحيفة", phonetic: "دي تسايتونغ", article: "die", exampleSentence: "Ich lese morgens die Zeitung.", exampleArabic: "أقرأ الجريدة صباحاً." },
      { german: "der Roman", arabic: "الرواية", phonetic: "دير رومان", article: "der", exampleSentence: "Ein spannender Roman.", exampleArabic: "رواية مشوقة." },
    ],
    readingPassage: {
      german: "Mein Vater liest jeden Morgen die Zeitung beim Frühstück. Mein Bruder schläft am Wochenende sehr lange und meine Schwester fährt gerne mit dem Fahrrad durch den Park.",
      arabic: "يقرأ أبي الجريدة كل صباح أثناء الإفطار. ينام أخي في عطلة نهاية الأسبوع لوقت طويل جداً، وتحب أختي ركوب الدراجة عبر الحديقة.",
      questions: [
        {
          question: "Wer liest morgens die Zeitung?",
          options: ["Der Bruder", "Die Schwester", "Der Vater", "Niemand"],
          answer: "Der Vater",
          explanation: "يذكر النص: 'Mein Vater liest jeden Morgen die Zeitung'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Du ___ sehr gut Deutsch. (sprechen)",
        options: ["sprichst", "sprechst", "spricht", "sprechen"],
        answer: "sprichst",
        explanation: "فعل sprechen يتحول مع du إلى sprichst (e -> i).",
      },
    ],
  },
  {
    id: "a1_2_18",
    level: "A1.2",
    number: 18,
    titleArabic: "مراجعة شاملة لاختبار A1.2",
    titleGerman: "Wiederholung und Prüfungsvorbereitung A1.2",
    descriptionArabic: "مراجعة تلخيصية شاملة لجميع قواعد ومفردات A1 وتجهيز المتعلم لاختبار المستوى الكامل والانتقال إلى A2.",
    grammarExplanation:
      "في هذا الدرس نربط كافة المهارات السابقة: الساعات، الروتين، المهن، التسوق، Modalverben، Akkusativ، Dativ، والماضي Perfekt في محادثات ونصوص واقعية.",
    grammarRules: [
      {
        rule: "أهم نصائح اختبار A1",
        explanation: "ركز على الموقع الثاني للفعل في الجملة، والبادئة المنفصلة في النهاية، وتصريف Modalverben، ونهايات الأدوات في Akkusativ و Dativ.",
        example: "Ich habe die A1-Prüfung erfolgreich bestanden!",
        exampleArabic: "لقد اجتزت امتحان A1 بنجاح!",
      },
    ],
    examples: [
      { german: "Ich freue mich auf das A2-Niveau!", arabic: "أنا متطلع ومتحمس لمستوى A2!", phonetic: "إش فرويه ميش أوف داس آ تسفاي نيفو" },
      { german: "Ich verstehe schon sehr viel.", arabic: "أنا أفهم الكثير بالفعل الآن.", phonetic: "إش فيرشتيه شون زير فيل" },
    ],
    vocabulary: [
      { german: "die Prüfung", arabic: "الامتحان / الاختبار", phonetic: "دي بروفونغ", article: "die", exampleSentence: "Viel Erfolg bei der Prüfung!", exampleArabic: "أتمنى لك التوفيق والنجاح في الامتحان!" },
      { german: "das Zertifikat", arabic: "الشهادة", phonetic: "داس تسيرتيفيكات", article: "das", exampleSentence: "Ich habe mein Zertifikat bekommen.", exampleArabic: "حصلت على شهادتي." },
    ],
    readingPassage: {
      german: "Herzlichen Glückwunsch! Du hast das gesamte A1-Niveau erfolgreich abgeschlossen. Jetzt kannst du dich vorstellen, nach dem Weg fragen, einkaufen, über deine Familie und deinen Beruf sprechen und einfache Briefe schreiben. Weiter so zu A2!",
      arabic: "ألف مبروك! لقد أنهيت مستوى A1 بالكامل بنجاح. الآن تستطيع التعريف بنفسك، والسؤال عن الطريق، والتسوق، والحديث عن عائلتك ومهنتك وكتابة رسائل بسيطة. واصل التقدم نحو A2!",
      questions: [
        {
          question: "Welches Niveau beginnt als Nächstes?",
          options: ["A1.1", "A1.2", "A2.1", "B2"],
          answer: "A2.1",
          explanation: "بعد إتمام A1.2 ننتقل مباشرة إلى A2.1.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich ___ jetzt bereit für A2!",
        options: ["bin", "habe", "wird", "seid"],
        answer: "bin",
        explanation: "Ich bin bereit (أنا جاهز).",
      },
    ],
  },
];
