// اليوم الثاني: تنسيق النصوص والقوائم
const day2Lessons = [
    {
        id: 1,
        title: "تنسيق النصوص",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✨</span> تنسيق النصوص</h2>
                <p class="lesson-subtitle">اجعلي نصوصك أكثر جاذبية</p>
                
                <table class="elements-table">
                    <tr><th>العنصر</th><th>الاستخدام</th><th>النتيجة</th></tr>
                    <tr><td><code>&lt;strong&gt;</code></td><td>نص مهم/غامق</td><td><strong>نص غامق</strong></td></tr>
                    <tr><td><code>&lt;em&gt;</code></td><td>تأكيد/مائل</td><td><em>نص مائل</em></td></tr>
                    <tr><td><code>&lt;mark&gt;</code></td><td>تظليل</td><td><mark>نص مظلل</mark></td></tr>
                    <tr><td><code>&lt;small&gt;</code></td><td>نص صغير</td><td><small>نص صغير</small></td></tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header"><span>أمثلة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>هذا نص <span class="tag">&lt;strong&gt;</span>مهم جداً<span class="tag">&lt;/strong&gt;</span> يجب الانتباه له.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>أريد <span class="tag">&lt;em&gt;</span>التأكيد<span class="tag">&lt;/em&gt;</span> على هذه النقطة.<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>لا تنسي <span class="tag">&lt;mark&gt;</span>هذا الجزء<span class="tag">&lt;/mark&gt;</span>!<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>هذا نص <strong>مهم جداً</strong> يجب الانتباه له.</p>
                    <p>أريد <em>التأكيد</em> على هذه النقطة.</p>
                    <p>لا تنسي <mark>هذا الجزء</mark>!</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "عناصر إضافية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔤</span> عناصر تنسيق إضافية</h2>
                <p class="lesson-subtitle">Sub, Sup, Del, Ins</p>
                
                <table class="elements-table">
                    <tr><th>العنصر</th><th>الوظيفة</th><th>مثال</th></tr>
                    <tr><td><code>&lt;sub&gt;</code></td><td>نص منخفض</td><td>H<sub>2</sub>O</td></tr>
                    <tr><td><code>&lt;sup&gt;</code></td><td>نص مرتفع</td><td>X<sup>2</sup></td></tr>
                    <tr><td><code>&lt;del&gt;</code></td><td>نص محذوف</td><td><del>محذوف</del></td></tr>
                    <tr><td><code>&lt;ins&gt;</code></td><td>نص مُضاف</td><td><ins>مُضاف</ins></td></tr>
                </table>
                
                <div class="code-box">
                    <div class="code-header"><span>أمثلة عملية</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;p&gt;</span>الماء: H<span class="tag">&lt;sub&gt;</span>2<span class="tag">&lt;/sub&gt;</span>O<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>مساحة المربع = x<span class="tag">&lt;sup&gt;</span>2<span class="tag">&lt;/sup&gt;</span><span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span>السعر: <span class="tag">&lt;del&gt;</span>100<span class="tag">&lt;/del&gt;</span> <span class="tag">&lt;ins&gt;</span>75<span class="tag">&lt;/ins&gt;</span> ريال<span class="tag">&lt;/p&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <p>الماء: H<sub>2</sub>O</p>
                    <p>مساحة المربع = x<sup>2</sup></p>
                    <p>السعر: <del>100</del> <ins>75</ins> ريال</p>
                </div>
                
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p>del و ins مفيدة جداً لعرض تخفيضات الأسعار!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "القوائم غير المرتبة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📋</span> القوائم غير المرتبة</h2>
                <p class="lesson-subtitle">Unordered Lists - قوائم بنقاط</p>
                
                <p>تستخدم عندما لا يكون الترتيب مهماً - مثل قائمة مشتريات.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>ul + li</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;</span>تفاح<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>برتقال<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>موز<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ul><li>تفاح</li><li>برتقال</li><li>موز</li></ul>
                </div>
                
                <h3>📌 شرح:</h3>
                <ul>
                    <li><code>&lt;ul&gt;</code> = Unordered List</li>
                    <li><code>&lt;li&gt;</code> = List Item</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "القوائم المرتبة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔢</span> القوائم المرتبة</h2>
                <p class="lesson-subtitle">Ordered Lists - قوائم مرقمة</p>
                
                <p>تستخدم عندما يكون الترتيب مهماً - مثل خطوات وصفة.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>ol + li</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ol&gt;</span>
    <span class="tag">&lt;li&gt;</span>سخني الفرن<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>اخلطي المكونات<span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>اخبزي 30 دقيقة<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ol><li>سخني الفرن</li><li>اخلطي المكونات</li><li>اخبزي 30 دقيقة</li></ol>
                </div>
                
                <h3>🎨 أنماط الترقيم:</h3>
                <div class="code-box">
                    <div class="code-header"><span>type</span></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"1"</span><span class="tag">&gt;</span> أرقام: 1, 2, 3
<span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"A"</span><span class="tag">&gt;</span> حروف: A, B, C
<span class="tag">&lt;ol</span> <span class="attr">type</span>=<span class="value">"I"</span><span class="tag">&gt;</span> رومانية: I, II, III</pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "القوائم المتداخلة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📚</span> القوائم المتداخلة</h2>
                <p class="lesson-subtitle">Nested Lists - قوائم داخل قوائم</p>
                
                <div class="code-box">
                    <div class="code-header"><span>متداخلة</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;</span>الفواكه
        <span class="tag">&lt;ul&gt;</span>
            <span class="tag">&lt;li&gt;</span>تفاح<span class="tag">&lt;/li&gt;</span>
            <span class="tag">&lt;li&gt;</span>برتقال<span class="tag">&lt;/li&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;</span>الخضروات
        <span class="tag">&lt;ul&gt;</span>
            <span class="tag">&lt;li&gt;</span>خيار<span class="tag">&lt;/li&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <ul>
                        <li>الفواكه<ul><li>تفاح</li><li>برتقال</li></ul></li>
                        <li>الخضروات<ul><li>خيار</li></ul></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "قوائم التعريف",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">📖</span> قوائم التعريف</h2>
                <p class="lesson-subtitle">Definition Lists - مصطلحات وتعريفاتها</p>
                
                <div class="code-box">
                    <div class="code-header"><span>dl, dt, dd</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content">
                        <pre><span class="tag">&lt;dl&gt;</span>
    <span class="tag">&lt;dt&gt;</span>HTML<span class="tag">&lt;/dt&gt;</span>
    <span class="tag">&lt;dd&gt;</span>لغة ترميز النص الفائق<span class="tag">&lt;/dd&gt;</span>
    
    <span class="tag">&lt;dt&gt;</span>CSS<span class="tag">&lt;/dt&gt;</span>
    <span class="tag">&lt;dd&gt;</span>أوراق الأنماط المتتالية<span class="tag">&lt;/dd&gt;</span>
<span class="tag">&lt;/dl&gt;</span></pre>
                    </div>
                </div>
                
                <div class="live-preview">
                    <span class="preview-label">المعاينة</span>
                    <dl>
                        <dt><strong>HTML</strong></dt><dd>لغة ترميز النص الفائق</dd>
                        <dt><strong>CSS</strong></dt><dd>أوراق الأنماط المتتالية</dd>
                    </dl>
                </div>
                
                <h3>📌 العناصر:</h3>
                <ul>
                    <li><code>&lt;dl&gt;</code> = Definition List</li>
                    <li><code>&lt;dt&gt;</code> = Definition Term</li>
                    <li><code>&lt;dd&gt;</code> = Definition Description</li>
                </ul>
            </div>
        `
    },
    {
        id: 7,
        title: "جربي بنفسك!",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎮</span> جربي بنفسك!</h2>
                <p class="lesson-subtitle">طبقي ما تعلمتِ</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✍️ اكتبي الكود</h4>
                        <button class="run-btn" onclick="runCode()">▶️ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="code-input"><!DOCTYPE html>
<html>
<body>
    <h1>قائمة <mark>مشترياتي</mark></h1>
    
    <ul>
        <li><strong>فواكه</strong>
            <ul>
                <li>تفاح</li>
                <li>برتقال</li>
            </ul>
        </li>
    </ul>
    
    <h2>الخطوات:</h2>
    <ol>
        <li>اغسلي الفواكه</li>
        <li><del>أضيفي سكر</del> <ins>بدون سكر!</ins></li>
    </ol>
</body>
</html></textarea>
                        </div>
                        <div class="preview-area" id="preview-output"></div>
                    </div>
                </div>
            </div>
        `
    }
];
