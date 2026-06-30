// wireframe-kit.jsx — shared low-fi primitives for Kerry's portfolio wireframes.
// Clean & playful: off-white paper, floating polka dots, brand pink + red,
// real logo + photo. Yellow retired.

const WF = {
  paper:   '#faf6f1',  // clean warm off-white
  card:    '#ffffff',
  ink:     '#33302c',
  ink2:    '#9a9288',
  line:    '#e6dfd4',
  greek:   '#ece4d8',
  red:     '#e81c38',  // brand red
  pink:    '#f59ebd',  // brand pink
  pinkSoft:'#f9c6d8',  // pale pink
  pinkDeep:'#ee5a8a',  // deeper rose
  coral:   '#de8472',  // logo dot
  serif:   '"DM Serif Display", Georgia, serif',
  sans:    '"Archivo", system-ui, sans-serif',
  hand:    '"Caveat", cursive',
  mono:    '"DM Mono", ui-monospace, monospace',
  logo:    'assets/logo-k.png',
  photo:   'assets/kerry.jpg',
};

// ── Floating polka dots (perfectly round) ───────────────────────────────
// Deterministic scatter; cards paint over them so they read as "floating"
// behind the content. Weighted toward soft pinks, red used sparingly small.
function PolkaField({ w = 1280, h = 880, count = 13, seed = 7, top = 90 }) {
  let s = seed * 16807 % 2147483647;
  const rnd = () => (s = s * 16807 % 2147483647) / 2147483647;
  const dots = [];
  for (let i = 0; i < count; i++) {
    const r = rnd();
    const size = 8 + Math.round(r * r * 40);          // bias small
    const x = Math.round(rnd() * (w - size));
    const y = Math.round(top + rnd() * (h - top - size));
    const p = rnd();
    const color = p < 0.46 ? WF.pinkSoft : p < 0.72 ? WF.pink : p < 0.9 ? WF.coral : WF.red;
    const ring = rnd() < 0.3;
    dots.push({ x, y, size, color, ring });
  }
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {dots.map((d, i) => (
        <div key={i} style={{
          position: 'absolute', left: d.x, top: d.y, width: d.size, height: d.size, borderRadius: '50%',
          background: d.ring ? 'transparent' : d.color,
          border: d.ring ? `${Math.max(2, d.size * 0.16)}px solid ${d.color}` : 'none',
        }} />
      ))}
    </div>
  );
}

// ── Squiggle motif — now brand red (echoes the logo background ribbon) ───
function Squiggle({ w = 180, h = 34, color = WF.red, sw = 7, style = {} }) {
  const d = `M4 ${h * 0.6} C ${w * 0.12} ${h * 0.05}, ${w * 0.22} ${h * 0.05}, ${w * 0.3} ${h * 0.5}
             S ${w * 0.46} ${h * 0.98}, ${w * 0.54} ${h * 0.5}
             S ${w * 0.7} ${h * 0.04}, ${w * 0.78} ${h * 0.5}
             S ${w * 0.92} ${h * 0.96}, ${w - 4} ${h * 0.42}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={style}>
      <path d={d} stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

function Dot({ size = 60, color = WF.pink, ring = false, style = {} }) {
  return <div style={{ width: size, height: size, borderRadius: '50%',
    background: ring ? 'transparent' : color, border: ring ? `${Math.max(2, size * 0.14)}px solid ${color}` : 'none', ...style }} />;
}

// ── Hatched image placeholder (for project covers / work imagery) ───────
function Ph({ label = 'image', w = '100%', h = 200, radius = 4, frame, style = {} }) {
  return (
    <div style={{
      width: w, height: h,
      background: `repeating-linear-gradient(45deg, ${WF.greek}, ${WF.greek} 7px, #f4ece0 7px, #f4ece0 14px)`,
      border: `1.5px ${frame === 'dash' ? 'dashed' : 'solid'} ${WF.line}`,
      borderRadius: radius, display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxSizing: 'border-box', position: 'relative', flexShrink: 0, ...style,
    }}>
      <span style={{ font: `400 11px/1.3 ${WF.mono}`, color: WF.ink2, letterSpacing: 0.3, textAlign: 'center', padding: 6 }}>{label}</span>
    </div>
  );
}

