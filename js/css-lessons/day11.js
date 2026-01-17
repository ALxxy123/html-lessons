// ========================================
// اليوم الحادي عشر: Responsive Design
// ========================================

const cssDay11Lessons = [
    {
        title: "مقدمة Responsive",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📱</span> التصميم المتجاوب</h2>
                <p class="lesson-subtitle">مواقع تعمل على جميع الأجهزة</p>
                
                <p><strong>Responsive Design</strong> يعني تصميم واحد يتكيف تلقائياً مع حجم الشاشة.</p>
                
                <h3>📐 viewport meta tag</h3>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre></div>
                </div>

                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>بدون هذا العنصر، المواقع لن تظهر بشكل صحيح على الموبايل!</p>
                </div>

                <h3>📏 الوحدات المتجاوبة</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>الوحدة</th><th>الوصف</th></tr>
                        <tr><td><code>%</code></td><td>نسبة من العنصر الأب</td></tr>
                        <tr><td><code>vw</code></td><td>نسبة من عرض الشاشة</td></tr>
                        <tr><td><code>vh</code></td><td>نسبة من ارتفاع الشاشة</td></tr>
                        <tr><td><code>rem</code></td><td>نسبة من حجم خط الـ root</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "Media Queries",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎛️</span> Media Queries</h2>
                <p class="lesson-subtitle">تطبيق أنماط حسب حجم الشاشة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* التنسيق الأساسي (Mobile First) */</span>
<span class="tag">.container</span> {
  <span class="attr">padding</span>: <span class="value">10px</span>;
}

<span class="comment">/* للشاشات المتوسطة (Tablet) */</span>
<span class="tag">@media</span> (<span class="attr">min-width</span>: <span class="value">768px</span>) {
  <span class="tag">.container</span> {
    <span class="attr">padding</span>: <span class="value">20px</span>;
  }
}

<span class="comment">/* للشاشات الكبيرة (Desktop) */</span>
<span class="tag">@media</span> (<span class="attr">min-width</span>: <span class="value">1024px</span>) {
  <span class="tag">.container</span> {
    <span class="attr">padding</span>: <span class="value">40px</span>;
    <span class="attr">max-width</span>: <span class="value">1200px</span>;
    <span class="attr">margin</span>: <span class="value">0 auto</span>;
  }
}</pre></div>
                </div>

                <h3>📊 Breakpoints الشائعة</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>الجهاز</th><th>العرض</th></tr>
                        <tr><td>Mobile</td><td>&lt; 768px</td></tr>
                        <tr><td>Tablet</td><td>768px - 1023px</td></tr>
                        <tr><td>Desktop</td><td>≥ 1024px</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "تخطيطات متجاوبة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔄</span> تخطيطات متجاوبة</h2>
                <p class="lesson-subtitle">Grid و Flexbox للتجاوب</p>
                
                <h3>📱 Card Layout متجاوب</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.cards</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(280px, 1fr))</span>;
  <span class="attr">gap</span>: <span class="value">20px</span>;
}</pre></div>
                </div>

                <h3>📱 Navigation متجاوب</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.nav</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">flex-direction</span>: <span class="value">column</span>;
}

<span class="tag">@media</span> (<span class="attr">min-width</span>: <span class="value">768px</span>) {
  <span class="tag">.nav</span> {
    <span class="attr">flex-direction</span>: <span class="value">row</span>;
    <span class="attr">justify-content</span>: <span class="value">space-between</span>;
  }
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدمي <code>auto-fit</code> مع <code>minmax</code> للحصول على تجاوب تلقائي!</p>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Responsive</h2>
                <p class="lesson-subtitle">صممي بطاقات متجاوبة!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Responsive</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.responsive-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.r-card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 25px 15px;
  border-radius: 12px;
  text-align: center;
  color: white;
}

.r-card .icon {
  font-size: 28px;
  margin-bottom: 10px;
}

.r-card h4 {
  margin: 0;
  font-size: 14px;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="responsive-cards">
                                    <div class="r-card"><div class="icon">🛒</div><h4>متجر</h4></div>
                                    <div class="r-card"><div class="icon">❤️</div><h4>مفضلة</h4></div>
                                    <div class="r-card"><div class="icon">👤</div><h4>حسابي</h4></div>
                                    <div class="r-card"><div class="icon">⚙️</div><h4>إعدادات</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>ممتاز! أكملتِ اليوم الحادي عشر - Responsive Design!</p>
                </div>
            </div>
        `
    }
];
