// بيانات دروس اليوم الأول
const day1Lessons = [
    {
        id: 1,
        title: "ما هو HTML؟",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🌐</span> ما هو HTML؟</h2>
                <p class="lesson-subtitle">لغة ترميز النص الفائق - HyperText Markup Language</p>
                
                <p>HTML هي اللغة الأساسية لبناء صفحات الويب. تخيلي أنها مثل الهيكل العظمي للإنسان - بدونها لا يمكن للصفحة أن تقف!</p>
                
                <h3>🎯 ماذا تفعل HTML؟</h3>
                <ul>
                    <li>تحدد <strong>هيكل</strong> صفحة الويب</li>
                    <li>تنظم <strong>المحتوى</strong> (نصوص، صور، روابط)</li>
                    <li>تخبر المتصفح <strong>كيف يعرض</strong> العناصر</li>
                </ul>
                
                <h3>📝 مثال بسيط</h3>
                <p>لنرى كيف يبدو كود HTML بسيط:</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;h1&gt;</span>مرحباً بالعالم<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;p&gt;</span>هذه أول فقرة لي في HTML<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة المباشرة</span>
                    <h1>مرحباً بالعالم</h1>
                    <p>هذه أول فقرة لي في HTML</p>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>نصيحة:</strong> HTML ليست لغة برمجة! هي لغة ترميز (Markup Language) تستخدم للتنسيق والهيكلة فقط.</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "كيف يعمل المتصفح؟",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔍</span> كيف يعمل المتصفح؟</h2>
                <p class="lesson-subtitle">رحلة الكود من ملف HTML إلى صفحة جميلة</p>
                
                <h3>🚀 الرحلة في 4 خطوات:</h3>
                <ol>
                    <li><strong>تكتبين الكود</strong> - ملف بامتداد .html</li>
                    <li><strong>تفتحين الملف</strong> - بالمتصفح (Chrome, Firefox, Edge)</li>
                    <li><strong>المتصفح يقرأ</strong> - يحلل كل سطر من الكود</li>
                    <li><strong>يعرض النتيجة</strong> - صفحة ويب كاملة!</li>
                </ol>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>مثال</span>
                    </div>
                    <div class="code-content">
                        <pre>الكود: <span class="tag">&lt;p&gt;</span>نص<span class="tag">&lt;/p&gt;</span>
  ⬇️
المتصفح يفهم: "هذا عنصر فقرة"
  ⬇️
النتيجة: يعرض النص كفقرة</pre>
                    </div>
                </div>
                
                <h3>🧠 المتصفح ذكي!</h3>
                <p>المتصفح يعرف أن:</p>
                <ul>
                    <li><code>&lt;h1&gt;</code> = عنوان كبير</li>
                    <li><code>&lt;p&gt;</code> = فقرة عادية</li>
                    <li><code>&lt;img&gt;</code> = صورة</li>
                </ul>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p><strong>تنبيه:</strong> إذا كتبتِ الكود بشكل خاطئ، المتصفح قد لا يعرض الصفحة بشكل صحيح!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "البنية الأساسية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏗️</span> البنية الأساسية لصفحة HTML</h2>
                <p class="lesson-subtitle">كل صفحة HTML تحتاج هذا الهيكل الأساسي</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>الهيكل الأساسي</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="value">"ar"</span><span class="tag">&gt;</span>
<span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="value">"UTF-8"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;title&gt;</span>عنوان الصفحة<span class="tag">&lt;/title&gt;</span>
<span class="tag">&lt;/head&gt;</span>
<span class="tag">&lt;body&gt;</span>
    <span class="comment">&lt;!-- المحتوى هنا --&gt;</span>
<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
                    </div>
                </div>
                
                <h3>📋 شرح كل جزء:</h3>
                <table class="elements-table">
                    <tr>
                        <th>العنصر</th>
                        <th>الوظيفة</th>
                    </tr>
                    <tr>
                        <td><code>&lt;!DOCTYPE html&gt;</code></td>
                        <td>يخبر المتصفح أن هذا ملف HTML5</td>
                    </tr>
                    <tr>
                        <td><code>&lt;html&gt;</code></td>
                        <td>العنصر الجذر - يحتوي كل شيء</td>
                    </tr>
                    <tr>
                        <td><code>&lt;head&gt;</code></td>
                        <td>معلومات عن الصفحة (غير مرئية)</td>
                    </tr>
                    <tr>
                        <td><code>&lt;body&gt;</code></td>
                        <td>المحتوى المرئي للزائر</td>
                    </tr>
                </table>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>تذكري:</strong> كل ما تريدين أن يراه الزائر يجب أن يكون داخل <code>&lt;body&gt;</code></p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "العناصر الأساسية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📦</span> العناصر الأساسية</h2>
                <p class="lesson-subtitle">العناوين والفقرات والخطوط</p>
                
                <h3>📰 العناوين (h1 - h6)</h3>
                <p>هناك 6 مستويات للعناوين، من الأكبر للأصغر:</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>العناوين</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;h1&gt;</span>عنوان رئيسي<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;h2&gt;</span>عنوان فرعي<span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;h3&gt;</span>عنوان أصغر<span class="tag">&lt;/h3&gt;</span>
<span class="tag">&lt;h4&gt;</span>عنوان أصغر<span class="tag">&lt;/h4&gt;</span>
<span class="tag">&lt;h5&gt;</span>عنوان أصغر<span class="tag">&lt;/h5&gt;</span>
<span class="tag">&lt;h6&gt;</span>أصغر عنوان<span class="tag">&lt;/h6&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <h1 style="margin:5px 0">عنوان رئيسي</h1>
                    <h2 style="margin:5px 0">عنوان فرعي</h2>
                    <h3 style="margin:5px 0">عنوان أصغر</h3>
                    <h4 style="margin:5px 0">عنوان أصغر</h4>
                    <h5 style="margin:5px 0">عنوان أصغر</h5>
                    <h6 style="margin:5px 0">أصغر عنوان</h6>
                </div>
                
                <h3>📝 الفقرات (p)</h3>
                <div class="code-box">
                    <div class="code-header">
                        <span>فقرة</span>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>هذه فقرة نصية عادية.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>وهذه فقرة أخرى منفصلة.<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <h3>↩️ كسر السطر (br) والخط الأفقي (hr)</h3>
                <div class="code-box">
                    <div class="code-header">
                        <span>br و hr</span>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>السطر الأول<span class="tag">&lt;br&gt;</span>السطر الثاني<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;hr&gt;</span> <span class="comment">&lt;!-- خط أفقي فاصل --&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>السطر الأول<br>السطر الثاني</p>
                    <hr>
                    <p>بعد الخط الفاصل</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "التعليقات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">💬</span> التعليقات في HTML</h2>
                <p class="lesson-subtitle">ملاحظات للمبرمج - المتصفح يتجاهلها</p>
                
                <p>التعليقات هي نصوص تكتبينها في الكود لكن المتصفح <strong>لا يعرضها</strong>. مفيدة لـ:</p>
                <ul>
                    <li>تذكير نفسك بما يفعله الكود</li>
                    <li>ترك ملاحظات لمبرمج آخر</li>
                    <li>إخفاء كود مؤقتاً</li>
                </ul>
                
                <h3>📝 طريقة الكتابة:</h3>
                <div class="code-box">
                    <div class="code-header">
                        <span>التعليقات</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- هذا تعليق سطر واحد --&gt;</span>

<span class="comment">&lt;!-- 
    هذا تعليق
    متعدد الأسطر
--&gt;</span>

<span class="tag">&lt;h1&gt;</span>عنوان مرئي<span class="tag">&lt;/h1&gt;</span>
<span class="comment">&lt;!-- &lt;h2&gt;هذا العنوان مخفي&lt;/h2&gt; --&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <h1>عنوان مرئي</h1>
                    <!-- هذا لن يظهر -->
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>اختصار:</strong> في VS Code اضغطي <code>Ctrl + /</code> لتحويل أي سطر لتعليق!</p>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "جربي بنفسك!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">محرر تفاعلي - اكتبي وشاهدي النتيجة مباشرة</p>
                
                <p>جربي كتابة كود HTML في المحرر وشاهدي النتيجة فوراً!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ اكتبي الكود هنا</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input" placeholder="اكتبي كود HTML هنا..."><!DOCTYPE html>
<html>
<head>
    <title>صفحتي</title>
</head>
<body>
    <h1>مرحباً!</h1>
    <p>هذه صفحتي الأولى</p>
    <!-- جربي إضافة المزيد -->
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output">
                            <h1>مرحباً!</h1>
                            <p>هذه صفحتي الأولى</p>
                        </div>
                    </div>
                </div>
                
                <h3>🎯 تحديات للتجربة:</h3>
                <ol>
                    <li>أضيفي عنوان h2 تحت الفقرة</li>
                    <li>أضيفي 3 فقرات عن نفسك</li>
                    <li>استخدمي &lt;br&gt; للنزول لسطر جديد</li>
                    <li>أضيفي &lt;hr&gt; بين الفقرات</li>
                </ol>
            </div>
        `
    }
];

// بيانات دروس اليوم الثاني
const day2Lessons = [
    {
        id: 1,
        title: "تنسيق النصوص",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✨</span> تنسيق النصوص</h2>
                <p class="lesson-subtitle">اجعلي نصوصك أكثر جاذبية وتميزاً</p>
                
                <h3>💪 العناصر الأساسية للتنسيق:</h3>
                <table class="elements-table">
                    <tr>
                        <th>العنصر</th>
                        <th>الاستخدام</th>
                        <th>النتيجة</th>
                    </tr>
                    <tr>
                        <td><code>&lt;strong&gt;</code></td>
                        <td>نص مهم/غامق</td>
                        <td><strong>نص غامق</strong></td>
                    </tr>
                    <tr>
                        <td><code>&lt;em&gt;</code></td>
                        <td>تأكيد/مائل</td>
                        <td><em>نص مائل</em></td>
                    </tr>
                    <tr>
                        <td><code>&lt;mark&gt;</code></td>
                        <td>تظليل</td>
                        <td><mark>نص مظلل</mark></td>
                    </tr>
                    <tr>
                        <td><code>&lt;small&gt;</code></td>
                        <td>نص صغير</td>
                        <td><small>نص صغير</small></td>
                    </tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>أمثلة</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>هذا نص <span class="tag">&lt;strong&gt;</span>مهم جداً<span class="tag">&lt;/strong&gt;</span> يجب الانتباه له.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>أريد <span class="tag">&lt;em&gt;</span>التأكيد<span class="tag">&lt;/em&gt;</span> على هذه النقطة.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>لا تنسي <span class="tag">&lt;mark&gt;</span>هذا الجزء المظلل<span class="tag">&lt;/mark&gt;</span>!<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>الخط العادي <span class="tag">&lt;small&gt;</span>والخط الصغير<span class="tag">&lt;/small&gt;</span><span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>هذا نص <strong>مهم جداً</strong> يجب الانتباه له.</p>
                    <p>أريد <em>التأكيد</em> على هذه النقطة.</p>
                    <p>لا تنسي <mark>هذا الجزء المظلل</mark>!</p>
                    <p>الخط العادي <small>والخط الصغير</small></p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "عناصر إضافية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔤</span> عناصر تنسيق إضافية</h2>
                <p class="lesson-subtitle">Sub, Sup, Del, Ins - للحالات الخاصة</p>
                
                <table class="elements-table">
                    <tr>
                        <th>العنصر</th>
                        <th>الوظيفة</th>
                        <th>مثال</th>
                    </tr>
                    <tr>
                        <td><code>&lt;sub&gt;</code></td>
                        <td>نص منخفض</td>
                        <td>H<sub>2</sub>O</td>
                    </tr>
                    <tr>
                        <td><code>&lt;sup&gt;</code></td>
                        <td>نص مرتفع</td>
                        <td>X<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td><code>&lt;del&gt;</code></td>
                        <td>نص محذوف</td>
                        <td><del>محذوف</del></td>
                    </tr>
                    <tr>
                        <td><code>&lt;ins&gt;</code></td>
                        <td>نص مُضاف</td>
                        <td><ins>مُضاف</ins></td>
                    </tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>أمثلة عملية</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- للمعادلات الكيميائية --&gt;</span>
<span class="tag">&lt;p&gt;</span>الماء: H<span class="tag">&lt;sub&gt;</span>2<span class="tag">&lt;/sub&gt;</span>O<span class="tag">&lt;/p&gt;</span>

<span class="comment">&lt;!-- للأسس الرياضية --&gt;</span>
<span class="tag">&lt;p&gt;</span>مساحة المربع = x<span class="tag">&lt;sup&gt;</span>2<span class="tag">&lt;/sup&gt;</span><span class="tag">&lt;/p&gt;</span>

<span class="comment">&lt;!-- للتعديلات --&gt;</span>
<span class="tag">&lt;p&gt;</span>السعر: <span class="tag">&lt;del&gt;</span>100<span class="tag">&lt;/del&gt;</span> <span class="tag">&lt;ins&gt;</span>75<span class="tag">&lt;/ins&gt;</span> ريال<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>الماء: H<sub>2</sub>O</p>
                    <p>مساحة المربع = x<sup>2</sup></p>
                    <p>السعر: <del>100</del> <ins>75</ins> ريال</p>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>استخدام عملي:</strong> del و ins مفيدة جداً لعرض تخفيضات الأسعار أو التعديلات على النصوص!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "القوائم غير المرتبة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📋</span> القوائم غير المرتبة</h2>
                <p class="lesson-subtitle">Unordered Lists - قوائم بنقاط</p>
                
                <p>تستخدم عندما لا يكون ترتيب العناصر مهماً - مثل قائمة مشتريات.</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>ul + li</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;</span>تفاح<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>برتقال<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>موز<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ul>
                        <li>تفاح</li>
                        <li>برتقال</li>
                        <li>موز</li>
                    </ul>
                </div>
                
                <h3>📌 شرح العناصر:</h3>
                <ul>
                    <li><code>&lt;ul&gt;</code> = Unordered List (القائمة غير المرتبة)</li>
                    <li><code>&lt;li&gt;</code> = List Item (عنصر القائمة)</li>
                </ul>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>كل <code>&lt;li&gt;</code> يجب أن يكون داخل <code>&lt;ul&gt;</code> أو <code>&lt;ol&gt;</code> وليس بمفرده!</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "القوائم المرتبة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔢</span> القوائم المرتبة</h2>
                <p class="lesson-subtitle">Ordered Lists - قوائم مرقمة</p>
                
                <p>تستخدم عندما يكون الترتيب مهماً - مثل خطوات وصفة طبخ.</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>ol + li</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ol&gt;</span>
    <span class="tag">&lt;li&gt;</span>سخني الفرن<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>اخلطي المكونات<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>اخبزي 30 دقيقة<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ol>
                        <li>سخني الفرن</li>
                        <li>اخلطي المكونات</li>
                        <li>اخبزي 30 دقيقة</li>
                    </ol>
                </div>
                
                <h3>🎨 أنماط الترقيم:</h3>
                <div class="code-box">
                    <div class="code-header">
                        <span>أنواع type</span>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"1"</span><span class="tag">&gt;</span> أرقام: 1, 2, 3
<span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"A"</span><span class="tag">&gt;</span> حروف كبيرة: A, B, C
<span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"a"</span><span class="tag">&gt;</span> حروف صغيرة: a, b, c
<span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"I"</span><span class="tag">&gt;</span> أرقام رومانية: I, II, III</pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "القوائم المتداخلة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📚</span> القوائم المتداخلة</h2>
                <p class="lesson-subtitle">Nested Lists - قوائم داخل قوائم</p>
                
                <p>يمكنك وضع قائمة داخل عنصر قائمة آخر!</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>قوائم متداخلة</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;</span>الفواكه
        <span class="tag">&lt;ul&gt;</span>
            <span class="tag">&lt;li&gt;</span>تفاح<span class="tag">&lt;/li&gt;</span>
            <span class="tag">&lt;li&gt;</span>برتقال<span class="tag">&lt;/li&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>الخضروات
        <span class="tag">&lt;ul&gt;</span>
            <span class="tag">&lt;li&gt;</span>خيار<span class="tag">&lt;/li&gt;</span>
            <span class="tag">&lt;li&gt;</span>طماطم<span class="tag">&lt;/li&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ul>
                        <li>الفواكه
                            <ul>
                                <li>تفاح</li>
                                <li>برتقال</li>
                            </ul>
                        </li>
                        <li>الخضروات
                            <ul>
                                <li>خيار</li>
                                <li>طماطم</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>يمكنك المزج بين <code>&lt;ul&gt;</code> و <code>&lt;ol&gt;</code> في القوائم المتداخلة!</p>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "قوائم التعريف",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📖</span> قوائم التعريف</h2>
                <p class="lesson-subtitle">Definition Lists - مصطلحات وتعريفاتها</p>
                
                <p>تستخدم لعرض مصطلحات مع شرحها - مثل القاموس.</p>
                
                <div class="code-box">
                    <div class="code-header">
                        <span>dl, dt, dd</span>
                        <button class="copy-btn" onclick="copyCode(this)">نسخ</button>
                    </div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;dl&gt;</span>
    <span class="tag">&lt;dt&gt;</span>HTML<span class="tag">&lt;/dt&gt;</span>
    <span class="tag">&lt;dd&gt;</span>لغة ترميز النص الفائق<span class="tag">&lt;/dd&gt;</span>
    
    <span class="tag">&lt;dt&gt;</span>CSS<span class="tag">&lt;/dt&gt;</span>
    <span class="tag">&lt;dd&gt;</span>أوراق الأنماط المتتالية<span class="tag">&lt;/dd&gt;</span>
    
    <span class="tag">&lt;dt&gt;</span>JavaScript<span class="tag">&lt;/dt&gt;</span>
    <span class="tag">&lt;dd&gt;</span>لغة برمجة للويب<span class="tag">&lt;/dd&gt;</span>
<span class="tag">&lt;/dl&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <dl>
                        <dt><strong>HTML</strong></dt>
                        <dd>لغة ترميز النص الفائق</dd>
                        <dt><strong>CSS</strong></dt>
                        <dd>أوراق الأنماط المتتالية</dd>
                        <dt><strong>JavaScript</strong></dt>
                        <dd>لغة برمجة للويب</dd>
                    </dl>
                </div>
                
                <h3>📌 شرح العناصر:</h3>
                <ul>
                    <li><code>&lt;dl&gt;</code> = Definition List (قائمة التعريف)</li>
                    <li><code>&lt;dt&gt;</code> = Definition Term (المصطلح)</li>
                    <li><code>&lt;dd&gt;</code> = Definition Description (التعريف)</li>
                </ul>
            </div>
        `
    },
    {
        id: 7,
        title: "جربي بنفسك!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">طبقي ما تعلمتِ اليوم</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ اكتبي الكود هنا</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input" placeholder="اكتبي كود HTML هنا..."><!DOCTYPE html>
<html>
<body>
    <h1>قائمة <mark>مشترياتي</mark></h1>
    
    <ul>
        <li><strong>فواكه</strong>
            <ul>
                <li>تفاح</li>
                <li>برتقال</li>
            </ul>
        </li>
        <li><strong>خضروات</strong></li>
    </ul>
    
    <h2>خطوات التحضير:</h2>
    <ol>
        <li>اغسلي الفواكه</li>
        <li>قطعيها</li>
        <li><del>أضيفي سكر</del> <ins>بدون سكر!</ins></li>
    </ol>
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output">
                        </div>
                    </div>
                </div>
                
                <h3>🎯 تحديات:</h3>
                <ol>
                    <li>أضيفي قائمة تعريف لـ 3 مصطلحات</li>
                    <li>استخدمي <code>&lt;sup&gt;</code> لكتابة معادلة رياضية</li>
                    <li>اصنعي قائمة متداخلة من 3 مستويات</li>
                </ol>
            </div>
        `
    }
];
