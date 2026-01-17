// ========================================
// اختبارات دورة CSS
// ========================================

const cssQuizzes = {
    1: [
        {
            question: "ما الطريقة الأفضل لربط CSS بصفحة HTML؟",
            options: ["Inline CSS", "Internal CSS", "External CSS", "جميعها متساوية"],
            correct: 2
        },
        {
            question: "أي محدد له الأولوية الأعلى؟",
            options: ["Element Selector", "Class Selector", "ID Selector", "Universal Selector"],
            correct: 2
        },
        {
            question: "ما هو الفرق الأساسي بين Class و ID؟",
            options: ["لا يوجد فرق", "Class يستخدم مرة واحدة فقط", "ID يستخدم مرة واحدة فقط", "Class أسرع من ID"],
            correct: 2
        },
        {
            question: "ما معنى CSS؟",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
            correct: 1
        }
    ],
    2: [
        {
            question: "أي صيغة صحيحة للون HEX؟",
            options: ["#GGG", "#FF0000", "rgb#255", "hex(red)"],
            correct: 1
        },
        {
            question: "ما الفرق بين RGB و RGBA؟",
            options: ["لا فرق", "RGBA يدعم الشفافية", "RGB أسرع", "RGBA للألوان فقط"],
            correct: 1
        },
        {
            question: "ما الخاصية المستخدمة للتدرج اللوني؟",
            options: ["gradient-color", "background-gradient", "linear-gradient", "color-gradient"],
            correct: 2
        },
        {
            question: "ما قيمة الشفافية الكاملة في RGBA؟",
            options: ["0", "1", "100", "255"],
            correct: 0
        }
    ],
    3: [
        {
            question: "ما هي طبقات Box Model؟",
            options: ["Content, Border فقط", "Content, Padding, Border, Margin", "Margin, Border فقط", "Content, Margin فقط"],
            correct: 1
        },
        {
            question: "ما الفرق بين padding و margin؟",
            options: ["لا فرق", "padding داخلي، margin خارجي", "margin داخلي، padding خارجي", "كلاهما خارجي"],
            correct: 1
        },
        {
            question: "ما قيمة box-sizing المفضلة؟",
            options: ["content-box", "border-box", "padding-box", "margin-box"],
            correct: 1
        },
        {
            question: "كيف نوسّط عنصر أفقياً باستخدام margin؟",
            options: ["margin: center", "margin: 0 auto", "margin: auto 0", "margin: middle"],
            correct: 1
        }
    ],
    4: [
        {
            question: "أي وحدة الأفضل لحجم الخط؟",
            options: ["px", "em", "rem", "pt"],
            correct: 2
        },
        {
            question: "ما الخاصية التي تتحكم في سماكة الخط؟",
            options: ["font-size", "font-weight", "font-style", "font-family"],
            correct: 1
        },
        {
            question: "ما القيمة المثالية لـ line-height للقراءة؟",
            options: ["1.0", "1.5-1.8", "2.5", "0.5"],
            correct: 1
        },
        {
            question: "ما الخاصية التي تحول النص للأحرف الكبيرة؟",
            options: ["text-style", "text-transform", "text-case", "font-transform"],
            correct: 1
        }
    ],
    5: [
        {
            question: "ما الفرق بين > و (مسافة) في المحددات؟",
            options: ["لا فرق", "> للأبناء المباشرين، space لجميع الأحفاد", "space للأبناء المباشرين فقط", "> أسرع فقط"],
            correct: 1
        },
        {
            question: "ما المحدد [href$='.pdf']؟",
            options: ["روابط تبدأ بـ pdf", "روابط تنتهي بـ .pdf", "روابط تحتوي pdf", "جميع الروابط"],
            correct: 1
        },
        {
            question: "ما الفرق بين :hover و ::before؟",
            options: ["لا فرق", ":hover حالة، ::before عنصر وهمي", "::before حالة", "كلاهما حالات"],
            correct: 1
        },
        {
            question: "ما nth-child(odd)؟",
            options: ["العناصر الزوجية", "العناصر الفردية", "العنصر الأول فقط", "العنصر الأخير فقط"],
            correct: 1
        }
    ],
    6: [
        {
            question: "ما الفرق بين position: relative و absolute؟",
            options: ["لا فرق", "relative نسبة لموقعه الأصلي، absolute نسبة للأب", "absolute أسرع", "relative يخفي العنصر"],
            correct: 1
        },
        {
            question: "متى نستخدم position: fixed؟",
            options: ["لتثبيت العنصر أثناء التمرير", "لإخفاء العنصر", "للتوسيط فقط", "لتدوير العنصر"],
            correct: 0
        },
        {
            question: "z-index يعمل مع أي position؟",
            options: ["static فقط", "جميع القيم", "فقط غير static", "relative فقط"],
            correct: 2
        },
        {
            question: "كيف نوسّط عنصر absolute في المنتصف؟",
            options: ["margin: auto", "top: 50%; left: 50%; transform: translate(-50%, -50%)", "center: true", "position: center"],
            correct: 1
        }
    ],
    7: [
        {
            question: "ما خاصية display لتفعيل Flexbox؟",
            options: ["display: flexbox", "display: flex", "display: flexible", "flex: true"],
            correct: 1
        },
        {
            question: "ما justify-content: space-between؟",
            options: ["توسيط العناصر", "توزيع مع مسافات بين العناصر", "محاذاة لليمين", "محاذاة لليسار"],
            correct: 1
        },
        {
            question: "ما الفرق بين justify-content و align-items؟",
            options: ["لا فرق", "justify للمحور الرئيسي، align للعمودي", "align للمحور الرئيسي", "كلاهما للتوسيط"],
            correct: 1
        },
        {
            question: "ما خاصية gap في Flexbox؟",
            options: ["حجم العناصر", "المسافة بين العناصر", "عرض الحاوية", "لون الخلفية"],
            correct: 1
        }
    ],
    8: [
        {
            question: "ما flex-grow: 2 يعني؟",
            options: ["العنصر ينمو ضعف الآخرين", "العنصر بعرض 2px", "العنصر يتقلص", "العنصر مخفي"],
            correct: 0
        },
        {
            question: "ما خاصية order في Flexbox؟",
            options: ["ترتيب الألوان", "ترتيب العناصر بصرياً", "حجم العناصر", "سرعة الحركة"],
            correct: 1
        },
        {
            question: "ما flex: 1 يعني؟",
            options: ["grow: 1, shrink: 1, basis: 0", "عرض 1px", "عنصر واحد فقط", "ترتيب أول"],
            correct: 0
        },
        {
            question: "ما align-self؟",
            options: ["محاذاة جميع العناصر", "محاذاة عنصر واحد فقط", "توسيط الكل", "إخفاء العنصر"],
            correct: 1
        }
    ],
    9: [
        {
            question: "ما الفرق بين Flexbox و Grid؟",
            options: ["لا فرق", "Flexbox أحادي البعد، Grid ثنائي البعد", "Grid أحادي البعد", "Flexbox أقدم فقط"],
            correct: 1
        },
        {
            question: "ما وحدة fr في Grid؟",
            options: ["بكسل", "نسبة مئوية", "حصة من المساحة المتاحة", "فريم"],
            correct: 2
        },
        {
            question: "ما repeat(3, 1fr) يعني؟",
            options: ["3 أعمدة متساوية", "عمود بعرض 3fr", "3 صفوف", "تكرار 3 مرات فقط"],
            correct: 0
        },
        {
            question: "ما grid-template-columns؟",
            options: ["تحديد الصفوف", "تحديد الأعمدة", "تحديد المسافات", "تحديد الألوان"],
            correct: 1
        }
    ],
    10: [
        {
            question: "ما grid-column: span 2؟",
            options: ["عمودين بعرض 2px", "العنصر يمتد على عمودين", "العمود الثاني فقط", "إخفاء عمودين"],
            correct: 1
        },
        {
            question: "ما grid-template-areas؟",
            options: ["تحديد الألوان", "تسمية مناطق الشبكة", "تحديد المسافات", "تحديد الخطوط"],
            correct: 1
        },
        {
            question: "ما الفرق بين auto-fit و auto-fill؟",
            options: ["لا فرق", "auto-fit يمدد العناصر، auto-fill يحافظ على الفراغات", "auto-fill أسرع", "auto-fit للصور فقط"],
            correct: 1
        },
        {
            question: "ما minmax(200px, 1fr)؟",
            options: ["الحد الأدنى 200px والأقصى حصة متساوية", "عرض ثابت 200px", "200 عنصر", "fr واحد فقط"],
            correct: 0
        }
    ],
    11: [
        {
            question: "ما viewport meta tag؟",
            options: ["لون الصفحة", "تحديد عرض الشاشة للموبايل", "عنوان الصفحة", "رابط CSS"],
            correct: 1
        },
        {
            question: "ما معنى Mobile First؟",
            options: ["تصميم الموبايل أولاً ثم التوسيع", "إخفاء الموبايل", "موبايل فقط", "حذف الموبايل"],
            correct: 0
        },
        {
            question: "ما @media (min-width: 768px)؟",
            options: ["شاشات أصغر من 768px", "شاشات 768px وأكبر", "شاشات 768px فقط", "جميع الشاشات"],
            correct: 1
        },
        {
            question: "ما وحدة vw؟",
            options: ["نسبة من ارتفاع الشاشة", "نسبة من عرض الشاشة", "بكسل", "سنتيمتر"],
            correct: 1
        }
    ],
    12: [
        {
            question: "ما الفرق بين transition و animation؟",
            options: ["لا فرق", "transition تحتاج حدث، animation تلقائية", "animation تحتاج حدث", "transition أسرع"],
            correct: 1
        },
        {
            question: "ما transition: all 0.3s ease؟",
            options: ["جميع الخصائص تتحول في 0.3 ثانية بسلاسة", "لون واحد فقط", "بدون حركة", "حركة فورية"],
            correct: 0
        },
        {
            question: "ما transform: scale(1.5)؟",
            options: ["تكبير العنصر 1.5 مرة", "تدوير 1.5 درجة", "تحريك 1.5px", "شفافية 1.5"],
            correct: 0
        },
        {
            question: "ما transform: rotate(45deg)؟",
            options: ["تكبير 45 مرة", "تدوير 45 درجة", "تحريك 45px", "شفافية 45%"],
            correct: 1
        }
    ],
    13: [
        {
            question: "ما @keyframes؟",
            options: ["تعريف مراحل الحركة", "تعريف المتغيرات", "تعريف الألوان", "تعريف الخطوط"],
            correct: 0
        },
        {
            question: "ما animation-iteration-count: infinite؟",
            options: ["الحركة مرة واحدة", "الحركة تتكرر للأبد", "بدون حركة", "حركة سريعة"],
            correct: 1
        },
        {
            question: "ما animation-direction: alternate؟",
            options: ["الحركة تتبدل كل دورة", "الحركة للأمام فقط", "الحركة للخلف فقط", "بدون اتجاه"],
            correct: 0
        },
        {
            question: "ما الفرق بين 0% و from في keyframes؟",
            options: ["لا فرق، كلاهما نقطة البداية", "from أسرع", "0% للألوان فقط", "from للحركة فقط"],
            correct: 0
        }
    ],
    14: [
        {
            question: "كيف نعرّف متغير CSS؟",
            options: ["$variable", "@variable", "--variable", "var-variable"],
            correct: 2
        },
        {
            question: "كيف نستخدم متغير CSS؟",
            options: ["$variable", "@variable", "var(--variable)", "variable"],
            correct: 2
        },
        {
            question: "ما :root في CSS؟",
            options: ["عنصر الجذر (html)", "أول div", "آخر عنصر", "عنصر مخفي"],
            correct: 0
        },
        {
            question: "ما فائدة CSS Variables؟",
            options: ["سرعة فقط", "إعادة استخدام القيم وتغيير الثيم بسهولة", "للألوان فقط", "للخطوط فقط"],
            correct: 1
        }
    ]
};
