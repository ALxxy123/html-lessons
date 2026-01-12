// ========================================
// اختبارات كل يوم
// ========================================

const quizzes = {
    1: [
        {
            question: "ماذا يعني الاختصار HTML؟",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correct: 0
        },
        {
            question: "أي عنصر يحتوي المحتوى المرئي للصفحة؟",
            options: [
                "<head>",
                "<body>",
                "<html>",
                "<title>"
            ],
            correct: 1
        },
        {
            question: "ما هو الوسم الصحيح للعنوان الأكبر؟",
            options: [
                "<heading>",
                "<h6>",
                "<h1>",
                "<head>"
            ],
            correct: 2
        },
        {
            question: "كيف نكتب تعليق في HTML؟",
            options: [
                "// تعليق",
                "/* تعليق */",
                "<!-- تعليق -->",
                "# تعليق"
            ],
            correct: 2
        }
    ],
    2: [
        {
            question: "أي عنصر يجعل النص غامقاً ومهماً؟",
            options: [
                "<b>",
                "<strong>",
                "<bold>",
                "<em>"
            ],
            correct: 1
        },
        {
            question: "ما الفرق بين <ul> و <ol>؟",
            options: [
                "لا فرق بينهما",
                "ul مرقمة و ol منقطة",
                "ul منقطة و ol مرقمة",
                "ul للنص و ol للأرقام"
            ],
            correct: 2
        },
        {
            question: "أي عنصر يستخدم للتظليل؟",
            options: [
                "<highlight>",
                "<mark>",
                "<color>",
                "<bg>"
            ],
            correct: 1
        }
    ],
    3: [
        {
            question: "ما هي الخاصية التي تحدد وجهة الرابط؟",
            options: [
                "src",
                "link",
                "href",
                "url"
            ],
            correct: 2
        },
        {
            question: "كيف نفتح الرابط في تبويب جديد؟",
            options: [
                'target="_new"',
                'target="_blank"',
                'open="new"',
                'newtab="true"'
            ],
            correct: 1
        },
        {
            question: "أي خاصية مطلوبة في عنصر الصورة؟",
            options: [
                "title",
                "width",
                "alt",
                "name"
            ],
            correct: 2
        }
    ],
    4: [
        {
            question: "ماذا يعني <tr>؟",
            options: [
                "Table Row",
                "Table Right",
                "Text Row",
                "Tab Row"
            ],
            correct: 0
        },
        {
            question: "ما الخاصية لدمج خليتين أفقياً؟",
            options: [
                "merge",
                "rowspan",
                "colspan",
                "span"
            ],
            correct: 2
        },
        {
            question: "أين نضع عنوان الجدول؟",
            options: [
                "<title>",
                "<caption>",
                "<th>",
                "<header>"
            ],
            correct: 1
        }
    ],
    5: [
        {
            question: "أي نوع input لإدخال البريد الإلكتروني؟",
            options: [
                'type="mail"',
                'type="email"',
                'type="text"',
                'type="address"'
            ],
            correct: 1
        },
        {
            question: "ما الفرق بين checkbox و radio؟",
            options: [
                "لا فرق",
                "checkbox لاختيار واحد، radio لعدة خيارات",
                "checkbox لعدة خيارات، radio لاختيار واحد",
                "checkbox للنص، radio للأرقام"
            ],
            correct: 2
        },
        {
            question: "أي عنصر لحقل نص طويل متعدد الأسطر؟",
            options: [
                "<input type='long'>",
                "<textbox>",
                "<textarea>",
                "<multiline>"
            ],
            correct: 2
        }
    ],
    6: [
        {
            question: "أي عنصر لإنشاء قائمة منسدلة؟",
            options: [
                "<dropdown>",
                "<list>",
                "<select>",
                "<menu>"
            ],
            correct: 2
        },
        {
            question: "ما فائدة Semantic HTML؟",
            options: [
                "فقط للتنسيق",
                "تحسين SEO والوصولية",
                "تسريع الموقع",
                "لا فائدة حقيقية"
            ],
            correct: 1
        },
        {
            question: "أي عنصر دلالي للمحتوى الرئيسي؟",
            options: [
                "<content>",
                "<main>",
                "<body>",
                "<div>"
            ],
            correct: 1
        }
    ],
    7: [
        {
            question: "أي خاصية تظهر أزرار التحكم للفيديو؟",
            options: [
                "buttons",
                "controls",
                "player",
                "toolbar"
            ],
            correct: 1
        },
        {
            question: "ما فائدة عنصر <iframe>؟",
            options: [
                "إضافة صور",
                "تضمين صفحة داخل صفحة",
                "إنشاء إطار حول النص",
                "تحديد حجم الصفحة"
            ],
            correct: 1
        },
        {
            question: "أي meta tag مهم للموبايل؟",
            options: [
                "charset",
                "description",
                "viewport",
                "author"
            ],
            correct: 2
        }
    ]
};

// نقاط كل سؤال
const POINTS_PER_QUESTION = 10;
const BONUS_PERFECT_SCORE = 20;
