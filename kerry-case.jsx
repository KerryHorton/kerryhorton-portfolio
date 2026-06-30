// kerry-case.jsx — case study detail page. Reads ?p=<slug>, renders editorial long-form.
/* global React, ReactDOM, NavBar, FooterContact, Squiggle, LockIcon, KERRY_CASES */

const getParam = (n) => new URLSearchParams(location.search).get(n);

const CASE_LOGOS = {
  "thursday-strategy": "assets/logo-thursday.png",
  "fafsa": "assets/logo-fafsa.png",
  "mckinsey": "assets/logo-mckinsey.png",
  "spotify": "assets/logo-spotify.png",
  "uber-reserve": "assets/logo-uber.png",
  "ecocar": "assets/logo-ecocar.png",
  "meetzap": "assets/logo-meetzap.png",
  "seattle-design-festival": "assets/logo-balance.png",
  "aurora": "assets/logo-aurora.png",
  "first-plate": "assets/logo-firstplate.png"
};

function Block({ b, slug, idx }) {
  switch (b.type) {
    case "h":return <h3 className="cs-h">{b.text}</h3>;
    case "p":return <p className="cs-p">{b.text}</p>;
    case "quote":return <blockquote className="cs-quote"><span className="cs-quote-mark">“</span>{b.text}</blockquote>;
    case "list":return <ul className="cs-list">{b.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case "olist":return <ol className="cs-olist">{b.items.map((it, i) => <li key={i}>{it}</li>)}</ol>;
    case "methods":return (
        <div className="cs-methods">{b.items.map((m, i) => <span className="cs-method" key={i}>{m}</span>)}</div>);

    case "sample":return (
        <div className="cs-diagram">
        {b.title && <div className="cs-diagram-lab">{b.title}</div>}
        <div className="cs-sample">{b.items.map((s, i) =>
            <div className="cs-sample-item" key={i}><div className="cs-sample-v">{s.v}</div><div className="cs-sample-k">{s.k}</div></div>
            )}</div>
        {b.caption && <div className="cs-diagram-cap">{b.caption}</div>}
      </div>);

    case "themes":return (
        <div className="cs-diagram">
        {b.title && <div className="cs-diagram-lab">{b.title}</div>}
        <div className="cs-themes">{b.items.map((t, i) =>
            <div className="cs-theme" key={i}>
            <div className="cs-theme-n">{t.n || String(i + 1).padStart(2, "0")}</div>
            <div className="cs-theme-t">{t.title}</div>
            <div className="cs-theme-d">{t.text}</div>
          </div>
            )}</div>
      </div>);

    case "irimpact":return (
        <div className="cs-diagram">
        {b.title && <div className="cs-diagram-lab">{b.title}</div>}
        <div className="cs-iri">
          <div className="cs-iri-head"><span>Insight</span><span>Recommendation</span><span>Impact</span></div>
          {b.rows.map((r, i) =>
            <div className="cs-iri-row" key={i}>
              <div className="cs-iri-cell cs-iri-insight"><span className="cs-iri-k">Insight</span>{r.insight}</div>
              <div className="cs-iri-arrow" aria-hidden="true">→</div>
              <div className="cs-iri-cell cs-iri-rec"><span className="cs-iri-k">Recommendation</span>{r.rec}</div>
              <div className="cs-iri-arrow" aria-hidden="true">→</div>
              <div className="cs-iri-cell cs-iri-impact" style={{ textAlign: "left" }}><span className="cs-iri-k">Impact</span>{r.impact}</div>
            </div>
            )}
        </div>
        {b.caption && <div className="cs-diagram-cap">{b.caption}</div>}
      </div>);

    case "journey":return (
        <div className="cs-diagram">
        {b.title && <div className="cs-diagram-lab">{b.title}</div>}
        <div className="cs-journey">{b.stages.map((s, i) =>
            <div className="cs-jstage" key={i}>
            <div className="cs-jphase"><span className="cs-jdot" />{s.phase}</div>
            <div className="cs-jthought">{s.thought}</div>
            <div className="cs-jopp"><span className="cs-jopp-lab">Opportunity</span>{s.opp}</div>
          </div>
            )}</div>
        {b.caption && <div className="cs-diagram-cap">{b.caption}</div>}
      </div>);

    case "framework":return (
        <div className="cs-diagram">
        {b.title && <div className="cs-diagram-lab">{b.title}</div>}
        <div className="cs-framework">{b.steps.map((s, i) =>
            <React.Fragment key={i}>
            {i > 0 && <div className="cs-fw-arrow" aria-hidden="true">→</div>}
            <div className="cs-fw-step"><div className="cs-fw-label">{s.label}</div><div className="cs-fw-text">{s.text}</div></div>
          </React.Fragment>
            )}</div>
        {b.caption && <div className="cs-diagram-cap">{b.caption}</div>}
      </div>);

    case "image":return (
        <figure className="cs-figure" style={{ height: "207px" }}>
        <image-slot id={"cs-" + slug + "-" + idx} shape="rounded" radius="8"
          style={{ display: "block", width: "100%", aspectRatio: "16 / 9" }}
          placeholder={b.caption || "Drop an image"}></image-slot>
        {b.caption && <figcaption className="cs-cap">{b.caption}</figcaption>}
      </figure>);

    default:return null;
  }
}

function Section({ s, slug }) {
  return (
    <section className="cs-section" id={"sec-" + s.id}>
      <h2 className="cs-section-title">{s.title}</h2>
      <div className="cs-section-body">
        {s.blocks.map((b, i) => <Block key={i} b={b} slug={slug} idx={s.id + "-" + i} />)}
      </div>
    </section>);

}

function TOC({ sections, active }) {
  return (
    <nav className="cs-toc" aria-label="Sections">
      <div className="cs-toc-lab">On this page</div>
      <ol>
        {sections.map((s) =>
        <li key={s.id} className={active === s.id ? "active" : ""}>
            <a href={"#sec-" + s.id}>{s.title}</a>
          </li>
        )}
      </ol>
    </nav>);

}

function Snapshot({ snap }) {
  return (
    <div className="cs-snapshot">
      {Object.keys(snap).map((k) =>
      <div className="cs-snap-item" key={k}>
          <div className="cs-snap-k">{k}</div>
          <div className="cs-snap-v">{snap[k]}</div>
        </div>
      )}
    </div>);

}

function SummaryBand({ s }) {
  return (
    <div className="cs-glance">
      <div className="cs-glance-pair">
        <div className="cs-glance-block cs-glance-problem">
          <div className="cs-glance-lab">The problem</div>
          <p>{s.problem}</p>
        </div>
        <div className="cs-glance-block cs-glance-outcome">
          <div className="cs-glance-lab">Outcome &amp; impact</div>
          <p>{s.outcome}</p>
        </div>
      </div>
      <div className="cs-glance-meta">
        <div className="cs-glance-mi"><div className="cs-glance-lab">My role</div><div className="cs-glance-v">{s.role}</div></div>
        <div className="cs-glance-mi"><div className="cs-glance-lab">Timeline</div><div className="cs-glance-v">{s.timeline}</div></div>
        {s.team && <div className="cs-glance-mi"><div className="cs-glance-lab">Team</div><div className="cs-glance-v">{s.team}</div></div>}
        <div className="cs-glance-mi cs-glance-methods-wrap"><div className="cs-glance-lab">Methods</div>
          <div className="cs-methods cs-methods-tight">{s.methods.map((m, i) => <span className="cs-method" key={i}>{m}</span>)}</div>
        </div>
      </div>
    </div>);

}

function NextProject({ cur }) {
  const slugs = Object.keys(KERRY_CASES);
  const next = KERRY_CASES[slugs[(slugs.indexOf(cur.slug) + 1) % slugs.length]];
  return (
    <a className="cs-next" href={"Case Study.html?p=" + next.slug}>
      <span className="cs-next-lab">Next project</span>
      <span className="cs-next-title">{next.short || next.title}<Squiggle className="sq" w={200} h={12} waves={8} /></span>
      <span className="cs-next-arr">→</span>
    </a>);

}

function CaseStudy() {
  const slug = getParam("p");
  const data = KERRY_CASES[slug];
  const [loaded, setLoaded] = React.useState(false);
  const [active, setActive] = React.useState(data && data.sections[0] ? data.sections[0].id : "");

  React.useEffect(() => {const id = setTimeout(() => setLoaded(true), 60);return () => clearTimeout(id);}, []);

  React.useEffect(() => {
    if (!data) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) setActive(e.target.id.replace("sec-", ""));});
    }, { rootMargin: "-25% 0px -65% 0px" });
    data.sections.forEach((s) => {const el = document.getElementById("sec-" + s.id);if (el) obs.observe(el);});
    return () => obs.disconnect();
  }, [data]);

  React.useEffect(() => {if (data) document.title = data.title + " — Kerry";}, [data]);

  if (!data) {
    return (
      <div className="site" data-loaded="1">
        <NavBar base="Kerry Homepage.html" />
        <div className="cs-missing wrap">
          <h1>Project not found</h1>
          <a href="Kerry Homepage.html#selected-work">← Back to all work</a>
        </div>
        <FooterContact base="Kerry Homepage.html" />
      </div>);

  }

  return (
    <div className="site" data-loaded={loaded ? "1" : undefined}>
      <NavBar base="Kerry Homepage.html" active="work" />
      <article className="cs">
          <header className="cs-hero wrap">
            <a className="cs-back" href="Kerry Homepage.html#selected-work">← Selected Work</a>
            <div className="cs-kicker reveal d1">
              <span className="cs-num">{data.number}</span>{data.kicker}
            </div>
            <h1 className="cs-title reveal d2">{data.title}</h1>
            <p className="cs-sub reveal d3">{data.subtitle}</p>
          </header>

          <div className="cs-snap-wrap wrap reveal d4">
            {data.summary ? <SummaryBand s={data.summary} /> : <Snapshot snap={data.snapshot} />}
          </div>

          {data.stats &&
        <div className="cs-stats wrap">
              {data.stats.map((st, i) =>
          <div className="cs-stat" key={i}>
                  <div className="cs-stat-v">{st.value}</div>
                  <div className="cs-stat-l">{st.label}</div>
                </div>
          )}
            </div>
        }

          <div className="cs-lead wrap">
            {data.intro.map((p, i) => <p key={i} className={i === 0 ? "cs-lead-1" : ""}>{p}</p>)}
          </div>

          <div className="cs-body wrap">
            <aside className="cs-toc-wrap"><TOC sections={data.sections} active={active} /></aside>
            <div className="cs-sections">
              {data.sections.map((s) => <Section key={s.id} s={s} slug={data.slug} />)}
              <div className="cs-tags">
                <div className="cs-tags-lab">Focus areas & methods</div>
                <div className="cs-tags-list">{data.tags.map((t, i) => <span className="cs-tag" key={i}>{t}</span>)}</div>
              </div>
            </div>
          </div>

          <div className="wrap"><NextProject cur={data} /></div>
        </article>
      <FooterContact base="Kerry Homepage.html" />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudy />);