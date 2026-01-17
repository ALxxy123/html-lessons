<div align="center">

# 🎨 ETRA

### التمكين التقني | Technical Enablement

---

# خطة التدريب الشاملة

## CSS Fundamentals to Advanced

### من الصفر إلى الاحتراف في أسبوعين

---

| المدة | المستوى | المتطلبات | الساعات اليومية |
|:---:|:---:|:---:|:---:|
| 14 يوم | من الصفر | معرفة HTML الأساسية | 3-5 ساعات |

</div>

---

## 📑 فهرس المحتويات

1. [نظرة عامة على البرنامج](#-نظرة-عامة-على-البرنامج)
2. [الأهداف التعليمية](#-الأهداف-التعليمية)
3. [الأسبوع الأول: الأساسيات](#-الأسبوع-الأول-أساسيات-css-والتخطيط)
4. [الأسبوع الثاني: المتقدم](#-الأسبوع-الثاني-التقنيات-المتقدمة)
5. [المشاريع التطبيقية](#-المشاريع-التطبيقية)
6. [جدول الواجبات](#-جدول-الواجبات)
7. [المصادر التعليمية](#-المصادر-التعليمية)
8. [معايير التقييم](#-معايير-التقييم)
9. [نصائح للنجاح](#-نصائح-للنجاح)

---

## 📋 نظرة عامة على البرنامج

**CSS (Cascading Style Sheets)** هي اللغة المسؤولة عن تحويل صفحات HTML البسيطة إلى تصاميم جميلة وتفاعلية. هذا البرنامج مصمم لنقلك من الصفر إلى مستوى احترافي في أسبوعين مكثفين.

البرنامج مقسم إلى أسبوعين:
- **الأسبوع الأول**: يركز على الأساسيات والتخطيط
- **الأسبوع الثاني**: يركز على التقنيات المتقدمة والمشاريع العملية

كل يوم يتضمن موضوعاً محدداً، تمارين عملية، وواجب للتطبيق.

### هيكل البرنامج

| الأسبوع الأول 🔵 | الأسبوع الثاني 🟣 |
|---|---|
| يوم 1: أساسيات CSS والمحددات | يوم 8: Flexbox المتقدم |
| يوم 2: الألوان والخلفيات | يوم 9: CSS Grid الأساسي |
| يوم 3: Box Model والمسافات | يوم 10: CSS Grid المتقدم |
| يوم 4: Typography والخطوط | يوم 11: Responsive Design |
| يوم 5: المحددات المتقدمة | يوم 12: Transitions والتأثيرات |
| يوم 6: Position والترتيب | يوم 13: CSS Animations |
| يوم 7: Flexbox الأساسي | يوم 14: Variables + المشروع النهائي |

---

## 🎯 الأهداف التعليمية

### بنهاية هذا البرنامج ستكون قادراً على:

- ✅ فهم كيفية عمل CSS وكيفية ربطها بـ HTML
- ✅ استخدام جميع أنواع المحددات (Selectors) بكفاءة
- ✅ التحكم الكامل في الألوان والخلفيات والتدرجات
- ✅ إتقان Box Model والتحكم في المسافات
- ✅ تنسيق النصوص والخطوط باحترافية
- ✅ استخدام Position لترتيب العناصر
- ✅ بناء تخطيطات مرنة باستخدام Flexbox
- ✅ إنشاء شبكات معقدة باستخدام CSS Grid
- ✅ تصميم مواقع متجاوبة (Responsive)
- ✅ إضافة حركات وتأثيرات تفاعلية
- ✅ استخدام CSS Variables وأفضل الممارسات
- ✅ بناء مشاريع واقعية من الصفر

### مستويات الإتقان المتوقعة

| المهارة | المستوى |
|---|---|
| CSS Basics & Selectors | ⭐⭐⭐⭐⭐ متقدم |
| Colors & Backgrounds | ⭐⭐⭐⭐⭐ متقدم |
| Box Model & Spacing | ⭐⭐⭐⭐⭐ متقدم |
| Typography | ⭐⭐⭐⭐ متقدم |
| Flexbox | ⭐⭐⭐⭐⭐ متقدم |
| CSS Grid | ⭐⭐⭐⭐ متوسط-متقدم |
| Responsive Design | ⭐⭐⭐⭐ متقدم |
| Animations & Transitions | ⭐⭐⭐ متوسط |

---

<div align="center">

# 🔵 الأسبوع الأول: أساسيات CSS والتخطيط

</div>

---

## 📘 اليوم الأول: مقدمة CSS والمحددات الأساسية

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### ما هي CSS؟ ولماذا نحتاجها؟

CSS تعني **Cascading Style Sheets** (أوراق الأنماط المتتالية). هي اللغة التي تتحكم في شكل ومظهر صفحات الويب. بدون CSS، ستبدو جميع المواقع كمستندات نصية بسيطة.

**لماذا نحتاج CSS؟**
- فصل المحتوى (HTML) عن التصميم (CSS)
- إمكانية تغيير تصميم الموقع كاملاً من ملف واحد
- تصاميم متجاوبة تعمل على جميع الأجهزة
- تحسين تجربة المستخدم

#### طرق ربط CSS بـ HTML

هناك ثلاث طرق لربط CSS بصفحة HTML:

**1. Inline CSS (داخل العنصر)**
```html
<p style="color: blue; font-size: 16px;">نص أزرق</p>
```
- ✅ سريع للتعديلات الصغيرة
- ❌ صعب الصيانة، لا يُنصح به

**2. Internal CSS (داخل الصفحة)**
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```
- ✅ مناسب لصفحة واحدة
- ❌ لا يمكن إعادة استخدامه

**3. External CSS (ملف خارجي)** ⭐ الأفضل
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */
p {
  color: blue;
  font-size: 16px;
}
```
- ✅ أفضل طريقة للمشاريع
- ✅ سهل الصيانة وإعادة الاستخدام
- ✅ يُحسّن أداء الموقع (التخزين المؤقت)

#### بنية قاعدة CSS

```css
selector {
  property: value;
  property: value;
}
```

**مثال:**
```css
h1 {
  color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
}
```

#### المحددات الأساسية

**1. Element Selector (محدد العنصر)**
```css
p { color: blue; }
h1 { font-size: 32px; }
```

**2. Class Selector (محدد الكلاس)**
```css
.highlight { background-color: yellow; }
.btn { padding: 10px 20px; }
```
```html
<p class="highlight">نص مميز</p>
<button class="btn">زر</button>
```

**3. ID Selector (محدد المعرّف)**
```css
#header { background: #333; }
#main-content { padding: 20px; }
```
```html
<header id="header">...</header>
<main id="main-content">...</main>
```

#### الفرق بين Class و ID

| Class (.) | ID (#) |
|---|---|
| يمكن استخدامه عدة مرات | يُستخدم مرة واحدة فقط في الصفحة |
| أولوية أقل | أولوية أعلى |
| للعناصر المتكررة | للعناصر الفريدة |

#### الأولوية في CSS (Specificity)

عند تعارض الأنماط، CSS تختار بناءً على الأولوية:

```
Inline Style (1000) > ID (100) > Class (10) > Element (1)
```

**مثال:**
```css
p { color: blue; }           /* أولوية: 1 */
.text { color: green; }      /* أولوية: 10 */
#intro { color: red; }       /* أولوية: 100 */
```
```html
<p id="intro" class="text">ما لون هذا النص؟</p>
<!-- الجواب: أحمر (ID له الأولوية الأعلى) -->
```

#### الوراثة (Inheritance)

بعض خصائص CSS تنتقل من العنصر الأب إلى الأبناء:

```css
body {
  font-family: Arial;
  color: #333;
}
/* جميع العناصر داخل body سترث هذه الخصائص */
```

**خصائص تُورَث:** `color`, `font-family`, `font-size`, `line-height`

**خصائص لا تُورَث:** `margin`, `padding`, `border`, `background`

### التمارين العملية

1. ✏️ إنشاء ملف CSS خارجي وربطه بصفحة HTML
2. ✏️ تطبيق أنماط مختلفة باستخدام class و id
3. ✏️ تجربة الأولوية: ماذا يحدث عند تعارض الأنماط؟

### 📝 الواجب

> **إنشاء صفحة HTML بسيطة وتنسيقها باستخدام CSS خارجي، مع استخدام 5 classes و 2 IDs على الأقل.**

---

## 📘 اليوم الثاني: الألوان والخلفيات

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### أنظمة الألوان في CSS

**1. Named Colors (الألوان المسماة)**
```css
color: red;
color: blue;
color: tomato;
color: cornflowerblue;
```

**2. HEX (النظام السداسي عشر)**
```css
color: #FF0000;    /* أحمر */
color: #00FF00;    /* أخضر */
color: #0000FF;    /* أزرق */
color: #333;       /* اختصار لـ #333333 */
```

**3. RGB**
```css
color: rgb(255, 0, 0);      /* أحمر */
color: rgb(0, 255, 0);      /* أخضر */
color: rgb(0, 0, 255);      /* أزرق */
```

**4. RGBA (مع الشفافية)**
```css
color: rgba(255, 0, 0, 0.5);    /* أحمر بشفافية 50% */
color: rgba(0, 0, 0, 0.8);      /* أسود بشفافية 80% */
```

**5. HSL (Hue, Saturation, Lightness)**
```css
color: hsl(0, 100%, 50%);      /* أحمر */
color: hsl(120, 100%, 50%);    /* أخضر */
color: hsl(240, 100%, 50%);    /* أزرق */
```

#### خاصية color للنصوص

```css
p {
  color: #333333;
}

a {
  color: #007bff;
}

.error {
  color: rgb(220, 53, 69);
}
```

#### background-color للخلفيات

```css
body {
  background-color: #f8f9fa;
}

.card {
  background-color: white;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```

#### background-image

```css
.hero {
  background-image: url('hero-bg.jpg');
}

/* صورة من رابط */
.banner {
  background-image: url('https://example.com/image.jpg');
}
```

#### background-size

```css
.hero {
  background-image: url('hero.jpg');
  
  /* cover: تغطي المساحة كاملة (قد تُقص الصورة) */
  background-size: cover;
  
  /* contain: تظهر الصورة كاملة (قد تترك فراغات) */
  background-size: contain;
  
  /* أبعاد محددة */
  background-size: 100px 200px;
  background-size: 50% auto;
}
```

#### background-position و background-repeat

```css
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  
  /* موقع الصورة */
  background-position: center;
  background-position: top right;
  background-position: 50% 50%;
  
  /* تكرار الصورة */
  background-repeat: no-repeat;
  background-repeat: repeat-x;
  background-repeat: repeat-y;
}
```

#### التدرجات اللونية (Gradients)

**Linear Gradient (تدرج خطي)**
```css
.gradient-1 {
  background: linear-gradient(to right, #667eea, #764ba2);
}

.gradient-2 {
  background: linear-gradient(45deg, #f093fb, #f5576c);
}

.gradient-3 {
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
}
```

**Radial Gradient (تدرج دائري)**
```css
.radial {
  background: radial-gradient(circle, #667eea, #764ba2);
}

.radial-2 {
  background: radial-gradient(ellipse at top, #e66465, transparent);
}
```

#### خلفيات متعددة

```css
.multi-bg {
  background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('hero.jpg');
  background-size: cover;
  background-position: center;
}
```

#### الاختصار background

```css
.hero {
  background: #333 url('hero.jpg') no-repeat center/cover;
}
```

### التمارين العملية

1. ✏️ إنشاء لوحة ألوان (Color Palette) بجميع الأنظمة
2. ✏️ تصميم Hero Section بخلفية صورة مع overlay
3. ✏️ إنشاء أزرار بتدرجات لونية مختلفة

### 📝 الواجب

> **تصميم صفحة هبوط (Landing Page) بـ Hero Section يتضمن صورة خلفية، تدرج لوني، ونص بألوان متناسقة.**

---

## 📘 اليوم الثالث: Box Model والمسافات

**⏱️ الوقت المقترح:** 5 ساعات (موضوع مهم جداً)

### المواضيع

#### فهم Box Model

كل عنصر في HTML هو "صندوق" يتكون من أربع طبقات:

```
┌─────────────────────────────────────┐
│             MARGIN                  │
│   ┌─────────────────────────────┐   │
│   │         BORDER              │   │
│   │   ┌─────────────────────┐   │   │
│   │   │      PADDING        │   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │   CONTENT   │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

- **Content**: المحتوى الفعلي (نص، صورة، إلخ)
- **Padding**: الفراغ الداخلي (بين المحتوى والحدود)
- **Border**: الحدود
- **Margin**: الفراغ الخارجي (بين العنصر والعناصر الأخرى)

#### box-sizing

**content-box (الافتراضي)**
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* العرض الفعلي = 200 + 40 + 10 = 250px */
}
```

**border-box (الأفضل) ⭐**
```css
* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* العرض الفعلي = 200px (الـ padding والـ border محسوبين) */
}
```

> 💡 **نصيحة:** دائماً استخدم `box-sizing: border-box` على جميع العناصر!

#### Padding (الفراغ الداخلي)

```css
.box {
  /* جميع الجهات */
  padding: 20px;
  
  /* عمودي | أفقي */
  padding: 10px 20px;
  
  /* أعلى | أفقي | أسفل */
  padding: 10px 20px 15px;
  
  /* أعلى | يمين | أسفل | يسار */
  padding: 10px 20px 15px 25px;
  
  /* جهة محددة */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

#### Margin (الفراغ الخارجي)

```css
.box {
  /* نفس صيغ padding */
  margin: 20px;
  margin: 10px 20px;
  margin: 10px 20px 15px 25px;
  
  /* توسيط أفقي */
  margin: 0 auto;
  
  /* قيم سالبة (ممكنة!) */
  margin-top: -10px;
}
```

#### Margin Collapse

عندما يلتقي margin عمودي لعنصرين، يحدث "انهيار" ويُأخذ الأكبر فقط:

```css
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* المسافة الفعلية بينهما = 30px (وليس 50px) */
```

#### Border

```css
.box {
  /* الاختصار */
  border: 2px solid #333;
  
  /* بالتفصيل */
  border-width: 2px;
  border-style: solid;  /* solid, dashed, dotted, double, none */
  border-color: #333;
  
  /* جهة محددة */
  border-top: 3px dashed red;
  border-bottom: 1px solid #ccc;
}
```

#### border-radius (الحواف المنحنية)

```css
.box {
  /* جميع الزوايا */
  border-radius: 10px;
  
  /* زوايا مختلفة */
  border-radius: 10px 20px 30px 40px;
  
  /* دائرة كاملة */
  border-radius: 50%;
  
  /* زاوية محددة */
  border-top-left-radius: 20px;
}
```

#### width و height

```css
.box {
  width: 300px;
  height: 200px;
  
  /* نسبة مئوية */
  width: 50%;
  height: 100vh;  /* 100% من ارتفاع الشاشة */
  
  /* حدود */
  max-width: 1200px;
  min-width: 300px;
  max-height: 500px;
  min-height: 100px;
}
```

#### overflow

```css
.box {
  width: 200px;
  height: 100px;
  
  overflow: visible;  /* الافتراضي - يظهر المحتوى الزائد */
  overflow: hidden;   /* يخفي المحتوى الزائد */
  overflow: scroll;   /* يضيف scrollbar دائماً */
  overflow: auto;     /* يضيف scrollbar عند الحاجة */
  
  /* محاور منفصلة */
  overflow-x: hidden;
  overflow-y: auto;
}
```

### التمارين العملية

1. ✏️ رسم Box Model باستخدام DevTools
2. ✏️ إنشاء بطاقات (Cards) متساوية الأبعاد
3. ✏️ تجربة Margin Collapse وفهمها

### 📝 الواجب

> **تصميم مجموعة من البطاقات (Cards) بأبعاد متساوية، padding داخلي، borders مختلفة، وmargins متناسقة.**

---

## 📘 اليوم الرابع: Typography والخطوط

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### font-family

```css
body {
  /* Web Safe Fonts */
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Times New Roman', Times, serif;
  font-family: 'Courier New', Courier, monospace;
  
  /* خط احتياطي دائماً */
  font-family: 'Custom Font', Arial, sans-serif;
}
```

#### Google Fonts

**1. إضافة في HTML:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
```

**2. استخدام في CSS:**
```css
body {
  font-family: 'Cairo', sans-serif;
}
```

**خطوط عربية مميزة:**
- Cairo
- Tajawal
- Almarai
- IBM Plex Sans Arabic

#### font-size

```css
body {
  /* قيم ثابتة */
  font-size: 16px;
  
  /* نسبية للعنصر الأب */
  font-size: 1.5em;    /* 1.5 × حجم الأب */
  
  /* نسبية للـ root (html) */
  font-size: 1rem;     /* 1 × حجم html (عادة 16px) */
  font-size: 1.25rem;  /* 20px إذا كان html = 16px */
  
  /* نسبة مئوية */
  font-size: 120%;
}
```

> 💡 **نصيحة:** استخدم `rem` للخطوط لسهولة التحكم والـ Accessibility.

#### font-weight

```css
p {
  font-weight: normal;    /* 400 */
  font-weight: bold;      /* 700 */
  font-weight: 100;       /* خفيف جداً */
  font-weight: 300;       /* خفيف */
  font-weight: 500;       /* متوسط */
  font-weight: 600;       /* شبه سميك */
  font-weight: 900;       /* سميك جداً */
}
```

#### font-style

```css
p {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}
```

#### line-height (ارتفاع السطر)

```css
p {
  /* قيمة ثابتة */
  line-height: 24px;
  
  /* نسبة (الأفضل) */
  line-height: 1.6;     /* 1.6 × حجم الخط */
  line-height: 160%;
}
```

> 💡 **نصيحة:** للقراءة المريحة، استخدم `line-height: 1.5` إلى `1.8`

#### letter-spacing و word-spacing

```css
h1 {
  letter-spacing: 2px;      /* المسافة بين الحروف */
  letter-spacing: -0.5px;   /* تقريب الحروف */
}

p {
  word-spacing: 5px;        /* المسافة بين الكلمات */
}
```

#### text-align

```css
p {
  text-align: left;
  text-align: right;
  text-align: center;
  text-align: justify;    /* توزيع متساوي */
}
```

#### text-decoration

```css
a {
  text-decoration: none;           /* إزالة الخط */
  text-decoration: underline;      /* خط تحت */
  text-decoration: overline;       /* خط فوق */
  text-decoration: line-through;   /* خط في الوسط */
  
  /* مع لون ونمط */
  text-decoration: underline wavy red;
}
```

#### text-transform

```css
p {
  text-transform: uppercase;    /* HELLO */
  text-transform: lowercase;    /* hello */
  text-transform: capitalize;   /* Hello World */
  text-transform: none;
}
```

#### text-shadow

```css
h1 {
  /* أفقي | عمودي | blur | لون */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  /* ظلال متعددة */
  text-shadow: 
    1px 1px 0 #fff,
    2px 2px 0 #333;
}
```

#### white-space و word-break

```css
p {
  /* التحكم في المسافات والأسطر */
  white-space: normal;      /* الافتراضي */
  white-space: nowrap;      /* سطر واحد */
  white-space: pre;         /* يحافظ على التنسيق */
  white-space: pre-wrap;    /* يحافظ مع التفاف */
  
  /* كسر الكلمات الطويلة */
  word-break: break-all;
  overflow-wrap: break-word;
}
```

### التمارين العملية

1. ✏️ إنشاء نظام خطوط (Typography Scale)
2. ✏️ تصميم صفحة مقال بتنسيق نصي احترافي
3. ✏️ تجربة خطوط Google المختلفة

### 📝 الواجب

> **تصميم صفحة مدونة (Blog Post) بتنسيق نصي احترافي: عناوين متدرجة، فقرات مريحة للقراءة، اقتباسات مميزة.**

---

## 📘 اليوم الخامس: المحددات المتقدمة

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### Descendant Selectors (المحددات التنازلية)

```css
/* أي p داخل article (في أي مستوى) */
article p {
  color: #333;
}

/* أي a داخل nav داخل header */
header nav a {
  text-decoration: none;
}
```

#### Child Selector (>) vs Descendant ( )

```css
/* Child: فقط الأبناء المباشرين */
ul > li {
  list-style: none;
}

/* Descendant: جميع العناصر في أي مستوى */
ul li {
  padding: 5px;
}
```

```html
<ul>
  <li>مباشر ✓</li>
  <li>مباشر ✓
    <ul>
      <li>غير مباشر (child لا يطبق، descendant يطبق)</li>
    </ul>
  </li>
</ul>
```

#### Adjacent Sibling (+) و General Sibling (~)

```css
/* Adjacent: العنصر التالي مباشرة */
h2 + p {
  font-size: 1.2em;  /* أول p بعد h2 */
}

/* General: جميع العناصر التالية */
h2 ~ p {
  color: #666;  /* جميع p بعد h2 */
}
```

#### Attribute Selectors

```css
/* له الخاصية */
[disabled] {
  opacity: 0.5;
}

/* قيمة محددة */
[type="text"] {
  border: 1px solid #ccc;
}

/* يبدأ بـ */
[href^="https"] {
  color: green;
}

/* ينتهي بـ */
[href$=".pdf"] {
  background: url('pdf-icon.png');
}

/* يحتوي على */
[class*="btn"] {
  padding: 10px;
}
```

#### Pseudo-classes

**حالات التفاعل:**
```css
a:link { color: blue; }       /* رابط لم يُزر */
a:visited { color: purple; }  /* رابط مُزار */
a:hover { color: red; }       /* عند التمرير */
a:active { color: orange; }   /* أثناء النقر */
a:focus { outline: 2px solid blue; }  /* عند التركيز */
```

**Structural Pseudo-classes:**
```css
/* الأول والأخير */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }

/* nth-child */
tr:nth-child(odd) { background: #f5f5f5; }   /* الفردية */
tr:nth-child(even) { background: #fff; }      /* الزوجية */
tr:nth-child(3) { color: red; }               /* الثالث */
tr:nth-child(3n) { font-weight: bold; }       /* كل ثالث */
tr:nth-child(3n+1) { color: blue; }           /* 1, 4, 7, 10... */

/* nth-of-type */
p:nth-of-type(2) { font-size: 1.2em; }        /* ثاني p */
p:first-of-type { font-weight: bold; }
p:last-of-type { margin-bottom: 0; }

/* not */
input:not([type="submit"]) { border: 1px solid #ccc; }
li:not(:last-child) { margin-bottom: 10px; }
```

#### Pseudo-elements

```css
/* أول حرف وأول سطر */
p::first-letter {
  font-size: 2em;
  float: left;
}

p::first-line {
  font-weight: bold;
}

/* قبل وبعد */
.quote::before {
  content: '"';
  color: #999;
}

.quote::after {
  content: '"';
  color: #999;
}

/* مثال: أيقونة بجانب الرابط */
a[href^="http"]::after {
  content: ' ↗';
  font-size: 0.8em;
}

/* تحديد النص */
::selection {
  background: #ffeb3b;
  color: #333;
}
```

#### الفرق بين Pseudo-class و Pseudo-element

| Pseudo-class (:) | Pseudo-element (::) |
|---|---|
| حالة العنصر | جزء من العنصر |
| `:hover`, `:focus`, `:first-child` | `::before`, `::after`, `::first-letter` |
| لا تُنشئ عنصر جديد | تُنشئ عنصر وهمي |

### التمارين العملية

1. ✏️ إنشاء قائمة تنقل مع hover effects
2. ✏️ تصميم جدول بتلوين صفوف متناوبة
3. ✏️ إضافة أيقونات باستخدام `::before` و `::after`

### 📝 الواجب

> **تصميم قائمة تنقل (Navigation Menu) متكاملة مع hover effects، active state، وdropdown بسيط.**

---

## 📘 اليوم السادس: Position والترتيب

**⏱️ الوقت المقترح:** 5 ساعات

### المواضيع

#### display

```css
/* Block: يأخذ سطر كامل */
div, p, h1, section { display: block; }

/* Inline: بجانب العناصر الأخرى */
span, a, strong { display: inline; }

/* Inline-block: inline لكن يقبل width/height */
.btn {
  display: inline-block;
  width: 100px;
  height: 40px;
}

/* إخفاء */
.hidden { display: none; }
```

#### position: static (الافتراضي)

```css
.box {
  position: static;
  /* لا يتأثر بـ top, right, bottom, left */
}
```

#### position: relative

```css
.box {
  position: relative;
  top: 20px;     /* يتحرك 20px من موقعه الأصلي */
  left: 30px;
  /* يحتفظ بمكانه في الصفحة */
}
```

#### position: absolute

```css
.parent {
  position: relative;  /* مهم! */
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  /* يتموضع نسبة لأقرب أب له position (غير static) */
}
```

**مثال: Badge على صورة**
```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
}
```

#### position: fixed

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* يبقى ثابتاً حتى عند التمرير */
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

#### position: sticky

```css
.header {
  position: sticky;
  top: 0;
  /* يتصرف كـ relative حتى يصل للـ top: 0، ثم يصبح fixed */
}

.sidebar {
  position: sticky;
  top: 100px;
}
```

#### top, right, bottom, left

```css
.box {
  position: absolute;
  
  /* من الأعلى */
  top: 20px;
  
  /* من اليمين */
  right: 20px;
  
  /* من الأسفل */
  bottom: 20px;
  
  /* من اليسار */
  left: 20px;
  
  /* ملء المساحة */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* أو اختصاراً: */
  inset: 0;
}
```

#### z-index (الطبقات)

```css
.back { z-index: 1; }
.middle { z-index: 10; }
.front { z-index: 100; }

/* القيم السالبة ممكنة */
.behind { z-index: -1; }
```

> ⚠️ **ملاحظة:** `z-index` يعمل فقط مع العناصر التي لها `position` (غير static)

#### توسيط بـ Position

```css
/* توسيط عنصر absolute */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### التمارين العملية

1. ✏️ إنشاء Header ثابت (Fixed Header)
2. ✏️ تصميم Modal/Popup باستخدام position
3. ✏️ إنشاء Tooltip بـ absolute positioning

### 📝 الواجب

> **تصميم صفحة بـ: Header ثابت، Sidebar لاصق، وأزرار floating (مثل زر العودة للأعلى).**

---

## 📘 اليوم السابع: Flexbox الأساسي

**⏱️ الوقت المقترح:** 5 ساعات (موضوع مهم جداً)

### المواضيع

#### ما هو Flexbox؟

Flexbox هو نظام تخطيط أحادي البعد (صف أو عمود) يجعل توزيع العناصر سهلاً جداً.

```css
.container {
  display: flex;
  /* الآن جميع الأبناء المباشرين أصبحوا flex items */
}
```

#### flex-direction

```css
.container {
  display: flex;
  
  flex-direction: row;            /* ← افتراضي: من اليسار لليمين */
  flex-direction: row-reverse;    /* → من اليمين لليسار */
  flex-direction: column;         /* ↓ من الأعلى للأسفل */
  flex-direction: column-reverse; /* ↑ من الأسفل للأعلى */
}
```

#### justify-content (المحور الرئيسي)

```css
.container {
  display: flex;
  
  justify-content: flex-start;    /* البداية (افتراضي) */
  justify-content: flex-end;      /* النهاية */
  justify-content: center;        /* الوسط */
  justify-content: space-between; /* توزيع مع مسافات بين العناصر */
  justify-content: space-around;  /* مسافات متساوية حول كل عنصر */
  justify-content: space-evenly;  /* مسافات متساوية تماماً */
}
```

```
flex-start:    [1][2][3]              
flex-end:                  [1][2][3]
center:            [1][2][3]         
space-between: [1]      [2]      [3]
space-around:   [1]    [2]    [3]   
space-evenly:    [1]   [2]   [3]    
```

#### align-items (المحور العمودي)

```css
.container {
  display: flex;
  height: 200px;
  
  align-items: stretch;     /* تمدد (افتراضي) */
  align-items: flex-start;  /* أعلى */
  align-items: flex-end;    /* أسفل */
  align-items: center;      /* وسط */
  align-items: baseline;    /* على خط النص */
}
```

#### flex-wrap

```css
.container {
  display: flex;
  
  flex-wrap: nowrap;       /* سطر واحد (افتراضي) */
  flex-wrap: wrap;         /* التفاف لأسطر متعددة */
  flex-wrap: wrap-reverse; /* التفاف معكوس */
}
```

#### gap

```css
.container {
  display: flex;
  gap: 20px;              /* مسافة بين جميع العناصر */
  gap: 20px 10px;         /* row-gap | column-gap */
  row-gap: 20px;
  column-gap: 10px;
}
```

#### خصائص Flex Items

```css
.item {
  /* النمو لملء المساحة */
  flex-grow: 1;      /* ينمو بنسبة 1 */
  
  /* الانكماش */
  flex-shrink: 1;    /* يتقلص عند الحاجة */
  
  /* الحجم الأساسي */
  flex-basis: 200px; /* الحجم قبل النمو/الانكماش */
  
  /* الاختصار */
  flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 1 1 200px;   /* grow shrink basis */
}
```

#### align-self

```css
.container {
  display: flex;
  align-items: flex-start;
}

.special-item {
  align-self: center;  /* هذا العنصر فقط في الوسط */
}
```

#### توسيط مثالي بـ Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### أمثلة عملية

**Navigation Bar:**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
```

**Card Layout:**
```css
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;  /* ينمو وينكمش، الحد الأدنى 300px */
}
```

**Footer مع أقسام:**
```css
.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}
```

### التمارين العملية

1. ✏️ توسيط عنصر أفقياً وعمودياً
2. ✏️ إنشاء Navigation Bar مرن
3. ✏️ تصميم Card Layout بـ Flexbox

### 📝 مشروع نهاية الأسبوع الأول

> **تصميم صفحة Portfolio بسيطة تتضمن:**
> - Header مع Navigation
> - Hero Section
> - قسم Cards للمشاريع (3-4 بطاقات)
> - Footer
> 
> **الشرط:** استخدام Flexbox في جميع التخطيطات

---

<div align="center">

# 🟣 الأسبوع الثاني: التقنيات المتقدمة

</div>

---

## 📗 اليوم الثامن: Flexbox المتقدم

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### align-content

يتحكم في توزيع الأسطر عندما يكون هناك `flex-wrap: wrap`:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;
}
```

| align-items | align-content |
|---|---|
| يوزع العناصر داخل السطر | يوزع الأسطر نفسها |
| يعمل دائماً | يعمل مع wrap فقط |

#### flex-flow (اختصار)

```css
.container {
  /* flex-direction | flex-wrap */
  flex-flow: row wrap;
  flex-flow: column nowrap;
}
```

#### order

```css
.item-1 { order: 3; }
.item-2 { order: 1; }
.item-3 { order: 2; }
/* الترتيب المرئي: item-2, item-3, item-1 */
```

> 💡 القيمة الافتراضية هي `0`. القيم السالبة ممكنة.

#### Holy Grail Layout

```css
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  flex-shrink: 0;
}

main {
  display: flex;
  flex: 1;
}

.sidebar-left {
  flex: 0 0 200px;
}

.content {
  flex: 1;
}

.sidebar-right {
  flex: 0 0 200px;
}
```

#### Sticky Footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;  /* يملأ المساحة المتبقية */
}

footer {
  flex-shrink: 0;
}
```

#### Nested Flexbox

```css
.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  flex: 1;
}

.card-footer {
  display: flex;
  gap: 10px;
}
```

### التمارين العملية

1. ✏️ تصميم Dashboard Layout كامل
2. ✏️ إنشاء صفحة منتج مع تفاصيل وصور
3. ✏️ تحدي: إعادة ترتيب عناصر باستخدام order

### 📝 الواجب

> **تصميم صفحة Dashboard بـ Sidebar ثابت، Header، Main Content Area، وWidget Cards.**

---

## 📗 اليوم التاسع: CSS Grid الأساسي

**⏱️ الوقت المقترح:** 5 ساعات (موضوع مهم)

### المواضيع

#### ما هو CSS Grid؟

Grid هو نظام تخطيط ثنائي البعد (صفوف وأعمدة معاً).

```css
.container {
  display: grid;
}
```

#### Flexbox vs Grid

| Flexbox | Grid |
|---|---|
| أحادي البعد (صف أو عمود) | ثنائي البعد (صفوف وأعمدة) |
| للمكونات الصغيرة | للتخطيطات الكبيرة |
| محتوى يحدد الحجم | الشبكة تحدد الحجم |

> 💡 **نصيحة:** استخدم Grid للتخطيط العام، وFlexbox للمكونات الداخلية.

#### grid-template-columns و grid-template-rows

```css
.container {
  display: grid;
  
  /* أعمدة بقيم ثابتة */
  grid-template-columns: 200px 200px 200px;
  
  /* أعمدة بنسب */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* مزيج */
  grid-template-columns: 200px 1fr 200px;
  
  /* صفوف */
  grid-template-rows: 100px auto 50px;
}
```

#### وحدة fr (fraction)

```css
.container {
  display: grid;
  
  /* 3 أعمدة متساوية */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* العمود الأوسط ضعف الآخرين */
  grid-template-columns: 1fr 2fr 1fr;
}
```

#### repeat()

```css
.container {
  display: grid;
  
  /* 4 أعمدة متساوية */
  grid-template-columns: repeat(4, 1fr);
  
  /* نمط متكرر */
  grid-template-columns: repeat(3, 100px 1fr);
  /* = 100px 1fr 100px 1fr 100px 1fr */
}
```

#### gap

```css
.container {
  display: grid;
  gap: 20px;              /* row & column */
  gap: 20px 10px;         /* row | column */
  row-gap: 20px;
  column-gap: 10px;
}
```

#### grid-column و grid-row

```css
.item {
  /* من خط 1 إلى خط 3 (يشغل عمودين) */
  grid-column: 1 / 3;
  
  /* باستخدام span */
  grid-column: span 2;     /* يمتد عمودين */
  
  /* صف */
  grid-row: 1 / 2;
  grid-row: span 3;        /* يمتد 3 صفوف */
}
```

```
خطوط الأعمدة:  1     2     3     4
              |     |     |     |
              [  1  ][  2  ][  3  ]
```

### أمثلة عملية

**شبكة 3x3:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}
```

**Photo Gallery:**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

### التمارين العملية

1. ✏️ إنشاء شبكة 3x3 بسيطة
2. ✏️ تصميم Photo Gallery بـ Grid
3. ✏️ لعبة: [CSS Grid Garden](https://cssgridgarden.com/)

### 📝 الواجب

> **تصميم معرض صور (Photo Gallery) مع أحجام مختلفة للصور باستخدام span.**

---

## 📗 اليوم العاشر: CSS Grid المتقدم

**⏱️ الوقت المقترح:** 5 ساعات

### المواضيع

#### grid-template-areas

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header  header  header"
    "sidebar content aside"
    "footer  footer  footer";
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: content; }
aside   { grid-area: aside; }
footer  { grid-area: footer; }
```

#### auto-fill vs auto-fit

```css
/* auto-fill: يُنشئ أعمدة فارغة */
.container {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* auto-fit: يمدد العناصر الموجودة */
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

> 💡 **الفرق:** عندما تكون العناصر أقل من الأعمدة المتاحة، `auto-fit` يمدد العناصر بينما `auto-fill` يترك فراغات.

#### minmax()

```css
.container {
  display: grid;
  
  /* عمود بين 200px و 1fr */
  grid-template-columns: minmax(200px, 1fr) 2fr;
  
  /* Responsive بدون Media Queries! */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

#### justify-items و align-items في Grid

```css
.container {
  display: grid;
  
  /* المحور الأفقي */
  justify-items: start | end | center | stretch;
  
  /* المحور العمودي */
  align-items: start | end | center | stretch;
  
  /* الاثنان معاً */
  place-items: center;
}
```

#### justify-content و align-content في Grid

```css
.container {
  display: grid;
  height: 500px;
  
  /* توزيع الأعمدة */
  justify-content: start | end | center | space-between | space-around;
  
  /* توزيع الصفوف */
  align-content: start | end | center | space-between | space-around;
  
  /* الاثنان معاً */
  place-content: center;
}
```

#### Grid + Flexbox معاً

```css
/* Grid للتخطيط العام */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Flexbox للمكونات الداخلية */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

### التمارين العملية

1. ✏️ تصميم Magazine Layout باستخدام areas
2. ✏️ إنشاء Responsive Grid بدون Media Queries
3. ✏️ دمج Grid و Flexbox في تصميم واحد

### 📝 الواجب

> **تصميم صفحة مجلة (Magazine Layout) باستخدام grid-template-areas مع صور وعناوين ونصوص.**

---

## 📗 اليوم الحادي عشر: Responsive Design

**⏱️ الوقت المقترح:** 5 ساعات (موضوع حيوي)

### المواضيع

#### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> ⚠️ **مهم جداً:** بدون هذا الـ tag، التصميم المتجاوب لن يعمل على الموبايل!

#### وحدات القياس المرنة

```css
.container {
  /* نسبة من العنصر الأب */
  width: 80%;
  
  /* نسبة من عرض الشاشة */
  width: 100vw;
  
  /* نسبة من ارتفاع الشاشة */
  height: 100vh;
  min-height: 50vh;
  
  /* الأصغر بين vw و vh */
  font-size: 5vmin;
  
  /* الأكبر بين vw و vh */
  font-size: 5vmax;
}
```

#### Media Queries

```css
/* Mobile First (الأفضل) */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
```

#### Breakpoints الشائعة

| الجهاز | Breakpoint |
|---|---|
| Mobile | < 768px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1199px |
| Large Desktop | ≥ 1200px |

#### Mobile-First vs Desktop-First

**Mobile-First (الأفضل) ⭐:**
```css
/* الأساسي للموبايل */
.nav { display: none; }

/* للشاشات الأكبر */
@media (min-width: 768px) {
  .nav { display: flex; }
}
```

**Desktop-First:**
```css
/* الأساسي للديسكتوب */
.nav { display: flex; }

/* للشاشات الأصغر */
@media (max-width: 767px) {
  .nav { display: none; }
}
```

#### الصور المتجاوبة

```css
img {
  max-width: 100%;
  height: auto;
}
```

```html
<!-- أحجام مختلفة لأحجام شاشات مختلفة -->
<img srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 2000w"
     sizes="(max-width: 600px) 500px,
            (max-width: 1200px) 1000px,
            2000px"
     src="medium.jpg"
     alt="صورة متجاوبة">
```

#### clamp()

```css
/* font-size بين 16px و 24px، مع تغير حسب الشاشة */
h1 {
  font-size: clamp(16px, 4vw, 24px);
  /* min, preferred, max */
}

.container {
  width: clamp(300px, 80%, 1200px);
}
```

#### Responsive Navigation

```css
/* Mobile: قائمة عمودية مخفية */
.nav-links {
  display: none;
  flex-direction: column;
}

.nav-links.active {
  display: flex;
}

.hamburger {
  display: block;
}

/* Desktop: قائمة أفقية */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: row;
  }
  
  .hamburger {
    display: none;
  }
}
```

### التمارين العملية

1. ✏️ تحويل صفحة Desktop إلى Mobile
2. ✏️ إنشاء Navigation متجاوب
3. ✏️ اختبار التصميم على مختلف الأحجام

### 📝 الواجب

> **تحويل مشروع الأسبوع الأول إلى تصميم متجاوب يعمل على Mobile وTablet وDesktop.**

---

## 📗 اليوم الثاني عشر: Transitions والتأثيرات

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### CSS Transitions

```css
.button {
  background: #3498db;
  transition: background 0.3s ease;
}

.button:hover {
  background: #2980b9;
}
```

#### خصائص Transition

```css
.box {
  /* الخاصية المتأثرة */
  transition-property: background, transform;
  
  /* المدة */
  transition-duration: 0.3s;
  
  /* نوع الحركة */
  transition-timing-function: ease;
  
  /* التأخير */
  transition-delay: 0.1s;
  
  /* الاختصار */
  transition: all 0.3s ease 0.1s;
  transition: background 0.3s, transform 0.5s;
}
```

#### timing-function

```css
.box {
  transition-timing-function: ease;        /* بداية ونهاية بطيئة */
  transition-timing-function: linear;      /* سرعة ثابتة */
  transition-timing-function: ease-in;     /* بداية بطيئة */
  transition-timing-function: ease-out;    /* نهاية بطيئة */
  transition-timing-function: ease-in-out; /* الاثنان */
  
  /* Cubic Bezier للتحكم الدقيق */
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

> 🔧 أداة مفيدة: [cubic-bezier.com](https://cubic-bezier.com/)

#### Transform

```css
.box {
  /* الإزاحة */
  transform: translateX(50px);
  transform: translateY(-20px);
  transform: translate(50px, -20px);
  
  /* الدوران */
  transform: rotate(45deg);
  transform: rotateX(45deg);  /* 3D */
  transform: rotateY(45deg);  /* 3D */
  
  /* التكبير/التصغير */
  transform: scale(1.5);
  transform: scale(1.5, 2);   /* X, Y */
  
  /* الإمالة */
  transform: skew(10deg);
  transform: skew(10deg, 5deg);
  
  /* دمج التحويلات */
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}
```

#### transform-origin

```css
.box {
  transform-origin: center;        /* الافتراضي */
  transform-origin: top left;
  transform-origin: 50% 100%;
  transform-origin: 0 0;
}
```

### أمثلة عملية

**زر مع تأثير:**
```css
.btn {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(0);
}
```

**Card Hover:**
```css
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

**Image Zoom:**
```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

**Card Flip:**
```css
.card {
  perspective: 1000px;
}

.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

### التمارين العملية

1. ✏️ إنشاء أزرار مع hover transitions
2. ✏️ تصميم Card Flip Effect
3. ✏️ إنشاء Image Zoom on Hover

### 📝 الواجب

> **تصميم معرض صور تفاعلي مع تأثيرات hover متنوعة: zoom, overlay text, color shift.**

---

## 📗 اليوم الثالث عشر: CSS Animations

**⏱️ الوقت المقترح:** 4 ساعات

### المواضيع

#### @keyframes

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* أو بالنسب المئوية */
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
```

#### خصائص Animation

```css
.box {
  /* اسم الحركة */
  animation-name: fadeIn;
  
  /* المدة */
  animation-duration: 1s;
  
  /* نوع الحركة */
  animation-timing-function: ease;
  
  /* التأخير */
  animation-delay: 0.5s;
  
  /* عدد التكرارات */
  animation-iteration-count: 3;
  animation-iteration-count: infinite;
  
  /* الاتجاه */
  animation-direction: normal;
  animation-direction: reverse;
  animation-direction: alternate;
  animation-direction: alternate-reverse;
  
  /* الحالة النهائية */
  animation-fill-mode: forwards;   /* يبقى على الحالة النهائية */
  animation-fill-mode: backwards;  /* يبدأ من الحالة الأولى */
  animation-fill-mode: both;
  
  /* الإيقاف/التشغيل */
  animation-play-state: running;
  animation-play-state: paused;
}
```

#### الاختصار animation

```css
.box {
  /* name | duration | timing | delay | iteration | direction | fill | play-state */
  animation: fadeIn 1s ease 0.5s infinite alternate forwards;
  
  /* الأساسي */
  animation: fadeIn 1s ease;
  
  /* متعدد */
  animation: fadeIn 1s, bounce 2s 1s infinite;
}
```

### أمثلة عملية

**Loading Spinner:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

**Pulse Effect:**
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

**Bounce:**
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

.bounce {
  animation: bounce 2s infinite;
}
```

**Typing Effect:**
```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  animation: 
    typing 3.5s steps(30) 1s forwards,
    blink 0.75s step-end infinite;
}
```

**Fade In Up (للعناصر عند التمرير):**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
```

#### Performance Tips

```css
/* ✅ جيد للأداء - يستخدم GPU */
transform: translateX(100px);
opacity: 0.5;

/* ❌ سيء للأداء - يعيد حساب Layout */
left: 100px;
width: 200px;
margin: 20px;
```

> 💡 **نصيحة:** استخدم `transform` و `opacity` فقط للحركات السلسة.

### التمارين العملية

1. ✏️ إنشاء Loading Spinner
2. ✏️ تصميم Bouncing Ball Animation
3. ✏️ إنشاء Typing Effect للنص

### 📝 الواجب

> **تصميم صفحة Loading كاملة مع multiple animations: spinner، progress bar، وfade-in text.**

---

## 📗 اليوم الرابع عشر: CSS Variables وأفضل الممارسات + المشروع النهائي

**⏱️ الوقت المقترح:** 6 ساعات

### المواضيع

#### CSS Custom Properties (Variables)

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --font-main: 'Cairo', sans-serif;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --border-radius: 8px;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.button {
  background: var(--primary-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: var(--font-main);
}

.card {
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
}
```

#### قيمة افتراضية

```css
.box {
  /* إذا --gap غير معرف، استخدم 20px */
  padding: var(--gap, 20px);
}
```

#### Dark Mode

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --card-bg: #f5f5f5;
}

[data-theme="dark"] {
  --bg-color: #1a1a2e;
  --text-color: #eaeaea;
  --card-bg: #16213e;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

.card {
  background: var(--card-bg);
}
```

```html
<button onclick="document.body.dataset.theme = 
  document.body.dataset.theme === 'dark' ? 'light' : 'dark'">
  Toggle Theme
</button>
```

#### CSS Naming Conventions (BEM)

**BEM = Block Element Modifier**

```css
/* Block */
.card { }

/* Element (جزء من Block) */
.card__header { }
.card__body { }
.card__footer { }
.card__title { }
.card__image { }

/* Modifier (حالة مختلفة) */
.card--featured { }
.card--dark { }
.card__button--primary { }
.card__button--disabled { }
```

```html
<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">عنوان</h2>
  </div>
  <div class="card__body">
    <p class="card__text">محتوى</p>
  </div>
  <div class="card__footer">
    <button class="card__button card__button--primary">اضغط</button>
  </div>
</div>
```

#### تنظيم ملفات CSS

```
styles/
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   └── navbar.css
├── layout/
│   ├── header.css
│   ├── footer.css
│   ├── sidebar.css
│   └── grid.css
├── pages/
│   ├── home.css
│   └── about.css
├── utilities/
│   └── helpers.css
└── main.css
```

```css
/* main.css */
@import 'base/reset.css';
@import 'base/variables.css';
@import 'base/typography.css';
@import 'layout/header.css';
@import 'components/buttons.css';
/* ... */
```

#### CSS Reset vs Normalize

**Reset (إزالة كل شيء):**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Normalize (توحيد فقط):**
استخدم [normalize.css](https://necolas.github.io/normalize.css/)

#### أفضل ممارسة - Modern CSS Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```

#### Debugging CSS

**Chrome DevTools:**
1. `F12` لفتح DevTools
2. تبويب Elements لعرض HTML و CSS
3. Styles panel لتعديل CSS مباشرة
4. Computed panel لرؤية القيم النهائية
5. Box Model visualization

**نصائح:**
- استخدم `outline: 1px solid red;` بدلاً من `border` للـ debugging
- `* { outline: 1px solid rgba(255,0,0,0.2); }` لرؤية جميع العناصر

---

<div align="center">

## 🏆 المشروع النهائي

### موقع Portfolio متكامل ومتجاوب

</div>

### متطلبات المشروع

1. ✅ صفحة رئيسية مع Hero Section وتأثيرات
2. ✅ قسم About بتصميم إبداعي
3. ✅ معرض مشاريع باستخدام Grid مع hover effects
4. ✅ قسم مهارات مع Progress Bars متحركة
5. ✅ نموذج تواصل منسق
6. ✅ تصميم متجاوب بالكامل (Mobile-First)
7. ✅ استخدام CSS Variables للألوان
8. ✅ Dark/Light Mode Toggle
9. ✅ Animations للعناصر عند التمرير
10. ✅ كود نظيف ومنظم مع تعليقات

### هيكل المشروع المقترح

```
portfolio/
├── index.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── main.css
│   ├── components.css
│   └── responsive.css
├── images/
│   ├── hero-bg.jpg
│   ├── profile.jpg
│   └── projects/
└── js/
    └── main.js (للـ Dark Mode Toggle)
```

---

## 📊 المشاريع التطبيقية

| المشروع | الوصف | المهارات المطبقة |
|---|---|---|
| Mini 1 | Landing Page بسيطة | Colors, Typography, Box Model |
| Mini 2 | Card Components | Flexbox, Borders, Shadows |
| Mini 3 | Navigation Menu | Selectors, Hover, Position |
| Mini 4 | Photo Gallery | Grid, Transitions |
| Mini 5 | Responsive Layout | Media Queries, Flex/Grid |
| **Final** | **Portfolio Website** | **جميع المهارات** |

---

## 📋 جدول الواجبات

| اليوم | الواجب | التسليم |
|:---:|---|:---:|
| 1 | صفحة HTML منسقة بـ CSS خارجي | نهاية اليوم 1 |
| 2 | Landing Page مع Hero Section | نهاية اليوم 2 |
| 3 | بطاقات (Cards) بأبعاد متساوية | نهاية اليوم 3 |
| 4 | صفحة مدونة بتنسيق نصي | نهاية اليوم 4 |
| 5 | قائمة تنقل مع hover effects | نهاية اليوم 5 |
| 6 | صفحة بـ Header ثابت وSidebar | نهاية اليوم 6 |
| 7 | مشروع Portfolio بـ Flexbox | نهاية الأسبوع 1 |
| 8 | Dashboard Layout | نهاية اليوم 8 |
| 9 | Photo Gallery بـ Grid | نهاية اليوم 9 |
| 10 | Magazine Layout | نهاية اليوم 10 |
| 11 | تحويل المشروع إلى Responsive | نهاية اليوم 11 |
| 12 | معرض صور تفاعلي | نهاية اليوم 12 |
| 13 | صفحة Loading متحركة | نهاية اليوم 13 |
| 14 | المشروع النهائي الكامل | نهاية الأسبوع 2 |

---

## 📚 المصادر التعليمية

### المصادر الأساسية (إنجليزي)

| المصدر | الرابط | الوصف |
|---|---|---|
| MDN CSS | developer.mozilla.org/en-US/docs/Web/CSS | المرجع الرسمي |
| CSS-Tricks | css-tricks.com | مقالات وشروحات ممتازة |
| W3Schools | w3schools.com/css | للتجربة التفاعلية |
| Flexbox Froggy | flexboxfroggy.com | لعبة لتعلم Flexbox |
| Grid Garden | cssgridgarden.com | لعبة لتعلم Grid |
| Can I Use | caniuse.com | لفحص دعم المتصفحات |

### المصادر العربية

- 📺 **قناة Elzero Web School** على YouTube - أفضل محتوى عربي
- 📺 **قناة Traversy Media** (مترجمة)
- 🌐 **موقع هرمش** (harmash.com)
- 🌐 **أكاديمية حسوب**

### أدوات مساعدة

- 🛠️ **VS Code** مع إضافات:
  - Live Server
  - CSS Peek
  - Auto Rename Tag
  - IntelliSense for CSS
- 🔧 **Chrome DevTools** للـ Debugging
- 🎨 **Coolors.co** لاختيار الألوان
- 🔤 **Google Fonts** للخطوط
- 🎨 **Figma** للتصميم والإلهام

---

## 📊 معايير التقييم

| العنصر | النسبة |
|---|:---:|
| الواجبات اليومية (13 واجب) | 35% |
| مشروع نهاية الأسبوع الأول | 15% |
| المشروع النهائي | 35% |
| جودة الكود وتنظيمه | 10% |
| المشاركة والتفاعل | 5% |

### مستويات التقييم

| المعيار | ممتاز ⭐ | جيد 👍 | يحتاج تحسين 📝 |
|---|---|---|---|
| صحة الكود | خالي من الأخطاء | أخطاء بسيطة | أخطاء كثيرة |
| التصميم | إبداعي ومتناسق | مقبول | يحتاج عمل |
| Responsive | يعمل على كل الأحجام | معظم الأحجام | حجم واحد فقط |
| التنظيم | منظم مع تعليقات | منظم | فوضوي |

---

## 💡 نصائح للنجاح

### نصائح ذهبية

- ✍️ **اكتب الكود بنفسك** - النسخ واللصق عدوك في التعلم!
- 🔍 **استخدم DevTools باستمرار** - جرب التغييرات مباشرة
- 🧠 **لا تحفظ - افهم!** CSS منطقية جداً
- 🧪 **جرب وأخطئ** - أفضل طريقة للتعلم
- 📱 **ابدأ بالـ Mobile أولاً** - أسهل وأفضل
- 📁 **نظم كودك من البداية** - سيوفر عليك وقتاً لاحقاً
- ❓ **اسأل: لماذا يعمل؟ ولماذا لا يعمل؟**
- 💾 **احفظ مشاريعك على GitHub** للرجوع إليها

### جدول الدراسة اليومي المقترح

| الوقت | النشاط |
|:---:|---|
| 30 دقيقة | مراجعة ما تعلمته بالأمس |
| 1 ساعة | دراسة الموضوع الجديد (قراءة + فيديو) |
| 1.5 ساعة | التمارين العملية |
| 1 ساعة | العمل على الواجب |
| 30 دقيقة | مراجعة وتوثيق |

---

<div align="center">

## 💬 رسالة أخيرة

**CSS هي فن وعلم في آن واحد.**

الفن في الإبداع والتصميم، والعلم في فهم القواعد والمنطق.

خلال هذين الأسبوعين، ستتحول من شخص لا يعرف شيئاً عن CSS إلى مصمم قادر على بناء مواقع احترافية ومتجاوبة.

### تذكر: كل مطور محترف بدأ من الصفر تماماً مثلك!

---

# 🚀 بالتوفيق! ✨

---

**ETRA - Technical Training & Mentorship**

للتواصل والاستفسارات: team@etra.sa

يناير 2026

</div>
