// اليوم الثالث: الروابط والصور
const day3Lessons = [
    {
        id: 1,
        title: "الروابط",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔗</span> الروابط التشعبية</h2>
                <p class="lesson-subtitle">العنصر &lt;a&gt; وخاصية href</p>
                
                <p>الروابط هي أساس الويب! تسمح للزوار بالتنقل بين الصفحات.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>رابط بسيط</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"https://google.com"</span><span class="tag">&gt;</span>اذهبي لجوجل<span class="tag">&lt;/a&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <a href="https://google.com" target="_blank">اذهبي لجوجل</a>
                </div>
                
                <table class="elements-table">
                    <tr><th>الجزء</th><th>الوظيفة</th></tr>
                    <tr><td><code>&lt;a&gt;</code></td><td>عنصر الرابط (Anchor)</td></tr>
                    <tr><td><code>href</code></td><td>عنوان الوجهة</td></tr>
                    <tr><td>النص</td><td>ما يراه ويضغط عليه المستخدم</td></tr>
                </table>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>اجعلي نص الرابط وصفياً. تجنبي "اضغطي هنا"!</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "أنواع الروابط",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎯</span> أنواع الروابط</h2>
                <p class="lesson-subtitle">خارجية، داخلية، وأقسام</p>
                
                <h3>🌍 روابط خارجية</h3>
                <div class="code-box">
                    <div class="code-header"><span>خارجي</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"https://youtube.com"</span><span class="tag">&gt;</span>يوتيوب<span class="tag">&lt;/a&gt;</span></pre>
                    </div>
                </div>
                
                <h3>📁 روابط داخلية</h3>
                <div class="code-box">
                    <div class="code-header"><span>داخلي</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"about.html"</span><span class="tag">&gt;</span>من نحن<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"pages/contact.html"</span><span class="tag">&gt;</span>اتصلي بنا<span class="tag">&lt;/a&gt;</span></pre>
                    </div>
                </div>
                
                <h3>⚓ روابط الأقسام</h3>
                <div class="code-box">
                    <div class="code-header"><span>Anchors</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"#contact"</span><span class="tag">&gt;</span>اذهبي للتواصل<span class="tag">&lt;/a&gt;</span>

<span class="tag">&lt;section</span> <span class="attr">id</span>=<span class="value">"contact"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;h2&gt;</span>تواصلي معنا<span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;/section&gt;</span></pre>
                    </div>
                </div>
                
                <h3>📧 روابط البريد والهاتف</h3>
                <div class="code-box">
                    <div class="code-header"><span>خاصة</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"mailto:info@example.com"</span><span class="tag">&gt;</span>راسلينا<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"tel:+966512345678"</span><span class="tag">&gt;</span>اتصلي<span class="tag">&lt;/a&gt;</span></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "خاصية target",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🪟</span> خاصية target</h2>
                <p class="lesson-subtitle">التحكم في كيفية فتح الروابط</p>
                
                <table class="elements-table">
                    <tr><th>القيمة</th><th>الوظيفة</th></tr>
                    <tr><td><code>_self</code></td><td>نفس النافذة (الافتراضي)</td></tr>
                    <tr><td><code>_blank</code></td><td>نافذة/تبويب جديد</td></tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header"><span>target</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- نفس الصفحة --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"about.html"</span><span class="tag">&gt;</span>من نحن<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- تبويب جديد --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="value">"https://google.com"</span> <span class="attr">target</span>=<span class="value">"_blank"</span><span class="tag">&gt;</span>جوجل<span class="tag">&lt;/a&gt;</span></pre>
                    </div>
                </div>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>استخدمي <code>_blank</code> للروابط الخارجية فقط!</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "الصور",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🖼️</span> عنصر الصورة &lt;img&gt;</h2>
                <p class="lesson-subtitle">إضافة الصور لصفحتك</p>
                
                <div class="code-box">
                    <div class="code-header"><span>الصيغة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"image.jpg"</span> <span class="attr">alt</span>=<span class="value">"وصف الصورة"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>الخاصية</th><th>الوظيفة</th></tr>
                    <tr><td><code>src</code></td><td>مسار الصورة (مطلوب)</td></tr>
                    <tr><td><code>alt</code></td><td>نص بديل (مطلوب)</td></tr>
                    <tr><td><code>width</code></td><td>العرض بالبكسل</td></tr>
                    <tr><td><code>height</code></td><td>الارتفاع بالبكسل</td></tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header"><span>مثال كامل</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;img</span> 
    <span class="attr">src</span>=<span class="value">"images/flower.jpg"</span>
    <span class="attr">alt</span>=<span class="value">"وردة حمراء جميلة"</span>
    <span class="attr">width</span>=<span class="value">"400"</span>
    <span class="attr">height</span>=<span class="value">"300"</span>
<span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <div class="tip-box">
                    <span class="icon">♿</span>
                    <p>دائماً أضيفي <code>alt</code>! يساعد ذوي الإعاقة البصرية ومحركات البحث.</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "المسارات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📂</span> المسارات</h2>
                <p class="lesson-subtitle">النسبية والمطلقة</p>
                
                <h3>🌐 المسار المطلق</h3>
                <div class="code-box">
                    <div class="code-header"><span>مطلق</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"https://example.com/images/photo.jpg"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <h3>📁 المسار النسبي</h3>
                <div class="code-box">
                    <div class="code-header"><span>نسبي</span></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- نفس المجلد --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"photo.jpg"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- مجلد فرعي --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"images/photo.jpg"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- المجلد الأعلى --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"../photo.jpg"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>المطلق</th><th>النسبي</th></tr>
                    <tr><td>للملفات الخارجية</td><td>لملفات مشروعك</td></tr>
                </table>
            </div>
        `
    },
    {
        id: 6,
        title: "figure",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎨</span> figure و figcaption</h2>
                <p class="lesson-subtitle">تجميع الصور مع تعليقاتها</p>
                
                <div class="code-box">
                    <div class="code-header"><span>figure</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;figure&gt;</span>
    <span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="value">"sunset.jpg"</span> <span class="attr">alt</span>=<span class="value">"غروب"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;figcaption&gt;</span>غروب على البحر<span class="tag">&lt;/figcaption&gt;</span>
<span class="tag">&lt;/figure&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <figure style="margin:0;text-align:center">
                        <div style="width:100%;height:100px;background:linear-gradient(#ff7e5f,#feb47b);border-radius:8px"></div>
                        <figcaption style="font-style:italic;color:#666;margin-top:8px">غروب على البحر</figcaption>
                    </figure>
                </div>
                
                <h3>📌 الفوائد:</h3>
                <ul>
                    <li>تنظيم أفضل للكود</li>
                    <li>محركات البحث تفهم العلاقة</li>
                    <li>أفضل للقراء الآليين</li>
                </ul>
            </div>
        `
    },
    {
        id: 7,
        title: "جربي!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">طبقي الروابط والصور</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ الكود</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input"><!DOCTYPE html>
<html>
<body>
    <h1>مواقعي المفضلة</h1>
    
    <ul>
        <li><a href="https://google.com" target="_blank">جوجل</a></li>
        <li><a href="https://youtube.com" target="_blank">يوتيوب</a></li>
    </ul>
    
    <h2>معرض الصور</h2>
    <figure>
        <img src="https://picsum.photos/300/150" alt="صورة عشوائية">
        <figcaption>صورة من الإنترنت</figcaption>
    </figure>
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output"></div>
                    </div>
                </div>
            </div>
        `
    }
];
