// ========================================
// التطبيق الرئيسي المحسن
// ========================================

// متغيرات عامة
let currentDay = 1;
let currentLessonIndex = 0;
let completedLessons = new Set();
let currentQuizAnswers = {};

// خريطة الأيام
const daysInfo = {
    1: { badge: 'اليوم الأول', title: 'مقدمة HTML وبنية المستند', lessons: day1Lessons },
    2: { badge: 'اليوم الثاني', title: 'تنسيق النصوص والقوائم', lessons: day2Lessons },
    3: { badge: 'اليوم الثالث', title: 'الروابط والصور', lessons: day3Lessons },
    4: { badge: 'اليوم الرابع', title: 'الجداول', lessons: day4Lessons },
    5: { badge: 'اليوم الخامس', title: 'النماذج - الجزء الأول', lessons: day5Lessons },
    6: { badge: 'اليوم السادس', title: 'النماذج + Semantic HTML', lessons: day6Lessons },
    7: { badge: 'اليوم السابع', title: 'الوسائط والمشروع النهائي', lessons: day7Lessons }
};

// ========================================
// التنقل الرئيسي
// ========================================

function selectDay(day) {
    currentDay = day;
    currentLessonIndex = 0;
    completedLessons.clear();

    markDayVisited(day);

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    updateDayInfo();
    buildLessonsNav();
    showLesson(0);
    updatePointsDisplay();
}

function updateDayInfo() {
    const info = daysInfo[currentDay];
    document.getElementById('current-day-badge').textContent = info.badge;
    document.getElementById('current-day-title').textContent = info.title;
}

function buildLessonsNav() {
    const nav = document.getElementById('lessons-nav');
    const lessons = daysInfo[currentDay].lessons;

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
    const lessons = daysInfo[currentDay].lessons;
    if (index < 0 || index >= lessons.length) return;

    currentLessonIndex = index;

    const content = document.getElementById('lesson-content');
    content.innerHTML = lessons[index].content;
    content.scrollTop = 0;

    // إضافة نقاط عند زيارة درس جديد (يتم التحقق من التكرار داخل addPoints)
    addPoints(5, false, `day${currentDay}_lesson${index}`);

    updateTabs();
    updateNavigationButtons();
    updateProgress();

    // تسجيل إكمال الدرس
    if (!completedLessons.has(index)) {
        completedLessons.add(index);
        markLessonComplete(currentDay, index, lessons.length);
    }

    // تشغيل الكود إذا كان هناك محرر
    setTimeout(() => {
        if (document.getElementById('code-input')) runCode();
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
    const lessons = daysInfo[currentDay].lessons;
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
    const lessons = daysInfo[currentDay].lessons;
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
    const lessons = daysInfo[currentDay].lessons;
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
    const quiz = quizzes[currentDay];
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
    const quiz = quizzes[currentDay];
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
    const glossaryBody = document.getElementById('glossary-body');
    renderGlossary(glossaryTerms);
    document.getElementById('glossary-modal').classList.remove('hidden');
}

function renderGlossary(terms) {
    const glossaryBody = document.getElementById('glossary-body');
    glossaryBody.innerHTML = terms.map(item => `
        <div class="glossary-item">
            <div class="glossary-term">
                ${item.term}
                <code>${escapeHtml(item.code)}</code>
            </div>
            <div class="glossary-def">${item.definition}</div>
        </div>
    `).join('');
}

function filterGlossary() {
    const search = document.getElementById('glossary-search').value.toLowerCase();
    const filtered = glossaryTerms.filter(item =>
        item.term.toLowerCase().includes(search) ||
        item.code.toLowerCase().includes(search) ||
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
