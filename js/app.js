// ========================================
// التطبيق الرئيسي المحسن
// ========================================

// متغيرات عامة
let currentCourse = 'html'; // html or css
let currentDay = 1;
let currentLessonIndex = 0;
let completedLessons = new Set();
let currentQuizAnswers = {};

// خريطة أيام HTML
const htmlDaysInfo = {
    1: { badge: 'اليوم الأول', title: 'مقدمة HTML وبنية المستند', lessons: day1Lessons, icon: '🏗️' },
    2: { badge: 'اليوم الثاني', title: 'تنسيق النصوص والقوائم', lessons: day2Lessons, icon: '📝' },
    3: { badge: 'اليوم الثالث', title: 'الروابط والصور', lessons: day3Lessons, icon: '🔗' },
    4: { badge: 'اليوم الرابع', title: 'الجداول', lessons: day4Lessons, icon: '📊' },
    5: { badge: 'اليوم الخامس', title: 'النماذج - الجزء الأول', lessons: day5Lessons, icon: '📋' },
    6: { badge: 'اليوم السادس', title: 'النماذج + Semantic HTML', lessons: day6Lessons, icon: '🧩' },
    7: { badge: 'اليوم السابع', title: 'الوسائط والمشروع النهائي', lessons: day7Lessons, icon: '🎬' }
};

// خريطة أيام CSS
const cssDaysInfo = {
    1: { badge: 'اليوم الأول', title: 'مقدمة CSS والمحددات', lessons: cssDay1Lessons, icon: '🎨' },
    2: { badge: 'اليوم الثاني', title: 'الألوان والخلفيات', lessons: cssDay2Lessons, icon: '🌈' },
    3: { badge: 'اليوم الثالث', title: 'Box Model والمسافات', lessons: cssDay3Lessons, icon: '📦' },
    4: { badge: 'اليوم الرابع', title: 'Typography والخطوط', lessons: cssDay4Lessons, icon: '🔤' },
    5: { badge: 'اليوم الخامس', title: 'المحددات المتقدمة', lessons: cssDay5Lessons, icon: '🎯' },
    6: { badge: 'اليوم السادس', title: 'Position والترتيب', lessons: cssDay6Lessons, icon: '📍' },
    7: { badge: 'اليوم السابع', title: 'Flexbox الأساسي', lessons: cssDay7Lessons, icon: '📐' },
    8: { badge: 'اليوم الثامن', title: 'Flexbox المتقدم', lessons: cssDay8Lessons, icon: '🔧' },
    9: { badge: 'اليوم التاسع', title: 'CSS Grid الأساسي', lessons: cssDay9Lessons, icon: '🔲' },
    10: { badge: 'اليوم العاشر', title: 'CSS Grid المتقدم', lessons: cssDay10Lessons, icon: '⚡' },
    11: { badge: 'اليوم الحادي عشر', title: 'Responsive Design', lessons: cssDay11Lessons, icon: '📱' },
    12: { badge: 'اليوم الثاني عشر', title: 'Transitions والتأثيرات', lessons: cssDay12Lessons, icon: '✨' },
    13: { badge: 'اليوم الثالث عشر', title: 'CSS Animations', lessons: cssDay13Lessons, icon: '🎬' },
    14: { badge: 'اليوم الرابع عشر', title: 'Variables والمشروع', lessons: cssDay14Lessons, icon: '🏆' }
};

// للتوافق مع الكود القديم
let daysInfo = htmlDaysInfo;

// الحصول على معلومات الدورة الحالية
function getCurrentDaysInfo() {
    return currentCourse === 'css' ? cssDaysInfo : htmlDaysInfo;
}

function getTotalDays() {
    return currentCourse === 'css' ? 14 : 7;
}

function getCurrentQuizzes() {
    return currentCourse === 'css' ? cssQuizzes : quizzes;
}

function getCurrentGlossary() {
    return currentCourse === 'css' ? cssGlossary : glossaryTerms;
}

// ========================================
// اختيار الدورة
// ========================================

