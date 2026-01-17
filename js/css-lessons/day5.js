// ========================================
// اليوم الخامس: المحددات المتقدمة
// ========================================

const cssDay5Lessons = [
    {
        title: "Descendant Selectors",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎯</span> المحددات التنازلية</h2>
                <p class="lesson-subtitle">استهداف عناصر داخل عناصر أخرى</p>
                
                <h3>📌 Descendant Selector (مسافة)</h3>
                <p>يستهدف أي عنصر داخل عنصر آخر (في أي مستوى):</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* أي p داخل article */</span>
<span class="tag">article p</span> {
  <span class="attr">color</span>: <span class="value">#333</span>;
}

<span class="comment">/* أي a داخل nav داخل header */</span>
<span class="tag">header nav a</span> {
  <span class="attr">text-decoration</span>: <span class="value">none</span>;
}</pre></div>
                </div>

                <h3>📌 Child Selector (>)</h3>
                <p>يستهدف الأبناء المباشرين فقط:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* فقط li المباشرة داخل ul */</span>
<span class="tag">ul > li</span> {
  <span class="attr">list-style</span>: <span class="value">none</span>;
}</pre></div>
                </div>

                <div class="elements-table">
                    <table>
                        <tr>
                            <th>Descendant (مسافة)</th>
                            <th>Child (>)</th>
                        </tr>
                        <tr>
                            <td>جميع العناصر في أي مستوى</td>
                            <td>الأبناء المباشرين فقط</td>
                        </tr>
                        <tr>
                            <td><code>ul li</code></td>
                            <td><code>ul > li</code></td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "Sibling Selectors",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">👥</span> محددات الأشقاء</h2>
                <p class="lesson-subtitle">استهداف العناصر المجاورة</p>
                
                <h3>➡️ Adjacent Sibling (+)</h3>
                <p>العنصر التالي مباشرة:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* أول p بعد h2 مباشرة */</span>
<span class="tag">h2 + p</span> {
  <span class="attr">font-size</span>: <span class="value">1.2em</span>;
  <span class="attr">color</span>: <span class="value">#666</span>;
}</pre></div>
                </div>

                <h3>〰️ General Sibling (~)</h3>
                <p>جميع العناصر التالية:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* جميع p بعد h2 */</span>
<span class="tag">h2 ~ p</span> {
  <span class="attr">color</span>: <span class="value">#666</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مثال عملي</span>
                    <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
                        <h3 style="margin:0 0 10px;color:#333;">عنوان</h3>
                        <p style="font-size:1.1em;color:#667eea;margin:0 0 5px;">h2 + p - أول فقرة (مميزة)</p>
                        <p style="color:#666;margin:0 0 5px;">h2 ~ p - فقرة ثانية</p>
                        <p style="color:#666;margin:0;">h2 ~ p - فقرة ثالثة</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Attribute Selectors",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏷️</span> محددات الخصائص</h2>
                <p class="lesson-subtitle">استهداف العناصر بناءً على خصائصها</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* له الخاصية */</span>
<span class="tag">[disabled]</span> {
  <span class="attr">opacity</span>: <span class="value">0.5</span>;
}

<span class="comment">/* قيمة محددة */</span>
<span class="tag">[type="text"]</span> {
  <span class="attr">border</span>: <span class="value">1px solid #ccc</span>;
}

<span class="comment">/* يبدأ بـ */</span>
<span class="tag">[href^="https"]</span> {
  <span class="attr">color</span>: <span class="value">green</span>;
}

<span class="comment">/* ينتهي بـ */</span>
<span class="tag">[href$=".pdf"]</span> {
  <span class="attr">background</span>: <span class="value">url('pdf-icon.png')</span>;
}

<span class="comment">/* يحتوي على */</span>
<span class="tag">[class*="btn"]</span> {
  <span class="attr">cursor</span>: <span class="value">pointer</span>;
}</pre></div>
                </div>

                <div class="elements-table">
                    <table>
                        <tr><th>المحدد</th><th>المعنى</th></tr>
                        <tr><td><code>[attr]</code></td><td>له الخاصية</td></tr>
                        <tr><td><code>[attr="value"]</code></td><td>قيمة مطابقة</td></tr>
                        <tr><td><code>[attr^="value"]</code></td><td>يبدأ بـ</td></tr>
                        <tr><td><code>[attr$="value"]</code></td><td>ينتهي بـ</td></tr>
                        <tr><td><code>[attr*="value"]</code></td><td>يحتوي على</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "Pseudo-classes",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎭</span> Pseudo-classes</h2>
                <p class="lesson-subtitle">استهداف حالات العناصر</p>
                
                <h3>🖱️ حالات التفاعل</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">a:link</span> { <span class="attr">color</span>: <span class="value">blue</span>; }       <span class="comment">/* رابط لم يُزر */</span>
<span class="tag">a:visited</span> { <span class="attr">color</span>: <span class="value">purple</span>; }  <span class="comment">/* رابط مُزار */</span>
<span class="tag">a:hover</span> { <span class="attr">color</span>: <span class="value">red</span>; }       <span class="comment">/* عند التمرير */</span>
<span class="tag">a:active</span> { <span class="attr">color</span>: <span class="value">orange</span>; }   <span class="comment">/* أثناء النقر */</span>
<span class="tag">a:focus</span> { <span class="attr">outline</span>: <span class="value">2px solid blue</span>; }</pre></div>
                </div>

                <h3>📊 Structural Pseudo-classes</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">li:first-child</span> { <span class="attr">font-weight</span>: <span class="value">bold</span>; }
<span class="tag">li:last-child</span> { <span class="attr">border-bottom</span>: <span class="value">none</span>; }

<span class="comment">/* nth-child للترتيب */</span>
<span class="tag">tr:nth-child(odd)</span> { <span class="attr">background</span>: <span class="value">#f5f5f5</span>; }
<span class="tag">tr:nth-child(even)</span> { <span class="attr">background</span>: <span class="value">#fff</span>; }
<span class="tag">tr:nth-child(3)</span> { <span class="attr">color</span>: <span class="value">red</span>; }  <span class="comment">/* الثالث */</span>

<span class="comment">/* not - استثناء */</span>
<span class="tag">li:not(:last-child)</span> { <span class="attr">margin-bottom</span>: <span class="value">10px</span>; }</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">جدول بصفوف متناوبة</span>
                    <table style="width:100%;border-collapse:collapse;">
                        <tr style="background:#667eea;color:#fff;"><th style="padding:10px;">العنوان</th><th style="padding:10px;">البيانات</th></tr>
                        <tr style="background:#f5f5f5;"><td style="padding:10px;">odd</td><td style="padding:10px;">فردي</td></tr>
                        <tr style="background:#fff;"><td style="padding:10px;">even</td><td style="padding:10px;">زوجي</td></tr>
                        <tr style="background:#f5f5f5;"><td style="padding:10px;">odd</td><td style="padding:10px;">فردي</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "Pseudo-elements",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✨</span> Pseudo-elements</h2>
                <p class="lesson-subtitle">إنشاء عناصر وهمية</p>
                
                <h3>📌 ::before و ::after</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.quote::before</span> {
  <span class="attr">content</span>: <span class="value">'"'</span>;
  <span class="attr">color</span>: <span class="value">#999</span>;
  <span class="attr">font-size</span>: <span class="value">2em</span>;
}

<span class="tag">.quote::after</span> {
  <span class="attr">content</span>: <span class="value">'"'</span>;
  <span class="attr">color</span>: <span class="value">#999</span>;
  <span class="attr">font-size</span>: <span class="value">2em</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">اقتباس مع علامات</span>
                    <p style="font-size:18px;color:#333;font-style:italic;">
                        <span style="color:#667eea;font-size:1.5em;">"</span>
                        التعلم رحلة ممتعة!
                        <span style="color:#667eea;font-size:1.5em;">"</span>
                    </p>
                </div>

                <h3>🔤 ::first-letter و ::first-line</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">p::first-letter</span> {
  <span class="attr">font-size</span>: <span class="value">2em</span>;
  <span class="attr">color</span>: <span class="value">#667eea</span>;
  <span class="attr">float</span>: <span class="value">right</span>;
}

<span class="tag">p::first-line</span> {
  <span class="attr">font-weight</span>: <span class="value">bold</span>;
}</pre></div>
                </div>

                <h3>🎨 ::selection</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">::selection</span> {
  <span class="attr">background</span>: <span class="value">#667eea</span>;
  <span class="attr">color</span>: <span class="value">white</span>;
}</pre></div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة المحددات</h2>
                <p class="lesson-subtitle">طبقي المحددات المتقدمة!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر المحددات</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.nav-menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 5px;
}

.nav-menu li {
  background: #667eea;
  border-radius: 8px;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

.nav-menu li:hover {
  background: #764ba2;
}

.nav-menu li:first-child {
  border-radius: 8px 0 0 8px;
}

.nav-menu li:last-child {
  border-radius: 0 8px 8px 0;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <ul class="nav-menu">
                                    <li><a href="#">الرئيسية</a></li>
                                    <li><a href="#">المنتجات</a></li>
                                    <li><a href="#">اتصل بنا</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>ممتاز! أكملتِ اليوم الخامس - المحددات المتقدمة!</p>
                </div>
            </div>
        `
    }
];
