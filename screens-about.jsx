// screens-about.jsx — About + Contact/Résumé, desktop + mobile.
/* global WF, PolkaField, Squiggle, Dot, Ph, Photo, Lines, Note, Btn, Lock, Nav, Eyebrow */

function Value({ title, color }) {
  return (
    <div style={{ flex: 1 }}>
      <Dot size={18} color={color} />
      <div style={{ font: `400 24px/1.1 ${WF.serif}`, color: WF.ink, marginTop: 14 }}>{title}</div>
      <div style={{ marginTop: 12 }}><Lines n={3} last={0.6} /></div>
    </div>
  );
}

function About_Desktop() {
  const PAD = 56;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={820} seed={51} count={13} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav active="About" />
        <div style={{ padding: `34px ${PAD}px 0` }}>
          <Eyebrow>About</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 56, marginTop: 18, alignItems: 'start' }}>
            <div>
              <div style={{ font: `400 60px/1.1 ${WF.serif}`, color: WF.ink, position: 'relative' }}>
                Hi, I'm Kerry. I'm most curious about the{' '}
                <span style={{ position: 'relative', fontStyle: 'italic', color: WF.red }}>
                  why
                  <Squiggle w={120} h={20} sw={7} style={{ position: 'absolute', left: 0, top: '92%' }} />
                </span>{' '}
                behind what people do.
              </div>
              <div style={{ display: 'flex', gap: 40, marginTop: 36, maxWidth: 720 }}>
                <Lines n={6} last={0.7} lh={9} gap={12} />
                <Lines n={6} last={0.5} lh={9} gap={12} />
              </div>
            </div>
            <div style={{ position: 'relative', marginTop: 10 }}>
              <Dot size={210} color={WF.pink} style={{ position: 'absolute', top: -28, right: -36, zIndex: 0 }} />
              <Photo w="100%" h={400} pos="center 18%" style={{ position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>

        <div style={{ padding: `46px ${PAD}px 0` }}>
          <Eyebrow style={{ marginBottom: 16 }}>Worked with</Eyebrow>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} style={{ width: 120, height: 26, borderRadius: 4, background: WF.greek }} />
            ))}
          </div>
        </div>

        <div style={{ padding: `44px ${PAD}px 0`, display: 'flex', gap: 50 }}>
          <Value title="Empathy first" color={WF.pink} />
          <Value title="Rigor, not theater" color={WF.coral} />
          <Value title="Story that moves" color={WF.red} />
        </div>
      </div>

      <Note rotate={-3} style={{ position: 'absolute', top: 600, right: 56, width: 200, zIndex: 2 }}>
        editorial collage — big italic statement + portrait
      </Note>
    </div>
  );
}

function About_Mobile() {
  const PAD = 22;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={720} seed={53} count={9} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav mobile pad={PAD} active="About" />
        <div style={{ padding: `24px ${PAD}px 0` }}>
          <Eyebrow>About</Eyebrow>
          <div style={{ font: `400 34px/1.12 ${WF.serif}`, color: WF.ink, marginTop: 12 }}>
            Hi, I'm Kerry. I'm most curious about the{' '}
            <span style={{ position: 'relative', fontStyle: 'italic', color: WF.red }}>
              why
              <Squiggle w={70} h={14} sw={5} style={{ position: 'absolute', left: 0, top: '92%' }} />
            </span>{' '}
            behind what people do.
          </div>
        </div>
        <div style={{ position: 'relative', margin: `26px ${PAD}px 0` }}>
          <Dot size={130} color={WF.pink} style={{ position: 'absolute', top: -16, right: -10, zIndex: 0 }} />
          <Photo w="100%" h={300} pos="center 16%" style={{ position: 'relative', zIndex: 1 }} />
        </div>
        <div style={{ padding: `26px ${PAD}px 0` }}><Lines n={5} last={0.6} lh={9} gap={12} /></div>
        <div style={{ padding: `30px ${PAD}px 0` }}>
          <Eyebrow style={{ marginBottom: 16 }}>Worked with</Eyebrow>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[0, 1, 2, 3].map((i) => <div key={i} style={{ width: 90, height: 22, borderRadius: 4, background: WF.greek }} />)}
          </div>
        </div>
        <div style={{ padding: `30px ${PAD}px`, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <Value title="Empathy first" color={WF.pink} />
          <Value title="Rigor, not theater" color={WF.red} />
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// CONTACT + RÉSUMÉ (request only) — one page
// ════════════════════════════════════════════════════════════════════════
function Field({ label, h = 50 }) {
  return (
    <div>
      <div style={{ font: `500 10px/1 ${WF.mono}`, letterSpacing: 1.2, textTransform: 'uppercase', color: WF.ink2, marginBottom: 8 }}>{label}</div>
      <div style={{ height: h, border: `1.5px solid ${WF.line}`, borderRadius: 8, background: WF.card }} />
    </div>
  );
}

function RequestRow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${WF.red}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 10, height: 10, borderRadius: 2, background: WF.red }} />
      </div>
      <span style={{ font: `500 14px/1.3 ${WF.sans}`, color: WF.ink }}>Please send your résumé too</span>
    </div>
  );
}

