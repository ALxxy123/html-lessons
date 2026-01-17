// ========================================
// اليوم الثاني: الألوان والخلفيات
// ========================================

const cssDay2Lessons = [
    {
        title: "أنظمة الألوان",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🌈</span> أنظمة الألوان في CSS</h2>
                <p class="lesson-subtitle">تعرّفي على الطرق المختلفة لتحديد الألوان</p>
                
                <h3>1️⃣ Named Colors (الألوان المسماة)</h3>
                <p>أسماء ألوان جاهزة في CSS (أكثر من 140 لون):</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">color</span>: <span class="value">red</span>;
<span class="attr">color</span>: <span class="value">blue</span>;
<span class="attr">color</span>: <span class="value">tomato</span>;
<span class="attr">color</span>: <span class="value">cornflowerblue</span>;</pre></div>
                </div>
                <div class="color-palette">
                    <div class="color-swatch" style="background:red;">red</div>
                    <div class="color-swatch" style="background:blue;">blue</div>
                    <div class="color-swatch" style="background:tomato;">tomato</div>
                    <div class="color-swatch" style="background:cornflowerblue;">cornflowerblue</div>
                </div>

                <h3>2️⃣ HEX (النظام السداسي عشر)</h3>
                <p>تبدأ بـ <code>#</code> وتتكون من 6 أو 3 أحرف:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">color</span>: <span class="value">#FF0000</span>;    <span class="comment">/* أحمر */</span>
<span class="attr">color</span>: <span class="value">#00FF00</span>;    <span class="comment">/* أخضر */</span>
<span class="attr">color</span>: <span class="value">#0000FF</span>;    <span class="comment">/* أزرق */</span>
<span class="attr">color</span>: <span class="value">#333</span>;       <span class="comment">/* اختصار لـ #333333 */</span></pre></div>
                </div>

                <h3>3️⃣ RGB</h3>
                <p>Red، Green، Blue - كل قيمة من 0 إلى 255:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">color</span>: <span class="value">rgb(255, 0, 0)</span>;      <span class="comment">/* أحمر */</span>
<span class="attr">color</span>: <span class="value">rgb(0, 255, 0)</span>;      <span class="comment">/* أخضر */</span>
<span class="attr">color</span>: <span class="value">rgb(0, 0, 255)</span>;      <span class="comment">/* أزرق */</span></pre></div>
                </div>

                <h3>4️⃣ RGBA (مع الشفافية)</h3>
                <p>مثل RGB لكن مع قناة Alpha للشفافية (0 إلى 1):</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">color</span>: <span class="value">rgba(255, 0, 0, 0.5)</span>;    <span class="comment">/* أحمر بشفافية 50% */</span>
<span class="attr">color</span>: <span class="value">rgba(0, 0, 0, 0.8)</span>;      <span class="comment">/* أسود بشفافية 80% */</span></pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مقارنة الشفافية</span>
                    <div style="display:flex;gap:10px;">
                        <div style="background:rgba(102,126,234,1);padding:15px;border-radius:8px;color:#fff;">100%</div>
                        <div style="background:rgba(102,126,234,0.7);padding:15px;border-radius:8px;color:#fff;">70%</div>
                        <div style="background:rgba(102,126,234,0.4);padding:15px;border-radius:8px;color:#fff;">40%</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "خلفيات الألوان",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎨</span> خلفيات الألوان</h2>
                <p class="lesson-subtitle">تطبيق الألوان على خلفيات العناصر</p>
                
                <h3>📌 color vs background-color</h3>
                <div class="elements-table">
                    <table>
                        <tr>
                            <th>color</th>
                            <th>background-color</th>
                        </tr>
                        <tr>
                            <td>لون النص</td>
                            <td>لون الخلفية</td>
                        </tr>
                    </table>
                </div>

                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">body</span> {
  <span class="attr">background-color</span>: <span class="value">#f8f9fa</span>;
}

<span class="tag">.card</span> {
  <span class="attr">background-color</span>: <span class="value">white</span>;
}

<span class="tag">.overlay</span> {
  <span class="attr">background-color</span>: <span class="value">rgba(0, 0, 0, 0.5)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">تطبيق عملي</span>
                    <div style="background:#f8f9fa;padding:20px;border-radius:12px;">
                        <div style="background:white;padding:20px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                            <h4 style="margin:0 0 10px;color:#333;">بطاقة بخلفية بيضاء</h4>
                            <p style="margin:0;color:#666;">داخل خلفية رمادية فاتحة</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "صور الخلفية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🖼️</span> صور الخلفية</h2>
                <p class="lesson-subtitle">إضافة صور كخلفيات للعناصر</p>
                
                <h3>📸 background-image</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.hero</span> {
  <span class="attr">background-image</span>: <span class="value">url('hero-bg.jpg')</span>;
}

<span class="comment">/* صورة من رابط */</span>
<span class="tag">.banner</span> {
  <span class="attr">background-image</span>: <span class="value">url('https://example.com/image.jpg')</span>;
}</pre></div>
                </div>

                <h3>📏 background-size</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.hero</span> {
  <span class="attr">background-image</span>: <span class="value">url('hero.jpg')</span>;
  
  <span class="comment">/* cover: تغطي المساحة كاملة */</span>
  <span class="attr">background-size</span>: <span class="value">cover</span>;
  
  <span class="comment">/* contain: تظهر الصورة كاملة */</span>
  <span class="attr">background-size</span>: <span class="value">contain</span>;
}</pre></div>
                </div>

                <h3>📍 background-position</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">background-position</span>: <span class="value">center</span>;
<span class="attr">background-position</span>: <span class="value">top right</span>;
<span class="attr">background-position</span>: <span class="value">50% 50%</span>;</pre></div>
                </div>

                <h3>🔁 background-repeat</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="attr">background-repeat</span>: <span class="value">no-repeat</span>;   <span class="comment">/* لا تكرار */</span>
<span class="attr">background-repeat</span>: <span class="value">repeat-x</span>;    <span class="comment">/* أفقي فقط */</span>
<span class="attr">background-repeat</span>: <span class="value">repeat-y</span>;    <span class="comment">/* عمودي فقط */</span></pre></div>
                </div>
            </div>
        `
    },
    {
        title: "التدرجات اللونية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🌅</span> التدرجات اللونية (Gradients)</h2>
                <p class="lesson-subtitle">إنشاء تدرجات لونية جميلة</p>
                
                <h3>📐 Linear Gradient (تدرج خطي)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.gradient-1</span> {
  <span class="attr">background</span>: <span class="value">linear-gradient(to right, #667eea, #764ba2)</span>;
}

<span class="tag">.gradient-2</span> {
  <span class="attr">background</span>: <span class="value">linear-gradient(45deg, #f093fb, #f5576c)</span>;
}

<span class="tag">.gradient-3</span> {
  <span class="attr">background</span>: <span class="value">linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة التدرجات</span>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <div style="background:linear-gradient(to right,#667eea,#764ba2);padding:20px 30px;border-radius:10px;color:#fff;">→ لليمين</div>
                        <div style="background:linear-gradient(45deg,#f093fb,#f5576c);padding:20px 30px;border-radius:10px;color:#fff;">↗ 45 درجة</div>
                        <div style="background:linear-gradient(to bottom,#4facfe,#00f2fe);padding:20px 30px;border-radius:10px;color:#fff;">↓ للأسفل</div>
                    </div>
                </div>

                <h3>⭕ Radial Gradient (تدرج دائري)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.radial</span> {
  <span class="attr">background</span>: <span class="value">radial-gradient(circle, #667eea, #764ba2)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">تدرج دائري</span>
                    <div style="background:radial-gradient(circle,#667eea,#764ba2);padding:40px;border-radius:10px;color:#fff;text-align:center;">تدرج من المركز</div>
                </div>

                <h3>🎭 خلفية صورة مع Overlay</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.hero</span> {
  <span class="attr">background</span>: 
    <span class="value">linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))</span>,
    <span class="value">url('hero.jpg')</span>;
  <span class="attr">background-size</span>: <span class="value">cover</span>;
}</pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدمي التدرجات لإضافة لمسة احترافية لتصاميمك!</p>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة الألوان</h2>
                <p class="lesson-subtitle">جربي مختلف أنظمة الألوان والتدرجات!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر الألوان التفاعلي</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input" placeholder="اكتبي CSS هنا...">.color-box {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="color-box">صندوق ملون جميل!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>🎨 تدرجات جاهزة للتجربة:</h3>
                <div class="code-box">
                    <div class="code-header"><span>تدرجات جميلة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* Sunset */</span>
<span class="value">linear-gradient(to right, #f12711, #f5af19)</span>

<span class="comment">/* Ocean */</span>
<span class="value">linear-gradient(to right, #2193b0, #6dd5ed)</span>

<span class="comment">/* Purple */</span>
<span class="value">linear-gradient(to right, #834d9b, #d04ed6)</span>

<span class="comment">/* Fresh */</span>
<span class="value">linear-gradient(to right, #11998e, #38ef7d)</span></pre></div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم الثاني - الألوان والخلفيات!</p>
                </div>
            </div>
        `
    }
];
