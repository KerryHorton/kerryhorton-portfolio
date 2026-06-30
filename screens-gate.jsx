// screens-gate.jsx — Password gate ("Private portfolio") wireframe, desktop + mobile.
/* global WF, PolkaField, Squiggle, Dot, Lines, Note, Btn, Eyebrow */

// Pill-shaped password field placeholder
function Field({ w = 240, label = 'Password' }) {
  return (
    <div style={{ width: w, flexShrink: 0, padding: '15px 22px', borderRadius: 30,
      border: '1.5px solid rgba(51,48,44,.32)', background: WF.card,
      font: `400 14px/1 ${WF.sans}`, color: WF.ink2, textAlign: 'left' }}>{label}</div>
  );
}

function GateInner({ scale = 1 }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 480 * scale, textAlign: 'center' }}>
      {/* brand */}
      <div style={{ font: `400 ${34 * scale}px/1 ${WF.serif}`, color: WF.ink, marginBottom: 30 * scale }}>
        Kerry Horton
      </div>

      <Eyebrow style={{ marginBottom: 14 * scale }}>Private portfolio</Eyebrow>

      {/* headline */}
      <div style={{ font: `400 ${52 * scale}px/1.04 ${WF.serif}`, color: WF.ink, letterSpacing: -0.5,
        position: 'relative', display: 'inline-block' }}>
        <span style={{ fontStyle: 'italic', color: WF.coral }}>Password</span>, please.
        <Squiggle w={120 * scale} h={16 * scale} sw={5} color={WF.coral}
          style={{ position: 'absolute', left: '2%', top: '96%' }} />
      </div>

      {/* greeked description */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 22 * scale }}>
        <Lines n={3} last={0.62} w={300 * scale} />
      </div>

      {/* input + button */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 34 * scale }}>
        <Field w={240 * scale} />
        <Btn solid style={{ padding: '15px 24px', borderRadius: 30 }}>Enter →</Btn>
      </div>

      {/* request access link */}
      <div style={{ marginTop: 30 * scale, position: 'relative', display: 'inline-block' }}>
        <span style={{ font: `500 11px/1 ${WF.mono}`, letterSpacing: 1.4, textTransform: 'uppercase', color: WF.ink2 }}>
          Request access →
        </span>
      </div>
    </div>
  );
}

function Gate_Desktop() {
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={880} seed={21} count={9} top={40} />

      {/* big blush circle bleeding off the top-right */}
      <Dot size={640} color={WF.pinkSoft} style={{ position: 'absolute', top: -150, right: -110, zIndex: 0 }} />

      {/* centered gate content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40, zIndex: 1 }}>
        <GateInner scale={1} />
      </div>

      <Note rotate={-4} style={{ position: 'absolute', top: 70, left: 56, width: 200, zIndex: 3 }}>
        site-wide gate — one password unlocks the whole portfolio
      </Note>
      <Note rotate={3} style={{ position: 'absolute', bottom: 150, left: 86, width: 190, zIndex: 3 }}>
        hover on links = maroon + salmon squiggle, same as the rest of the site
      </Note>
      <Note rotate={-3} size={16} style={{ position: 'absolute', bottom: 70, right: 90, width: 170, zIndex: 3 }}>
        big blush circle bleeds off ↗
      </Note>
    </div>
  );
}

function Gate_Mobile() {
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={844} seed={23} count={7} top={20} />
      <Dot size={300} color={WF.pinkSoft} style={{ position: 'absolute', top: -90, right: -80, zIndex: 0 }} />

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, zIndex: 1 }}>
        <GateInner scale={0.66} />
      </div>
    </div>
  );
}

Object.assign(window, { Gate_Desktop, Gate_Mobile });
