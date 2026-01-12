// اليوم الخامس: النماذج - الجزء الأول
const day5Lessons = [
    {
        id: 1,
        title: "عنصر form",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📋</span> عنصر النموذج</h2>
                <p class="lesson-subtitle">form وخصائصه</p>
                
                <p>النماذج تسمح للمستخدمين بإدخال بيانات وإرسالها.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>form</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;form</span> <span class="attr">action</span>=<span class="value">"/submit"</span> <span class="attr">method</span>=<span class="value">"POST"</span><span class="tag">&gt;</span>
    <span class="comment">&lt;!-- عناصر الإدخال هنا --&gt;</span>
<span class="tag">&lt;/form&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>الخاصية</th><th>الوظيفة</th></tr>
                    <tr><td><code>action</code></td><td>أين ترسل البيانات</td></tr>
                    <tr><td><code>method</code></td><td>طريقة الإرسال (GET/POST)</td></tr>
                </table>
                
                <h3>📤 الفرق بين GET و POST:</h3>
                <table class="elements-table">
                    <tr><th>GET</th><th>POST</th></tr>
                    <tr><td>البيانات في URL</td><td>البيانات مخفية</td></tr>
                    <tr><td>للبحث والفلترة</td><td>لتسجيل الدخول والبيانات الحساسة</td></tr>
                </table>
            </div>
        `
    },
    {
        id: 2,
        title: "عنصر input",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⌨️</span> عنصر input</h2>
                <p class="lesson-subtitle">أنواع حقول الإدخال</p>
                
                <div class="code-box">
                    <div class="code-header"><span>أنواع input</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- نص عادي --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"text"</span> <span class="attr">placeholder</span>=<span class="value">"الاسم"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- كلمة مرور --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"password"</span> <span class="attr">placeholder</span>=<span class="value">"كلمة المرور"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- بريد إلكتروني --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"email"</span> <span class="attr">placeholder</span>=<span class="value">"البريد"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- رقم --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"number"</span> <span class="attr">min</span>=<span class="value">"0"</span> <span class="attr">max</span>=<span class="value">"100"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <div style="display:flex;flex-direction:column;gap:10px">
                        <input type="text" placeholder="الاسم" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="password" placeholder="كلمة المرور" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="email" placeholder="البريد" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="number" min="0" max="100" placeholder="رقم" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "أنواع أخرى",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📱</span> أنواع input إضافية</h2>
                <p class="lesson-subtitle">tel, url, date, time</p>
                
                <div class="code-box">
                    <div class="code-header"><span>أنواع متقدمة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- هاتف --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"tel"</span> <span class="attr">placeholder</span>=<span class="value">"رقم الهاتف"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- رابط --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"url"</span> <span class="attr">placeholder</span>=<span class="value">"الموقع"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- تاريخ --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"date"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- وقت --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"time"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <div style="display:flex;flex-direction:column;gap:10px">
                        <input type="tel" placeholder="رقم الهاتف" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="url" placeholder="الموقع" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="date" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input type="time" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                    </div>
                </div>
                
                <div class="tip-box">
                    <span class="icon">📱</span>
                    <p>استخدام النوع الصحيح يظهر لوحة مفاتيح مناسبة على الموبايل!</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "checkbox و radio",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">☑️</span> checkbox و radio</h2>
                <p class="lesson-subtitle">خيارات الاختيار</p>
                
                <h3>☑️ Checkbox - اختيار متعدد</h3>
                <div class="code-box">
                    <div class="code-header"><span>checkbox</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"checkbox"</span> <span class="attr">id</span>=<span class="value">"html"</span><span class="tag">&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"html"</span><span class="tag">&gt;</span>HTML<span class="tag">&lt;/label&gt;</span>

<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"checkbox"</span> <span class="attr">id</span>=<span class="value">"css"</span><span class="tag">&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"css"</span><span class="tag">&gt;</span>CSS<span class="tag">&lt;/label&gt;</span></pre>
                    </div>
                </div>
                
                <h3>🔘 Radio - اختيار واحد</h3>
                <div class="code-box">
                    <div class="code-header"><span>radio</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"radio"</span> <span class="attr">name</span>=<span class="value">"gender"</span> <span class="attr">id</span>=<span class="value">"male"</span><span class="tag">&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"male"</span><span class="tag">&gt;</span>ذكر<span class="tag">&lt;/label&gt;</span>

<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"radio"</span> <span class="attr">name</span>=<span class="value">"gender"</span> <span class="attr">id</span>=<span class="value">"female"</span><span class="tag">&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"female"</span><span class="tag">&gt;</span>أنثى<span class="tag">&lt;/label&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <div style="margin-bottom:15px">
                        <strong>المهارات:</strong><br>
                        <input type="checkbox" id="h1"> <label for="h1">HTML</label>
                        <input type="checkbox" id="c1"> <label for="c1">CSS</label>
                    </div>
                    <div>
                        <strong>الجنس:</strong><br>
                        <input type="radio" name="g" id="m1"> <label for="m1">ذكر</label>
                        <input type="radio" name="g" id="f1"> <label for="f1">أنثى</label>
                    </div>
                </div>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>Radio buttons بنفس الـ <code>name</code> تكون مجموعة واحدة!</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "عنصر label",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏷️</span> عنصر label</h2>
                <p class="lesson-subtitle">أهميته للوصولية</p>
                
                <div class="code-box">
                    <div class="code-header"><span>ربط label بالحقل</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- طريقة 1: باستخدام for و id --&gt;</span>
<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"email"</span><span class="tag">&gt;</span>البريد:<span class="tag">&lt;/label&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"email"</span> <span class="attr">id</span>=<span class="value">"email"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- طريقة 2: تضمين الحقل داخل label --&gt;</span>
<span class="tag">&lt;label&gt;</span>
    البريد:
    <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="value">"email"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/label&gt;</span></pre>
                    </div>
                </div>
                
                <h3>✅ فوائد label:</h3>
                <ul>
                    <li>الضغط على النص يحدد الحقل</li>
                    <li>أفضل للقراء الآليين</li>
                    <li>تجربة مستخدم أفضل</li>
                    <li>مطلوب للوصولية</li>
                </ul>
                
                <div class="tip-box">
                    <span class="icon">♿</span>
                    <p>كل حقل إدخال يجب أن يكون له label!</p>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "خصائص الحقول",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⚙️</span> خصائص الحقول</h2>
                <p class="lesson-subtitle">placeholder, required, disabled</p>
                
                <div class="code-box">
                    <div class="code-header"><span>الخصائص</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="comment">&lt;!-- نص توضيحي --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">placeholder</span>=<span class="value">"أدخلي اسمك"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- حقل مطلوب --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">required</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- حقل معطل --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">disabled</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- للقراءة فقط --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">readonly</span> <span class="attr">value</span>=<span class="value">"ثابت"</span><span class="tag">&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <div style="display:flex;flex-direction:column;gap:10px">
                        <input placeholder="أدخلي اسمك" style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input placeholder="مطلوب *" required style="padding:8px;border:1px solid #ccc;border-radius:5px">
                        <input disabled placeholder="معطل" style="padding:8px;border:1px solid #ccc;border-radius:5px;background:#eee">
                        <input readonly value="للقراءة فقط" style="padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9">
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 7,
        title: "textarea",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📝</span> عنصر textarea</h2>
                <p class="lesson-subtitle">للنصوص الطويلة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>textarea</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="value">"msg"</span><span class="tag">&gt;</span>رسالتك:<span class="tag">&lt;/label&gt;</span>
<span class="tag">&lt;textarea</span> 
    <span class="attr">id</span>=<span class="value">"msg"</span>
    <span class="attr">rows</span>=<span class="value">"4"</span>
    <span class="attr">cols</span>=<span class="value">"50"</span>
    <span class="attr">placeholder</span>=<span class="value">"اكتبي رسالتك هنا..."</span>
<span class="tag">&gt;&lt;/textarea&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <label for="msg2">رسالتك:</label><br>
                    <textarea id="msg2" rows="4" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:5px;resize:vertical" placeholder="اكتبي رسالتك هنا..."></textarea>
                </div>
                
                <table class="elements-table">
                    <tr><th>الخاصية</th><th>الوظيفة</th></tr>
                    <tr><td><code>rows</code></td><td>عدد الصفوف المرئية</td></tr>
                    <tr><td><code>cols</code></td><td>عدد الأعمدة</td></tr>
                </table>
            </div>
        `
    },
    {
        id: 8,
        title: "جربي!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">اصنعي نموذج تسجيل</p>
                
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
    <h2>نموذج التسجيل</h2>
    
    <form>
        <label for="name">الاسم:</label><br>
        <input type="text" id="name" required placeholder="أدخلي اسمك"><br><br>
        
        <label for="email">البريد:</label><br>
        <input type="email" id="email" required placeholder="البريد الإلكتروني"><br><br>
        
        <label for="pass">كلمة المرور:</label><br>
        <input type="password" id="pass" required><br><br>
        
        <label for="bday">تاريخ الميلاد:</label><br>
        <input type="date" id="bday"><br><br>
        
        <input type="checkbox" id="agree">
        <label for="agree">أوافق على الشروط</label><br><br>
        
        <button type="submit">تسجيل</button>
    </form>
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
