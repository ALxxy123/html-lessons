// ========================================
// اليوم الثالث: Box Model والمسافات
// ========================================

const cssDay3Lessons = [
    {
        title: "فهم Box Model",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📦</span> فهم Box Model</h2>
                <p class="lesson-subtitle">كل عنصر في HTML هو "صندوق" متعدد الطبقات</p>
                
                <h3>🎁 طبقات الصندوق</h3>
                <p>كل عنصر يتكون من 4 طبقات:</p>
                
                <div class="box-model-visual">
                    <div style="background:#f8d7da;padding:30px;border-radius:12px;text-align:center;">
                        <span style="color:#721c24;font-weight:bold;">MARGIN</span>
                        <div style="background:#d4edda;padding:25px;border-radius:8px;margin-top:10px;">
                            <span style="color:#155724;font-weight:bold;">BORDER</span>
                            <div style="background:#cce5ff;padding:20px;border-radius:6px;margin-top:10px;">
                                <span style="color:#004085;font-weight:bold;">PADDING</span>
                                <div style="background:#fff3cd;padding:15px;border-radius:4px;margin-top:10px;">
                                    <span style="color:#856404;font-weight:bold;">CONTENT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="elements-table">
                    <table>
                        <tr>
                            <th>الطبقة</th>
                            <th>الوصف</th>
                        </tr>
                        <tr>
                            <td><code>Content</code></td>
                            <td>المحتوى الفعلي (نص، صورة، إلخ)</td>
                        </tr>
                        <tr>
                            <td><code>Padding</code></td>
                            <td>الفراغ الداخلي (بين المحتوى والحدود)</td>
                        </tr>
                        <tr>
                            <td><code>Border</code></td>
                            <td>الحدود حول العنصر</td>
                        </tr>
                        <tr>
                            <td><code>Margin</code></td>
                            <td>الفراغ الخارجي (بين العنصر والآخرين)</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "box-sizing",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📐</span> خاصية box-sizing</h2>
                <p class="lesson-subtitle">كيفية حساب عرض وارتفاع العنصر</p>
                
                <h3>❌ content-box (الافتراضي)</h3>
                <p>العرض = المحتوى فقط، الـ padding والـ border تُضاف:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="attr">width</span>: <span class="value">200px</span>;
  <span class="attr">padding</span>: <span class="value">20px</span>;
  <span class="attr">border</span>: <span class="value">5px solid black</span>;
  <span class="comment">/* العرض الفعلي = 200 + 40 + 10 = 250px */</span>
}</pre></div>
                </div>

                <h3>✅ border-box (الأفضل) ⭐</h3>
                <p>العرض يشمل كل شيء:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">*</span> {
  <span class="attr">box-sizing</span>: <span class="value">border-box</span>;
}

