// ========================================
// اليوم الأول: مقدمة CSS والمحددات الأساسية
// ========================================

const cssDay1Lessons = [
    {
        title: "ما هي CSS؟",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎨</span> ما هي CSS؟</h2>
                <p class="lesson-subtitle">تعرّفي على لغة التنسيق التي تحوّل صفحات الويب لتصاميم جميلة</p>
                
                <h3>🌟 مقدمة</h3>
                <p><strong>CSS</strong> تعني <code>Cascading Style Sheets</code> (أوراق الأنماط المتتالية). هي اللغة التي تتحكم في شكل ومظهر صفحات الويب.</p>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>بدون CSS، ستبدو جميع المواقع كمستندات نصية بسيطة بدون ألوان أو تنسيق!</p>
                </div>

                <h3>🎯 لماذا نحتاج CSS؟</h3>
                <ul>
                    <li><strong>فصل المحتوى عن التصميم:</strong> HTML للمحتوى، CSS للشكل</li>
                    <li><strong>سهولة الصيانة:</strong> تغيير تصميم الموقع كاملاً من ملف واحد</li>
                    <li><strong>تصاميم متجاوبة:</strong> تعمل على جميع الأجهزة</li>
                    <li><strong>تحسين تجربة المستخدم:</strong> مظهر احترافي وجذاب</li>
                </ul>

                <h3>📊 مقارنة: بدون وبعد CSS</h3>
                <div class="comparison-box">
                    <div class="comparison-item">
                        <span class="comparison-label">❌ بدون CSS</span>
                        <div class="comparison-preview" style="background:#fff;color:#000;padding:15px;font-family:Times New Roman;">
                            <h1 style="margin:0;font-size:24px;">عنوان الصفحة</h1>
                            <p style="margin:5px 0;">هذا نص عادي بدون أي تنسيق</p>
                            <a href="#" style="color:blue;">رابط</a>
                        </div>
                    </div>
                    <div class="comparison-item">
                        <span class="comparison-label">✅ مع CSS</span>
                        <div class="comparison-preview" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:20px;border-radius:12px;font-family:Tajawal;">
                            <h1 style="margin:0 0 10px;font-size:20px;">عنوان الصفحة</h1>
                            <p style="margin:0 0 10px;opacity:0.9;">هذا نص منسق بشكل جميل</p>
                            <a href="#" style="color:#fff;background:rgba(255,255,255,0.2);padding:8px 16px;border-radius:20px;text-decoration:none;">رابط</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "طرق ربط CSS",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔗</span> طرق ربط CSS بـ HTML</h2>
                <p class="lesson-subtitle">ثلاث طرق مختلفة لإضافة CSS لصفحتك</p>
                
                <h3>1️⃣ Inline CSS (داخل العنصر)</h3>
                <p>نكتب CSS مباشرة داخل العنصر باستخدام خاصية <code>style</code>:</p>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre>&lt;p <span class="attr">style</span>=<span class="value">"color: blue; font-size: 16px;"</span>&gt;نص أزرق&lt;/p&gt;</pre></div>
                </div>
                <p>✅ سريع للتعديلات الصغيرة | ❌ صعب الصيانة، لا يُنصح به</p>

                <h3>2️⃣ Internal CSS (داخل الصفحة)</h3>
                <p>نكتب CSS داخل عنصر <code>&lt;style&gt;</code> في الـ <code>&lt;head&gt;</code>:</p>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre>&lt;head&gt;
  &lt;style&gt;
    <span class="tag">p</span> {
      <span class="attr">color</span>: <span class="value">blue</span>;
      <span class="attr">font-size</span>: <span class="value">16px</span>;
    }
  &lt;/style&gt;
&lt;/head&gt;</pre></div>
                </div>
                <p>✅ مناسب لصفحة واحدة | ❌ لا يمكن إعادة استخدامه</p>

                <h3>3️⃣ External CSS (ملف خارجي) ⭐ الأفضل</h3>
                <p>نربط ملف CSS خارجي باستخدام <code>&lt;link&gt;</code>:</p>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre>&lt;head&gt;
  &lt;link <span class="attr">rel</span>=<span class="value">"stylesheet"</span> <span class="attr">href</span>=<span class="value">"styles.css"</span>&gt;
&lt;/head&gt;</pre></div>
                </div>
                <div class="code-box">
                    <div class="code-header"><span>styles.css</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">p</span> {
  <span class="attr">color</span>: <span class="value">blue</span>;
  <span class="attr">font-size</span>: <span class="value">16px</span>;
}</pre></div>
                </div>
                <p>✅ أفضل طريقة للمشاريع | ✅ سهل الصيانة | ✅ يُحسّن أداء الموقع</p>

                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>دائماً استخدمي <strong>External CSS</strong> في مشاريعك الحقيقية!</p>
                </div>
            </div>
        `
    },
    {
        title: "بنية CSS",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📐</span> بنية قاعدة CSS</h2>
                <p class="lesson-subtitle">فهم أجزاء كود CSS</p>
                
                <h3>🔧 الهيكل الأساسي</h3>
                <p>كل قاعدة CSS تتكون من:</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS Structure</span></div>
                    <div class="code-content"><pre><span class="tag">selector</span> {
  <span class="attr">property</span>: <span class="value">value</span>;
  <span class="attr">property</span>: <span class="value">value</span>;
}</pre></div>
                </div>

                <div class="elements-table">
                    <table>
                        <tr>
                            <th>الجزء</th>
                            <th>الوصف</th>
                            <th>مثال</th>
                        </tr>
                        <tr>
                            <td><code>Selector</code></td>
                            <td>يحدد العنصر المراد تنسيقه</td>
                            <td><code>h1</code>, <code>.class</code>, <code>#id</code></td>
                        </tr>
                        <tr>
                            <td><code>Property</code></td>
                            <td>الخاصية المراد تغييرها</td>
                            <td><code>color</code>, <code>font-size</code></td>
                        </tr>
                        <tr>
                            <td><code>Value</code></td>
                            <td>القيمة الجديدة</td>
                            <td><code>red</code>, <code>16px</code></td>
                        </tr>
                    </table>
                </div>

                <h3>📝 مثال عملي</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">h1</span> {
  <span class="attr">color</span>: <span class="value">#333333</span>;
  <span class="attr">font-size</span>: <span class="value">24px</span>;
  <span class="attr">margin-bottom</span>: <span class="value">20px</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">النتيجة</span>
                    <h1 style="color:#333;font-size:24px;margin-bottom:20px;font-family:Tajawal;">عنوان منسق</h1>
                </div>

                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>لا تنسي الفاصلة المنقوطة <code>;</code> بعد كل قيمة!</p>
                </div>
            </div>
        `
    },
    {
        title: "المحددات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎯</span> المحددات الأساسية (Selectors)</h2>
                <p class="lesson-subtitle">كيف نختار العناصر التي نريد تنسيقها</p>
                
                <h3>1️⃣ Element Selector (محدد العنصر)</h3>
                <p>يستهدف جميع العناصر من نفس النوع:</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">p</span> { <span class="attr">color</span>: <span class="value">blue</span>; }
<span class="tag">h1</span> { <span class="attr">font-size</span>: <span class="value">32px</span>; }</pre></div>
                </div>

                <h3>2️⃣ Class Selector (محدد الكلاس)</h3>
                <p>يستهدف العناصر التي لها نفس الـ class (تبدأ بـ <code>.</code>):</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.highlight</span> { <span class="attr">background-color</span>: <span class="value">yellow</span>; }
<span class="tag">.btn</span> { <span class="attr">padding</span>: <span class="value">10px 20px</span>; }</pre></div>
                </div>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span></div>
                    <div class="code-content"><pre>&lt;p <span class="attr">class</span>=<span class="value">"highlight"</span>&gt;نص مميز&lt;/p&gt;
&lt;button <span class="attr">class</span>=<span class="value">"btn"</span>&gt;زر&lt;/button&gt;</pre></div>
                </div>

                <h3>3️⃣ ID Selector (محدد المعرّف)</h3>
                <p>يستهدف عنصر واحد فريد (يبدأ بـ <code>#</code>):</p>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">#header</span> { <span class="attr">background</span>: <span class="value">#333</span>; }
<span class="tag">#main-content</span> { <span class="attr">padding</span>: <span class="value">20px</span>; }</pre></div>
                </div>

                <h3>📊 الفرق بين Class و ID</h3>
                <div class="elements-table">
                    <table>
                        <tr>
                            <th>Class (.)</th>
                            <th>ID (#)</th>
                        </tr>
                        <tr>
                            <td>يمكن استخدامه عدة مرات</td>
                            <td>يُستخدم مرة واحدة فقط</td>
                        </tr>
                        <tr>
                            <td>أولوية أقل</td>
                            <td>أولوية أعلى</td>
                        </tr>
                        <tr>
                            <td>للعناصر المتكررة</td>
                            <td>للعناصر الفريدة</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "الأولوية والوراثة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⚖️</span> الأولوية والوراثة</h2>
                <p class="lesson-subtitle">كيف تقرر CSS أي تنسيق يُطبق</p>
                
                <h3>🏆 الأولوية (Specificity)</h3>
                <p>عند تعارض الأنماط، CSS تختار بناءً على الأولوية:</p>
                
                <div class="code-box">
                    <div class="code-header"><span>ترتيب الأولوية</span></div>
                    <div class="code-content"><pre>Inline Style (1000) > ID (100) > Class (10) > Element (1)</pre></div>
                </div>

                <h3>📝 مثال</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">p</span> { <span class="attr">color</span>: <span class="value">blue</span>; }           <span class="comment">/* أولوية: 1 */</span>
<span class="tag">.text</span> { <span class="attr">color</span>: <span class="value">green</span>; }      <span class="comment">/* أولوية: 10 */</span>
<span class="tag">#intro</span> { <span class="attr">color</span>: <span class="value">red</span>; }       <span class="comment">/* أولوية: 100 */</span></pre></div>
                </div>
                <div class="code-box">
                    <div class="code-header"><span>HTML</span></div>
                    <div class="code-content"><pre>&lt;p <span class="attr">id</span>=<span class="value">"intro"</span> <span class="attr">class</span>=<span class="value">"text"</span>&gt;ما لون هذا النص؟&lt;/p&gt;
<span class="comment">&lt;!-- الجواب: أحمر (ID له الأولوية الأعلى) --&gt;</span></pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">النتيجة</span>
                    <p style="color:red;font-size:18px;">ما لون هذا النص؟ - أحمر!</p>
                </div>

                <h3>👨‍👧 الوراثة (Inheritance)</h3>
                <p>بعض خصائص CSS تنتقل من العنصر الأب إلى الأبناء:</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span></div>
                    <div class="code-content"><pre><span class="tag">body</span> {
  <span class="attr">font-family</span>: <span class="value">Arial</span>;
  <span class="attr">color</span>: <span class="value">#333</span>;
}
<span class="comment">/* جميع العناصر داخل body سترث هذه الخصائص */</span></pre></div>
                </div>

                <div class="elements-table">
                    <table>
                        <tr>
                            <th>خصائص تُورَث ✅</th>
                            <th>خصائص لا تُورَث ❌</th>
                        </tr>
                        <tr>
                            <td><code>color</code></td>
                            <td><code>margin</code></td>
                        </tr>
                        <tr>
                            <td><code>font-family</code></td>
                            <td><code>padding</code></td>
                        </tr>
                        <tr>
                            <td><code>font-size</code></td>
                            <td><code>border</code></td>
                        </tr>
                        <tr>
                            <td><code>line-height</code></td>
                            <td><code>background</code></td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة عملية</h2>
                <p class="lesson-subtitle">جربي كتابة CSS بنفسك!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر CSS التفاعلي</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input" placeholder="اكتبي CSS هنا...">.box {
  background: #667eea;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.box:hover {
  background: #764ba2;
  transform: scale(1.05);
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="box">مرحباً بالعالم!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>💡 جربي هذه التعديلات:</h3>
                <ul>
                    <li>غيري <code>background</code> إلى لون آخر مثل <code>#e74c3c</code></li>
                    <li>زيدي <code>padding</code> إلى <code>40px</code></li>
                    <li>أضيفي <code>box-shadow: 0 10px 30px rgba(0,0,0,0.3);</code></li>
                    <li>غيري <code>border-radius</code> إلى <code>50px</code> لجعله دائري</li>
                </ul>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>أحسنتِ! أكملتِ اليوم الأول من دورة CSS!</p>
                </div>
            </div>
        `
    }
];
