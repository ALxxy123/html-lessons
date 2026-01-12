// اليوم السادس: النماذج المتقدمة + Semantic HTML
const day6Lessons = [
    {
        id: 1,
        title: "select",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📜</span> القوائم المنسدلة</h2>
                <p class="lesson-subtitle">select, option, optgroup</p>
                
                <div class="code-box">
                    <div class="code-header"><span>select</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"city"</span><span class="tag">&gt;</span>المدينة:<span class="tag">&lt;/label&gt;</span>
<span class="tag">&lt;select</span> <span class="attr">id</span>=<span class="value">"city"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">""</span><span class="tag">&gt;</span>اختاري...<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"riyadh"</span><span class="tag">&gt;</span>الرياض<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"jeddah"</span><span class="tag">&gt;</span>جدة<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"dammam"</span><span class="tag">&gt;</span>الدمام<span class="tag">&lt;/option&gt;</span>
<span class="tag">&lt;/select&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <label for="city2">المدينة:</label>
                    <select id="city2" style="padding:8px;border-radius:5px">
                        <option value="">اختاري...</option>
                        <option value="riyadh">الرياض</option>
                        <option value="jeddah">جدة</option>
                        <option value="dammam">الدمام</option>
                    </select>
                </div>
                
                <h3>📂 تجميع الخيارات (optgroup)</h3>
                <div class="code-box">
                    <div class="code-header"><span>optgroup</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;select&gt;</span>
    <span class="tag">&lt;optgroup</span> <span class="attr">label</span>=<span class="value">"فواكه"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;option&gt;</span>تفاح<span class="tag">&lt;/option&gt;</span>
        <span class="tag">&lt;option&gt;</span>برتقال<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;/optgroup&gt;</span>
    <span class="tag">&lt;optgroup</span> <span class="attr">label</span>=<span class="value">"خضار"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;option&gt;</span>خيار<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;/optgroup&gt;</span>
<span class="tag">&lt;/select&gt;</span></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "datalist",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔍</span> عنصر datalist</h2>
                <p class="lesson-subtitle">اقتراحات للإدخال</p>
                
                <div class="code-box">
                    <div class="code-header"><span>datalist</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;input</span> <span class="attr">list</span>=<span class="value">"browsers"</span> <span class="attr">placeholder</span>=<span class="value">"اختاري متصفح"</span><span class="tag">&gt;</span>
<span class="tag">&lt;datalist</span> <span class="attr">id</span>=<span class="value">"browsers"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"Chrome"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"Firefox"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"Edge"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="value">"Safari"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/datalist&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة - اكتبي أو اضغطي</span>
                    <input list="browsers2" placeholder="اختاري متصفح" style="padding:8px;border:1px solid #ccc;border-radius:5px;width:200px">
                    <datalist id="browsers2">
                        <option value="Chrome">
                        <option value="Firefox">
                        <option value="Edge">
                        <option value="Safari">
                    </datalist>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>الفرق عن select: datalist يسمح بكتابة قيمة جديدة!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "fieldset",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📦</span> تجميع الحقول</h2>
                <p class="lesson-subtitle">fieldset و legend</p>
                
                <div class="code-box">
                    <div class="code-header"><span>fieldset</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;fieldset&gt;</span>
    <span class="tag">&lt;legend&gt;</span>المعلومات الشخصية<span class="tag">&lt;/legend&gt;</span>
    
    <span class="tag">&lt;label&gt;</span>الاسم:<span class="tag">&lt;/label&gt;</span>
    <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"text"</span><span class="tag">&gt;</span><span class="tag">&lt;br&gt;</span>
    
    <span class="tag">&lt;label&gt;</span>البريد:<span class="tag">&lt;/label&gt;</span>
    <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"email"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/fieldset&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <fieldset style="border:1px solid #ccc;border-radius:8px;padding:15px">
                        <legend style="font-weight:bold;padding:0 10px">المعلومات الشخصية</legend>
                        <label>الاسم:</label>
                        <input type="text" style="padding:5px;margin:5px 0;border:1px solid #ccc;border-radius:4px"><br>
                        <label>البريد:</label>
                        <input type="email" style="padding:5px;margin:5px 0;border:1px solid #ccc;border-radius:4px">
                    </fieldset>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "أنواع input إضافية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎨</span> أنواع input إضافية</h2>
                <p class="lesson-subtitle">color, range, file</p>
                
                <div class="code-box">
                    <div class="code-header"><span>أنواع خاصة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- اختيار لون --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"color"</span> <span class="attr">value</span>=<span class="value">"#52b788"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- شريط تمرير --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"range"</span> <span class="attr">min</span>=<span class="value">"0"</span> <span class="attr">max</span>=<span class="value">"100"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- رفع ملف --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"file"</span> <span class="attr">accept</span>=<span class="value">"image/*"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <div style="display:flex;flex-direction:column;gap:15px">
                        <div><label>اللون: </label><input type="color" value="#52b788"></div>
                        <div><label>الصوت: </label><input type="range" min="0" max="100" value="50"></div>
                        <div><label>ملف: </label><input type="file" accept="image/*"></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "Semantic HTML",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧩</span> Semantic HTML</h2>
                <p class="lesson-subtitle">عناصر دلالية لهيكلة الصفحة</p>
                
                <p>العناصر الدلالية تصف معنى المحتوى، ليس فقط شكله.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>هيكل الصفحة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;header&gt;</span>رأس الصفحة<span class="tag">&lt;/header&gt;</span>

<span class="tag">&lt;nav&gt;</span>قائمة التنقل<span class="tag">&lt;/nav&gt;</span>

<span class="tag">&lt;main&gt;</span>
    <span class="tag">&lt;article&gt;</span>مقال مستقل<span class="tag">&lt;/article&gt;</span>
    <span class="tag">&lt;section&gt;</span>قسم من المحتوى<span class="tag">&lt;/section&gt;</span>
    <span class="tag">&lt;aside&gt;</span>محتوى جانبي<span class="tag">&lt;/aside&gt;</span>
<span class="tag">&lt;/main&gt;</span>

<span class="tag">&lt;footer&gt;</span>تذييل الصفحة<span class="tag">&lt;/footer&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>العنصر</th><th>الاستخدام</th></tr>
                    <tr><td><code>&lt;header&gt;</code></td><td>رأس الصفحة/القسم</td></tr>
                    <tr><td><code>&lt;nav&gt;</code></td><td>قائمة التنقل</td></tr>
                    <tr><td><code>&lt;main&gt;</code></td><td>المحتوى الرئيسي</td></tr>
                    <tr><td><code>&lt;article&gt;</code></td><td>مقال مستقل</td></tr>
                    <tr><td><code>&lt;section&gt;</code></td><td>قسم مواضيعي</td></tr>
                    <tr><td><code>&lt;aside&gt;</code></td><td>محتوى جانبي</td></tr>
                    <tr><td><code>&lt;footer&gt;</code></td><td>تذييل</td></tr>
                </table>
            </div>
        `
    },
    {
        id: 6,
        title: "div vs Semantic",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⚖️</span> div مقابل Semantic</h2>
                <p class="lesson-subtitle">الفرق والأهمية</p>
                
                <h3>❌ طريقة قديمة (div):</h3>
                <div class="code-box">
                    <div class="code-header"><span>غير دلالي</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="value">"header"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="value">"nav"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="value">"content"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="value">"footer"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/div&gt;</span></pre>
                    </div>
                </div>
                
                <h3>✅ طريقة حديثة (Semantic):</h3>
                <div class="code-box">
                    <div class="code-header"><span>دلالي</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;header&gt;</span>...<span class="tag">&lt;/header&gt;</span>
<span class="tag">&lt;nav&gt;</span>...<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;main&gt;</span>...<span class="tag">&lt;/main&gt;</span>
<span class="tag">&lt;footer&gt;</span>...<span class="tag">&lt;/footer&gt;</span></pre>
                    </div>
                </div>
                
                <h3>✨ فوائد Semantic HTML:</h3>
                <ul>
                    <li><strong>SEO أفضل</strong> - محركات البحث تفهم المحتوى</li>
                    <li><strong>وصولية</strong> - القراء الآليين يتنقلون بسهولة</li>
                    <li><strong>كود أنظف</strong> - سهل القراءة والصيانة</li>
                </ul>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدمي <code>&lt;div&gt;</code> فقط عندما لا يوجد عنصر دلالي مناسب!</p>
                </div>
            </div>
        `
    },
    {
        id: 7,
        title: "جربي!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">نموذج متقدم مع Semantic HTML</p>
                
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
    <header style="background:#52b788;color:white;padding:20px;text-align:center">
        <h1>موقعي</h1>
    </header>
    
    <nav style="background:#333;padding:10px">
        <a href="#" style="color:white;margin:0 10px">الرئيسية</a>
        <a href="#" style="color:white;margin:0 10px">من نحن</a>
        <a href="#" style="color:white;margin:0 10px">اتصل بنا</a>
    </nav>
    
    <main style="padding:20px">
        <article>
            <h2>نموذج الاتصال</h2>
            <form>
                <fieldset>
                    <legend>معلوماتك</legend>
                    <label>الاسم:</label><br>
                    <input type="text" required><br><br>
                    
                    <label>المدينة:</label><br>
                    <select>
                        <option>اختاري...</option>
                        <option>الرياض</option>
                        <option>جدة</option>
                    </select>
                </fieldset>
            </form>
        </article>
    </main>
    
    <footer style="background:#333;color:white;padding:10px;text-align:center">
        جميع الحقوق محفوظة 2024
    </footer>
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
