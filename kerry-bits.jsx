// kerry-bits.jsx — shared brand bits: logo mark, hand-drawn linework, nav, icons.
/* global React */

// ---- K mark: square + left chevron + corner dot (recreated from brand logo) ----
function KMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ height: "34px" }}>
      <rect x="8" y="8" width="80" height="80" stroke="var(--ink)" strokeWidth="6" style={{ strokeWidth: "5px" }} />
      <path d="M52 28 L12 50 L52 72" stroke="var(--ink)" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" style={{ strokeWidth: "5px" }} />
      <circle cx="84" cy="16" r="13" fill="var(--accent)" style={{ fill: "rgb(250, 128, 114)" }} />
    </svg>);

}

// ---- hand-drawn squiggle underline (variable, gentle wave) ----
function squigglePath(w, h, waves) {
  const amp = h * 0.34;
  const mid = h * 0.55;
  const seg = w / (waves * 2);
  let d = `M2 ${mid}`;
  let up = true;
  for (let i = 0; i < waves * 2; i++) {
    const cx = 2 + seg * i + seg / 2;
    const ex = 2 + seg * (i + 1);
    d += ` Q ${cx} ${up ? mid - amp : mid + amp}, ${ex} ${mid}`;
    up = !up;
  }
  return d;
}

function Squiggle({ className, w = 120, h = 10, waves = 4, strokeWidth = 2.4, stroke }) {
  return (
    <svg className={className} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d={squigglePath(w, h, waves)} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" style={stroke ? { stroke } : undefined} />
    </svg>);

}

// ---- long wavy divider ----
function WavyDivider({ className }) {
  return (
    <svg className={className} viewBox="0 0 1200 22" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d={squigglePath(1196, 22, 26)} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" style={{ stroke: "rgb(250, 128, 114)" }} />
    </svg>);

}

// ---- loose loop scribble (drawn around an emphasized word, expressive mode) ----
function LoopScribble({ className }) {
  return (
    <svg className={className} viewBox="0 0 320 120" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M40 78 C 6 64, 14 24, 90 18 C 196 10, 312 16, 308 52 C 305 86, 196 104, 96 98 C 30 94, 10 70, 56 56"
        pathLength="1"
        stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>);

}

function LockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>);

}

function NavBar({ base = "", active = "" }) {
  return (
    <nav className="nav wrap">
      <a className="brand" href={base || "#top"} aria-label="Kerry — home">
        <KMark className="kmark" />
        <span className="word">Kerry</span>
      </a>
      <div className="navlinks">
        <a className={"navlink" + (active === "work" ? " active" : "")} href={base + "#selected-work"}>Work<Squiggle className="sq" w={48} h={9} waves={3} /></a>
        <a className={"navlink hide-sm" + (active === "about" ? " active" : "")} href="About.html">About<Squiggle className="sq" w={56} h={9} waves={3} /></a>
        <a className="navlink" href={base + "#contact"}>Contact<Squiggle className="sq" w={70} h={9} waves={4} /></a>
        <a className="navlink cta" href="#" onClick={(e) => { e.preventDefault(); window.openResumeViewer && window.openResumeViewer(); }}>Resume<Squiggle className="sq" w={66} h={9} waves={4} /></a>
      </div>
    </nav>);

}

function FooterContact({ base = "" }) {
  return (
    <footer className="foot wrap" id="contact">
      <h2 className="big">Let's make the complex <em>clear.</em></h2>
      <div className="foot-links">
        <div className="foot-col foot-col-primary">
          <div className="lab">Get in touch</div>
          <a href="mailto:kerryhorton3@gmail.com">kerryhorton3@gmail.com<Squiggle className="sq" w={200} h={8} waves={7} /></a>
          <a href="https://www.linkedin.com/in/kerry-horton/" target="_blank" rel="noopener">LinkedIn<Squiggle className="sq" w={70} h={8} waves={4} /></a>
          <a className="foot-muted" href="https://calendly.com/kerryhorton/coffee-chat" target="_blank" rel="noopener">Book a coffee chat ↗</a>
        </div>
        <div className="foot-col">
          <div className="lab">Resume</div>
          <a href="#" onClick={(e) => { e.preventDefault(); window.openResumeViewer && window.openResumeViewer(); }}>View resume →<Squiggle className="sq" w={120} h={8} waves={5} /></a>
        </div>
        <div className="foot-col">
          <div className="lab">More</div>
          <a href={base + "#selected-work"}>Selected Work<Squiggle className="sq" w={110} h={8} waves={5} /></a>
          <a href="About.html">About<Squiggle className="sq" w={56} h={8} waves={4} /></a>
        </div>
      </div>
      <div className="legal">
        <span>© 2026 Kerry Horton — Austin, TX</span>
        <span>Designed &amp; built by Kerry Horton</span>
      </div>
    </footer>);

}

Object.assign(window, { KMark, Squiggle, WavyDivider, LoopScribble, LockIcon, NavBar, FooterContact });