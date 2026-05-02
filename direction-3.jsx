// Direction 3 — Dense Index (dark, mono-accented, single column)
// Midnight blue background, copper accent, mono labels, very dense
const D3 = () => {
  const S = window.SITE;
  const c = {
    bg: "#0a1226",        // deep midnight
    panel: "#0f1a30",
    fg: "#e9ecf3",
    sub: "#7e8aa8",
    rule: "#1c2a4a",
    accent: "#d49063",    // copper
    accent2: "#7ea7e8"    // pale blue
  };
  const fontStack = '"General Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
  const monoStack = '"JetBrains Mono", ui-monospace, monospace';

  return (
    <div style={{
      width: 880, padding: "48px 72px 72px", background: c.bg, color: c.fg,
      fontFamily: fontStack, fontSize: 14.5, lineHeight: 1.6, letterSpacing: "-0.003em",
      minHeight: 1500
    }}>
      {/* Header */}
      <header style={{ marginBottom: 56 }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: monoStack, fontSize: 11, color: c.sub,
          paddingBottom: 14, borderBottom: `1px solid ${c.rule}`
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: c.accent }}/>
            ~/cedriclim
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>v3.2</span>
            <span>last commit · 14 days ago</span>
            <span style={{ color: c.fg }}>[ light · <span style={{ color: c.accent }}>dark</span> ]</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, marginTop: 36, alignItems: "start" }}>
          <div>
            <div style={{
              width: 80, height: 80, borderRadius: 4, background: c.panel,
              border: `1px solid ${c.rule}`, position: "relative", overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", inset: 0, display: "grid", placeItems: "center",
                fontFamily: monoStack, fontSize: 28, color: c.accent
              }}>cl</div>
              {/* tiny corner ticks */}
              <div style={{ position: "absolute", top: 4, left: 4, fontFamily: monoStack, fontSize: 8, color: c.sub }}>+</div>
              <div style={{ position: "absolute", top: 4, right: 4, fontFamily: monoStack, fontSize: 8, color: c.sub }}>+</div>
              <div style={{ position: "absolute", bottom: 4, left: 4, fontFamily: monoStack, fontSize: 8, color: c.sub }}>+</div>
              <div style={{ position: "absolute", bottom: 4, right: 4, fontFamily: monoStack, fontSize: 8, color: c.sub }}>+</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.015em" }}>
              Cedric Lim <span style={{ color: c.sub, fontWeight: 400 }}>— PhD candidate, MS&E</span>
            </h1>
            <div style={{ color: c.sub, fontSize: 14.5, marginBottom: 14, maxWidth: 580 }}>
              {S.shortBio}
            </div>
            <div style={{ display: "flex", gap: 16, fontFamily: monoStack, fontSize: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a style={{ color: c.accent2, display: "inline-flex", gap: 6, alignItems: "center" }}>
                <Icon name="mail" size={12} /> cedric@stanford.edu
              </a>
              <a style={{ color: c.accent2, display: "inline-flex", gap: 6, alignItems: "center" }}>
                <Icon name="github" size={12} /> @cedriclim1
              </a>
              <a style={{ color: c.accent2, display: "inline-flex", gap: 6, alignItems: "center" }}>
                <Icon name="scholar" size={12} /> Scholar
              </a>
              <a style={{ color: c.accent2, display: "inline-flex", gap: 6, alignItems: "center" }}>
                <Icon name="linkedin" size={12} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Sec title="01 · About" mono={monoStack} c={c}>
        <div style={{ maxWidth: 700, color: c.fg }}>
          {S.longBio.map((para, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : "14px 0 0", color: i === 2 ? c.sub : c.fg }}>{para}</p>
          ))}
        </div>
      </Sec>

      {/* Projects index — dense list */}
      <Sec title="02 · Projects" mono={monoStack} c={c} count={S.projects.length}>
        <div style={{ borderTop: `1px solid ${c.rule}` }}>
          {S.projects.map(p => (
            <ProjectRow key={p.id} p={p} c={c} mono={monoStack} />
          ))}
        </div>
      </Sec>

      {/* Publications */}
      <Sec title="03 · Publications" mono={monoStack} c={c} count={S.publications.length}>
        <div style={{ borderTop: `1px solid ${c.rule}` }}>
          {S.publications.map((p, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 20,
              padding: "14px 0", borderBottom: `1px solid ${c.rule}`, alignItems: "baseline"
            }}>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub }}>{p.year}</div>
              <div>
                <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{p.title}</div>
                <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, marginTop: 3 }}>
                  {p.authors} · <span style={{ color: c.accent2 }}>{p.venue}</span>
                </div>
              </div>
              <div style={{
                fontFamily: monoStack, fontSize: 10, padding: "3px 8px",
                color: p.status === "Under review" ? c.accent : c.sub,
                border: `1px solid ${p.status === "Under review" ? c.accent : c.rule}`,
                borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em"
              }}>{p.status}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Writing */}
      <Sec title="04 · Writing" mono={monoStack} c={c} count={S.posts.length}>
        <div style={{ borderTop: `1px solid ${c.rule}` }}>
          {S.posts.map(p => (
            <a key={p.id} style={{
              display: "grid", gridTemplateColumns: "100px 1fr 70px", gap: 20,
              padding: "14px 0", borderBottom: `1px solid ${c.rule}`, alignItems: "baseline",
              cursor: "pointer", color: c.fg
            }}>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub }}>{p.date}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: c.sub, marginTop: 2 }}>{p.excerpt}</div>
              </div>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, textAlign: "right" }}>
                {p.readTime} →
              </div>
            </a>
          ))}
        </div>
      </Sec>

      {/* CV */}
      <Sec title="05 · CV" mono={monoStack} c={c}>
        <CVBlock label="Education" rows={S.cv.education} c={c} mono={monoStack} />
        <CVBlock label="Experience" rows={S.cv.experience} c={c} mono={monoStack} />
        <CVBlock label="Awards" rows={S.cv.awards.map(a => ({ years: a.year, what: a.what, where: "" }))} c={c} mono={monoStack} />
      </Sec>

      {/* Now */}
      <Sec title="06 · Now" mono={monoStack} c={c}>
        <div style={{
          fontFamily: monoStack, fontSize: 11, color: c.sub, marginBottom: 12
        }}>
          // updated April 21, 2026
        </div>
        <div style={{ borderTop: `1px solid ${c.rule}` }}>
          {S.now.map((n, i) => (
            <div key={n.label} style={{
              display: "grid", gridTemplateColumns: "120px 1fr", gap: 20,
              padding: "12px 0", borderBottom: `1px solid ${c.rule}`
            }}>
              <div style={{ fontFamily: monoStack, fontSize: 11, color: c.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {n.label}
              </div>
              <div style={{ fontSize: 14 }}>{n.text}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Footer */}
      <footer style={{
        marginTop: 56, paddingTop: 24, borderTop: `1px solid ${c.rule}`,
        fontFamily: monoStack, fontSize: 11, color: c.sub,
        display: "flex", justifyContent: "space-between"
      }}>
        <span>cedric@stanford.edu</span>
        <span>built with HTML, hosted on github pages</span>
      </footer>
    </div>
  );
};

const Sec = ({ title, count, mono, c, children }) => (
  <section style={{ marginBottom: 56 }}>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      marginBottom: 18
    }}>
      <h2 style={{
        fontFamily: mono, fontSize: 12, color: c.fg, fontWeight: 500,
        textTransform: "uppercase", letterSpacing: "0.14em", margin: 0
      }}>{title}</h2>
      {count !== undefined && (
        <span style={{ fontFamily: mono, fontSize: 11, color: c.sub }}>
          [{String(count).padStart(2, "0")}]
        </span>
      )}
    </div>
    {children}
  </section>
);

