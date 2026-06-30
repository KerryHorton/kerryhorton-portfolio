// kerry-home.jsx — Kerry editorial homepage. Two hero directions + tweaks.
/* global React, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor,
   KMark, Squiggle, WavyDivider, LoopScribble, LockIcon, NavBar */

const PROJECTS = [
{ n: "01", slug: "thursday-strategy", tier: "featured", short: "Consumer Insights for Brand, Search & AI Strategy", desc: "Translating qualitative research into brand positioning, product discovery & campaign strategy for Google, Chase & more.", company: "Thursday Strategy", year: "2025–26", impact: "Google · Chase · +2", field: "Consumer Insights", thumb: "assets/logo-thursday.png" },
{ n: "02", slug: "fafsa", tier: "featured", short: "FAFSA Usability at Scale", desc: "Making a high-stakes federal form clearer for millions of students & families through mixed-methods research.", company: "Accenture Federal", year: "2023–25", impact: "+18% satisfaction", field: "Civic / Gov UX", thumb: "assets/logo-fafsa.png" },
{ n: "03", slug: "mckinsey", tier: "featured", short: "Executive Assistant Workflow Redesign", desc: "Redesigning an internal enterprise workflow tool to reduce risky workarounds and ship a dev-ready future state.", company: "McKinsey & Co.", year: "2022–23", impact: "Dev-ready prototype", field: "Enterprise UX", thumb: "assets/logo-mckinsey.png" },
{ n: "04", slug: "spotify", tier: "featured", short: "Spotify Music Discovery", desc: "A more personalized, playful music-discovery experience for college students on the web.", company: "Spotify Capstone", year: "2021–22", impact: "Award for Research", field: "Consumer / Music", thumb: "assets/logo-spotify.png" },
{ n: "05", slug: "uber-reserve", tier: "featured", short: "Uber Reserve: Scheduled-Ride Evaluation", desc: "Evaluating awareness, usability & mental models for scheduled rides across mobile and web.", company: "Uber", year: "2021", impact: "6 recommendations", field: "Transportation UX", thumb: "assets/logo-uber.png" },
{ n: "06", slug: "ecocar", tier: "earlier", short: "Autonomous Vehicle Onboarding", desc: "Helping renters safely learn a semi-autonomous, shared GM vehicle.", company: "UW EcoCAR · GM", year: "2020–21", impact: "4th of 11 teams", field: "Automotive UX", thumb: "assets/logo-ecocar.png" },
{ n: "07", slug: "meetzap", tier: "earlier", short: "Meetzap - First-Year Community", desc: "A community-building app for first-year college students.", company: "Design for America", year: "2019–20", impact: "91 survey responses", field: "Community / EdTech", thumb: "assets/logo-meetzap.png" },
{ n: "08", slug: "seattle-design-festival", tier: "earlier", short: "“Balance” Installation", desc: "An interactive installation on online identity & offline presence.", company: "Seattle Design Festival", year: "2019", impact: "Public installation", field: "Experiential Design", thumb: "assets/logo-balance.png" },
{ n: "09", slug: "aurora", tier: "earlier", short: "Survivor Resource Kiosk", desc: "A private resource kiosk for ovarian cancer survivors.", company: "Design for America", year: "2018–19", impact: "Privacy-first kiosk", field: "Healthcare UX", thumb: "assets/logo-aurora.png" },
{ n: "10", slug: "first-plate", tier: "earlier", short: "First Plate - Wholesale Brand", desc: "Building a wholesale biscotti brand for Portland coffeehouses.", company: "First Plate LLC", year: "2016–18", impact: "Founder-built brand", field: "Brand & CX", thumb: "assets/logo-firstplate.png" }];


