// ========================================
// اليوم الثاني عشر: Transitions والتأثيرات
// ========================================

const cssDay12Lessons = [
    {
        title: "مقدمة Transitions",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">✨</span> التحولات السلسة</h2>
                <p class="lesson-subtitle">إضافة حركة سلسة للتغييرات</p>
                
                <p><strong>Transitions</strong> تجعل التغييرات تحدث بسلاسة بدلاً من القفز المفاجئ.</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.button</span> {
  <span class="attr">background</span>: <span class="value">#667eea</span>;
  <span class="attr">transition</span>: <span class="value">background 0.3s ease</span>;
}

<span class="tag">.button:hover</span> {
  <span class="attr">background</span>: <span class="value">#764ba2</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">مرري الماوس على الزر</span>
                    <button style="background:#667eea;color:#fff;padding:15px 30px;border:none;border-radius:8px;cursor:pointer;transition:all 0.3s ease;font-size:16px;" 
                            onmouseover="this.style.background='#764ba2';this.style.transform='scale(1.05)'" 
                            onmouseout="this.style.background='#667eea';this.style.transform='scale(1)'">
                        زر متحرك
                    </button>
                </div>
            </div>
        `
    },
    {
        title: "خصائص Transition",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⚙️</span> خصائص Transition</h2>
                <p class="lesson-subtitle">التحكم في التحولات</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="comment">/* الاختصار: property duration timing delay */</span>
  <span class="attr">transition</span>: <span class="value">all 0.3s ease 0s</span>;
  
  <span class="comment">/* بالتفصيل */</span>
  <span class="attr">transition-property</span>: <span class="value">background, transform</span>;
  <span class="attr">transition-duration</span>: <span class="value">0.3s</span>;
  <span class="attr">transition-timing-function</span>: <span class="value">ease</span>;
  <span class="attr">transition-delay</span>: <span class="value">0s</span>;
}</pre></div>
                </div>

                <h3>⏱️ timing-function</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>القيمة</th><th>الوصف</th></tr>
                        <tr><td><code>ease</code></td><td>بطيء ثم سريع ثم بطيء</td></tr>
                        <tr><td><code>linear</code></td><td>سرعة ثابتة</td></tr>
                        <tr><td><code>ease-in</code></td><td>بطيء في البداية</td></tr>
                        <tr><td><code>ease-out</code></td><td>بطيء في النهاية</td></tr>
                        <tr><td><code>ease-in-out</code></td><td>بطيء في البداية والنهاية</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "transform",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🔄</span> تحويلات العناصر</h2>
                <p class="lesson-subtitle">تدوير وتغيير حجم العناصر</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.box</span> {
  <span class="comment">/* التحريك */</span>
  <span class="attr">transform</span>: <span class="value">translateX(100px)</span>;
  <span class="attr">transform</span>: <span class="value">translateY(-50px)</span>;
  <span class="attr">transform</span>: <span class="value">translate(100px, -50px)</span>;
  
  <span class="comment">/* التكبير والتصغير */</span>
  <span class="attr">transform</span>: <span class="value">scale(1.5)</span>;
  <span class="attr">transform</span>: <span class="value">scale(0.5)</span>;
  
  <span class="comment">/* التدوير */</span>
  <span class="attr">transform</span>: <span class="value">rotate(45deg)</span>;
  <span class="attr">transform</span>: <span class="value">rotate(-90deg)</span>;
  
  <span class="comment">/* دمج عدة تحويلات */</span>
  <span class="attr">transform</span>: <span class="value">scale(1.1) rotate(5deg)</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة transform</span>
                    <div style="display:flex;gap:20px;flex-wrap:wrap;padding:20px;">
                        <div style="width:60px;height:60px;background:#667eea;transform:rotate(45deg);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">rotate</div>
                        <div style="width:60px;height:60px;background:#764ba2;transform:scale(1.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">scale</div>
                        <div style="width:60px;height:60px;background:#e74c3c;transform:skewX(15deg);display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">skew</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Transitions</h2>
                <p class="lesson-subtitle">صممي بطاقة متحركة!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر التأثيرات</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">.animated-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  max-width: 200px;
  margin: 20px auto;
}

.animated-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(102,126,234,0.3);
}

.animated-card .icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.animated-card h4 {
  margin: 0;
  color: #333;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="animated-card">
                                    <div class="icon">🚀</div>
                                    <h4>مرري الماوس!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم الثاني عشر - Transitions!</p>
                </div>
            </div>
        `
    }
];