function selectCourse(course) {
    currentCourse = course;
    daysInfo = getCurrentDaysInfo();

    // تحديث الأزرار النشطة
    document.getElementById('course-html').classList.toggle('active', course === 'html');
    document.getElementById('course-css').classList.toggle('active', course === 'css');

    // تحديث شبكة الأيام
    updateDaysGrid();

    // تحديث عنوان القاموس
    const glossaryTitle = document.querySelector('#glossary-modal .modal-header h2');
    if (glossaryTitle) {
        glossaryTitle.textContent = course === 'css' ? '📖 قاموس مصطلحات CSS' : '📖 قاموس مصطلحات HTML';
    }

    // تحديث عرض الأيام المكتملة
    updateStatsDisplay();
}

function updateDaysGrid() {
    const grid = document.querySelector('.days-grid');
    const days = getCurrentDaysInfo();
    const totalDays = getTotalDays();

    let html = '';
    for (let day = 1; day <= totalDays; day++) {
        const info = days[day];
        const isFinal = day === totalDays;
        html += `
            <button class="day-card ${isFinal ? 'day-card-final' : ''}" onclick="selectDay(${day})" id="day-card-${day}">
                <div class="day-badge-icon" id="badge-${day}"></div>
                <span class="day-number">${String(day).padStart(2, '0')}</span>
                <div class="day-info">
                    <span class="day-title">${info.badge}</span>
                    <span class="day-desc">${info.title}</span>
                    <div class="day-progress-mini" id="progress-mini-${day}"></div>
                </div>
                <span class="day-icon">${info.icon}</span>
            </button>
        `;
    }
    grid.innerHTML = html;

    // تحديث شارات الإكمال
    updateDayCards();
}

function updateDayCards() {
    const progress = loadProgress();
    const courseProgress = currentCourse === 'css' ? (progress.css || {}) : progress;
    const completedDays = courseProgress.completedDays || [];
    const totalDays = getTotalDays();

    for (let day = 1; day <= totalDays; day++) {
        const badge = document.getElementById(`badge-${day}`);
        const card = document.getElementById(`day-card-${day}`);
        if (badge && completedDays.includes(day)) {
            badge.innerHTML = '✅';
            if (card) card.classList.add('completed');
        }
    }
}

// ========================================
// التنقل الرئيسي
// ========================================

function selectDay(day) {
    currentDay = day;
    currentLessonIndex = 0;
    completedLessons.clear();
    daysInfo = getCurrentDaysInfo();

    markDayVisited(day);

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    updateDayInfo();
    buildLessonsNav();
    showLesson(0);
    updatePointsDisplay();
}

function updateDayInfo() {
    const info = getCurrentDaysInfo()[currentDay];
    document.getElementById('current-day-badge').textContent = info.badge;
    document.getElementById('current-day-title').textContent = info.title;
}

function buildLessonsNav() {
    const nav = document.getElementById('lessons-nav');
    const lessons = getCurrentDaysInfo()[currentDay].lessons;

    // إضافة زر الاختبار في النهاية
    const lessonsHtml = lessons.map((lesson, index) => `
        <button class="lesson-tab ${index === 0 ? 'active' : ''}" 
                onclick="showLesson(${index})" data-index="${index}">
            ${lesson.title}
        </button>
    `).join('');

    const quizBtn = `
        <button class="lesson-tab quiz-tab" onclick="openDayQuiz()" data-quiz="true">
            📝 اختبار
        </button>
    `;

    nav.innerHTML = lessonsHtml + quizBtn;
}

function showLesson(index) {
    const lessons = getCurrentDaysInfo()[currentDay].lessons;
    if (index < 0 || index >= lessons.length) return;

    currentLessonIndex = index;

    const content = document.getElementById('lesson-content');
    content.innerHTML = lessons[index].content;
    content.scrollTop = 0;

    // إضافة نقاط عند زيارة درس جديد (يتم التحقق من التكرار داخل addPoints)
    addPoints(5, false, `${currentCourse}_day${currentDay}_lesson${index}`);

    updateTabs();
    updateNavigationButtons();
    updateProgress();

    // تسجيل إكمال الدرس
    if (!completedLessons.has(index)) {
        completedLessons.add(index);
        markLessonComplete(currentDay, index, lessons.length);
    }

    // تشغيل الكود إذا كان هناك محرر HTML
    setTimeout(() => {
        if (document.getElementById('code-input')) runCode();
        if (document.getElementById('css-input')) runCSSCode();
    }, 100);
}