const ProjectRow = ({ p, c, mono }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 20,
        padding: "16px 0", borderBottom: `1px solid ${c.rule}`,
        alignItems: "start", position: "relative", cursor: "pointer"
      }}>
      <div style={{ fontFamily: mono, fontSize: 11, color: c.sub, paddingTop: 4 }}>{p.year}</div>
      <div>
        <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
          <span style={{ fontSize: 16, fontWeight: 500 }}>{p.name}</span>
          <span style={{
            fontFamily: mono, fontSize: 10, color: c.accent,
            padding: "1px 6px", border: `1px solid ${c.accent}55`, borderRadius: 3,
            textTransform: "uppercase", letterSpacing: "0.06em"
          }}>{p.tag}</span>
        </div>
        <div style={{ color: c.sub, fontSize: 13.5, maxWidth: 480 }}>{p.blurb}</div>
        <div style={{ display: "flex", gap: 8, marginTop: 8, fontFamily: mono, fontSize: 10.5, color: c.sub }}>
          {p.stack.map((s, i) => (
            <span key={s}>{s}{i < p.stack.length - 1 ? " ·" : ""}</span>
          ))}
        </div>
      </div>
      <div style={{ paddingTop: 4, color: hov ? c.accent : c.sub, transition: "color 0.15s" }}>
        <Icon name="arrow-ne" size={16} stroke={1.4} />
      </div>
      {/* hover preview */}
      {hov && (
        <div style={{
          position: "absolute", right: 28, top: 42, width: 200, height: 120,
          border: `1px solid ${c.accent}55`, borderRadius: 6, overflow: "hidden",
          boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)", zIndex: 10
        }}>
          <ProjectPreview kind={p.preview} palette="blue" />
        </div>
      )}
    </div>
  );
};

const CVBlock = ({ label, rows, c, mono }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{
      fontFamily: mono, fontSize: 11, color: c.sub, textTransform: "uppercase",
      letterSpacing: "0.08em", marginBottom: 8
    }}>{label}</div>
    <div style={{ borderTop: `1px solid ${c.rule}` }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "140px 1fr auto", gap: 20,
          padding: "10px 0", borderBottom: `1px solid ${c.rule}`, alignItems: "baseline"
        }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: c.sub }}>{r.years}</div>
          <div style={{ fontSize: 14 }}>{r.what}</div>
          <div style={{ fontSize: 13, color: c.sub }}>{r.where}</div>
        </div>
      ))}
    </div>
  </div>
);

window.D3 = D3;
