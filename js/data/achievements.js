// ========================================
// نظام الإنجازات
// ========================================

const achievements = [
    {
        id: "first_lesson",
        name: "البداية",
        icon: "🌟",
        description: "أكملتِ أول درس",
        condition: (stats) => stats.lessonsCompleted >= 1
    },
    {
        id: "day1_complete",
        name: "يوم واحد",
        icon: "📗",
        description: "أكملتِ اليوم الأول",
        condition: (stats) => stats.daysCompleted.includes(1)
    },
    {
        id: "day2_complete",
        name: "يومان",
        icon: "📘",
        description: "أكملتِ اليوم الثاني",
        condition: (stats) => stats.daysCompleted.includes(2)
    },
    {
        id: "day3_complete",
        name: "ثلاثة أيام",
        icon: "📙",
        description: "أكملتِ اليوم الثالث",
        condition: (stats) => stats.daysCompleted.includes(3)
    },
    {
        id: "halfway",
        name: "نصف الطريق",
        icon: "🎯",
        description: "أكملتِ نصف الدروس",
        condition: (stats) => stats.daysCompleted.length >= 4
    },
    {
        id: "all_days",
        name: "الإتمام",
        icon: "🏆",
        description: "أكملتِ كل الأيام السبعة!",
        condition: (stats) => stats.daysCompleted.length === 7
    },
    {
        id: "first_quiz",
        name: "أول اختبار",
        icon: "📝",
        description: "اجتزتِ أول اختبار",
        condition: (stats) => stats.quizzesPassed >= 1
    },
    {
        id: "quiz_master",
        name: "متفوقة",
        icon: "🎓",
        description: "اجتزتِ 5 اختبارات",
        condition: (stats) => stats.quizzesPassed >= 5
    },
    {
        id: "perfect_quiz",
        name: "درجة كاملة",
        icon: "💯",
        description: "حصلتِ على درجة كاملة في اختبار",
        condition: (stats) => stats.perfectQuizzes >= 1
    },
    {
        id: "points_100",
        name: "100 نقطة",
        icon: "⭐",
        description: "جمعتِ 100 نقطة",
        condition: (stats) => stats.totalPoints >= 100
    },
    {
        id: "points_500",
        name: "500 نقطة",
        icon: "🌟",
        description: "جمعتِ 500 نقطة",
        condition: (stats) => stats.totalPoints >= 500
    },
    {
        id: "points_1000",
        name: "ألف نقطة",
        icon: "✨",
        description: "جمعتِ 1000 نقطة",
        condition: (stats) => stats.totalPoints >= 1000
    },
    {
        id: "code_runner",
        name: "مبرمجة",
        icon: "💻",
        description: "شغلتِ الكود 10 مرات",
        condition: (stats) => stats.codeRuns >= 10
    },
    {
        id: "explorer",
        name: "مستكشفة",
        icon: "🔍",
        description: "زرتِ كل الأيام",
        condition: (stats) => stats.daysVisited.length === 7
    },
    {
        id: "fast_learner",
        name: "سريعة التعلم",
        icon: "⚡",
        description: "أكملتِ 3 دروس في جلسة واحدة",
        condition: (stats) => stats.lessonsInSession >= 3
    },
    {
        id: "dedicated",
        name: "مثابرة",
        icon: "💪",
        description: "قضيتِ أكثر من 30 دقيقة",
        condition: (stats) => stats.timeSpent >= 30
    }
];
