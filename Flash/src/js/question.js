﻿const questions = [
    {
        question: "توقف ! و خذ استراحة قصيرة",
        answers: [
            "1",
            "2",
            "3"
        ],
        correctAnswer: 0,
        photoIndex: 0
    },
    {
        question: "متى تأسست الشركة ؟ و من هو مؤسسها ؟",
        answers: [
            "صادامي يازاكي 1929",
            "ريكو يازاكي 1999",
            "يوسيهيكو يازاكي 1992"
        ],
        correctAnswer: 0,
        photoIndex: 1
    },
    {
        question: "ما هي الخدمات التي توفرها لك الشركة ؟",
        answers: [
            "المطعم -الخدمات الطبية-النقل",
            "السفر-النقل-السكن",
            "السكن-الخدمات الطبية-المطعم"
        ],
        correctAnswer: 0,
        photoIndex: 2
    },
    {
        question: "ماذا يمثل الكابل بالنسبة للسيارة ؟",
        answers: [
            "النظام الحركي",
            "الجهاز العصبي",
            "الجهاز الهضمي"
        ],
        correctAnswer: 1,
        photoIndex: 3
    },
    {
        question: "5S",
        answers: [
            "الفرز، التنظيم، التنظيف، توحيد المعايير، الإنظباط",
            "الفرز، التنظيم، التنظيف، توحيد المعايير",
            "الفرز، التنظيم، التصنيف، توحيد المعايير، الإنظباط"
        ],
        correctAnswer: 0,
        photoIndex: 4
    },
    {
        question: "ما هي ركائز روح يازاكي ؟",
        answers: [
            "الشجاعة، مبدأ خدمة الآخر",
            "المثابرة، بعد النظر، مبدأ خدمة الآخر",
            "الأمل، الشجاعة، المثابرة"
        ],
        correctAnswer: 1,
        photoIndex: 6
    },
    {
        question: "ماذا يمثل الرمز ؟ أعط بعض الأمثلة.",
        answers: [
            "Process normal : clip checker-mur qualite",
            "Process special : Teste Electrique-visseuse",
            "Process special : clip checker-mur qualite"
        ],
        correctAnswer: 1,
        photoIndex: 7
    },
    {
        question: "في حالة وجود مشكلة من أي نوع، بمن تتصل؟",
        answers: [
            "رئيس خط الإنتاج و المكون.",
            "المكون و المسؤول عن الصيانة.",
            "رئيس خط الإنتاج و المسؤول عن الجودة"
        ],
        correctAnswer: 2,
        photoIndex: 8
    },
    {
        question: "ماذا تعني هذه البطاقة ؟",
        answers: [
            "البطاقة العملية",
            "البطاقة الحمراء",
            "البطاقة المؤقتة."
        ],
        correctAnswer: 2,
        photoIndex: 9
    },
    {
        question: "ماذا تعني رخصة مؤقتة Temporaire ",
        answers: [
            "هل هي الرخصة التي يتم الحصول عليها بعد اجتياز الاختبارات العملية في نهاية مرحلة التدريب التطبيقي",
            "هل الرخصة التي يتم الحصول عليها بعد اجتياز الاختبارات في نهاية مرحلة التدريب OJT",
            "هل هي الرخصة التي يتم الحصول عليها بعد اجتياز الاختبارات  في نهاية مرحلة التدريب النظري"
        ],
        correctAnswer: 0,
        photoIndex: 9
    },
    {
        question: "ماذا يعني وما هو دوره ؟",
        answers: [
            "نظام التبليغ",
            "نظام التصعيد",
            "النظام الحركي"
        ],
        correctAnswer: 0,
        photoIndex: 10
    },
    {
        question: "ماذا تعني هذه البطاقة ؟",
        answers: [
            "البطاقة العملية",
            "البطاقة الحمراء",
            "البطاقة المؤقتة."
        ],
        correctAnswer: 1,
        photoIndex: 11
    },
    {
        question: "مرحبا بك في تحديات يازاكي !إسحب بطاقة و فز بالتحدي.",
        answers: [
            "1",
            "2",
            "3"
        ],
        correctAnswer: 0,
        photoIndex: 12
    },
    {
        question: "ماذا تعرف عن MUDA. إعط مثالا",
        answers: [
            "Muda = الجودة",
            "Muda = الضياع",
            "Muda = المنتوج"
        ],
        correctAnswer: 1,
        photoIndex: 13
    },
    {
        question: "3P ماذا تقول قاعدة",
        answers: [
            "لا عيب لا مراقبة لا مشاركة",
            "لا أقبل العيب، لا أنتج العيب، لا أسمح بمرور العيب",
            "لا أشارك العيب و لا أراقبه"
        ],
        correctAnswer: 1,
        photoIndex: 15
    },
    {
        question: "ما هو هذا العنصر ؟و ما هي أنواعه ؟",
        answers: [
            "Terminal : Femal Arceau",
            "Terminal : Mal Femal Arceau",
            "conecteur : Mal Femal Arceau"
        ],
        correctAnswer: 1,
        photoIndex: 18
    },
    {
        question: "حدد صاحب الوزرة ؟",
        answers: [
            "عامل",
            "رئيس خط الإنتاج",
            "مسؤول الجودة"
        ],
        correctAnswer: 1,
        photoIndex: 19
    },
    {
        question: "ما هي مناطق الإنتاج ؟",
        answers: [
            "التقطيع، ما قبل التجميع، التجميع النهائي.",
            "التقطيع، مخزن، التجميع النهائي",
            "الشحن، ما قبل التجميع، التجميع النهائي"
        ],
        correctAnswer: 0,
        photoIndex: 20
    },
    {
        question: "من هم زبناء يازاكي القنيطرة ؟",
        answers: [
            "مرسيديس، نيسان، فورد",
            "رونو، بي إم دبليو، نيسان",
            "فورد، نيسان، رونو"
        ],
        correctAnswer: 0,
        photoIndex: 21
    },
    {
        question: "ما هو وقت الاستراحة المسموح به ؟",
        answers: [
            "30 دقيقة",
            "40 دقيقة",
            "دقيقة 20"
        ],
        correctAnswer: 2,
        photoIndex: 22
    },
    {
        question: "كم عدد المصانع الموجودة في بلادنا  ؟",
        answers: [
            "2",
            "3",
            "5"
        ],
        correctAnswer: 2,
        photoIndex: 23
    },
    {
        question: " حدد تعريف الكابل ؟",
        answers: [
            "مجموعة من الأشرطة اللاصقة والمكونات الإضافية، على شكل جذع، بغرض توزيع المعلومات والطاقة الكهربائية على الأجزاء الوظيفية للسيارة.",
            "هومجموعة من الاسلاك الكهربائية، والمكونات الإضافية، على شكل جذع، والتي تهدف إلى توزيع المعلومات والطاقة الكهربائية على الأجزاء الوظيفية للسيارة.",
            "مجموعة من الموصلات والأجزاء المكملة على شكل جدع، الغرض منها توزيع المعلومات والطاقة الكهربائية على الأجزاء الوظيفية للسيارة."
        ],
        correctAnswer: 1,
        photoIndex: 24
    },
    {
        question: "إن [..............]  هو المكون الرئيسي للكابل ويتم استخدامه لتوصيل التيار الكهربائي من نقطة إلى أخرى بأقل خسارة ممكنة",
        answers: [
            "كونكتور Connecteur",
            "Fil سلك التوصيل",
            "الشريط اللاصق Ruban"
        ],
        correctAnswer: 1,
        photoIndex: 25
    },
    {
        question: "اختر الجواب الصحيح في عملية الإدراج Insertion",
        answers: [
            "Pull ==> Click ==> Push ==> Push",
            "Click ==> Pull ==> Pull ==> Push",
            "Pull ==> Click ==> pull ==> Pull"
        ],
        correctAnswer: 2,
        photoIndex: 26
    },
    {
        question: "من هو الشخص المسؤول عن السلامة في مكان الانتاج",
        answers: [
            "رئيس خط الانتاج ، رئيس قطاع الانتاج",
            "مسؤول البيئة ، الصحة والسلامة",
            "جميع المستخدمين"
        ],
        correctAnswer: 2,
        photoIndex: 27
    },
    {
        question: "يعتبر العمل في محطة أو آلة بدون ترخيص ",
        answers: [
            "خفض تكلفة الإنتاج",
            "تحسين الأداء",
            "خطأ جسيم"
        ],
        correctAnswer: 2,
        photoIndex: 28
    },
    {
        question: "عندما أعمل دون ارتداء معدات الحماية الشخصية ، أعتبر:",
        answers: [
            "أقوم بخطأ جسيم",
            "لا أعرًض نفسي للخطر",
            "أقوم بواجبي المهني"
        ],
        correctAnswer: 0,
        photoIndex: 29
    },
    {
        question: "من أجل حماية كل المستخدمين وذويهم من الأوبئة والامراض المعدية، تلتزم يازاكي بما يلي:",
        answers: [
            "نهج سياسة وقائية طبقا للتعليمات الموصى بها من طرف وزارة الصحة المغربية والجهات المعنية.",
            "أخذ التعليمات الموصى بها من طرف مجموعة يازاكي بعين الإعتبار.",
            "عدم الإلتزام بأي منهما."
        ],
        correctAnswer: 1,
        photoIndex: 30
    },
    {
        question: "ماهو اللون الخاص لنفايات البلاستيكية",
        answers: [
            "الابيض",
            "الاسود",
            "الاصفر"
        ],
        correctAnswer: 2,
        photoIndex: 31
    },
    {
        question: "ماذا يترتب عن الغياب بدون مبرر",
        answers: [
            "الفصل عن العمل",
            "العمل ساعات اضافية",
            "اخضاع العامل لاجراءات تأذيبية"
        ],
        correctAnswer: 0,
        photoIndex: 32
    },
    {
        question: "ماهي شروط ارتداء البذلة الرسمية للعمل ",
        answers: [
            "الزي الرسمي متسخ و غير مغلق",
            "إستخدام الأوشحة ؛القباعات و المجوهرات",
            "الزي الرسمي نظيف  و  مغلق"
        ],
        correctAnswer: 2,
        photoIndex: 33
    },
];