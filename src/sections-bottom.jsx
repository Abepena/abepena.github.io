// Bottom sections: Work, Process, About, Testimonials, Contact

const workItems = [
  {
    title: 'NJ Stars Elite',
    tag: 'Full-stack rebuild',
    year: '2026',
    url: 'https://njstarselite.com',
    body: 'A complete redesign and platform rebuild for a New Jersey AAU basketball club: marketing site, event calendar, tryout & season registrations, custom merch shop, and an admin dashboard to run it all.',
    points: [
      { k: 'Perf', v: '99 / 100' },
      { k: 'Role', v: 'Design + Build' },
      { k: 'Stack', v: 'Next · Stripe' },
    ],
    image: 'assets/njstars-after.png',
  },
  {
    title: 'LEAG',
    tag: 'Landing page',
    year: '2025',
    url: 'https://leag.app',
    body: 'Marketing landing page for a new product. Clear positioning, careful type, and a performance budget that leaves no room for slow first paints.',
    points: [
      { k: 'Scope', v: 'Single page' },
      { k: 'Role', v: 'Design + Build' },
      { k: 'Stack', v: 'Static · CDN' },
    ],
    image: 'assets/leag.png',
  },
];

const LeagPreview = () => (
  <div className="mock mock--leag">
    <div className="mock__chrome">
      <i/><i/><i/>
      <div className="bar" />
    </div>
    <div className="mock__body">
      <div className="leag__wordmark">leag</div>
      <div className="leag__tag">Landing page · 2025</div>
    </div>
  </div>
);

