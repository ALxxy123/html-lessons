// ========================================
// اليوم السادس: Position والترتيب
// ========================================

const cssDay6Lessons = [
    {
        title: "display",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📦</span> خاصية display</h2>
                <p class="lesson-subtitle">تحديد كيفية عرض العناصر</p>
                
                <h3>🔲 block</h3>
                <p>العنصر يأخذ سطر كامل:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">div, p, h1, section</span> { <span class="attr">display</span>: <span class="value">block</span>; }</pre></div>
                </div>

                <h3>➡️ inline</h3>
                <p>العنصر بجانب العناصر الأخرى:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">span, a, strong</span> { <span class="attr">display</span>: <span class="value">inline</span>; }</pre></div>
                </div>

                <h3>📦 inline-block</h3>
                <p>مثل inline لكن يقبل width/height:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.btn</span> {
  <span class="attr">display</span>: <span class="value">inline-block</span>;
  <span class="attr">width</span>: <span class="value">100px</span>;
  <span class="attr">height</span>: <span class="value">40px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة display</span>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
                        <div style="background:#667eea;color:#fff;padding:10px;margin-bottom:5px;">block - سطر كامل</div>
                        <span style="background:#764ba2;color:#fff;padding:5px;">inline</span>
                        <span style="background:#e74c3c;color:#fff;padding:5px;">inline</span>
                        <span style="background:#27ae60;color:#fff;padding:5px;">inline</span>
                    </div>
                </div>

                <h3>🚫 none</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">.hidden</span> { <span class="attr">display</span>: <span class="value">none</span>; }  <span class="comment">/* يختفي تماماً */</span></pre></div>
                </div>
            </div>
        `
    },
    {
        title: "position: relative & absolute",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📍</span> Position: relative & absolute</h2>
                <p class="lesson-subtitle">تحريك العناصر من مكانها</p>
                
                <h3>🔄 position: relative</h3>
                <p>يتحرك نسبة لموقعه الأصلي:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="attr">position</span>: <span class="value">relative</span>;
  <span class="attr">top</span>: <span class="value">20px</span>;
  <span class="attr">left</span>: <span class="value">30px</span>;
}</pre></div>
                </div>

                <h3>📌 position: absolute</h3>
                <p>يتموضع نسبة لأقرب أب له position:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.parent</span> {
  <span class="attr">position</span>: <span class="value">relative</span>;  <span class="comment">/* مهم! */</span>
}

<span class="tag">.badge</span> {
  <span class="attr">position</span>: <span class="value">absolute</span>;
  <span class="attr">top</span>: <span class="value">10px</span>;
  <span class="attr">right</span>: <span class="value">10px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">Badge على بطاقة</span>
                    <div style="position:relative;background:#fff;padding:30px;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.1);max-width:250px;">
                        <span style="position:absolute;top:-10px;right:10px;background:#e74c3c;color:#fff;padding:5px 15px;border-radius:20px;font-size:12px;">جديد</span>
                        <h4 style="margin:0 0 10px;">منتج رائع</h4>
                        <p style="margin:0;color:#666;">وصف المنتج هنا</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "position: fixed & sticky",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📎</span> Position: fixed & sticky</h2>
                <p class="lesson-subtitle">عناصر ثابتة أثناء التمرير</p>
                
                <h3>🔒 position: fixed</h3>
                <p>يبقى ثابتاً حتى عند التمرير:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.navbar</span> {
  <span class="attr">position</span>: <span class="value">fixed</span>;
  <span class="attr">top</span>: <span class="value">0</span>;
  <span class="attr">left</span>: <span class="value">0</span>;
  <span class="attr">right</span>: <span class="value">0</span>;
  <span class="attr">background</span>: <span class="value">white</span>;
}

<span class="tag">.back-to-top</span> {
  <span class="attr">position</span>: <span class="value">fixed</span>;
  <span class="attr">bottom</span>: <span class="value">20px</span>;
  <span class="attr">right</span>: <span class="value">20px</span>;
}</pre></div>
                </div>

                <h3>📌 position: sticky</h3>
                <p>يلتصق عند الوصول لنقطة معينة:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.header</span> {
  <span class="attr">position</span>: <span class="value">sticky</span>;
  <span class="attr">top</span>: <span class="value">0</span>;
  <span class="comment">/* يتصرف كـ relative ثم يصبح fixed */</span>
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><code>sticky</code> رائع للـ Headers والـ Sidebars!</p>
                </div>
            </div>
        `
    },
    {
        title: "z-index",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📚</span> z-index (الطبقات)</h2>
                <p class="lesson-subtitle">التحكم في ترتيب العناصر فوق بعضها</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.back</span> { <span class="attr">z-index</span>: <span class="value">1</span>; }
<span class="tag">.middle</span> { <span class="attr">z-index</span>: <span class="value">10</span>; }
<span class="tag">.front</span> { <span class="attr">z-index</span>: <span class="value">100</span>; }

<span class="comment">/* القيم السالبة ممكنة */</span>
<span class="tag">.behind</span> { <span class="attr">z-index</span>: <span class="value">-1</span>; }</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">طبقات متراكبة</span>
                    <div style="position:relative;height:150px;">
                        <div style="position:absolute;width:100px;height:100px;background:#667eea;top:0;right:0;z-index:1;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:8px;">z: 1</div>
                        <div style="position:absolute;width:100px;height:100px;background:#764ba2;top:30px;right:50px;z-index:10;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:8px;">z: 10</div>
                        <div style="position:absolute;width:100px;height:100px;background:#e74c3c;top:60px;right:100px;z-index:100;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:8px;">z: 100</div>
                    </div>
                </div>

                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p><code>z-index</code> يعمل فقط مع العناصر التي لها <code>position</code> (غير static)</p>
                </div>
            </div>
        `
    },
    {
        title: "توسيط العناصر",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎯</span> توسيط العناصر</h2>
                <p class="lesson-subtitle">طرق مختلفة للتوسيط</p>
                
                <h3>➡️ توسيط أفقي بـ margin</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="attr">width</span>: <span class="value">300px</span>;
  <span class="attr">margin</span>: <span class="value">0 auto</span>;
}</pre></div>
                </div>

                <h3>🎯 توسيط كامل بـ position</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.centered</span> {
  <span class="attr">position</span>: <span class="value">absolute</span>;
  <span class="attr">top</span>: <span class="value">50%</span>;
  <span class="attr">left</span>: <span class="value">50%</span>;
  <span class="attr">transform</span>: <span class="value">translate(-50%, -50%)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">عنصر في المنتصف تماماً</span>
                    <div style="position:relative;height:150px;background:#f5f5f5;border-radius:8px;">
                        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#667eea;color:#fff;padding:20px;border-radius:8px;">
                            في المنتصف!
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Position</h2>
                <p class="lesson-subtitle">جربي تحريك العناصر!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Position</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.card-container {
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  max-width: 280px;
  margin: 20px auto;
}

.sale-badge {
  position: absolute;
  top: -10px;
  left: -10px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
}

.card-container h3 {
  margin: 0 0 10px;
  color: #333;
}

.card-container p {
  margin: 0;
  color: #666;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="card-container">
                                    <span class="sale-badge">خصم 50%</span>
                                    <h3>منتج مميز</h3>
                                    <p>وصف رائع للمنتج</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم السادس - Position!</p>
                </div>
            </div>
        `
    }
];
