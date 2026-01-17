// ========================================
// اليوم الرابع: Typography والخطوط
// ========================================

const cssDay4Lessons = [
    {
        title: "font-family",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔤</span> أنواع الخطوط (font-family)</h2>
                <p class="lesson-subtitle">اختيار الخطوط المناسبة لموقعك</p>
                
                <h3>📌 Web Safe Fonts</h3>
                <p>خطوط متوفرة على جميع الأجهزة:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">font-family</span>: <span class="value">Arial, Helvetica, sans-serif</span>;
<span class="attr">font-family</span>: <span class="value">'Times New Roman', Times, serif</span>;
<span class="attr">font-family</span>: <span class="value">'Courier New', Courier, monospace</span>;</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة الخطوط</span>
                    <p style="font-family:Arial,sans-serif;margin:5px 0;">Arial - خط واضح للقراءة</p>
                    <p style="font-family:'Times New Roman',serif;margin:5px 0;">Times New Roman - خط كلاسيكي</p>
                    <p style="font-family:'Courier New',monospace;margin:5px 0;">Courier New - للأكواد</p>
                </div>

                <h3>🌐 Google Fonts</h3>
                <p>خطوط مجانية واحترافية من Google:</p>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre>&lt;link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet"&gt;</pre></div>
                </div>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">body</span> {
  <span class="attr">font-family</span>: <span class="value">'Cairo', sans-serif</span>;
}</pre></div>
                </div>

                <h3>🇸🇦 خطوط عربية مميزة</h3>
                <ul>
                    <li><strong>Cairo</strong> - أنيق وعصري</li>
                    <li><strong>Tajawal</strong> - واضح ومريح</li>
                    <li><strong>Almarai</strong> - احترافي</li>
                    <li><strong>IBM Plex Sans Arabic</strong> - تقني</li>
                </ul>
            </div>
        `
    },
    {
        title: "حجم ووزن الخط",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📏</span> حجم ووزن الخط</h2>
                <p class="lesson-subtitle">التحكم في حجم وسماكة النصوص</p>
                
                <h3>📐 font-size</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* قيم ثابتة */</span>
<span class="attr">font-size</span>: <span class="value">16px</span>;

<span class="comment">/* نسبية للعنصر الأب */</span>
<span class="attr">font-size</span>: <span class="value">1.5em</span>;

<span class="comment">/* نسبية للـ root (الأفضل) */</span>
<span class="attr">font-size</span>: <span class="value">1rem</span>;     <span class="comment">/* = 16px عادة */</span>
<span class="attr">font-size</span>: <span class="value">1.25rem</span>;  <span class="comment">/* = 20px */</span></pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدمي <code>rem</code> للخطوط لسهولة التحكم!</p>
                </div>

                <h3>💪 font-weight</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">font-weight</span>: <span class="value">normal</span>;    <span class="comment">/* 400 */</span>
<span class="attr">font-weight</span>: <span class="value">bold</span>;      <span class="comment">/* 700 */</span>
<span class="attr">font-weight</span>: <span class="value">300</span>;       <span class="comment">/* خفيف */</span>
<span class="attr">font-weight</span>: <span class="value">600</span>;       <span class="comment">/* شبه سميك */</span>
<span class="attr">font-weight</span>: <span class="value">900</span>;       <span class="comment">/* سميك جداً */</span></pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أوزان مختلفة</span>
                    <p style="font-weight:300;margin:5px 0;">font-weight: 300 (خفيف)</p>
                    <p style="font-weight:400;margin:5px 0;">font-weight: 400 (عادي)</p>
                    <p style="font-weight:600;margin:5px 0;">font-weight: 600 (شبه سميك)</p>
                    <p style="font-weight:700;margin:5px 0;">font-weight: 700 (سميك)</p>
                </div>
            </div>
        `
    },
    {
        title: "ارتفاع السطر والمسافات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↕️</span> ارتفاع السطر والمسافات</h2>
                <p class="lesson-subtitle">تحسين قابلية القراءة</p>
                
                <h3>📏 line-height</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">p</span> {
  <span class="attr">line-height</span>: <span class="value">1.6</span>;     <span class="comment">/* الأفضل للقراءة */</span>
  <span class="attr">line-height</span>: <span class="value">160%</span>;
  <span class="attr">line-height</span>: <span class="value">24px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة line-height</span>
                    <div style="display:flex;gap:20px;">
                        <div style="line-height:1.2;background:#f5f5f5;padding:10px;flex:1;">
                            <small>line-height: 1.2</small><br>
                            هذا نص للمقارنة بين ارتفاعات السطر المختلفة وتأثيرها على القراءة.
                        </div>
                        <div style="line-height:1.8;background:#f5f5f5;padding:10px;flex:1;">
                            <small>line-height: 1.8</small><br>
                            هذا نص للمقارنة بين ارتفاعات السطر المختلفة وتأثيرها على القراءة.
                        </div>
                    </div>
                </div>

                <h3>🔤 letter-spacing</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">h1</span> {
  <span class="attr">letter-spacing</span>: <span class="value">2px</span>;      <span class="comment">/* توسيع */</span>
  <span class="attr">letter-spacing</span>: <span class="value">-0.5px</span>;  <span class="comment">/* تقريب */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">تأثير letter-spacing</span>
                    <p style="letter-spacing:-1px;margin:5px 0;">letter-spacing: -1px</p>
                    <p style="letter-spacing:0;margin:5px 0;">letter-spacing: 0 (عادي)</p>
                    <p style="letter-spacing:3px;margin:5px 0;">letter-spacing: 3px</p>
                </div>
            </div>
        `
    },
    {
        title: "محاذاة وتنسيق النص",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↔️</span> محاذاة وتنسيق النص</h2>
                <p class="lesson-subtitle">التحكم في اتجاه ومظهر النصوص</p>
                
                <h3>📍 text-align</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">text-align</span>: <span class="value">right</span>;     <span class="comment">/* يمين (للعربية) */</span>
<span class="attr">text-align</span>: <span class="value">left</span>;      <span class="comment">/* يسار */</span>
<span class="attr">text-align</span>: <span class="value">center</span>;    <span class="comment">/* وسط */</span>
<span class="attr">text-align</span>: <span class="value">justify</span>;   <span class="comment">/* توزيع متساوي */</span></pre></div>
                </div>

                <h3>🎨 text-decoration</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">text-decoration</span>: <span class="value">none</span>;           <span class="comment">/* بدون */</span>
<span class="attr">text-decoration</span>: <span class="value">underline</span>;      <span class="comment">/* خط تحت */</span>
<span class="attr">text-decoration</span>: <span class="value">line-through</span>;   <span class="comment">/* خط في الوسط */</span></pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة text-decoration</span>
                    <p style="text-decoration:none;margin:5px 0;">none - بدون زخرفة</p>
                    <p style="text-decoration:underline;margin:5px 0;">underline - خط تحت</p>
                    <p style="text-decoration:line-through;margin:5px 0;">line-through - مشطوب</p>
                </div>

                <h3>🔠 text-transform</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="attr">text-transform</span>: <span class="value">uppercase</span>;    <span class="comment">/* HELLO */</span>
<span class="attr">text-transform</span>: <span class="value">lowercase</span>;    <span class="comment">/* hello */</span>
<span class="attr">text-transform</span>: <span class="value">capitalize</span>;   <span class="comment">/* Hello World */</span></pre></div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Typography</h2>
                <p class="lesson-subtitle">صممي نص احترافي!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر النصوص</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.article {
  font-family: 'Tajawal', sans-serif;
  max-width: 400px;
  margin: 0 auto;
  text-align: right;
}

.article h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 15px;
  line-height: 1.3;
}

.article p {
  font-size: 16px;
  color: #4a4a68;
  line-height: 1.8;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="article">
                                    <h1>عنوان المقال الرئيسي</h1>
                                    <p>هذا نص تجريبي لعرض كيفية تنسيق النصوص باستخدام CSS. لاحظي كيف يؤثر ارتفاع السطر والخط على سهولة القراءة.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم الرابع - Typography!</p>
                </div>
            </div>
        `
    }
];
