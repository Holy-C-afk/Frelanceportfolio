const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Mobile navigation ----------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

const setMenu = (open) => {
    navMenu.classList.toggle('active', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
};
hamburger.addEventListener('click', () => setMenu(!navMenu.classList.contains('active')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ---------- Scroll: progress bar, navbar border, active link ----------
const progress = document.querySelector('.scroll-progress');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');
let ticking = false;

const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    navbar.classList.toggle('scrolled', window.scrollY > 10);

    let current = '';
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
    ticking = false;
};
window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
    '.hero-content > *, .hero-image, .sec-head, .about-text > p, .stat-item, .skill-card, .project-card, ' +
    '.pricing-intro, .pricing-tier, .custom-title, .custom-chip, .contact-panel'
);
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.className === el.className);
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 4) * 0.07}s`);
    el.classList.add('reveal');
    io.observe(el);
});

// ---------- Hero parallax (chips + blobs drift with the pointer) ----------
const visual = document.querySelector(".hero-visual");
if (visual && !reduceMotion && matchMedia("(hover: hover)").matches) {
    const layers = [...visual.querySelectorAll(".chip, .blob")].map((el, i) => ({ el, k: (i % 3 + 1) * 7 }));
    window.addEventListener("pointermove", (e) => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        layers.forEach(({ el, k }) => { el.style.translate = `${x * k * 2}px ${y * k * 2}px`; });
    }, { passive: true });
}

// ---------- Count-up stats ----------
const countIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countIO.unobserve(entry.target);
        const el = entry.target;
        const end = parseInt(el.textContent, 10);
        const suffix = el.textContent.replace(/[0-9]/g, '');
        if (reduceMotion || isNaN(end)) return;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min((now - start) / 1200, 1);
            el.textContent = Math.round(end * (1 - Math.pow(1 - t, 4))) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-item h3').forEach((c) => countIO.observe(c));

// ---------- Contact form ----------
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const button = contactForm.querySelector('button[type="submit"]');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const original = button.textContent;
        button.textContent = `Thanks ${name || 'there'} — received ✓`;
        button.disabled = true;
        contactForm.reset();
        setTimeout(() => { button.textContent = original; button.disabled = false; }, 3500);
    });
}

// ---------- Footer year ----------
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
