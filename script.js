const dataUrl = new URL("./data.json", import.meta.url);

const iconSet = {
  arrow: '<svg class="icon icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  brain: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A3.5 3.5 0 0 0 6 5.5v.2A4.5 4.5 0 0 0 3 10v.5A4.5 4.5 0 0 0 7.5 15H8v3a4 4 0 0 0 8 0v-3h.5A4.5 4.5 0 0 0 21 10.5V10a4.5 4.5 0 0 0-3-4.3v-.2A3.5 3.5 0 0 0 14.5 2H14a3 3 0 0 0-2 1 3 3 0 0 0-2-1h-.5Z"/><path d="M12 3v18"/><path d="M8 8h2"/><path d="M14 8h2"/><path d="M8 14h2"/><path d="M14 14h2"/></svg>',
  check: '<svg class="icon icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m20 6-11 11-5-5"/></svg>',
  code: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  cpu: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v4M9 2v4M15 18v4M9 18v4M2 15h4M2 9h4M18 15h4M18 9h4"/></svg>',
  download: '<svg class="icon icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  external: '<svg class="icon icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.38-3.9-1.38-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.45-2.71 5.43-5.29 5.71.42.36.78 1.06.78 2.15v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  globe: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.25 0h3.84v1.57h.05c.54-.96 1.86-1.97 3.83-1.97 4.1 0 4.86 2.7 4.86 6.21v5.69h-4v-5.04c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66v5.13h-3.96V9.75Z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>',
  map: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"/></svg>',
  wrench: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.8-.7-.7-2.8 2.4-2.4Z"/></svg>'
};

document.body.classList.add("loading");

main();

async function main() {
  try {
    const siteData = await loadSiteData();
    renderPage(siteData);
    initNavigation();
    initProjectFilters(siteData);
    initContactForm();
    initRevealAnimations();
    initCounters();
    initStarfield();
    initPolyhedron();
    initCustomCursor();
    requestAnimationFrame(() => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    });
  } catch (error) {
    console.error(error);
    document.body.innerHTML = '<main class="data-error"><div><h1>Portfolio data could not be loaded.</h1><p>Run this project through a local server so the JSON file can be read.</p></div></main>';
  }
}

async function loadSiteData() {
  const response = await fetch(dataUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${dataUrl.pathname}`);
  }
  return response.json();
}

function renderPage(data) {
  renderNavigation(data);
  renderHero(data);
  renderAbout(data);
  renderSkills(data.skills);
  renderFilters(data.projectFilters);
  renderProjects(data.projects);
  renderCertifications(data.certifications);
  renderEducation(data.education);
  renderContact(data);
  renderFooter(data);
}

function renderNavigation(data) {
  const desktop = document.querySelector("#desktopNavLinks");
  const mobile = document.querySelector("#mobileMenu");
  const resumeLinks = [document.querySelector("#navResume")];
  const links = data.navigation.map((link) => navLink(link)).join("");

  desktop.innerHTML = links;
  mobile.innerHTML = `${links}<a class="nav-resume" href="${attr(data.profile.resume)}" target="_blank" rel="noopener">Resume</a>`;

  resumeLinks.forEach((link) => {
    if (link) link.href = data.profile.resume;
  });
}

function navLink(link) {
  return `<a class="nav-link" href="${attr(link.href)}">${escapeHtml(link.label)}</a>`;
}

function renderHero(data) {
  setText("#heroLabel", data.hero.label);
  setText("#heroSubtitle", data.profile.subtitle);
  setText("#heroDescription", data.hero.description);
  document.querySelector("#heroName").innerHTML = `
    <span>${escapeHtml(data.profile.firstName)}</span>
    <span>${escapeHtml(data.profile.lastName)}</span>
  `;
  document.querySelector("#heroActions").innerHTML = `
    <a class="primary-btn" href="${attr(data.profile.resume)}" target="_blank" rel="noopener">
      ${icon("download")} Download Resume
    </a>
    <a class="ghost-btn" href="#contact">
      Contact Me ${icon("arrow")}
    </a>
  `;
  document.querySelector("#heroSocial").innerHTML = data.social.map(socialLink).join("");
}

function socialLink(item) {
  return `
    <a class="social-link" href="${attr(item.href)}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener" aria-label="${attr(item.label)}">
      ${icon(item.icon)}
    </a>
  `;
}

function renderAbout(data) {
  const profileImage = document.querySelector("#profileImage");
  profileImage.src = data.profile.image;
  profileImage.alt = data.profile.imageAlt;

  document.querySelector("#aboutText").innerHTML = data.about.paragraphs
    .map((paragraph) => `<p class="reveal">${escapeHtml(paragraph)}</p>`)
    .join("");

  document.querySelector("#statsGrid").innerHTML = data.about.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <span class="stat-number" data-count="${attr(stat.value)}" data-decimals="${attr(stat.decimals)}" data-suffix="${attr(stat.suffix)}">0</span>
          <span class="stat-label">${escapeHtml(stat.label)}</span>
        </div>
      `
    )
    .join("");
}

