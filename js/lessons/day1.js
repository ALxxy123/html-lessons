// اليوم الأول: مقدمة HTML وبنية المستند
const day1Lessons = [
    {
        id: 1,
        title: "ما هو HTML؟",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🌐</span> ما هو HTML؟</h2>
                <p class="lesson-subtitle">HyperText Markup Language - لغة ترميز النص الفائق</p>
                
                <p>HTML هي اللغة الأساسية لبناء صفحات الويب. تخيلي أنها مثل الهيكل العظمي للإنسان - بدونها لا يمكن للصفحة أن تقف!</p>
                
                <h3>🎯 ماذا تفعل HTML؟</h3>
                <ul>
                    <li>تحدد <strong>هيكل</strong> صفحة الويب</li>
                    <li>تنظم <strong>المحتوى</strong> (نصوص، صور، روابط)</li>
                    <li>تخبر المتصفح <strong>كيف يعرض</strong> العناصر</li>
                </ul>
                
                <h3>📝 مثال بسيط</h3>
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
                    <span class="preview-label">المعاينة</span>
                    <h1>مرحباً بالعالم</h1>
                    <p>هذه أول فقرة لي في HTML</p>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>نصيحة:</strong> HTML ليست لغة برمجة! هي لغة ترميز تستخدم للتنسيق فقط.</p>
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
                    <div class="code-header"><span>كيف يفهم المتصفح</span></div>
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
                    <p>إذا كتبتِ الكود بشكل خاطئ، المتصفح قد لا يعرض الصفحة بشكل صحيح!</p>
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
                <p class="lesson-subtitle">كل صفحة HTML تحتاج هذا الهيكل</p>
                
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
                    <tr><th>العنصر</th><th>الوظيفة</th></tr>
                    <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>يخبر المتصفح أن هذا ملف HTML5</td></tr>
                    <tr><td><code>&lt;html&gt;</code></td><td>العنصر الجذر - يحتوي كل شيء</td></tr>
                    <tr><td><code>&lt;head&gt;</code></td><td>معلومات عن الصفحة (غير مرئية)</td></tr>
                    <tr><td><code>&lt;body&gt;</code></td><td>المحتوى المرئي للزائر</td></tr>
                </table>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>كل ما تريدين أن يراه الزائر يجب أن يكون داخل <code>&lt;body&gt;</code></p>
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
                <div class="code-box">
                    <div class="code-header"><span>العناوين</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;h1&gt;</span>عنوان رئيسي<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;h2&gt;</span>عنوان فرعي<span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;h3&gt;</span>عنوان أصغر<span class="tag">&lt;/h3&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <h1 style="margin:5px 0">عنوان رئيسي</h1>
                    <h2 style="margin:5px 0">عنوان فرعي</h2>
                    <h3 style="margin:5px 0">عنوان أصغر</h3>
                </div>
                
                <h3>📝 الفقرات (p)</h3>
                <div class="code-box">
                    <div class="code-header"><span>فقرة</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>هذه فقرة نصية عادية.<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <h3>↩️ كسر السطر (br) والخط الأفقي (hr)</h3>
                <div class="code-box">
                    <div class="code-header"><span>br و hr</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>السطر الأول<span class="tag">&lt;br&gt;</span>السطر الثاني<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;hr&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>السطر الأول<br>السطر الثاني</p>
                    <hr>
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
                
                <p>التعليقات هي نصوص في الكود لكن المتصفح <strong>لا يعرضها</strong>:</p>
                <ul>
                    <li>تذكير نفسك بما يفعله الكود</li>
                    <li>ترك ملاحظات لمبرمج آخر</li>
                    <li>إخفاء كود مؤقتاً</li>
                </ul>
                
                <div class="code-box">
                    <div class="code-header"><span>التعليقات</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- هذا تعليق سطر واحد --&gt;</span>

<span class="comment">&lt;!-- 
    هذا تعليق
    متعدد الأسطر
--&gt;</span>

<span class="tag">&lt;h1&gt;</span>عنوان مرئي<span class="tag">&lt;/h1&gt;</span>
<span class="comment">&lt;!-- &lt;h2&gt;هذا مخفي&lt;/h2&gt; --&gt;</span></pre>
                    </div>
                </div>
                
                <div class="tip-box">
                    <span class="icon">⌨️</span>
                    <p>في VS Code اضغطي <code>Ctrl + /</code> لتحويل أي سطر لتعليق!</p>
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
                <p class="lesson-subtitle">محرر تفاعلي - اكتبي وشاهدي النتيجة</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ اكتبي الكود هنا</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input"><!DOCTYPE html>
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
                        <div class="preview-area" id="preview-output"></div>
                    </div>
                </div>
                
                <h3>🎯 تحديات:</h3>
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
