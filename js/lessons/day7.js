// اليوم السابع: الوسائط المتعددة والمشروع النهائي
const day7Lessons = [
    {
        id: 1,
        title: "الفيديو",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎬</span> عنصر video</h2>
                <p class="lesson-subtitle">إضافة الفيديو للصفحة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>video</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;video</span> 
    <span class="attr">src</span>=<span class="value">"video.mp4"</span>
    <span class="attr">controls</span>
    <span class="attr">width</span>=<span class="value">"600"</span>
    <span class="attr">poster</span>=<span class="value">"thumbnail.jpg"</span>
<span class="tag">&gt;</span>
    متصفحك لا يدعم الفيديو
<span class="tag">&lt;/video&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>الخاصية</th><th>الوظيفة</th></tr>
                    <tr><td><code>controls</code></td><td>يظهر أزرار التحكم</td></tr>
                    <tr><td><code>autoplay</code></td><td>تشغيل تلقائي</td></tr>
                    <tr><td><code>loop</code></td><td>تكرار</td></tr>
                    <tr><td><code>muted</code></td><td>كتم الصوت</td></tr>
                    <tr><td><code>poster</code></td><td>صورة قبل التشغيل</td></tr>
                </table>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>للتشغيل التلقائي، يجب إضافة <code>muted</code> أيضاً!</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "الصوت",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎵</span> عنصر audio</h2>
                <p class="lesson-subtitle">إضافة الصوت للصفحة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>audio</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;audio</span> <span class="attr">controls</span><span class="tag">&gt;</span>
    <span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="value">"song.mp3"</span> <span class="attr">type</span>=<span class="value">"audio/mpeg"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="value">"song.ogg"</span> <span class="attr">type</span>=<span class="value">"audio/ogg"</span><span class="tag">&gt;</span>
    متصفحك لا يدعم الصوت
<span class="tag">&lt;/audio&gt;</span></pre>
                    </div>
                </div>
                
                <h3>🔄 عنصر source</h3>
                <p>يسمح بتوفير صيغ متعددة للتوافق مع جميع المتصفحات:</p>
                
                <div class="code-box">
                    <div class="code-header"><span>صيغ متعددة</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;video</span> <span class="attr">controls</span><span class="tag">&gt;</span>
    <span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="value">"video.mp4"</span> <span class="attr">type</span>=<span class="value">"video/mp4"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="value">"video.webm"</span> <span class="attr">type</span>=<span class="value">"video/webm"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/video&gt;</span></pre>
                    </div>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>المتصفح يختار أول صيغة يدعمها تلقائياً!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "iframe",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🖼️</span> عنصر iframe</h2>
                <p class="lesson-subtitle">تضمين محتوى خارجي</p>
                
                <p>يسمح بتضمين صفحات ومحتوى من مواقع أخرى.</p>
                
                <h3>📺 تضمين YouTube:</h3>
                <div class="code-box">
                    <div class="code-header"><span>youtube</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;iframe</span>
    <span class="attr">width</span>=<span class="value">"560"</span>
    <span class="attr">height</span>=<span class="value">"315"</span>
    <span class="attr">src</span>=<span class="value">"https://www.youtube.com/embed/VIDEO_ID"</span>
    <span class="attr">allowfullscreen</span>
<span class="tag">&gt;&lt;/iframe&gt;</span></pre>
                    </div>
                </div>
                
                <h3>🗺️ تضمين خريطة Google:</h3>
                <div class="code-box">
                    <div class="code-header"><span>maps</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;iframe</span>
    <span class="attr">src</span>=<span class="value">"https://www.google.com/maps/embed?..."</span>
    <span class="attr">width</span>=<span class="value">"600"</span>
    <span class="attr">height</span>=<span class="value">"450"</span>
    <span class="attr">style</span>=<span class="value">"border:0"</span>
    <span class="attr">loading</span>=<span class="value">"lazy"</span>
<span class="tag">&gt;&lt;/iframe&gt;</span></pre>
                    </div>
                </div>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>بعض المواقع لا تسمح بتضمينها في iframe لأسباب أمنية!</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "Meta Tags",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏷️</span> Meta Tags</h2>
                <p class="lesson-subtitle">معلومات عن الصفحة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>meta الأساسية</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;head&gt;</span>
    <span class="comment">&lt;!-- ترميز الأحرف --&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="value">"UTF-8"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- للموبايل --&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"viewport"</span> <span class="attr">content</span>=<span class="value">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- وصف للمحركات --&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"description"</span> <span class="attr">content</span>=<span class="value">"وصف الموقع"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- كلمات مفتاحية --&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"keywords"</span> <span class="attr">content</span>=<span class="value">"html, css, web"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- المؤلف --&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="value">"author"</span> <span class="attr">content</span>=<span class="value">"اسمك"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/head&gt;</span></pre>
                    </div>
                </div>
                
                <div class="tip-box">
                    <span class="icon">🔍</span>
                    <p>الـ description يظهر في نتائج البحث تحت عنوان الصفحة!</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "link و favicon",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔗</span> عنصر link و Favicon</h2>
                <p class="lesson-subtitle">ربط الملفات الخارجية</p>
                
                <div class="code-box">
                    <div class="code-header"><span>link</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;head&gt;</span>
    <span class="comment">&lt;!-- ربط CSS --&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="value">"stylesheet"</span> <span class="attr">href</span>=<span class="value">"styles.css"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- أيقونة التبويب --&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="value">"icon"</span> <span class="attr">href</span>=<span class="value">"favicon.ico"</span><span class="tag">&gt;</span>
    
    <span class="comment">&lt;!-- خطوط Google --&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">href</span>=<span class="value">"https://fonts.googleapis.com/..."</span> <span class="attr">rel</span>=<span class="value">"stylesheet"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/head&gt;</span></pre>
                    </div>
                </div>
                
                <h3>🎨 Favicon</h3>
                <p>الأيقونة الصغيرة في تبويب المتصفح:</p>
                <ul>
                    <li>الحجم المثالي: 32x32 أو 16x16 بكسل</li>
                    <li>الصيغ: .ico, .png, .svg</li>
                    <li>ضعيها في المجلد الرئيسي</li>
                </ul>
            </div>
        `
    },
    {
        id: 6,
        title: "مراجعة شاملة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📚</span> مراجعة شاملة</h2>
                <p class="lesson-subtitle">ما تعلمتِ خلال 7 أيام</p>
                
                <h3>✅ اليوم 1: الأساسيات</h3>
                <ul>
                    <li>ما هو HTML وكيف يعمل المتصفح</li>
                    <li>البنية الأساسية للصفحة</li>
                    <li>العناوين والفقرات والتعليقات</li>
                </ul>
                
                <h3>✅ اليوم 2: التنسيق والقوائم</h3>
                <ul>
                    <li>عناصر التنسيق (strong, em, mark)</li>
                    <li>القوائم المرتبة وغير المرتبة</li>
                </ul>
                
                <h3>✅ اليوم 3: الروابط والصور</h3>
                <ul>
                    <li>الروابط وأنواعها</li>
                    <li>الصور و figure</li>
                </ul>
                
                <h3>✅ اليوم 4: الجداول</h3>
                <ul>
                    <li>بنية الجدول</li>
                    <li>دمج الخلايا</li>
                </ul>
                
                <h3>✅ اليوم 5-6: النماذج</h3>
                <ul>
                    <li>عناصر الإدخال المختلفة</li>
                    <li>Semantic HTML</li>
                </ul>
                
                <h3>✅ اليوم 7: الوسائط</h3>
                <ul>
                    <li>الفيديو والصوت</li>
                    <li>iframe و meta tags</li>
                </ul>
                
                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>مبروك! أنتِ الآن جاهزة لبناء صفحات HTML كاملة!</p>
                </div>
            </div>
        `
    },
    {
        id: 7,
        title: "المشروع النهائي",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏆</span> المشروع النهائي</h2>
                <p class="lesson-subtitle">صفحة شخصية متكاملة</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ مشروعك</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input"><!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="صفحتي الشخصية">
    <title>صفحتي الشخصية</title>
</head>
<body style="font-family:Arial;margin:0;background:#f5f5f5">
    <header style="background:linear-gradient(135deg,#2d6a4f,#52b788);color:white;padding:40px;text-align:center">
        <h1>مرحباً، أنا [اسمك]</h1>
        <p>مطورة ويب مبتدئة 💻</p>
    </header>
    
    <nav style="background:#333;padding:15px;text-align:center">
        <a href="#about" style="color:white;margin:0 15px;text-decoration:none">عني</a>
        <a href="#skills" style="color:white;margin:0 15px;text-decoration:none">مهاراتي</a>
        <a href="#contact" style="color:white;margin:0 15px;text-decoration:none">تواصلي</a>
    </nav>
    
    <main style="max-width:800px;margin:30px auto;padding:0 20px">
        <section id="about">
            <h2>👋 عني</h2>
            <p>أنا طالبة أتعلم تطوير الويب. أحب <mark>البرمجة</mark> والتصميم!</p>
        </section>
        
        <section id="skills">
            <h2>🛠️ مهاراتي</h2>
            <ul>
                <li><strong>HTML</strong> - متقدمة</li>
                <li><strong>CSS</strong> - قريباً!</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>📬 تواصلي معي</h2>
            <form>
                <fieldset style="border:1px solid #ccc;border-radius:10px;padding:20px">
                    <legend>رسالة جديدة</legend>
                    <label>الاسم:</label><br>
                    <input type="text" required style="width:100%;padding:10px;margin:5px 0;border:1px solid #ccc;border-radius:5px"><br><br>
                    <label>البريد:</label><br>
                    <input type="email" required style="width:100%;padding:10px;margin:5px 0;border:1px solid #ccc;border-radius:5px"><br><br>
                    <label>الرسالة:</label><br>
                    <textarea rows="4" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:5px"></textarea><br><br>
                    <button type="submit" style="background:#52b788;color:white;padding:10px 30px;border:none;border-radius:5px;cursor:pointer">إرسال</button>
                </fieldset>
            </form>
        </section>
    </main>
    
    <footer style="background:#333;color:white;text-align:center;padding:20px;margin-top:30px">
        <p>صنع بـ ❤️ خلال تعلم HTML</p>
        <p>&copy; 2024 جميع الحقوق محفوظة</p>
    </footer>
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output"></div>
                    </div>
                </div>
                
                <h3>🎯 أضيفي لمشروعك:</h3>
                <ol>
                    <li>صورة شخصية أو صورة رمزية</li>
                    <li>جدول للجدول الدراسي</li>
                    <li>روابط لحساباتك</li>
                    <li>فيديو تعريفي</li>
                </ol>
            </div>
        `
    }
];