function renderSkills(skills) {
  document.querySelector("#skillsGrid").innerHTML = skills
    .map(
      (skill, index) => `
        <article class="skill-card reveal ${skill.wide ? "is-wide" : ""}" style="animation-delay:${index * 70}ms">
          <div class="card-heading">
            ${icon(skill.icon)}
            <h3>${escapeHtml(skill.name)}</h3>
          </div>
          <ul class="skill-list">
            ${skill.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderFilters(filters) {
  document.querySelector("#projectFilters").innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-btn ${filter === "All" ? "is-active" : ""}" type="button" data-filter="${attr(filter)}">
          ${escapeHtml(filter)}
        </button>
      `
    )
    .join("");
}

function renderProjects(projects, filter = "All") {
  const grid = document.querySelector("#projectGrid");
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  grid.innerHTML = filtered
    .map(
      (project, index) => `
        <article class="project-card reveal" style="animation-delay:${index * 80}ms">
          <div class="project-image">
            <img src="${attr(project.image)}" alt="${attr(project.title)}" loading="lazy" />
          </div>
          <div class="project-body">
            <span class="project-category">${escapeHtml(project.category)}</span>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="tag-row">
              ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            ${
              project.github
                ? `<a class="text-link" href="${attr(project.github)}" target="_blank" rel="noopener">View on GitHub ${icon("external")}</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");

  observeNewRevealItems(grid.querySelectorAll(".reveal"));
}

function renderCertifications(certifications) {
  const timeline = document.querySelector("#certificationTimeline");
  timeline.innerHTML = certifications
    .map(
      (cert, index) => `
        <div class="timeline-entry reveal is-${attr(cert.side)}" style="animation-delay:${index * 120}ms">
          <span class="timeline-dot" aria-hidden="true"></span>
          <article class="timeline-card">
            <span class="timeline-date">${escapeHtml(cert.date)}</span>
            <h3>${escapeHtml(cert.title)}</h3>
            <p>${escapeHtml(cert.provider)}</p>
            <span class="tag">${escapeHtml(cert.duration)}</span>
          </article>
        </div>
      `
    )
    .join("");
}

function renderEducation(education) {
  document.querySelector("#educationList").innerHTML = education
    .map(
      (item, index) => `
        <article class="education-card reveal" style="animation-delay:${index * 90}ms">
          <span class="education-year">${escapeHtml(item.years)}</span>
          <div>
            <h3>${escapeHtml(item.institution)}</h3>
            <p>${escapeHtml(item.degree)}</p>
          </div>
          <span class="education-grade">${escapeHtml(item.grade)}</span>
        </article>
      `
    )
    .join("");
}

function renderContact(data) {
  const contact = data.contact;
  document.querySelector("#contactInfo").innerHTML = `
    <h3>${escapeHtml(contact.heading)}</h3>
    <p>${escapeHtml(contact.text)}</p>
    <div class="contact-list">
      ${contact.items
        .map((item) => {
          const content = `${icon(item.icon)}<span>${escapeHtml(item.label)}</span>`;
          return item.href
            ? `<a class="contact-item" href="${attr(item.href)}">${content}</a>`
            : `<div class="contact-item">${content}</div>`;
        })
        .join("")}
    </div>
    <div class="social-row">
      ${data.social.filter((item) => item.href.startsWith("http")).map(socialLink).join("")}
    </div>
  `;
}

function renderFooter(data) {
  document.querySelector("#footerContent").innerHTML = `
    <div class="footer-brand">
      <strong>${escapeHtml(data.profile.initials)}</strong>
      <span>${escapeHtml(data.footer.tagline)}</span>
    </div>
    <div class="footer-links">
      ${data.footer.links.map((link) => `<a class="footer-link" href="${attr(link.href)}">${escapeHtml(link.label)}</a>`).join("")}
    </div>
    <p class="footer-credit">${escapeHtml(data.footer.credit)}</p>
    <p class="footer-bottom">&copy; ${escapeHtml(data.footer.copyright)}</p>
  `;
}

function initNavigation() {
  const nav = document.querySelector("#siteNav");
  const toggle = document.querySelector("#navToggle");
  const menu = document.querySelector("#mobileMenu");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 50);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    menu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initProjectFilters(data) {
  const filters = document.querySelector("#projectFilters");
  const grid = document.querySelector("#projectGrid");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button || button.classList.contains("is-active")) return;

    filters.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    grid.classList.add("is-filtering");

    window.setTimeout(() => {
      renderProjects(data.projects, button.dataset.filter);
      grid.classList.remove("is-filtering");
    }, 180);
  });
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  const button = document.querySelector("#contactSubmit");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    button.disabled = true;
    button.textContent = "Sending...";

    window.setTimeout(() => {
      form.reset();
      button.innerHTML = `${icon("check")} Message Sent!`;

      window.setTimeout(() => {
        button.disabled = false;
        button.textContent = "Send Message";
      }, 2600);
    }, 900);
  });
}

