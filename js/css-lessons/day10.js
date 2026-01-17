// ========================================
// اليوم العاشر: CSS Grid المتقدم
// ========================================

const cssDay10Lessons = [
    {
        title: "grid-column و grid-row",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📐</span> توسيع العناصر</h2>
                <p class="lesson-subtitle">جعل العناصر تمتد على عدة خلايا</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.item</span> {
  <span class="comment">/* يمتد من العمود 1 إلى 3 */</span>
  <span class="attr">grid-column</span>: <span class="value">1 / 3</span>;
  
  <span class="comment">/* أو باستخدام span */</span>
  <span class="attr">grid-column</span>: <span class="value">span 2</span>;
  
  <span class="comment">/* يمتد على صفين */</span>
  <span class="attr">grid-row</span>: <span class="value">span 2</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">عناصر ممتدة</span>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;background:#f5f5f5;padding:10px;">
                        <div style="grid-column:span 2;background:#667eea;color:#fff;padding:20px;text-align:center;border-radius:8px;">span 2</div>
                        <div style="background:#764ba2;color:#fff;padding:20px;text-align:center;border-radius:8px;">1</div>
                        <div style="background:#e74c3c;color:#fff;padding:20px;text-align:center;border-radius:8px;">2</div>
                        <div style="background:#27ae60;color:#fff;padding:20px;text-align:center;border-radius:8px;">3</div>
                        <div style="background:#f39c12;color:#fff;padding:20px;text-align:center;border-radius:8px;">4</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "grid-template-areas",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🗺️</span> تسمية المناطق</h2>
                <p class="lesson-subtitle">طريقة بصرية لتحديد التخطيط</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="value">200px 1fr</span>;
  <span class="attr">grid-template-rows</span>: <span class="value">auto 1fr auto</span>;
  <span class="attr">grid-template-areas</span>:
    <span class="value">"header header"</span>
    <span class="value">"sidebar main"</span>
    <span class="value">"footer footer"</span>;
}

<span class="tag">.header</span> { <span class="attr">grid-area</span>: <span class="value">header</span>; }
<span class="tag">.sidebar</span> { <span class="attr">grid-area</span>: <span class="value">sidebar</span>; }
<span class="tag">.main</span> { <span class="attr">grid-area</span>: <span class="value">main</span>; }
<span class="tag">.footer</span> { <span class="attr">grid-area</span>: <span class="value">footer</span>; }</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">تخطيط بـ grid-template-areas</span>
                    <div style="display:grid;grid-template-columns:80px 1fr;grid-template-rows:40px 80px 30px;gap:5px;grid-template-areas:'header header' 'sidebar main' 'footer footer';">
                        <div style="grid-area:header;background:#667eea;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:5px;">Header</div>
                        <div style="grid-area:sidebar;background:#764ba2;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:5px;">Sidebar</div>
                        <div style="grid-area:main;background:#e74c3c;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:5px;">Main</div>
                        <div style="grid-area:footer;background:#27ae60;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:5px;">Footer</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "auto-fit و auto-fill",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔄</span> شبكات متجاوبة تلقائياً</h2>
                <p class="lesson-subtitle">أعمدة تتكيف مع المساحة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.container</span> {
  <span class="attr">display</span>: <span class="value">grid</span>;
  
  <span class="comment">/* auto-fit: يمدد العناصر الموجودة */</span>
  <span class="attr">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(200px, 1fr))</span>;
  
  <span class="comment">/* auto-fill: يحافظ على المساحات الفارغة */</span>
  <span class="attr">grid-template-columns</span>: <span class="value">repeat(auto-fill, minmax(200px, 1fr))</span>;
  
  <span class="attr">gap</span>: <span class="value">20px</span>;
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><code>minmax(200px, 1fr)</code> يعني: الحد الأدنى 200px، والحد الأقصى حصة متساوية.</p>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Grid المتقدم</h2>
                <p class="lesson-subtitle">صممي تخطيط Dashboard!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Dashboard</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 15px;
}

.widget {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  text-align: center;
}

.widget.large {
  grid-column: span 2;
}

.widget h4 {
  margin: 0 0 10px;
  color: #333;
}

.widget .number {
  font-size: 32px;
  font-weight: bold;
  color: #667eea;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="dashboard">
                                    <div class="widget">
                                        <h4>المستخدمين</h4>
                                        <div class="number">1,234</div>
                                    </div>
                                    <div class="widget">
                                        <h4>الطلبات</h4>
                                        <div class="number">567</div>
                                    </div>
                                    <div class="widget">
                                        <h4>الإيرادات</h4>
                                        <div class="number">$89K</div>
                                    </div>
                                    <div class="widget large">
                                        <h4>📊 الرسم البياني</h4>
                                    </div>
                                    <div class="widget">
                                        <h4>الزوار</h4>
                                        <div class="number">5.2K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم العاشر - CSS Grid المتقدم!</p>
                </div>
            </div>
        `
    }
];
