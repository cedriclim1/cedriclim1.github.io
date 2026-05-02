// Shared icons + project preview placeholders for all three directions
const Icon = ({ name, size = 16, stroke = 1.6 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "mail": return (<svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>);
    case "github": return (<svg {...props}><path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 18.9 5a4.9 4.9 0 0 0-.1-3.7s-1.1-.4-3.8 1.4a13 13 0 0 0-7 0C5.4.9 4.3 1.3 4.3 1.3A4.9 4.9 0 0 0 4.2 5a5.2 5.2 0 0 0-1.4 3.8c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>);
    case "scholar": return (<svg {...props}><path d="M12 3 2 9l10 6 10-6-10-6Z"/><path d="M6 11v5a6 6 0 0 0 12 0v-5"/></svg>);
    case "linkedin": return (<svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 11v6"/></svg>);
    case "twitter": return (<svg {...props}><path d="M18 4 6 20M6 4l12 16"/></svg>);
    case "arrow": return (<svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-ne": return (<svg {...props}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case "sun": return (<svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>);
    case "moon": return (<svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>);
    case "dot": return (<svg width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>);
    default: return null;
  }
};

// Abstract preview tiles for projects (no AI-art SVG; just composed shapes)
const ProjectPreview = ({ kind, palette = "blue" }) => {
  const colors = palette === "blue"
    ? { bg: "#0f1a2e", fg: "#e8d5b7", accent: "#c2845a", muted: "#2a3a55" }
    : { bg: "#f4ede2", fg: "#1a2540", accent: "#b8693e", muted: "#d8ccb8" };

  if (kind === "ptn") {
    // Concentric tomographic slices
    return (
      <svg viewBox="0 0 200 140" style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="200" height="140" fill={colors.bg}/>
        {[...Array(8)].map((_, i) => (
          <ellipse key={i} cx="100" cy="70" rx={70 - i * 8} ry={50 - i * 5}
            fill="none" stroke={i % 2 ? colors.accent : colors.fg} strokeOpacity={0.15 + i * 0.08} strokeWidth="0.8"/>
        ))}
        <circle cx="100" cy="70" r="3" fill={colors.accent}/>
      </svg>
    );
  }
  if (kind === "atomvis") {
    // Scattered atoms
    const seed = [[40,30],[70,50],[110,28],[150,45],[60,85],[100,75],[140,90],[170,65],[30,100],[90,110],[130,115],[155,30],[80,25],[120,100]];
    return (
      <svg viewBox="0 0 200 140" style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="200" height="140" fill={colors.bg}/>
        {seed.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2 + (i % 3)} fill={i % 3 === 0 ? colors.accent : colors.fg} opacity={0.4 + (i % 4) * 0.15}/>
        ))}
      </svg>
    );
  }
  if (kind === "diffrec") {
    // Diffraction grid
    return (
      <svg viewBox="0 0 200 140" style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="200" height="140" fill={colors.bg}/>
        {[...Array(7)].map((_, r) =>
          [...Array(10)].map((_, c) => {
            const cx = 20 + c * 18;
            const cy = 18 + r * 16;
            const d = Math.sqrt((cx - 100) ** 2 + (cy - 70) ** 2);
            return <circle key={`${r}-${c}`} cx={cx} cy={cy} r={Math.max(1, 6 - d / 25)} fill={colors.fg} opacity={Math.max(0.15, 1 - d / 90)}/>;
          })
        )}
      </svg>
    );
  }
  if (kind === "labnotes") {
    // Notebook lines
    return (
      <svg viewBox="0 0 200 140" style={{ width: "100%", height: "100%", display: "block" }}>
        <rect width="200" height="140" fill={colors.bg}/>
        {[...Array(9)].map((_, i) => (
          <rect key={i} x="20" y={20 + i * 12} width={i % 3 === 0 ? 140 : i % 3 === 1 ? 100 : 60} height="2" fill={i === 4 ? colors.accent : colors.fg} opacity={0.35}/>
        ))}
        <rect x="20" y="118" width="40" height="6" fill={colors.accent} opacity="0.8"/>
      </svg>
    );
  }
  return null;
};

Object.assign(window, { Icon, ProjectPreview });
