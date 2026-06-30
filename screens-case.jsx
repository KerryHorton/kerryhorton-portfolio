// screens-case.jsx — Case study detail, desktop + mobile.
/* global WF, PolkaField, Squiggle, Dot, Ph, Photo, Lines, Note, Btn, Lock, Nav, Eyebrow */

function Meta({ label, value }) {
  return (
    <div>
      <div style={{ font: `500 10px/1 ${WF.mono}`, letterSpacing: 1.5, textTransform: 'uppercase', color: WF.ink2 }}>{label}</div>
      <div style={{ font: `500 15px/1.3 ${WF.sans}`, color: WF.ink, marginTop: 6 }}>{value}</div>
    </div>
  );
}

function Metric({ big, label, color }) {
  return (
    <div style={{ flex: 1, position: 'relative' }}>
      <Dot size={40} color={color} style={{ position: 'absolute', top: -14, left: -10, zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, font: `400 56px/1 ${WF.serif}`, color: WF.ink }}>{big}</div>
      <div style={{ marginTop: 8, font: `500 13px/1.4 ${WF.sans}`, color: WF.ink2 }}>{label}</div>
    </div>
  );
}

function Case_Desktop() {
  const PAD = 56;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={1280} h={1640} seed={41} count={18} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav active="Work" />
        <div style={{ padding: `26px ${PAD}px 0` }}>
          <span style={{ font: `500 13px/1 ${WF.sans}`, color: WF.ink2 }}>← Selected work</span>

          <div style={{ marginTop: 26 }}>
            <Eyebrow>Project 01 · Research + Strategy</Eyebrow>
            <div style={{ position: 'relative', marginTop: 10 }}>
              <div style={{ font: `400 96px/0.92 ${WF.serif}`, color: WF.ink }}>Wayfinder</div>
              <Squiggle w={260} h={28} sw={8} style={{ position: 'absolute', left: 4, top: 92 }} />
            </div>
            <div style={{ font: `400 30px/1.3 ${WF.serif}`, color: WF.ink, fontStyle: 'italic', marginTop: 24, maxWidth: 720 }}>
              Reframing in-store navigation around how people actually wander.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 56, marginTop: 30, paddingBottom: 28, borderBottom: `1.5px solid ${WF.line}` }}>
            <Meta label="Role" value="Lead UX Researcher" />
            <Meta label="Timeline" value="2025 · 4 months" />
            <Meta label="Team" value="2 designers, 1 PM" />
            <Meta label="Methods" value="Field study, interviews" />
          </div>
        </div>

        <div style={{ padding: `28px ${PAD}px 0` }}>
          <Ph label="hero image — full-bleed cover (16:7)" w="100%" h={400} radius={10} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 56, padding: `52px ${PAD}px 0` }}>
          <div>
            <div style={{ font: `400 30px/1 ${WF.serif}`, color: WF.ink }}>The brief</div>
            <Dot size={14} color={WF.red} style={{ marginTop: 16 }} />
          </div>
          <div>
            <Lines n={4} last={0.8} lh={9} gap={12} />
            <div style={{ marginTop: 20 }}><Lines n={3} last={0.5} lh={9} gap={12} /></div>
          </div>
        </div>

        <div style={{ padding: `52px ${PAD + 60}px`, position: 'relative' }}>
          <Dot size={150} color={WF.pink} style={{ position: 'absolute', top: 30, left: PAD, zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, font: `400 44px/1.25 ${WF.serif}`, color: WF.ink, maxWidth: 880 }}>
            “People don't read signs — they <span style={{ fontStyle: 'italic', color: WF.red }}>follow other people.</span>”
          </div>
        </div>

        <div style={{ padding: `8px ${PAD}px 0` }}>
          <div style={{ font: `400 30px/1 ${WF.serif}`, color: WF.ink, marginBottom: 22 }}>Process</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {['field study', 'synthesis / affinity map', 'concept testing'].map((c, i) => (
              <Ph key={i} label={c} w="100%" h={210} radius={10} />
            ))}
          </div>
        </div>

        <div style={{ padding: `52px ${PAD}px 60px` }}>
          <div style={{ font: `400 30px/1 ${WF.serif}`, color: WF.ink, marginBottom: 34 }}>Outcome</div>
          <div style={{ display: 'flex', gap: 50 }}>
            <Metric big="+38%" label="task success in wayfinding tests" color={WF.pink} />
            <Metric big="6 wk" label="from research to shipped pilot" color={WF.coral} />
            <Metric big="12" label="store teams adopted the playbook" color={WF.red} />
          </div>
        </div>

        <div style={{ borderTop: `1.5px solid ${WF.line}`, padding: `30px ${PAD}px`, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Eyebrow>Next project →</Eyebrow>
            <div style={{ font: `400 44px/1 ${WF.serif}`, color: WF.ink, marginTop: 8 }}>Bloom</div>
          </div>
          <Ph label="next cover" w={150} h={96} radius={10} />
        </div>
      </div>

      <Note rotate={-3} style={{ position: 'absolute', top: 250, right: 40, width: 150, zIndex: 2 }}>
        consistent template for all 8 public projects
      </Note>
    </div>
  );
}