<span class="tag">.box</span> {
  <span class="attr">width</span>: <span class="value">200px</span>;
  <span class="attr">padding</span>: <span class="value">20px</span>;
  <span class="attr">border</span>: <span class="value">5px solid black</span>;
  <span class="comment">/* العرض الفعلي = 200px تماماً */</span>
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>دائماً أضيفي <code>box-sizing: border-box</code> لجميع العناصر في بداية ملف CSS!</p>
                </div>
            </div>
        `
    },
    {
        title: "Padding",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔲</span> Padding (الفراغ الداخلي)</h2>
                <p class="lesson-subtitle">المسافة بين المحتوى والحدود</p>
                
                <h3>📝 طرق الكتابة</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="comment">/* جميع الجهات */</span>
  <span class="attr">padding</span>: <span class="value">20px</span>;
  
  <span class="comment">/* عمودي | أفقي */</span>
  <span class="attr">padding</span>: <span class="value">10px 20px</span>;
  
  <span class="comment">/* أعلى | يمين | أسفل | يسار */</span>
  <span class="attr">padding</span>: <span class="value">10px 20px 15px 25px</span>;
  
  <span class="comment">/* جهة محددة */</span>
  <span class="attr">padding-top</span>: <span class="value">10px</span>;
  <span class="attr">padding-right</span>: <span class="value">20px</span>;
  <span class="attr">padding-bottom</span>: <span class="value">15px</span>;
  <span class="attr">padding-left</span>: <span class="value">25px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة Padding</span>
                    <div style="display:flex;gap:15px;flex-wrap:wrap;">
                        <div style="background:#667eea;color:#fff;padding:10px;">padding: 10px</div>
                        <div style="background:#667eea;color:#fff;padding:20px;">padding: 20px</div>
                        <div style="background:#667eea;color:#fff;padding:30px;">padding: 30px</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Margin",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">↔️</span> Margin (الفراغ الخارجي)</h2>
                <p class="lesson-subtitle">المسافة بين العنصر والعناصر الأخرى</p>
                
                <h3>📝 طرق الكتابة (مثل padding)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="attr">margin</span>: <span class="value">20px</span>;
  <span class="attr">margin</span>: <span class="value">10px 20px</span>;
  <span class="attr">margin</span>: <span class="value">10px 20px 15px 25px</span>;
}</pre></div>
                </div>

                <h3>🎯 توسيط أفقي</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.centered-box</span> {
  <span class="attr">width</span>: <span class="value">300px</span>;
  <span class="attr">margin</span>: <span class="value">0 auto</span>;  <span class="comment">/* توسيط! */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">توسيط بـ margin: 0 auto</span>
                    <div style="width:200px;margin:0 auto;background:#667eea;color:#fff;padding:15px;text-align:center;border-radius:8px;">
                        عنصر في المنتصف
                    </div>
                </div>

                <h3>⚠️ Margin Collapse</h3>
                <p>عندما يلتقي margin عمودي لعنصرين، يُأخذ الأكبر فقط:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">.box1</span> { <span class="attr">margin-bottom</span>: <span class="value">30px</span>; }
<span class="tag">.box2</span> { <span class="attr">margin-top</span>: <span class="value">20px</span>; }
<span class="comment">/* المسافة الفعلية = 30px (وليس 50px) */</span></pre></div>
                </div>
            </div>
        `
    },
    {
        title: "Border",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🖼️</span> Border (الحدود)</h2>
                <p class="lesson-subtitle">إضافة حدود حول العناصر</p>
                
                <h3>📝 الصيغة الأساسية</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="comment">/* الاختصار: width style color */</span>
  <span class="attr">border</span>: <span class="value">2px solid #333</span>;
  
  <span class="comment">/* بالتفصيل */</span>
  <span class="attr">border-width</span>: <span class="value">2px</span>;
  <span class="attr">border-style</span>: <span class="value">solid</span>;
  <span class="attr">border-color</span>: <span class="value">#333</span>;
}</pre></div>
                </div>

                <h3>🎨 أنماط الحدود</h3>
                <div class="live-preview">
                    <span class="preview-label">أنماط مختلفة</span>
                    <div style="display:flex;gap:15px;flex-wrap:wrap;">
                        <div style="border:3px solid #667eea;padding:15px;background:#fff;">solid</div>
                        <div style="border:3px dashed #667eea;padding:15px;background:#fff;">dashed</div>
                        <div style="border:3px dotted #667eea;padding:15px;background:#fff;">dotted</div>
                        <div style="border:3px double #667eea;padding:15px;background:#fff;">double</div>
                    </div>
                </div>

                <h3>🔵 border-radius (حواف منحنية)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="attr">border-radius</span>: <span class="value">10px</span>;      <span class="comment">/* جميع الزوايا */</span>
  <span class="attr">border-radius</span>: <span class="value">50%</span>;       <span class="comment">/* دائرة كاملة */</span>
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">تأثير border-radius</span>
                    <div style="display:flex;gap:15px;align-items:center;">
                        <div style="width:60px;height:60px;background:#667eea;border-radius:0;"></div>
                        <div style="width:60px;height:60px;background:#667eea;border-radius:10px;"></div>
                        <div style="width:60px;height:60px;background:#667eea;border-radius:20px;"></div>
                        <div style="width:60px;height:60px;background:#667eea;border-radius:50%;"></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Box Model</h2>
                <p class="lesson-subtitle">جربي تعديل المسافات والحدود!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر Box Model</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.card {
  background: white;
  padding: 25px;
  margin: 20px auto;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  max-width: 300px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.card h3 {
  margin: 0 0 10px;
  color: #333;
}

.card p {
  margin: 0;
  color: #666;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="card">
                                    <h3>بطاقة جميلة</h3>
                                    <p>هذه بطاقة منسقة بـ Box Model</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>💡 جربي هذه التعديلات:</h3>
                <ul>
                    <li>غيري <code>padding</code> إلى <code>40px</code></li>
                    <li>غيري <code>border-radius</code> إلى <code>25px</code></li>
                    <li>أضيفي <code>border-left: 5px solid #667eea;</code></li>
                    <li>غيري <code>box-shadow</code> إلى <code>0 10px 40px rgba(102,126,234,0.3)</code></li>
                </ul>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>ممتاز! أكملتِ اليوم الثالث - Box Model!</p>
                </div>
            </div>
        `
    }
];
