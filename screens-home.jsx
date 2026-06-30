// screens-home.jsx — Homepage, two directions (giant name / manifesto), desktop + mobile.
/* global WF, PolkaField, Squiggle, Dot, Ph, Photo, Lines, Note, Btn, Lock, Nav, Eyebrow */

// ════════════════════════════════════════════════════════════════════════
// DIRECTION A — giant name, type-forward
// ════════════════════════════════════════════════════════════════════════
function HomeA_Desktop() {
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={880} seed={3} count={12} />
      <Nav active={null} />

      {/* role + intro, top-left */}
      <div style={{ position: 'absolute', top: 110, left: 40, width: 400, zIndex: 1 }}>
        <div style={{ font: `400 30px/1.15 ${WF.serif}`, color: WF.ink }}>
          UX Researcher <span style={{ fontStyle: 'italic', color: WF.red }}>+</span> Strategist
        </div>
        <div style={{ marginTop: 16 }}><Lines n={3} last={0.5} /></div>
        <div style={{ marginTop: 24 }}><Btn solid>See selected work ↓</Btn></div>
      </div>

      {/* portrait, right (straight, clean) */}
      <div style={{ position: 'absolute', top: 96, right: 96, zIndex: 1 }}>
        <Dot size={200} color={WF.pink} style={{ position: 'absolute', top: -32, right: -44, zIndex: 0 }} />
        <Photo w={300} h={380} pos="center 20%" style={{ position: 'relative', zIndex: 1,
          boxShadow: '0 10px 30px rgba(0,0,0,.08)' }} />
      </div>

      {/* GIANT name, bleeding off the bottom-left */}
      <div style={{ position: 'absolute', bottom: 18, left: -14, lineHeight: 0.78, zIndex: 1 }}>
        <Squiggle w={360} h={40} sw={9} style={{ position: 'absolute', top: -30, left: 60 }} />
        <div style={{ font: `400 300px/0.78 ${WF.serif}`, color: WF.ink, letterSpacing: -6 }}>
          Kerry<span style={{ color: WF.red }}>.</span>
        </div>
      </div>

      <Note rotate={-4} style={{ position: 'absolute', bottom: 250, left: 470, width: 200, zIndex: 1 }}>
        name set HUGE — bleeds off the page edge
      </Note>
      <Note rotate={-3} size={16} style={{ position: 'absolute', top: 86, left: 600, width: 170, zIndex: 1 }}>
        nav: hover = squiggle underline ↗
      </Note>
    </div>
  );
}

function HomeA_Mobile() {
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={844} seed={5} count={9} />
      <Nav mobile pad={22} />
      <div style={{ position: 'relative', zIndex: 1, padding: '26px 22px 0' }}>
        <div style={{ font: `400 20px/1.2 ${WF.serif}`, color: WF.ink }}>
          UX Researcher <span style={{ color: WF.red }}>+</span> Strategist
        </div>
        <div style={{ marginTop: 12 }}><Lines n={2} last={0.6} /></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: 8, paddingLeft: 22 }}>
        <Squiggle w={210} h={26} sw={6} style={{ position: 'absolute', top: 2, left: 20 }} />
        <div style={{ font: `400 132px/0.82 ${WF.serif}`, color: WF.ink, letterSpacing: -3 }}>
          Kerry<span style={{ color: WF.red }}>.</span>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, margin: '6px 22px 0' }}>
        <Dot size={120} color={WF.pink} style={{ position: 'absolute', top: -18, right: -10, zIndex: 0 }} />
        <Photo w="100%" h={300} pos="center 18%" style={{ position: 'relative', zIndex: 1 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '26px 22px' }}>
        <Btn solid style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>See selected work ↓</Btn>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION B — bold manifesto statement with shapes
// ════════════════════════════════════════════════════════════════════════
function HomeB_Desktop() {
  const word = { font: `400 78px/1.05 ${WF.serif}`, color: WF.ink };
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={880} seed={11} count={12} />
      <Nav active={null} />
      <Eyebrow style={{ position: 'absolute', top: 100, left: 40, zIndex: 1 }}>Kerry — UX Researcher + Strategist</Eyebrow>

      <div style={{ position: 'absolute', top: 150, left: 40, right: 40, zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <span style={word}>I turn</span>
          <span style={{ position: 'relative' }}>
            <Dot size={108} color={WF.pink} style={{ position: 'absolute', top: -14, left: -16, zIndex: 0 }} />
            <span style={{ ...word, position: 'relative', zIndex: 1, fontStyle: 'italic' }}>messy</span>
          </span>
          <span style={word}>human research</span>
          <Photo w={150} h={96} pos="center 30%" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 14 }}>
          <span style={word}>into product</span>
          <Dot size={84} color={WF.coral} style={{ flexShrink: 0 }} />
          <span style={{ ...word, position: 'relative' }}>
            decisions
            <Squiggle w={250} h={22} sw={7} style={{ position: 'absolute', left: 0, top: '100%' }} />
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap', marginTop: 22 }}>
          <span style={word}>people</span>
          <span style={{ ...word, color: WF.red, fontStyle: 'italic' }}>actually</span>
          <span style={word}>feel.</span>
          <Dot size={64} color={WF.pink} ring style={{ marginLeft: 8, alignSelf: 'center' }} />
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 56, left: 40, right: 40, display: 'flex',
        alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, zIndex: 1 }}>
        <div style={{ width: 360 }}><Lines n={3} last={0.7} /></div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Btn solid>Selected work</Btn>
          <Btn>About me</Btn>
        </div>
      </div>

      <Note rotate={-4} style={{ position: 'absolute', top: 250, right: 56, width: 170, zIndex: 1 }}>
        statement is the hero — shapes &amp; dots tucked into the type
      </Note>
    </div>
  );
}

function HomeB_Mobile() {
  const word = { font: `400 31px/1.16 ${WF.serif}`, color: WF.ink };
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={844} seed={13} count={9} />
      <Nav mobile pad={22} />
      <Eyebrow style={{ position: 'relative', zIndex: 1, margin: '22px 22px 0' }}>UX Researcher + Strategist</Eyebrow>
      <div style={{ position: 'relative', zIndex: 1, padding: '16px 22px 0' }}>
        <div style={{ font: `400 31px/1.34 ${WF.serif}`, color: WF.ink }}>
          I turn{' '}
          <span style={{ position: 'relative' }}>
            <Dot size={46} color={WF.pink} style={{ position: 'absolute', top: -4, left: -9, zIndex: -1 }} />
            <span style={{ fontStyle: 'italic' }}>messy</span>
          </span>{' '}
          human research into{' '}
          <span style={{ position: 'relative' }}>
            decisions
            <Squiggle w={150} h={16} sw={5} style={{ position: 'absolute', left: 0, top: '88%' }} />
          </span>{' '}
          people <span style={{ color: WF.red, fontStyle: 'italic' }}>feel.</span>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, margin: '20px 22px 0' }}>
        <Dot size={96} color={WF.coral} style={{ position: 'absolute', top: -16, left: -12, zIndex: 0 }} />
        <Photo w="100%" h={200} pos="center 28%" style={{ position: 'relative', zIndex: 1 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 10, padding: '24px 22px' }}>
        <Btn solid style={{ flex: 1, justifyContent: 'center', padding: 14 }}>Selected work</Btn>
        <Btn style={{ flex: 1, justifyContent: 'center', padding: 14 }}>About</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { HomeA_Desktop, HomeA_Mobile, HomeB_Desktop, HomeB_Mobile });
