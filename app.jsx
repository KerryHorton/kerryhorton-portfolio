// app.jsx — composes all wireframe screens onto the design canvas.
/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard, WF,
   HomeA_Desktop, HomeA_Mobile, HomeB_Desktop, HomeB_Mobile,
   Work_Desktop, Work_Mobile, Case_Desktop, Case_Mobile,
   About_Desktop, About_Mobile, Contact_Desktop, Contact_Mobile,
   Gate_Desktop, Gate_Mobile */

const board = { background: WF.paper };

function App() {
  return (
    <DesignCanvas>
      <DCSection id="gate" title="Password gate · Private portfolio"
        subtitle="Site-wide gate — one password unlocks the whole portfolio">
        <DCArtboard id="gt-d" label="Desktop" width={1280} height={880} style={board}><Gate_Desktop /></DCArtboard>
        <DCArtboard id="gt-m" label="Mobile" width={390} height={844} style={board}><Gate_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="home-a" title="Homepage · A — Giant name"
        subtitle="Type-forward hero; the name bleeds off the page edge">
        <DCArtboard id="ha-d" label="Desktop" width={1280} height={880} style={board}><HomeA_Desktop /></DCArtboard>
        <DCArtboard id="ha-m" label="Mobile" width={390} height={844} style={board}><HomeA_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="home-b" title="Homepage · B — Manifesto"
        subtitle="Bold statement as the hero, dots & photos tucked into the type">
        <DCArtboard id="hb-d" label="Desktop" width={1280} height={880} style={board}><HomeB_Desktop /></DCArtboard>
        <DCArtboard id="hb-m" label="Mobile" width={390} height={800} style={board}><HomeB_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="work" title="Work / Case-study index"
        subtitle="Clean staggered grid · 10 projects, 2 password-protected">
        <DCArtboard id="wk-d" label="Desktop" width={1280} height={1660} style={board}><Work_Desktop /></DCArtboard>
        <DCArtboard id="wk-m" label="Mobile" width={390} height={1700} style={board}><Work_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="case" title="Case study (detail)"
        subtitle="Shared template for the 8 public projects">
        <DCArtboard id="cs-d" label="Desktop" width={1280} height={1640} style={board}><Case_Desktop /></DCArtboard>
        <DCArtboard id="cs-m" label="Mobile" width={390} height={1500} style={board}><Case_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="about" title="About"
        subtitle="Editorial collage — big italic statement, portrait & values">
        <DCArtboard id="ab-d" label="Desktop" width={1280} height={820} style={board}><About_Desktop /></DCArtboard>
        <DCArtboard id="ab-m" label="Mobile" width={390} height={720} style={board}><About_Mobile /></DCArtboard>
      </DCSection>

      <DCSection id="contact" title="Contact + Résumé"
        subtitle="Message form, résumé by request & direct links — one page">
        <DCArtboard id="ct-d" label="Desktop" width={1280} height={820} style={board}><Contact_Desktop /></DCArtboard>
        <DCArtboard id="ct-m" label="Mobile" width={390} height={920} style={board}><Contact_Mobile /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
