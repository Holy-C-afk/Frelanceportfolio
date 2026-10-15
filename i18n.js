// English <-> Arabic switcher. English text in the HTML is the source of truth;
// Arabic is applied by swapping matching text nodes, so no markup duplication.
const AR = {
    "Clear starting prices for every service. All prices are in Moroccan Dirhams (MAD).": "أسعار بداية واضحة لكل خدمة. جميع الأسعار بالدرهم المغربي.",
    "Custom WordPress theme": "قالب ووردبريس مخصص",
    "Responsive and SEO-ready": "متجاوب وجاهز لمحركات البحث",
    "Content management setup": "إعداد إدارة المحتوى",
    "Hand-coded, any framework": "برمجة يدوية بأي إطار عمل",
    "Responsive with smooth animations": "متجاوب مع حركات سلسة",
    "Contact form and speed tuning": "نموذج تواصل وتحسين السرعة",
    "Online store with payments": "متجر إلكتروني مع الدفع",
    "Product and order management": "إدارة المنتجات والطلبات",
    "Secure and responsive": "آمن ومتجاوب",
    "Rule-based or AI chatbot": "روبوت محادثة بالقواعد أو بالذكاء الاصطناعي",
    "Workflow automation with n8n": "تشغيل المسارات آلياً باستخدام n8n",
    "Platform integrations": "ربط المنصات",
    "iOS and Android": "iOS وAndroid",
    "Clean UI/UX design": "تصميم واجهة وتجربة نظيف",
    "Desktop and custom software": "برمجيات سطح المكتب والمخصصة",
    "Database and API integration": "ربط قواعد البيانات وواجهات API",
    "Updates and backups": "تحديثات ونسخ احتياطي",
    "Security monitoring": "مراقبة أمنية",
    "Custom Request?": "طلب مخصص؟",
    "Bigger scope or something specific? Every custom request gets a custom price.": "مشروع أكبر أو طلب محدد؟ كل طلب مخصص له سعر مخصص.",
    "Get a quote": "اطلب عرض سعر",
    'Tachfine El Farouki - Freelancer Portfolio': 'تشفين الفاروقي - مهندس مستقل',
    'Home': 'الرئيسية', 'About': 'نبذة', 'Skills': 'المهارات', 'Projects': 'المشاريع', 'Pricing': 'الأسعار', 'Contact': 'تواصل',
    'Available for new projects': 'متاح لمشاريع جديدة',
    "Hi, I'm": 'مرحباً، أنا',
    'Freelance Engineer': 'مهندس مستقل',
    'I create innovative solutions and technical systems that help businesses grow and automate their processes.': 'أصمّم وأطوّر حلولاً تقنية وأنظمة ذكية تساعد الشركات على النمو وتشغيل أعمالها آلياً.',
    'View My Work': 'شاهد أعمالي', 'Get In Touch': 'تواصل معي',
    'About Me': 'نبذة عني',
    "I'm a passionate freelance engineer with years of experience creating innovative technical solutions. I help clients bring their ideas to life through clean code, automation, and efficient system design.": 'أنا مهندس مستقل شغوف بخبرة سنوات في ابتكار الحلول التقنية. أساعد العملاء على تحويل أفكارهم إلى واقع عبر كود نظيف وتشغيل آلي وتصميم أنظمة فعّال.',
    'My approach combines technical expertise with problem-solving skills to deliver solutions that not only meet requirements but also perform exceptionally well.': 'يجمع أسلوبي بين الخبرة التقنية ومهارات حل المشكلات لتقديم حلول لا تلبّي المتطلبات فحسب، بل تعمل بأداء ممتاز.',
    'Projects Completed': 'مشروع منجز', 'Happy Clients': 'عميل سعيد', 'Years Experience': 'سنوات خبرة',
    'Frontend Development': 'تطوير الواجهات الأمامية',
    'Backend Development': 'تطوير الواجهات الخلفية',
    'Node.js, PHP, Python, Java, C#, Database Design': 'Node.js, PHP, Python, Java, C#، تصميم قواعد البيانات',
    'WordPress Development': 'تطوير ووردبريس',
    'WordPress, PHP, Theme Development, Plugin Development': 'ووردبريس، PHP، تطوير القوالب، تطوير الإضافات',
    'Mobile App Development': 'تطوير تطبيقات الجوال',
    'iOS, Android, Cross-platform, React Native, Flutter': 'iOS، Android، متعدد المنصات، React Native، Flutter',
    'Software Development': 'تطوير البرمجيات',
    'Desktop Applications, Custom Software, C#, API Development': 'تطبيقات سطح المكتب، برمجيات مخصصة، C#، تطوير واجهات API',
    'Automation & Chatbots': 'التشغيل الآلي وروبوتات المحادثة',
    'n8n, Chatbots, Business Process Automation, AI Integration': 'n8n، روبوتات المحادثة، التشغيل الآلي للعمليات، دمج الذكاء الاصطناعي',
    'My Projects': 'مشاريعي',
    'E-Commerce Website': 'موقع تجارة إلكترونية',
    'A fully functional e-commerce platform with shopping cart, payment integration, and admin dashboard.': 'منصة تجارة إلكترونية متكاملة مع سلة تسوق وربط بالدفع ولوحة تحكم للإدارة.',
    'Blog Platform': 'منصة تدوين',
    'A modern blog platform with rich text editor, categories, tags, and comment system.': 'منصة تدوين حديثة مع محرر نصوص غني وتصنيفات ووسوم ونظام تعليقات.',
    'Analytics Dashboard': 'لوحة تحليلات',
    'An interactive dashboard for data visualization with real-time updates and customizable charts.': 'لوحة تفاعلية لعرض البيانات مع تحديثات لحظية ورسوم بيانية قابلة للتخصيص.',
    'Restaurant Website': 'موقع مطعم',
    'A beautiful restaurant website with menu display, online reservations, and location map.': 'موقع مطعم أنيق مع عرض القائمة والحجز عبر الإنترنت وخريطة الموقع.',
    'Task Management App': 'تطبيق إدارة المهام',
    'A productivity app for managing tasks with drag-and-drop, deadlines, and team collaboration.': 'تطبيق إنتاجية لإدارة المهام بالسحب والإفلات مع المواعيد النهائية والتعاون الجماعي.',
    'Business Portfolio': 'موقع أعمال تعريفي',
    'A professional portfolio website for a consulting firm with services, testimonials, and contact form.': 'موقع احترافي لشركة استشارات مع الخدمات وآراء العملاء ونموذج تواصل.',
    'RAG Automation with n8n': 'التشغيل الآلي لـ RAG باستخدام n8n',
    'An intelligent automation system using Retrieval-Augmented Generation (RAG) integrated with n8n workflows for enhanced AI-powered business process automation.': 'نظام تشغيل آلي ذكي يعتمد على التوليد المعزز بالاسترجاع (RAG) ومدمج مع مسارات n8n للتشغيل الآلي للأعمال مدعومة بالذكاء الاصطناعي.',
    'Automation': 'تشغيل آلي',
    'Charity Website': 'موقع جمعية خيرية',
    'A beautiful and functional charity website with donation system, volunteer registration, event management, and impact stories to help organizations make a difference.': 'موقع جمعية خيرية جميل وعملي مع نظام تبرعات وتسجيل المتطوعين وإدارة الفعاليات وقصص الأثر.',
    'Pricing & Tariffs': 'الأسعار والتعرفة',
    'Transparent pricing for all services. All prices are in Moroccan Dirhams (MAD).': 'أسعار واضحة لجميع الخدمات. جميع الأسعار بالدرهم المغربي.',
    'WordPress Websites': 'مواقع ووردبريس',
    'Starting from': 'ابتداءً من',
    'Custom WordPress Theme': 'قالب ووردبريس مخصص',
    'Fully Responsive Design': 'تصميم متجاوب بالكامل',
    'SEO Optimization': 'تحسين محركات البحث',
    'Premium Plugins Integration': 'دمج إضافات مميزة',
    'Contact Form Integration': 'دمج نموذج تواصل',
    'Performance Optimization': 'تحسين الأداء',
    'Content Management Setup': 'إعداد إدارة المحتوى',
    'Need more? Custom websites get a custom price —': 'تحتاج أكثر؟ المواقع المخصصة لها سعر مخصص —',
    'contact me': 'تواصل معي',
    'Coded Websites': 'مواقع مبرمجة',
    'HTML/CSS/JavaScript or modern frameworks': 'HTML/CSS/JavaScript أو أطر عمل حديثة',
    'Smooth Animations': 'حركات سلسة',
    'Contact Form': 'نموذج تواصل',
    'Basic': 'أساسي', 'Standard': 'قياسي', 'Premium': 'مميز',
    'Simple Rule-Based Chatbot': 'روبوت محادثة بسيط قائم على القواعد',
    'Basic Q&A Responses': 'ردود أسئلة وأجوبة أساسية',
    'Single Platform Integration': 'ربط بمنصة واحدة',
    'Up to 20 Responses': 'حتى 20 رداً',
    'AI-Powered Chatbot': 'روبوت محادثة بالذكاء الاصطناعي',
    'Natural Language Processing': 'معالجة اللغة الطبيعية',
    'Multi-Platform Integration': 'ربط بمنصات متعددة',
    'Up to 50 Responses': 'حتى 50 رداً',
    'Basic Analytics': 'تحليلات أساسية',
    'Advanced AI Chatbot': 'روبوت محادثة ذكي متقدم',
    'Machine Learning Integration': 'دمج التعلم الآلي',
    'Full Business Automation': 'تشغيل آلي كامل للأعمال',
    'Unlimited Responses': 'ردود غير محدودة',
    'Advanced Analytics & Reporting': 'تحليلات وتقارير متقدمة',
    'CRM Integration': 'ربط مع CRM',
    'E-Commerce Solutions': 'حلول التجارة الإلكترونية',
    'Basic Online Store': 'متجر إلكتروني أساسي',
    'Up to 20 Products': 'حتى 20 منتجاً',
    'Single Payment Gateway': 'بوابة دفع واحدة',
    'Basic Product Management': 'إدارة منتجات أساسية',
    'Full E-Commerce Platform': 'منصة تجارة إلكترونية كاملة',
    'Up to 100 Products': 'حتى 100 منتج',
    'Multiple Payment Gateways': 'بوابات دفع متعددة',
    'Order Tracking System': 'نظام تتبع الطلبات',
    'Inventory Management': 'إدارة المخزون',
    'Customer Accounts': 'حسابات العملاء',
    'Advanced E-Commerce Platform': 'منصة تجارة إلكترونية متقدمة',
    'Unlimited Products': 'منتجات غير محدودة',
    'All Payment Methods': 'جميع طرق الدفع',
    'Advanced Admin Dashboard': 'لوحة إدارة متقدمة',
    'Multi-vendor Support': 'دعم تعدد البائعين',
    'Advanced Analytics': 'تحليلات متقدمة',
    'Custom Features': 'ميزات مخصصة',
    'Mobile Apps': 'تطبيقات الجوال',
    'Simple App (iOS or Android)': 'تطبيق بسيط (iOS أو Android)',
    'Basic UI/UX Design': 'تصميم واجهة وتجربة أساسي',
    'Up to 5 Screens': 'حتى 5 شاشات',
    'Basic Functionality': 'وظائف أساسية',
    'Cross-Platform App (iOS & Android)': 'تطبيق متعدد المنصات (iOS وAndroid)',
    'Professional UI/UX Design': 'تصميم واجهة وتجربة احترافي',
    'Up to 15 Screens': 'حتى 15 شاشة',
    'Backend Integration': 'ربط مع الخادم',
    'App Store Optimization': 'تحسين ظهور التطبيق في المتاجر',
    'Push Notifications': 'إشعارات فورية',
    'Native iOS & Android Apps': 'تطبيقات أصلية لـ iOS وAndroid',
    'Premium UI/UX Design': 'تصميم واجهة وتجربة مميز',
    'Unlimited Screens': 'شاشات غير محدودة',
    'Advanced Features': 'ميزات متقدمة',
    'Custom Backend API': 'واجهة API خلفية مخصصة',
    'Real-time Features': 'ميزات لحظية',
    'Simple Desktop Application': 'تطبيق سطح مكتب بسيط',
    'Basic Features': 'ميزات أساسية',
    'Single Platform': 'منصة واحدة',
    'Basic Database': 'قاعدة بيانات أساسية',
    'Custom Software Solution': 'حل برمجي مخصص',
    'Multi-Platform Support': 'دعم منصات متعددة',
    'Database Design & Integration': 'تصميم قواعد البيانات وربطها',
    'API Development': 'تطوير واجهات API',
    'User Management': 'إدارة المستخدمين',
    'Enterprise Software Solution': 'حل برمجي للمؤسسات',
    'Complex Features & Logic': 'ميزات ومنطق معقد',
    'Full System Integration': 'ربط كامل للأنظمة',
    'Advanced Database Architecture': 'بنية قواعد بيانات متقدمة',
    'Custom API & Microservices': 'واجهات API وخدمات مصغّرة مخصصة',
    'Security & Compliance': 'الأمان والامتثال',
    'Maintenance & Support': 'الصيانة والدعم',
    'Website Maintenance': 'صيانة المواقع',
    'Monthly Updates': 'تحديثات شهرية',
    'Basic Security Monitoring': 'مراقبة أمنية أساسية',
    'Backup Services': 'خدمات النسخ الاحتياطي',
    'Email Support': 'دعم عبر البريد',
    'Weekly Updates': 'تحديثات أسبوعية',
    'Advanced Security Monitoring': 'مراقبة أمنية متقدمة',
    'Automated Backups': 'نسخ احتياطي تلقائي',
    'Priority Support': 'دعم ذو أولوية',
    'Content Updates (5/month)': 'تحديثات المحتوى (5 شهرياً)',
    'Daily Monitoring': 'مراقبة يومية',
    '24/7 Security Protection': 'حماية أمنية على مدار الساعة',
    'Real-time Backups': 'نسخ احتياطي لحظي',
    '24/7 Priority Support': 'دعم ذو أولوية على مدار الساعة',
    'Advanced Performance Optimization': 'تحسين أداء متقدم',
    'Unlimited Content Updates': 'تحديثات محتوى غير محدودة',
    'SEO Monitoring & Reports': 'مراقبة وتقارير SEO',
    'Custom Services & Solutions': 'خدمات وحلول مخصصة',
    'Need something specific? I offer custom solutions tailored to your needs.': 'تحتاج شيئاً محدداً؟ أقدّم حلولاً مخصصة تناسب احتياجاتك.',
    'Custom Scripts': 'سكربتات مخصصة',
    'Custom JavaScript, PHP, Python scripts for automation, data processing, or specific functionality.': 'سكربتات JavaScript وPHP وPython مخصصة للتشغيل الآلي ومعالجة البيانات أو وظائف محددة.',
    'E-Commerce Fixes': 'إصلاح المتاجر الإلكترونية',
    'Fix errors, bugs, and issues in your e-commerce website. Payment gateway problems, cart issues, checkout errors.': 'إصلاح الأخطاء والمشاكل في متجرك: بوابات الدفع، السلة، وإتمام الطلب.',
    'Error Fixing': 'إصلاح الأخطاء',
    'Debug and fix any website errors, bugs, or technical issues. Quick turnaround for urgent problems.': 'تصحيح وإصلاح أي أخطاء أو مشاكل تقنية في موقعك مع سرعة في المشاكل العاجلة.',
    'Custom Solutions': 'حلول مخصصة',
    'Unique solutions for specific business needs. Integration, automation, or custom functionality development.': 'حلول فريدة لاحتياجات عملك: ربط، تشغيل آلي، أو تطوير وظائف مخصصة.',
    'Website Optimization': 'تحسين المواقع',
    'Performance optimization, speed improvements, SEO enhancements, and security updates.': 'تحسين الأداء والسرعة وSEO وتحديثات الأمان.',
    'Plugin Development': 'تطوير الإضافات',
    'Custom WordPress plugins or modifications to existing plugins to meet your specific requirements.': 'إضافات ووردبريس مخصصة أو تعديل الإضافات الحالية حسب متطلباتك.',
    'Starting prices shown — the final quote depends on project requirements and complexity.': 'الأسعار المعروضة هي أسعار البداية — يعتمد العرض النهائي على متطلبات المشروع وتعقيده.',
    'Contact me': 'تواصل معي',
    'for a detailed quote!': 'للحصول على عرض سعر مفصل!',
    'Need a custom solution?': 'تحتاج حلاً مخصصاً؟',
    'for a personalized quote!': 'للحصول على عرض سعر خاص!',
    "Let's work together!": 'لنعمل معاً!',
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.": 'يسعدني دائماً مناقشة مشاريع جديدة وأفكار إبداعية وفرص للمشاركة في تحقيق رؤيتك.',
    'Morocco': 'المغرب',
    'Send Message': 'إرسال الرسالة',
    'Tachfine El Farouki. All rights reserved.': 'Tachfine El Farouki. جميع الحقوق محفوظة.'
};
// Section headings share text with nav links ("Contact"/"Get In Touch" etc.), so title overrides:
const AR_ATTR = {
    'Your Name': 'اسمك', 'Your Email': 'بريدك الإلكتروني', 'Subject': 'الموضوع', 'Your Message': 'رسالتك',
    'Toggle menu': 'القائمة', 'Scroll down': 'مرر للأسفل'
};
const AR_ROLES = ['مهندس مستقل', 'مطوّر Full-Stack', 'خبير تشغيل آلي', 'متخصص ووردبريس'];
const EN_ROLES = ['Freelance Engineer', 'Full-Stack Developer', 'Automation Builder', 'WordPress Specialist'];

