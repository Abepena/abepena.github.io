// Before / After section, with slider / toggle / side-by-side variants.

const MockBefore = () => (
  <div className="mock mock--shot">
    <div className="mock__chrome">
      <i/><i/><i/>
      <div className="bar" />
    </div>
    <div className="mock__body mock__body--shot">
      <img src="assets/njstars-before.png" alt="NJ Stars Elite before redesign" />
    </div>
  </div>
);

const MockAfter = () => (
  <div className="mock mock--shot">
    <div className="mock__chrome">
      <i/><i/><i/>
      <div className="bar" />
    </div>
    <div className="mock__body mock__body--shot">
      <img src="assets/njstars-after.png" alt="NJ Stars Elite after redesign" />
    </div>
  </div>
);

// ---------- Slider variant ----------
const BASlider = () => {
  const [pos, setPos] = useState(52);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  const moveFromClient = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      moveFromClient(x);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [moveFromClient]);

  const start = (e) => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    moveFromClient(x);
  };

  return (
    <div
      className="ba-slider reveal"
      ref={wrapRef}
      onMouseDown={start}
      onTouchStart={start}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label="Before and after comparison"
    >
      <div className="ba-slider__img"><MockBefore /></div>
      <div
        className="ba-slider__after-wrap"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <div className="ba-slider__img"><MockAfter /></div>
      </div>
      <div className="ba-slider__label ba-slider__label--before">Before · 2025</div>
      <div className="ba-slider__label ba-slider__label--after">After · 2026</div>
      <div className="ba-slider__handle" style={{ left: `${pos}%` }}>
        <div className="ba-slider__knob" aria-hidden="true">
          <SliderIcon />
        </div>
      </div>
    </div>
  );
};

// ---------- Toggle variant ----------
const BAToggle = () => {
  const [state, setState] = useState('before');
  return (
    <div className="ba-toggle reveal" data-state={state}>
      <div className="before"><MockBefore /></div>
      <div className="after"><MockAfter /></div>
      <div className="ba-toggle__pills">
        <button
          className="ba-toggle__pill"
          data-active={state === 'before'}
          onClick={() => setState('before')}
        >Before</button>
        <button
          className="ba-toggle__pill"
          data-active={state === 'after'}
          onClick={() => setState('after')}
        >After</button>
      </div>
    </div>
  );
};

// ---------- Side-by-side variant ----------
const BASide = () => (
  <div className="ba-side">
    <figure className="reveal">
      <MockBefore />
      <figcaption><strong>Before</strong> · njstarseliteaau.com · 2025</figcaption>
    </figure>
    <figure className="reveal" data-delay="1">
      <MockAfter />
      <figcaption><strong>After</strong> · njstarselite.com · 2026</figcaption>
    </figure>
  </div>
);

const BeforeAfter = ({ style }) => {
  return (
    <section id="before-after">
      <div className="container">
        <div className="ba__head">
          <div className="reveal">
            <div className="eyebrow">Before / After</div>
            <h2 className="display display--lg">
              <em>NJ Stars Elite</em>, from a brittle Wix page to a full club platform.
            </h2>
          </div>
          <div className="reveal" data-delay="1">
            <p className="lede">
              Their old site wasn't mobile responsive and couldn't accept payments.
              I redesigned the marketing site and shipped a web app that handles
              tryouts, season registrations, event calendars, a custom merch shop,
              and payments, all from one admin dashboard.
            </p>
            <div className="ba__actions">
              <a href="https://www.njstarseliteaau.com" target="_blank" rel="noreferrer noopener">
                View before <ArrowUpRight size={14} />
              </a>
              <a href="https://njstarselite.com" target="_blank" rel="noreferrer noopener" className="is-after">
                View live site <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {style === 'slider' && <BASlider />}
        {style === 'toggle' && <BAToggle />}
        {style === 'side'   && <BASide />}

        <div className="ba__metrics reveal">
          <div className="ba__metric">
            <p className="k">Mobile</p>
            <p className="v">Not responsive → <em>fully responsive</em></p>
          </div>
          <div className="ba__metric">
            <p className="k">Lighthouse performance</p>
            <p className="v"><em>40 → 99</em></p>
          </div>
          <div className="ba__metric">
            <p className="k">Payments</p>
            <p className="v">None → <em>Stripe + shop</em></p>
          </div>
          <div className="ba__metric">
            <p className="k">Registrations</p>
            <p className="v">Manual → <em>self-serve</em></p>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { BeforeAfter, MockBefore, MockAfter });