const Work = () => (
  <section id="work">
    <div className="container">
      <div className="services__head">
        <div className="reveal">
          <div className="eyebrow">Selected work</div>
          <h2 className="display display--lg">A few projects I'm <em>proud</em> of.</h2>
        </div>
        <p className="lede reveal" data-delay="1">
          Only two public case studies here. Most of what I've built over the last eight years lives inside a company I can't name: internal tools, automations, and dashboards that run quietly in the background. These are the client projects I'm free to show.
        </p>
      </div>

      <div className="work__list">
        {workItems.map((w, i) => (
          <a
            key={w.title}
            href={w.url}
            target="_blank"
            rel="noreferrer noopener"
            className="work__item reveal"
            data-delay={Math.min(i, 3)}
          >
            <div>
              <div className="work__meta">
                <span className="work__tag">{w.tag}</span>
                <span className="work__year">{w.year}</span>
              </div>
              <h3 className="work__title">
                {w.title}
                <span className="go"><ArrowUpRight size={28} /></span>
              </h3>
              <p className="work__body">{w.body}</p>
              <div className="work__points">
                {w.points.map(p => (
                  <span key={p.k}>{p.k}<strong>{p.v}</strong></span>
                ))}
              </div>
            </div>
            <div className="work__preview">
              {w.image
                ? <div className="work__shot"><img src={w.image} alt={`${w.title} screenshot`} /></div>
                : <LeagPreview />
              }
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Process ----------
const steps = [
  { n: '01', t: 'Listen', b: 'We start with a call about your business, your customers, what you\'ve tried, what\'s getting in the way.', w: 'Week 0 · 30 to 60 min' },
  { n: '02', t: 'Plan', b: 'A short written proposal: scope, timeline, a fixed price, and exactly what you\'ll receive.', w: 'Week 1' },
  { n: '03', t: 'Design', b: 'Wireframes first, then a high-fidelity prototype in the browser. No guessing. You see it before we build.', w: 'Weeks 2 to 3' },
  { n: '04', t: 'Ship', b: 'Build, test, launch. Then a month of support while you settle in, with training on anything you\'ll manage.', w: 'Weeks 4 to 6' },
];

const Process = () => (
  <section id="process" className="process">
    <div className="container">
      <div className="services__head">
        <div className="reveal">
          <div className="eyebrow">How I work</div>
          <h2 className="display display--lg">Calm, clear, and no <em>surprise</em> invoices.</h2>
        </div>
        <p className="lede reveal" data-delay="1">
          Every project follows the same four phases. You'll always know what's next, what's done, and what it costs.
        </p>
      </div>
      <div className="process__grid">
        {steps.map((s, i) => (
          <div className="step reveal" data-delay={Math.min(i, 3)} key={s.n}>
            <div className="step__num">{s.n}</div>
            <h4 className="step__title">{s.t}</h4>
            <p className="step__body">{s.b}</p>
            <div className="step__when">{s.w}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- About ----------
const About = () => (
  <section id="about">
    <div className="container">
      <div className="eyebrow reveal">About</div>
      <div className="about__grid" style={{ marginTop: 24 }}>
        <div className="about__portrait reveal">
          <img src="https://avatars.githubusercontent.com/u/29493747?v=4&s=640" alt="Abe Peña" loading="lazy" />
        </div>
        <div className="about__text">
          <p className="reveal">
            I'm Abe Peña, a designer who ships code, or a developer who actually cares how things look. Either framing works.
          </p>
          <p className="reveal" data-delay="1">
            I'm based in Florida and work with small businesses, founders, and the occasional team that just needs another steady pair of hands. I've been freelancing seriously for a few years now, after friends kept asking me to build things and I realized I liked the work more than most of what I was doing full time.
          </p>
          <p className="reveal" data-delay="2">
            Most of my 8+ years has been spent building internal tools at my full-time job, work I'm proud of but can't share publicly. The projects you see here are the handful of client builds I've done alongside that, and I'm ramping up to take on more.
          </p>
          <p className="reveal" data-delay="3">
            I care about typography, page speed, semantic HTML, and writing code I'd be glad to hand off. Mostly I care about quiet, reliable work that makes my clients look good to theirs.
          </p>
          <div className="about__stack reveal" data-delay="4">
            <div>
              <h4>Design</h4>
              <ul>
                <li>Design systems</li><li>Prototyping</li><li>Copywriting</li>
              </ul>
            </div>
            <div>
              <h4>Engineering</h4>
              <ul>
                <li>Next.js · React</li><li>TypeScript</li><li>Python · Django</li><li>Node · Postgres</li><li>Stripe</li><li>Vercel · AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Testimonials (placeholder) ----------
const Testimonials = () => (
  <section>
    <div className="container">
      <div className="services__head">
        <div className="reveal">
          <div className="eyebrow">Kind words</div>
          <h2 className="display display--lg">From the people I <em>build with</em>.</h2>
        </div>
        <p className="lede reveal" data-delay="1">
          Two from the NJ Stars Elite team, and one from a project lead at the company where most of my day-to-day work lives. Names withheld until I've cleared permission to share.
        </p>
      </div>
      <div className="quotes">
        <figure className="quote reveal">
          <div className="quote__mark">“</div>
          <blockquote className="quote__text">
            Abe took everything we were juggling across Instagram DMs, Google Sheets, emails, and CashApp, and put it all in one home. The brand looks sharp, the kids think the site is cool, and parents can finally sign up and support the program without me chasing them down. He rebuilt NJ Stars from the ground up: site, uniforms, logos, merch. Night and day.
          </blockquote>
          <figcaption className="quote__who">
            <strong>Kenneth</strong>
            Founder · NJ Stars Elite
          </figcaption>
        </figure>
        <figure className="quote reveal" data-delay="1">
          <div className="quote__mark">“</div>
          <blockquote className="quote__text">
            I used to spend my nights answering Instagram DMs trying to track who was in and who wasn't. Now I just point kids to the site. They register themselves, pay, show up. Huge difference for the way we run tryouts and events.
          </blockquote>
          <figcaption className="quote__who">
            <strong>Coach Tray</strong>
            NJ Stars Elite
          </figcaption>
        </figure>
        <figure className="quote reveal" data-delay="2">
          <div className="quote__mark">“</div>
          <blockquote className="quote__text">
            Abe has quietly saved our team hundreds of hours. He takes on the fragmented, tedious processes nobody wants to own, and turns them into tools that just run. Admin work moves faster, engineering handoffs are cleaner, and we've cut real cost along the way.
          </blockquote>
          <figcaption className="quote__who">
            <strong>Project Lead</strong>
            Undisclosed · internal tooling
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

// ---------- Contact ----------
const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="eyebrow reveal">Get in touch</div>
      <h2 className="contact__title reveal" data-delay="1">
        Let's build something <em>worth visiting.</em>
      </h2>

      <div className="contact__grid">
        <div className="contact__col reveal">
          <h5>Email</h5>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pena.abe@gmail.com&su=Project+inquiry+for+Abe+Pe%C3%B1a"
            target="_blank"
            rel="noreferrer noopener"
          >
            pena.abe@gmail.com
            <ArrowUpRight size={20} />
          </a>
          <span className="sub">Best for project inquiries</span>
        </div>
        <div className="contact__col reveal" data-delay="1">
          <h5>Phone</h5>
          <a href="tel:+19498366285">
            (949) 836-6285
          </a>
          <span className="sub">Text or call · ET</span>
        </div>
        <div className="contact__col reveal" data-delay="2">
          <h5>Elsewhere</h5>
          <a href="https://github.com/abepena" target="_blank" rel="noreferrer noopener" style={{ display: 'flex', marginBottom: 12 }}>
            GitHub <ArrowUpRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/abraham-pena-8027a05b/" target="_blank" rel="noreferrer noopener" style={{ display: 'flex' }}>
            LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="contact__foot">
        <span>© {new Date().getFullYear()} Abe Peña</span>
        <span>Designed in Florida</span>
      </div>
    </div>
  </section>
);

Object.assign(window, { Work, Process, About, Testimonials, Contact });