const price = (t) => {
    let m = t.match(/^([\d,]+) MAD(\/month)?$/);
    if (m) return `${m[1]} درهم${m[2] ? ' / شهر' : ''}`;
    m = t.match(/^From ([\d,]+) MAD$/);
    if (m) return `ابتداءً من ${m[1]} درهم`;
    return null;
};

const originals = new WeakMap();
const attrOriginals = new WeakMap();
let current = 'en';

function walk(toArabic) {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: (n) => (n.parentElement && !['SCRIPT', 'STYLE'].includes(n.parentElement.tagName)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach((n) => {
        if (!toArabic) {
            if (originals.has(n)) { n.nodeValue = originals.get(n); originals.delete(n); }
            return;
        }
        if (n.parentElement.id === 'typed' || n.parentElement.id === 'year') return;
        const trimmed = n.nodeValue.replace(/\s+/g, ' ').trim();
        if (!trimmed) return;
        const ar = AR[trimmed] || price(trimmed);
        if (ar) {
            originals.set(n, n.nodeValue);
            n.nodeValue = n.nodeValue.replace(/^(\s*)[\s\S]*?(\s*)$/, (m, a, b) => a + ar + b);
        }
    });
    document.querySelectorAll('[placeholder], [aria-label]').forEach((el) => {
        ['placeholder', 'aria-label'].forEach((a) => {
            const v = el.getAttribute(a);
            if (v == null) return;
            if (toArabic) {
                if (AR_ATTR[v]) { attrOriginals.set(el, { ...(attrOriginals.get(el) || {}), [a]: v }); el.setAttribute(a, AR_ATTR[v]); }
            } else if (attrOriginals.get(el)?.[a]) {
                el.setAttribute(a, attrOriginals.get(el)[a]);
            }
        });
    });
}

let originalTitle = document.title;
function setLang(lang, persist = true) {
    if (lang === current) return;
    const ar = lang === 'ar';
    walk(ar);
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    document.title = ar ? AR['Tachfine El Farouki - Freelancer Portfolio'] : originalTitle;
    const btn = document.querySelector('.lang-toggle');
    if (btn) { btn.textContent = ar ? 'EN' : 'عربي'; btn.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية'); }
    current = lang;
    window.__roles = ar ? AR_ROLES : EN_ROLES;
    window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    if (persist) { try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ } }
}

window.__roles = EN_ROLES;
document.querySelector('.lang-toggle')?.addEventListener('click', () => setLang(current === 'ar' ? 'en' : 'ar'));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
if (saved === 'ar') setLang('ar', false);
