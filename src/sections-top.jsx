// Top sections: Nav, Hero, Services

const Nav = () => {
  const scrolled = useScrolled();
  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="dot" />
          Abe Peña
        </a>
        <nav className="nav__links">
          <a href="#services">Services</a>
          <a href="#before-after">Before / After</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav__cta">Get in touch</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = ({ variant }) => {
  const now = new Date();
  const availability = now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const isCentered = variant === 'centered';
  return (
    <section id="top" className={`hero ${isCentered ? 'hero--centered' : 'hero--split'}`}>
      <div className="container">
        <div className="hero__kicker reveal">
          <span className="avail">Taking on 2 projects this quarter</span>
          <span>Independent · Remote · Based in Florida</span>
        </div>

        <div className="hero__grid">
          <div>
            <h1 className="display display--xl reveal" data-delay="1">
              Websites that <em>work</em>, from a single landing page to the full stack behind it.
            </h1>
            {isCentered && (
              <p className="lede reveal" data-delay="2" style={{ marginTop: 24 }}>
                I'm Abe. I design and build quietly capable websites and web apps. The kind that load fast, rank well, and quietly earn your customers' trust.
              </p>
            )}
            <div className="actions reveal" data-delay="3">
              <a href="#contact" className="btn btn--primary">
                Start a project <span className="arrow"><ArrowRight /></span>
              </a>
              <a href="#work" className="btn btn--ghost">See recent work</a>
            </div>
          </div>

          {!isCentered && (
            <aside className="hero__aside reveal" data-delay="2">
              <p>I'm Abe, a designer-developer who builds quietly capable websites and web apps for small businesses and founders.</p>
              <p>Fast, accessible, easy to find on Google, and pleasant to use. No templates, no bloat.</p>
              <div className="meta">Currently open · {availability}</div>
            </aside>
          )}
        </div>

        <div className="hero__stats reveal" data-delay="3">
          <div>
            <p className="stat__num">8+ yrs</p>
            <p className="stat__lbl">Designing & Shipping</p>
          </div>
          <div>
            <p className="stat__num">Landing → Full stack</p>
            <p className="stat__lbl">Scope I cover</p>
          </div>
          <div>
            <p className="stat__num">100/100</p>
            <p className="stat__lbl">Lighthouse on recent builds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    idx: '01',
    title: 'Landing pages',
    body: 'One page, one job. Focused messaging, fast load, clear CTAs, built to convert and rank.',
    list: ['Copy & layout', 'SEO foundations', 'Analytics & A/B', 'CMS optional'],
  },
  {
    idx: '02',
    title: 'Marketing sites',
    body: 'Multi-page brand sites with editorial polish. Everything from home to case studies and blog.',
    list: ['Information architecture', 'Design system', 'Headless CMS', 'Image pipeline'],
  },
  {
    idx: '03',
    title: 'Web applications',
    body: 'Custom full-stack apps: dashboards, registrations, payments, shops, built around your workflow.',
    list: ['Auth & roles', 'Stripe / payments', 'Admin dashboards', 'APIs & integrations'],
  },
  {
    idx: '04',
    title: 'SEO & visibility',
    body: 'Technical SEO, schema, performance budgets, and sitemap/indexing hygiene so people actually find you.',
    list: ['Core Web Vitals', 'Structured data', 'Content strategy', 'Local SEO'],
  },
];

const Services = () => (
  <section id="services">
    <div className="container">
      <div className="services__head">
        <div className="reveal">
          <div className="eyebrow">What I do</div>
          <h2 className="display display--lg">
            A landing page, a brand site, or the <em>full stack</em> behind your business. Same hands, same care.
          </h2>
        </div>
        <p className="lede reveal" data-delay="1">
          Most projects live somewhere on this spectrum. I'll help you pick the right size for the job, then build it with a focus on design, performance, and how easily Google can read it.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <article className="service reveal" data-delay={Math.min(i, 3)} key={s.idx}>
            <div className="service__idx">{s.idx} /</div>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__body">{s.body}</p>
            <ul className="service__list">
              {s.list.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero, Services });