function Contact_Desktop() {
  const PAD = 56;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={860} seed={61} count={13} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav active="Contact" />
        <div style={{ padding: `40px ${PAD}px 0` }}>
          <Eyebrow>Contact</Eyebrow>
          <div style={{ position: 'relative', marginTop: 10 }}>
            <div style={{ font: `400 88px/0.95 ${WF.serif}`, color: WF.ink }}>
              Let's <span style={{ fontStyle: 'italic' }}>talk</span>.
            </div>
            <Squiggle w={230} h={26} sw={8} style={{ position: 'absolute', left: 6, top: 86 }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64, padding: `44px ${PAD}px 0`, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              <Field label="Your name" />
              <Field label="Email" />
            </div>
            <Field label="Message" h={132} />
            <RequestRow />
            <div><Btn solid size={15} style={{ padding: '14px 26px' }}>Send message →</Btn></div>
          </div>

          <div style={{ position: 'relative' }}>
            <Dot size={150} color={WF.pink} style={{ position: 'absolute', top: -30, right: -26, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, background: WF.card, border: `1.5px solid ${WF.line}`,
              borderRadius: 12, padding: 28 }}>
              <Eyebrow>Résumé</Eyebrow>
              <div style={{ font: `400 28px/1.12 ${WF.serif}`, color: WF.ink, margin: '10px 0 8px' }}>
                Available on <span style={{ fontStyle: 'italic', color: WF.red }}>request</span>
              </div>
              <Lines n={2} last={0.7} />
              <div style={{ marginTop: 18 }}><Btn size={14} style={{ padding: '12px 20px' }}>Request résumé →</Btn></div>
              <div style={{ height: 1.5, background: WF.line, margin: '26px 0' }} />
              <Eyebrow>Or reach me directly</Eyebrow>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['hello@kerry.studio', 'LinkedIn ↗', 'Read.cv ↗'].map((l, i) => (
                  <span key={i} style={{ font: `500 16px/1 ${WF.sans}`, color: i === 0 ? WF.red : WF.ink }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Note rotate={3} size={17} style={{ position: 'absolute', bottom: 64, left: 360, width: 190, zIndex: 2 }}>
        no downloads — résumé is sent on request
      </Note>
    </div>
  );
}

function Contact_Mobile() {
  const PAD = 22;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={920} seed={63} count={10} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav mobile pad={PAD} active="Contact" />
        <div style={{ padding: `26px ${PAD}px 0` }}>
          <Eyebrow>Contact</Eyebrow>
          <div style={{ position: 'relative', marginTop: 8 }}>
            <div style={{ font: `400 56px/0.95 ${WF.serif}`, color: WF.ink }}>
              Let's <span style={{ fontStyle: 'italic' }}>talk</span>.
            </div>
            <Squiggle w={150} h={18} sw={6} style={{ position: 'absolute', left: 4, top: 54 }} />
          </div>
        </div>
        <div style={{ padding: `26px ${PAD}px 0`, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Field label="Your name" />
          <Field label="Email" />
          <Field label="Message" h={104} />
          <RequestRow />
          <Btn solid size={15} style={{ justifyContent: 'center', padding: 15 }}>Send message →</Btn>
        </div>
        <div style={{ position: 'relative', margin: `28px ${PAD}px` }}>
          <Dot size={120} color={WF.pink} style={{ position: 'absolute', top: -22, right: -14, zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, background: WF.card, border: `1.5px solid ${WF.line}`, borderRadius: 12, padding: 22 }}>
            <Eyebrow>Résumé</Eyebrow>
            <div style={{ font: `400 24px/1.12 ${WF.serif}`, color: WF.ink, margin: '8px 0 12px' }}>
              Available on <span style={{ fontStyle: 'italic', color: WF.red }}>request</span>
            </div>
            <Btn size={14} style={{ padding: '12px 18px' }}>Request résumé →</Btn>
            <div style={{ height: 1.5, background: WF.line, margin: '22px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['hello@kerry.studio', 'LinkedIn ↗', 'Read.cv ↗'].map((l, i) => (
                <span key={i} style={{ font: `500 15px/1 ${WF.sans}`, color: i === 0 ? WF.red : WF.ink }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { About_Desktop, About_Mobile, Contact_Desktop, Contact_Mobile });
