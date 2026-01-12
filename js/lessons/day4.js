// اليوم الرابع: الجداول
const day4Lessons = [
    {
        id: 1,
        title: "بنية الجدول",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📊</span> بنية الجدول الأساسية</h2>
                <p class="lesson-subtitle">table, tr, td, th</p>
                
                <div class="code-box">
                    <div class="code-header"><span>جدول بسيط</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;table&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
        <span class="tag">&lt;th&gt;</span>الاسم<span class="tag">&lt;/th&gt;</span>
        <span class="tag">&lt;th&gt;</span>العمر<span class="tag">&lt;/th&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
        <span class="tag">&lt;td&gt;</span>سارة<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;td&gt;</span>25<span class="tag">&lt;/td&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
        <span class="tag">&lt;td&gt;</span>نورة<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;td&gt;</span>22<span class="tag">&lt;/td&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
<span class="tag">&lt;/table&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <table border="1" style="border-collapse:collapse;width:100%">
                        <tr><th style="padding:10px;background:#f0f0f0">الاسم</th><th style="padding:10px;background:#f0f0f0">العمر</th></tr>
                        <tr><td style="padding:10px">سارة</td><td style="padding:10px">25</td></tr>
                        <tr><td style="padding:10px">نورة</td><td style="padding:10px">22</td></tr>
                    </table>
                </div>
                
                <table class="elements-table">
                    <tr><th>العنصر</th><th>الوظيفة</th></tr>
                    <tr><td><code>&lt;table&gt;</code></td><td>حاوية الجدول</td></tr>
                    <tr><td><code>&lt;tr&gt;</code></td><td>صف (Table Row)</td></tr>
                    <tr><td><code>&lt;th&gt;</code></td><td>خلية عنوان (Header)</td></tr>
                    <tr><td><code>&lt;td&gt;</code></td><td>خلية بيانات (Data)</td></tr>
                </table>
            </div>
        `
    },
    {
        id: 2,
        title: "أقسام الجدول",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📋</span> أقسام الجدول</h2>
                <p class="lesson-subtitle">thead, tbody, tfoot</p>
                
                <div class="code-box">
                    <div class="code-header"><span>جدول منظم</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;table&gt;</span>
    <span class="tag">&lt;thead&gt;</span>
        <span class="tag">&lt;tr&gt;</span>
            <span class="tag">&lt;th&gt;</span>المنتج<span class="tag">&lt;/th&gt;</span>
            <span class="tag">&lt;th&gt;</span>السعر<span class="tag">&lt;/th&gt;</span>
        <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;/thead&gt;</span>
    <span class="tag">&lt;tbody&gt;</span>
        <span class="tag">&lt;tr&gt;</span>
            <span class="tag">&lt;td&gt;</span>تفاح<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>10<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;/tbody&gt;</span>
    <span class="tag">&lt;tfoot&gt;</span>
        <span class="tag">&lt;tr&gt;</span>
            <span class="tag">&lt;td&gt;</span>المجموع<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>10<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;/tfoot&gt;</span>
<span class="tag">&lt;/table&gt;</span></pre>
                    </div>
                </div>
                
                <table class="elements-table">
                    <tr><th>العنصر</th><th>الوظيفة</th></tr>
                    <tr><td><code>&lt;thead&gt;</code></td><td>رأس الجدول</td></tr>
                    <tr><td><code>&lt;tbody&gt;</code></td><td>جسم الجدول</td></tr>
                    <tr><td><code>&lt;tfoot&gt;</code></td><td>تذييل الجدول</td></tr>
                </table>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>استخدام هذه الأقسام يجعل الجدول أكثر تنظيماً ويسهل تنسيقه بـ CSS!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "دمج الخلايا",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔀</span> دمج الخلايا</h2>
                <p class="lesson-subtitle">colspan و rowspan</p>
                
                <h3>↔️ colspan - دمج أفقي</h3>
                <div class="code-box">
                    <div class="code-header"><span>colspan</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;tr&gt;</span>
    <span class="tag">&lt;td</span> <span class="attr">colspan</span>=<span class="value">"2"</span><span class="tag">&gt;</span>يمتد على عمودين<span class="tag">&lt;/td&gt;</span>
<span class="tag">&lt;/tr&gt;</span></pre>
                    </div>
                </div>
                
                <h3>↕️ rowspan - دمج عمودي</h3>
                <div class="code-box">
                    <div class="code-header"><span>rowspan</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;td</span> <span class="attr">rowspan</span>=<span class="value">"2"</span><span class="tag">&gt;</span>يمتد على صفين<span class="tag">&lt;/td&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">مثال colspan</span>
                    <table border="1" style="border-collapse:collapse;width:100%">
                        <tr><th colspan="3" style="padding:10px;background:#52b788;color:white">الجدول الزمني</th></tr>
                        <tr><td style="padding:10px">الأحد</td><td style="padding:10px">الإثنين</td><td style="padding:10px">الثلاثاء</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "عنوان الجدول",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🏷️</span> عنوان الجدول</h2>
                <p class="lesson-subtitle">عنصر caption</p>
                
                <div class="code-box">
                    <div class="code-header"><span>caption</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;table&gt;</span>
    <span class="tag">&lt;caption&gt;</span>جدول الدرجات<span class="tag">&lt;/caption&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
        <span class="tag">&lt;th&gt;</span>المادة<span class="tag">&lt;/th&gt;</span>
        <span class="tag">&lt;th&gt;</span>الدرجة<span class="tag">&lt;/th&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
    <span class="tag">&lt;tr&gt;</span>
        <span class="tag">&lt;td&gt;</span>الرياضيات<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;td&gt;</span>95<span class="tag">&lt;/td&gt;</span>
    <span class="tag">&lt;/tr&gt;</span>
<span class="tag">&lt;/table&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <table border="1" style="border-collapse:collapse;width:100%">
                        <caption style="font-weight:bold;margin-bottom:10px;font-size:18px">جدول الدرجات</caption>
                        <tr><th style="padding:10px;background:#f0f0f0">المادة</th><th style="padding:10px;background:#f0f0f0">الدرجة</th></tr>
                        <tr><td style="padding:10px">الرياضيات</td><td style="padding:10px">95</td></tr>
                    </table>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><code>&lt;caption&gt;</code> يجب أن يكون أول عنصر داخل <code>&lt;table&gt;</code></p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "أفضل الممارسات",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✅</span> أفضل الممارسات</h2>
                <p class="lesson-subtitle">متى تستخدمين الجداول</p>
                
                <h3>✅ استخدمي الجداول لـ:</h3>
                <ul>
                    <li>البيانات الجدولية (أرقام، إحصائيات)</li>
                    <li>المقارنات بين عناصر</li>
                    <li>الجداول الزمنية</li>
                    <li>قوائم الأسعار</li>
                </ul>
                
                <h3>❌ لا تستخدمي الجداول لـ:</h3>
                <ul>
                    <li>تخطيط الصفحة (استخدمي CSS Grid/Flexbox)</li>
                    <li>تنسيق النصوص</li>
                    <li>إنشاء أعمدة للمحتوى</li>
                </ul>
                
                <div class="warning-box">
                    <span class="icon">⚠️</span>
                    <p>استخدام الجداول للتخطيط يضر بالوصولية وSEO!</p>
                </div>
                
                <h3>🎨 نصائح التنسيق:</h3>
                <ul>
                    <li>استخدمي CSS لتنسيق الجداول</li>
                    <li>أضيفي <code>border-collapse: collapse</code></li>
                    <li>استخدمي ألوان متناوبة للصفوف</li>
                </ul>
            </div>
        `
    },
    {
        id: 6,
        title: "جربي!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">اصنعي جدول مواعيد</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ الكود</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input"><!DOCTYPE html>
<html>
<body>
    <table border="1" style="border-collapse:collapse;width:100%">
        <caption>جدولي الدراسي</caption>
        <thead>
            <tr style="background:#52b788;color:white">
                <th style="padding:10px">اليوم</th>
                <th style="padding:10px">المادة</th>
                <th style="padding:10px">الوقت</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding:10px">الأحد</td>
                <td style="padding:10px">HTML</td>
                <td style="padding:10px">10:00</td>
            </tr>
            <tr style="background:#f0f0f0">
                <td style="padding:10px">الإثنين</td>
                <td style="padding:10px">CSS</td>
                <td style="padding:10px">11:00</td>
            </tr>
        </tbody>
    </table>
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output"></div>
                    </div>
                </div>
                
                <h3>🎯 تحديات:</h3>
                <ol>
                    <li>أضيفي صف ثالث للجدول</li>
                    <li>استخدمي colspan لدمج خليتين</li>
                    <li>أضيفي tfoot مع مجموع الساعات</li>
                </ol>
            </div>
        `
    }
];
