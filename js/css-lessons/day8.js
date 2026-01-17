// ========================================
// اليوم الثامن: Flexbox المتقدم
// ========================================

const cssDay8Lessons = [
    {
        title: "flex-grow و flex-shrink",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📈</span> flex-grow و flex-shrink</h2>
                <p class="lesson-subtitle">التحكم في نمو وانكماش العناصر</p>
                
                <h3>📈 flex-grow</h3>
                <p>يحدد نسبة نمو العنصر لملء المساحة الفارغة:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.item</span> {
  <span class="attr">flex-grow</span>: <span class="value">1</span>;  <span class="comment">/* ينمو بنسبة 1 */</span>
}

<span class="tag">.item-double</span> {
  <span class="attr">flex-grow</span>: <span class="value">2</span>;  <span class="comment">/* ينمو ضعف الآخرين */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">flex-grow مختلفة</span>
                    <div style="display:flex;gap:10px;background:#f5f5f5;padding:10px;">
                        <div style="flex-grow:1;background:#667eea;color:#fff;padding:15px;text-align:center;">grow: 1</div>
                        <div style="flex-grow:2;background:#764ba2;color:#fff;padding:15px;text-align:center;">grow: 2</div>
                        <div style="flex-grow:1;background:#e74c3c;color:#fff;padding:15px;text-align:center;">grow: 1</div>
                    </div>
                </div>

                <h3>📉 flex-shrink</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">.item</span> {
  <span class="attr">flex-shrink</span>: <span class="value">1</span>;  <span class="comment">/* يتقلص عند الحاجة (افتراضي) */</span>
  <span class="attr">flex-shrink</span>: <span class="value">0</span>;  <span class="comment">/* لا يتقلص أبداً */</span>
}</pre></div>
                </div>

                <h3>📏 flex-basis</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">.item</span> {
  <span class="attr">flex-basis</span>: <span class="value">200px</span>;  <span class="comment">/* الحجم الأساسي */</span>
}</pre></div>
                </div>

                <h3>⚡ الاختصار flex</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.item</span> {
  <span class="attr">flex</span>: <span class="value">1</span>;           <span class="comment">/* grow: 1, shrink: 1, basis: 0 */</span>
  <span class="attr">flex</span>: <span class="value">1 1 200px</span>;   <span class="comment">/* grow shrink basis */</span>
}</pre></div>
                </div>
            </div>
        `
    },
    {
        title: "align-self و order",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎯</span> align-self و order</h2>
                <p class="lesson-subtitle">التحكم في عناصر فردية</p>
                
                <h3>🎯 align-self</h3>
                <p>تغيير محاذاة عنصر واحد:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">align-items</span>: <span class="value">flex-start</span>;
}

<span class="tag">.special</span> {
  <span class="attr">align-self</span>: <span class="value">center</span>;  <span class="comment">/* هذا فقط في الوسط */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">align-self مختلف</span>
                    <div style="display:flex;align-items:flex-start;gap:10px;background:#f5f5f5;padding:10px;height:100px;">
                        <div style="background:#667eea;color:#fff;padding:15px;">عادي</div>
                        <div style="align-self:center;background:#e74c3c;color:#fff;padding:15px;">center</div>
                        <div style="align-self:flex-end;background:#27ae60;color:#fff;padding:15px;">flex-end</div>
                    </div>
                </div>

                <h3>🔢 order</h3>
                <p>تغيير ترتيب العناصر بصرياً:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.item-1</span> { <span class="attr">order</span>: <span class="value">3</span>; }
<span class="tag">.item-2</span> { <span class="attr">order</span>: <span class="value">1</span>; }
<span class="tag">.item-3</span> { <span class="attr">order</span>: <span class="value">2</span>; }
<span class="comment">/* الترتيب المرئي: item-2, item-3, item-1 */</span></pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>القيمة الافتراضية لـ order هي 0. القيم السالبة ممكنة!</p>
                </div>
            </div>
        `
    },
    {
        title: "تخطيطات عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏗️</span> تخطيطات Flexbox العملية</h2>
                <p class="lesson-subtitle">أمثلة حقيقية</p>
                
                <h3>📱 Holy Grail Layout</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.layout</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">flex-direction</span>: <span class="value">column</span>;
  <span class="attr">min-height</span>: <span class="value">100vh</span>;
}

<span class="tag">main</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">flex</span>: <span class="value">1</span>;
}

<span class="tag">.sidebar</span> { <span class="attr">flex</span>: <span class="value">0 0 200px</span>; }
<span class="tag">.content</span> { <span class="attr">flex</span>: <span class="value">1</span>; }</pre></div>
                </div>

                <h3>📄 Sticky Footer</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">body</span> {
  <span class="attr">display</span>: <span class="value">flex</span>;
  <span class="attr">flex-direction</span>: <span class="value">column</span>;
  <span class="attr">min-height</span>: <span class="value">100vh</span>;
}

<span class="tag">main</span> {
  <span class="attr">flex</span>: <span class="value">1</span>;  <span class="comment">/* يملأ المساحة */</span>
}

<span class="tag">footer</span> {
  <span class="attr">flex-shrink</span>: <span class="value">0</span>;
}</pre></div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Flexbox المتقدم</h2>
                <p class="lesson-subtitle">صممي بطاقات متساوية!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر البطاقات</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.card {
  flex: 1 1 150px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.card-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.card h4 {
  margin: 0 0 5px;
  color: #333;
}

.card p {
  margin: 0;
  color: #666;
  flex: 1;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="cards-container">
                                    <div class="card">
                                        <span class="card-icon">🚀</span>
                                        <h4>سريع</h4>
                                        <p>أداء عالي</p>
                                    </div>
                                    <div class="card">
                                        <span class="card-icon">🔒</span>
                                        <h4>آمن</h4>
                                        <p>حماية متقدمة</p>
                                    </div>
                                    <div class="card">
                                        <span class="card-icon">💡</span>
                                        <h4>ذكي</h4>
                                        <p>تقنيات حديثة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم الثامن - Flexbox المتقدم!</p>
                </div>
            </div>
        `
    }
];