function Case_Mobile() {
  const PAD = 22;
  return (
    <div style={{ width: '100%', height: '100%', background: WF.paper, position: 'relative', overflow: 'hidden' }}>
      <PolkaField w={390} h={1500} seed={43} count={12} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav mobile pad={PAD} active="Work" />
        <div style={{ padding: `20px ${PAD}px 0` }}>
          <span style={{ font: `500 12px/1 ${WF.sans}`, color: WF.ink2 }}>← Selected work</span>
          <Eyebrow style={{ marginTop: 18 }}>Project 01 · Research + Strategy</Eyebrow>
          <div style={{ position: 'relative', marginTop: 8 }}>
            <div style={{ font: `400 54px/0.92 ${WF.serif}`, color: WF.ink }}>Wayfinder</div>
            <Squiggle w={150} h={18} sw={6} style={{ position: 'absolute', left: 2, top: 50 }} />
          </div>
          <div style={{ font: `400 19px/1.35 ${WF.serif}`, fontStyle: 'italic', color: WF.ink, marginTop: 16 }}>
            Reframing in-store navigation around how people actually wander.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 40px', marginTop: 22, paddingBottom: 22,
            borderBottom: `1.5px solid ${WF.line}` }}>
            <Meta label="Role" value="Lead Researcher" />
            <Meta label="Timeline" value="2025 · 4 mo" />
          </div>
        </div>
        <div style={{ padding: `22px ${PAD}px 0` }}>
          <Ph label="hero image" w="100%" h={220} radius={10} />
        </div>
        <div style={{ padding: `30px ${PAD}px 0` }}>
          <div style={{ font: `400 26px/1 ${WF.serif}`, color: WF.ink, marginBottom: 14 }}>The brief</div>
          <Lines n={4} last={0.7} lh={9} gap={11} />
        </div>
        <div style={{ padding: `28px ${PAD}px`, position: 'relative' }}>
          <Dot size={110} color={WF.pink} style={{ position: 'absolute', top: 14, left: 8, zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, font: `400 27px/1.3 ${WF.serif}`, color: WF.ink }}>
            “People don't read signs — they <span style={{ fontStyle: 'italic', color: WF.red }}>follow other people.</span>”
          </div>
        </div>
        <div style={{ padding: `4px ${PAD}px 0`, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Ph label="process — field study" w="100%" h={180} radius={10} />
          <Ph label="process — synthesis" w="100%" h={180} radius={10} />
        </div>
        <div style={{ padding: `30px ${PAD}px 0` }}>
          <div style={{ font: `400 26px/1 ${WF.serif}`, color: WF.ink, marginBottom: 26 }}>Outcome</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <Metric big="+38%" label="task success" color={WF.pink} />
            <Metric big="12" label="teams adopted" color={WF.red} />
          </div>
        </div>
        <div style={{ marginTop: 30, borderTop: `1.5px solid ${WF.line}`, padding: `22px ${PAD}px`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Eyebrow>Next →</Eyebrow>
            <div style={{ font: `400 32px/1 ${WF.serif}`, color: WF.ink, marginTop: 6 }}>Bloom</div>
          </div>
          <Ph label="cover" w={92} h={70} radius={8} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Case_Desktop, Case_Mobile });
