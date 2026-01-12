// ========================================
// قاموس مصطلحات HTML
// ========================================

const glossaryTerms = [
    {
        term: "HTML",
        code: "HTML",
        definition: "HyperText Markup Language - لغة ترميز النص الفائق، اللغة الأساسية لبناء صفحات الويب."
    },
    {
        term: "وسم / Tag",
        code: "<tag>",
        definition: "الكلمة المحاطة بأقواس زاوية تخبر المتصفح كيف يعرض المحتوى."
    },
    {
        term: "عنصر / Element",
        code: "<p>...</p>",
        definition: "وسم البداية + المحتوى + وسم النهاية معاً يشكلون عنصراً."
    },
    {
        term: "خاصية / Attribute",
        code: 'href="..."',
        definition: "معلومات إضافية نضيفها داخل وسم البداية لتحديد سلوك أو مظهر العنصر."
    },
    {
        term: "DOCTYPE",
        code: "<!DOCTYPE html>",
        definition: "إعلان يخبر المتصفح أن هذا ملف HTML5."
    },
    {
        term: "Head",
        code: "<head>",
        definition: "القسم الذي يحتوي معلومات عن الصفحة (غير مرئي للزائر)."
    },
    {
        term: "Body",
        code: "<body>",
        definition: "القسم الذي يحتوي المحتوى المرئي للصفحة."
    },
    {
        term: "العنوان / Heading",
        code: "<h1> - <h6>",
        definition: "عناصر العناوين من الأكبر (h1) إلى الأصغر (h6)."
    },
    {
        term: "الفقرة / Paragraph",
        code: "<p>",
        definition: "عنصر لعرض فقرة نصية."
    },
    {
        term: "الرابط / Anchor",
        code: "<a>",
        definition: "عنصر لإنشاء روابط تنقل لصفحات أخرى أو مواقع."
    },
    {
        term: "href",
        code: 'href="url"',
        definition: "خاصية تحدد وجهة الرابط (Hyperlink Reference)."
    },
    {
        term: "الصورة / Image",
        code: "<img>",
        definition: "عنصر لعرض الصور في الصفحة (لا يحتاج وسم إغلاق)."
    },
    {
        term: "src",
        code: 'src="path"',
        definition: "خاصية تحدد مصدر/مسار الصورة أو الوسائط."
    },
    {
        term: "alt",
        code: 'alt="وصف"',
        definition: "نص بديل يظهر إذا لم تظهر الصورة، مهم للوصولية."
    },
    {
        term: "القائمة المرتبة",
        code: "<ol>",
        definition: "Ordered List - قائمة بعناصر مرقمة."
    },
    {
        term: "القائمة غير المرتبة",
        code: "<ul>",
        definition: "Unordered List - قائمة بعناصر منقطة."
    },
    {
        term: "عنصر القائمة",
        code: "<li>",
        definition: "List Item - عنصر واحد داخل القائمة."
    },
    {
        term: "الجدول",
        code: "<table>",
        definition: "عنصر لإنشاء جداول بيانات."
    },
    {
        term: "صف الجدول",
        code: "<tr>",
        definition: "Table Row - صف واحد في الجدول."
    },
    {
        term: "خلية الجدول",
        code: "<td>",
        definition: "Table Data - خلية بيانات في الجدول."
    },
    {
        term: "رأس الجدول",
        code: "<th>",
        definition: "Table Header - خلية عنوان في الجدول."
    },
    {
        term: "النموذج",
        code: "<form>",
        definition: "عنصر يحتوي حقول إدخال لجمع بيانات من المستخدم."
    },
    {
        term: "حقل الإدخال",
        code: "<input>",
        definition: "عنصر لإدخال البيانات (نص، رقم، بريد، إلخ)."
    },
    {
        term: "التسمية",
        code: "<label>",
        definition: "عنصر لوصف حقل الإدخال، مهم للوصولية."
    },
    {
        term: "القائمة المنسدلة",
        code: "<select>",
        definition: "عنصر لإنشاء قائمة اختيارات منسدلة."
    },
    {
        term: "مساحة النص",
        code: "<textarea>",
        definition: "عنصر لإدخال نص طويل متعدد الأسطر."
    },
    {
        term: "الزر",
        code: "<button>",
        definition: "عنصر لإنشاء زر تفاعلي."
    },
    {
        term: "Semantic HTML",
        code: "<header>, <nav>, <main>",
        definition: "عناصر HTML5 الدلالية التي تصف معنى المحتوى وليس مظهره فقط."
    },
    {
        term: "الرأس",
        code: "<header>",
        definition: "عنصر دلالي لرأس الصفحة أو القسم."
    },
    {
        term: "التنقل",
        code: "<nav>",
        definition: "عنصر دلالي لقائمة التنقل الرئيسية."
    },
    {
        term: "المحتوى الرئيسي",
        code: "<main>",
        definition: "عنصر دلالي للمحتوى الرئيسي للصفحة."
    },
    {
        term: "المقال",
        code: "<article>",
        definition: "عنصر دلالي لمحتوى مستقل قابل للمشاركة."
    },
    {
        term: "القسم",
        code: "<section>",
        definition: "عنصر دلالي لتجميع محتوى مترابط."
    },
    {
        term: "الجانبي",
        code: "<aside>",
        definition: "عنصر دلالي لمحتوى جانبي أو إضافي."
    },
    {
        term: "التذييل",
        code: "<footer>",
        definition: "عنصر دلالي لتذييل الصفحة أو القسم."
    },
    {
        term: "الفيديو",
        code: "<video>",
        definition: "عنصر لتضمين ملفات الفيديو."
    },
    {
        term: "الصوت",
        code: "<audio>",
        definition: "عنصر لتضمين ملفات الصوت."
    },
    {
        term: "الإطار المضمن",
        code: "<iframe>",
        definition: "عنصر لتضمين صفحة ويب داخل صفحة أخرى."
    },
    {
        term: "div",
        code: "<div>",
        definition: "عنصر حاوية عام للتجميع والتنسيق."
    },
    {
        term: "span",
        code: "<span>",
        definition: "عنصر حاوية سطري للتنسيق داخل النص."
    }
];