/* ---------- HERO — personal "Hi, I'm Kerry." (homepage) ---------- */
function HeroPersonal() {
  const [cueHidden, setCueHidden] = React.useState(false); // eslint-disable-line no-unused-vars

  // (scroll-cue removed per design) keep observer hook noop-safe
  React.useEffect(() => {
    const hero = document.querySelector(".hp-hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
    ([entry]) => setCueHidden(entry.intersectionRatio < 0.55),
    { threshold: [0, 0.55, 1] });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const toWork = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById("selected-work");
    if (!el) return;
    const scroller = document.scrollingElement || document.documentElement;
    const y = el.getBoundingClientRect().top + scroller.scrollTop - 20;
    try {window.scrollTo({ top: y, behavior: "smooth" });}
    catch (err) {location.hash = "#selected-work";}
  };

  return (
    <section className="hero hp-hero">
      <div className="wrap hp-hero-inner">
        <div className="hp-hero-text">
          <span className="eyebrow reveal d1"><span className="tick" /> UX Researcher + Strategist · Austin, TX</span>
          <h1 className="hp-headline reveal d2">Hi, I'm <em>Kerry</em><span className="dot">.</span></h1>
          <p className="hp-lead reveal d3">I help product, brand, and marketing teams turn messy, ambiguous research into <strong>decisions people can feel</strong> -  backed by evidence teams can act on.</p>
          <div className="hp-hero-cta reveal d4">
            <a className="cta-btn" href="#selected-work" onClick={toWork}>See selected work <span className="arr">↓</span></a>
            <a className="cta-btn ghost" href="About.html">More about me</a>
          </div>
        </div>
        <div className="hp-portrait-zone reveal d4">
          <span className="hp-portrait-ring salmon" />
          <span className="hp-portrait-ring" />
          <div className="hp-portrait"><img src="assets/kerry.jpg" alt="Kerry" /></div>
        </div>
      </div>
    </section>);

}

/* ---------- HERO A — Giant name (legacy, unused) ---------- */
function HeroA() {
  return (
    <section className="hero heroA">
      <div className="wrap">
        <div className="portrait-zone">
          <span className="circle-anchor" />
          <div className="portrait"><img src="assets/kerry.jpg" alt="Kerry" /></div>
        </div>
        <div className="lead">
          <span className="eyebrow reveal d1"><span className="tick" /> UX Researcher + Strategist · Austin</span>
          <p className="tagline reveal d2">
            <span className="tln">I help teams uncover</span>
            <span className="tln">the <span className="hl">insights<Squiggle className="sq-inline" w={120} h={12} waves={5} /></span> that drive</span>
            <span className="tln">product <em>strategy.</em></span>
          </p>
          <p className="sub reveal d3">Mixed-methods research that turns ambiguity into clear product direction — and the language teams need to act on it.</p>
          <a className="cta-btn reveal d4" href="#selected-work">See selected work <span className="arr">↓</span></a>
        </div>
      </div>
      <div className="wrap">
        <h1 className="giant-name bleed">
          <span className="kin"><span className="clip-line d2" style={{ width: "1339px", margin: "0px" }}>Kerry<span className="per">.</span></span></span>
        </h1>
      </div>
    </section>);

}

/* ---------- HERO B — Manifesto ---------- */
function HeroB() {
  return (
    <section className="hero heroB">
      <div className="wrap">
        <span className="eyebrow reveal d1"><span className="tick" /> UX Researcher + Strategist · Austin, TX</span>
        <h1 className="manifesto">
          <span className="kin"><span className="clip-line">I turn <span className="hl">human insight</span></span></span>
          <span className="kin"><span className="clip-line d2">into <span className="wine">product</span>, <span className="wine">brand</span>,</span></span>
          <span className="kin"><span className="clip-line d4">& <span className="wine">experience strategy.</span></span></span>
        </h1>
        <div className="row">
          <div className="lead-col">
            <p className="sub reveal d3">I'm Kerry — I help product, brand, and marketing teams turn messy, ambiguous research into <strong>decisions people can feel</strong>, backed by evidence teams can act on.</p>
            <div className="hero-focus reveal d3">
              <span>UX Research</span>
              <span>Consumer Insights</span>
              <span>Product Strategy</span>
            </div>
            <a className="cta-btn reveal d4" href="#selected-work">See selected work <span className="arr">↓</span></a>
          </div>
          <div className="portrait-zone reveal d4">
            <span className="blush-accent" />
            <div className="portrait"><img src="assets/kerry.jpg" alt="Kerry" /></div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- SELECTED WORK ---------- */
function ProjRow({ p }) {
  return (
    <a className="proj" href={"Case Study.html?p=" + p.slug}>
      <span className="num">{p.n}</span>
      <span className="body">
        <span className="short">{p.short}<Squiggle className="sq" w={200} h={11} waves={8} /></span>
        <span className="desc">{p.desc}</span>
        <span className="metarow">
          <span className="company">{p.company}</span>
          <span className="dot">·</span>
          <span className="year">{p.year}</span>
          <span className="dot">·</span>
          <span className="impact">{p.impact}</span>
          <span className="field">{p.field}</span>
        </span>
      </span>
      <span className="right">
        <span className="view">View case study <span className="arr">↗</span></span>
        {p.thumb &&
        <span className="thumb">
          <image-slot id={"work-thumb-" + p.slug} shape="circle" src={p.thumb}
          style={{ width: "100%", height: "100%" }}
          placeholder={"Drop " + p.company + " logo"}></image-slot>
        </span>}
      </span>
    </a>);

}

function WorkIndex() {
  const featured = PROJECTS.filter((p) => p.tier === "featured");
  const earlier = PROJECTS.filter((p) => p.tier === "earlier");
  return (
    <section className="work wrap" id="selected-work">
      <div className="sec-head">
        <h2 className="sec-title">Selected <em style={{ color: "rgb(250, 128, 114)" }}>Work</em></h2>
        <span className="sec-meta">Research · Insights · Strategy</span>
      </div>
      <WavyDivider className="deco-divider" />

      <div className="tier-head">
        <h3 className="tier-title">Featured Work</h3>
        <span className="tier-meta">Professional & sponsored research</span>
      </div>
      <div className="index">
        {featured.map((p) => <ProjRow p={p} key={p.n} />)}
      </div>

      <div className="tier-head tier-head-2">
        <h3 className="tier-title">Selected &amp; Earlier Work</h3>
        <span className="tier-meta">Academic & independent projects</span>
      </div>
      <div className="index">
        {earlier.map((p) => <ProjRow p={p} key={p.n} />)}
      </div>
    </section>);

}

/* ---------- APP — locked: Manifesto · Expressive · Modern · salmon ---------- */
function App() {
  const [loaded, setLoaded] = React.useState(false);
  const [settled, setSettled] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 60);
    // Safety net: if a throttled/backgrounded tab freezes the entrance
    // transition at its hidden frame, force everything visible.
    const id2 = setTimeout(() => setSettled(true), 1400);
    return () => {clearTimeout(id);clearTimeout(id2);};
  }, []);

  // Honor an incoming #hash (e.g. arriving from a case study's "Selected Work"
  // link) once React has painted the section, and on subsequent hash clicks.
  React.useEffect(() => {
    const goToHash = () => {
      const h = location.hash;
      if (!h || h === "#top") return;
      let tries = 0;
      const tick = () => {
        const el = document.querySelector(h);
        if (!el) {if (tries++ < 20) setTimeout(tick, 60);return;}
        const scroller = document.scrollingElement || document.documentElement;
        const y = el.getBoundingClientRect().top + scroller.scrollTop - 20;
        try {scroller.scrollTo({ top: y, behavior: "smooth" });}
        catch (e) {scroller.scrollTop = y;}
      };
      tick();
    };
    const t = setTimeout(goToHash, 90);
    window.addEventListener("hashchange", goToHash);
    return () => {clearTimeout(t);window.removeEventListener("hashchange", goToHash);};
  }, []);
  return (
    <div
      className="site"
      id="top"
      data-direction="B"
      data-bold="expressive"
      data-type="modern"
      data-loaded={loaded ? "1" : undefined}
      data-settled={settled ? "1" : undefined}>

      <NavBar active="work" />
      <HeroPersonal />
      <WorkIndex />
      <FooterContact />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);