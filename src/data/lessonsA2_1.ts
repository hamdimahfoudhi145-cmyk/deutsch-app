import { Lesson } from "../types";

export const lessonsA2_1: Lesson[] = [
  {
    id: "a2_1_1",
    level: "A2.1",
    number: 1,
    titleArabic: "السفر وحجز التذاكر",
    titleGerman: "Reisen und Urlaub",
    descriptionArabic: "مفردات السفر وحجز تذاكر الطيران والقطار ومحادثات محطة القطار والمطار.",
    grammarExplanation:
      "استخدام حروف الجر الخاصة بالسفر: nach للدول والمدن بدون أداة (nach Deutschland)، in للدول ذات الأداة (in die Türkei, in die Schweiz)، zu للأشخاص والأماكن المحددة (zum Bahnhof).",
    grammarRules: [
      {
        rule: "اتجاهات السفر والوجهات",
        explanation: "Wohin fährst du? -> nach Berlin (مدينة), nach Deutschland (دولة), in die Schweiz (دولة مؤنثة), an den Strand (إلى الشاطئ), in die Berge (إلى الجبال).",
        example: "Ich möchte eine Fahrkarte nach Hamburg kaufen.",
        exampleArabic: "أود شراء تذكرة قطار إلى هامبورغ.",
      },
    ],
    examples: [
      { german: "Einfach oder hin und zurück?", arabic: "ذهاب فقط أم ذهاب وعودة؟", phonetic: "آينفاخ أودر هين أوند تسوروك" },
      { german: "Von welchem Gleis fährt der Zug ab?", arabic: "من أي رصيف يغادر القطار؟", phonetic: "فون فلخم غلايس فيرت دير تسوغ أب" },
      { german: "Gute Reise und schönen Urlaub!", arabic: "رحلة موفقة وعطلة سعيدة!", phonetic: "غوته رايزه أوند شونن أورلاوب" },
    ],
    vocabulary: [
      { german: "die Fahrkarte", arabic: "تذكرة السفر", phonetic: "دي فار كارته", article: "die", exampleSentence: "Haben Sie Ihre Fahrkarte dabei?", exampleArabic: "هل معك تذكرتك؟" },
      { german: "das Gleis", arabic: "رصيف القطار", phonetic: "داس غلايس", article: "das", exampleSentence: "Der Zug hält an Gleis 4.", exampleArabic: "القطار يقف عند الرصيف 4." },
      { german: "der Flughafen", arabic: "المطار", phonetic: "دير فلوغ هافن", article: "der", exampleSentence: "Wir fahren zum Flughafen.", exampleArabic: "نحن ذاهبون إلى المطار." },
      { german: "der Urlaub", arabic: "الإجازة / العطلة", phonetic: "دير أورلاوب", article: "der", exampleSentence: "Ich habe zwei Wochen Urlaub.", exampleArabic: "لدي أسبوعان إجازة." },
    ],
    readingPassage: {
      german: "Herr Mansour plant eine Reise nach München. Er geht zum Reisezentrum am Hauptbahnhof und bucht eine Hin- und Rückfahrt mit dem ICE. Der Zug fährt pünktlich um 9:15 Uhr von Gleis 7 ab.",
      arabic: "يخطط السيد منصور لرحلة إلى ميونخ. يذهب إلى مركز السفر في المحطة الرئيسية ويحجز رحلة ذهاب وعودة بقطار السريع ICE. يغادر القطار في الموعد في 9:15 من الرصيف 7.",
      questions: [
        {
          question: "Wie reist Herr Mansour nach München?",
          options: ["Mit dem Flugzeug", "Mit dem ICE-Zug", "Mit dem Bus", "Mit dem Auto"],
          answer: "Mit dem ICE-Zug",
          explanation: "يذكر النص: 'mit dem ICE'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich fliege nächste Woche ___ die Türkei.",
        options: ["nach", "in", "in die", "zu"],
        answer: "in die",
        explanation: "الدول المؤنثة مثل die Türkei نستخدم معها in die في حالة الاتجاه.",
      },
    ],
  },
  {
    id: "a2_1_2",
    level: "A2.1",
    number: 2,
    titleArabic: "الفندق والإقامة",
    titleGerman: "Im Hotel",
    descriptionArabic: "حجز غرفة فندقية (Einzelzimmer / Doppelzimmer) والسؤال عن الخدمات والإفطار والمغادرة.",
    grammarExplanation:
      "التواصل مع موظف الاستقبال في الفندق (Rezeption)، تسجيل الدخول (einchecken)، وتسجيل المغادرة (auschecken).",
    grammarRules: [
      {
        rule: "عبارات حجز الفندق",
        explanation: "Ich möchte ein Einzelzimmer für zwei Nächte reservieren. Ist das Frühstück inklusive? (هل الإفطار مشمول؟)",
        example: "Haben Sie noch ein freies Zimmer?",
        exampleArabic: "هل لديكم غرفة شاغرة؟",
      },
    ],
    examples: [
      { german: "Ich habe eine Reservierung auf den Namen Müller.", arabic: "لدي حجز باسم مولر.", phonetic: "إش هابه آينه رزرفيرونغ أوف دين نامن مولر" },
      { german: "Hier ist Ihr Zimmerschlüssel, Zimmer 204.", arabic: "تفضل مفتاح غرفتك، الغرفة 204.", phonetic: "هير إست إير تسيمر شلوسل" },
      { german: "Bis wann muss man auschecken?", arabic: "حتى أي ساعة يجب تسجيل المغادرة؟", phonetic: "بس فان موس مان أوس تشيكن" },
    ],
    vocabulary: [
      { german: "das Einzelzimmer", arabic: "غرفة مفردة (شخص واحد)", phonetic: "داس آينتسل تسيمر", article: "das", exampleSentence: "Ein Einzelzimmer mit Dusche.", exampleArabic: "غرفة مفردة مع دش." },
      { german: "das Doppelzimmer", arabic: "غرفة مزدوجة (شخصين)", phonetic: "داس دوبل تسيمر", article: "das", exampleSentence: "Wir buchen ein Doppelzimmer.", exampleArabic: "نحجز غرفة مزدوجة." },
      { german: "die Rezeption", arabic: "مكتب الاستقبال", phonetic: "دي ريتسيبتسيون", article: "die", exampleSentence: "Die Rezeption ist rund um die Uhr besetzt.", exampleArabic: "الاستقبال متاح على مدار الساعة." },
    ],
    readingPassage: {
      german: "Familie Schneider kommt im Hotel 'Berliner Bär' an. Der Rezeptionist begrüßt sie freundlich und gibt ihnen die Schlüsselkarten für das Doppelzimmer im dritten Stock. Das Frühstücksbuffet gibt es täglich von 7 bis 10 Uhr.",
      arabic: "تصل عائلة شنايدر إلى فندق 'دب برلين'. يرحب بهم موظف الاستقبال بلطف ويعطيهم بطاقات مفاتيح الغرفة المزدوجة في الطابق الثالث. بوفيه الإفطار متاح يومياً من 7 إلى 10 صباحاً.",
      questions: [
        {
          question: "In welchem Stock liegt das Zimmer?",
          options: ["Im ersten Stock", "Im dritten Stock", "Im Erdgeschoss", "Im fünften Stock"],
          answer: "Im dritten Stock",
          explanation: "يذكر النص: 'im dritten Stock'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ist das Frühstück im Preis ___?",
        options: ["inklusive", "auschecken", "reserviert", "Gleis"],
        answer: "inklusive",
        explanation: "inklusive تعني مشمول / متضمن في السعر.",
      },
    ],
  },
  {
    id: "a2_1_3",
    level: "A2.1",
    number: 3,
    titleArabic: "المطعم وطلب الطعام",
    titleGerman: "Im Restaurant",
    descriptionArabic: "قراءة قائمة الطعام (Speisekarte)، طلب الوجبات والمشروبات، ودفع الحساب بشكل منفصل أو معاً.",
    grammarExplanation:
      "في المطاعم الألمانية يسألك النادل عند الدفع: Zusammen oder getrennt? (معاً أم كل شخص بمفرده؟)، كما نستخدم Ich hätte gerne... للطلب بلباقة.",
    grammarRules: [
      {
        rule: "عبارات المطعم والدفع",
        explanation: "Wir möchten bitte bestellen (نود أن نطلب لو سمحت). Wir möchten bitte zahlen (نود أن ندفع). Stimmt so! (الباقي لك / إكرامية).",
        example: "Ich nehme das Tagesgericht und ein Mineralwasser.",
        exampleArabic: "سآخذ طبق اليوم ومياهاً معدنية.",
      },
    ],
    examples: [
      { german: "Die Speisekarte, bitte!", arabic: "قائمة الطعام من فضلك!", phonetic: "دي شبايزه كارته بِتّه" },
      { german: "Zahlen, bitte!", arabic: "الحساب لو سمحت!", phonetic: "تسالن بِتّه" },
      { german: "Getrennt oder zusammen?", arabic: "منفصل أم معاً؟", phonetic: "غترينت أودر تسوزامن" },
      { german: "Das stimmt so!", arabic: "احتفظ بالباقي (إكرامية)!", phonetic: "داس شتيمت زو" },
    ],
    vocabulary: [
      { german: "die Speisekarte", arabic: "قائمة الطعام والأسعار", phonetic: "دي شبايزه كارته", article: "die", exampleSentence: "Bringen Sie uns bitte die Speisekarte.", exampleArabic: "أحضر لنا قائمة الطعام من فضلك." },
      { german: "die Rechnung", arabic: "الفاتورة / الحساب", phonetic: "دي ريشنونغ", article: "die", exampleSentence: "Die Rechnung bitte!", exampleArabic: "الفاتورة لو سمحت!" },
      { german: "das Trinkgeld", arabic: "البقشيش / الإكرامية", phonetic: "داس ترينك غيلد", article: "das", exampleSentence: "In Deutschland gibt man oft 5-10% Trinkgeld.", exampleArabic: "في ألمانيا يُعطى غالباً 5-10% إكرامية." },
      { german: "die Vorspeise / die Nachspeise", arabic: "المقبلات / الحلوى", phonetic: "دي فور شبايزه / ناخ شبايزه", article: "die", exampleSentence: "Als Nachspeise nehme ich Eis.", exampleArabic: "كحلوى سآخذ آيس كريم." },
    ],
    readingPassage: {
      german: "Hassan und Ali sitzen in einem traditionellen deutschen Restaurant. Der Kellner bringt die Getränke. Hassan bestellt gegrillten Fisch mit Kartoffeln und Ali wählt eine vegetarische Gemüsesuppe. Nach dem Essen zahlen sie getrennt mit Karte.",
      arabic: "يجلس حسان وعلي في مطعم ألماني تقليدي. يحضر النادل المشروبات. يطلب حسان سمكاً مشوياً مع البطاطس ويختار علي حساء خضار نباتياً. بعد الأكل يدفعان بشكل منفصل بالبطاقة.",
      questions: [
        {
          question: "Wie zahlen Hassan und Ali?",
          options: ["Zusammen bar", "Getrennt mit Karte", "Ali zahlt alles", "Sie zahlen nicht"],
          answer: "Getrennt mit Karte",
          explanation: "يذكر النص: 'zahlen sie getrennt mit Karte'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Wir möchten bitte zahlen. ___ oder zusammen?",
        options: ["Getrennt", "Allein", "Spät", "Schnell"],
        answer: "Getrennt",
        explanation: "السؤال الشهير في المطاعم: Getrennt oder zusammen? (منفصل أم معاً؟).",
      },
    ],
  },
  {
    id: "a2_1_4",
    level: "A2.1",
    number: 4,
    titleArabic: "الطبيب والصحة والجسم",
    titleGerman: "Beim Arzt und Gesundheit",
    descriptionArabic: "أعضاء الجسم البشري، وصف الآلام والأعراض المرضية، والمحادثة في عيادة الطبيب والصيدلية.",
    grammarExplanation:
      "للتعبير عن الألم نستخدم: Mein Kopf tut weh (رأسي يؤلمني للمفرد) أو Meine Augen tun weh (عيناي تؤلمانني للجمع)، أو Ich habe Kopfschmerzen (عندي صداع).",
    grammarRules: [
      {
        rule: "تركيبات التعبير عن الألم",
        explanation: "tut weh (مفرد) / tun weh (جمع). أو الاسم المركب مع -schmerzen (Kopfschmerzen, Bauchschmerzen, Halsschmerzen, Rückenschmerzen).",
        example: "Mein Rücken tut weh. Ich habe starkes Fieber.",
        exampleArabic: "ظهري يؤلمني. لدي حمى شديدة.",
      },
      {
        rule: "Modalverb sollen للنصيحة الطبية",
        explanation: "يستخدم sollen لإعطاء نصائح أو تعليمات الطبيب: Der Arzt sagt, ich soll im Bett bleiben.",
        example: "Sie sollen diese Tabletten dreimal täglich nehmen.",
        exampleArabic: "ينبغي عليك تناول هذه الأقراص ثلاث مرات يومياً.",
      },
    ],
    examples: [
      { german: "Was fehlt Ihnen?", arabic: "مما تشكو حضرتك؟", phonetic: "فاس فيلت إينن" },
      { german: "Mein Hals tut sehr weh.", arabic: "حلقي يؤلمني جداً.", phonetic: "ماين هالس توت زير فيه" },
      { german: "Gute Besserung!", arabic: "بالشفاء العاجل والتعافي!", phonetic: "غوته بسرونغ" },
    ],
    vocabulary: [
      { german: "der Arzt / die Ärztin", arabic: "الطبيب / الطبيبة", phonetic: "دير آرتست / دي إيرتستين", article: "der", exampleSentence: "Ich habe einen Termin beim Arzt.", exampleArabic: "لدي موعد عند الطبيب." },
      { german: "das Rezept", arabic: "الوصفة الطبية (الروشتة)", phonetic: "داس ريتسبت", article: "das", exampleSentence: "Der Arzt schreibt ein Rezept.", exampleArabic: "يكتب الطبيب وصفة طبية." },
      { german: "die Apotheke", arabic: "الصيدلية", phonetic: "دي أبوتيكه", article: "die", exampleSentence: "Ich hole die Medikamente aus der Apotheke.", exampleArabic: "أحضر الأدوية من الصيدلية." },
      { german: "die Tablette", arabic: "القرص الدوائي / الحبة", phonetic: "دي تابلتّه", article: "die", exampleSentence: "Nehmen Sie eine Tablette morgens.", exampleArabic: "تناول حبة واحدة صباحاً." },
      { german: "das Fieber", arabic: "الحمى / الحرارة المرتفعة", phonetic: "داس فيبر", article: "das", exampleSentence: "Er hat 39 Grad Fieber.", exampleArabic: "حرارته 39 درجة." },
    ],
    readingPassage: {
      german: "Mona fühlt sich seit zwei Tagen krank. Sie hat starke Halsschmerzen und Husten. Sie geht in die Praxis von Dr. Becker. Die Ärztin untersucht sie und sagt: 'Sie haben eine Grippe. Sie sollen viel Tee trinken und drei Tage im Bett bleiben.'",
      arabic: "تشعر منى بالمرض منذ يومين. لديها ألم شديد في الحلق وسعال. تذهب إلى عيادة د. بيكر. تفحصها الطبيبة وتقول: 'لديك إنفلونزا. ينبغي أن تشربي الكثير من الشاي وتبقي في الفراش ثلاثة أيام.'",
      questions: [
        {
          question: "Was soll Mona laut Ärztin machen?",
          options: ["Arbeiten gehen", "Tee trinken und im Bett bleiben", "Sport treiben", "Reisen"],
          answer: "Tee trinken und im Bett bleiben",
          explanation: "يذكر النص: 'Sie sollen viel Tee trinken und drei Tage im Bett bleiben'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Meine Beine ___ weh. (جمع)",
        options: ["tut", "tun", "macht", "hat"],
        answer: "tun",
        explanation: "مع الجمع (Meine Beine) نستخدم tun weh.",
      },
    ],
  },
  {
    id: "a2_1_5",
    level: "A2.1",
    number: 5,
    titleArabic: "المواعيد وتنظيم الوقت",
    titleGerman: "Termine vereinbaren",
    descriptionArabic: "تحديد المواعيد (vereinbaren)، تأجيلها (verschieben)، وإلغائها (absagen) في الحياة اليومية والرسمية.",
    grammarExplanation:
      "الأفعال الأساسية للمواعيد: einen Termin vereinbaren (يحدد موعداً)، verschieben (يؤجل إلى وقت آخر)، absagen (يلغي الموعد).",
    grammarRules: [
      {
        rule: "صياغة طلب الموعد والتأجيل",
        explanation: "Ich möchte bitte einen Termin vereinbaren. Geht es am Dienstag um 14 Uhr? Kann ich den Termin auf Freitag verschieben?",
        example: "Passt es Ihnen am Mittwoch um 10 Uhr?",
        exampleArabic: "هل يناسب حضرتك يوم الأربعاء في العاشرة صباحاً؟",
      },
    ],
    examples: [
      { german: "Ich möchte einen Termin vereinbaren.", arabic: "أود حجز موعد.", phonetic: "إش موشته آينن ترمين فير آين بارن" },
      { german: "Dienstag passt mir leider nicht.", arabic: "الثلاثاء لا يناسبني للأسف.", phonetic: "دينستاك باست مير لايدر نيشت" },
      { german: "Können wir den Termin verschieben?", arabic: "هل نستطيع تأجيل الموعد؟", phonetic: "كونن فير دين ترمين فير شيبن" },
    ],
    vocabulary: [
      { german: "der Termin", arabic: "الموعد", phonetic: "دير ترمين", article: "der", exampleSentence: "Ich habe morgen einen wichtigen Termin.", exampleArabic: "لدي موعد مهم غداً." },
      { german: "verschieben", arabic: "يؤجل", phonetic: "فير شيبن", exampleSentence: "Wir müssen das Treffen verschieben.", exampleArabic: "علينا تأجيل اللقاء." },
      { german: "absagen", arabic: "يلغي", phonetic: "أب زاغن", exampleSentence: "Ich muss leider absagen.", exampleArabic: "للأسف يجب أن ألغي الموعد." },
      { german: "passen", arabic: "يناسب / يلائم", phonetic: "باسن", exampleSentence: "Das passt mir sehr gut.", exampleArabic: "هذا يناسبني تماماً." },
    ],
    readingPassage: {
      german: "Herr Schmidt ruft in der Autowerkstatt an: 'Guten Tag, ich möchte einen Inspektionstermin für mein Auto vereinbaren.' Die Mitarbeiterin antwortet: 'Geht es nächsten Montag um 8 Uhr?' Herr Schmidt bestätigt: 'Ja, das passt mir perfekt.'",
      arabic: "يتصل السيد شميت بورشة تصليح السيارات: 'مرحباً، أود حجز موعد فحص دوري لسيارتي.' تجيب الموظفة: 'هل يناسبك الإثنين القادم في الثامنة صباحاً؟' يؤكد السيد شميت: 'نعم، هذا يناسبني تماماً.'",
      questions: [
        {
          question: "Wann findet der Termin statt?",
          options: ["Dienstag um 10 Uhr", "Nächsten Montag um 8 Uhr", "Freitagabend", "Gar nicht"],
          answer: "Nächsten Montag um 8 Uhr",
          explanation: "يذكر النص: 'nächsten Montag um 8 Uhr'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Kann ich den Termin auf Montag ___? (تأجيل)",
        options: ["verschieben", "absagen", "aufstehen", "hören"],
        answer: "verschieben",
        explanation: "verschieben تعني تأجيل الموعد إلى وقت آخر.",
      },
    ],
  },
  {
    id: "a2_1_6",
    level: "A2.1",
    number: 6,
    titleArabic: "المدينة والمواصلات والاتجاهات",
    titleGerman: "Stadtverkehr und Wegbeschreibung",
    descriptionArabic: "وصف الطريق والاتجاهات (geradeaus, nach links, nach rechts, an der Kreuzung, bis zur Ampel).",
    grammarExplanation:
      "للسؤال عن الطريق: Wie komme ich zum/zur...? أو Entschuldigung, wo ist hier...? ولإعطاء الاتجاهات نستخدم حروف الجر المكانية والأفعال biegt ab, überquert, geht geradeaus.",
    grammarRules: [
      {
        rule: "عبارات وصف الطريق",
        explanation: "Gehen Sie geradeaus (امش إلى الأمام مباشرة)، biegen Sie links/rechts ab (انعطف يساراً/يميناً)، an der Ampel (عند إشارة المرور)، an der Kreuzung (عند التقاطع)، über die Brücke (فوق الجسر).",
        example: "Gehen Sie geradeaus bis zur Kreuzung und dann nach rechts.",
        exampleArabic: "امشِ للأمام حتى التقاطع ثم اتجه يميناً.",
      },
    ],
    examples: [
      { german: "Entschuldigung, wie komme ich zum Bahnhof?", arabic: "عفواً، كيف أصل إلى محطة القطارات؟", phonetic: "إنت شولديغونغ في كومه إش تسوم بانهوف" },
      { german: "Gehen Sie immer geradeaus!", arabic: "امشِ دائماً إلى الأمام مباشرة!", phonetic: "غيين زي إمر غِراده أوس" },
      { german: "Biegen Sie an der Ampel links ab.", arabic: "انعطف يساراً عند إشارة المرور.", phonetic: "بيغن زي آن دير أمبل لينكس أب" },
    ],
    vocabulary: [
      { german: "die Ampel", arabic: "إشارة المرور", phonetic: "دي أمبل", article: "die", exampleSentence: "Die Ampel steht auf Rot.", exampleArabic: "إشارة المرور حمراء." },
      { german: "die Kreuzung", arabic: "مفترق الطرق / التقاطع", phonetic: "دي كرويتسونغ", article: "die", exampleSentence: "An der nächsten Kreuzung rechts.", exampleArabic: "عند التقاطع القادم يميناً." },
      { german: "geradeaus", arabic: "إلى الأمام مباشرة", phonetic: "غِراده أوس", exampleSentence: "Gehen Sie 200 Meter geradeaus.", exampleArabic: "امشِ 200 متر إلى الأمام مباشرة." },
      { german: "die Brücke", arabic: "الجسر / الكوبري", phonetic: "دي بروكه", article: "die", exampleSentence: "Über die Brücke gehen.", exampleArabic: "العبور فوق الجسر." },
    ],
    readingPassage: {
      german: "Ein Tourist fragt nach dem Weg zum Dom. Ein Passant erklärt: 'Gehen Sie diese Straße geradeaus bis zur großen Kreuzung. Biegen Sie dort nach links ab. Nach 100 Metern sehen Sie den Dom auf der rechten Seite.'",
      arabic: "يسأل سائح عن الطريق إلى الكاتدرائية. يشرح أحد المارة: 'امش في هذا الشارع إلى الأمام حتى التقاطع الكبير. انعطف هناك إلى اليسار. بعد 100 متر سترى الكاتدرائية على الجانب الأيمن.'",
      questions: [
        {
          question: "Auf welcher Seite liegt der Dom am Ende?",
          options: ["Auf der linken Seite", "Auf der rechten Seite", "Hinter dem Bahnhof", "Im Tunnel"],
          answer: "Auf der rechten Seite",
          explanation: "يذكر النص: 'auf der rechten Seite'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Biegen Sie an der Kreuzung nach ___ ab. (يميناً)",
        options: ["rechts", "geradeaus", "oben", "hinten"],
        answer: "rechts",
        explanation: "nach rechts تعني نحو اليمين.",
      },
    ],
  },
  {
    id: "a2_1_7",
    level: "A2.1",
    number: 7,
    titleArabic: "بيئة العمل والمكاتب",
    titleGerman: "Arbeitswelt und Büroalltag",
    descriptionArabic: "مفردات بيئة العمل، الاجتماعات، كتابة الملاحظات، والتعامل مع زملاء العمل والمدير.",
    grammarExplanation:
      "التحدث عن المهام والمسؤوليات في العمل: Ich bin zuständig für... (أنا مسؤول عن...)، an einer Besprechung teilnehmen (المشاركة في اجتماع).",
    grammarRules: [
      {
        rule: "التعبير عن المسؤولية في العمل",
        explanation: "zuständig für + Akkusativ / verantwortlich für + Akkusativ.",
        example: "Ich bin für den Kundenservice zuständig.",
        exampleArabic: "أنا مسؤول عن خدمة العملاء.",
      },
    ],
    examples: [
      { german: "Wir haben heute um 11 Uhr ein Meeting.", arabic: "لدينا اليوم اجتماع في الساعة 11.", phonetic: "فير هابن هويته أوم إلف أور آين ميتينغ" },
      { german: "Können Sie mir das Dokument per E-Mail schicken?", arabic: "هل يمكنك إرسال الوثيقة لي عبر الإيميل؟", phonetic: "كونن زي مير داس دوكومنت بير إيميل شيكن" },
    ],
    vocabulary: [
      { german: "die Besprechung / das Meeting", arabic: "الاجتماع", phonetic: "دي ب شبريشونغ", article: "die", exampleSentence: "Die Besprechung dauert eine Stunde.", exampleArabic: "الاجتماع يستمر لمدة ساعة." },
      { german: "das Gehalt", arabic: "الراتب الشهري", phonetic: "داس غهالت", article: "das", exampleSentence: "Ein faires Gehalt.", exampleArabic: "راتب عادل ومنصف." },
      { german: "der Vertrag", arabic: "العقد", phonetic: "دير فيرتراك", article: "der", exampleSentence: "Ich habe den Arbeitsvertrag unterschrieben.", exampleArabic: "وقعت عقد العمل." },
    ],
    readingPassage: {
      german: "Tariq arbeitet seit drei Monaten als Buchhalter in Frankfurt. Sein Team besteht aus sechs Kollegen. Jeden Montagmorgen besprechen sie die Aufgaben der Woche. Die Arbeitsatmosphäre ist sehr kollegial und freundlich.",
      arabic: "يعمل طارق منذ ثلاثة أشهر كمحاسب في فرانكفورت. يتكون فريقه من ستة زملاء. كل صباح إثنين يناقشون مهام الأسبوع. أجواء العمل ودية ومبنية على روح الزمالة.",
      questions: [
        {
          question: "Wie viele Kollegen hat Tariq im Team?",
          options: ["Drei", "Sechs", "Zehn", "Keine"],
          answer: "Sechs",
          explanation: "يذكر النص: 'besteht aus sechs Kollegen'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er ist verantwortlich ___ die IT-Sicherheit.",
        options: ["für", "von", "bei", "mit"],
        answer: "für",
        explanation: "verantwortlich für تعني مسؤول عن.",
      },
    ],
  },
  {
    id: "a2_1_8",
    level: "A2.1",
    number: 8,
    titleArabic: "الحياة اليومية والمواقف الاجتماعية",
    titleGerman: "Alltagssituationen und Höflichkeit",
    descriptionArabic: "عبارات المجاملة واللباقة، الاعتذار، تقديم الشكر، وطلب المساعدة بأسلوب مهذب.",
    grammarExplanation:
      "استخدام صيغة Könnten Sie bitte...? و Würden Sie bitte...? للتعبير عن الطلب بأعلى درجات الأدب والاحترام.",
    grammarRules: [
      {
        rule: "صيغة الطلب المهذب",
        explanation: "Könnten Sie bitte das Fenster schließen? / Würden Sie mir bitte helfen?",
        example: "Könnten Sie das bitte wiederholen?",
        exampleArabic: "هل يمكنك إعادة ذلك من فضلك؟",
      },
    ],
    examples: [
      { german: "Entschuldigen Sie bitte die Störung.", arabic: "أعتذر من فضلك عن الإزعاج.", phonetic: "إنت شولديغن زي بِتّه دي شتورونغ" },
      { german: "Könnten Sie mir einen Gefallen tun?", arabic: "هل يمكنك أن تسدي لي معروفاً؟", phonetic: "كونتن زي مير آينن غفالن تون" },
      { german: "Keine Ursache! / Gern geschehen!", arabic: "لا داعي للشكر! / على الرحب والسعة!", phonetic: "كاينه أورزاخه / غيرن غشين" },
    ],
    vocabulary: [
      { german: "die Höflichkeit", arabic: "اللباقة / الأدب", phonetic: "دي هوفليش كايت", article: "die", exampleSentence: "Höflichkeit öffnet alle Türen.", exampleArabic: "اللباقة تفتح كل الأبواب." },
      { german: "die Entschuldigung", arabic: "الاعتذار / المعذرة", phonetic: "دي إنت شولديغونغ", article: "die", exampleSentence: "Ich bitte um Entschuldigung.", exampleArabic: "ألتمس المعذرة." },
    ],
    readingPassage: {
      german: "In Deutschland schätzt man Pünktlichkeit und Höflichkeit. Wenn man sich verspätet, ruft man kurz an und sagt Bescheid. Ein 'Bitte' und 'Danke' gehört zu jedem Gespräch dazu.",
      arabic: "في ألمانيا يُقدّر الناس الدقة في المواعيد واللباقة. إذا تأخر المرء، يتصل هاتفياً باختصار ويبلغ بالأمر. وكلمتا 'من فضلك' و'شكراً' جزء أساسي من كل حديث.",
      questions: [
        {
          question: "Was macht man in Deutschland, wenn man sich verspätet?",
          options: ["Man sagt nichts", "Man ruft an und sagt Bescheid", "Man kommt gar nicht", "Man schreibt einen Brief"],
          answer: "Man ruft an und sagt Bescheid",
          explanation: "يذكر النص: 'ruft man kurz an und sagt Bescheid'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "___ Sie mir bitte das Salz reichen? (طلب مهذب)",
        options: ["Könnten", "Kann", "Muss", "Soll"],
        answer: "Könnten",
        explanation: "Könnten Sie bitte... هي الصيغة المهذبة الأكثر ملاءمة للطلب.",
      },
    ],
  },
  {
    id: "a2_1_9",
    level: "A2.1",
    number: 9,
    titleArabic: "الماضي التام المتقدم Perfekt",
    titleGerman: "Perfekt Vertiefung und unregelmäßige Partizipien",
    descriptionArabic: "التعمق في أزمنة الماضي التام وتصريف الأفعال الشاذة والمنفصلة في الماضي (angekommen, aufgestanden).",
    grammarExplanation:
      "في الأفعال المنفصلة يدخل مقطع -ge- في الوسط بين البادئة والجذع: aufstehen -> aufgestanden, einkaufen -> eingekauft. والأفعال المنتهية بـ -ieren لا تأخذ ge- أبداً: studiert, repariert, telefoniert.",
    grammarRules: [
      {
        rule: "أفعال -ieren والأفعال المنفصلة في Partizip II",
        explanation: "الأفعال المنتهية بـ -ieren: studieren -> hat studiert, reparieren -> hat repariert. الأفعال المنفصلة: anrufen -> hat angerufen, aufstehen -> ist aufgestanden.",
        example: "Er hat in Berlin Medizin studiert.",
        exampleArabic: "هو درس الطب في برلين.",
      },
    ],
    examples: [
      { german: "Der Zug ist pünktlich angekommen.", arabic: "وصل القطار في موعده.", phonetic: "دير تسوغ إست بونكتليش آن غكومن" },
      { german: "Ich habe gestern lange telefoniert.", arabic: "تحدثت هاتفياً طويلاً أمس.", phonetic: "إش هابه غسترن لانغه تليفونيرت" },
    ],
    vocabulary: [
      { german: "ankommen", arabic: "يصل", phonetic: "آن كومن", exampleSentence: "Wann bist du angekommen?", exampleArabic: "متى وصلت؟" },
      { german: "studieren", arabic: "يدرس في الجامعة", phonetic: "شتوديرن", exampleSentence: "Sie hat Informatik studiert.", exampleArabic: "هي درست علم الحاسوب." },
    ],
    readingPassage: {
      german: "Gestern ist Familie Al-Khatib in Deutschland angekommen. Am Flughafen hat ihr Freund sie abgeholt. Sie sind gemeinsam zur Wohnung gefahren und haben am Abend traditionell gekocht.",
      arabic: "أمس وصلت عائلة الخطيب إلى ألمانيا. في المطار استقبلهم صديقهم واصطحبهم. ذهبوا معاً إلى الشقة وطبخوا في المساء طعاماً تقليدياً.",
      questions: [
        {
          question: "Wer hat die Familie am Flughafen abgeholt?",
          options: ["Ein Taxi", "Ihr Freund", "Der Lehrer", "Niemand"],
          answer: "Ihr Freund",
          explanation: "يذكر النص: 'hat ihr Freund sie abgeholt'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er hat fünf Jahre an der Universität ___ (studieren).",
        options: ["gestudiert", "studiert", "studierte", "studieren"],
        answer: "studiert",
        explanation: "الأفعال المنتهية بـ -ieren لا تأخذ ge- في التصريف الثالث (studiert).",
      },
    ],
  },
  {
    id: "a2_1_10",
    level: "A2.1",
    number: 10,
    titleArabic: "الماضي البسيط Präteritum",
    titleGerman: "Das Präteritum von sein, haben und Modalverben",
    descriptionArabic: "استخدام الماضي البسيط (war / hatte / konnte / musste / wollte) في النصوص والحديث اليومي.",
    grammarExplanation:
      "في الحديث اليومي نفضل استخدام Präteritum مع الأفعال: sein (war = كان)، haben (hatte = كان لديه)، وأفعال الكيفية Modalverben (konnte, musste, wollte, durfte).",
    grammarRules: [
      {
        rule: "تصريف war و hatte في الماضي",
        explanation: "ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren. / ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.",
        example: "Gestern war ich krank und hatte hohes Fieber.",
        exampleArabic: "أمس كنت مريضاً وكان لدي حمى شديدة.",
      },
      {
        rule: "Modalverben في Präteritum",
        explanation: "ich konnte (استطعت), ich musste (توجب علي), ich wollte (أردت).",
        example: "Ich musste gestern lange arbeiten.",
        exampleArabic: "توجب علي العمل لساعات طويلة أمس.",
      },
    ],
    examples: [
      { german: "Wo warst du gestern?", arabic: "أين كنت البارحة؟", phonetic: "فو فارست دو غسترن" },
      { german: "Ich hatte leider keine Zeit.", arabic: "للأسف لم يكن لدي وقت.", phonetic: "إش هاته لايدر كاينه تسايت" },
      { german: "Wir konnten nicht kommen.", arabic: "لم نتمكن من القدوم.", phonetic: "فير كونتن نيشت كومن" },
    ],
    vocabulary: [
      { german: "damals", arabic: "آنذاك / في ذلك الوقت", phonetic: "دامالس", exampleSentence: "Damals war alles anders.", exampleArabic: "في ذلك الوقت كان كل شيء مختلفاً." },
      { german: "früher", arabic: "سابقاً / قديماً", phonetic: "فروير", exampleSentence: "Früher lebte ich in Kairo.", exampleArabic: "سابقاً كنت أعيش في القاهرة." },
    ],
    readingPassage: {
      german: "Letztes Jahr war ich in Wien. Ich hatte zwei Wochen Urlaub und das Wetter war herrlich. Ich wollte das Schloss Schönbrunn besuchen und konnte viele schöne Fotos machen.",
      arabic: "العام الماضي كنت في فيينا. كان لدي أسبوعان عطلة والطقس كان رائعاً. أردت زيارة قصر شونبرون وتمكنت من التقاط العديد من الصور الجميلة.",
      questions: [
        {
          question: "Wie war das Wetter in Wien?",
          options: ["Schlecht", "Herrlich", "Kalt und regnerisch", "Es schneite"],
          answer: "Herrlich",
          explanation: "يذكر النص: 'das Wetter war herrlich'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Gestern ___ wir keine Hausaufgaben. (haben في الماضي)",
        options: ["hatten", "hattet", "hatte", "waren"],
        answer: "hatten",
        explanation: "مع wir في زمن Präteritum لفعل haben نستخدم hatten.",
      },
    ],
  },
  {
    id: "a2_1_11",
    level: "A2.1",
    number: 11,
    titleArabic: "التمييز بين Akkusativ و Dativ",
    titleGerman: "Akkusativ oder Dativ? (Wohin vs. Wo)",
    descriptionArabic: "القاعدة الشاملة للتفريق بين حالة النصب (Akkusativ) وحالة الجر (Dativ) مع الأفعال وحروف الجر.",
    grammarExplanation:
      "Akkusativ يجيب عن السؤال Wohin? (إلى أين؟ حركة وانتقال باتجاه معين). Dativ يجيب عن السؤال Wo? (أين؟ موقع ومكان ثابت وسكون).",
    grammarRules: [
      {
        rule: "الحركة (Wohin -> Akkusativ) مقابل الثبات (Wo -> Dativ)",
        explanation: "Ich gehe in den Park (Akkusativ - حركة إلى داخل الحديقة). Ich sitze im (in dem) Park (Dativ - سكون وثبات داخل الحديقة).",
        example: "Er legt das Buch auf den Tisch (Akk). Das Buch liegt auf dem Tisch (Dat).",
        exampleArabic: "هو يضع الكتاب على الطاولة (حركة). الكتاب موضوع على الطاولة (ثبات).",
      },
    ],
    examples: [
      { german: "Wohin gehst du? - In die Stadt (Akk).", arabic: "إلى أين تذهب؟ - إلى المدينة (نصب).", phonetic: "فوهين غيست دو - إن دي شتات" },
      { german: "Wo bist du? - In der Stadt (Dat).", arabic: "أين أنت؟ - في المدينة (جر).", phonetic: "فو بست دو - إن دير شتات" },
    ],
    vocabulary: [
      { german: "stellen / stehen", arabic: "يضع واقفاً (حركة) / واقف (ثبات)", phonetic: "شتيلن / شتين", exampleSentence: "Stell die Flasche auf den Tisch!", exampleArabic: "ضع الزجاجة على الطاولة!" },
      { german: "legen / liegen", arabic: "يضع ممدداً (حركة) / ممدد (ثبات)", phonetic: "ليغن / ليغن", exampleSentence: "Das Buch liegt auf dem Sofa.", exampleArabic: "الكتاب ملقى على الأريكة." },
    ],
    readingPassage: {
      german: "Sami räumt sein Zimmer auf. Er stellt die Lampe auf den Schreibtisch (Wohin? Akkusativ). Jetzt steht die Lampe auf dem Schreibtisch (Wo? Dativ). Er legt die Kleidung in den Schrank (Wohin?). Nun liegt sie im Schrank (Wo?).",
      arabic: "يرتب سامي غرفته. يضع المصباح على المكتب (إلى أين؟ نصب). الآن يقف المصباح على المكتب (أين؟ جر). يضع الملابس في الخزانة (إلى أين؟). والآن ترقد في الخزانة (أين؟).",
      questions: [
        {
          question: "Welcher Fall folgt auf die Frage 'Wo?'",
          options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
          answer: "Dativ",
          explanation: "السؤال عن المكان الثابت Wo? يأخذ دائماً Dativ.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich fahre in ___ Urlaub. (حركة باتجاه - der Urlaub)",
        options: ["der", "den", "dem", "das"],
        answer: "den",
        explanation: "حركة إلى الإجازة (Wohin?) تطلب Akkusativ للمذكر -> den Urlaub.",
      },
    ],
  },
  {
    id: "a2_1_12",
    level: "A2.1",
    number: 12,
    titleArabic: "حروف الجر المكانية المتغيرة",
    titleGerman: "Wechselpräpositionen (an, auf, in, neben, über, unter, vor, hinter, zwischen)",
    descriptionArabic: "حروف الجر التسعة المشتركة التي تأخذ Akkusativ أو Dativ حسب وجود الحركة أو السكون.",
    grammarExplanation:
      "حروف الجر التسعة: an (بمحاذاة), auf (فوق ملامس), hinter (خلف), in (في/داخل), neben (بجانب), über (فوق غير ملامس), unter (تحت), vor (أمام), zwischen (بين).",
    grammarRules: [
      {
        rule: "تطبيق القاعدة على الحروف التسعة",
        explanation: "مع الحركة والتغيير (Wohin?) نطبق Akkusativ. مع السكون والموقع الثابت (Wo?) نطبق Dativ.",
        example: "Die Katze springt auf den Stuhl. Die Katze schläft auf dem Stuhl.",
        exampleArabic: "القطة تقفز فوق الكرسي (حركة). القطة تنام فوق الكرسي (سكون).",
      },
    ],
    examples: [
      { german: "an der Wand", arabic: "على الحائط (ثبات - Dativ)", phonetic: "آن دير فاند" },
      { german: "neben dem Schrank", arabic: "بجانب الخزانة (ثبات - Dativ)", phonetic: "نيبن ديم شرانك" },
      { german: "unter den Tisch", arabic: "إلى تحت الطاولة (حركة - Akkusativ)", phonetic: "أونتر دين تيش" },
    ],
    vocabulary: [
      { german: "die Wand", arabic: "الحائط / الجدار", phonetic: "دي فاند", article: "die", exampleSentence: "Das Bild hängt an der Wand.", exampleArabic: "الصورة معلقة على الحائط." },
      { german: "zwischen", arabic: "بين (شيئين)", phonetic: "تسفيشن", exampleSentence: "Zwischen den beiden Häusern.", exampleArabic: "بين المنزلين الاثنين." },
    ],
    readingPassage: {
      german: "Das neue Wohnzimmer ist sehr schön eingerichtet. Das Sofa steht vor dem Fenster. Der Teppich liegt unter dem Tisch. Zwischen dem Sofa und der Tür steht ein großes Bücherregal.",
      arabic: "غرفة المعيشة الجديدة مؤثثة بشكل جميل جداً. الأريكة تقف أمام النافذة. السجادة ممددة تحت الطاولة. بين الأريكة والباب تقف خزانة كتب كبيرة.",
      questions: [
        {
          question: "Wo liegt der Teppich?",
          options: ["Auf dem Sofa", "Unter dem Tisch", "Vor der Tür", "An der Wand"],
          answer: "Unter dem Tisch",
          explanation: "يذكر النص: 'unter dem Tisch'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Das Bild hängt an ___ Wand. (ثبات - die Wand)",
        options: ["die", "der", "dem", "den"],
        answer: "der",
        explanation: "مكان ثابت Wo? مع اسم مؤنث die Wand يتحول إلى der Wand في Dativ.",
      },
    ],
  },
  {
    id: "a2_1_13",
    level: "A2.1",
    number: 13,
    titleArabic: "الأفعال المنعكسة Reflexive Verben",
    titleGerman: "Reflexive Verben (sich freuen, sich interessieren, sich waschen)",
    descriptionArabic: "الأفعال التي يعود فعلها على الفاعل نفسه وتصريف ضمائر الانعكاس (mich, dich, sich, uns, euch, sich).",
    grammarExplanation:
      "الفعل المنعكس يتطلب ضمير انعكاس يعود على الفاعل. ضمائر الانعكاس مع Akkusativ: ich -> mich, du -> dich, er/sie/es -> sich, wir -> uns, ihr -> euch, sie/Sie -> sich.",
    grammarRules: [
      {
        rule: "أهم الأفعال المنعكسة واستخدامها",
        explanation: "sich freuen (يفرح/يسعد)، sich interessieren für (يهتم بـ)، sich fühlen (يشعر)، sich ausruhen (يستريح)، sich treffen (يلتقي).",
        example: "Ich freue mich sehr über deinen Besuch.",
        exampleArabic: "أنا سعيد جداً بزيارتك.",
      },
    ],
    examples: [
      { german: "Ich fühle mich gut.", arabic: "أشعر أنني بخير.", phonetic: "إش فوله ميش غوت" },
      { german: "Wir treffen uns um 18 Uhr.", arabic: "نحن نلتقي في الساعة 18.", phonetic: "فير تريفن أونس أوم آختسين أور" },
      { german: "Interessierst du dich für Sport?", arabic: "هل تهتم بالرياضة؟", phonetic: "إنتريسيرست دو ديش فور شبورت" },
    ],
    vocabulary: [
      { german: "sich freuen", arabic: "يفرح / يسعد", phonetic: "زيش فروين", exampleSentence: "Ich freue mich auf den Urlaub.", exampleArabic: "أتطلع بفرح وسعادة إلى الإجازة." },
      { german: "sich ausruhen", arabic: "يستريح / يسترخي", phonetic: "زيش أوس روهن", exampleSentence: "Ruh dich gut aus!", exampleArabic: "استرح جيداً!" },
    ],
    readingPassage: {
      german: "Heute ist Freitag! Markus freut sich auf das Wochenende. Er hat die ganze Woche hart gearbeitet und fühlt sich müde. Am Samstag will er sich einfach nur ausruhen und am Sonntag trifft er sich mit Freunden.",
      arabic: "اليوم هو الجمعة! ماركوس سعيد بتطلع نحو عطلة نهاية الأسبوع. لقد عمل بجد طوال الأسبوع ويشعر بالتعب. يوم السبت يريد فقط أن يستريح ويوم الأحد يلتقي بأصدقائه.",
      questions: [
        {
          question: "Was will Markus am Samstag machen?",
          options: ["Arbeiten", "Sich ausruhen", "Sport treiben", "Umziehen"],
          answer: "Sich ausruhen",
          explanation: "يذكر النص: 'will er sich einfach nur ausruhen'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Wie fühlst ___ du heute? - Ich fühle ___ fit.",
        options: ["dich / mich", "mich / dich", "sich / uns", "euch / sich"],
        answer: "dich / mich",
        explanation: "مع du نستخدم dich ومع ich نستخدم mich.",
      },
    ],
  },
  {
    id: "a2_1_14",
    level: "A2.1",
    number: 14,
    titleArabic: "المقارنة والتفضيل",
    titleGerman: "Komparativ und Superlativ (schneller, am schnellsten)",
    descriptionArabic: "صياغة درجات المقارنة بين الصفات وإضافة -er للمقارنة و am ...-sten للتفضيل المطلق والاستثناءات الشائعة.",
    grammarExplanation:
      "المقارنة الأساسية (Komparativ): الصفة + -er + als (مثال: schneller als). التفضيل الأقصى (Superlativ): am + الصفة + -sten (مثال: am schnellsten).",
    grammarRules: [
      {
        rule: "الصفات الشاذة الهامة جداً",
        explanation: "gut -> besser -> am besten (جيد - أفضل - الأفضل), viel -> mehr -> am meisten (كثير - أكثر - الأكثر), gern -> lieber -> am liebsten (يحب - يفضل - يفضل أكثر شيء).",
        example: "Deutsch ist interessant, aber Mathe ist schwieriger.",
        exampleArabic: "الألمانية ممتعة، لكن الرياضيات أكثر صعوبة.",
      },
    ],
    examples: [
      { german: "Ali ist größer als Omar.", arabic: "علي أطول من عمر.", phonetic: "علي إست غروسر ألس عمر" },
      { german: "Der Zug ist schneller als der Bus.", arabic: "القطار أسرع من الحافلة.", phonetic: "دير تسوغ إست شنلر ألس دير بوس" },
      { german: "Dieser Kaffee schmeckt am besten.", arabic: "هذه القهوة مذاقها الأفضل على الإطلاق.", phonetic: "ديزر كافيه شمكت أم بستن" },
    ],
    vocabulary: [
      { german: "schnell / schneller / am schnellsten", arabic: "سريع / أسرع / الأسرع", phonetic: "شنل / شنلر / أم شنلستن", exampleSentence: "Der ICE ist am schnellsten.", exampleArabic: "قطار ICE هو الأسرع." },
      { german: "gut / besser / am besten", arabic: "جيد / أفضل / الأفضل", phonetic: "غوت / بسر / أم بستن", exampleSentence: "Das ist die beste Lösung.", exampleArabic: "هذا هو الحل الأفضل." },
    ],
    readingPassage: {
      german: "In Deutschland reisen viele Menschen gerne. Der Bus ist billiger als der Zug, aber der Zug ist viel bequemer und schneller. Mit dem Flugzeug reist man am schnellsten, aber es ist auch am teuersten.",
      arabic: "في ألمانيا يحب الكثير من الناس السفر. الحافلة أرخص من القطار، لكن القطار أكثر راحة وأسرع بكثير. بالطائرة يسافر المرء بأسرع شكل، لكنها أيضاً الأغلى ثمناً.",
      questions: [
        {
          question: "Welches Verkehrsmittel ist am schnellsten?",
          options: ["Der Bus", "Der Zug", "Das Flugzeug", "Das Fahrrad"],
          answer: "Das Flugzeug",
          explanation: "يذكر النص: 'Mit dem Flugzeug reist man am schnellsten'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Mein Bruder spricht ___ Deutsch als ich. (المقارنة من gut)",
        options: ["gut", "besser", "am besten", "guter"],
        answer: "besser",
        explanation: "المقارنة من gut هي besser (besser als).",
      },
    ],
  },
  {
    id: "a2_1_15",
    level: "A2.1",
    number: 15,
    titleArabic: "الجمل السببية مع weil",
    titleGerman: "Kausalsätze mit 'weil' (Verb am Ende)",
    descriptionArabic: "الربط بأداة التعليل 'weil' (لأن) وقاعدة إرسال الفعل المصرف إلى نهاية الجملة الجانبية تماماً.",
    grammarExplanation:
      "تعتبر weil من أدوات الجمل الجانبية (Nebensatz). في الجملة التي تبدأ بـ weil يذهب الفعل المصرف دائماً إلى آخر كلمة في الجملة!",
    grammarRules: [
      {
        rule: "تركيب جملة weil",
        explanation: "الجملة الرئيسية + فاصلة + weil + الفاعل + باقي الجملة + الفعل المصرف في النهاية.",
        example: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
        exampleArabic: "أنا أتعلم الألمانية لأنني أرغب بالعمل في ألمانيا.",
      },
    ],
    examples: [
      { german: "Ich bleibe zu Hause, weil ich krank bin.", arabic: "أنا باقٍ في المنزل لأنني مريض.", phonetic: "إش بلايبه تسو هاوزه فايل إش كرانك بن" },
      { german: "Er kommt nicht, weil er viel arbeiten muss.", arabic: "هو لن يأتي لأنه يجب أن يعمل كثيراً.", phonetic: "إير كومت نيشت فايل إير فيل أربايتن موس" },
    ],
    vocabulary: [
      { german: "der Grund", arabic: "السبب", phonetic: "دير غروند", article: "der", exampleSentence: "Was ist der Grund dafür?", exampleArabic: "ما السبب وراء ذلك؟" },
      { german: "deshalb", arabic: "لذلك", phonetic: "ديسهالب", exampleSentence: "Ich bin krank, deshalb bleibe ich zu Hause.", exampleArabic: "أنا مريض لذلك سأبقى في المنزل." },
    ],
    readingPassage: {
      german: "Fatima lernt jeden Tag fleißig Deutsch, weil sie an der Universität Heidelberg Pharmazie studieren möchte. Sie wiederholt jeden Abend neue Vokabeln, weil sie die B2-Prüfung bestehen will.",
      arabic: "تتعلم فاطمة الألمانية باجتهاد كل يوم لأنها تود دراسة الصيدلة في جامعة هايدلبرغ. تراجع كل مساء مفردات جديدة لأنها تريد اجتياز امتحان B2.",
      questions: [
        {
          question: "Warum lernt Fatima fleißig Deutsch?",
          options: ["Weil sie reisen will", "Weil sie Pharmazie studieren möchte", "Weil sie Freizeit hat", "Weil sie muss"],
          answer: "Weil sie Pharmazie studieren möchte",
          explanation: "يذكر النص: 'weil sie an der Universität Heidelberg Pharmazie studieren möchte'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Er geht zum Arzt, weil er starke Schmerzen ___.",
        options: ["hat", "haben", "hatte", "gehabt"],
        answer: "hat",
        explanation: "في جملة weil يأتي الفعل المصرف في نهاية الجملة تماماً (hat).",
      },
    ],
  },
  {
    id: "a2_1_16",
    level: "A2.1",
    number: 16,
    titleArabic: "الجمل الجانبية مع dass",
    titleGerman: "Objektsätze mit 'dass' (Verb am Ende)",
    descriptionArabic: "استخدام أداة الربط 'dass' (أن) للتعبير عن الرأي والمعرفة والمشاعر مع إرسال الفعل إلى نهاية الجملة.",
    grammarExplanation:
      "تستخدم dass (أن) بعد أفعال الرأي والاعتقاد والشعور مثل: ich denke (أظن), ich glaube (أعتقد), ich weiß (أعلم), ich finde (أرى/أجد), es ist wichtig (من المهم). الفعل يذهب إلى النهاية.",
    grammarRules: [
      {
        rule: "تركيب جملة dass",
        explanation: "Hauptsatz, dass + Subjekt + ... + Verb am Ende.",
        example: "Ich finde, dass Deutsch eine schöne Sprache ist.",
        exampleArabic: "أرى أن الألمانية لغة جميلة.",
      },
    ],
    examples: [
      { german: "Ich weiß, dass du Recht hast.", arabic: "أنا أعلم أنك على حق.", phonetic: "إش فايس داس دو ريشت هاست" },
      { german: "Ich hoffe, dass alles gut klappt.", arabic: "آمل أن تسير كل الأمور على ما يرام.", phonetic: "إش هوفه داس ألس غوت كلابت" },
      { german: "Es ist wichtig, dass wir pünktlich ankommen.", arabic: "من المهم أن نصل في موعدنا بدقة.", phonetic: "إس إست فشتيغ داس فير بونكتليش آن كومن" },
    ],
    vocabulary: [
      { german: "glauben", arabic: "يعتقد / يؤمن", phonetic: "غلاوبن", exampleSentence: "Ich glaube, dass es morgen regnet.", exampleArabic: "أعتقد أنها ستمطر غداً." },
      { german: "hoffen", arabic: "يأمل / يرجو", phonetic: "هوفن", exampleSentence: "Ich hoffe auf das Beste.", exampleArabic: "آمل الأفضل." },
    ],
    readingPassage: {
      german: "Der Lehrer sagt den Schülern, dass regelmäßiges Üben der Schlüssel zum Erfolg ist. Er betont, dass man keine Angst vor Fehlern haben soll, weil man aus Fehlern lernt.",
      arabic: "يقول المعلم للطلاب إن التدرب المنتظم هو مفتاح النجاح. ويؤكد أنه لا ينبغي الخوف من الأخطاء لأن المرء يتعلم من الأخطاء.",
      questions: [
        {
          question: "Was ist laut Lehrer der Schlüssel zum Erfolg?",
          options: ["Viel schlafen", "Regelmäßiges Üben", "Nicht sprechen", "Prüfungen vermeiden"],
          answer: "Regelmäßiges Üben",
          explanation: "يذكر النص: 'dass regelmäßiges Üben der Schlüssel zum Erfolg ist'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich glaube, dass er heute nicht ___ (kommen).",
        options: ["kommt", "kommen", "gekommen", "kommst"],
        answer: "kommt",
        explanation: "في جملة dass يأتي الفعل المصرف في نهاية الجملة (kommt).",
      },
    ],
  },
  {
    id: "a2_1_17",
    level: "A2.1",
    number: 17,
    titleArabic: "الجمل الشرطية والزمنية مع wenn",
    titleGerman: "Konditional- und Temporalsätze mit 'wenn'",
    descriptionArabic: "استخدام أداة الشرط والزمن 'wenn' (إذا / لو / عندما) في الحاضر والمستقبل وقواعد ترتيب الفعل.",
    grammarExplanation:
      "تستخدم wenn بمعنى 'إذا/لو' (شرط) أو 'عندما/كلما' (زمن يتكرر). في جملة wenn يأتي الفعل في النهاية، وإذا بدأنا بـ wenn، تبدأ الجملة الرئيسية بالفعل مباشرة!",
    grammarRules: [
      {
        rule: "البدء بجملة wenn",
        explanation: "Wenn + فاعل + ... + فعل في النهاية, + فعل الجملة الرئيسية + الفاعل + بقية الجملة.",
        example: "Wenn das Wetter schön ist, gehen wir spazieren.",
        exampleArabic: "إذا كان الطقس جميلاً، نذهب للتنزه.",
      },
    ],
    examples: [
      { german: "Wenn ich Zeit habe, rufe ich dich an.", arabic: "إذا كان لدي وقت، سأتصل بك.", phonetic: "فن إش تسايت هابه روفه إش ديش آن" },
      { german: "Wenn du Fragen hast, frag mich einfach.", arabic: "إذا كانت لديك أسئلة، اسألني ببساطة.", phonetic: "فن دو فراغن هاست فراك ميش آينفاخ" },
    ],
    vocabulary: [
      { german: "die Bedingung", arabic: "الشرط", phonetic: "دي بدينغونغ", article: "die", exampleSentence: "Unter einer Bedingung.", exampleArabic: "تحت شرط واحد." },
      { german: "die Möglichkeit", arabic: "الإمكانية / الفرصة", phonetic: "دي موغليش كايت", article: "die", exampleSentence: "Es gibt viele Möglichkeiten.", exampleArabic: "توجد إمكانيات عديدة." },
    ],
    readingPassage: {
      german: "Wenn es am Wochenende sonnig ist, fährt Familie Bauer an den See. Die Kinder schwimmen gerne und die Eltern lesen gemütlich auf der Wiese. Aber wenn es regnet, gehen sie ins Museum.",
      arabic: "عندما يكون الجو مشمساً في عطلة نهاية الأسبوع تذهب عائلة باور إلى البحيرة. يحب الأطفال السباحة ويقرأ الوالدان براحة على العشب. ولكن إذا أمطرت يذهبون إلى المتحف.",
      questions: [
        {
          question: "Wohin geht die Familie, wenn es regnet?",
          options: ["An den See", "Ins Museum", "In den Park", "Ins Kino"],
          answer: "Ins Museum",
          explanation: "يذكر النص: 'wenn es regnet, gehen sie ins Museum'.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Wenn du müde bist, ___ du schlafen gehen.",
        options: ["sollst", "sollen", "soll", "gesollt"],
        answer: "sollst",
        explanation: "بعد جملة wenn تبدأ الجملة الرئيسية بالفعل المصرف مباشرة (sollst du).",
      },
    ],
  },
  {
    id: "a2_1_18",
    level: "A2.1",
    number: 18,
    titleArabic: "مراجعة شاملة لاختبار A2.1",
    titleGerman: "Wiederholung und Zusammenfassung A2.1",
    descriptionArabic: "مراجعة شاملة ومكثفة لجميع قواعد وتراكيب A2.1: حروف الجر المتغيرة، weil، dass، wenn، المقارنة، والماضي.",
    grammarExplanation:
      "تطبيق شامل لمهارات A2.1 وإعدادك الكامل للمرحلة النهائية A2.2 عبر تمارين نصوص متقدمة.",
    grammarRules: [
      {
        rule: "خلاصة قواعد A2.1",
        explanation: "تذكر: weil و dass و wenn ترسل الفعل المصرف إلى نهاية الجملة دائماً! Dativ للثبات و Akkusativ للحركة مع حروف الجر التسعة.",
        example: "Ich freue mich, dass ich A2.1 geschafft habe!",
        exampleArabic: "أنا سعيد لأنني أتممت مستوى A2.1 بنجاح!",
      },
    ],
    examples: [
      { german: "Wir haben viel gelernt.", arabic: "لقد تعلمنا الكثير.", phonetic: "فير هابن فيل غيليرنت" },
      { german: "Jetzt geht es weiter zu A2.2!", arabic: "الآن ننطلق قدماً نحو A2.2!", phonetic: "يتست غيت إس فايتر تسو آ تسفاي بونكت تسفاي" },
    ],
    vocabulary: [
      { german: "der Fortschritt", arabic: "التقدم والتحسن", phonetic: "دير فورت شريت", article: "der", exampleSentence: "Du machst große Fortschritte!", exampleArabic: "أنت تحرز تقدماً كبيراً!" },
      { german: "der Erfolg", arabic: "النجاح", phonetic: "دير إرفولغ", article: "der", exampleSentence: "Viel Erfolg weiterhin!", exampleArabic: "أتمنى لك دوام النجاح والتوفيق!" },
    ],
    readingPassage: {
      german: "Herzlichen Glückwunsch zum Abschluss von A2.1! Du hast gelernt, Nebensätze mit 'weil', 'dass' und 'wenn' zu bilden, Vergleiche anzustellen und über Reisen, Gesundheit und Beruf fließend zu sprechen. Im nächsten Schritt A2.2 vertiefen wir komplexere Grammatik und E-Mail-Schreiben.",
      arabic: "ألف مبروك إتمام مستوى A2.1! لقد تعلمت صياغة الجمل الجانبية باستخدام weil و dass و wenn، وعمل المقارنات، والحديث بطلاقة عن السفر والصحة والعمل. في الخطوة القادمة A2.2 سنعمق القواعد الأكثر تقدماً وكتابة الرسائل والإيميلات.",
      questions: [
        {
          question: "Was ist das nächste Lernziel?",
          options: ["A1.1", "A2.1", "A2.2", "C1"],
          answer: "A2.2",
          explanation: "الهدف التالي هو مستوى A2.2.",
        },
      ],
    },
    miniExercises: [
      {
        question: "Ich bin stolz, dass ich so viel Deutsch ___.",
        options: ["verstehe", "verstehen", "verstehst", "verstanden"],
        answer: "verstehe",
        explanation: "الفعل في نهاية جملة dass مصرف مع ich فيكون verstehe.",
      },
    ],
  },
];
