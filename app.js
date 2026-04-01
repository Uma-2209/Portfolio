/* ════════════════════════════════════════════════════════
   Uma Bhargavi Portfolio — app.js
   Reads data.json and builds the entire page dynamically.
   To update content: edit data.json only.
   ════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════
// ✏️  TO UPDATE YOUR PORTFOLIO — edit the data object below
// ══════════════════════════════════════════════════════════
const PORTFOLIO_DATA = {
  "meta": {
    "siteTitle": "Uma Bhargavi | CMA & Financial Analyst",
    "siteDescription": "Cost and Management Accountant | Financial Analysis Enthusiast based in Nellore, India.",
    "siteUrl": "https://uma-2209.github.io/Portfolio",
    "resumeUrl": "uma_bhargavi_resume.pdf"
  },
  "hero": {
    "name": "Uma Bhargavi",
    "title": "Cost and Management Accountant  |  Financial Analysis Enthusiast",
    "tagline": "Turning Financial Data into Strategic Insights",
    "location": "Nellore, India",
    "email": "umabhargavi090602@gmail.com",
    "linkedin": "https://www.linkedin.com/in/uma-bhargavi-balaji-9a180032a",
    "photo": "photo.jpg"
  },
  "about": {
    "paragraphs": [
      "I am a qualified Cost and Management Accountant (CMA) with strong expertise in financial accounting, cost management, budgeting, and financial analysis. My foundation in management accounting gives me a unique lens to evaluate business performance and identify opportunities for growth.",
      "I am passionate about transforming complex financial data into clear, strategic insights that drive informed decision-making. With a keen interest in finance analytics, macroeconomic research, and AI-powered financial tools, I stay at the forefront of how technology is reshaping the finance profession.",
      "My long-term goal is to contribute to organizations in financial analysis, strategic finance, or consulting roles — helping leadership navigate decisions with confidence and precision."
    ],
    "highlights": [
      { "icon": "fa-chart-line", "label": "Financial Analysis", "value": "Advanced" },
      { "icon": "fa-calculator", "label": "Cost Accounting", "value": "Expert" },
      { "icon": "fa-brain", "label": "Strategic Thinking", "value": "Strong" },
      { "icon": "fa-robot", "label": "AI Finance Tools", "value": "Proficient" }
    ]
  },
  "skills": [
    {
      "category": "Finance & Accounting",
      "icon": "fa-landmark",
      "items": ["Financial Accounting", "Cost Accounting", "Budgeting", "Variance Analysis", "Financial Reporting", "Cost Control", "Management Accounting"]
    },
    {
      "category": "Analytics & Analysis",
      "icon": "fa-chart-bar",
      "items": ["Financial Analysis", "Trend Analysis", "Forecasting", "Macro-Economic Analysis", "Sensitivity Analysis", "KPI Tracking", "Margin Analysis"]
    },
    {
      "category": "Tools & Technology",
      "icon": "fa-tools",
      "items": ["Microsoft Excel", "Canva", "PowerPoint", "Perplexity AI", "AI Tools for Finance", "Dashboard Reporting", "Data Visualization"]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Crude Oil Volatility & Margin Sensitivity Analysis",
      "category": "Macro-Financial Research",
      "description": "Conducted a comprehensive Q4 FY26 analysis monitoring macro-critical variables and supply chain health following Strait of Hormuz disruptions. Key finding: every $10/bbl rise widens India's CAD by ~0.5% of GDP.",
      "tools": ["Perplexity AI", "Canva", "Sensitivity Analysis", "Financial Modeling"],
      "skills": ["Macro-Economic Analysis", "Financial Analysis", "Margin Sensitivity", "Risk Assessment"],
      "image": "project1.png",
      "link": "project1.png"
    },
    {
      "id": 2,
      "title": "CMA Cost Analysis Tool",
      "category": "Financial Analysis",
      "description": "Built a live interactive cost analysis web app using Python and Streamlit. Uploads CSV data, auto-calculates Total Cost and Cost Per Unit, and displays an interactive bar chart.",
      "tools": ["Python", "Streamlit", "Pandas", "Plotly"],
      "skills": ["Cost Management", "Data Visualization", "Financial Analysis"],
      "image": "",
      "link": "https://uma22-design-cost-tool-app-7axwaw.streamlit.app"
    },
    {
      "id": 3,
      "title": "Company Financial Analyzer",
      "category": "Financial Analysis",
      "description": "AI-powered financial analyzer. Type any company ticker for real-time revenue, profit margins, and stock trends. Upload Annual Report PDF for instant AI insights.",
      "tools": ["Python", "Streamlit", "yFinance", "Gemini AI", "PyPDF2"],
      "skills": ["Financial Analysis", "AI Tools", "Data Visualization"],
      "image": "",
      "link": "https://finance-tool-srvn9fv9fkrkswt4smsi59.streamlit.app"
    }
  ],
  "education": [
    {
      "degree": "Cost and Management Accountant (CMA)",
      "institution": "Institute of Cost Accountants of India",
      "period": "Qualified",
      "status": "Completed",
      "description": "Comprehensive qualification covering cost accounting, management accounting, financial management, taxation, and strategic management."
    },
    {
      "degree": "Bachelor of Commerce (B.Com)",
      "institution": "Vikrama Simhapuri University",
      "period": "Graduated",
      "status": "Completed",
      "description": "Studied core commerce subjects including financial accounting, business economics, corporate law, and taxation, building a strong foundation for the accounting profession."
    },
    {
      "degree": "MA Sociology",
      "institution": "Indira Gandhi National Open University (IGNOU)",
      "period": "Pursuing",
      "status": "In Progress",
      "description": "Studying social systems, research methodology, and organisational behaviour."
    }
  ],
  "contact": {
    "email": "umabhargavi090602@gmail.com",
    "linkedin": "https://www.linkedin.com/in/uma-bhargavi-balaji-9a180032a",
    "location": "Nellore, Andhra Pradesh, India",
    "formspreeId": "YOUR_FORMSPREE_ID"
  },
  "footer": {
    "tagline": "Driven by curiosity, analysis, and continuous learning.",
    "copyright": "Uma Bhargavi"
  }
};

// Boot the app with embedded data
init(PORTFOLIO_DATA);

// ── Main initialiser ─────────────────────────────────────
function init(data) {
  buildMeta(data.meta, data.hero);
  buildHero(data.hero, data.meta);
  buildAbout(data.about);
  buildSkills(data.skills);
  buildProjects(data.projects);
  buildEducation(data.education);
  buildInterests(data.careerInterests);
  buildPortfolio(data.portfolio);
  buildContact(data.contact);
  buildFooter(data.footer, data.contact);
  initNav();
  initScroll();
  initForm(data.contact);
  initBackToTop();
}

// ── Meta / SEO ───────────────────────────────────────────
function buildMeta(meta, hero) {
  document.title = meta.siteTitle;
  qs('#meta-desc').setAttribute('content', meta.siteDescription);
  qs('#og-title').setAttribute('content', meta.siteTitle);
  qs('#og-desc').setAttribute('content', meta.siteDescription);
}

// ── Hero ─────────────────────────────────────────────────
function buildHero(hero, meta) {
  setText('#hero-name', hero.name);
  setText('#hero-title', hero.title);
  setText('#hero-tagline', '"' + hero.tagline + '"');
  setText('#hero-location', hero.location);

  // Resume button
  const resumeBtn = qs('#btn-resume');
  if (meta.resumeUrl) resumeBtn.href = meta.resumeUrl;
  resumeBtn.setAttribute('download', '');

  // Nav resume
  const navResume = qs('#nav-resume');
  if (meta.resumeUrl) { navResume.href = meta.resumeUrl; navResume.setAttribute('download',''); }

  // Photo
  if (hero.photo) {
    const wrap = qs('#photo-inner');
    const img = new Image();
    img.onload = function() {
      wrap.innerHTML = '';
      img.alt = hero.name;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:14px;';
      wrap.appendChild(img);
    };
    img.onerror = function() {
      // keep placeholder if image fails
    };
    img.src = hero.photo;
  }
}

// ── About ─────────────────────────────────────────────────
function buildAbout(about) {
  const paraContainer = qs('#about-paragraphs');
  about.paragraphs.forEach(p => {
    const el = document.createElement('p');
    el.textContent = p;
    paraContainer.appendChild(el);
  });

  const grid = qs('#about-highlights');
  about.highlights.forEach(h => {
    grid.innerHTML += `
      <div class="highlight-card reveal">
        <i class="fa ${h.icon}"></i>
        <h4>${h.label}</h4>
        <span>${h.value}</span>
      </div>`;
  });
}

// ── Skills ────────────────────────────────────────────────
function buildSkills(skills) {
  const grid = qs('#skills-grid');
  skills.forEach((cat, i) => {
    const pills = cat.items.map(s => `<span class="pill">${s}</span>`).join('');
    grid.innerHTML += `
      <div class="skill-card reveal reveal-delay-${Math.min(i+1,3)}">
        <div class="skill-card-header">
          <div class="skill-icon"><i class="fa ${cat.icon}"></i></div>
          <span class="skill-cat-name">${cat.category}</span>
        </div>
        <div class="skill-pills">${pills}</div>
      </div>`;
  });
}

// ── Projects ──────────────────────────────────────────────
function buildProjects(projects) {
  const grid = qs('#projects-grid');
  projects.forEach((p, i) => {
    const toolTags = p.tools.map(t => `<span class="project-tag">${t}</span>`).join('');
    const skillTags = p.skills.map(s => `<span class="project-tag" style="color:var(--gold-light)">${s}</span>`).join('');
    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.title}" />`
      : `<i class="fa fa-chart-pie"></i>`;
    const linkBtn = p.link
      ? `<a href="${p.link}" target="_blank" class="project-link-btn">View Project <i class="fa fa-arrow-right"></i></a>`
      : `<span class="project-link-btn" style="opacity:0.4">Coming Soon</span>`;

    grid.innerHTML += `
      <div class="project-card reveal reveal-delay-${Math.min(i+1,3)}">
        <div class="project-img">${imgContent}</div>
        <div class="project-cat">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${toolTags}</div>
        <div class="project-tags">${skillTags}</div>
        <div class="project-footer">
          <span>Project ${String(i+1).padStart(2,'0')}</span>
          ${linkBtn}
        </div>
      </div>`;
  });
}

// ── Education ─────────────────────────────────────────────
function buildEducation(education) {
  const tl = qs('#edu-timeline');
  education.forEach(e => {
    const statusClass = e.status === 'Completed' ? 'status-completed' : 'status-progress';
    tl.innerHTML += `
      <div class="edu-item reveal">
        <div class="edu-dot"></div>
        <div class="edu-card">
          <div class="edu-badge">
            <i class="fa fa-graduation-cap"></i> ${e.period}
            <span class="status-pill ${statusClass}" style="margin-left:8px">${e.status}</span>
          </div>
          <h3 class="edu-degree">${e.degree}</h3>
          <p class="edu-institution"><i class="fa fa-university" style="margin-right:6px;opacity:0.6"></i>${e.institution}</p>
          <p class="edu-desc">${e.description}</p>
        </div>
      </div>`;
  });
}

// ── Certifications ────────────────────────────────────────
function buildCerts(certs) {
  const container = qs('#certs-grid');
  certs.forEach(c => {
    const statusClass = c.status === 'Completed' ? 'status-completed' : 'status-progress';
    container.innerHTML += `
      <div class="cert-card reveal">
        <div class="cert-icon"><i class="fa ${c.icon}"></i></div>
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer} · ${c.year}</div>
          <span class="status-pill ${statusClass}">${c.status}</span>
        </div>
      </div>`;
  });
}

// ── Career Interests ──────────────────────────────────────
function buildInterests(interests) {
  const grid = qs('#interests-grid');
  interests.forEach((item, i) => {
    grid.innerHTML += `
      <div class="interest-card reveal reveal-delay-${Math.min(i+1,4)}">
        <div class="interest-icon"><i class="fa ${item.icon}"></i></div>
        <h3 class="interest-title">${item.title}</h3>
        <p class="interest-desc">${item.desc}</p>
      </div>`;
  });
}

// ── Portfolio ─────────────────────────────────────────────
function buildPortfolio(portfolio) {
  const grid = qs('#portfolio-grid');
  portfolio.forEach(p => {
    const inner = p.link
      ? `<a href="${p.link}" target="_blank" class="port-card-link">View <i class="fa fa-external-link-alt"></i></a>`
      : `<span class="port-card-link" style="opacity:0.4">Add Link in data.json</span>`;
    grid.innerHTML += `
      <div class="port-card reveal">
        <i class="fab ${p.icon}" style="${p.icon.startsWith('fa-l') ? '' : ''}"></i>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        ${inner}
      </div>`;
  });

  // Fix icon class (some are fab, some fa)
  grid.querySelectorAll('.port-card i').forEach(el => {
    const cls = el.className;
    if (cls.includes('fa-linkedin') || cls.includes('fa-github')) {
      el.className = cls.replace('fa ', 'fab ').replace('fas ', 'fab ');
    }
  });
}

// ── Contact ───────────────────────────────────────────────
function buildContact(contact) {
  const cards = qs('#contact-cards');
  const items = [
    { icon: 'fa-envelope', label: 'Email', val: `<a href="mailto:${contact.email}">${contact.email}</a>` },
    { icon: 'fa-linkedin', label: 'LinkedIn', val: `<a href="${contact.linkedin}" target="_blank">View Profile</a>`, fab: true },
    { icon: 'fa-map-marker-alt', label: 'Location', val: contact.location }
  ];
  items.forEach(item => {
    const iconClass = item.fab ? 'fab' : 'fa';
    cards.innerHTML += `
      <div class="contact-card reveal">
        <div class="contact-card-icon"><i class="${iconClass} ${item.icon}"></i></div>
        <div>
          <div class="contact-card-label">${item.label}</div>
          <div class="contact-card-val">${item.val}</div>
        </div>
      </div>`;
  });

  // Set form action if Formspree ID provided
  const form = qs('#contact-form');
  if (contact.formspreeId && contact.formspreeId !== 'YOUR_FORMSPREE_ID') {
    form.setAttribute('action', `https://formspree.io/f/${contact.formspreeId}`);
    form.setAttribute('method', 'POST');
  }
}

// ── Footer ────────────────────────────────────────────────
function buildFooter(footer, contact) {
  setText('#footer-tagline', `"${footer.tagline}"`);
  qs('#footer-linkedin').href = contact.linkedin;
  qs('#footer-email').href = `mailto:${contact.email}`;
  setText('#footer-copy', `© ${new Date().getFullYear()} ${footer.copyright}. All rights reserved.`);
}

// ── Nav: scroll effect + hamburger ───────────────────────
function initNav() {
  const navbar = qs('#navbar');
  const hamburger = qs('#hamburger');
  const mobileMenu = qs('#mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── Scroll reveal ─────────────────────────────────────────
function initScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe existing reveals + MutationObserver for dynamically added ones
  const observeAll = () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };
  observeAll();

  const mo = new MutationObserver(observeAll);
  mo.observe(document.body, { childList: true, subtree: true });
}

// ── Contact form ──────────────────────────────────────────
function initForm(contact) {
  const form = qs('#contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.innerHTML;

    if (contact.formspreeId && contact.formspreeId !== 'YOUR_FORMSPREE_ID') {
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      try {
        const resp = await fetch(form.action, {
          method: 'POST', body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          btn.innerHTML = '<i class="fa fa-check"></i> Message Sent!';
          btn.style.background = '#48c78e';
          form.reset();
          setTimeout(() => { btn.innerHTML = origText; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else { throw new Error(); }
      } catch {
        btn.innerHTML = '<i class="fa fa-exclamation"></i> Error – Try Email Directly';
        btn.style.background = '#e05c5c';
        setTimeout(() => { btn.innerHTML = origText; btn.style.background = ''; btn.disabled = false; }, 4000);
      }
    } else {
      // Fallback: mailto
      const name    = form.querySelector('[name="name"]').value;
      const email   = form.querySelector('[name="email"]').value;
      const subject = form.querySelector('[name="subject"]').value;
      const message = form.querySelector('[name="message"]').value;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    }
  });
}

// ── Back to top ───────────────────────────────────────────
function initBackToTop() {
  const btn = qs('#back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Utility ───────────────────────────────────────────────
function qs(sel) { return document.querySelector(sel); }
function setText(sel, val) { const el = qs(sel); if (el) el.textContent = val; }
