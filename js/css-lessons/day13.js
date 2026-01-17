// ========================================
// اليوم الثالث عشر: CSS Animations
// ========================================

const cssDay13Lessons = [
    {
        title: "مقدمة Animations",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎬</span> الرسوم المتحركة</h2>
                <p class="lesson-subtitle">حركات مستمرة ومعقدة</p>
                
                <p><strong>Animations</strong> تسمح بإنشاء حركات مستمرة ومعقدة باستخدام <code>@keyframes</code>.</p>
                
                <h3>🎯 الفرق بين Transition و Animation</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>Transition</th><th>Animation</th></tr>
                        <tr><td>تحتاج حدث (hover, click)</td><td>تبدأ تلقائياً</td></tr>
                        <tr><td>من حالة A إلى B</td><td>حالات متعددة</td></tr>
                        <tr><td>مرة واحدة</td><td>يمكن تكرارها</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "@keyframes",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🎞️</span> @keyframes</h2>
                <p class="lesson-subtitle">تعريف مراحل الحركة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="comment">/* تعريف الحركة */</span>
<span class="tag">@keyframes</span> <span class="value">bounce</span> {
  <span class="attr">0%</span> {
    <span class="attr">transform</span>: <span class="value">translateY(0)</span>;
  }
  <span class="attr">50%</span> {
    <span class="attr">transform</span>: <span class="value">translateY(-30px)</span>;
  }
  <span class="attr">100%</span> {
    <span class="attr">transform</span>: <span class="value">translateY(0)</span>;
  }
}

<span class="comment">/* تطبيق الحركة */</span>
<span class="tag">.bouncing</span> {
  <span class="attr">animation</span>: <span class="value">bounce 1s infinite</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">كرة تقفز</span>
                    <div style="width:50px;height:50px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;animation:bounceDemo 1s infinite;margin:20px auto;">
                    </div>
                    <style>
                        @keyframes bounceDemo {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-20px); }
                        }
                    </style>
                </div>
            </div>
        `
    },
    {
        title: "خصائص Animation",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">⚙️</span> خصائص Animation</h2>
                <p class="lesson-subtitle">التحكم الكامل في الحركة</p>
                
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">.animated</span> {
  <span class="comment">/* الاختصار */</span>
  <span class="attr">animation</span>: <span class="value">name 2s ease 0s infinite alternate</span>;
  
  <span class="comment">/* بالتفصيل */</span>
  <span class="attr">animation-name</span>: <span class="value">bounce</span>;
  <span class="attr">animation-duration</span>: <span class="value">2s</span>;
  <span class="attr">animation-timing-function</span>: <span class="value">ease</span>;
  <span class="attr">animation-delay</span>: <span class="value">0s</span>;
  <span class="attr">animation-iteration-count</span>: <span class="value">infinite</span>;
  <span class="attr">animation-direction</span>: <span class="value">alternate</span>;
}</pre></div>
                </div>

                <h3>🔄 animation-direction</h3>
                <div class="elements-table">
                    <table>
                        <tr><th>القيمة</th><th>الوصف</th></tr>
                        <tr><td><code>normal</code></td><td>من 0% إلى 100%</td></tr>
                        <tr><td><code>reverse</code></td><td>من 100% إلى 0%</td></tr>
                        <tr><td><code>alternate</code></td><td>يتبدل كل دورة</td></tr>
                    </table>
                </div>
            </div>
        `
    },
    {
        title: "أمثلة شائعة",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">💫</span> حركات شائعة</h2>
                <p class="lesson-subtitle">أمثلة جاهزة للاستخدام</p>
                
                <h3>🔄 Spin (دوران)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">@keyframes</span> <span class="value">spin</span> {
  <span class="attr">from</span> { <span class="attr">transform</span>: <span class="value">rotate(0deg)</span>; }
  <span class="attr">to</span> { <span class="attr">transform</span>: <span class="value">rotate(360deg)</span>; }
}

<span class="tag">.spinner</span> {
  <span class="attr">animation</span>: <span class="value">spin 1s linear infinite</span>;
}</pre></div>
                </div>

                <h3>💓 Pulse (نبض)</h3>
                <div class="code-box">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">نسخ</button></div>
                    <div class="code-content"><pre><span class="tag">@keyframes</span> <span class="value">pulse</span> {
  <span class="attr">0%, 100%</span> { <span class="attr">transform</span>: <span class="value">scale(1)</span>; }
  <span class="attr">50%</span> { <span class="attr">transform</span>: <span class="value">scale(1.1)</span>; }
}

<span class="tag">.pulsing</span> {
  <span class="attr">animation</span>: <span class="value">pulse 1.5s ease infinite</span>;
}</pre></div>
                </div>

                <div class="live-preview">
                    <span class="preview-label">أمثلة متحركة</span>
                    <div style="display:flex;gap:30px;justify-content:center;padding:20px;">
                        <div style="width:40px;height:40px;border:4px solid #667eea;border-top-color:transparent;border-radius:50%;animation:spinDemo 1s linear infinite;"></div>
                        <div style="width:50px;height:50px;background:#e74c3c;border-radius:50%;animation:pulseDemo 1.5s ease infinite;"></div>
                    </div>
                    <style>
                        @keyframes spinDemo { to { transform: rotate(360deg); } }
                        @keyframes pulseDemo { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
                    </style>
                </div>
            </div>
        `
    },
    {
        title: "تجربة عملية",
        content: `
            <div class="lesson-card">
                <h2><span class="emoji">🧪</span> تجربة Animations</h2>
                <p class="lesson-subtitle">صممي حركة خاصة!</p>
                
                <div class="interactive-editor">
                    <div class="editor-header">
                        <h4>✏️ محرر الحركات</h4>
                        <button class="run-btn" onclick="runCSSCode()">▶ تشغيل</button>
                    </div>
                    <div class="editor-body">
                        <div class="code-editor">
                            <textarea id="css-input">@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.floating-box {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  animation: float 3s ease-in-out infinite;
  max-width: 200px;
  margin: 20px auto;
  box-shadow: 0 10px 30px rgba(102,126,234,0.4);
}

.floating-box .icon {
  font-size: 40px;
}</textarea>
                        </div>
                        <div class="preview-area">
                            <div id="css-preview-output">
                                <div class="floating-box">
                                    <div class="icon">🚀</div>
                                    <p style="margin:10px 0 0;">صندوق عائم!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tip-box">
                    <span class="icon">🎉</span>
                    <p>رائع! أكملتِ اليوم الثالث عشر - Animations!</p>
                </div>
            </div>
        `
    }
];