let revealObserver;

function initRevealAnimations() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("timeline")) {
          entry.target.style.setProperty("--timeline-progress", "100%");
        }
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  observeNewRevealItems(document.querySelectorAll(".reveal"));
  observeNewRevealItems(document.querySelectorAll(".timeline"));
}

function observeNewRevealItems(items) {
  if (!revealObserver) return;
  items.forEach((item) => revealObserver.observe(item));
}

function initCounters() {
  const stats = document.querySelector("#statsGrid");
  let hasRun = false;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting || hasRun) return;
      hasRun = true;
      stats.querySelectorAll("[data-count]").forEach(animateCounter);
      observer.disconnect();
    },
    { threshold: 0.35 }
  );

  observer.observe(stats);
}

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const decimals = Number(element.dataset.decimals || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    element.textContent = `${value.toFixed(decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function initStarfield() {
  const canvas = document.querySelector("#starfield");
  const context = canvas.getContext("2d");
  const state = {
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
    mouseX: 0,
    mouseY: 0,
    stars: []
  };

  const reset = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.width = Math.floor(window.innerWidth * dpr);
    state.height = Math.floor(window.innerHeight * dpr);
    state.centerX = state.width / 2;
    state.centerY = state.height / 2;
    canvas.width = state.width;
    canvas.height = state.height;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    const total = window.innerWidth < 768 ? 180 : 380;
    state.stars = Array.from({ length: total }, () => createStar(state));
  };

  const animate = () => {
    context.fillStyle = "rgba(3, 7, 18, 0.22)";
    context.fillRect(0, 0, state.width, state.height);
    const distance = Math.hypot(state.mouseX - state.centerX, state.mouseY - state.centerY);
    const speed = 0.45 + distance / 1400;

    state.stars.forEach((star) => {
      star.z -= speed;
      if (star.z <= 1) Object.assign(star, createStar(state), { z: state.width });

      const scale = 120 / star.z;
      const x = (star.x - state.centerX) * scale + state.centerX;
      const y = (star.y - state.centerY) * scale + state.centerY;
      const size = Math.max(star.size * scale, 0.08);

      if (x < 0 || x > state.width || y < 0 || y > state.height) return;
      const alpha = Math.max(0, 1 - star.z / state.width) * star.opacity;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fillStyle = `rgba(6, 182, 212, ${alpha})`;
      context.fill();
    });

    requestAnimationFrame(animate);
  };

  window.addEventListener("resize", reset, { passive: true });
  window.addEventListener(
    "mousemove",
    (event) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.mouseX = event.clientX * dpr;
      state.mouseY = event.clientY * dpr;
    },
    { passive: true }
  );

  reset();
  animate();
}

function createStar(state) {
  return {
    x: Math.random() * state.width,
    y: Math.random() * state.height,
    z: Math.random() * state.width,
    size: 0.6 + Math.random() * 1.6,
    opacity: 0.28 + Math.random() * 0.72
  };
}

function initPolyhedron() {
  const canvas = document.querySelector("#polyhedron");
  if (!canvas || window.innerWidth < 1024) return;
  const ctx = canvas.getContext("2d");
  const phi = (1 + Math.sqrt(5)) / 2;
  const vertices = [
    [-1, phi, 0],
    [1, phi, 0],
    [-1, -phi, 0],
    [1, -phi, 0],
    [0, -1, phi],
    [0, 1, phi],
    [0, -1, -phi],
    [0, 1, -phi],
    [phi, 0, -1],
    [phi, 0, 1],
    [-phi, 0, -1],
    [-phi, 0, 1]
  ].map((point) => normalize(point, 1.65));
  const edges = [];

  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const distance = Math.hypot(
        vertices[i][0] - vertices[j][0],
        vertices[i][1] - vertices[j][1],
        vertices[i][2] - vertices[j][2]
      );
      if (distance < 2.15) edges.push([i, j]);
    }
  }

  let rotation = { x: 0.5, y: 0.3 };
  let mouse = { x: 0, y: 0 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    ctx.clearRect(0, 0, 380, 380);
    rotation.y += 0.003;
    const rx = rotation.x + mouse.y * 0.22;
    const ry = rotation.y + mouse.x * 0.22;
    const projected = vertices.map((point) => project3d(rotate3d(point, rx, ry), 380));

    edges.forEach(([start, end], index) => {
      const a = projected[start];
      const b = projected[end];
      const alpha = 0.3 + ((a.depth + b.depth) / 2) * 0.32;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = index % 3 === 0 ? `rgba(6,182,212,${alpha})` : index % 3 === 1 ? `rgba(56,189,248,${alpha})` : `rgba(129,140,248,${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener(
    "mousemove",
    (event) => {
      mouse.x = event.clientX / window.innerWidth - 0.5;
      mouse.y = event.clientY / window.innerHeight - 0.5;
    },
    { passive: true }
  );

  resize();
  draw();
}

function normalize(point, scale) {
  const length = Math.hypot(point[0], point[1], point[2]);
  return point.map((value) => (value / length) * scale);
}

function rotate3d([x, y, z], rx, ry) {
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const y1 = y * cosX - z * sinX;
  const z1 = y * sinX + z * cosX;
  const x2 = x * cosY + z1 * sinY;
  const z2 = -x * sinY + z1 * cosY;
  return [x2, y1, z2];
}

function project3d([x, y, z], size) {
  const distance = 4.4;
  const scale = 100 / (distance - z);
  return {
    x: size / 2 + x * scale,
    y: size / 2 + y * scale,
    depth: (z + 1.65) / 3.3
  };
}

function initCustomCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const cursor = document.querySelector("#customCursor");
  const current = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  let hovering = false;

  window.addEventListener(
    "mousemove",
    (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      cursor.classList.add("is-visible");
    },
    { passive: true }
  );

  document.addEventListener("mouseover", (event) => {
    hovering = Boolean(event.target.closest("a, button, input, textarea, select"));
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest("a, button, input, textarea, select")) hovering = false;
  });

  const animate = () => {
    current.x += (target.x - current.x) * 0.16;
    current.y += (target.y - current.y) * 0.16;
    const scale = hovering ? 5.3 : 1;
    cursor.style.transform = `translate(${current.x - 3}px, ${current.y - 3}px) scale(${scale})`;
    requestAnimationFrame(animate);
  };

  animate();
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function icon(name) {
  return iconSet[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function attr(value) {
  return escapeHtml(value);
}