function updateTabs() {
    document.querySelectorAll('.lesson-tab:not(.quiz-tab)').forEach((tab, index) => {
        tab.classList.remove('active');
        if (index === currentLessonIndex) tab.classList.add('active');
        if (completedLessons.has(index) && index !== currentLessonIndex) tab.classList.add('completed');
    });
}

function updateNavigationButtons() {
    const lessons = getCurrentDaysInfo()[currentDay].lessons;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessons.length - 1;

    nextBtn.innerHTML = currentLessonIndex === lessons.length - 1
        ? '📝 خذي الاختبار!'
        : 'الدرس التالي <span>→</span>';

    if (currentLessonIndex === lessons.length - 1) {
        nextBtn.onclick = openDayQuiz;
        nextBtn.disabled = false;
    } else {
        nextBtn.onclick = nextLesson;
    }
}

function updateProgress() {
    const lessons = getCurrentDaysInfo()[currentDay].lessons;
    const progress = ((currentLessonIndex + 1) / lessons.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
}

function previousLesson() {
    if (currentLessonIndex > 0) {
        showLesson(currentLessonIndex - 1);
    }
}

function nextLesson() {
    const lessons = getCurrentDaysInfo()[currentDay].lessons;
    if (currentLessonIndex < lessons.length - 1) {
        showLesson(currentLessonIndex + 1);
    }
}

function goBack() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    updateStatsDisplay();
}

// ========================================
// الكود والنسخ
// ========================================

function copyCode(button) {
    const code = button.closest('.code-box').querySelector('pre').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const original = button.textContent;
        button.textContent = 'تم النسخ!';
        button.style.background = 'var(--accent)';
        button.style.color = 'white';
        setTimeout(() => {
            button.textContent = original;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    });
}

function runCode() {
    const input = document.getElementById('code-input');
    const output = document.getElementById('preview-output');
    if (!input || !output) return;

    markCodeRun();

    let code = input.value;
    const bodyMatch = code.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    output.innerHTML = bodyMatch ? bodyMatch[1] : code;
}

// تشغيل CSS في المحرر التفاعلي
function runCSSCode() {
    const input = document.getElementById('css-input');
    const output = document.getElementById('css-preview-output');
    if (!input || !output) return;

    markCodeRun();

    // إزالة الستايل القديم
    const oldStyle = document.getElementById('css-preview-style');
    if (oldStyle) oldStyle.remove();

    // إنشاء ستايل جديد
    const style = document.createElement('style');
    style.id = 'css-preview-style';
    style.textContent = input.value;
    output.appendChild(style);
}

// ========================================
// تغيير حجم الخط
// ========================================

let currentFontSize = 16;

function changeFontSize(delta) {
    currentFontSize = Math.min(24, Math.max(12, currentFontSize + delta));
    document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
    document.querySelector('.lesson-content').style.fontSize = `${currentFontSize}px`;
    saveFontSize(currentFontSize);
}

// ========================================
// نظام الاختبارات
// ========================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function openDayQuiz() {
    const quiz = getCurrentQuizzes()[currentDay];
    if (!quiz) return;

    currentQuizAnswers = {};

    const quizBody = document.getElementById('quiz-body');
    quizBody.innerHTML = quiz.map((q, qIndex) => `
        <div class="quiz-question" data-question="${qIndex}">
            <h4>${qIndex + 1}. ${escapeHtml(q.question)}</h4>
            <div class="quiz-options">
                ${q.options.map((opt, oIndex) => `
                    <div class="quiz-option" onclick="selectQuizOption(${qIndex}, ${oIndex})" data-option="${oIndex}">
                        ${escapeHtml(opt)}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.getElementById('submit-quiz').style.display = 'block';
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function selectQuizOption(questionIndex, optionIndex) {
    currentQuizAnswers[questionIndex] = optionIndex;

    // تحديث التحديد المرئي
    const question = document.querySelector(`.quiz-question[data-question="${questionIndex}"]`);
    question.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === optionIndex);
    });
}