// ── Real photo (object-fit cover, clean frame) ──────────────────────────
function Photo({ src = WF.photo, w = '100%', h = 300, radius = 4, pos = 'center 22%', style = {} }) {
  return (
    <div style={{ width: w, height: h, borderRadius: radius, overflow: 'hidden',
      background: WF.greek, flexShrink: 0, ...style }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
    </div>
  );
}

// ── Greeked text ────────────────────────────────────────────────────────
function Lines({ n = 3, w = '100%', gap = 9, last = 0.6, lh = 7, color = WF.greek, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width: w, ...style }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ height: lh, borderRadius: lh, background: color,
          width: i === n - 1 ? `${last * 100}%` : '100%' }} />
      ))}
    </div>
  );
}

// ── Handwritten margin note ─────────────────────────────────────────────
function Note({ children, color = WF.ink2, size = 19, rotate = -3, w, style = {} }) {
  return (
    <div style={{ font: `600 ${size}px/1.15 ${WF.hand}`, color, transform: `rotate(${rotate}deg)`,
      width: w, ...style }}>{children}</div>
  );
}

// ── Pill button ─────────────────────────────────────────────────────────
function Btn({ children, solid, color = WF.ink, size = 13, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', borderRadius: 30,
      border: `1.5px solid ${color}`, background: solid ? color : 'transparent',
      color: solid ? WF.paper : color, font: `600 ${size}px/1 ${WF.sans}`, whiteSpace: 'nowrap', ...style,
    }}>{children}</span>
  );
}

// ── Lock badge ──────────────────────────────────────────────────────────
function Lock({ size = 13, color = WF.card, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <rect x="4" y="11" width="16" height="10" rx="2" stroke={color} strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// ── Brand wordmark (logo K + "Kerry") ───────────────────────────────────
function Brand({ size = 26 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <img src={WF.logo} alt="K" style={{ height: size, width: 'auto', display: 'block' }} />
      <span style={{ font: `400 ${size * 0.88}px/1 ${WF.serif}`, color: WF.ink, letterSpacing: 0.2 }}>Kerry</span>
    </span>
  );
}

// ── Top navigation ──────────────────────────────────────────────────────
function Nav({ active, pad = 40, mobile = false }) {
  const links = ['Work', 'About', 'Contact', 'Résumé'];
  if (mobile) {
    return (
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `16px ${pad}px`, borderBottom: `1.5px solid ${WF.line}`, background: WF.paper }}>
        <Brand size={22} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[0, 1, 2].map((i) => <div key={i} style={{ width: 22, height: 2, background: WF.ink }} />)}
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `20px ${pad}px`, borderBottom: `1.5px solid ${WF.line}`, background: WF.paper }}>
      <Brand size={26} />
      <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        {links.map((l) => {
          const on = l === active;
          return (
            <span key={l} style={{ position: 'relative', font: `${on ? 600 : 500} 14px/1 ${WF.sans}`,
              color: on ? WF.red : WF.ink, letterSpacing: 0.2 }}>
              {l}
              {on && <Squiggle w={Math.max(34, l.length * 9)} h={9} sw={3} color={WF.red}
                style={{ position: 'absolute', left: 0, top: '120%' }} />}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── Section eyebrow ─────────────────────────────────────────────────────
function Eyebrow({ children, color = WF.ink2, style = {} }) {
  return (
    <div style={{ font: `500 11px/1 ${WF.mono}`, letterSpacing: 2, textTransform: 'uppercase',
      color, ...style }}>{children}</div>
  );
}

Object.assign(window, { WF, PolkaField, Squiggle, Dot, Ph, Photo, Lines, Note, Btn, Lock, Brand, Nav, Eyebrow });
