// Direction 2 — Modern grid with project cards
// Crisp white, midnight blue accents, copper highlights, asymmetric grid
const D2 = () => {
  const S = window.SITE;
  const c = {
    bg: "#ffffff",
    fg: "#0b1428",        // midnight blue near-black
    sub: "#6b7287",
    rule: "#e6e8ee",
    accent: "#1d3a8a",    // mid midnight
    accent2: "#c2845a",   // warm copper
    chip: "#f3f4f8"
  };
  const fontStack = '"General Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
  const monoStack = '"JetBrains Mono", ui-monospace, monospace';

  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={{
      width: 1200, padding: "40px 64px 80px", background: c.bg, color: c.fg,
      fontFamily: fontStack, fontSize: 15, lineHeight: 1.5, letterSpacing: "-0.005em",
      minHeight: 1500
    }}>
      {/* Top nav */}
      <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 0 16px", marginBottom: 56, borderBottom: `1px solid ${c.rule}`
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: c.fg,
            display: "grid", placeItems: "center", color: "#fff",
            fontFamily: monoStack, fontSize: 13, fontWeight: 600
          }}>cl</div>
          <div style={{ fontWeight: 500, fontSize: 15 }}>Cedric Lim</div>
          <span style={{
            fontFamily: monoStack, fontSize: 11, color: c.sub, marginLeft: 8,
            padding: "3px 8px", background: c.chip, borderRadius: 4
          }}>available for collab</span>
        </div>
        <nav style={{ display: "flex", gap: 32, fontSize: 14 }}>
          {["Home", "CV", "Work", "Writing", "About"].map((l, i) => (
            <a key={l} style={{
              color: i === 0 ? c.fg : c.sub, textDecoration: "none",
              fontWeight: i === 0 ? 500 : 400
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          {["github", "linkedin", "scholar", "mail"].map(n => (
            <a key={n} style={{
              width: 32, height: 32, borderRadius: 8, border: `1px solid ${c.rule}`,
              display: "grid", placeItems: "center", color: c.fg
            }}>
              <Icon name={n} size={14} />
            </a>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section style={{
        display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64,
        marginBottom: 80, alignItems: "end"
      }}>
        <div>
          <div style={{
            fontFamily: monoStack, fontSize: 12, color: c.sub,
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#3ba360" }}/>
            PhD Candidate · Stanford MS&E
          </div>
          <h1 style={{
            fontSize: 64, lineHeight: 1.02, fontWeight: 500, letterSpacing: "-0.035em",
            margin: "0 0 32px"
          }}>
            Reconstructing the<br/>
            invisible, one<br/>
            <span style={{ color: c.accent2, fontStyle: "italic", fontWeight: 400 }}>tomogram</span> at a time.
          </h1>
          <p style={{ fontSize: 17, color: c.sub, maxWidth: 520, margin: 0 }}>
            {S.shortBio}
          </p>
        </div>
        <div>
          <div style={{
            border: `1px solid ${c.rule}`, borderRadius: 12, padding: 20,
            background: c.bg
          }}>
            <div style={{
              fontFamily: monoStack, fontSize: 11, color: c.sub,
              textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14
            }}>// Currently</div>
            {S.now.slice(0, 3).map((n, i) => (
              <div key={n.label} style={{
                display: "grid", gridTemplateColumns: "84px 1fr", gap: 12,
                padding: "10px 0", borderTop: i === 0 ? "none" : `1px solid ${c.rule}`,
                fontSize: 13.5, lineHeight: 1.45
              }}>
                <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, paddingTop: 1 }}>
                  {n.label}
                </div>
                <div>{n.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — cards */}
      <section style={{ marginBottom: 80 }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          marginBottom: 24
        }}>
          <h2 style={{
            fontFamily: monoStack, fontSize: 12, color: c.sub, fontWeight: 500,
            textTransform: "uppercase", letterSpacing: "0.12em", margin: 0
          }}>
            Selected work — 2023 / 2025
          </h2>
          <a style={{ fontSize: 13, color: c.fg, display: "flex", alignItems: "center", gap: 6 }}>
            All projects <Icon name="arrow" size={12} />
          </a>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24
        }}>
          {S.projects.map((p) => (
            <article key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                border: `1px solid ${c.rule}`, borderRadius: 14, overflow: "hidden",
                background: c.bg, transition: "transform 0.25s, box-shadow 0.25s",
                transform: hovered === p.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === p.id ? "0 24px 48px -24px rgba(11,20,40,0.18)" : "0 0 0 rgba(0,0,0,0)"
              }}>
              <div style={{ aspectRatio: "200/120", borderBottom: `1px solid ${c.rule}` }}>
                <ProjectPreview kind={p.preview} palette="blue" />
              </div>
              <div style={{ padding: "20px 22px 22px" }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: 10
                }}>
                  <span style={{
                    fontFamily: monoStack, fontSize: 11, color: c.sub,
                    textTransform: "uppercase", letterSpacing: "0.08em"
                  }}>{p.tag} · {p.year}</span>
                  <Icon name="arrow-ne" size={16} stroke={1.5} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ margin: "0 0 14px", color: c.sub, fontSize: 14, lineHeight: 1.5 }}>{p.blurb}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: monoStack, fontSize: 11, color: c.fg,
                      padding: "3px 8px", background: c.chip, borderRadius: 4
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Writing + Publications side-by-side */}
      <section style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 80
      }}>
        <div>
          <h2 style={{
            fontFamily: monoStack, fontSize: 12, color: c.sub, fontWeight: 500,
            textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 20px"
          }}>Writing</h2>
          {S.posts.map((p, i) => (
            <a key={p.id} style={{
              display: "block", padding: "18px 0",
              borderTop: `1px solid ${c.rule}`,
              borderBottom: i === S.posts.length - 1 ? `1px solid ${c.rule}` : "none",
              cursor: "pointer"
            }}>
              <div style={{
                fontFamily: monoStack, fontSize: 11, color: c.sub, marginBottom: 6,
                display: "flex", justifyContent: "space-between"
              }}>
                <span>{p.date}</span><span>{p.readTime}</span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: c.sub }}>{p.excerpt}</div>
            </a>
          ))}
        </div>
        <div>
          <h2 style={{
            fontFamily: monoStack, fontSize: 12, color: c.sub, fontWeight: 500,
            textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 20px"
          }}>Publications</h2>
          {S.publications.map((p, i) => (
            <div key={i} style={{
              padding: "16px 0", borderTop: `1px solid ${c.rule}`,
              borderBottom: i === S.publications.length - 1 ? `1px solid ${c.rule}` : "none"
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between", marginBottom: 6,
                fontFamily: monoStack, fontSize: 11, color: c.sub
              }}>
                <span>{p.venue}</span>
                <span style={{
                  color: p.status === "Under review" ? c.accent2 : c.sub
                }}>{p.year} · {p.status}</span>
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{p.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        display: "grid", gridTemplateColumns: "1fr auto", gap: 32,
        paddingTop: 32, borderTop: `1px solid ${c.rule}`, alignItems: "end"
      }}>
        <div>
          <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.025em", marginBottom: 12, maxWidth: 540 }}>
            Got an interesting tomography problem? <span style={{ color: c.sub }}>Let's talk.</span>
          </div>
          <a style={{
            fontFamily: monoStack, fontSize: 13, color: c.fg,
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 14px", border: `1px solid ${c.fg}`, borderRadius: 999
          }}>
            <Icon name="mail" size={13} /> cedric@stanford.edu
          </a>
        </div>
        <div style={{ fontFamily: monoStack, fontSize: 11, color: c.sub, textAlign: "right" }}>
          © 2026<br/>
          Built in Stanford, CA<br/>
          Last updated 04.21.26
        </div>
      </footer>
    </div>
  );
};

window.D2 = D2;
