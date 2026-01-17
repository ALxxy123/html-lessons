// ========================================
// اليوم الرابع عشر: CSS Variables + المشروع النهائي
// ========================================

const cssDay14Lessons = [
    {
        title: "CSS Variables",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎨</span> CSS Variables</h2>
                <p class="lesson-subtitle">متغيرات قابلة لإعادة الاستخدام</p>
                
                <h3>📝 تعريف المتغيرات</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">:root</span> {
  <span class="comment">/* تعريف المتغيرات في الجذر */</span>
  <span class="attr">--primary-color</span>: <span class="value">#667eea</span>;
  <span class="attr">--secondary-color</span>: <span class="value">#764ba2</span>;
  <span class="attr">--text-color</span>: <span class="value">#333333</span>;
  <span class="attr">--spacing</span>: <span class="value">20px</span>;
  <span class="attr">--border-radius</span>: <span class="value">12px</span>;
}</pre></div>
                </div>

                <h3>💡 استخدام المتغيرات</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.button</span> {
  <span class="attr">background</span>: <span class="value">var(--primary-color)</span>;
  <span class="attr">padding</span>: <span class="value">var(--spacing)</span>;
  <span class="attr">border-radius</span>: <span class="value">var(--border-radius)</span>;
}

<span class="tag">.card</span> {
  <span class="attr">color</span>: <span class="value">var(--text-color)</span>;
  <span class="attr">background</span>: <span class="value">linear-gradient(135deg, var(--primary-color), var(--secondary-color))</span>;
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>المتغيرات تسهّل تغيير الثيم بالكامل من مكان واحد!</p>
                </div>
            </div>
        `
    },
    {
        title: "Dark Mode",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🌙</span> الوضع الداكن</h2>
                <p class="lesson-subtitle">تبديل الألوان بسهولة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* الوضع الافتراضي (فاتح) */</span>
<span class="tag">:root</span> {
  <span class="attr">--bg-color</span>: <span class="value">#ffffff</span>;
  <span class="attr">--text-color</span>: <span class="value">#333333</span>;
  <span class="attr">--card-bg</span>: <span class="value">#f5f5f5</span>;
}

<span class="comment">/* الوضع الداكن */</span>
<span class="tag">[data-theme="dark"]</span> {
  <span class="attr">--bg-color</span>: <span class="value">#1a1a2e</span>;
  <span class="attr">--text-color</span>: <span class="value">#e0e0e0</span>;
  <span class="attr">--card-bg</span>: <span class="value">#16213e</span>;
}

<span class="tag">body</span> {
  <span class="attr">background</span>: <span class="value">var(--bg-color)</span>;
  <span class="attr">color</span>: <span class="value">var(--text-color)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة الوضعين</span>
                    <div style="display:flex;gap:15px;">
                        <div style="background:#fff;color:#333;padding:20px;border-radius:10px;flex:1;text-align:center;">
                            ☀️ فاتح
                        </div>
                        <div style="background:#1a1a2e;color:#e0e0e0;padding:20px;border-radius:10px;flex:1;text-align:center;">
                            🌙 داكن
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "أفضل الممارسات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✅</span> أفضل الممارسات</h2>
                <p class="lesson-subtitle">نصائح للكتابة الاحترافية</p>
                
                <h3>📁 تنظيم الملفات</h3>
                <div class="code-box">
                    <div class="code-header"><span>بنية المشروع</span></div>
                    <div class="code-content"><pre>css/
├── variables.css    <span class="comment">/* المتغيرات */</span>
├── reset.css        <span class="comment">/* إعادة التعيين */</span>
├── layout.css       <span class="comment">/* التخطيط */</span>
├── components.css   <span class="comment">/* المكونات */</span>
└── utilities.css    <span class="comment">/* الأدوات */</span></pre></div>
                </div>

                <h3>📝 تسمية الـ Classes</h3>
                <div class="code-box">
                    <div class="code-header"><span>BEM Methodology</span></div>
                    <div class="code-content"><pre><span class="comment">/* Block__Element--Modifier */</span>
<span class="tag">.card</span> { }
<span class="tag">.card__title</span> { }
<span class="tag">.card__button</span> { }
<span class="tag">.card__button--primary</span> { }
<span class="tag">.card--featured</span> { }</pre></div>
                </div>

                <h3>💡 نصائح عامة</h3>
                <ul>
                    <li>استخدمي <code>box-sizing: border-box</code> دائماً</li>
                    <li>استخدمي <code>rem</code> للخطوط</li>
                    <li>Mobile First في التصميم المتجاوب</li>
                    <li>استخدمي المتغيرات للألوان والمسافات</li>
                    <li>اختبري على متصفحات مختلفة</li>
                </ul>
            </div>
        `
    },
    {
        title: "المشروع النهائي",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏆</span> المشروع النهائي</h2>
                <p class="lesson-subtitle">طبّقي كل ما تعلمتِه!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ مشروع التخرج</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --bg: #f8f9fa;
  --text: #333;
  --radius: 15px;
}

.profile-card {
  background: white;
  border-radius: var(--radius);
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  max-width: 280px;
  margin: 20px auto;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
}

.avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.profile-card h3 {
  margin: 0 0 5px;
  color: var(--text);
}

.profile-card p {
  margin: 0 0 20px;
  color: #666;
}

.profile-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.profile-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(102,126,234,0.4);
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="profile-card">
                                    <div class="avatar">👩‍💻</div>
                                    <h3>سارة أحمد</h3>
                                    <p>مطورة واجهات</p>
                                    <button class="profile-btn">تابعني</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box" style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;">
                    <span class="icon">🎉</span>
                    <p><strong>تهانينا!</strong> أكملتِ دورة CSS كاملة - من الصفر للاحتراف!</p>
                </div>
            </div>
        `
    }
];
