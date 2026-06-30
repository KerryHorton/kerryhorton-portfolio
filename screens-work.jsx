// screens-work.jsx — Work / case-study index. Clean staggered grid, 2 locked.
/* global WF, PolkaField, Squiggle, Dot, Ph, Photo, Lines, Note, Btn, Lock, Nav, Eyebrow */

function ProjectCard({ n, title, tags, locked, ph = 200 }) {
  return (
    <div style={{ width: '100%', background: WF.card, border: `1.5px solid ${WF.line}`, borderRadius: 10,
      boxShadow: '0 6px 20px rgba(120,60,80,.06)', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <Ph label={locked ? '' : `project ${n} — cover`} w="100%" h={ph} radius={0}
          style={{ border: 'none', filter: locked ? 'grayscale(0.6)' : 'none', opacity: locked ? 0.45 : 1 }} />
        {locked && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 10,
            background: 'rgba(250,246,241,0.5)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: WF.pink,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lock size={19} color={WF.card} />
            </div>
            <span style={{ font: `500 10px/1 ${WF.mono}`, letterSpacing: 1.5, textTransform: 'uppercase', color: WF.ink }}>Protected</span>
          </div>
        )}
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ font: `400 26px/1.05 ${WF.serif}`, color: WF.ink }}>{title}</span>
          <span style={{ font: `500 11px/1 ${WF.mono}`, color: WF.ink2 }}>{String(n).padStart(2, '0')}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
          {(locked ? ['enter password →'] : tags).map((t, i) => (
            <span key={i} style={{ font: `500 11px/1 ${WF.sans}`, color: locked ? WF.red : WF.ink2,
              border: `1px solid ${locked ? WF.pink : WF.line}`, borderRadius: 20, padding: '6px 11px' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { t: 'Wayfinder', tags: ['Research', 'Mobile'] },
  { t: 'Northwind', tags: ['Strategy'], locked: true },
  { t: 'Bloom', tags: ['Research', 'Service'] },
  { t: 'Cadence', tags: ['Product'] },
  { t: 'Marigold', tags: ['Research', 'Brand'] },
  { t: 'Tideline', tags: ['Strategy', 'B2B'] },
  { t: 'Postcard', tags: ['Research'] },
  { t: 'Vellum', tags: ['Product'], locked: true },
  { t: 'Juniper', tags: ['Research', 'Health'] },
  { t: 'Lantern', tags: ['Strategy'] },
];

const Chips = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    {['All', 'Research', 'Strategy', 'Product'].map((c, i) => (
      <span key={c} style={{ font: `500 12px/1 ${WF.sans}`, padding: '9px 15px', borderRadius: 20,
        border: `1.5px solid ${i === 0 ? WF.red : WF.line}`, color: i === 0 ? WF.card : WF.ink,
        background: i === 0 ? WF.red : 'transparent' }}>{c}</span>
    ))}
  </div>
);

function Work_Desktop() {
  // round-robin into 3 staggered columns
  const cols = [[], [], []];
  PROJECTS.forEach((p, i) => cols[i % 3].push({ ...p, n: i + 1 }));
  const offsets = [0, 44, 88];
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={1640} seed={21} count={20} />
      <Nav active="Work" />
      <div style={{ position: 'relative', zIndex: 1, padding: '40px 56px 64px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <Eyebrow>10 projects · 2 protected</Eyebrow>
            <div style={{ position: 'relative', marginTop: 8 }}>
              <div style={{ font: `400 72px/0.95 ${WF.serif}`, color: WF.ink, whiteSpace: 'nowrap' }}>
                Selected <span style={{ fontStyle: 'italic' }}>work</span>
              </div>
              <Squiggle w={184} h={22} sw={7} style={{ position: 'absolute', left: 8, top: 76 }} />
            </div>
          </div>
          <Chips />
        </div>

        <div style={{ display: 'flex', gap: 32, marginTop: 56, alignItems: 'flex-start' }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32, marginTop: offsets[ci] }}>
              {col.map((p) => <ProjectCard key={p.t} n={p.n} title={p.t} tags={p.tags} locked={p.locked} />)}
            </div>
          ))}
        </div>
      </div>

      <Note rotate={-3} style={{ position: 'absolute', bottom: 120, left: 560, width: 190, zIndex: 1 }}>
        clean grid, gentle stagger — dots float in the gaps
      </Note>
    </div>
  );
}

function Work_Mobile() {
  const order = [0, 1, 4, 7, 9];
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={1560} seed={31} count={14} />
      <Nav mobile pad={22} active="Work" />
      <div style={{ position: 'relative', zIndex: 1, padding: '22px 22px 0' }}>
        <Eyebrow>10 projects · 2 protected</Eyebrow>
        <div style={{ position: 'relative', marginTop: 6 }}>
          <div style={{ font: `400 46px/0.95 ${WF.serif}`, color: WF.ink }}>
            Selected <span style={{ fontStyle: 'italic' }}>work</span>
          </div>
          <Squiggle w={120} h={18} sw={6} style={{ position: 'absolute', left: 205, top: 46 }} />
        </div>
        <div style={{ marginTop: 16 }}><Chips /></div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 20, padding: 22 }}>
        {order.map((idx) => (
          <ProjectCard key={idx} n={idx + 1} title={PROJECTS[idx].t} tags={PROJECTS[idx].tags}
            locked={PROJECTS[idx].locked} ph={180} />
        ))}
        <div style={{ textAlign: 'center', font: `500 12px/1 ${WF.mono}`, color: WF.ink2, padding: '6px 0 4px' }}>
          ↓ all 10 projects
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Work_Desktop, Work_Mobile, PROJECTS });
