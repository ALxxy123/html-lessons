// ========================================
// اليوم التاسع: CSS Grid الأساسي
// ========================================

const cssDay9Lessons = [
    {
        title: "مقدمة Grid",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔲</span> ما هو CSS Grid؟</h2>
                <p class="lesson-subtitle">نظام تخطيط ثنائي البعد</p>
                
                <p><strong>Grid</strong> هو نظام تخطيط ثنائي البعد (صفوف وأعمدة معاً).</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
}</pre></div>
                </div>

                <h3>📊 Flexbox vs Grid</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>Flexbox</th><th>Grid</th></tr>
                        <tr><td>أحادي البعد (صف أو عمود)</td><td>ثنائي البعد (صفوف وأعمدة)</td></tr>
                        <tr><td>للمكونات الصغيرة</td><td>للتخطيطات الكبيرة</td></tr>
                        <tr><td>المحتوى يحدد الحجم</td><td>الشبكة تحدد الحجم</td></tr>
                    </table>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدمي Grid للتخطيط العام، وFlexbox للمكونات الداخلية.</p>
                </div>
            </div>
        `
    },
    {
        title: "الأعمدة والصفوف",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📏</span> تحديد الأعمدة والصفوف</h2>
                <p class="lesson-subtitle">بناء الشبكة</p>
                
                <h3>📐 grid-template-columns</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
  
  <span class="comment">/* 3 أعمدة ثابتة */</span>
  <span class="attr">grid-template-columns</span>: <span class="value">200px 200px 200px</span>;
  
  <span class="comment">/* 3 أعمدة متساوية بـ fr */</span>
  <span class="attr">grid-template-columns</span>: <span class="value">1fr 1fr 1fr</span>;
  
  <span class="comment">/* باستخدام repeat */</span>
  <span class="attr">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>;
}</pre></div>
                </div>

                <h3>🔢 وحدة fr (fraction)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="comment">/* العمود الأوسط ضعف الآخرين */</span>
<span class="attr">grid-template-columns</span>: <span class="value">1fr 2fr 1fr</span>;</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">شبكة 3 أعمدة</span>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;background:#f5f5f5;padding:10px;">
                        <div style="background:#667eea;color:#fff;padding:20px;text-align:center;">1</div>
                        <div style="background:#764ba2;color:#fff;padding:20px;text-align:center;">2</div>
                        <div style="background:#e74c3c;color:#fff;padding:20px;text-align:center;">3</div>
                        <div style="background:#27ae60;color:#fff;padding:20px;text-align:center;">4</div>
                        <div style="background:#f39c12;color:#fff;padding:20px;text-align:center;">5</div>
                        <div style="background:#3498db;color:#fff;padding:20px;text-align:center;">6</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "gap",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↔️</span> المسافات في Grid</h2>
                <p class="lesson-subtitle">التحكم في المسافات بين العناصر</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>;
  
  <span class="attr">gap</span>: <span class="value">20px</span>;              <span class="comment">/* جميع الاتجاهات */</span>
  <span class="attr">gap</span>: <span class="value">20px 10px</span>;         <span class="comment">/* row-gap | column-gap */</span>
  
  <span class="attr">row-gap</span>: <span class="value">20px</span>;
  <span class="attr">column-gap</span>: <span class="value">10px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">gap: 15px</span>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;background:#f5f5f5;padding:15px;">
                        <div style="background:#667eea;color:#fff;padding:30px;text-align:center;border-radius:8px;">1</div>
                        <div style="background:#667eea;color:#fff;padding:30px;text-align:center;border-radius:8px;">2</div>
                        <div style="background:#667eea;color:#fff;padding:30px;text-align:center;border-radius:8px;">3</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة CSS Grid</h2>
                <p class="lesson-subtitle">صممي معرض صور!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Grid</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery-item {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 40px 20px;
  text-align: center;
  color: white;
  border-radius: 10px;
  font-size: 24px;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="gallery">
                                    <div class="gallery-item">🖼️</div>
                                    <div class="gallery-item">🎨</div>
                                    <div class="gallery-item">📷</div>
                                    <div class="gallery-item">🌅</div>
                                    <div class="gallery-item">🌆</div>
                                    <div class="gallery-item">🌉</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>ممتاز! أكملتِ اليوم التاسع - CSS Grid الأساسي!</p>
                </div>
            </div>
        `
    }
];
