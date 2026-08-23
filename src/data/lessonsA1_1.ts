import { Lesson } from "../types";

export const lessonsA1_1: Lesson[] = [
  {
    id: "a1_1_1",
    level: "A1.1",
    number: 1,
    titleArabic: "التحية والتوديع",
    titleGerman: "Begrüßung und Verabschiedung",
    descriptionArabic: "تعلم عبارات التحية والترحيب الرسمية وغير الرسمية وكيفية توديع الأشخاص باللغة الألمانية.",
    grammarExplanation:
      "في اللغة الألمانية، تختلف عبارات التحية بحسب الوقت من اليوم ومدى رسمية الموقف (رسمي مع الغرباء وكبار السن، أو غير رسمي مع الأصدقاء والعائلة).",
    grammarRules: [
      {
        rule: "التحيات الرسمية حسب الوقت",
        explanation: "نستخدم Guten Morgen صباحاً حتى 11:00، Guten Tag طوال النهار، وGuten Abend في المساء.",
        example: "Guten Tag, Herr Müller!",
        exampleArabic: "يوم سعيد (مرحباً)، سيد مولر!",
      },
      {
        rule: "التحيات غير الرسمية والتوديع",
        explanation: "Hallo للتحية الودية، Tschüss للوداع غير الرسمي، وAuf Wiedersehen للوداع الرسمي.",
        example: "Hallo Ali! Tschüss!",
        exampleArabic: "أهلاً علي! إلى اللقاء!",
      },
    ],
    examples: [
      { german: "Guten Morgen", arabic: "صباح الخير", phonetic: "غوتن مورغن" },
      { german: "Guten Tag", arabic: "طاب يومك / مرحباً", phonetic: "غوتن تاك" },
      { german: "Guten Abend", arabic: "مساء الخير", phonetic: "غوتن آبند" },
      { german: "Gute Nacht", arabic: "تصبح على خير", phonetic: "غوتِه ناخت" },
      { german: "Auf Wiedersehen", arabic: "إلى اللقاء (رسمي)", phonetic: "أوف فيدرزين" },
      { german: "Tschüss", arabic: "مع السلامة (وداع ودي)", phonetic: "تشوس" },
    ],
    vocabulary: [
      { german: "Hallo", arabic: "أهلاً / مرحباً", phonetic: "هالو", exampleSentence: "Hallo, wie geht's?", exampleArabic: "أهلاً، كيف الحال؟" },
      { german: "Guten Morgen", arabic: "صباح الخير", phonetic: "غوتن مورغن", exampleSentence: "Guten Morgen allerseits!", exampleArabic: "صباح الخير للجميع!" },
      { german: "Guten Tag", arabic: "طاب يومك", phonetic: "غوتن تاك", exampleSentence: "Guten Tag, Frau Schmidt!", exampleArabic: "طاب يومك سيدة شميت!" },
      { german: "Auf Wiedersehen", arabic: "إلى اللقاء", phonetic: "أوف فيدرزين", exampleSentence: "Auf Wiedersehen, bis morgen!", exampleArabic: "إلى اللقاء، حتى الغد!" },
      { german: "Tschüss", arabic: "باي / مع السلامة", phonetic: "تشوس", exampleSentence: "Tschüss, bis bald!", exampleArabic: "مع السلامة، أراك قريباً!" },
      { german: "Bis bald", arabic: "أراك قريباً", phonetic: "بس بالد", exampleSentence: "Bis bald, mein Freund!", exampleArabic: "أراك قريباً يا صديقي!" },
      { german: "Danke", arabic: "شكراً", phonetic: "دانكه", exampleSentence: "Danke schön!", exampleArabic: "شكراً جزيلاً!" },
      { german: "Bitte", arabic: "عفواً / تفضل / رجاءً", phonetic: "بِتّه", exampleSentence: "Bitte sehr!", exampleArabic: "عفواً / على الرحب والسعة!" },
    ],
    readingPassage: {
      german: "Guten Tag! Ich heiße Thomas. Morgens sage ich 'Guten Morgen'. Am Nachmittag sage ich 'Guten Tag'. Am Abend sage ich 'Guten Abend'. Wenn ich gehe, sage ich 'Auf Wiedersehen' oder 'Tschüss'.",
      arabic: "طاب يومكم! اسمي توماس. في الصباح أقول 'صباح الخير'. في فترة ما بعد الظهر أقول 'طاب يومكم'. في المساء أقول 'مساء الخير'. وعندما أغادر أقول 'إلى اللقاء' أو 'مع السلامة'.",
      questions: [
        {
          question: "Was sagt Thomas am Morgen?",
          options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Tschüss"],
          answer: "Guten Morgen",
          explanation: "في الصباح (am Morgen) نقول دائماً 'Guten Morgen'.",
        },
        {
          question: "Was sagt Thomas, wenn er geht?",
          options: ["Guten Tag", "Hallo", "Auf Wiedersehen", "Guten Morgen"],
          answer: "Auf Wiedersehen",
          explanation: "عند المغادرة والوداع نقول 'Auf Wiedersehen' أو 'Tschüss'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "كيف تقول 'صباح الخير' بالألمانية؟",
        options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Auf Wiedersehen"],
        answer: "Guten Morgen",
        explanation: "Guten Morgen تعني صباح الخير وتستخدم حتى فترة الظهيرة.",
      },
      {
        question: "ما هي العبارة الرسمية لوداع شخص ما؟",
        options: ["Tschüss", "Hallo", "Auf Wiedersehen", "Guten Tag"],
        answer: "Auf Wiedersehen",
        explanation: "Auf Wiedersehen هي عبارة الوداع الرسمية بالألمانية.",
      },
    ],
  },
  {
    id: "a1_1_2",
    level: "A1.1",
    number: 2,
    titleArabic: "التعريف بالنفس",
    titleGerman: "Sich vorstellen",
    descriptionArabic: "كيف تقدم نفسك، وتذكر اسمك، وعمرك، وبلدك، ومدينتك، ولغتك.",
    grammarExplanation:
      "للتعريف بالنفس نستخدم الأفعال الأساسية: heißen (يدعى/يسمى)، sein (يكون)، kommen (يأتي)، wohnen (يسكن)، sprechen (يتحدث).",
    grammarRules: [
      {
        rule: "تصريف الفعل مع الضمير 'Ich' (أنا)",
        explanation: "مع الضمير Ich ينتهي تصريف الفعل في الحاضر بالحرف -e دائماً تقريباً.",
        example: "Ich heiße Sarah. Ich komme aus Ägypten.",
        exampleArabic: "اسمي سارة. أنا قادمة من مصر.",
      },
      {
        rule: "السؤال عن الاسم والمكان",
        explanation: "Wie heißen Sie? (ما اسم حضرتك؟) - Woher kommen Sie? (من أين حضرتك؟) - Wo wohnen Sie? (أين تسكن حضرتك؟)",
        example: "Wie heißt du? - Ich heiße Omar.",
        exampleArabic: "ما اسمك؟ - أنا اسمي عمر.",
      },
    ],
    examples: [
      { german: "Ich heiße Omar.", arabic: "اسمي عمر.", phonetic: "إش هايسه عمر" },
      { german: "Mein Name ist Sara.", arabic: "اسمي سارة.", phonetic: "ماين نامه إست سارة" },
      { german: "Ich komme aus Syrien.", arabic: "أنا من سوريا.", phonetic: "إش كُمّه أوس زوريين" },
      { german: "Ich wohne in Berlin.", arabic: "أنا أسكن في برلين.", phonetic: "إش فونه إن برلين" },
      { german: "Ich spreche Arabisch und Deutsch.", arabic: "أنا أتحدث العربية والألمانية.", phonetic: "إش شبرشه أرابيش أوند دويتش" },
    ],
    vocabulary: [
      { german: "heißen", arabic: "يُدعى / يُسمى", phonetic: "هايسن", exampleSentence: "Wie heißen Sie?", exampleArabic: "ما اسم حضرتك؟" },
      { german: "der Name", arabic: "الاسم", phonetic: "دير نامه", article: "der", exampleSentence: "Mein Name ist Karim.", exampleArabic: "اسمي كريم." },
      { german: "wohnen", arabic: "يسكن", phonetic: "فونن", exampleSentence: "Ich wohne in München.", exampleArabic: "أسكن في ميونخ." },
      { german: "kommen", arabic: "يأتي / ينحدر من", phonetic: "كومن", exampleSentence: "Woher kommst du?", exampleArabic: "من أين أنت؟" },
      { german: "sprechen", arabic: "يتحدث", phonetic: "شبرشن", exampleSentence: "Ich spreche gut Deutsch.", exampleArabic: "أتحدث الألمانية جيداً." },
      { german: "das Land", arabic: "البلد", phonetic: "داس لاند", article: "das", exampleSentence: "Aus welchem Land kommst du?", exampleArabic: "من أي بلد أنت؟" },
      { german: "die Stadt", arabic: "المدينة", phonetic: "دي شتات", article: "die", exampleSentence: "Berlin ist eine große Stadt.", exampleArabic: "برلين مدينة كبيرة." },
      { german: "die Sprache", arabic: "اللغة", phonetic: "دي شبراخه", article: "die", exampleSentence: "Deutsch ist eine schöne Sprache.", exampleArabic: "الألمانية لغة جميلة." },
    ],
    readingPassage: {
      german: "Hallo! Mein Name ist Rami. Ich bin 25 Jahre alt und komme aus Jordanien. Jetzt wohne ich in Frankfurt. Ich lerne Deutsch und spreche auch Arabisch und Englisch.",
      arabic: "مرحباً! اسمي رامي. عمري 25 سنة وأنا من الأردن. الآن أسكن في فرانكفورت. أنا أتعلم الألمانية وأتحدث أيضاً العربية والإنجليزية.",
      questions: [
        {
          question: "Woher kommt Rami?",
          options: ["Aus Deutschland", "Aus Jordanien", "Aus Ägypten", "Aus Syrien"],
          answer: "Aus Jordanien",
          explanation: "يذكر النص بوضوح: 'Ich komme aus Jordanien'.",
        },
        {
          question: "Wo wohnt Rami jetzt?",
          options: ["In Berlin", "In Frankfurt", "In Amman", "In Wien"],
          answer: "In Frankfurt",
          explanation: "يذكر النص: 'Jetzt wohne ich in Frankfurt'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich ___ aus Marokko.",
        options: ["komme", "kommst", "kommt", "kommen"],
        answer: "komme",
        explanation: "مع الضمير Ich يأخذ الفعل اللاحقة -e فيصبح komme.",
      },
      {
        question: "Wie ___ du?",
        options: ["heiße", "heißt", "heißen", "heiß"],
        answer: "heißt",
        explanation: "مع الضمير du يأخذ الفعل heißen التصريف heißt.",
      },
    ],
  },
  {
    id: "a1_1_3",
    level: "A1.1",
    number: 3,
    titleArabic: "الضمائر الشخصية",
    titleGerman: "Personalpronomen",
    descriptionArabic: "الضمائر الشخصية في حالة الفاعل (Nominativ): أنا، أنت، هو، هي، هو/هي للمحايد، نحن، أنتم، هم، وحضرتك.",
    grammarExplanation:
      "الضمائر في الألمانية هي أساس بناء الجملة وتحديد تصريف الفعل المناسب.",
    grammarRules: [
      {
        rule: "جدول الضمائر الشخصية",
        explanation: "ich (أنا)، du (أنتَ/أنتِ للمفرد غير الرسمي)، er (هو)، sie (هي)، es (هو/هي للمحايد)، wir (نحن)، ihr (أنتم)، sie (هم/هن)، Sie (حضرتك/حضراتكم بصيغة الاحترام وتكتب بحرف كبير).",
        example: "Er lernt Deutsch. Wir lernen Deutsch.",
        exampleArabic: "هو يتعلم الألمانية. نحن نتعلم الألمانية.",
      },
      {
        rule: "الفرق بين sie (هي) و sie (هم) و Sie (صيغة الاحترام)",
        explanation: "sie (هي) تأخذ تصريف المفرد مثل sie lernt. أما sie (هم) و Sie (حضرتك) فتأخذان تصريف الجمع المنتهي بـ -en مثل sie lernen / Sie lernen.",
        example: "Sie lernen Deutsch, Herr Müller.",
        exampleArabic: "حضرتك تتعلم الألمانية يا سيد مولر.",
      },
    ],
    examples: [
      { german: "ich", arabic: "أنا", phonetic: "إش" },
      { german: "du", arabic: "أنتَ / أنتِ", phonetic: "دو" },
      { german: "er", arabic: "هو", phonetic: "إير" },
      { german: "sie", arabic: "هي", phonetic: "زي" },
      { german: "es", arabic: "هو / هي (للمحايد)", phonetic: "إس" },
      { german: "wir", arabic: "نحن", phonetic: "فير" },
      { german: "ihr", arabic: "أنتم", phonetic: "إير" },
      { german: "sie / Sie", arabic: "هم / حضرتك (احترام)", phonetic: "زي" },
    ],
    vocabulary: [
      { german: "lernen", arabic: "يتعلم", phonetic: "ليرنن", exampleSentence: "Wir lernen Deutsch.", exampleArabic: "نحن نتعلم الألمانية." },
      { german: "spielen", arabic: "يلعب", phonetic: "شبيلن", exampleSentence: "Er spielt Fußball.", exampleArabic: "هو يلعب كرة القدم." },
      { german: "fragen", arabic: "يسأل", phonetic: "فراغن", exampleSentence: "Ich frage den Lehrer.", exampleArabic: "أنا أسأل المعلم." },
      { german: "antworten", arabic: "يجيب", phonetic: "أنتفورتن", exampleSentence: "Sie antwortet schnell.", exampleArabic: "هي تجيب بسرعة." },
      { german: "hören", arabic: "يسمع / يستمع", phonetic: "هورن", exampleSentence: "Ihr hört Musik.", exampleArabic: "أنتم تستمعون إلى الموسيقى." },
      { german: "lesen", arabic: "يقرأ", phonetic: "ليزن", exampleSentence: "Du liest ein Buch.", exampleArabic: "أنت تقرأ كتاباً." },
    ],
    readingPassage: {
      german: "Das ist Ahmad. Er kommt aus Syrien. Das ist Mona. Sie kommt aus Ägypten. Ahmad und Mona sind Freunde. Sie lernen zusammen Deutsch. Wir lernen auch Deutsch!",
      arabic: "هذا أحمد. هو من سوريا. هذه منى. هي من مصر. أحمد ومنى صديقان. هما يتعلمان الألمانية معاً. ونحن نتعلم الألمانية أيضاً!",
      questions: [
        {
          question: "Wer kommt aus Ägypten?",
          options: ["Ahmad", "Mona", "Thomas", "Niemand"],
          answer: "Mona",
          explanation: "يذكر النص: 'Das ist Mona. Sie kommt aus Ägypten.'",
        },
        {
          question: "Was machen Ahmad und Mona?",
          options: ["Sie schlafen", "Sie lernen Deutsch", "Sie kochen", "Sie reisen"],
          answer: "Sie lernen Deutsch",
          explanation: "يذكر النص: 'Sie lernen zusammen Deutsch.'",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ lernen Deutsch. (نحن)",
        options: ["Ich", "Du", "Wir", "Er"],
        answer: "Wir",
        explanation: "الضمير 'نحن' بالألمانية هو 'Wir' ويأخذ اللاحقة -en.",
      },
      {
        question: "___ spielt Fußball. (هو)",
        options: ["Er", "Wir", "Sie (هم)", "Ich"],
        answer: "Er",
        explanation: "الضمير 'هو' بالألمانية هو 'Er'.",
      },
    ],
  },
  {
    id: "a1_1_4",
    level: "A1.1",
    number: 4,
    titleArabic: "فعل الكينونة sein",
    titleGerman: "Das Verb sein",
    descriptionArabic: "أهم فعل في اللغة الألمانية (يكون): تصريفه الكامل واستخداماته في الجمل.",
    grammarExplanation:
      "فعل sein هو فعل غير قياسي وشاذ تماماً، ويجب حفظ تصريفه مع جميع الضمائر عن ظهر قلب.",
    grammarRules: [
      {
        rule: "تصريف sein في الحاضر",
        explanation: "ich bin (أنا أكون)، du bist (أنت تكون)، er/sie/es ist (هو/هي يكون)، wir sind (نحن نكون)، ihr seid (أنتم تكونون)، sie/Sie sind (هم/حضرتك يكون).",
        example: "Ich bin müde. Du bist nett.",
        exampleArabic: "أنا متعب. أنت لطيف.",
      },
      {
        rule: "استخدامات sein",
        explanation: "يستخدم لوصف الحالة، والمهنة، والجنسية، والعمر، والصفات.",
        example: "Er ist Arzt. Sie ist 20 Jahre alt.",
        exampleArabic: "هو طبيب. هي في العشرين من عمرها.",
      },
    ],
    examples: [
      { german: "Ich bin Student.", arabic: "أنا طالب.", phonetic: "إش بن شتودنت" },
      { german: "Du bist sehr freundlich.", arabic: "أنت ودود جداً.", phonetic: "دو بست زير فرويندليش" },
      { german: "Er ist in Berlin.", arabic: "هو في برلين.", phonetic: "إير إست إن برلين" },
      { german: "Wir sind glücklich.", arabic: "نحن سعداء.", phonetic: "فير زند غلوكليش" },
      { german: "Ihr seid fleißig.", arabic: "أنتم مجتهدون.", phonetic: "إير زايد فلايسيغ" },
      { german: "Sie sind herzlich willkommen.", arabic: "أهلاً وسهلاً بحضرتكم.", phonetic: "زي زند هيرتسليش فيلكومن" },
    ],
    vocabulary: [
      { german: "müde", arabic: "تعبان / مرهق", phonetic: "ميوده", exampleSentence: "Ich bin sehr müde.", exampleArabic: "أنا متعب جداً." },
      { german: "glücklich", arabic: "سعيد", phonetic: "غلوكليش", exampleSentence: "Wir sind glücklich.", exampleArabic: "نحن سعداء." },
      { german: "fertig", arabic: "جاهز / منتهٍ", phonetic: "فيرتيش", exampleSentence: "Bist du fertig?", exampleArabic: "هل أنت جاهز؟" },
      { german: "krank", arabic: "مريض", phonetic: "كرانك", exampleSentence: "Er ist heute krank.", exampleArabic: "هو مريض اليوم." },
      { german: "gesund", arabic: "معافى / صحي", phonetic: "غزوند", exampleSentence: "Ich bin gesund.", exampleArabic: "أنا بصحة جيدة." },
      { german: "alt", arabic: "كبير في السن / قديم", phonetic: "ألت", exampleSentence: "Wie alt bist du?", exampleArabic: "كم عمرك؟" },
      { german: "jung", arabic: "شاب / صغير السن", phonetic: "يونغ", exampleSentence: "Sie ist noch jung.", exampleArabic: "هي ما زالت شابة." },
    ],
    readingPassage: {
      german: "Hallo, ich bin Lukas. Ich bin 28 Jahre alt und bin Lehrer von Beruf. Meine Frau ist Ärztin. Wir sind sehr zufrieden in Hamburg. Und wer bist du?",
      arabic: "مرحباً، أنا لوكاس. عمري 28 عاماً وأنا معلم بالمهنة. زوجتي طبيبة. نحن راضون جداً في هامبورغ. ومن أنت؟",
      questions: [
        {
          question: "Was ist Lukas von Beruf?",
          options: ["Arzt", "Lehrer", "Student", "Ingenieur"],
          answer: "Lehrer",
          explanation: "يذكر النص: 'bin Lehrer von Beruf'.",
        },
        {
          question: "Wo sind Lukas und seine Frau?",
          options: ["In Berlin", "In Hamburg", "In München", "In Köln"],
          answer: "In Hamburg",
          explanation: "يذكر النص: 'in Hamburg'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Wie alt ___ du?",
        options: ["bin", "bist", "ist", "sind"],
        answer: "bist",
        explanation: "مع الضمير du نستخدم bist من فعل sein.",
      },
      {
        question: "Wir ___ Studenten.",
        options: ["sind", "seid", "ist", "bin"],
        answer: "sind",
        explanation: "مع الضمير wir نستخدم sind.",
      },
    ],
  },
  {
    id: "a1_1_5",
    level: "A1.1",
    number: 5,
    titleArabic: "فعل الملكية haben",
    titleGerman: "Das Verb haben",
    descriptionArabic: "فعل الملكية 'يملك / عنده': تصريفه واستخدامه للتعبير عن الامتلاك والحاجات.",
    grammarExplanation:
      "فعل haben يعني 'يمتلك' أو 'عنده'. يصرف في الحاضر مع تغيير طفيف مع du و er/sie/es (حذف حرف b).",
    grammarRules: [
      {
        rule: "تصريف haben",
        explanation: "ich habe (عندي)، du hast (عندك)، er/sie/es hat (عنده/عندها)، wir haben (عندنا)، ihr habt (عندكم)، sie/Sie haben (عندهم/عند حضرتك).",
        example: "Ich habe ein Auto. Hast du Zeit?",
        exampleArabic: "عندي سيارة. هل عندك وقت؟",
      },
      {
        rule: "الأسماء بعد haben",
        explanation: "يأتي بعد فعل haben الاسم في حالة النصب (Akkusativ) عادة.",
        example: "Er hat einen Hund.",
        exampleArabic: "عنده كلب.",
      },
    ],
    examples: [
      { german: "Ich habe Zeit.", arabic: "عندي وقت.", phonetic: "إش هابه تسايت" },
      { german: "Hast du Hunger?", arabic: "هل أنت جائع؟ (هل عندك جوع؟)", phonetic: "هاست دو هونغر" },
      { german: "Er hat Durst.", arabic: "هو عطشان.", phonetic: "إير هات دورست" },
      { german: "Wir haben eine Frage.", arabic: "لدينا سؤال.", phonetic: "فير هابن آينه فراغه" },
      { german: "Habt ihr Geld?", arabic: "هل لديكم مال؟", phonetic: "هابت إير غيلد" },
      { german: "Sie haben Recht.", arabic: "حضرتكم على حق.", phonetic: "زي هابن ريشت" },
    ],
    vocabulary: [
      { german: "die Zeit", arabic: "الوقت", phonetic: "دي تسايت", article: "die", exampleSentence: "Ich habe keine Zeit.", exampleArabic: "ليس لدي وقت." },
      { german: "das Geld", arabic: "النقود / المال", phonetic: "داس غيلد", article: "das", exampleSentence: "Hast du Geld?", exampleArabic: "هل معك نقود؟" },
      { german: "der Hunger", arabic: "الجوع", phonetic: "دير هونغر", article: "der", exampleSentence: "Ich habe großen Hunger.", exampleArabic: "أنا جائع جداً." },
      { german: "der Durst", arabic: "العطش", phonetic: "دير دورست", article: "der", exampleSentence: "Er hat Durst.", exampleArabic: "هو عطشان." },
      { german: "das Auto", arabic: "السيارة", phonetic: "داس أوتو", article: "das", exampleSentence: "Wir haben ein neues Auto.", exampleArabic: "لدينا سيارة جديدة." },
      { german: "das Buch", arabic: "الكتاب", phonetic: "داس بوخ", article: "das", exampleSentence: "Hast du mein Buch?", exampleArabic: "هل معك كتابي؟" },
    ],
    readingPassage: {
      german: "Heute habe ich viel zu tun. Am Morgen habe ich Deutschkurs. Am Nachmittag habe ich einen Termin beim Arzt. Aber am Abend habe ich frei und treffe Freunde.",
      arabic: "اليوم لدي الكثير لأفعله. في الصباح لدي دورة لغة ألمانية. في فترة بعد الظهر لدي موعد عند الطبيب. ولكن في المساء أنا متفرغ وألتقي بالأصدقاء.",
      questions: [
        {
          question: "Was hat die Person am Morgen?",
          options: ["Einen Termin beim Arzt", "Deutschkurs", "Frei", "Keine Zeit"],
          answer: "Deutschkurs",
          explanation: "يذكر النص: 'Am Morgen habe ich Deutschkurs'.",
        },
        {
          question: "Wann hat die Person frei?",
          options: ["Am Morgen", "Am Nachmittag", "Am Abend", "Nie"],
          answer: "Am Abend",
          explanation: "يذكر النص: 'Aber am Abend habe ich frei'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ du einen Moment Zeit?",
        options: ["Habe", "Hast", "Hat", "Habt"],
        answer: "Hast",
        explanation: "مع الضمير du نستخدم hast.",
      },
      {
        question: "Er ___ keine Geschwister.",
        options: ["habe", "hast", "hat", "haben"],
        answer: "hat",
        explanation: "مع الضمير er نستخدم hat.",
      },
    ],
  },
  {
    id: "a1_1_6",
    level: "A1.1",
    number: 6,
    titleArabic: "الأرقام والأعداد",
    titleGerman: "Die Zahlen (0 - 1000)",
    descriptionArabic: "تعلم نطق وكتابة الأرقام الألمانية من الصفر وحتى الألف وكيفية قراءة أرقام الهواتف والأسعار.",
    grammarExplanation:
      "في الألمانية، من الرقم 21 حتى 99 نقرأ الآحاد أولاً ثم 'und' ثم العشرات، تماماً كما في اللغة العربية (مثال: einundzwanzig = واحد وعشرون).",
    grammarRules: [
      {
        rule: "الأرقام من 0 إلى 12 (أساسية ومميزة)",
        explanation: "null (0), eins (1), zwei (2), drei (3), vier (4), fünf (5), sechs (6), sieben (7), acht (8), neun (9), zehn (10), elf (11), zwölf (12).",
        example: "Ich habe zwei Brüder.",
        exampleArabic: "لدي أخوان اثنان.",
      },
      {
        rule: "تركيب الأرقام المركبة",
        explanation: "21 = einundzwanzig (واحد وعشرون)، 35 = fünfunddreißig (خمسة وثلاثون)، 100 = (ein)hundert، 1000 = (ein)tausend.",
        example: "Das Buch kostet 25 (fünfundzwanzig) Euro.",
        exampleArabic: "الكتاب سعره 25 يورو.",
      },
    ],
    examples: [
      { german: "eins, zwei, drei", arabic: "واحد، اثنان، ثلاثة", phonetic: "آينس، تسفاي، دراي" },
      { german: "zehn, elf, zwölf", arabic: "عشرة، أحد عشر، اثنا عشر", phonetic: "تسين، إلف، تسفولف" },
      { german: "zwanzig", arabic: "عشرون", phonetic: "تسفانتسيغ" },
      { german: "einundzwanzig", arabic: "واحد وعشرون", phonetic: "آين أوند تسفانتسيغ" },
      { german: "fünfzig", arabic: "خمسون", phonetic: "فونفتسيغ" },
      { german: "hundert", arabic: "مائة", phonetic: "هوندرت" },
    ],
    vocabulary: [
      { german: "die Zahl", arabic: "الرقم / العدد", phonetic: "دي تسال", article: "die", exampleSentence: "Welche Zahl ist das?", exampleArabic: "ما هذا الرقم؟" },
      { german: "die Telefonnummer", arabic: "رقم الهاتف", phonetic: "دي تليفون نومر", article: "die", exampleSentence: "Wie ist deine Telefonnummer?", exampleArabic: "ما هو رقم هاتفك؟" },
      { german: "der Euro", arabic: "اليورو", phonetic: "دير أويرو", article: "der", exampleSentence: "Das kostet 10 Euro.", exampleArabic: "هذا يكلف 10 يورو." },
      { german: "die Adresse", arabic: "العنوان", phonetic: "دي أدرسّه", article: "die", exampleSentence: "Meine Hausnummer ist 14.", exampleArabic: "رقم منزلي هو 14." },
    ],
    readingPassage: {
      german: "Meine Telefonnummer ist 0176 458923. Meine Hausnummer ist 42. Ich bin 30 Jahre alt und mein Sohn ist 4 Jahre alt.",
      arabic: "رقم هاتفي هو 0176 458923. رقم بيتي هو 42. عمري 30 سنة وابني عمره 4 سنوات.",
      questions: [
        {
          question: "Wie alt ist der Sohn?",
          options: ["30", "4", "42", "14"],
          answer: "4",
          explanation: "يذكر النص: 'mein Sohn ist 4 Jahre alt'.",
        },
        {
          question: "Was ist die Hausnummer?",
          options: ["30", "4", "42", "23"],
          answer: "42",
          explanation: "يذكر النص: 'Meine Hausnummer ist 42'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "ما معنى الرقم 'dreiundzwanzig'؟",
        options: ["32", "23", "13", "30"],
        answer: "23",
        explanation: "drei (3) + und (و) + zwanzig (20) = 23.",
      },
      {
        question: "كيف يكتب الرقم 12 بالألمانية؟",
        options: ["elf", "zwölf", "zehn", "zwanzig"],
        answer: "zwölf",
        explanation: "الرقم 12 هو zwölf.",
      },
    ],
  },
  {
    id: "a1_1_7",
    level: "A1.1",
    number: 7,
    titleArabic: "البلدان والجنسيات",
    titleGerman: "Länder und Nationalitäten",
    descriptionArabic: "أسماء الدول وحروف الجر المستخدمة معها (aus, in) والجنسيات بالمذكر والمؤنث.",
    grammarExplanation:
      "معظم أسماء الدول في الألمانية تأتي بدون أداة تعريف (aus Deutschland, aus Syrien). لكن بعض الدول تأتي مع أداة (aus der Türkei, aus dem Sudan, aus den USA).",
    grammarRules: [
      {
        rule: "الدول بدون أداة مقابل الدول ذات الأداة",
        explanation: "أغلب الدول: Ich komme aus Ägypten / Deutschland. استثناءات هامة مع der تصبح der Türkei -> aus der Türkei، ومذكر dem Irak -> aus dem Irak، وجمع aus den USA.",
        example: "Er kommt aus der Schweiz.",
        exampleArabic: "هو قادم من سويسرا.",
      },
      {
        rule: "الجنسية المذكر والمؤنث",
        explanation: "لتحويل الجنسية إلى مؤنث نضيف عادة اللاحقة -in. مثل: Deutscher / Deutsche، Syrer / Syrerin، Ägypter / Ägypterin.",
        example: "Sie ist Syrerin.",
        exampleArabic: "هي سورية.",
      },
    ],
    examples: [
      { german: "Deutschland", arabic: "ألمانيا", phonetic: "دويتشلاند" },
      { german: "Ägypten", arabic: "مصر", phonetic: "إغيبتن" },
      { german: "Syrien", arabic: "سوريا", phonetic: "زوريين" },
      { german: "die Türkei (aus der Türkei)", arabic: "تركيا (من تركيا)", phonetic: "دي توركاي" },
      { german: "die Schweiz (aus der Schweiz)", arabic: "سويسرا (من سويسرا)", phonetic: "دي شفايتس" },
      { german: "Österreich", arabic: "النمسا", phonetic: "أوسترايش" },
    ],
    vocabulary: [
      { german: "das Ausland", arabic: "الخارج / بلاد الغربة", phonetic: "داس أوسلاند", article: "das", exampleSentence: "Ich lebe im Ausland.", exampleArabic: "أنا أعيش في الخارج." },
      { german: "die Heimat", arabic: "الوطن", phonetic: "دي هايْمات", article: "die", exampleSentence: "Meine Heimat ist schön.", exampleArabic: "وطني جميل." },
      { german: "deutsch", arabic: "ألماني", phonetic: "دويتش", exampleSentence: "Er spricht Deutsch.", exampleArabic: "هو يتحدث الألمانية." },
      { german: "arabisch", arabic: "عربي", phonetic: "أرابيش", exampleSentence: "Arabisch ist meine Muttersprache.", exampleArabic: "العربية هي لغتي الأم." },
    ],
    readingPassage: {
      german: "In unserem Deutschkurs sind viele Menschen. Layla kommt aus Marokko. Maria kommt aus Italien. Jan kommt aus Polen. Unser Lehrer kommt aus Deutschland. Wir sprechen alle Deutsch im Unterricht.",
      arabic: "في دورة اللغة الألمانية لدينا الكثير من الناس. ليلى من المغرب. ماريا من إيطاليا. يان من بولندا. ومعلمنا من ألمانيا. نحن جميعاً نتحدث الألمانية في الدرس.",
      questions: [
        {
          question: "Woher kommt Maria?",
          options: ["Aus Marokko", "Aus Italien", "Aus Polen", "Aus Deutschland"],
          answer: "Aus Italien",
          explanation: "يذكر النص: 'Maria kommt aus Italien'.",
        },
        {
          question: "Welche Sprache sprechen alle im Unterricht?",
          options: ["Englisch", "Arabisch", "Deutsch", "Italienisch"],
          answer: "Deutsch",
          explanation: "يذكر النص: 'Wir sprechen alle Deutsch im Unterricht'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Sie kommt aus ___ Türkei.",
        options: ["die", "der", "dem", "den"],
        answer: "der",
        explanation: "كلمة die Türkei تأخذ في حالة الجر بعد aus الأداة der.",
      },
      {
        question: "Er ist Syrer, sie ist ___.",
        options: ["Syrer", "Syrerin", "Syrisch", "Syrien"],
        answer: "Syrerin",
        explanation: "للمؤنث نضيف اللاحقة -in فتصبح Syrerin.",
      },
    ],
  },
  {
    id: "a1_1_8",
    level: "A1.1",
    number: 8,
    titleArabic: "العائلة والأقارب",
    titleGerman: "Die Familie",
    descriptionArabic: "أفراد الأسرة والعائلة وأدوات الملكية mein (لي) و dein (لك).",
    grammarExplanation:
      "لكل فرد من أفراد العائلة أداة تعريف حسب جنس الكلمة (der Vater, die Mutter, das Kind). للتعبير عن الملكية نقول mein Vater (أبي) و meine Mutter (أمي بإضافة -e للمؤنث والجمع).",
    grammarRules: [
      {
        rule: "ضمائر الملكية للمفرد (mein / dein)",
        explanation: "مع المذكر والمحايد: mein Vater, mein Kind. مع المؤنث والجمع نضيف -e: meine Mutter, meine Eltern.",
        example: "Das ist mein Bruder und das ist meine Schwester.",
        exampleArabic: "هذا أخي وهذه أختي.",
      },
    ],
    examples: [
      { german: "der Vater", arabic: "الأب", phonetic: "دير فاتر" },
      { german: "die Mutter", arabic: "الأم", phonetic: "دي موتر" },
      { german: "die Eltern", arabic: "الوالدان", phonetic: "دي إلترن" },
      { german: "der Sohn", arabic: "الابن", phonetic: "دير زون" },
      { german: "die Tochter", arabic: "الابنة", phonetic: "دي توختر" },
      { german: "der Bruder", arabic: "الأخ", phonetic: "دير برودر" },
      { german: "die Schwester", arabic: "الأخت", phonetic: "دي شفيستر" },
    ],
    vocabulary: [
      { german: "die Familie", arabic: "العائلة", phonetic: "دي فاميليه", article: "die", exampleSentence: "Meine Familie ist groß.", exampleArabic: "عائلتي كبيرة." },
      { german: "der Großvater (Opa)", arabic: "الجد", phonetic: "دير غروس فاتر", article: "der", exampleSentence: "Mein Opa ist 75.", exampleArabic: "جدي عمره 75." },
      { german: "die Großmutter (Oma)", arabic: "الجدة", phonetic: "دي غروس موتر", article: "die", exampleSentence: "Meine Oma kocht sehr gut.", exampleArabic: "جدتي تطبخ جيداً جداً." },
      { german: "die Geschwister", arabic: "الإخوة والأخوات", phonetic: "دي غشفيستر", article: "die", exampleSentence: "Ich habe zwei Geschwister.", exampleArabic: "لدي اثنان من الإخوة." },
      { german: "verheiratet", arabic: "متزوج", phonetic: "فير هايراتت", exampleSentence: "Ich bin verheiratet.", exampleArabic: "أنا متزوج." },
      { german: "ledig", arabic: "أعزب", phonetic: "ليديغ", exampleSentence: "Er ist noch ledig.", exampleArabic: "هو ما زال أعزب." },
    ],
    readingPassage: {
      german: "Das ist meine Familie. Mein Name ist Tariq. Ich bin verheiratet. Meine Frau heißt Nour. Wir haben zwei Kinder: einen Sohn und eine Tochter. Mein Sohn heißt Sami und meine Tochter heißt Salma.",
      arabic: "هذه عائلتي. اسمي طارق. أنا متزوج. زوجتي تدعى نور. لدينا طفلان: ابن وابنة. ابني يدعى سامي وابنتي تدعى سلمى.",
      questions: [
        {
          question: "Wie viele Kinder hat Tariq?",
          options: ["Ein Kind", "Zwei Kinder", "Drei Kinder", "Keine Kinder"],
          answer: "Zwei Kinder",
          explanation: "يذكر النص: 'Wir haben zwei Kinder'.",
        },
        {
          question: "Wie heißt die Tochter?",
          options: ["Nour", "Salma", "Sara", "Mona"],
          answer: "Salma",
          explanation: "يذكر النص: 'und meine Tochter heißt Salma'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Das ist ___ Mutter. (أمي)",
        options: ["mein", "meine", "meinen", "meinem"],
        answer: "meine",
        explanation: "كلمة die Mutter مؤنثة، لذلك نستخدم meine مع اللاحقة -e.",
      },
      {
        question: "Das ist ___ Bruder. (أخي)",
        options: ["mein", "meine", "meiner", "meines"],
        answer: "mein",
        explanation: "كلمة der Bruder مذكرة في حالة الفاعل تأخذ mein بدون -e.",
      },
    ],
  },
  {
    id: "a1_1_9",
    level: "A1.1",
    number: 9,
    titleArabic: "أدوات التعريف المعرفة der / die / das",
    titleGerman: "Bestimmte Artikel (der, die, das)",
    descriptionArabic: "الجنس النحوي في الألمانية (المذكر والمؤنث والمحايد والجمع) وكيفية معرفة الأدوات.",
    grammarExplanation:
      "كل اسم في اللغة الألمانية يكتب بحرف كبير أولاً (Capital Letter) وله أداة جنس نحوي: der للمذكر، die للمؤنث، das للمحايد، و die للجمع.",
    grammarRules: [
      {
        rule: "أدوات التعريف في حالة الفاعل (Nominativ)",
        explanation: "der Tisch (الطاولة - مذكر)، das Buch (الكتاب - محايد)، die Lampe (المصباح - مؤنث)، die Bücher (الكتب - جمع).",
        example: "Der Mann arbeitet. Die Frau liest. Das Kind spielt.",
        exampleArabic: "الرجل يعمل. المرأة تقرأ. الطفل يلعب.",
      },
    ],
    examples: [
      { german: "der Mann", arabic: "الرجل (مذكر)", phonetic: "دير مان" },
      { german: "die Frau", arabic: "المرأة (مؤنث)", phonetic: "دي فراو" },
      { german: "das Kind", arabic: "الطفل (محايد)", phonetic: "داس كيند" },
      { german: "die Kinder", arabic: "الأطفال (جمع)", phonetic: "دي كيندر" },
      { german: "der Tisch", arabic: "الطاولة (مذكر)", phonetic: "دير تيش" },
      { german: "das Auto", arabic: "السيارة (محايد)", phonetic: "داس أوتو" },
    ],
    vocabulary: [
      { german: "der Stuhl", arabic: "الكرسي", phonetic: "دير شتول", article: "der", exampleSentence: "Der Stuhl ist bequem.", exampleArabic: "الكرسي مريح." },
      { german: "das Haus", arabic: "البيت", phonetic: "داس هاوس", article: "das", exampleSentence: "Das Haus ist groß.", exampleArabic: "البيت كبير." },
      { german: "die Tür", arabic: "الباب", phonetic: "دي تور", article: "die", exampleSentence: "Die Tür ist offen.", exampleArabic: "الباب مفتوح." },
      { german: "das Fenster", arabic: "النافذة / الشباك", phonetic: "داس فنستر", article: "das", exampleSentence: "Das Fenster ist sauber.", exampleArabic: "النافذة نظيفة." },
    ],
    readingPassage: {
      german: "Im Zimmer steht ein Tisch. Der Tisch ist braun. Neben dem Tisch ist ein Stuhl. Der Stuhl ist modern. Das Fenster ist groß und die Tür ist weiß.",
      arabic: "في الغرفة توجد طاولة. الطاولة بنية. بجانب الطاولة يوجد كرسي. الكرسي حديث. النافذة كبيرة والباب أبيض.",
      questions: [
        {
          question: "Welche Farbe hat der Tisch?",
          options: ["Weiß", "Braun", "Schwarz", "Blau"],
          answer: "Braun",
          explanation: "يذكر النص: 'Der Tisch ist braun'.",
        },
        {
          question: "Wie ist das Fenster?",
          options: ["Klein", "Groß", "Alt", "Dunkel"],
          answer: "Groß",
          explanation: "يذكر النص: 'Das Fenster ist groß'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ Tisch ist neu. (الطاولة)",
        options: ["Der", "Die", "Das", "Den"],
        answer: "Der",
        explanation: "كلمة Tisch مذكرة فتأخذ der.",
      },
      {
        question: "___ Auto ist schnell. (السيارة)",
        options: ["Der", "Die", "Das", "Dem"],
        answer: "Das",
        explanation: "كلمة Auto محايدة فتأخذ das.",
      },
    ],
  },
  {
    id: "a1_1_10",
    level: "A1.1",
    number: 10,
    titleArabic: "أدوات النكرة ein / eine",
    titleGerman: "Unbestimmte Artikel (ein, eine)",
    descriptionArabic: "استخدام أداة النكرة للأشياء غير المحددة، وعدم وجود أداة نكرة في الجمع.",
    grammarExplanation:
      "تستخدم أداة النكرة عندما نتحدث عن شيء للمرة الأولى أو غير محدد: ein للمذكر والمحايد، eine للمؤنث، ولا توجد أداة نكرة للجمع (Nullartikel).",
    grammarRules: [
      {
        rule: "جدول أدوات النكرة في حالة الرفع",
        explanation: "المذكر: ein Mann، المحايد: ein Buch، المؤنث: eine Frau، الجمع: Bücher (بدون أداة).",
        example: "Das ist ein Stift und das ist eine Tasche.",
        exampleArabic: "هذا قلم وهذه حقيبة.",
      },
    ],
    examples: [
      { german: "ein Mann", arabic: "رجل (نكرة مذكر)", phonetic: "آين مان" },
      { german: "eine Frau", arabic: "امرأة (نكرة مؤنث)", phonetic: "آينه فراو" },
      { german: "ein Buch", arabic: "كتاب (نكرة محايد)", phonetic: "آين بوخ" },
      { german: "Kinder", arabic: "أطفال (جمع نكرة - بدون أداة)", phonetic: "كيندر" },
    ],
    vocabulary: [
      { german: "der Stift", arabic: "القلم", phonetic: "دير شتفت", article: "der", exampleSentence: "Ich brauche einen Stift.", exampleArabic: "أحتاج إلى قلم." },
      { german: "die Tasche", arabic: "الحقيبة", phonetic: "دي تاشه", article: "die", exampleSentence: "Das ist eine schöne Tasche.", exampleArabic: "هذه حقيبة جميلة." },
      { german: "das Handy", arabic: "الهاتف المحمول", phonetic: "داس هاندي", article: "das", exampleSentence: "Hast du ein Handy?", exampleArabic: "هل معك هاتف محمول؟" },
    ],
    readingPassage: {
      german: "Hier ist ein Tisch. Auf dem Tisch liegt ein Buch und eine Brille. Das Buch ist interessant. Die Brille ist neu.",
      arabic: "هنا توجد طاولة. على الطاولة يوجد كتاب ونظارة. الكتاب شيق. النظارة جديدة.",
      questions: [
        {
          question: "Was liegt auf dem Tisch?",
          options: ["Ein Handy", "Ein Buch und eine Brille", "Ein Stift", "Geld"],
          answer: "Ein Buch und eine Brille",
          explanation: "يذكر النص: 'liegt ein Buch und eine Brille'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Das ist ___ Lampe. (مصباح - مؤنث)",
        options: ["ein", "eine", "einen", "einer"],
        answer: "eine",
        explanation: "Lampe كلمة مؤنثة (die Lampe) فتأخذ أداة النكرة eine.",
      },
      {
        question: "Das ist ___ Kind. (طفل - محايد)",
        options: ["ein", "eine", "einen", "keine"],
        answer: "ein",
        explanation: "Kind كلمة محايدة (das Kind) فتأخذ أداة النكرة ein.",
      },
    ],
  },
  {
    id: "a1_1_11",
    level: "A1.1",
    number: 11,
    titleArabic: "النفي nicht و kein",
    titleGerman: "Die Negation (nicht / kein)",
    descriptionArabic: "كيف تنفي الجمل في الألمانية ومتى نستخدم kein ومتى نستخدم nicht.",
    grammarExplanation:
      "القاعدة الذهبية للنفي: نستخدم kein لنفي الأسماء المسبوقة بأداة نكرة (ein/eine) أو الأسماء بدون أداة. نستخدم nicht لنفي الأفعال، والصفات، والظروف، والأسماء المعرفة (der/die/das)، وأسماء العلم والضمائر.",
    grammarRules: [
      {
        rule: "نفي الأسماء بـ kein / keine",
        explanation: "kein للمذكر والمحايد (kein Auto, kein Geld)، و keine للمؤنث والجمع (keine Zeit, keine Kinder).",
        example: "Ich habe kein Geld. Ich habe keine Zeit.",
        exampleArabic: "ليس لدي مال. ليس لدي وقت.",
      },
      {
        rule: "نفي الجمل والصفات بـ nicht",
        explanation: "توضع nicht بعد الفعل أو قبل الصفة.",
        example: "Ich verstehe nicht. Das ist nicht gut.",
        exampleArabic: "أنا لا أفهم. هذا ليس جيداً.",
      },
    ],
    examples: [
      { german: "Ich rauche nicht.", arabic: "أنا لا أدخن.", phonetic: "إش راوخه نيشت" },
      { german: "Das ist nicht schwer.", arabic: "هذا ليس صعباً.", phonetic: "داس إست نيشت شفير" },
      { german: "Ich habe kein Problem.", arabic: "ليس لدي مشكلة.", phonetic: "إش هابه كاين بروبليم" },
      { german: "Wir haben keine Fragen.", arabic: "ليس لدينا أسئلة.", phonetic: "فير هابن كاينه فراغن" },
    ],
    vocabulary: [
      { german: "verstehen", arabic: "يفهم", phonetic: "فيرشتين", exampleSentence: "Ich verstehe das nicht.", exampleArabic: "أنا لا أفهم هذا." },
      { german: "wissen", arabic: "يعلم / يعرف", phonetic: "فيسن", exampleSentence: "Ich weiß nicht.", exampleArabic: "لا أعلم." },
      { german: "das Problem", arabic: "المشكلة", phonetic: "داس بروبليم", article: "das", exampleSentence: "Kein Problem!", exampleArabic: "لا مشكلة!" },
    ],
    readingPassage: {
      german: "Klaus hat heute kein Auto. Er geht zu Fuß. Er ist nicht traurig, denn das Wetter ist schön. Er hat keine Eile.",
      arabic: "كلاوس ليس لديه سيارة اليوم. هو يمشي على الأقدام. هو ليس حزيناً لأن الطقس جميل. وهو ليس في عجلة من أمره.",
      questions: [
        {
          question: "Warum geht Klaus zu Fuß?",
          options: ["Er hat kein Auto", "Er ist krank", "Er hat keine Zeit", "Er hat ein Auto"],
          answer: "Er hat kein Auto",
          explanation: "يذكر النص: 'Klaus hat heute kein Auto. Er geht zu Fuß.'",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich trinke ___ Kaffee. (لا أشرب القهوة - اسم نكرة/عام)",
        options: ["nicht", "keinen", "kein", "keine"],
        answer: "keinen",
        explanation: "Kaffee مذكر (der Kaffee) وفي حالة النصب بعد trinke يصبح keinen.",
      },
      {
        question: "Ich komme heute ___.",
        options: ["kein", "keine", "nicht", "nichts"],
        answer: "nicht",
        explanation: "لنفي الفعل (komme) نستخدم nicht في نهاية الجملة.",
      },
    ],
  },
  {
    id: "a1_1_12",
    level: "A1.1",
    number: 12,
    titleArabic: "تكوين الجملة الأساسية",
    titleGerman: "Satzbau im Hauptsatz",
    descriptionArabic: "موقع الفعل المصرف في الجملة الخبرية (الموقع رقم 2 دائماً).",
    grammarExplanation:
      "القاعدة الأساسية الصارمة في اللغة الألمانية للجملة الرئيسية (Hauptsatz): الفعل المصرف يأتي دائماً في الموقع الثاني (Position 2) بغض النظر عما تبدأ به الجملة.",
    grammarRules: [
      {
        rule: "الفعل في المركز الثاني (Verb auf Position 2)",
        explanation: "الموقع 1 (الفاعل أو ظرف الزمان/المكان) + الموقع 2 (الفعل المصرف) + بقية الجملة.",
        example: "Heute lerne ich Deutsch. = Ich lerne heute Deutsch.",
        exampleArabic: "اليوم أتعلم الألمانية. = أنا أتعلم اليوم الألمانية.",
      },
    ],
    examples: [
      { german: "Ich lerne heute Deutsch.", arabic: "أنا أتعلم الألمانية اليوم.", phonetic: "إش ليرنه هويته دويتش" },
      { german: "Heute lerne ich Deutsch.", arabic: "اليوم أتعلم الألمانية.", phonetic: "هويته ليرنه إش دويتش" },
      { german: "In Berlin wohnt Ali.", arabic: "في برلين يسكن علي.", phonetic: "إن برلين فونت علي" },
    ],
    vocabulary: [
      { german: "heute", arabic: "اليوم", phonetic: "هويته", exampleSentence: "Heute ist schönes Wetter.", exampleArabic: "اليوم الطقس جميل." },
      { german: "morgen", arabic: "غداً", phonetic: "مورغن", exampleSentence: "Morgen habe ich frei.", exampleArabic: "غداً أنا في عطلة." },
      { german: "jetzt", arabic: "الآن", phonetic: "يتست", exampleSentence: "Jetzt lerne ich.", exampleArabic: "الآن أنا أتعلم." },
    ],
    readingPassage: {
      german: "Am Montag arbeite ich von 8 bis 16 Uhr. Am Nachmittag kaufe ich im Supermarkt ein. Am Abend koche ich das Abendessen.",
      arabic: "يوم الإثنين أعمل من الساعة 8 حتى 16. بعد الظهر أتسوق في السوبرماركت. في المساء أطبخ العشاء.",
      questions: [
        {
          question: "Wo steht das Verb in diesen Sätzen?",
          options: ["Am Anfang", "An Position 2", "Am Ende", "Überall"],
          answer: "An Position 2",
          explanation: "الفعل (arbeite, kaufe, koche) يأتي دائماً في المركز الثاني في الجملة الرئيسية.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Morgen ___ wir nach München.",
        options: ["fahren", "fährt", "fahre", "gefahren"],
        answer: "fahren",
        explanation: "الفعل في الموقع 2 ومصرف مع wir فيكون fahren.",
      },
    ],
  },
  {
    id: "a1_1_13",
    level: "A1.1",
    number: 13,
    titleArabic: "أسئلة الاستفهام W-Fragen",
    titleGerman: "W-Fragen (Wer, Was, Wo, Woher, Wohin, Wie, Warum)",
    descriptionArabic: "أدوات الاستفهام التي تبدأ بحرف W وكيفية تكوين السؤال بها.",
    grammarExplanation:
      "تسمى W-Fragen لأن جميع أدوات الاستفهام تبدأ بحرف W. يأتي ترتيب السؤال: أداة الاستفهام (موقع 1) + الفعل المصرف (موقع 2) + الفاعل وباقي السؤال.",
    grammarRules: [
      {
        rule: "أدوات الاستفهام الشائعة",
        explanation: "Wer (من للعاقل)، Was (ماذا لغير العاقل)، Wo (أين للمكان الثابت)، Woher (من أين للمصدر)، Wohin (إلى أين للاتجاه)، Wie (كيف)، Wann (متى)، Warum (لماذا).",
        example: "Wo wohnst du? Woher kommst du?",
        exampleArabic: "أين تسكن؟ من أين أنت؟",
      },
    ],
    examples: [
      { german: "Wer ist das?", arabic: "من هذا؟", phonetic: "فير إست داس" },
      { german: "Was machst du?", arabic: "ماذا تفعل؟", phonetic: "فاس ماخست دو" },
      { german: "Wo ist der Bahnhof?", arabic: "أين محطة القطار؟", phonetic: "فو إست دير بانهوف" },
      { german: "Wann beginnt der Kurs?", arabic: "متى يبدأ الدرس؟", phonetic: "فان بغينت دير كورس" },
      { german: "Wie geht es Ihnen?", arabic: "كيف حال حضرتكم؟", phonetic: "في غيت إس إينن" },
    ],
    vocabulary: [
      { german: "der Bahnhof", arabic: "محطة القطارات", phonetic: "دير بانهوف", article: "der", exampleSentence: "Der Bahnhof ist in der Stadtmitte.", exampleArabic: "المحطة في وسط المدينة." },
      { german: "beginnen", arabic: "يبدأ", phonetic: "بغينن", exampleSentence: "Wann beginnt die Schule?", exampleArabic: "متى تبدأ المدرسة؟" },
    ],
    readingPassage: {
      german: "Hallo! Wer bist du und woher kommst du? Was machst du beruflich und wie lange lebst du schon in Deutschland?",
      arabic: "مرحباً! من أنت ومن أين أتيت؟ ماذا تعمل وكم لك تعيش في ألمانيا؟",
      questions: [
        {
          question: "Mit welchem Fragewort fragt man nach der Herkunft?",
          options: ["Wo", "Woher", "Wohin", "Was"],
          answer: "Woher",
          explanation: "نسأل عن الموطن والمنشأ بأداة الاستفهام Woher (من أين).",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ wohnst du? - In Frankfurt.",
        options: ["Woher", "Wohin", "Wo", "Wer"],
        answer: "Wo",
        explanation: "للسؤال عن المكان الثابت (السكن) نستخدم Wo (أين).",
      },
    ],
  },
  {
    id: "a1_1_14",
    level: "A1.1",
    number: 14,
    titleArabic: "أسئلة نعم / لا (Ja/Nein-Fragen)",
    titleGerman: "Ja/Nein-Fragen (Entscheidungsfragen)",
    descriptionArabic: "كيف تسأل سؤالاً تكون إجابته نعم أو لا بوضع الفعل في أول الجملة (Position 1).",
    grammarExplanation:
      "في أسئلة نعم/لا، نضع الفعل المصرف في المركز الأول تماماً (Position 1)، يليه الفاعل في المركز الثاني. الإجابة تكون بـ Ja (نعم) أو Nein (لا) أو Doch (بلى للنفي).",
    grammarRules: [
      {
        rule: "الفعل في المركز الأول",
        explanation: "الفعل + الفاعل + بقية الجملة؟",
        example: "Lernst du Deutsch? - Ja, ich lerne Deutsch.",
        exampleArabic: "هل تتعلم الألمانية؟ - نعم، أنا أتعلم الألمانية.",
      },
      {
        rule: "استخدام Doch",
        explanation: "عندما يكون السؤال منفياً ونجيب بالإيجاب نستخدم Doch (بلى). مثل: Lernst du kein Deutsch? - Doch, ich lerne Deutsch.",
        example: "Kommst du nicht mit? - Doch!",
        exampleArabic: "ألن تأتي معنا؟ - بلى (سآتي)!",
      },
    ],
    examples: [
      { german: "Kommst du aus Syrien?", arabic: "هل أنت من سوريا؟", phonetic: "كومست دو أوس زوريين" },
      { german: "Hast du Zeit?", arabic: "هل لديك وقت؟", phonetic: "هاست دو تسايت" },
      { german: "Sprichst du Deutsch?", arabic: "هل تتحدث الألمانية؟", phonetic: "شبرخست دو دويتش" },
    ],
    vocabulary: [
      { german: "ja", arabic: "نعم", phonetic: "يا", exampleSentence: "Ja, natürlich.", exampleArabic: "نعم، بالطبع." },
      { german: "nein", arabic: "لا", phonetic: "ناين", exampleSentence: "Nein, leider nicht.", exampleArabic: "لا، للأسف لا." },
      { german: "doch", arabic: "بلى", phonetic: "دوخ", exampleSentence: "Doch, ich komme gerne.", exampleArabic: "بلى، آتي بكل سرور." },
    ],
    readingPassage: {
      german: "Bist du neu hier? - Ja, ich bin neu. Suchst du das Büro? - Nein, ich suche den Kursraum 104.",
      arabic: "هل أنت جديد هنا؟ - نعم، أنا جديد. هل تبحث عن المكتب؟ - لا، أنا أبحث عن قاعة الدرس 104.",
      questions: [
        {
          question: "Was sucht die Person?",
          options: ["Das Büro", "Den Kursraum 104", "Die Toilette", "Den Bahnhof"],
          answer: "Den Kursraum 104",
          explanation: "يذكر النص: 'ich suche den Kursraum 104'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ du verheiratet?",
        options: ["Bist", "Hast", "Bist du", "Seid"],
        answer: "Bist",
        explanation: "للسؤال عن الحالة بفعل sein مع du نضع Bist في أول الجملة.",
      },
    ],
  },
  {
    id: "a1_1_15",
    level: "A1.1",
    number: 15,
    titleArabic: "المفرد والجمع",
    titleGerman: "Singular und Plural",
    descriptionArabic: "صيغ جمع الأسماء في اللغة الألمانية ولواحق الجمع وتغيير حروف العلة (Umlaut).",
    grammarExplanation:
      "جميع الأسماء في صيغة الجمع تأخذ أداة التعريف die دائماً! وتتنوع لواحق الجمع في الألمانية: -e, -er, -en/-n, -s، أو مع إضافة أوملاوت (ä, ö, ü).",
    grammarRules: [
      {
        rule: "أهم أنماط الجمع في الألمانية",
        explanation: "1) إضافة -e مثل der Tag -> die Tage. 2) إضافة -en/-n مثل die Frau -> die Frauen. 3) إضافة -er وأوملاوت مثل das Kind -> die Kinder / das Buch -> die Bücher. 4) إضافة -s للكلمات الدخيلة مثل das Auto -> die Autos.",
        example: "ein Buch -> zwei Bücher",
        exampleArabic: "كتاب واحد -> كتابان / كتب",
      },
    ],
    examples: [
      { german: "der Tisch -> die Tische", arabic: "الطاولة -> الطاولات", phonetic: "دير تيش -> دي تيشه" },
      { german: "die Frau -> die Frauen", arabic: "المرأة -> النساء", phonetic: "دي فراو -> دي فراون" },
      { german: "das Kind -> die Kinder", arabic: "الطفل -> الأطفال", phonetic: "داس كيند -> دي كيندر" },
      { german: "das Auto -> die Autos", arabic: "السيارة -> السيارات", phonetic: "داس أوتو -> دي أوتوس" },
    ],
    vocabulary: [
      { german: "die Straße / die Straßen", arabic: "الشارع / الشوارع", phonetic: "دي شتراسه / دي شتراسن", article: "die", exampleSentence: "Die Straßen sind sauber.", exampleArabic: "الشوارع نظيفة." },
      { german: "das Bild / die Bilder", arabic: "الصورة / الصور", phonetic: "داس بيلد / دي بيلدر", article: "das", exampleSentence: "Schöne Bilder!", exampleArabic: "صور جميلة!" },
    ],
    readingPassage: {
      german: "Auf dem Schreibtisch liegen drei Bücher, zwei Stifte und vier Hefte. Alle Sachen sind ordentlich.",
      arabic: "على المكتب يوجد ثلاثة كتب، وقلمان، وأربعة دفاتر. كل الأشياء مرتبة.",
      questions: [
        {
          question: "Wie viele Bücher liegen auf dem Tisch?",
          options: ["Zwei", "Drei", "Vier", "Fünf"],
          answer: "Drei",
          explanation: "يذكر النص: 'drei Bücher'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Plural von 'das Kind':",
        options: ["die Kinde", "die Kinder", "die Kindes", "die Kind"],
        answer: "die Kinder",
        explanation: "جمع Kind هو die Kinder.",
      },
    ],
  },
  {
    id: "a1_1_16",
    level: "A1.1",
    number: 16,
    titleArabic: "الحياة اليومية الأساسية",
    titleGerman: "Alltag und Freizeit A1.1",
    descriptionArabic: "مراجعة شاملة لمفردات الحياة اليومية، والأنشطة البسيطة، والتدريب على المحادثات اليومية.",
    grammarExplanation:
      "تطبيق وتلخيص لجميع قواعد المستوى A1.1: الأفعال، الضمائر، أدوات التعريف والنفي وتكوين الأسئلة في سياق روتينك اليومي.",
    grammarRules: [
      {
        rule: "تنسيق جمل الروتين اليومي",
        explanation: "نربط الأنشطة باستخدام روابط بسيطة مثل: und (و)، aber (لكن)، dann (ثم).",
        example: "Ich stehe auf und dann trinke ich Kaffee.",
        exampleArabic: "أستيقظ ثم أشرب القهوة.",
      },
    ],
    examples: [
      { german: "Ich trinke Kaffee.", arabic: "أنا أشرب القهوة.", phonetic: "إش ترينكه كافيه" },
      { german: "Ich gehe spazieren.", arabic: "أنا أذهب للمشي والتنزه.", phonetic: "إش غيه شباتسيرن" },
      { german: "Ich lerne jeden Tag.", arabic: "أنا أتعلم كل يوم.", phonetic: "إش ليرنه ييدن تاك" },
    ],
    vocabulary: [
      { german: "frühstücken", arabic: "يتناول الفطور", phonetic: "فروشتوكن", exampleSentence: "Ich frühstücke um 7 Uhr.", exampleArabic: "أتناول الفطور في السابعة." },
      { german: "kochen", arabic: "يطبخ", phonetic: "كوخن", exampleSentence: "Er kocht gerne.", exampleArabic: "هو يحب الطبخ." },
      { german: "schlafen", arabic: "ينام", phonetic: "شلافن", exampleSentence: "Gute Nacht, schlaf gut!", exampleArabic: "تصبح على خير، نم جيداً!" },
    ],
    readingPassage: {
      german: "Mein Tag beginnt um 7 Uhr. Ich frühstücke mit meiner Familie. Um 8 Uhr fahre ich zur Arbeit. Um 17 Uhr bin ich zu Hause. Am Abend lernen wir Deutsch.",
      arabic: "يبدأ يومي في الساعة 7. أتناول الفطور مع عائلتي. في الساعة 8 أذهب إلى العمل. في الساعة 17 أكون في المنزل. وفي المساء نتعلم الألمانية.",
      questions: [
        {
          question: "Wann beginnt der Tag?",
          options: ["Um 8 Uhr", "Um 7 Uhr", "Um 17 Uhr", "Um 9 Uhr"],
          answer: "Um 7 Uhr",
          explanation: "يذكر النص: 'Mein Tag beginnt um 7 Uhr'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Am Abend ___ ich ein Buch.",
        options: ["lese", "liest", "lesen", "gelesen"],
        answer: "lese",
        explanation: "الفعل lesen مع الضمير ich يصرف إلى lese.",
      },
    ],
  },
];
