// ========================================
// نظام حفظ التقدم (localStorage)
// ========================================

const STORAGE_KEY = 'etra_html_lessons';

const defaultProgress = {
    totalPoints: 0,
    lessonsCompleted: 0,
    daysCompleted: [],
    daysVisited: [],
    daysProgress: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    quizzesPassed: 0,
    perfectQuizzes: 0,
    unlockedAchievements: [],
    codeRuns: 0,
    lessonsInSession: 0,
    timeSpent: 0,
    startTime: null,
    fontSize: 16,
    lastDay: 1,
    lastLesson: 0,
    earnedPointsLessons: [] // تخزين الدروس التي تم منح نقاط عليها
};

// فحص توفر LocalStorage
const isStorageAvailable = (() => {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
})();

// حفظ التقدم
function saveProgress(progress) {
    if (!isStorageAvailable) return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.warn('Storage save failed:', e);
    }
}

// تحميل التقدم
function loadProgress() {
    if (!isStorageAvailable) return { ...defaultProgress };
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...defaultProgress, ...parsed };
        }
    } catch (e) {
        console.warn('LocalStorage load failed, using defaults');
    }
    return { ...defaultProgress };
}

// إضافة نقاط
function addPoints(amount, skipCheck = false, lessonSource = null) {
    const progress = loadProgress();

    // منع تكرار النقاط من نفس المصدر (مثل درس معين)
    if (lessonSource) {
        if (progress.earnedPointsLessons.includes(lessonSource)) return progress.totalPoints;
        progress.earnedPointsLessons.push(lessonSource);
    }

    progress.totalPoints += amount;
    saveProgress(progress);
    updatePointsDisplay();

    if (!skipCheck) {
        setTimeout(checkAchievements, 100);
    }
    return progress.totalPoints;
}

// تسجيل درس مكتمل
function markLessonComplete(day, lessonIndex, totalLessons) {
    const progress = loadProgress();
    progress.lessonsCompleted++;
    progress.lessonsInSession++;

    // حساب نسبة اليوم
    const dayProgress = ((lessonIndex + 1) / totalLessons) * 100;
    progress.daysProgress[day] = Math.max(progress.daysProgress[day] || 0, dayProgress);

    // إذا اكتمل اليوم
    if (dayProgress >= 100 && !progress.daysCompleted.includes(day)) {
        progress.daysCompleted.push(day);
        addPoints(50); // مكافأة إكمال اليوم
    }

    saveProgress(progress);
    updateStatsDisplay();
    checkAchievements();
}

// تسجيل زيارة يوم
function markDayVisited(day) {
    const progress = loadProgress();
    if (!progress.daysVisited.includes(day)) {
        progress.daysVisited.push(day);
        saveProgress(progress);
    }
}

// تسجيل اجتياز اختبار
function markQuizPassed(day, score, total) {
    const progress = loadProgress();
    progress.quizzesPassed++;

    if (score === total) {
        progress.perfectQuizzes++;
    }

    saveProgress(progress);
    checkAchievements();
}

// تسجيل تشغيل كود
function markCodeRun() {
    const progress = loadProgress();
    progress.codeRuns++;
    saveProgress(progress);
    checkAchievements();
}

// التحقق من الإنجازات
function checkAchievements() {
    const progress = loadProgress();
    const stats = { ...progress };
    let hasChanges = false;

    achievements.forEach(achievement => {
        if (!progress.unlockedAchievements.includes(achievement.id)) {
            if (achievement.condition(stats)) {
                progress.unlockedAchievements.push(achievement.id);
                showAchievementNotification(achievement.name);
                progress.totalPoints += 25; // مكافأة الإنجاز
                hasChanges = true;
            }
        }
    });

    if (hasChanges) {
        saveProgress(progress);
        updateStatsDisplay();
        updatePointsDisplay();
        // فحص مرة أخرى للأهداف المتتابعة
        setTimeout(checkAchievements, 500);
    }
}

// فتح إنجاز
function unlockAchievement(achievement) {
    // تم نقل المنطق لـ checkAchievements لضمان وحدة البيانات
}

// عرض إشعار الإنجاز
function showAchievementNotification(name) {
    const notification = document.getElementById('achievement-notification');
    const nameEl = document.getElementById('achievement-name');

    nameEl.textContent = name;
    notification.classList.remove('hidden');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.classList.add('hidden'), 500);
    }, 3000);
}

// تحديث عرض الإحصائيات
function updateStatsDisplay() {
    const progress = loadProgress();

    const totalPointsEl = document.getElementById('total-points');
    const totalBadgesEl = document.getElementById('total-badges');
    const completedDaysEl = document.getElementById('completed-days');

    if (totalPointsEl) totalPointsEl.textContent = progress.totalPoints;
    if (totalBadgesEl) totalBadgesEl.textContent = progress.unlockedAchievements.length;
    if (completedDaysEl) completedDaysEl.textContent = `${progress.daysCompleted.length}/7`;

    // تحديث شارات الأيام
    for (let i = 1; i <= 7; i++) {
        const badge = document.getElementById(`badge-${i}`);
        const card = document.getElementById(`day-card-${i}`);
        const progressMini = document.getElementById(`progress-mini-${i}`);

        if (badge && progress.daysCompleted.includes(i)) {
            badge.textContent = '✅';
            if (card) card.classList.add('completed');
        }

        if (progressMini) {
            const dayProgress = progress.daysProgress[i] || 0;
            progressMini.innerHTML = `<div class="progress-fill-mini" style="width: ${dayProgress}%"></div>`;
        }
    }
}

// تحديث عرض النقاط
function updatePointsDisplay() {
    const progress = loadProgress();
    const currentPointsEl = document.getElementById('current-points');
    const totalPointsEl = document.getElementById('total-points');

    [currentPointsEl, totalPointsEl].forEach(el => {
        if (el) {
            const oldValue = parseInt(el.textContent) || 0;
            if (oldValue !== progress.totalPoints) {
                el.textContent = progress.totalPoints;
                el.classList.add('points-bump');
                setTimeout(() => el.classList.remove('points-bump'), 400);
            }
        }
    });
}

// حفظ حجم الخط
function saveFontSize(size) {
    const progress = loadProgress();
    progress.fontSize = size;
    saveProgress(progress);
}

// تحميل حجم الخط
function loadFontSize() {
    const progress = loadProgress();
    return progress.fontSize || 16;
}

// تهيئة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    updateStatsDisplay();
    updatePointsDisplay();

    // تطبيق حجم الخط المحفوظ
    const fontSize = loadFontSize();
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
});
