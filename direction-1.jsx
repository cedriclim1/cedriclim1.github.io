// Direction 1 — Editorial Minimal
// Text-forward, generous whitespace, midnight blue + warm copper accent
const D1 = () => {
  const S = window.SITE;
  const c = {
    bg: "#fbf8f3",        // warm off-white
    fg: "#0d1830",        // midnight blue (deep)
    sub: "#5d6273",       // muted blue-gray
    rule: "#1f2a44",
    accent: "#b8693e",    // copper
    chip: "#ebe4d6"
  };
  const fontStack = '"General Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
  const monoStack = '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace';

  return (
    <div style={{
      width: 960, padding: "72px 88px 96px", background: c.bg, color: c.fg,
      fontFamily: fontStack, fontSize: 16, lineHeight: 1.55, letterSpacing: "-0.005em",
      minHeight: 1400
    }}>
      {/* Top nav */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 96 }}>
        <div style={{ fontFamily: monoStack, fontSize: 12, color: c.sub, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Cedric Lim · {new Date().getFullYear()}
        </div>
        <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
          {["Work", "Writing", "CV", "Now"].map(l => (
            <a key={l} style={{ color: c.fg, textDecoration: "none", borderBottom: `1px solid transparent`, paddingBottom: 2 }}>{l}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section style={{ marginBottom: 96, maxWidth: 720 }}>
        <h1 style={{
          fontSize: 56, lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.025em",
          margin: "0 0 28px"
        }}>
          Cedric Lim is a PhD candidate at Stanford working on{" "}
          <span style={{ color: c.accent, fontStyle: "italic", fontWeight: 400 }}>tomography</span>,{" "}
          <span style={{ color: c.accent, fontStyle: "italic", fontWeight: 400 }}>materials science</span>, and{" "}
          <span style={{ color: c.accent, fontStyle: "italic", fontWeight: 400 }}>deep learning</span>.
        </h1>
        <p style={{ fontSize: 19, color: c.sub, lineHeight: 1.55, margin: 0, maxWidth: 600 }}>
          {S.shortBio}
        </p>

        <div style={{ display: "flex", gap: 18, marginTop: 40, alignItems: "center" }}>
          {[
            { name: "mail", label: "Email" },
            { name: "github", label: "GitHub" },
            { name: "scholar", label: "Scholar" },
            { name: "linkedin", label: "LinkedIn" }
          ].map(s => (
            <a key={s.name} aria-label={s.label} style={{
              width: 36, height: 36, borderRadius: 999, border: `1px solid ${c.fg}`,
              display: "grid", placeItems: "center", color: c.fg, cursor: "pointer"
            }}>
              <Icon name={s.name} size={15} />
            </a>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section style={{ marginBottom: 96 }}>
        <SectionLabel mono={monoStack} c={c}>01 — Selected Work</SectionLabel>
        <div>
          {S.projects.map((p, i) => (
            <article key={p.id} style={{
              display: "grid", gridTemplateColumns: "64px 1fr 200px 80px",
              gap: 24, padding: "28px 0", borderTop: i === 0 ? `1px solid ${c.fg}` : "none",
              borderBottom: `1px solid ${c.fg}`, alignItems: "start"
            }}>
              <div style={{ fontFamily: monoStack, fontSize: 12, color: c.sub, paddingTop: 6 }}>
                {p.year}
              </div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ margin: 0, color: c.sub, fontSize: 15, maxWidth: 440 }}>{p.blurb}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 6 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: monoStack, fontSize: 11, color: c.fg, padding: "3px 8px",
                    border: `1px solid ${c.fg}`, borderRadius: 999
                  }}>{s}</span>
                ))}
              </div>
              <div style={{ paddingTop: 6, color: c.accent, justifySelf: "end" }}>
                <Icon name="arrow-ne" size={20} stroke={1.4} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section style={{ marginBottom: 96 }}>
        <SectionLabel mono={monoStack} c={c}>02 — Writing</SectionLabel>
        <div>
          {S.posts.map((p, i) => (
            <article key={p.id} style={{
              display: "grid", gridTemplateColumns: "120px 1fr 80px",
              gap: 24, padding: "24px 0",
              borderTop: i === 0 ? `1px solid ${c.fg}` : "none",
              borderBottom: `1px solid ${c.fg}`, alignItems: "baseline"
            }}>
              <div style={{ fontFamily: monoStack, fontSize: 12, color: c.sub }}>{p.date}</div>
              <div>
                <h3 style={{ fontSize: 21, fontWeight: 500, margin: "0 0 6px" }}>{p.title}</h3>
                <p style={{ margin: 0, color: c.sub, fontSize: 15 }}>{p.excerpt}</p>
              </div>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, justifySelf: "end" }}>
                {p.readTime}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Now */}
      <section style={{ marginBottom: 96 }}>
        <SectionLabel mono={monoStack} c={c}>03 — Now</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 64px", maxWidth: 760 }}>
          {S.now.map(n => (
            <div key={n.label}>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                {n.label}
              </div>
              <div style={{ fontSize: 16, lineHeight: 1.5 }}>{n.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CV summary */}
      <section style={{ marginBottom: 64 }}>
        <SectionLabel mono={monoStack} c={c}>04 — CV</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32 }}>
          <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: 4 }}>Education</div>
          <div>
            {S.cv.education.map(e => (
              <div key={e.what} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: `1px solid ${c.fg}22` }}>
                <div style={{ fontFamily: monoStack, fontSize: 12, color: c.sub, marginBottom: 2 }}>{e.years}</div>
                <div style={{ fontSize: 16, fontWeight: 500 }}>{e.what}</div>
                <div style={{ fontSize: 14, color: c.sub }}>{e.where}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: 4 }}>Selected publications</div>
          <div>
            {S.publications.slice(0, 3).map(p => (
              <div key={p.title} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: `1px solid ${c.fg}22` }}>
                <div style={{ fontFamily: monoStack, fontSize: 12, color: c.sub, marginBottom: 2 }}>{p.year} · {p.venue}</div>
                <div style={{ fontSize: 15, lineHeight: 1.45 }}>{p.title}</div>
              </div>
            ))}
            <a style={{ fontFamily: monoStack, fontSize: 12, color: c.accent, display: "inline-flex", alignItems: "center", gap: 6 }}>
              View full CV <Icon name="arrow" size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 32, borderTop: `1px solid ${c.fg}`, fontFamily: monoStack, fontSize: 12, color: c.sub }}>
        <span>cedric@stanford.edu</span>
        <span>Stanford, CA · 37.4275° N, 122.1697° W</span>
      </footer>
    </div>
  );
};

const SectionLabel = ({ children, mono, c }) => (
  <div style={{
    fontFamily: mono, fontSize: 11, color: c.fg, textTransform: "uppercase",
    letterSpacing: "0.12em", marginBottom: 24, display: "flex", alignItems: "center", gap: 12
  }}>
    {children}
  </div>
);

window.D1 = D1;
