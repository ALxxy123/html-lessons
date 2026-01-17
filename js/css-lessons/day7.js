// ========================================
// اليوم السابع: Flexbox الأساسي
// ========================================

const cssDay7Lessons = [
    {
        title: "مقدمة Flexbox",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📦</span> ما هو Flexbox؟</h2>
                <p class="lesson-subtitle">نظام تخطيط مرن وقوي</p>
                
                <p><strong>Flexbox</strong> هو نظام تخطيط أحادي البعد يجعل توزيع العناصر سهلاً جداً.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="comment">/* الآن جميع الأبناء أصبحوا flex items */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">بدون flex vs مع flex</span>
                    <div style="display:flex;gap:20px;">
                        <div>
                            <small>بدون flex:</small>
                            <div style="background:#f5f5f5;padding:10px;">
                                <div style="background:#667eea;color:#fff;padding:10px;margin:5px 0;">1</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;margin:5px 0;">2</div>
                                <div style="background:#e74c3c;color:#fff;padding:10px;margin:5px 0;">3</div>
                            </div>
                        </div>
                        <div>
                            <small>مع flex:</small>
                            <div style="display:flex;background:#f5f5f5;padding:10px;gap:5px;">
                                <div style="background:#667eea;color:#fff;padding:10px;">1</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;">2</div>
                                <div style="background:#e74c3c;color:#fff;padding:10px;">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "flex-direction",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">➡️</span> flex-direction</h2>
                <p class="lesson-subtitle">تحديد اتجاه العناصر</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  
  <span class="attr">flex-direction</span>: <span class="value">row</span>;            <span class="comment">/* ← افتراضي */</span>
  <span class="attr">flex-direction</span>: <span class="value">row-reverse</span>;    <span class="comment">/* → */</span>
  <span class="attr">flex-direction</span>: <span class="value">column</span>;         <span class="comment">/* ↓ */</span>
  <span class="attr">flex-direction</span>: <span class="value">column-reverse</span>; <span class="comment">/* ↑ */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">الاتجاهات المختلفة</span>
                    <div style="display:flex;gap:20px;flex-wrap:wrap;">
                        <div>
                            <small>row:</small>
                            <div style="display:flex;flex-direction:row;background:#f5f5f5;padding:5px;gap:5px;">
                                <div style="background:#667eea;color:#fff;padding:10px;">1</div>
                                <div style="background:#667eea;color:#fff;padding:10px;">2</div>
                                <div style="background:#667eea;color:#fff;padding:10px;">3</div>
                            </div>
                        </div>
                        <div>
                            <small>column:</small>
                            <div style="display:flex;flex-direction:column;background:#f5f5f5;padding:5px;gap:5px;">
                                <div style="background:#764ba2;color:#fff;padding:10px;">1</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;">2</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "justify-content",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↔️</span> justify-content</h2>
                <p class="lesson-subtitle">التوزيع على المحور الرئيسي</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  
  <span class="attr">justify-content</span>: <span class="value">flex-start</span>;    <span class="comment">/* البداية */</span>
  <span class="attr">justify-content</span>: <span class="value">flex-end</span>;      <span class="comment">/* النهاية */</span>
  <span class="attr">justify-content</span>: <span class="value">center</span>;        <span class="comment">/* الوسط */</span>
  <span class="attr">justify-content</span>: <span class="value">space-between</span>; <span class="comment">/* مسافات بين */</span>
  <span class="attr">justify-content</span>: <span class="value">space-around</span>;  <span class="comment">/* مسافات حول */</span>
  <span class="attr">justify-content</span>: <span class="value">space-evenly</span>;  <span class="comment">/* متساوية */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة justify-content</span>
                    <div style="display:flex;flex-direction:column;gap:10px;">
                        <div>
                            <small>space-between:</small>
                            <div style="display:flex;justify-content:space-between;background:#f5f5f5;padding:10px;">
                                <div style="background:#667eea;color:#fff;padding:10px;">1</div>
                                <div style="background:#667eea;color:#fff;padding:10px;">2</div>
                                <div style="background:#667eea;color:#fff;padding:10px;">3</div>
                            </div>
                        </div>
                        <div>
                            <small>center:</small>
                            <div style="display:flex;justify-content:center;background:#f5f5f5;padding:10px;gap:10px;">
                                <div style="background:#764ba2;color:#fff;padding:10px;">1</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;">2</div>
                                <div style="background:#764ba2;color:#fff;padding:10px;">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "align-items",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↕️</span> align-items</h2>
                <p class="lesson-subtitle">التوزيع على المحور العمودي</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">height</span>: <span class="value">200px</span>;
  
  <span class="attr">align-items</span>: <span class="value">stretch</span>;     <span class="comment">/* تمدد (افتراضي) */</span>
  <span class="attr">align-items</span>: <span class="value">flex-start</span>;  <span class="comment">/* أعلى */</span>
  <span class="attr">align-items</span>: <span class="value">flex-end</span>;    <span class="comment">/* أسفل */</span>
  <span class="attr">align-items</span>: <span class="value">center</span>;      <span class="comment">/* وسط */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة align-items</span>
                    <div style="display:flex;gap:20px;">
                        <div>
                            <small>flex-start:</small>
                            <div style="display:flex;align-items:flex-start;background:#f5f5f5;padding:10px;height:100px;gap:5px;">
                                <div style="background:#667eea;color:#fff;padding:10px;">1</div>
                                <div style="background:#667eea;color:#fff;padding:20px;">2</div>
                            </div>
                        </div>
                        <div>
                            <small>center:</small>
                            <div style="display:flex;align-items:center;background:#f5f5f5;padding:10px;height:100px;gap:5px;">
                                <div style="background:#764ba2;color:#fff;padding:10px;">1</div>
                                <div style="background:#764ba2;color:#fff;padding:20px;">2</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>🎯 التوسيط المثالي</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">justify-content</span>: <span class="value">center</span>;
  <span class="attr">align-items</span>: <span class="value">center</span>;
  <span class="attr">height</span>: <span class="value">100vh</span>;
}</pre></div>
                </div>
            </div>
        `
    },
    {
        title: "gap و flex-wrap",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📏</span> gap و flex-wrap</h2>
                <p class="lesson-subtitle">المسافات والالتفاف</p>
                
                <h3>📐 gap</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">gap</span>: <span class="value">20px</span>;              <span class="comment">/* جميع الاتجاهات */</span>
  <span class="attr">gap</span>: <span class="value">20px 10px</span>;         <span class="comment">/* row-gap | column-gap */</span>
}</pre></div>
                </div>

                <h3>🔄 flex-wrap</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">flex-wrap</span>: <span class="value">nowrap</span>;   <span class="comment">/* سطر واحد (افتراضي) */</span>
  <span class="attr">flex-wrap</span>: <span class="value">wrap</span>;     <span class="comment">/* التفاف لأسطر متعددة */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">flex-wrap: wrap</span>
                    <div style="display:flex;flex-wrap:wrap;gap:10px;background:#f5f5f5;padding:10px;max-width:250px;">
                        <div style="background:#667eea;color:#fff;padding:15px 25px;">1</div>
                        <div style="background:#764ba2;color:#fff;padding:15px 25px;">2</div>
                        <div style="background:#e74c3c;color:#fff;padding:15px 25px;">3</div>
                        <div style="background:#27ae60;color:#fff;padding:15px 25px;">4</div>
                        <div style="background:#f39c12;color:#fff;padding:15px 25px;">5</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Flexbox</h2>
                <p class="lesson-subtitle">صممي تخطيط مرن!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Flexbox</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 15px 25px;
  border-radius: 12px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
}

.nav-links a:hover {
  color: white;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <nav class="navbar">
                                    <div class="logo">🚀 Logo</div>
                                    <ul class="nav-links">
                                        <li><a href="#">الرئيسية</a></li>
                                        <li><a href="#">المنتجات</a></li>
                                        <li><a href="#">اتصل بنا</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>ممتاز! أكملتِ اليوم السابع - Flexbox الأساسي!</p>
                </div>
            </div>
        `
    }
];
