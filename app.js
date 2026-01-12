// متغيرات عامة
let currentDay = 1;
let currentLessonIndex = 0;
let completedLessons = new Set();

// تحديد اليوم
function selectDay(day) {
    currentDay = day;
    currentLessonIndex = 0;
    completedLessons.clear();

    // إخفاء شاشة الترحيب
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    // تحديث العنوان
    updateDayInfo();

    // بناء شريط الدروس
    buildLessonsNav();

    // عرض أول درس
    showLesson(0);
}

// تحديث معلومات اليوم
function updateDayInfo() {
    const dayBadge = document.getElementById('current-day-badge');
    const dayTitle = document.getElementById('current-day-title');

    if (currentDay === 1) {
        dayBadge.textContent = 'اليوم الأول';
        dayTitle.textContent = 'مقدمة HTML وبنية المستند';
    } else {
        dayBadge.textContent = 'اليوم الثاني';
        dayTitle.textContent = 'تنسيق النصوص والقوائم';
    }
}

// بناء شريط التنقل بين الدروس
function buildLessonsNav() {
    const nav = document.getElementById('lessons-nav');
    const lessons = currentDay === 1 ? day1Lessons : day2Lessons;

    nav.innerHTML = lessons.map((lesson, index) => `
        <button class="lesson-tab ${index === 0 ? 'active' : ''}" 
                onclick="showLesson(${index})"
                data-index="${index}">
            ${lesson.title}
        </button>
    `).join('');
}

// عرض درس معين
function showLesson(index) {
    const lessons = currentDay === 1 ? day1Lessons : day2Lessons;

    if (index < 0 || index >= lessons.length) return;

    // تحديث الدرس الحالي
    currentLessonIndex = index;

    // تحديث المحتوى
    const content = document.getElementById('lesson-content');
    content.innerHTML = lessons[index].content;
    content.scrollTop = 0;

    // تحديث التبويبات
    updateTabs();

    // تحديث أزرار التنقل
    updateNavigationButtons();

    // تحديث شريط التقدم
    updateProgress();

    // إضافة للدروس المكتملة
    completedLessons.add(index);

    // تشغيل الكود إذا كان هناك محرر
    setTimeout(() => {
        const editor = document.getElementById('code-input');
        if (editor) {
            runCode();
        }
    }, 100);
}

// تحديث التبويبات
function updateTabs() {
    const tabs = document.querySelectorAll('.lesson-tab');
    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if (index === currentLessonIndex) {
            tab.classList.add('active');
        }
        if (completedLessons.has(index) && index !== currentLessonIndex) {
            tab.classList.add('completed');
        }
    });
}

// تحديث أزرار التنقل
function updateNavigationButtons() {
    const lessons = currentDay === 1 ? day1Lessons : day2Lessons;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessons.length - 1;

    if (currentLessonIndex === lessons.length - 1) {
        nextBtn.innerHTML = '🎉 أكملتِ الدروس!';
    } else {
        nextBtn.innerHTML = 'الدرس التالي <span>→</span>';
    }
}

// تحديث شريط التقدم
function updateProgress() {
    const lessons = currentDay === 1 ? day1Lessons : day2Lessons;
    const progress = ((currentLessonIndex + 1) / lessons.length) * 100;

    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
}

// الدرس السابق
function previousLesson() {
    if (currentLessonIndex > 0) {
        showLesson(currentLessonIndex - 1);
    }
}

// الدرس التالي
function nextLesson() {
    const lessons = currentDay === 1 ? day1Lessons : day2Lessons;
    if (currentLessonIndex < lessons.length - 1) {
        showLesson(currentLessonIndex + 1);
    }
}

// العودة لشاشة الترحيب
function goBack() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// نسخ الكود
function copyCode(button) {
    const codeContent = button.closest('.code-box').querySelector('.code-content pre');
    const text = codeContent.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'تم النسخ!';
        button.style.background = 'var(--accent-color)';
        button.style.color = 'white';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    });
}

// تشغيل الكود في المحرر التفاعلي
function runCode() {
    const input = document.getElementById('code-input');
    const output = document.getElementById('preview-output');

    if (input && output) {
        // استخراج محتوى body فقط
        let code = input.value;
        const bodyMatch = code.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

        if (bodyMatch) {
            output.innerHTML = bodyMatch[1];
        } else {
            output.innerHTML = code;
        }
    }
}

// التعامل مع الكيبورد
document.addEventListener('keydown', (e) => {
    // السهم اليمين = السابق، السهم اليسار = التالي (للعربي)
    if (e.key === 'ArrowLeft') {
        nextLesson();
    } else if (e.key === 'ArrowRight') {
        previousLesson();
    }
});

// تحديث المعاينة عند الكتابة
document.addEventListener('input', (e) => {
    if (e.target.id === 'code-input') {
        runCode();
    }
});
