// site/chrome.js
// Renders shared header + footer + SVG icon defs + project preview templates.
// Pure DOM, runs before scripts.js.

(() => {
  const NAV = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "cv.html", label: "CV" },
    { href: "work.html", label: "Work" },
    { href: "writing.html", label: "Writing" }
  ];

  const SOCIALS = [
    { href: "https://github.com/cedriclim1", icon: "github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/cedric-lim-712207208/", icon: "linkedin", label: "LinkedIn" },
    { href: "https://scholar.google.com/citations?user=l8EMFk4AAAAJ&hl=en", icon: "scholar", label: "Google Scholar" },
    { href: "mailto:cedlim@stanford.edu", icon: "mail", label: "Email" }
  ];

  const ICONS = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 18.9 5a4.9 4.9 0 0 0-.1-3.7s-1.1-.4-3.8 1.4a13 13 0 0 0-7 0C5.4.9 4.3 1.3 4.3 1.3A4.9 4.9 0 0 0 4.2 5a5.2 5.2 0 0 0-1.4 3.8c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    scholar: '<path d="M12 3 2 9l10 6 10-6-10-6Z"/><path d="M6 11v5a6 6 0 0 0 12 0v-5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 11v6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-ne": '<path d="M7 17 17 7M9 7h8v8"/>'
  };

  window.icon = (name, size = 14, stroke = 1.6) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;

  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const headerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a class="brand" href="index.html" aria-label="Cedric Lim — Home">
          <span class="brand-mark">cl</span>
          <span class="brand-name">Cedric Lim</span>
          <span class="brand-status"><span class="dot"></span> available for collab</span>
        </a>
        <nav class="site-nav">
          ${NAV.map(n => {
            const active = (n.href === currentPage) ||
              (currentPage.startsWith("post-") && n.href === "writing.html");
            return `<a href="${n.href}"${active ? ' class="active"' : ""}>${n.label}</a>`;
          }).join("")}
        </nav>
        <div class="header-actions">
          ${SOCIALS.slice(0, 3).map(s =>
            `<a class="icon-btn" href="${s.href}" aria-label="${s.label}" target="_blank" rel="noopener">${window.icon(s.icon)}</a>`
          ).join("")}
          <button class="icon-btn theme-toggle" aria-label="Toggle theme"></button>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <span>© ${new Date().getFullYear()} Cedric Lim · Stanford, CA</span>
        <span>built with HTML & coffee · hosted on github pages</span>
      </div>
    </footer>
  `;

  // Project preview templates (used by hover-preview on work.html)
  const previews = {
    ptn: `<svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="140" fill="#0f1a2e"/>
      ${[...Array(8)].map((_, i) => {
        const rx = 70 - i * 8, ry = 50 - i * 5;
        const stroke = i % 2 ? "#c2845a" : "#e8d5b7";
        const op = (0.15 + i * 0.08).toFixed(2);
        return `<ellipse cx="100" cy="70" rx="${rx}" ry="${ry}" fill="none" stroke="${stroke}" stroke-opacity="${op}" stroke-width="0.8"/>`;
      }).join("")}
      <circle cx="100" cy="70" r="3" fill="#c2845a"/>
    </svg>`,
    atomvis: (() => {
      const seed = [[40,30],[70,50],[110,28],[150,45],[60,85],[100,75],[140,90],[170,65],[30,100],[90,110],[130,115],[155,30],[80,25],[120,100]];
      return `<svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="140" fill="#0f1a2e"/>
        ${seed.map(([x,y],i) => `<circle cx="${x}" cy="${y}" r="${2 + (i%3)}" fill="${i%3===0 ? "#c2845a" : "#e8d5b7"}" opacity="${(0.4 + (i%4)*0.15).toFixed(2)}"/>`).join("")}
      </svg>`;
    })(),
    diffrec: (() => {
      let dots = "";
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 10; c++) {
          const cx = 20 + c * 18, cy = 18 + r * 16;
          const d = Math.sqrt((cx - 100) ** 2 + (cy - 70) ** 2);
          const radius = Math.max(1, 6 - d / 25).toFixed(2);
          const op = Math.max(0.15, 1 - d / 90).toFixed(2);
          dots += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#e8d5b7" opacity="${op}"/>`;
        }
      }
      return `<svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice"><rect width="200" height="140" fill="#0f1a2e"/>${dots}</svg>`;
    })(),
    labnotes: (() => {
      let lines = "";
      for (let i = 0; i < 9; i++) {
        const w = i % 3 === 0 ? 140 : i % 3 === 1 ? 100 : 60;
        const fill = i === 4 ? "#c2845a" : "#e8d5b7";
        lines += `<rect x="20" y="${20 + i * 12}" width="${w}" height="2" fill="${fill}" opacity="0.35"/>`;
      }
      return `<svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice"><rect width="200" height="140" fill="#0f1a2e"/>${lines}<rect x="20" y="118" width="40" height="6" fill="#c2845a" opacity="0.8"/></svg>`;
    })()
  };

  window.PROJECT_PREVIEWS = previews;
  window.previewSVG = (kind) => previews[kind] || "";

  // Render hidden <template>s for hover-preview lookup
  const previewTemplates = Object.entries(previews)
    .map(([k, v]) => `<template id="preview-${k}">${v}</template>`).join("");

  document.addEventListener("DOMContentLoaded", () => {
    const headerSlot = document.getElementById("site-header-slot");
    const footerSlot = document.getElementById("site-footer-slot");
    if (headerSlot) headerSlot.outerHTML = headerHTML;
    if (footerSlot) footerSlot.outerHTML = footerHTML + previewTemplates;
  });
})();
