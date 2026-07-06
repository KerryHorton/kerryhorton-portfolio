// kerry-about.jsx — About page. Portrait + personal storytelling.
/* global React, ReactDOM, NavBar, FooterContact, Squiggle, KERRY_ABOUT */

function About() {
  const a = KERRY_ABOUT;
  const [loaded, setLoaded] = React.useState(false);
  const [cueHidden, setCueHidden] = React.useState(false);
  React.useEffect(() => {const id = setTimeout(() => setLoaded(true), 60);return () => clearTimeout(id);}, []);

  const scrollToBio = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById("ab-bio");
    if (!el) return;
    const scroller = document.scrollingElement || document.documentElement;
    const y = el.getBoundingClientRect().top + scroller.scrollTop - 24;
    try {window.scrollTo({ top: y, behavior: "smooth" });}
    catch (err) {location.hash = "#ab-bio";}
  };

  // Fade the scroll cue once the hero is mostly scrolled past.
  React.useEffect(() => {
    const hero = document.querySelector(".ab-hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setCueHidden(entry.intersectionRatio < 0.55),
      { threshold: [0, 0.55, 1] });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className="site" data-loaded={loaded ? "1" : undefined}>
      <NavBar base="index.html" active="about" />

      <main className="ab">
        <header className="ab-hero wrap">
          <div className="ab-hero-manifesto">
            <span className="ab-eyebrow reveal d1"><span className="tick" /> About — Kerry Horton</span>
            <h1 className="ab-manifesto reveal d2">
              <span className="ln" style={{ fontSize: "97px", lineHeight: "0.95" }}>a little bit</span>
              <span className="ln" style={{ fontSize: "97px", lineHeight: "0.95" }}>more <em style={{ fontSize: "97px" }}>about&nbsp;me</em><span className="dot" style={{ fontSize: "97px" }}>.</span></span>
            </h1>
            <p className="ab-manifesto-lead reveal d3">I'm a <strong>UX Researcher &amp; Strategist</strong> with <strong>4+ years</strong> of experience helping teams understand people, untangle messy problems, and make better product, brand, and customer experience decisions. I work where research meets strategy - evaluating how people think, feel and choose to enable businesses to more effectively understand, serve and satisfy their customers. </p>
          </div>
          <div className="ab-hero-mark reveal d4">
            <span className="ab-mark-ring salmon" aria-hidden="true" />
            <span className="ab-mark-ring" aria-hidden="true" />
            <div className="ab-mark-photo"><img src="assets/kerry.jpg" alt="Kerry Horton" /></div>
          </div>
          <a
            href="#ab-bio"
            className={"ab-scroll-cue reveal d4" + (cueHidden ? " is-hidden" : "")}
            aria-label="Read more about me"
            onClick={scrollToBio}>
            <span className="ab-scroll-cue-label">More</span>
            <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9l7 7 7-7" /></svg>
          </a>
        </header>

        <div className="ab-grid wrap" id="ab-bio">
          <div className="ab-story">
            {a.paras.map((p, i) => <p key={i} className={i === 0 ? "lead" : ""}>{p}</p>)}
          </div>
          <aside className="ab-facts">
            {a.facts.map((f) =>
            <div className="ab-fact" key={f.k}>
                <div className="ab-fact-k">{f.k}</div>
                <div className="ab-fact-v">{f.v}</div>
              </div>
            )}
            <div className="ab-expertise">
              <div className="ab-meta-lab">What I do</div>
              <div className="ab-chips">{a.expertise.map((e, i) => <span className="ab-chip" key={i}>{e}</span>)}</div>
            </div>
          </aside>
        </div>

        <section className="ab-personal">
          <div className="ab-personal-circle" />
          <div className="ab-personal-inner wrap">
            <div className="ab-personal-text">
              <h2>{a.personalHeading}<em>.</em></h2>
              <p>{a.personal}</p>
            </div>
            <div className="ab-gallery">
              <img className="ab-gphoto tall" src="assets/about-paddleboard.jpg" alt="Paddle boarding at sunset on the lake" loading="lazy" />
              <img className="ab-gphoto" src="assets/about-dinner.jpg" alt="Dinner with friends" loading="lazy" />
              <img className="ab-gphoto" src="assets/about-lighthouse.jpg" alt="Jumping in front of a lighthouse in Iceland" loading="lazy" />
            </div>
          </div>
        </section>

        <div className="ab-clients wrap">
          <div className="ab-meta-lab">Selected clients & teams</div>
          <div className="ab-clients-list">{a.clients.map((c, i) => <a className="ab-client" href={"case-study.html?p=" + c.slug} key={i}>{c.name}<span className="ab-client-arr">↗</span></a>)}</div>
        </div>

        <section className="ab-cta wrap">
          <h2>
            I'm now looking for my next team in <em>UX&nbsp;Research</em>, <em>Product&nbsp;Research</em>, <em>UX&nbsp;Strategy</em> or <em>Product&nbsp;Management</em> and would love to connect! Feel free to reach out to set up a coffee chat.
          </h2>
          <div className="ab-cta-actions">
            <a className="cta-btn" href="https://calendly.com/kerryhorton/coffee-chat" target="_blank" rel="noopener">Book a coffee chat <span className="arr">→</span></a>
            <a className="cta-btn ghost" href="mailto:kerryhorton3@gmail.com">Email me</a>
            <a className="cta-btn ghost" href="https://www.linkedin.com/in/kerry-horton/" target="_blank" rel="noopener">LinkedIn</a>
            <a className="cta-btn ghost" href="#" onClick={(e) => {e.preventDefault();window.openResumeViewer && window.openResumeViewer();}}>View resume</a>
          </div>
        </section>
      </main>

      <FooterContact base="index.html" />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<About />);