// site/scripts.js
// Tiny vanilla JS: theme toggle + hover-preview pointer tracking
(() => {
  // ---- THEME ----
  const KEY = "cl-theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  const initial = saved || "light";
  root.setAttribute("data-theme", initial);

  const setTheme = (t) => {
    root.setAttribute("data-theme", t);
    localStorage.setItem(KEY, t);
    updateThemeBtn();
  };

  const updateThemeBtn = () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.innerHTML = isDark
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  document.addEventListener("DOMContentLoaded", updateThemeBtn);

  // ---- EMAIL CLICK-TO-COPY ----
  let toast;
  const showToast = (msg) => {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("show"), 1800);
  };

  document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".email-link");
    if (!btn) return;
    const email = btn.dataset.email || btn.textContent.trim();
    const ok = window.confirm(`Copy ${email} to clipboard?`);
    if (!ok) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast("Copied " + email);
    } catch (err) {
      // fallback: open mailto
      window.location.href = "mailto:" + email;
    }
  });

  // ---- HOVER PREVIEW (Work page list view) ----
  let preview;
  const ensurePreview = () => {
    if (preview) return preview;
    preview = document.createElement("div");
    preview.className = "hover-preview";
    document.body.appendChild(preview);
    return preview;
  };

  const positionPreview = (e) => {
    if (!preview) return;
    const pad = 18;
    const w = preview.offsetWidth, h = preview.offsetHeight;
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    if (x + w > window.innerWidth - 12) x = e.clientX - w - pad;
    if (y + h > window.innerHeight - 12) y = e.clientY - h - pad;
    preview.style.left = x + "px";
    preview.style.top = y + "px";
  };

  document.addEventListener("mouseover", (e) => {
    const row = e.target.closest("[data-preview]");
    if (!row) return;
    const tpl = document.getElementById("preview-" + row.dataset.preview);
    if (!tpl) return;
    const p = ensurePreview();
    p.innerHTML = tpl.innerHTML;
    p.classList.add("show");
    positionPreview(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (preview && preview.classList.contains("show")) positionPreview(e);
  });
  document.addEventListener("mouseout", (e) => {
    const row = e.target.closest("[data-preview]");
    if (!row) return;
    if (preview) preview.classList.remove("show");
  });

  // ---- FILTER (Work page) ----
  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    const bar = chip.parentElement;
    bar.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const tag = chip.dataset.filter;
    document.querySelectorAll("[data-tag]").forEach(row => {
      row.style.display = (tag === "all" || row.dataset.tag === tag) ? "" : "none";
    });
  });
})();