function submitQuiz() {
    const quiz = getCurrentQuizzes()[currentDay];
    let correct = 0;

    quiz.forEach((q, qIndex) => {
        const question = document.querySelector(`.quiz-question[data-question="${qIndex}"]`);
        const selectedOption = currentQuizAnswers[qIndex];

        question.querySelectorAll('.quiz-option').forEach((opt, oIndex) => {
            opt.classList.remove('selected');
            if (oIndex === q.correct) {
                opt.classList.add('correct');
            } else if (oIndex === selectedOption && oIndex !== q.correct) {
                opt.classList.add('wrong');
            }
        });

        if (selectedOption === q.correct) {
            correct++;
        }
    });

    const total = quiz.length;
    const points = correct * POINTS_PER_QUESTION + (correct === total ? BONUS_PERFECT_SCORE : 0);
    addPoints(points);

    if (correct >= total / 2) {
        markQuizPassed(currentDay, correct, total);
    } else {
    }

    // عرض النتيجة
    const quizBody = document.getElementById('quiz-body');
    quizBody.innerHTML = `
        <div class="quiz-result">
            <div class="quiz-score">${correct}/${total}</div>
            <div class="quiz-score-label">إجابات صحيحة</div>
            <p style="margin-top:20px;color:var(--text-secondary)">
                ${correct === total ? '🎉 ممتازة! درجة كاملة!' :
            correct >= total / 2 ? '👍 أحسنتِ! اجتزتِ الاختبار' :
                '💪 حاولي مرة أخرى بعد مراجعة الدروس'}
            </p>
            <p style="color:var(--gold);font-weight:600;margin-top:10px">+${points} نقطة</p>
        </div>
    `;

    document.getElementById('submit-quiz').style.display = 'none';
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

// ========================================
// القاموس
// ========================================

function openGlossary() {
    const terms = getCurrentGlossary();
    renderGlossary(terms);
    document.getElementById('glossary-modal').classList.remove('hidden');
}

function renderGlossary(terms) {
    const glossaryBody = document.getElementById('glossary-body');
    // تحقق من وجود خاصية code (موجودة في HTML glossary فقط)
    const hasCode = terms.length > 0 && terms[0].code !== undefined;

    glossaryBody.innerHTML = terms.map(item => `
        <div class="glossary-item">
            <div class="glossary-term">
                ${item.term}
                ${hasCode ? `<code>${escapeHtml(item.code)}</code>` : ''}
            </div>
            <div class="glossary-def">${item.definition}</div>
        </div>
    `).join('');
}

function filterGlossary() {
    const search = document.getElementById('glossary-search').value.toLowerCase();
    const terms = getCurrentGlossary();
    const hasCode = terms.length > 0 && terms[0].code !== undefined;

    const filtered = terms.filter(item =>
        item.term.toLowerCase().includes(search) ||
        (hasCode && item.code && item.code.toLowerCase().includes(search)) ||
        item.definition.toLowerCase().includes(search)
    );
    renderGlossary(filtered);
}

function closeGlossary() {
    document.getElementById('glossary-modal').classList.add('hidden');
}

// ========================================
// الإنجازات
// ========================================

function openAchievements() {
    const progress = loadProgress();
    const achievementsBody = document.getElementById('achievements-body');

    achievementsBody.innerHTML = achievements.map(ach => {
        const unlocked = progress.unlockedAchievements.includes(ach.id);
        return `
            <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                <span class="icon">${ach.icon}</span>
                <div class="name">${ach.name}</div>
                <div class="desc">${unlocked ? ach.description : '???'}</div>
            </div>
        `;
    }).join('');

    document.getElementById('achievements-modal').classList.remove('hidden');
}

function closeAchievements() {
    document.getElementById('achievements-modal').classList.add('hidden');
}

// ========================================
// أحداث عامة
// ========================================

// تنقل بلوحة المفاتيح
document.addEventListener('keydown', (e) => {
    if (document.querySelector('.modal:not(.hidden)')) return;

    if (e.key === 'ArrowLeft') nextLesson();
    else if (e.key === 'ArrowRight') previousLesson();
    else if (e.key === 'Escape') goBack();
});

// تشغيل الكود عند الكتابة
document.addEventListener('input', (e) => {
    if (e.target.id === 'code-input') runCode();
    if (e.target.id === 'css-input') runCSSCode();
});

// إغلاق النوافذ بالنقر خارجها
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// تهيئة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    currentFontSize = loadFontSize();
    updateStatsDisplay();
});
