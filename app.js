// app.js — loads data.json and builds every section of index.html
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isImg = (s) => /\.(png|jpe?g|gif|webp|svg)$/i.test(s || '');
  const set = (id, fn) => { const el = $(id); if (el) fn(el); };

  async function load() {
    const res = await fetch('data.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('data.json not found (' + res.status + ')');
    return res.json();
  }

  function render(d) {
    const { meta, hero, about, experience, skills, projects, education, contact, footer } = d;

    // Meta / SEO
    document.title = meta.siteTitle;
    set('meta-desc', (e) => e.setAttribute('content', meta.siteDescription));
    set('og-title', (e) => e.setAttribute('content', meta.siteTitle));
    set('og-desc', (e) => e.setAttribute('content', meta.siteDescription));
    ['nav-resume', 'mobile-resume', 'btn-resume'].forEach((id) =>
      set(id, (e) => { e.href = meta.resumeUrl; e.setAttribute('download', meta.resumeUrl); }));

    // Hero
    set('hero-name', (e) => (e.textContent = hero.name));
    set('hero-title', (e) => (e.textContent = hero.title.replace(/\s+\|\s+/g, ' | ')));
    set('hero-tagline', (e) => (e.textContent = hero.tagline));
    set('hero-location', (e) => (e.textContent = hero.location));
    set('photo-inner', (e) => {
      const img = e.querySelector('img');
      if (!img) return;
      img.src = hero.photo;
      img.onerror = () => { e.innerHTML = '<i class="fa fa-user" style="font-size:4rem;color:var(--gold)"></i>'; };
    });

    // About
    set('about-paragraphs', (e) => (e.innerHTML = about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')));
    set('about-highlights', (e) => (e.innerHTML = about.highlights.map((h) =>
      `<div class="highlight-card reveal"><i class="fa ${esc(h.icon)}"></i><h4>${esc(h.label)}</h4><span>${esc(h.value)}</span></div>`).join('')));

    // Experience
    set('experience-content', (e) => (e.innerHTML = experience.map((x) => `
      <article class="experience-card reveal">
        <span class="experience-period">${esc(x.period)}</span>
        <h3>${esc(x.role)}</h3>
        <p class="experience-company">${esc(x.company)} <span>· ${esc(x.location)}</span></p>
        <p class="experience-summary">${esc(x.summary)}</p>
        <h4 class="experience-subtitle">Key Responsibilities</h4>
        <ul class="experience-list">${(x.responsibilities || []).map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
        <h4 class="experience-subtitle">Automation &amp; Tool Contributions</h4>
        <div class="contributions-grid">${(x.contributions || []).map((c) =>
          `<div class="contribution-card"><h4>${esc(c.name)}</h4><p>${esc(c.description)}</p></div>`).join('')}</div>
      </article>`).join('')));

    // Skills
    set('skills-grid', (e) => (e.innerHTML = skills.map((s) => `
      <div class="skill-card reveal">
        <div class="skill-card-header"><div class="skill-icon"><i class="fa ${esc(s.icon)}"></i></div><h3 class="skill-cat-name">${esc(s.category)}</h3></div>
        <div class="skill-pills">${s.items.map((i) => `<span class="pill">${esc(i)}</span>`).join('')}</div>
      </div>`).join('')));

    // Projects
    set('projects-grid', (e) => {
      e.innerHTML = projects.map((p) => {
        const external = p.link && !isImg(p.link);
        return `
        <div class="project-card reveal">
          <div class="project-img" data-img="${esc(p.image)}">
            <img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" onerror="this.style.display='none'" />
          </div>
          <div style="padding:24px">
            <div class="project-cat">${esc(p.category)}</div>
            <h3 class="project-title">${esc(p.title)}</h3>
            <p class="project-desc">${esc(p.description)}</p>
            <div class="project-tags">${(p.tools || []).map((t) => `<span class="project-tag">${esc(t)}</span>`).join('')}</div>
            <div class="project-tags">${(p.skills || []).map((t) => `<span class="project-tag" style="color:var(--gold)">${esc(t)}</span>`).join('')}</div>
            ${external ? `<a class="btn btn-outline" style="margin-top:12px" href="${esc(p.link)}" target="_blank" rel="noopener"><i class="fa fa-arrow-up-right-from-square"></i> Open Live Tool</a>` : ''}
          </div>
        </div>`;
      }).join('');
      e.querySelectorAll('.project-img').forEach((el) =>
        el.addEventListener('click', () => window.showImage(el.dataset.img)));
    });

    // Education
    set('edu-timeline', (e) => (e.innerHTML = education.map((x) => `
      <div class="edu-item reveal">
        <div class="edu-dot"></div>
        <div class="edu-card">
          <div class="edu-badge"><span>${esc(x.period)}</span>
            <span class="status-pill ${/progress|pursuing/i.test(x.status) ? 'status-progress' : 'status-completed'}">${esc(x.status)}</span></div>
          <h3 class="edu-degree">${esc(x.degree)}</h3>
          <p class="edu-institution">${esc(x.institution)}</p>
          <p class="edu-desc">${esc(x.description)}</p>
        </div>
      </div>`).join('')));

    // Contact
    set('contact-cards', (e) => (e.innerHTML = [
      ['fa-envelope', 'Email', `<a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a>`],
      ['fa-linkedin-in fab', 'LinkedIn', `<a href="${esc(contact.linkedin)}" target="_blank" rel="noopener">View Profile</a>`],
      ['fa-map-marker-alt', 'Location', esc(contact.location)],
    ].map(([ic, label, val]) => `
      <div class="contact-card">
        <div class="contact-card-icon"><i class="${ic.includes('fab') ? ic.replace(' fab', '') + ' fab' : 'fa ' + ic}"></i></div>
        <div><div class="contact-card-label">${label}</div><div class="contact-card-val">${val}</div></div>
      </div>`).join('')));

    // Footer
    set('footer-tagline', (e) => (e.textContent = footer.tagline));
    set('footer-copy', (e) => (e.textContent = `© ${new Date().getFullYear()} ${footer.copyright}. All rights reserved.`));
    set('footer-linkedin', (e) => (e.href = contact.linkedin));
    set('footer-email', (e) => (e.href = 'mailto:' + contact.email));

    // Contact form: Formspree if configured, otherwise opens the visitor's email app
    set('contact-form', (form) => form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const f = new FormData(form);
      const btn = form.querySelector('button[type=submit]');
      const note = form.querySelector('.form-note');
      if (!contact.formspreeId || contact.formspreeId === 'YOUR_FORMSPREE_ID') {
        const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`;
        location.href = `mailto:${contact.email}?subject=${encodeURIComponent(f.get('subject') || 'Portfolio enquiry')}&body=${encodeURIComponent(body)}`;
        return;
      }
      btn.disabled = true;
      try {
        const r = await fetch('https://formspree.io/f/' + contact.formspreeId, { method: 'POST', body: f, headers: { Accept: 'application/json' } });
        note.textContent = r.ok ? 'Thank you! Your message has been sent.' : 'Something went wrong. Please email me directly.';
        if (r.ok) form.reset();
      } catch { note.textContent = 'Network error. Please email me directly.'; }
      btn.disabled = false;
    }));

    initUI();
  }

  function initUI() {
    const nav = $('navbar'), top = $('back-to-top'), burger = $('hamburger'), menu = $('mobile-menu');
    const onScroll = () => {
      nav.classList.toggle('scrolled', scrollY > 40);
      top.classList.toggle('visible', scrollY > 500);
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    top.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
    burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { burger.classList.remove('open'); menu.classList.remove('open'); }));

    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  load().then(render).catch((err) => {
    console.error(err);
    const m = document.createElement('div');
    m.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#7a1f1f;color:#fff;padding:12px 16px;z-index:99999;font:14px sans-serif';
    m.textContent = 'Could not load data.json — check the file is in the same folder and is valid JSON. (' + err.message + ')';
    document.body.appendChild(m);
  });
})();
