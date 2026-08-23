import { Lesson } from "../types";

export const lessonsA2_2: Lesson[] = [
  {
    id: "a2_2_1",
    level: "A2.2",
    number: 1,
    titleArabic: "المراسلات والبريد الإلكتروني",
    titleGerman: "E-Mails und Briefe schreiben",
    descriptionArabic: "كيفية كتابة إيميل رسمي أو غير رسمي، صيغ التحية والافتتاح والختام المناسبة في ألمانيا.",
    grammarExplanation:
      "التحية الرسمية: Sehr geehrte Damen und Herren (سيداتي سادتي الأفاضل) أو Sehr geehrte Frau X / Sehr geehrter Herr Y. بعد الفاصلة نبدأ بحرف صغير! الختام الرسمي: Mit freundlichen Grüßen.",
    grammarRules: [
      {
        rule: "هيكل الإيميل الرسمي في ألمانيا",
        explanation: "1. التحية (Anrede) + فاصلة. 2. السطر التالي يبدأ بحرف صغير! 3. نص الرسالة مقسم إلى فقرات واضحة. 4. عبارة الختام (Mit freundlichen Grüßen) بدون فاصلة! 5. الاسم الكامل والتوقيع.",
        example: "Sehr geehrte Frau Müller,\nich schreibe Ihnen bezüglich unserer Vereinbarung.\nMit freundlichen Grüßen\nAhmed Hassan",
        exampleArabic: "سيدتي الفاضلة مولر، أكتب لحضرتك بخصوص اتفاقنا. مع أطيب التحيات، أحمد حسن",
      },
    ],
    examples: [
      { german: "Sehr geehrte Damen und Herren,", arabic: "سيداتي سادتي المحترمين (رسمي عام)", phonetic: "زير غيهرته دامن أوند هيرن" },
      { german: "Liebe Sarah, / Lieber Jonas,", arabic: "عزيزتي سارة / عزيزي يوناس (غير رسمي)", phonetic: "ليبه سارة / ليبر يوناس" },
      { german: "Mit freundlichen Grüßen", arabic: "مع فائق التقدير والاحترام (ختام رسمي)", phonetic: "مِت فرويندليشن غروسن" },
    ],
    vocabulary: [
      { german: "der Betreff", arabic: "موضوع الرسالة / العنوان", phonetic: "دير بتريف", article: "der", exampleSentence: "Tragen Sie bitte einen Betreff ein.", exampleArabic: "اكتب من فضلك موضوعاً للرسالة." },
      { german: "der Anhang", arabic: "المرفق (ملف مرفق)", phonetic: "دير آن هانغ", article: "der", exampleSentence: "Im Anhang finden Sie meinen Lebenslauf.", exampleArabic: "تجد في المرفقات سيرتي الذاتية." },
      { german: "die Antwort", arabic: "الرد / الإجابة", phonetic: "دي أنتفورت", article: "die", exampleSentence: "Ich freue mich auf Ihre Antwort.", exampleArabic: "أتطلع بكل سرور لتلقي رد حضرتك." },
    ],
    readingPassage: {
      german: "Betreff: Entschuldigung für das Fehlen im Deutschkurs\n\nSehr geehrte Frau Braun,\nleider war ich gestern krank und konnte nicht am Unterricht teilnehmen. Ein ärztliches Attest habe ich im Anhang beigefügt. Könnten Sie mir bitte die Hausaufgaben zusenden?\n\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nYoussef Nader",
      arabic: "الموضوع: اعتذار عن الغياب في دورة الألمانية\n\nسيدتي الفاضلة براون،\nللأسف كنت مريضاً بالأمس ولم أتمكن من حضور الدرس. أرفقت تقريراً طبياً في المرفقات. هل يمكنك إرسال الواجبات المنزلية لي؟\n\nشكراً جزيلاً مقدماً.\nمع أطيب التحيات\nيوسف نادر",
      questions: [
        {
          question: "Warum konnte Youssef nicht am Kurs teilnehmen?",
          options: ["Er hatte keine Lust", "Er war krank", "Er war auf Reisen", "Er hatte Besuch"],
          answer: "Er war krank",
          explanation: "يذكر النص: 'leider war ich gestern krank'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "ما هي التحية الرسمية المناسبة عند مراسلة سيدة بالاسم (Frau Weber)؟",
        options: ["Sehr geehrte Frau Weber,", "Lieber Frau Weber,", "Hallo Frau Weber,", "Guten Morgen Frau Weber,"],
        answer: "Sehr geehrte Frau Weber,",
        explanation: "للنساء رسمياً نستخدم: Sehr geehrte Frau + اللقب.",
      },
    ],
  },
  {
    id: "a2_2_2",
    level: "A2.2",
    number: 2,
    titleArabic: "المعاملات والدوائر الرسمية",
    titleGerman: "Behörden und Ämter",
    descriptionArabic: "مراجعة الدوائر الحكومية في ألمانيا (Bürgeramt, Ausländerbehörde, Jobcenter) وتعبئة الاستمارات.",
    grammarExplanation:
      "التعامل مع الوثائق الرسمية والمصطلحات الإدارية: ein Formular ausfüllen (تعبئة استمارة)، einen Antrag stellen (تقديم طلب رسمي)، die Meldebescheinigung (شهادة تسجيل السكن).",
    grammarRules: [
      {
        rule: "مصطلحات الدوائر الحكومية",
        explanation: "das Bürgeramt (مكتب شؤون المواطنين لتسجيل السكن Anmeldung), die Ausländerbehörde (مكتب شؤون الأجانب والإقامة), das Finanzamt (مكتب الضرائب).",
        example: "Ich muss meinen Wohnsitz beim Bürgeramt anmelden.",
        exampleArabic: "يجب علي تسجيل محل إقامتي لدى مكتب شؤون المواطنين.",
      },
    ],
    examples: [
      { german: "Ich möchte meinen Wohnsitz anmelden.", arabic: "أود تسجيل عنوان سكني.", phonetic: "إش موشته ماينن فون زيتس آن ميلدن" },
      { german: "Füllen Sie bitte dieses Formular aus.", arabic: "املأ هذه الاستمارة من فضلك.", phonetic: "فولن زي بِتّه ديزس فورمندلار أوس" },
      { german: "Bringen Sie Ihren Reisepass mit.", arabic: "أحضر معك جواز سفرك.", phonetic: "برينغن زي إيرن رايزه باس مِت" },
    ],
    vocabulary: [
      { german: "der Antrag", arabic: "الطلب الرسمي", phonetic: "دير أن تراك", article: "der", exampleSentence: "Einen Antrag auf Verlängerung stellen.", exampleArabic: "تقديم طلب تمديد." },
      { german: "das Dokument / die Urkunde", arabic: "الوثيقة / الشهادة الرسمية", phonetic: "داس دوكومنت", article: "das", exampleSentence: "Alle Dokumente im Original vorlegen.", exampleArabic: "تقديم كافة الوثائق بنسخها الأصلية." },
      { german: "die Anmeldung", arabic: "تسجيل السكن / التسجيل الرسمي", phonetic: "دي آن ميلدونغ", article: "die", exampleSentence: "Die Anmeldung muss innerhalb von 14 Tagen erfolgen.", exampleArabic: "يجب أن يتم تسجيل السكن خلال 14 يوماً." },
    ],
    readingPassage: {
      german: "Nach dem Umzug nach Hamburg geht Leyla zur Ausländerbehörde. Sie hat alle notwendigen Unterlagen vorbereitet: ihren Pass, den Mietvertrag, die Wohnungsgeberbestätigung und ein Passfoto. Der Sachbearbeiter prüft die Dokumente und erteilt ihr den Aufenthaltstitel.",
      arabic: "بعد الانتقال إلى هامبورغ تذهب ليلى إلى دائرة شؤون الأجانب. جهزت جميع الأوراق اللازمة: جواز سفرها، وعقد الإيجار، وتأكيد المؤجر، وصورة شخصية. يفحص الموظف المسؤول الوثائق ويمنحها تصريح الإقامة.",
      questions: [
        {
          question: "Welches Dokument braucht Leyla unter anderem?",
          options: ["Den Mietvertrag", "Einen Führerschein", "Ein Flugticket", "Eine Rechnung"],
          answer: "Den Mietvertrag",
          explanation: "يذكر النص: 'den Mietvertrag'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich muss das Formular vollständig ___ (تعبئة).",
        options: ["ausfüllen", "auschecken", "aufstehen", "abfahren"],
        answer: "ausfüllen",
        explanation: "ausfüllen تعني تعبئة استمارة أو بيانات.",
      },
    ],
  },
  {
    id: "a2_2_3",
    level: "A2.2",
    number: 3,
    titleArabic: "البحث عن عمل والسيرة الذاتية",
    titleGerman: "Bewerbung und Lebenslauf",
    descriptionArabic: "مكونات ملف التقدم للوظيفة في ألمانيا (Bewerbungsmappe)، كتابة السيرة الذاتية والمقابلة الشخصية (Vorstellungsgespräch).",
    grammarExplanation:
      "يتكون ملف التقدم للوظيفة في ألمانيا من: das Anschreiben (خطاب التغطية)، der Lebenslauf (السيرة الذاتية على شكل جدول)، die Zeugnisse (الشهادات والخبرات).",
    grammarRules: [
      {
        rule: "عبارات خطاب التقدم للوظيفة",
        explanation: "Hiermit bewerbe ich mich um die Stelle als... (بهذا أتقدم للوظيفة كـ...). Ich habe mehrjährige Erfahrung im Bereich... (لدي خبرة لعدة سنوات في مجال...).",
        example: "Ich bewerbe mich um eine Vollzeitstelle.",
        exampleArabic: "أنا أتقدم لوظيفة بدوام كامل.",
      },
    ],
    examples: [
      { german: "Ich habe mich um eine Stelle beworben.", arabic: "تقدمت بطلب للحصول على وظيفة.", phonetic: "إش هابه ميش أوم آينه شتيله بغوربن" },
      { german: "Ich bin zu einem Vorstellungsgespräch eingeladen.", arabic: "تمت دعوتي لمقابلة عمل شخصية.", phonetic: "إش بن تسو آينم فور شتيلونغز غشبريش آين غلادن" },
      { german: "Meine Stärken sind Teamfähigkeit und Zuverlässigkeit.", arabic: "نقاط قوتي هي العمل الجماعي والموثوقية.", phonetic: "ماينه شتيركن زند تيم فييش كايت" },
    ],
    vocabulary: [
      { german: "der Lebenslauf", arabic: "السيرة الذاتية (CV)", phonetic: "دير ليبنس لاوف", article: "der", exampleSentence: "Der Lebenslauf ist tabellarisch aufgebaut.", exampleArabic: "السيرة الذاتية مبنية على شكل جدول." },
      { german: "das Vorstellungsgespräch", arabic: "مقابلة العمل الشخصية", phonetic: "داس فور شتيلونغز غشبريش", article: "das", exampleSentence: "Ich habe morgen ein Vorstellungsgespräch.", exampleArabic: "لدي غداً مقابلة عمل." },
      { german: "die Erfahrung", arabic: "الخبرة العملية", phonetic: "دي إرفارونغ", article: "die", exampleSentence: "Haben Sie bereits Erfahrung in diesem Beruf?", exampleArabic: "هل لديك خبرة سابقة في هذه المهنة؟" },
    ],
    readingPassage: {
      german: "Tariq hat eine interessante Stellenanzeige im Internet gefunden. Die Firma sucht einen motivierten Elektriker. Tariq schickt seine vollständigen Bewerbungsunterlagen per E-Mail. Zwei Tage später erhält er eine Einladung zum Vorstellungsgespräch.",
      arabic: "وجد طارق إعلان وظيفة مثيراً للاهتمام على الإنترنت. تبحث الشركة عن فني كهربائي متحمس. يرسل طارق ملف التقديم كاملاً عبر الإيميل. بعد يومين يتلقى دعوة لحضور مقابلة العمل.",
      questions: [
        {
          question: "Welche Stelle sucht die Firma?",
          options: ["Einen Koch", "Einen Elektriker", "Einen Arzt", "Einen Verkäufer"],
          answer: "Einen Elektriker",
          explanation: "يذكر النص: 'sucht einen motivierten Elektriker'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich bewerbe mich ___ die offene Stelle. (حرف الجر مع sich bewerben)",
        options: ["um", "für", "an", "bei"],
        answer: "um",
        explanation: "الفعل sich bewerben يأخذ حرف الجر um مع الوظيفة (sich bewerben um eine Stelle).",
      },
    ],
  },
  {
    id: "a2_2_4",
    level: "A2.2",
    number: 4,
    titleArabic: "السكن وعقود الإيجار",
    titleGerman: "Mietvertrag und Wohnen",
    descriptionArabic: "تفاصيل عقد الإيجار الألماني (Kaltmiete, Warmmiete, Kaution, Nebenkosten) وقواعد السكن وقوانين الجيران (Hausordnung).",
    grammarExplanation:
      "المصطلحات المالية للسكن: die Kaltmiete (الإيجار الصافي بدون تدفئة وخدمات)، die Nebenkosten (مصاريف الصيانة والقمامة والمياه)، die Warmmiete (الإيجار الإجمالي الشامل)، die Kaution (مبلغ التأمين، غالباً 3 شهور).",
    grammarRules: [
      {
        rule: "قوانين السكن والهدوء (Ruhezeiten)",
        explanation: "في ألمانيا توجد أوقات هدوء مقدسة قانونياً: كل ليلة من 22:00 حتى 6:00 وطوال يوم الأحد وعطلات نهاية الأسبوع يمنع إحداث أي ضوضاء.",
        example: "Die Kaution beträgt drei Kaltmieten.",
        exampleArabic: "يبلغ مبلغ التأمين قيمة ثلاثة أشهر إيجار أساسي.",
      },
    ],
    examples: [
      { german: "Wie hoch ist die Kaution?", arabic: "كم يبلغ مبلغ التأمين؟", phonetic: "في هوخ إست دي كاوتسيون" },
      { german: "Die Nebenkosten betragen 150 Euro im Monat.", arabic: "المصاريف الإضافية تبلغ 150 يورو شهرياً.", phonetic: "دي نيبن كوستن بتراغن هوندرت فونفتسيغ أورو" },
      { german: "Ab 22 Uhr gilt die Nachtruhe.", arabic: "اعتباراً من الساعة 22 يسري الهدوء الليلي.", phonetic: "أب تسفاي أوند تسفانتسيغ أور غلت دي ناخت روهه" },
    ],
    vocabulary: [
      { german: "die Kaution", arabic: "مبلغ التأمين المسترد", phonetic: "دي كاوتسيون", article: "die", exampleSentence: "Die Kaution wird nach dem Auszug zurückgezahlt.", exampleArabic: "يُعاد التأمين بعد إخلاء الشقة." },
      { german: "die Nebenkosten", arabic: "المصاريف الجانبية والتشغيلية", phonetic: "دي نيبن كوستن", article: "die", exampleSentence: "Heizung und Wasser sind in den Nebenkosten enthalten.", exampleArabic: "التدفئة والماء مشمولان في المصاريف الإضافية." },
      { german: "die Hausordnung", arabic: "لائحة النظام الداخلي للمبنى", phonetic: "دي هاوس أوردنونغ", article: "die", exampleSentence: "Bitte beachten Sie die Hausordnung!", exampleArabic: "يرجى مراعاة النظام الداخلي للمبنى!" },
    ],
    readingPassage: {
      german: "Kareem hat eine schöne Wohnung in Stuttgart gemietet. Die Kaltmiete beträgt 650 Euro, dazu kommen 180 Euro Nebenkosten für Heizung, Wasser und Müll. Vor dem Einzug muss er eine Kaution von 1.950 Euro auf ein Sparkonto überweisen.",
      arabic: "استأجر كريم شقة جميلة في شتوتغارت. الإيجار الصافي 650 يورو، يُضاف إليها 180 يورو مصاريف إضافية للتدفئة والماء والقمامة. قبل الانتقال يجب عليه تحويل مبلغ تأمين قدره 1950 يورو إلى حساب توفير.",
      questions: [
        {
          question: "Wie hoch ist die Kaltmiete?",
          options: ["180 Euro", "650 Euro", "1.950 Euro", "830 Euro"],
          answer: "650 Euro",
          explanation: "يذكر النص: 'Die Kaltmiete beträgt 650 Euro'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Die Miete inklusive Heizung und Nebenkosten heißt ___.",
        options: ["Warmmiete", "Kaltmiete", "Kaution", "Strom"],
        answer: "Warmmiete",
        explanation: "Warmmiete هو الإيجار الدافئ الشامل للتدفئة والخدمات الإضافية.",
      },
    ],
  },
  {
    id: "a2_2_5",
    level: "A2.2",
    number: 5,
    titleArabic: "البنوك والمعاملات المالية",
    titleGerman: "Banken und Finanzen",
    descriptionArabic: "فتح حساب بنكي (Girokonto)، التحويل المالي (Überweisung)، واستخدام البطاقة المصرفية وماكينة الصراف الآلي (Geldautomat).",
    grammarExplanation:
      "المعاملات المصرفية الأساسية: ein Konto eröffnen (فتح حساب)، Geld überweisen (تحويل أموال)، Geld abheben (سحب نقود من الصراف)، der Dauerauftrag (أمر الدفع الدوري التلقائي كالإيجار).",
    grammarRules: [
      {
        rule: "مصطلحات الحساب البنكي والتحويل",
        explanation: "die IBAN (رقم الحساب الدولي), die PIN (الرمز السري للبطاقة), der Kontoauszug (كشف الحساب البنكي).",
        example: "Ich möchte 200 Euro vom Geldautomaten abheben.",
        exampleArabic: "أريد سحب 200 يورو من الصراف الآلي.",
      },
    ],
    examples: [
      { german: "Ich möchte ein Girokonto eröffnen.", arabic: "أود فتح حساب جاري.", phonetic: "إش موشته آين جيرو كونتو إير أوفنن" },
      { german: "Wo finde ich den nächsten Geldautomaten?", arabic: "أين أجد أقرب صراف آلي؟", phonetic: "فو فينده إش دين نيكستن غيلد أوتوماتن" },
      { german: "Geben Sie Ihre Geheimzahl (PIN) ein.", arabic: "أدخل رقمك السري (PIN).", phonetic: "غيبن زي إيره غهايم تسال آين" },
    ],
    vocabulary: [
      { german: "das Girokonto", arabic: "الحساب البنكي الجاري", phonetic: "داس جيرو كونتو", article: "das", exampleSentence: "Mein Gehalt kommt auf das Girokonto.", exampleArabic: "راتبي ينزل على الحساب الجاري." },
      { german: "überweisen", arabic: "يحول أموالاً بنكياً", phonetic: "أوبر فايزن", exampleSentence: "Ich überweise die Miete jeden Monat.", exampleArabic: "أحول الإيجار كل شهر." },
      { german: "abheben", arabic: "يسحب نقوداً", phonetic: "أب هيبن", exampleSentence: "Geld an der Kasse abheben.", exampleArabic: "سحب النقود عند الصندوق." },
    ],
    readingPassage: {
      german: "Um in Deutschland ein Gehalt zu bekommen oder eine Wohnung zu mieten, braucht man ein deutsches Girokonto. Man geht mit seinem Ausweis und der Meldebescheinigung zur Bankfiliale oder eröffnet das Konto online per Video-Ident-Verfahren.",
      arabic: "للحصول على راتب أو استئجار شقة في ألمانيا يحتاج المرء إلى حساب بنكي جاري ألماني. يذهب الشخص ببطاقة هويته وشهادة تسجيل السكن إلى فرع البنك أو يفتح الحساب عبر الإنترنت بخاصية التعرف المرئي بالفيديو.",
      questions: [
        {
          question: "Was braucht man unter anderem, um ein Bankkonto zu eröffnen?",
          options: ["Ausweis und Meldebescheinigung", "Einen Flugschein", "Nur Bargeld", "Ein Hotelzimmer"],
          answer: "Ausweis und Meldebescheinigung",
          explanation: "يذكر النص: 'mit seinem Ausweis und der Meldebescheinigung'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich muss Geld am Geldautomaten ___ (سحب).",
        options: ["abheben", "überweisen", "eröffnen", "ausfüllen"],
        answer: "abheben",
        explanation: "Geld abheben تعني سحب النقود من الصراف الآلي.",
      },
    ],
  },
  {
    id: "a2_2_6",
    level: "A2.2",
    number: 6,
    titleArabic: "وسائل الإعلام والتكنولوجيا",
    titleGerman: "Medien und Technologie",
    descriptionArabic: "استخدام الهواتف الذكية وتطبيقات التواصل والإنترنت وتأثير التكنولوجيا على الحياة الحديثة.",
    grammarExplanation:
      "مفردات العالم الرقمي والتكنولوجيا: im Internet surfen, eine App herunterladen, das Passwort ändern, Daten schützen.",
    grammarRules: [
      {
        rule: "أفعال واستخدامات التكنولوجيا",
        explanation: "herunterladen / downloaden (تحميل ملف), speichern (حفظ), löschen (حذف), teilen (مشاركة).",
        example: "Ich habe mir eine nützliche App zum Deutschlernen heruntergeladen.",
        exampleArabic: "حمّلت تطبيقاً مفيداً لتعلم الألمانية.",
      },
    ],
    examples: [
      { german: "Wie lautet das WLAN-Passwort?", arabic: "ما هي كلمة سر شبكة الواي فاي؟", phonetic: "في لاوتت داس فيلان باس فورت" },
      { german: "Ich bin immer online erreichbar.", arabic: "أنا متاح دائماً على الإنترنت.", phonetic: "إش بن إمر أونلاين إير رايش بار" },
    ],
    vocabulary: [
      { german: "das Passwort", arabic: "كلمة المرور / كلمة السر", phonetic: "داس باس فورت", article: "das", exampleSentence: "Verwende ein sicheres Passwort!", exampleArabic: "استخدم كلمة مرور آمنة!" },
      { german: "der Datenschutz", arabic: "حماية البيانات والخصوصية", phonetic: "دير داتن شوتس", article: "der", exampleSentence: "Datenschutz ist in Deutschland sehr wichtig.", exampleArabic: "حماية البيانات مهمة جداً في ألمانيا." },
    ],
    readingPassage: {
      german: "Heutzutage nutzt fast jeder ein Smartphone im Alltag. Wir lesen Nachrichten online, halten Kontakt zu Familien im Ausland über Video-Apps und lernen Sprachen digital. Gleichzeitig achten viele Menschen auf den Schutz ihrer persönlichen Daten.",
      arabic: "في الوقت الحاضر يستخدم الجميع تقريباً هاتفاً ذكياً في الحياة اليومية. نقرأ الأخبار عبر الإنترنت، ونتواصل مع العائلات في الخارج عبر تطبيقات الفيديو ونتعلم اللغات رقمياً. وفي الوقت نفسه يحرص الكثيرون على حماية بياناتهم الشخصية.",
      questions: [
        {
          question: "Worauf achten viele Menschen bei der Internetnutzung?",
          options: ["Auf den Schutz persönlicher Daten", "Auf teure Telefone", "Auf weniger Schlaf", "Auf nichts"],
          answer: "Auf den Schutz persönlicher Daten",
          explanation: "يذكر النص: 'achten viele Menschen auf den Schutz ihrer persönlichen Daten'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich muss die Datei auf meinem Computer ___ (حفظ).",
        options: ["speichern", "löschen", "abheben", "anmelden"],
        answer: "speichern",
        explanation: "speichern تعني حفظ الملف أو البيانات.",
      },
    ],
  },
  {
    id: "a2_2_7",
    level: "A2.2",
    number: 7,
    titleArabic: "البيئة وإعادة التدوير",
    titleGerman: "Umwelt und Mülltrennung",
    descriptionArabic: "نظام فرز النفايات الدقيق في ألمانيا (Mülltrennung)، حماية البيئة، ونظام استرجاع العلب (Pfandsystem).",
    grammarExplanation:
      "في ألمانيا يتم فرز القمامة إلى: Gelber Sack / Gelbe Tonne (البلاستيك والمعادن)، Blaue Tonne (الورق والكرتون)، Braune Tonne / Biomüll (بقايا الطعام والمواد العضوية)، Restmüll (النفايات المتبقية غير القابلة للتدوير)، Altglas (الزجاج المصنف حسب اللون).",
    grammarRules: [
      {
        rule: "نظام الرهن Pfand",
        explanation: "عند شراء زجاجة مياه أو علبة عصير يدفع المشتري رهناً (Pfand) بين 8 و 25 سنتاً، ويسترد مبلغه عند إرجاع العبوة لماكينة Pfandautomat في السوبرماركت.",
        example: "Vergiss nicht, die Pfandflaschen zurückzubringen!",
        exampleArabic: "لا تنس إعادة الزجاجات القابلة للرهن!",
      },
    ],
    examples: [
      { german: "Die Mülltrennung ist in Deutschland Pflicht.", arabic: "فرز النفايات إلزامي في ألمانيا.", phonetic: "دي مول ترينونغ إست إن دويتشلاند بفليشت" },
      { german: "Glasflaschen wirft man in den Glascontainer.", arabic: "الزجاجات الزجاجية تُرمى في حاوية الزجاج.", phonetic: "غلاس فلاشين فيرفت مان إن دين غلاس كونتينر" },
    ],
    vocabulary: [
      { german: "die Mülltrennung", arabic: "فرز النفايات والقمامة", phonetic: "دي مول ترينونغ", article: "die", exampleSentence: "Mülltrennung schont die Umwelt.", exampleArabic: "فرز القمامة يحمي البيئة." },
      { german: "das Pfand", arabic: "مبلغ الرهن على الزجاجات والعلب", phonetic: "داس بفاند", article: "das", exampleSentence: "Dafür gibt es 25 Cent Pfand.", exampleArabic: "مقابل هذا يوجد 25 سنتاً رهن." },
      { german: "recyceln", arabic: "يعيد تدوير", phonetic: "ريتسايكلن", exampleSentence: "Plastik kann man recyceln.", exampleArabic: "يمكن إعادة تدوير البلاستيك." },
    ],
    readingPassage: {
      german: "Deutschland hat eines der modernsten Recyclingsysteme der Welt. In jedem Haushalt gibt es verschiedene Mülleimer für Papier, Plastikverpackungen, Biomüll und Restmüll. Fast alle Plastik- und Glasflaschen haben Pfand, das man im Supermarkt zurückbekommt.",
      arabic: "تمتلك ألمانيا واحداً من أحدث أنظمة إعادة التدوير في العالم. في كل منزل توجد سلات قمامة مختلفة للورق، العبوات البلاستيكية، النفايات العضوية، وبقايا النفايات. وتخضع جميع الزجاجات البلاستيكية والزجاجية تقريباً لنظام الرهن الذي يسترده المرء في السوبرماركت.",
      questions: [
        {
          question: "Wo bekommt man das Pfandgeld zurück?",
          options: ["Auf der Post", "Im Supermarkt", "Beim Arzt", "In der Schule"],
          answer: "Im Supermarkt",
          explanation: "يذكر النص: 'das man im Supermarkt zurückbekommt'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Papier und Karton gehören in die ___ Tonne.",
        options: ["blaue", "gelbe", "braune", "schwarze"],
        answer: "blaue",
        explanation: "الورق والكرتون يوضع في الحاوية الزرقاء (die blaue Tonne).",
      },
    ],
  },
  {
    id: "a2_2_8",
    level: "A2.2",
    number: 8,
    titleArabic: "الثقافة والعادات في ألمانيا",
    titleGerman: "Kultur und Traditionen in Deutschland",
    descriptionArabic: "الأعياد الرسمية، الاحتفالات التقليدية (Weihnachten, Ostern, Karneval)، والعادات الاجتماعية في المجتمع الألماني.",
    grammarExplanation:
      "التعرف على أهم المناسبات: Weihnachten (عيد الميلاد في ديسمبر)، Silvester (رأس السنة 31 ديسمبر)، Ostern (عيد الفصح ربيعاً)، والأعياد الوطنية كـ Tag der Deutschen Einheit (يوم الوحدة الألمانية في 3 أكتوبر).",
    grammarRules: [
      {
        rule: "تهاني الأعياد والمناسبات",
        explanation: "Frohe Weihnachten! (عيد ميلاد مجيد!), Frohes neues Jahr! / Guten Rutsch! (سنة جديدة سعيدة!), Frohe Ostern! (عيد فصح سعيد!).",
        example: "Ich wünsche Ihnen ein frohes und gesundes neues Jahr!",
        exampleArabic: "أتمنى لحضرتك عاماً جديداً سعيداً وبصحة وعافية!",
      },
    ],
    examples: [
      { german: "Frohe Feiertage!", arabic: "أعياد وعطلات سعيدة!", phonetic: "فروهه فاير تاغه" },
      { german: "Guten Rutsch ins neue Jahr!", arabic: "بداية موفقة وسعيدة للعام الجديد!", phonetic: "غوتن روتش إنس نويه يار" },
    ],
    vocabulary: [
      { german: "der Feiertag", arabic: "يوم العطلة الرسمية / العيد", phonetic: "دير فاير تاك", article: "der", exampleSentence: "Am Feiertag sind die Geschäfte geschlossen.", exampleArabic: "في يوم العطلة الرسمية تكون المحلات مغلقة." },
      { german: "die Tradition", arabic: "التقليد / العادة المتوارثة", phonetic: "دي تراديتسيون", article: "die", exampleSentence: "Eine alte deutsche Tradition.", exampleArabic: "تقليد ألماني قديم." },
    ],
    readingPassage: {
      german: "Der 3. Oktober ist der 'Tag der Deutschen Einheit' und der offizielle Nationalfeiertag in Deutschland. An diesem Tag feiern die Menschen die Wiedervereinigung von Ost- und Westdeutschland im Jahr 1990. An Feiertagen haben die meisten Geschäfte und Behörden geschlossen.",
      arabic: "يوم 3 أكتوبر هو 'يوم الوحدة الألمانية' وهو العيد الوطني الرسمي في ألمانيا. في هذا اليوم يحتفل الناس بإعادة توحيد ألمانيا الشرقية والغربية في عام 1990. وفي أيام العطل الرسمية تكون معظم المتاجر والدوائر الحكومية مغلقة.",
      questions: [
        {
          question: "Wann ist der Nationalfeiertag in Deutschland?",
          options: ["Am 1. Mai", "Am 3. Oktober", "Am 24. Dezember", "Am 1. Januar"],
          answer: "Am 3. Oktober",
          explanation: "يذكر النص: 'Der 3. Oktober ist der Tag der Deutschen Einheit'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Was wünscht man sich vor dem 1. Januar?",
        options: ["Guten Rutsch!", "Gute Besserung!", "Guten Appetit!", "Viel Glück beim Examen!"],
        answer: "Guten Rutsch!",
        explanation: "Guten Rutsch! هي التهنئة التقليدية الألمانية لدخول العام الجديد.",
      },
    ],
  },
  {
    id: "a2_2_9",
    level: "A2.2",
    number: 9,
    titleArabic: "صيغة التمني والطلب المهذب Konjunktiv II",
    titleGerman: "Konjunktiv II (hätte, wäre, würde + Infinitiv)",
    descriptionArabic: "صيغة الافتراض والتمني والطلب شديد اللباقة باستخدام hätte (لو كان لدي) و wäre (لو كنت) و würde + Infinitiv.",
    grammarExplanation:
      "يستخدم Konjunktiv II في حالتين: 1. الطلب المهذب جداً (Würden Sie mir bitte helfen? = هل تتكرم بمساعدتي؟). 2. التمني الخيالي غير الواقعي (Wenn ich reich wäre, würde ich eine Weltreise machen = لو كنت ثرياً لقمت برحلة حول العالم).",
    grammarRules: [
      {
        rule: "أشكال Konjunktiv II الأساسية",
        explanation: "haben -> hätte (ich hätte, du hättest, er hätte). sein -> wäre (ich wäre, du wärst, er wäre). باقي الأفعال -> würde + Infinitiv في نهاية الجملة.",
        example: "Ich hätte gerne ein Glas Wasser. Was würdest du tun?",
        exampleArabic: "أود لو سمحت كأساً من الماء. ماذا كنت ستفعل؟",
      },
    ],
    examples: [
      { german: "Ich hätte gerne mehr Zeit.", arabic: "أتمنى لو كان لدي وقت أكثر.", phonetic: "إش هيته غيرنه مير تسايت" },
      { german: "Wenn ich viel Geld hätte, würde ich ein Haus kaufen.", arabic: "لو كان لدي مال كثير لاشتريت بيتاً.", phonetic: "فن إش فيل غيلد هيته فورده إش آين هاوس كاوفر" },
      { german: "Würden Sie mir bitte das Fenster öffnen?", arabic: "هل تتكرم وتفتح لي النافذة من فضلك؟", phonetic: "فوردن زي مير بِتّه داس فنستر أوفنن" },
    ],
    vocabulary: [
      { german: "der Wunsch / die Wünsche", arabic: "الأمنية / الرغبة", phonetic: "دير فونش", article: "der", exampleSentence: "Ich habe einen großen Wunsch.", exampleArabic: "لدي أمنية كبيرة." },
      { german: "der Traum", arabic: "الحلم", phonetic: "دير تراوم", article: "der", exampleSentence: "Mein Traum ist es, Arzt zu werden.", exampleArabic: "حلمي أن أصبح طبيباً." },
    ],
    readingPassage: {
      german: "Wenn ich im Lotto eine Million Euro gewinnen würde, wäre ich überglücklich. Ich würde meinen Eltern ein schönes Haus schenken und eine Reise um die ganze Welt machen. Ich hätte dann keine Geldsorgen mehr.",
      arabic: "لو ربحت مليون يورو في اليانصيب لكنت في غاية السعادة. كنت سأهدي والديّ منزلاً جميلاً وسأقوم برحلة حول العالم كله. ولم يعد لدي أي هموم مالية.",
      questions: [
        {
          question: "Was würde die Person ihren Eltern schenken?",
          options: ["Ein Auto", "Ein schönes Haus", "Ein Flugticket", "Nichts"],
          answer: "Ein schönes Haus",
          explanation: "يذكر النص: 'Ich würde meinen Eltern ein schönes Haus schenken'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ Sie mir bitte helfen? (طلب مهذب بـ würde)",
        options: ["Würden", "Werden", "Wurden", "Wollen"],
        answer: "Würden",
        explanation: "Würden Sie bitte... هي صيغة Konjunktiv II للطلب فائق الأدب.",
      },
    ],
  },
  {
    id: "a2_2_10",
    level: "A2.2",
    number: 10,
    titleArabic: "المبني للمجهول Passiv",
    titleGerman: "Das Passiv Präsens (werden + Partizip II)",
    descriptionArabic: "صياغة المبني للمجهول في الحاضر للتركيز على الفعل والحدث بدلاً من الفاعل باستخدام werden + Partizip II.",
    grammarExplanation:
      "يتكون المبني للمجهول (Passiv Präsens) من: تصريف فعل werden في الحاضر في المركز 2 + التصريف الثالث (Partizip II) في نهاية الجملة تماماً! إذا أردنا ذكر الفاعل نستخدم حرف الجر von + Dativ.",
    grammarRules: [
      {
        rule: "تركيب الجملة في Passiv",
        explanation: "المفعول به يصبح نائب فاعل (Nominativ) + werden مصرفاً + (von + Dativ) + Partizip II am Ende.",
        example: "Das Auto wird in Deutschland gebaut.",
        exampleArabic: "السيارة تُصنع في ألمانيا.",
      },
      {
        rule: "تصريف werden في الحاضر",
        explanation: "ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.",
        example: "Die E-Mails werden täglich beantwortet.",
        exampleArabic: "يتم الرد على الإيميلات يومياً.",
      },
    ],
    examples: [
      { german: "Deutsch wird von vielen Menschen gelernt.", arabic: "اللغة الألمانية تُتعلم من قِبل الكثير من الناس.", phonetic: "دويتش فيرد فون فيلن منشن غيليرنت" },
      { german: "Die Rechnung wird sofort bezahlt.", arabic: "الفاتورة تُدفع فوراً.", phonetic: "دي ريشنونغ فيرد زوفورت بتسالت" },
      { german: "Hier wird nicht geraucht!", arabic: "هنا لا يُدخن! (التدخين ممنوع هنا)", phonetic: "هير فيرد نيشت غراوخت" },
    ],
    vocabulary: [
      { german: "bauen", arabic: "يبني / يصنع", phonetic: "باون", exampleSentence: "Das Haus wird gebaut.", exampleArabic: "البيت قيد البناء." },
      { german: "reparieren", arabic: "يصلح", phonetic: "ريبارييرن", exampleSentence: "Das Auto wird repariert.", exampleArabic: "السيارة يجري تصليحها." },
    ],
    readingPassage: {
      german: "In dieser modernen Bäckerei wird das Brot jeden Morgen frisch gebacken. Zuerst wird der Teig vorbereitet. Dann wird er im großen Ofen gebacken und schließlich wird das frische Brot an die Kunden verkauft.",
      arabic: "في هذا المخبز الحديث يُخبز الخبز كل صباح طازجاً. أولاً يتم تحضير العجين. ثم يُخبز في الفرن الكبير وأخيراً يُباع الخبز الطازج للزبائن.",
      questions: [
        {
          question: "Wann wird das Brot gebacken?",
          options: ["Jeden Morgen", "Am Abend", "Nur sonntags", "Einmal im Monat"],
          answer: "Jeden Morgen",
          explanation: "يذكر النص: 'wird das Brot jeden Morgen frisch gebacken'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Das Zimmer ___ jeden Tag geputzt. (Passiv)",
        options: ["wird", "werden", "wirst", "ist"],
        answer: "wird",
        explanation: "مع المفرد Das Zimmer نستخدم wird + Partizip II (wird geputzt).",
      },
    ],
  },
  {
    id: "a2_2_11",
    level: "A2.2",
    number: 11,
    titleArabic: "نهايات الصفات بعد الأداة المعرفة",
    titleGerman: "Adjektivdeklination mit bestimmtem Artikel (der, die, das)",
    descriptionArabic: "قواعد نهايات الصفات بعد أدوات التعريف في حالات Nominativ و Akkusativ و Dativ (قاعدة -e و -en).",
    grammarExplanation:
      "بعد أداة المعرفة (der, die, das) تكون نهايات الصفة سهلة جداً: تأخذ الصفة النهاية -e فقط في حالة الرفع مع المفرد (der gute Mann, die schöne Frau, das neue Auto) وفي النصب مع المحايد والمؤنث. في كل الحالات الأخرى تأخذ الصفة النهاية -en دائماً (الجمع دائماً -en، الداتيف دائماً -en، والنصب المذكر -en)!",
    grammarRules: [
      {
        rule: "القاعدة الذهبية لأدوات المعرفة",
        explanation: "المفرد Nominativ يأخذ -e (ما عدا النصب المذكر den -en). الجمع في كل الحالات يأخذ -en! والداتيف في كل الحالات يأخذ -en!",
        example: "Der neue Nachbar ist sehr nett. Ich kenne den neuen Nachbarn.",
        exampleArabic: "الجار الجديد لطيف جداً. أنا أعرف الجار الجديد.",
      },
    ],
    examples: [
      { german: "Der kleine Junge spielt im Garten.", arabic: "الولد الصغير يلعب في الحديقة.", phonetic: "دير كلاينه يونغه شبيلت إم غارتن" },
      { german: "Ich kaufe den schwarzen Mantel.", arabic: "أشتري المعطف الأسود (Akkusativ -en).", phonetic: "إش كاوغه دين شفارتسن مانتل" },
      { german: "Ich spreche mit der netten Dame.", arabic: "أتحدث مع السيدة اللطيفة (Dativ -en).", phonetic: "إش شبرخه مِت دير نيتن دامه" },
    ],
    vocabulary: [
      { german: "das Adjektiv", arabic: "الصفة", phonetic: "داس أديكتيف", article: "das", exampleSentence: "Adjektive beschreiben Nomen.", exampleArabic: "الصفات تصف الأسماء." },
      { german: "die Deklination", arabic: "الإعراب / التصريف", phonetic: "دي ديكليناتسيون", article: "die", exampleSentence: "Die Deklination der Adjektive.", exampleArabic: "تصريف نهايات الصفات." },
    ],
    readingPassage: {
      german: "Der neue Sprachkurs beginnt nächste Woche. Die freundliche Lehrerin erklärt die deutsche Grammatik sehr gut. In den modernen Klassenräumen lernen die motivierten Schüler mit viel Spaß.",
      arabic: "تبدأ الدورة اللغوية الجديدة الأسبوع القادم. المعلمة الودودة تشرح قواعد الألمانية بشكل ممتاز. في القاعات الدراسية الحديثة يتعلم الطلاب المتحمسون بمتعة بالغة.",
      questions: [
        {
          question: "Wie ist die Lehrerin?",
          options: ["Streng", "Freundlich", "Müde", "Krank"],
          answer: "Freundlich",
          explanation: "يذكر النص: 'Die freundliche Lehrerin'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich helfe dem alt___ Mann. (Dativ بعد أداة معرفة)",
        options: ["en", "e", "er", "es"],
        answer: "en",
        explanation: "في حالة Dativ تأخذ الصفة بعد أداة المعرفة النهاية -en دائماً (dem alten Mann).",
      },
    ],
  },
  {
    id: "a2_2_12",
    level: "A2.2",
    number: 12,
    titleArabic: "نهايات الصفات بعد الأداة النكرة والملكية",
    titleGerman: "Adjektivdeklination mit unbestimmtem Artikel (ein, mein, kein)",
    descriptionArabic: "تصريف نهايات الصفات بعد ein / kein / mein (المذكر -er، المحايد -es، المؤنث -e، الجمع -en).",
    grammarExplanation:
      "بما أن الأداة النكرة ein لا توضح نوع المذكر والمحايد في الرفع، فإن الصفة تعوض ذلك وتأخذ النهاية الإعرابية: ein guter Mann (مذكر -er), ein schönes Haus (محايد -es), eine nette Frau (مؤنث -e). مع Dativ و Akkusativ المذكر والجمع تكون النهاية دائماً -en!",
    grammarRules: [
      {
        rule: "جدول نهايات الصفة بعد ein / mein / kein في الرفع",
        explanation: "المذكر: ein gut-er Mann. المحايد: ein neu-es Auto. المؤنث: eine schön-e Stadt. الملكية في الجمع: meine neu-en Freunde (-en).",
        example: "Er ist ein fleißiger Student. Sie hat ein rotes Auto.",
        exampleArabic: "هو طالب مجتهد. لديها سيارة حمراء.",
      },
    ],
    examples: [
      { german: "Das ist ein schöner Tag.", arabic: "هذا يوم جميل (ein schön-er Tag).", phonetic: "داس إست آين شونر تاك" },
      { german: "Sie hat ein neues Fahrrad gekauft.", arabic: "اشترت دراجة جديدة (ein neu-es Fahrrad).", phonetic: "زي هات آين نويس فار راد غكاوفت" },
    ],
    vocabulary: [
      { german: "wertvoll", arabic: "ثمين / ذو قيمة عالية", phonetic: "فيرت فول", exampleSentence: "Ein wertvoller Tipp.", exampleArabic: "نصيحة ثمينة." },
      { german: "wunderbar", arabic: "رائع / بديع", phonetic: "فوندر بار", exampleSentence: "Ein wunderbarer Urlaub.", exampleArabic: "عطلة رائعة." },
    ],
    readingPassage: {
      german: "Herr Meyer hat sich ein schnelles Auto gekauft. Es ist ein moderner Wagen mit einem sparsamen Motor. Seine Frau wünscht sich ein gemütliches Haus mit einem großen Garten für ihre zwei kleinen Kinder.",
      arabic: "اشترى السيد ماير سيارة سريعة. إنها مركبة حديثة بمحرك اقتصادي. وتتمنى زوجته بيتاً مريحاً بحديقة كبيرة لطفليهما الصغيرين.",
      questions: [
        {
          question: "Was für ein Haus wünscht sich die Frau?",
          options: ["Ein altes Haus", "Ein gemütliches Haus", "Ein kleines Haus", "Kein Haus"],
          answer: "Ein gemütliches Haus",
          explanation: "يذكر النص: 'ein gemütliches Haus'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er ist ein gut___ Freund von mir. (der Freund في الرفع)",
        options: ["er", "es", "en", "e"],
        answer: "er",
        explanation: "بعد ein مع اسم مذكر في الرفع تأخذ الصفة -er (ein guter Freund).",
      },
    ],
  },
  {
    id: "a2_2_13",
    level: "A2.2",
    number: 13,
    titleArabic: "الأسماء الموصولة Relativsätze",
    titleGerman: "Relativsätze im Nominativ und Akkusativ",
    descriptionArabic: "ربط الجمل باستخدام ضمائر الوصل (der, die, das, die) التي تعني 'الذي / التي / الذين' وإرسال الفعل للنهاية.",
    grammarExplanation:
      "تستخدم الجمل الموصولة (Relativsätze) لوصف اسم وإعطاء تفاصيل إضافية عنه. ضمير الوصل يطابق الاسم في الجنس والعدد، وحالته الإعرابية تحددها وظيفته داخل جملة الصلة! الفعل المصرف يذهب إلى نهاية جملة الصلة تماماً.",
    grammarRules: [
      {
        rule: "ضمائر الوصل في الرفع Nominativ والنصب Akkusativ",
        explanation: "في الرفع: der Mann, der... / die Frau, die... / das Kind, das... / die Leute, die... في النصب (Akk): der Mann, den ich sehe... / die Frau, die ich kenne... / das Buch, das ich lese...",
        example: "Das ist der Mann, der sehr gut Deutsch spricht.",
        exampleArabic: "هذا هو الرجل الذي يتحدث الألمانية بشكل ممتاز.",
      },
    ],
    examples: [
      { german: "Der Mann, der dort steht, ist mein Lehrer.", arabic: "الرجل الذي يقف هناك هو أستاذي.", phonetic: "دير مان دير دورت شتيت إست ماين ليرر" },
      { german: "Das ist das Buch, das ich gestern gekauft habe.", arabic: "هذا هو الكتاب الذي اشتريته بالأمس.", phonetic: "داس إست داس بوخ داس إش غسترن غكاوفت هابه" },
    ],
    vocabulary: [
      { german: "der Nachbar / die Nachbarin", arabic: "الجار / الجارة", phonetic: "دير ناخ بار", article: "der", exampleSentence: "Der Nachbar, der nebenan wohnt.", exampleArabic: "الجار الذي يسكن في الشقة المجاورة." },
      { german: "kennenlernen", arabic: "يتعرف على", phonetic: "كينن ليرنن", exampleSentence: "Menschen, die ich kennengelernt habe.", exampleArabic: "أشخاص تعرفت عليهم." },
    ],
    readingPassage: {
      german: "Berlin ist eine lebendige Stadt, die jedes Jahr Millionen von Touristen anzieht. Viele Menschen besuchen das Brandenburger Tor, das ein berühmtes Wahrzeichen ist. Die Berliner sind Menschen, die für ihre Offenheit bekannt sind.",
      arabic: "برلين مدينة مفعمة بالحياة تجذب ملايين السياح كل عام. يزور الكثير من الناس بوابة براندنبورغ التي تعد معلماً شهيراً. وأهل برلين أناس معروفون بانفتاحهم.",
      questions: [
        {
          question: "Was ist das Brandenburger Tor laut Text?",
          options: ["Ein Hotel", "Ein berühmtes Wahrzeichen", "Ein Restaurant", "Ein Bahnhof"],
          answer: "Ein berühmtes Wahrzeichen",
          explanation: "يذكر النص: 'das ein berühmtes Wahrzeichen ist'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Das ist der Film, ___ ich so gerne mag. (der Film في Akkusativ)",
        options: ["den", "der", "dem", "die"],
        answer: "den",
        explanation: "في جملة الصلة كلمة der Film مفعول به Akkusativ فيكون ضمير الوصل den.",
      },
    ],
  },
  {
    id: "a2_2_14",
    level: "A2.2",
    number: 14,
    titleArabic: "أدوات الربط المزدوجة",
    titleGerman: "Zweiteilige Konnektoren (sowohl...als auch, weder...noch)",
    descriptionArabic: "الربط المزدوج في الجمل الألمانية للتعبير عن الجمع (sowohl...als auch)، النفي المزدوج (weder...noch)، والاختيار (entweder...oder).",
    grammarExplanation:
      "تستخدم الروابط المزدوجة لإثراء الأسلوب: sowohl A als auch B (كلاهما معاً: A وكذلك أيضاً B)، weder A noch B (لا هذا ولا ذاك: لا A ولا B)، entweder A oder B (إما A أو B)، nicht nur A sondern auch B (ليس فقط A بل أيضاً B).",
    grammarRules: [
      {
        rule: "أمثلة الروابط المزدوجة",
        explanation: "Ich spreche sowohl Deutsch als auch Englisch. Er trinkt weder Kaffee noch Tee (لا يشرب هذا ولا ذاك).",
        example: "Ich lerne nicht nur Deutsch, sondern auch Programmieren.",
        exampleArabic: "أنا لا أتعلم الألمانية فحسب، بل البرمجة أيضاً.",
      },
    ],
    examples: [
      { german: "Ich esse sowohl Fleisch als auch Gemüse.", arabic: "أنا آكل كلاً من اللحم وكذلك الخضار.", phonetic: "إش إسه زوفول فلايش ألس أوخ غميوزه" },
      { german: "Er hat weder Zeit noch Geld.", arabic: "ليس لديه لا وقت ولا مال.", phonetic: "إير هات فيدر تسايت نوخ غيلد" },
      { german: "Entweder wir fahren mit dem Zug oder wir fliegen.", arabic: "إما أن نسافر بالقطار أو نسافر بالطائرة.", phonetic: "إنتفيدر فير فارن مِت ديم تسوغ أودر فير فليغن" },
    ],
    vocabulary: [
      { german: "die Mehrsprachigkeit", arabic: "تعدد اللغات", phonetic: "دي مير شبراخيغ كايت", article: "die", exampleSentence: "Mehrsprachigkeit ist ein großer Vorteil.", exampleArabic: "تعدد اللغات ميزة وفائدة كبيرة." },
      { german: "die Auswahl", arabic: "الاختيار / التشكيلة", phonetic: "دي أوس فال", article: "die", exampleSentence: "Eine große Auswahl haben.", exampleArabic: "امتلاك خيارات وتشكيلة واسعة." },
    ],
    readingPassage: {
      german: "Nour ist eine talentierte Studentin. Sie spricht sowohl fließend Arabisch als auch hervorragend Deutsch und Englisch. In ihrer Freizeit treibt sie nicht nur viel Sport, sondern spielt auch leidenschaftlich Geige.",
      arabic: "نور طالبة موهوبة. تتحدث كلاً من العربية بطلاقة وكذلك الألمانية والإنجليزية بشكل ممتاز. في وقت فراغها لا تمارس الكثير من الرياضة فحسب، بل تعزف الكمان أيضاً بشغف.",
      questions: [
        {
          question: "Welches Musikinstrument spielt Nour?",
          options: ["Klavier", "Gitarre", "Geige", "Schlagzeug"],
          answer: "Geige",
          explanation: "يذكر النص: 'sondern spielt auch leidenschaftlich Geige'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er trinkt ___ Kaffee noch Tee. (النفي المزدوج)",
        options: ["weder", "sowohl", "entweder", "nicht"],
        answer: "weder",
        explanation: "التركيب هو: weder ... noch (لا ... ولا).",
      },
    ],
  },
  {
    id: "a2_2_15",
    level: "A2.2",
    number: 15,
    titleArabic: "حروف الجر الزمنية المتقدمة",
    titleGerman: "Temporale Präpositionen (während, seit, bis, ab, vor, nach)",
    descriptionArabic: "حروف الجر التي تعبر عن الزمان واستخداماتها الدقيقة مع الحالات الإعرابية المختلفة.",
    grammarExplanation:
      "seit + Dativ (منذ - حدث بدأ في الماضي وما زال مستمراً حتى الآن!)، ab + Dativ (اعتباراً من/ابتداءً من نقطة زمنية)، während + Genitiv/Dativ (أثناء/خلال)، bis (حتى نهاية وقت محدد)، vor + Dativ (قبل)، nach + Dativ (بعد).",
    grammarRules: [
      {
        rule: "استخدام seit الحاسم",
        explanation: "نستخدم seit مع الحاضر Präsens لأن الفعل ما زال مستمراً! مثال: Ich lerne seit sechs Monaten Deutsch (أتعلم الألمانية منذ 6 أشهر وما زلت أتعلم).",
        example: "Seit wann wohnst du in Frankfurt? - Seit einem Jahr.",
        exampleArabic: "منذ متى تسكن في فرانكفورت؟ - منذ عام.",
      },
    ],
    examples: [
      { german: "Ich lebe seit zwei Jahren in Deutschland.", arabic: "أعيش في ألمانيا منذ عامين (وما زلت).", phonetic: "إش ليبر زايت تسفاي يارن إن دويتشلاند" },
      { german: "Ab nächster Woche habe ich Urlaub.", arabic: "اعتباراً من الأسبوع القادم أنا في إجازة.", phonetic: "أب نيكستر فوخه هابه إش أورلاوب" },
      { german: "Während des Kurses bitte nicht telefonieren.", arabic: "أثناء الحصة يرجى عدم التحدث بالهاتف.", phonetic: "فيرند ديس كورسس بِتّه نيشت تليفونيرن" },
    ],
    vocabulary: [
      { german: "die Dauer", arabic: "المدة الزمنية / الاستغراق", phonetic: "دي داور", article: "die", exampleSentence: "Wie ist die Dauer des Praktikums?", exampleArabic: "كم تبلغ مدة التدريب العملي؟" },
      { german: "die Zukunft", arabic: "المستقبل", phonetic: "دي تسوكونفت", article: "die", exampleSentence: "Pläne für die Zukunft.", exampleArabic: "خطط للمستقبل." },
    ],
    readingPassage: {
      german: "Ziad wohnt seit drei Monaten in München. Ab November fängt er eine neue Arbeit als Ingenieur an. Vor der Arbeit besucht er jeden Morgen einen Deutschkurs. Nach dem Kurs geht er direkt ins Büro.",
      arabic: "يسكن زياد في ميونخ منذ ثلاثة أشهر. اعتباراً من نوفمبر يبدأ عملاً جديداً كمهندس. قبل العمل يحضر كل صباح دورة ألمانية. وبعد الدورة يذهب مباشرة إلى المكتب.",
      questions: [
        {
          question: "Seit wann wohnt Ziad in München?",
          options: ["Seit drei Monaten", "Seit zwei Jahren", "Seit gestern", "Ab November"],
          answer: "Seit drei Monaten",
          explanation: "يذكر النص: 'seit drei Monaten in München'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich lerne ___ einem Jahr Deutsch. (حدث مستمر حتى الآن)",
        options: ["seit", "vor", "nach", "ab"],
        answer: "seit",
        explanation: "لحدث بدأ في الماضي وما زال مستمراً في الحاضر نستخدم seit + Dativ.",
      },
    ],
  },
  {
    id: "a2_2_16",
    level: "A2.2",
    number: 16,
    titleArabic: "أفعال مع حروف جر ثابتة",
    titleGerman: "Verben mit festen Präpositionen",
    descriptionArabic: "الأفعال التي ترتبط دائماً بحرف جر معين مثل warten auf, denken an, träumen von, sprechen über.",
    grammarExplanation:
      "في الألمانية تقترن أفعال معينة بحروف جر ثابتة لا تتغير، وتحدد تلك الحروف حالة Akkusativ أو Dativ: warten auf + Akkusativ (ينتظر), denken an + Akkusativ (يفكر في), sprechen über + Akkusativ (يتحدث عن), träumen von + Dativ (يحلم بـ), teilnehmen an + Dativ (يشارك في).",
    grammarRules: [
      {
        rule: "قائمة أهم الأفعال بحروف جر ثابتة",
        explanation: "1. warten auf (Akk): Ich warte auf den Bus. 2. denken an (Akk): Ich denke an dich. 3. träumen von (Dat): Ich träume von einer Reise. 4. teilnehmen an (Dat): Er nimmt am Kurs teil.",
        example: "Worauf wartest du? - Ich warte auf meine Freundin.",
        exampleArabic: "ما الذي تنتظره؟ - أنتظر صديقتي.",
      },
    ],
    examples: [
      { german: "Ich freue mich auf die Ferien.", arabic: "أتطلع بفرح وشوق إلى العطلة القادمة.", phonetic: "إش فرويه ميش أوف دي فيرين" },
      { german: "Wir sprechen über das Problem.", arabic: "نحن نتحدث عن المشكلة.", phonetic: "فير شبرخن أوبر داس بروبليم" },
      { german: "Ich danke dir für deine Hilfe.", arabic: "أشكرك على مساعدتك.", phonetic: "إش دانكه دير فور داينه هيلفه" },
    ],
    vocabulary: [
      { german: "warten auf (+ Akk)", arabic: "ينتظر", phonetic: "فارتن أوف", exampleSentence: "Ich warte auf den Zug.", exampleArabic: "أنا أنتظر القطار." },
      { german: "träumen von (+ Dat)", arabic: "يحلم بـ", phonetic: "تراومن فون", exampleSentence: "Sie träumt von einer eigenen Praxis.", exampleArabic: "تحلم بامتلاك عيادتها الخاصة." },
    ],
    readingPassage: {
      german: "Mahmoud bereitet sich intensiv auf seine Sprachprüfung vor. Jeden Tag denkt er an sein großes Ziel: den Studienplatz in Deutschland. Seine Familie glaubt an ihn und unterstützt ihn mit allen Mitteln.",
      arabic: "يستعد محمود بشكل مكثف لامتحان اللغة. يفكر كل يوم في هدفه الكبير: مقعد الدراسة في ألمانيا. تؤمن به عائلته وتدعمه بكل الوسائل.",
      questions: [
        {
          question: "Worauf bereitet sich Mahmoud vor?",
          options: ["Auf seine Sprachprüfung", "Auf den Urlaub", "Auf ein Fußballspiel", "Auf eine Party"],
          answer: "Auf seine Sprachprüfung",
          explanation: "يذكر النص: 'bereitet sich intensiv auf seine Sprachprüfung vor'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich warte ___ den Bus. (der Bus)",
        options: ["auf", "an", "für", "über"],
        answer: "auf",
        explanation: "الفعل warten يرتبط دائماً بحرف الجر auf + Akkusativ.",
      },
    ],
  },
  {
    id: "a2_2_17",
    level: "A2.2",
    number: 17,
    titleArabic: "الظروف الضميرية Pronominaladverbien",
    titleGerman: "Pronominaladverbien (worauf / darauf, wovon / davon)",
    descriptionArabic: "كيف تسأل وتجيب عن الأشياء المرتبطة بحرف جر باستخدام wo(r)+حرف الجر و da(r)+حرف الجر.",
    grammarExplanation:
      "للأشياء غير العاقلة: ندمج wo + حرف الجر للسؤال (Worauf? Womit? Wovon?) و da + حرف الجر للإجابة (Darauf, Damit, Davon). وإذا بدأ حرف الجر بحرف صوتي نضيف حرف r للربط (wo-r-auf, da-r-an). للأشخاص نستخدم حرف الجر + الضمير (Auf wen? Mit wem?).",
    grammarRules: [
      {
        rule: "الفرق بين الأشياء والأشخاص",
        explanation: "للأشياء: Worauf wartest du? - Ich warte darauf (على الباص مثلاً). للأشخاص: Auf wen wartest du? - Ich warte auf Ali.",
        example: "Womit fährst du? - Mit dem Bus. / Wovon träumst du? - Davon träume ich oft.",
        exampleArabic: "بماذا تسافر؟ - بالحافلة. / بماذا تحلم؟ - بهذا أحلم كثيراً.",
      },
    ],
    examples: [
      { german: "Worüber lacht ihr? - Wir lachen darüber.", arabic: "على ماذا تضحكون؟ - نضحك على هذا.", phonetic: "فور أوبر لاخت إير - فير لاخن دار أوبر" },
      { german: "Woran denkst du? - Ich denke an meinen Urlaub.", arabic: "فيم تفكر؟ - أفكر في عطلتي.", phonetic: "فور آن دينكست دو - إش دينكه آن ماينن أورلاوب" },
    ],
    vocabulary: [
      { german: "darauf", arabic: "على ذلك / على هذا الأمر", phonetic: "دار أوف", exampleSentence: "Ich freue mich darauf.", exampleArabic: "أنا متطلع وسعيد بذلك." },
      { german: "worüber", arabic: "عن ماذا / علامَ", phonetic: "فور أوبر", exampleSentence: "Worüber sprecht ihr?", exampleArabic: "عن ماذا تتحدثون؟" },
    ],
    readingPassage: {
      german: "Julia und Karim unterhalten sich über ihre Zukunftspläne. Karim fragt: 'Worauf freust du dich am meisten im nächsten Jahr?' Julia antwortet lächelnd: 'Ich freue mich darauf, meine Familie wiederzusehen und mein Diplom in Händen zu halten.'",
      arabic: "يتحدث جوليا وكريم حول خططهما المستقبلية. يسأل كريم: 'ما أكثر شيء تتطلعين إليه وتفرحين به في العام القادم؟' تجيب جوليا مبتسمة: 'أتطلع إلى رؤية عائلتي مجدداً وحمل شهادتي بين يدي.'",
      questions: [
        {
          question: "Worauf freut sich Julia?",
          options: ["Ihre Familie wiederzusehen", "Ein neues Auto", "Geld ausgeben", "Nichts"],
          answer: "Ihre Familie wiederzusehen",
          explanation: "يذكر النص: 'darauf, meine Familie wiederzusehen'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ wartest du? - Auf den Bus. (سؤال عن شيء غير عاقل)",
        options: ["Worauf", "Auf wen", "Wovon", "Womit"],
        answer: "Worauf",
        explanation: "للسؤال عن شيء غير عاقل مع حرف الجر auf نستخدم Worauf?.",
      },
    ],
  },
  {
    id: "a2_2_18",
    level: "A2.2",
    number: 18,
    titleArabic: "المراجعة الشاملة لشهادة A2 المعتمدة",
    titleGerman: "Große Gesamtwiederholung und A2-Zertifikatstraining",
    descriptionArabic: "مراجعة ختامية مكثفة تحاكي امتحانات Goethe-Zertifikat A2 و Telc A2 وتأهيلك للانطلاق نحو B1.",
    grammarExplanation:
      "تتضمن هذه المراجعة ملخصاً كاملاً لجميع قواعد المستويين A1 و A2 مع نصائح حل أقسام الامتحان الأربعة: القراءة (Lesen)، الاستماع (Hören)، الكتابة (Schreiben)، والمحادثة (Sprechen).",
    grammarRules: [
      {
        rule: "أهم نصائح امتحان A2 المعتمد",
        explanation: "1. القراءة: ابحث عن الكلمات المفتاحية. 2. الكتابة: لا تنس بنية الرسالة (التحية + حرف صغير + الختام) واستخدم weil و wenn لرفع الدرجة. 3. المحادثة: تحدث بوضوح واستخدم صيغ الاحترام.",
        example: "Herzlichen Glückwunsch! Du hast das gesamte A2-Niveau gemeistert!",
        exampleArabic: "ألف مبروك! لقد أتقنت مستوى A2 بالكامل بجدارة واقتدار!",
      },
    ],
    examples: [
      { german: "Ich habe die Prüfung mit 'Sehr gut' bestanden!", arabic: "اجتزت الامتحان بتقدير 'ممتاز'!", phonetic: "إش هابه دي بروفونغ مِت زير غوت بشتاندن" },
      { german: "Mein Deutsch wird jeden Tag besser.", arabic: "لغتي الألمانية تتحسن وتصبح أفضل كل يوم.", phonetic: "ماين دويتش فيرد جيدن تاك بسر" },
    ],
    vocabulary: [
      { german: "die Vorbereitung", arabic: "التحضير والاستعداد", phonetic: "دي فور برايتونغ", article: "die", exampleSentence: "Eine gute Vorbereitung ist die halbe Miete.", exampleArabic: "التحضير الجيد هو نصف النجاح." },
      { german: "das Ziel", arabic: "الهدف / الغاية", phonetic: "داس تسيل", article: "das", exampleSentence: "Du hast dein Ziel erreicht!", exampleArabic: "لقد حققت هدفك!" },
      { german: "weitergehen", arabic: "يستمر / يواصل التقدم", phonetic: "فايتر غيين", exampleSentence: "Der Weg geht weiter zu B1.", exampleArabic: "الطريق مستمر نحو B1." },
    ],
    readingPassage: {
      german: "Was für ein fantastischer Meilenstein! Du hast von A1.1 bis A2.2 über 70 detaillierte Lektionen und Hunderte Übungen absolviert. Du beherrschst nun die wichtigsten Grundlagen der deutschen Grammatik, verstehst Alltagsgespräche, kannst offizielle E-Mails schreiben und dich in Deutschland sicher verständigen. Wir sind stolz auf deinen Fleiß!",
      arabic: "يا له من إنجاز رائع ومحطة فارقة! لقد أنجزت من A1.1 إلى A2.2 أكثر من 70 درساً تفصيلياً ومئات التمارين. أنت الآن تتقن أهم أسس القواعد الألمانية، وتفهم المحادثات اليومية، وتستطيع كتابة رسائل وإيميلات رسمية والتواصل في ألمانيا بكل ثقة. نحن فخورون جداً باجتهادك!",
      questions: [
        {
          question: "Was hat der Lerner von A1.1 bis A2.2 gemeistert?",
          options: ["Alle 70+ Lektionen und die Grammatikgrundlagen", "Nur das Alphabet", "Nichts", "Nur zwei Wörter"],
          answer: "Alle 70+ Lektionen und die Grammatikgrundlagen",
          explanation: "يذكر النص: 'über 70 detaillierte Lektionen und Hunderte Übungen absolviert'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich bin stolz auf meinen Erfolg und bereit für ___!",
        options: ["B1", "A0", "Nichts", "Pause"],
        answer: "B1",
        explanation: "المستوى القادم بعد إتمام A2 هو مستوى B1.",
      },
    ],
  },
];
