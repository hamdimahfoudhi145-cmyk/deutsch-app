import { ReadingPassageItem } from "../types";

export const readingsData: ReadingPassageItem[] = [
  {
    id: "read_a1_1_1",
    level: "A1.1",
    titleArabic: "يوم في حياة طارق في برلين",
    titleGerman: "Ein Tag im Leben von Tariq in Berlin",
    descriptionArabic: "نص قراءة للمبتدئين يصف الروتين اليومي البسيط في برلين مع ترجمة كاملة ومفردات وصوت.",
    germanText:
      "Hallo! Ich heiße Tariq und ich wohne seit drei Monaten in Berlin. Jeden Morgen stehe ich um sieben Uhr auf. Ich trinke einen Kaffee und esse ein Brot mit Käse. Um acht Uhr fahre ich mit der U-Bahn zum Deutschkurs. Mein Lehrer heißt Herr Weber und ist sehr nett. Im Kurs lernen wir viele neue Wörter und sprechen Deutsch mit den Kollegen. Am Nachmittag gehe ich im Park spazieren und kaufe im Supermarkt ein. Am Abend koche ich mit meinen Freunden.",
    arabicTranslation:
      "مرحباً! اسمي طارق وأنا أعيش منذ ثلاثة أشهر في برلين. كل صباح أستيقظ في الساعة السابعة. أشرب قهوة وآكل خبزاً مع الجبن. في الساعة الثامنة أسافر بالمترو إلى دورة اللغة الألمانية. معلمي اسمه السيد فيبر وهو لطيف جداً. في الدورة نتعلم الكثير من الكلمات الجديدة ونتحدث الألمانية مع الزملاء. بعد الظهر أذهب للتنزه في الحديقة وأتسوق في السوبرماركت. في المساء أطبخ مع أصدقائي.",
    vocabularyHighlights: [
      { german: "wohnen", arabic: "يسكن / يعيش", phonetic: "فونن" },
      { german: "aufstehen", arabic: "يستيقظ / ينهض", phonetic: "أوف شتين" },
      { german: "der Deutschkurs", arabic: "دورة الألمانية", phonetic: "دير دويتش كورس" },
      { german: "spazieren gehen", arabic: "يذهب للتنزه", phonetic: "شباتسيرن غيين" },
    ],
    questions: [
      {
        question: "Um wie viel Uhr steht Tariq morgens auf?",
        options: ["Um 6:00 Uhr", "Um 7:00 Uhr", "Um 8:00 Uhr", "Um 9:00 Uhr"],
        answer: "Um 7:00 Uhr",
        explanation: "يذكر النص: 'Jeden Morgen stehe ich um sieben Uhr auf'.",
      },
      {
        question: "Wie fährt Tariq zum Deutschkurs?",
        options: ["Mit dem Auto", "Mit dem Fahrrad", "Mit der U-Bahn", "Zu Fuß"],
        answer: "Mit der U-Bahn",
        explanation: "يذكر النص: 'fahre ich mit der U-Bahn zum Deutschkurs'.",
      },
    ],
  },
  {
    id: "read_a1_2_1",
    level: "A1.2",
    titleArabic: "زيارة إلى السوبرماركت والسوق الأسبوعي",
    titleGerman: "Einkaufen auf dem Wochenmarkt",
    descriptionArabic: "محادثة واقعية في السوق لشراء الخضار والفواكه ومفردات الأسعار والأوزان.",
    germanText:
      "Frau Müller geht jeden Samstag auf den Wochenmarkt in Köln. Sie kauft frisches Obst und Gemüse. Der Verkäufer fragt: 'Guten Tag! Was darf es sein?' Frau Müller antwortet: 'Ich hätte gerne zwei Kilo Äpfel, ein halbes Kilo Tomaten und eine Packung frische Erdbeeren.' Der Verkäufer wiegt die Früchte ab und sagt: 'Das macht zusammen 8 Euro 50.' Frau Müller zahlt bar und wünscht einen schönen Tag.",
    arabicTranslation:
      "تذهب السيدة مولر كل سبت إلى السوق الأسبوعي في كولونيا. تشتري فواكه وخضاراً طازجة. يسأل البائع: 'صباح الخير! ماذا تطلبين حضرتك؟' تجيب السيدة مولر: 'أود كيلوين من التفاح، ونصف كيلو طماطم وعلبة فراولة طازجة.' يزن البائع الفواكه ويقول: 'الحساب الإجمالي 8 يورو و 50 سنتاً.' تدفع السيدة مولر نقداً وتتمنى له يوماً جميلاً.",
    vocabularyHighlights: [
      { german: "der Wochenmarkt", arabic: "السوق الأسبوعي", phonetic: "دير فوخن ماركت" },
      { german: "frisch", arabic: "طازج", phonetic: "فريش" },
      { german: "wiegen", arabic: "يزن", phonetic: "فيغن" },
      { german: "bar zahlen", arabic: "يدفع نقداً", phonetic: "بار تسالن" },
    ],
    questions: [
      {
        question: "Wie viel kosten die Einkäufe von Frau Müller?",
        options: ["5 Euro", "8 Euro 50", "10 Euro", "12 Euro 30"],
        answer: "8 Euro 50",
        explanation: "يذكر النص: 'Das macht zusammen 8 Euro 50'.",
      },
    ],
  },
  {
    id: "read_a2_1_1",
    level: "A2.1",
    titleArabic: "رحلة بالقطار السريع ICE عبر جبال الألب",
    titleGerman: "Eine Reise mit dem ICE durch Deutschland",
    descriptionArabic: "تجربة سفر سياحية غنية بعبارات حجز التذاكر والمحطات ووصف المناظر الطبيعية.",
    germanText:
      "Letzten Sommer haben Sami und seine Familie eine Rundreise mit der Deutschen Bahn gemacht. Sie sind mit dem modernen Schnellzug ICE von Hamburg nach München gefahren. Die Fahrt dauerte knapp sechs Stunden. Sami hat am Fenster gesessen und die wunderschönen Landschaften fotografiert. Im Bordbistro haben sie Kaffee getrunken und Brezeln gegessen. Die Reise war sehr entspannt und komfortabel.",
    arabicTranslation:
      "في الصيف الماضي قامت عائلة سامي برحلة دائرية عبر السكك الحديدية الألمانية. سافروا بالقطار السريع الحديث ICE من هامبورغ إلى ميونخ. استغرقت الرحلة قرابة ست ساعات. جلس سامي بجوار النافذة وصور المناظر الطبيعية الخلابة. وفي مطعم القطار شربوا القهوة وأكلوا البريتزل الألماني. كانت الرحلة مريحة وممتعة للغاية.",
    vocabularyHighlights: [
      { german: "die Rundreise", arabic: "جولة سياحية دائرية", phonetic: "دي روند رايزه" },
      { german: "die Landschaft", arabic: "المنظر الطبيعي", phonetic: "دي لاند شافت" },
      { german: "entspannt", arabic: "مريح ومسترخٍ", phonetic: "إنت شبانت" },
    ],
    questions: [
      {
        question: "Wie lange dauerte die Zugfahrt?",
        options: ["Zwei Stunden", "Knapp sechs Stunden", "Zehn Stunden", "Einen Tag"],
        answer: "Knapp sechs Stunden",
        explanation: "يذكر النص: 'Die Fahrt dauerte knapp sechs Stunden'.",
      },
    ],
  },
  {
    id: "read_a2_2_1",
    level: "A2.2",
    titleArabic: "الاندماج وسوق العمل والتعليم المزدوج في ألمانيا",
    titleGerman: "Duale Ausbildung und Erfolg in Deutschland",
    descriptionArabic: "نص متقدم يشرح نظام التدريب المهني المزدوج (Duale Ausbildung) وخطوات النجاح المهني في ألمانيا.",
    germanText:
      "Das deutsche Ausbildungssystem ist weltweit für seine Praxisnähe bekannt. Bei der dualen Ausbildung lernen die Auszubildenden sowohl in der Berufsschule die theoretischen Grundlagen als auch direkt im Betrieb die praktischen Fertigkeiten. Yassin hat vor zwei Jahren eine Ausbildung als Mechatroniker begonnen. Er erhält eine monatliche Ausbildungsvergütung und sammelt wertvolle Berufserfahrung. Nach dem erfolgreichen Abschluss hat er hervorragende Chancen auf einen unbefristeten Arbeitsvertrag.",
    arabicTranslation:
      "نظام التدريب المهني الألماني معروف عالمياً بارتباطه الوثيق بالواقع العملي. في نظام التدريب المزدوج، يتعلم المتدربون الأسس النظرية في المدرسة المهنية ويكتسبون المهارات العملية مباشرة في الشركة. بدأ ياسين قبل عامين تدريباً مهنياً كفني ميكاترونيك. يتلقى مكافأة تدريب شهرية ويكتسب خبرة مهنية ثمينة. وبعد التخرج بنجاح ستكون لديه فرص ممتازة للحصول على عقد عمل دائم غير محدد المدة.",
    vocabularyHighlights: [
      { german: "die duale Ausbildung", arabic: "التدريب المهني المزدوج", phonetic: "دي دواله أوس بيلدونغ" },
      { german: "die Berufsschule", arabic: "المدرسة المهنية", phonetic: "دي بروفس شوله" },
      { german: "die Berufserfahrung", arabic: "الخبرة العملية", phonetic: "دي بروفس إرفارونغ" },
      { german: "unbefristet", arabic: "غير محدد المدة / دائم", phonetic: "أون ب فريشتت" },
    ],
    questions: [
      {
        question: "Wo lernen die Auszubildenden im dualen System?",
        options: [
          "Nur zu Hause",
          "In der Berufsschule und direkt im Betrieb",
          "Nur an der Universität",
          "Im Ausland",
        ],
        answer: "In der Berufsschule und direkt im Betrieb",
        explanation: "يذكر النص: 'sowohl in der Berufsschule... als auch direkt im Betrieb'.",
      },
      {
        question: "Welchen Beruf lernt Yassin?",
        options: ["Arzt", "Mechatroniker", "Lehrer", "Koch"],
        answer: "Mechatroniker",
        explanation: "يذكر النص: 'eine Ausbildung als Mechatroniker begonnen'.",
      },
    ],
  },
];
