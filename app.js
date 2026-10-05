(() => {
  const P = window.PORTFOLIO, S = window.SYMBOLS;
  const app = document.getElementById('app');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const byId = id => P.projects.find(p => p.id === +id);
  const sym = n => S[n] || '';
  const year = new Date().getFullYear();

  /* ---------- reusable pieces ---------- */
  const tocItem = p => `
    <a class="toc-item reveal" href="#/p/${p.id}" data-peek="${esc(p.hero)}" aria-label="${esc(p.title)}, ${esc(p.place)}">
      <span class="num"><small>.</small>${pad(p.id)}</span>
      <span class="t">${esc(p.short[0])}<br>${esc(p.short[1])}<span>${esc(p.place)}</span></span>
      <span class="sym" aria-hidden="true">${sym(p.id)}</span>
    </a>`;
  const footer = () => `<footer class="foot"><span>© ${year} ${esc(P.name.join(' '))}</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></footer>`;
  const door = (n, t, d, href, cls, o = {}) => `
    <a class="door ${cls} ${o.w || ''}" href="${esc(href)}" ${o.ext ? 'target="_blank" rel="noopener"' : ''}>
      ${o.sym ? `<span class="bgsym" aria-hidden="true">${sym(o.sym)}</span>` : ''}
      <span class="n"><span>${n}</span>${o.ext ? '<span>↗</span>' : ''}</span>
      <div><h2>${t}</h2><p>${d}</p></div>
      <span class="go">${o.go || 'Enter'} <i>→</i></span>
    </a>`;

  /* ---------- views ---------- */
  function landing() {
    const L = P.links;
    const chars = w => [...w].map(c => `<span class="ch">${esc(c)}</span>`).join('');
    const rings = [['#4a6865', 300], ['#b53a2f', 240], ['#f87343', 180], ['#ffac52', 120], ['#121314', 60]]
      .map(([c, r], i) => `<path data-i="${i}" pathLength="1" stroke="${c}" style="animation-delay:${i * 130}ms" d="M0 ${340 - r}A${r} ${r} 0 0 1 ${r} 340"/>`).join('');
    app.innerHTML = `<div class="view wrap">
      <section class="hero" id="hero">
        <div class="hero-top"><span>${esc(P.tagline)}</span><span>${year}</span></div>
        <h1 class="name" aria-label="${esc(P.name.join(' '))}">${P.name.map(w => `<span class="row" aria-hidden="true">${chars(w)}</span>`).join('')}</h1>
        <svg class="arcs" viewBox="0 0 340 340" aria-hidden="true">${rings}</svg>
      </section>
      <nav class="doors" aria-label="Portfolio sections">
        ${door('01', 'Résumé', 'Education, experience and software.', '#/resume', 'c-black w3', { go: 'Read' })}
        ${door('02', 'Rosie’s Home', 'My Rural Studio project, on the Rural Studio website.', L.rosie, 'c-red w3', { ext: true, go: 'Visit', sym: 3 })}
        ${door('03', 'School Work', 'Five studio projects from Auburn.', '#/school', 'c-teal', { sym: 1 })}
        ${door('04', 'Professional Work', 'Renderings from my time in practice.', '#/p/6/professional', 'c-orange', { sym: 6 })}
        ${door('05', 'Personal Work', 'Freelance, AI, Full 9 Yards and my Etsy shop.', '#/personal', 'c-amber', { sym: 4 })}
      </nav>
      <div class="sec-head"><h2>Table of Contents</h2><span>Select a symbol</span></div>
      <div class="toc">${P.projects.map(tocItem).join('')}</div>
      ${footer()}
    </div>`;
    const hero = $('#hero');
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      $$('.arcs path').forEach(p => p.style.transform = `translate(${x * (+p.dataset.i + 1) * 9}px,${y * (+p.dataset.i + 1) * 9}px)`);
    });
  }

  function school() {
    const list = P.projects.filter(p => p.section === 'school');
    app.innerHTML = `<div class="view wrap">
      <div class="page-head"><a class="crumb" href="#/">← Home</a>
        <h1 class="page-title">School Work</h1>
        <p class="lede">Auburn University School of Architecture, including Rural Studio.</p></div>
      <div class="toc" style="margin-top:24px">${list.map(tocItem).join('')}</div>
      ${footer()}</div>`;
  }

  function personal() {
    const L = P.links, p6 = byId(6);
    app.innerHTML = `<div class="view wrap">
      <div class="page-head"><a class="crumb" href="#/">← Home</a>
        <h1 class="page-title">Personal Work</h1>
        <p class="lede">What I make outside of studio and the office.</p></div>
      <div class="cards">
        <a class="pcard" href="#/p/6/personal"><div class="card-sym sym-hover sym">${sym(6)}</div><div><h3>Freelance, AI &amp; Making</h3><p>Client renderings, generated concepts and the Aalto stools.</p><span class="go">Open →</span></div></a>
        <a class="pcard" href="${esc(L.fullNineYards)}" target="_blank" rel="noopener"><div class="card-sym sym-hover sym"></div><div><h3>Full 9 Yards</h3><p>The full personal portfolio ↗</p><span class="go">Visit →</span></div></a>
        <a class="pcard" href="${esc(L.etsy)}" target="_blank" rel="noopener"><div class="card-sym sym-hover sym"></div><div><h3>Etsy Shop</h3><p>Things I design and sell ↗</p><span class="go">Visit →</span></div></a>
      </div>
      ${footer()}</div>`;
    // reuse the project symbols on the external cards so the page reads as one system
    const els = $$('.pcard .card-sym');
    els[1].innerHTML = sym(5); els[2].innerHTML = sym(4);
    void p6;
  }

  let current = { list: [], i: 0 };
  function project(id, group) {
    const p = byId(id);
    if (!p) return landing();
    const groups = p.groups ? Object.keys(p.groups) : null;
    const g = groups ? (groups.includes(group) ? group : groups[0]) : null;
    const imgs = p.images.filter(im => !g || im.g === g);
    const idx = P.projects.findIndex(x => x.id === p.id);
    const prev = P.projects[(idx - 1 + P.projects.length) % P.projects.length], next = P.projects[(idx + 1) % P.projects.length];
    const navCell = (q, cls, lab) => `<a class="${cls}" href="#/p/${q.id}"><div><small>${lab}</small><b>.${pad(q.id)} ${esc(q.short[0])}</b></div><span class="sym" style="color:var(--slate)">${sym(q.id)}</span></a>`;
    app.innerHTML = `<div class="view wrap">
      <section class="p-hero"><img src="${esc(p.hero)}" alt="${esc(p.title)}">
        <div class="ov"><span class="big">.${pad(p.id)}</span><span class="ttl">${esc(p.short[0])}<br>${esc(p.short[1])}<br>${esc(p.place)}</span>${sym(p.id)}</div></section>
      <section class="p-body">
        <aside class="p-side">
          <div class="sym sym-hover">${sym(p.id)}</div>
          <div class="n">${pad(p.id)}.</div>
          <h1>${esc(p.title)}</h1><p class="sub">${esc(p.subtitle)}</p>
          <div class="loc">${esc(p.place)}</div>
          ${p.link ? `<a class="btn" href="${esc(P.links[p.link.key])}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>` : ''}
        </aside>
        <div class="p-text">${p.text.map(t => `<p>${esc(t)}</p>`).join('')}</div>
      </section>
      <section id="gallery">
        ${groups ? `<div class="tabs" role="tablist">${groups.map(k => `<a class="tab ${k === g ? 'on' : ''}" role="tab" href="#/p/${p.id}/${k}">${esc(p.groups[k])}</a>`).join('')}</div>` : ''}
        <div class="gallery">${imgs.map((im, i) => `
          <button class="shot reveal" data-i="${i}" aria-label="Open image: ${esc(im.cap)}">
            <span class="frame"><img src="${esc(im.src)}" alt="${esc(im.cap)}" loading="lazy"></span>
            <span class="cap">${esc(im.cap)}</span></button>`).join('')}</div>
      </section>
      <nav class="p-nav" aria-label="More projects">${navCell(prev, 'pv', '← Previous')}${navCell(next, 'nx', 'Next →')}</nav>
      ${footer()}</div>`;
    current = { list: imgs, i: 0 };
    $('.gallery').onclick = e => { const b = e.target.closest('.shot'); if (b) openLB(+b.dataset.i); };
  }

  function resume() {
    const R = P.resume, A = P.about;
    const pips = n => `<span class="pips" aria-label="${n} out of 10">${Array.from({ length: 10 }, (_, i) => `<i style="--i:${i}" class="${i < n ? 'on' : ''}"></i>`).join('')}</span>`;
    app.innerHTML = `<div class="view wrap">
      <div class="page-head"><a class="crumb" href="#/">← Home</a><h1 class="page-title">Résumé</h1></div>
      <div class="r-grid">
        <aside class="r-side">
          <img src="${esc(A.photo)}" alt="Portrait of ${esc(P.name.join(' '))}">
          <h2>${esc(P.name.join(' ')).toUpperCase()}</h2><div class="role">${esc(A.role)}</div>
          <div class="info">${esc(A.location)}<br><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></div>
          ${P.links.resumePdf ? `<a class="btn" href="${esc(P.links.resumePdf)}" download>Download PDF ↓</a>` : ''}
          <div class="about"><h3>About Me</h3>${A.text.map(t => `<p>${esc(t)}</p>`).join('')}</div>
        </aside>
        <div>
          <section class="r-block reveal"><h3>Education</h3>${R.education.map(e => `
            <div class="job"><div class="when">${esc(e.when)}</div><div class="what"><div class="head"><b>${esc(e.what)}</b></div><div style="color:var(--dim)">${esc(e.note)}</div></div></div>`).join('')}</section>
          <section class="r-block reveal"><h3>Experience</h3>${R.experience.map(e => `
            <div class="job"><div class="when">${esc(e.when)}</div><div class="what"><div class="head"><b>${esc(e.org)}</b><span>${esc(e.place)}</span><span>${esc(e.role)}</span></div>
              <ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div></div>`).join('')}</section>
          <section class="r-block reveal"><h3>Software</h3>${R.software.map(g => `
            <div class="soft"><div class="g">${esc(g.group)}</div><div>${g.items.map(([n, v]) => `<div class="it"><span>${esc(n)}</span>${pips(v)}</div>`).join('')}</div></div>`).join('')}</section>
          <section class="r-block reveal"><h3>Additional Skills / Knowledge</h3><ul class="skills">${R.skills.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section>
        </div>
      </div>${footer()}</div>`;
  }

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox'), media = $('#lb-media'), cap = $('#lb-cap');
  function showLB() {
    const im = current.list[current.i];
    media.classList.remove('zoom');
    media.innerHTML = `<img src="${esc(im.src)}" alt="${esc(im.cap)}">`;
    cap.innerHTML = `<span>${esc(im.cap)}</span><span>${current.i + 1} / ${current.list.length}</span>`;
    $$('.lb-nav').forEach(b => b.hidden = current.list.length < 2);
  }
  function openLB(i) { current.i = i; showLB(); lb.hidden = false; document.body.style.overflow = 'hidden'; $('.lb-close').focus(); }
  function closeLB() { if (lb.hidden) return; lb.hidden = true; document.body.style.overflow = ''; }
  const step = d => { const n = current.list.length; current.i = (current.i + d + n) % n; showLB(); };
  lb.addEventListener('click', e => {
    if (e.target.closest('.prev')) step(-1);
    else if (e.target.closest('.next')) step(1);
    else if (e.target.closest('.lb-close')) closeLB();
    else if (e.target.closest('#lb-media img')) media.classList.toggle('zoom');
    else if (e.target === lb || e.target === media) closeLB();
  });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLB(); else if (e.key === 'ArrowLeft') step(-1); else if (e.key === 'ArrowRight') step(1);
  });
  let tx0 = null;
  lb.addEventListener('touchstart', e => tx0 = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { if (tx0 == null || media.classList.contains('zoom')) return; const dx = e.changedTouches[0].clientX - tx0; if (Math.abs(dx) > 60) step(dx > 0 ? -1 : 1); tx0 = null; });

  /* ---------- hover preview that follows the cursor on the table of contents ---------- */
  const peek = $('#peek'), peekImg = $('img', peek);
  if (matchMedia('(hover:hover)').matches) {
    document.addEventListener('pointerover', e => {
      const t = e.target.closest('[data-peek]'); if (!t) return;
      peekImg.src = t.dataset.peek; peek.classList.add('on');
    });
    document.addEventListener('pointerout', e => { if (e.target.closest('[data-peek]') && !e.relatedTarget?.closest?.('[data-peek]')) peek.classList.remove('on'); });
    document.addEventListener('pointermove', e => {
      if (!peek.classList.contains('on')) return;
      const w = peek.offsetWidth, h = peek.offsetHeight;
      const x = Math.min(e.clientX + 28, innerWidth - w - 16), y = Math.min(Math.max(e.clientY - h / 2, 80), innerHeight - h - 16);
      peek.style.transform = `translate(${x}px,${y}px) scale(1)`;
    });
  }

  /* ---------- scroll: reveal + hide bar on scroll down ---------- */
  let io;
  function observe() {
    io && io.disconnect();
    io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach(el => io.observe(el));
  }
  let lastY = 0; const bar = $('#bar');
  addEventListener('scroll', () => { const y = scrollY; bar.classList.toggle('hide', y > lastY && y > 160); lastY = y; }, { passive: true });

  /* ---------- router ---------- */
  let lastKey = '';
  function route() {
    closeLB(); peek.classList.remove('on');
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const [a, b, c] = parts;
    if (a === 'p') project(b, c); else if (a === 'school') school(); else if (a === 'personal') personal(); else if (a === 'resume') resume(); else landing();
    const key = a === 'p' ? 'p' + b : a;
    if (key !== lastKey) scrollTo(0, 0); else if (a === 'p') $('#gallery')?.scrollIntoView({ block: 'start' });
    lastKey = key;
    $$('.nav a').forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#/' + (a === 'p' && b === '6' ? `p/6/${c || 'professional'}` : parts.slice(0, 1).join('/'))));
    bar.classList.remove('hide');
    observe();
  }
  addEventListener('hashchange', route);
  route();
})();
