// Portfolio Starter JS (dark mode + simple language toggle + mailto form + mobile menu)

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const THEME_KEY = "portfolio_theme";
const LANG_KEY = "portfolio_lang";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const icon = theme === "light" ? "🌙" : "☀️";
  const t1 = $("#themeToggle");
  const t2 = $("#themeToggleMobile");
  if (t1) t1.textContent = icon;
  if (t2) t2.textContent = icon + (theme === "light" ? "" : "");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

const I18N = {
  en: {
    portfolio:"Porfolio",
    Download_cv:"C.V.",
    hero_pill: "Student Specializing in Food Industries    ",
    hero_hi: "Hi, I'm",
    hero_name:"Mariem Abd El Hay",

    hero_subtitle:
      "I am a Food Industries student at the Faculty of Industry and Energy, East Port Said Technological University. I seek to gain practical experience in the fields of food technology and food processing, with a focus on quality, food safety, and production process improvement. This portfolio presents my projects, training experiences, and the skills I am developing in preparation for the job market..",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_location: "Ismailia, Egypt",
    hero_degree: "East Port Said University of Technology",
    profile_role: " Food Processing Technology",
    stat_projects: "Projects",
    stat_certificates: "Certificates",
    stat_internships: "Internships",

    about_title: "About Me",
    about_text:
      "I am a student in Industrial and Energy Technology, interested in food manufacturing techniques and the development of production processes within food factories. I enjoy working on technical projects, learning modern technologies, and applying theoretical knowledge in practical environments.",
    about_highlights: "Highlights",
    hl1: "Participated in practical training in the field of food industries",
    hl2: "Knowledgeable in food processing operations, quality systems, and food safety",
    hl3: "Committed to safety procedures and teamwork in food production environments",
    about_education: "Education",
    edu1: "East Port Said University of Technology",
    edu1b: "Food Industrial Technology",
    edu2: "Expected Graduation: 2027",

    skills_title: "Skills",
    skills_tech: "Technical",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    soft1: "Communication",
    soft2: "Problem-solving",
    soft3: "Time management",

    projects_title: "Projects",
    p1_desc: "Seafood Processing & Quality Control Training – Abu El-Sayed Fish Factory Completed practical training at, focusing on fish handling, cleaning, processing, packaging, and applying food safety and quality control procedures.",
    p2_desc: "Field Visit – Frozen Food Processing Operations Field visit to , where I observed sorting and grading machines, washing and peeling equipment, cutting machines, blanching units, IQF freezing tunnels, cold storage rooms, and packaging lines. I also gained knowledge about industrial safety procedures and quality control measures applied during frozen food production..",
    p3_desc: "Graduation Project – Production of Cooked Fish Products A graduation project focused on the production of cooked fish products, such as fish sausages, including the study of preservation and storage methods. The project involved processing operations, quality control, and evaluating different techniques to ensure product safety and shelf-life..",

    contact_title: "Contact",
    contact_quick: "Quick Links",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Message",
    form_send: "Send",

    back_to_top: "Back to top ↑",
  },

  ar: {
    portfolio:"ملف الأعمال الشخصي",
    Download_cv:"السيرة الذاتية",

    hero_pill: "طالب متخصص في الصناعات الغذائية",
    hero_hi: "مرحبًا، أنا",
    hero_name:"مريم عبدالحي",
    hero_subtitle:
      "أنا طالبة في قسم الصناعات الغذائية بكلية الصناعة والطاقة، جامعة شرق بورسعيد التكنولوجية. أسعى لاكتساب خبرة عملية في مجالات تكنولوجيا وتصنيع الأغذية، مع التركيز على الجودة وسلامة الغذاء وتحسين العمليات الإنتاجية. يعرض هذا البورتفوليو مشاريعي وخبراتي التدريبية والمهارات التي أعمل على تطويرها استعدادًا لسوق العمل..",
    hero_btn_projects: "عرض المشاريع",
    hero_btn_contact: "تواصل معي",
    hero_location: "الإسماعيلية، مصر",
    hero_degree: "جامعة شرق بورسعيد التكنولوجية",
    profile_role: "تكنولوجيا الصناعات الغذائية",
    stat_projects: "المشاريع",
    stat_certificates: "الشهادات",
    stat_internships: "التدريبات",
    

    about_title: "نبذة عني",
    about_text:
      "أنا طالبة في تكنولوجيا الصناعة والطاقة، مهتمة بتقنيات تصنيع الأغذية وتطوير العمليات الإنتاجية داخل مصانع الغذاء. أستمتع بالعمل على المشروعات التقنية، وتعلّم التقنيات الحديثة، وتطبيق المعرفة النظرية في بيئات عملية..",
    about_highlights: "أبرز النقاط",
    hl1: "شاركت في تدريب عملي في مجال الصناعات الغذائية.",
    hl2: "لدي معرفة بعمليات تصنيع الأغذية، وأنظمة الجودة، وسلامة الغذاء.",
    hl3: "ملتزمة بإجراءات السلامة والعمل بروح الفريق في بيئات الإنتاج الغذائي.",
    about_education: "التعليم",
    edu1: "جامعة شرق بورسعيد التكنولوجية",
    edu1b: "تكنولوجيا الصناعات الغذائية ",
    edu2: "متوقع التخرج: 2027",

    skills_title: "المهارات",
    skills_tech: "المهارات التقنية",
    skills_tools: "الأدوات",
    skills_soft: "المهارات الشخصية",
    soft1: "التواصل",
    soft2: "حل المشكلات",
    soft3: "إدارة الوقت",

    projects_title: "المشاريع",
    p1_desc: "تدريب عملي في معالجة المأكولات البحرية ومراقبة الجودة – مصنع أبو السيد للأسماك أكملت تدريبًا عمليًا في المصنع، مع التركيز على التعامل مع الأسماك، تنظيفها، معالجتها، تعبئتها، وتطبيق إجراءات سلامة الغذاء ومراقبة الجودة..",
    p2_desc: "زيارة ميدانية – عمليات تصنيع الأغذية المجمدة قمت بزيارة ميدانية إلى المصنع، حيث شاهدت آلات الفرز والتصنيف، معدات الغسيل والتقشير، ماكينات التقطيع، وحدات السلق (Blanching)، أنفاق التجميد الفردي السريع (IQF)، غرف التخزين البارد، وخطوط التعبئة والتغليف. كما اكتسبت معرفة بإجراءات السلامة الصناعية وتدابير مراقبة الجودة المطبقة أثناء إنتاج الأغذية المجمدة..",
    p3_desc: "مشروع التخرج – إنتاج منتجات الأسماك المطبوخة مشروع تخرج ركز على إنتاج منتجات الأسماك المطبوخة، مثل سجق السمك، بما في ذلك دراسة طرق الحفظ والتخزين. شمل المشروع عمليات المعالجة، مراقبة الجودة، وتقييم تقنيات مختلفة لضمان سلامة المنتج وزيادة فترة الصلاحية..",

    contact_title: "التواصل",
    contact_quick: "روابط سريعة",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",

    back_to_top: "العودة إلى الأعلى ↑",



  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btn = $("#langToggle");
  const btnM = $("#langToggleMobile");
  const label = lang === "ar" ? "EN" : "AR";
  if (btn) btn.textContent = label;
  if (btnM) btnM.textContent = label;

  localStorage.setItem(LANG_KEY, lang);
}

function toggleLanguage() {
  const current = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(current === "en" ? "ar" : "en");
}

function setupMobileMenu() {
  const burger = $("#burger");
  const menu = $("#mobileMenu");
  if (!burger || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });

  $$(".mobileLink").forEach((a) => a.addEventListener("click", closeMenu));
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Replace with your real email:
    const to = "you@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function init() {
  // Footer year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  $("#themeToggleMobile")?.addEventListener("click", toggleTheme);

  // Language
  const savedLang = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(savedLang);
  $("#langToggle")?.addEventListener("click", toggleLanguage);
  $("#langToggleMobile")?.addEventListener("click", toggleLanguage);

  setupMobileMenu();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
