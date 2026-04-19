// Tweaks panel

const ACCENT_SWATCHES = [
  { id: 'forest', color: 'oklch(42% 0.06 160)' },
  { id: 'rust',   color: 'oklch(58% 0.14 45)' },
  { id: 'ink',    color: '#111111' },
  { id: 'indigo', color: 'oklch(52% 0.13 265)' },
  { id: 'plum',   color: 'oklch(48% 0.10 340)' },
];

const TweaksPanel = ({ tweaks, update, onClose }) => {
  const OptRow = ({ label, k, opts }) => (
    <div className="tweak">
      <div className="tweak__label">{label}</div>
      <div className="tweak__opts">
        {opts.map(o => (
          <button
            key={o.v}
            className="tweak__opt"
            data-active={tweaks[k] === o.v}
            onClick={() => update({ [k]: o.v })}
          >{o.l}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="tweaks" role="dialog" aria-label="Tweaks">
      <div className="tweaks__head">
        <span className="tweaks__title">Tweaks</span>
        <button className="tweaks__close" onClick={onClose} aria-label="Close">✕</button>
      </div>
      <div className="tweaks__body">
        <OptRow label="Theme" k="theme" opts={[
          { l: 'Warm',  v: 'warm' },
          { l: 'Light', v: 'light' },
          { l: 'Dark',  v: 'dark' },
        ]}/>

        <div className="tweak">
          <div className="tweak__label">Accent</div>
          <div className="tweak__swatches">
            {ACCENT_SWATCHES.map(s => (
              <button
                key={s.id}
                className="tweak__swatch"
                data-active={tweaks.accent === s.id}
                style={{ background: s.color }}
                onClick={() => update({ accent: s.id })}
                aria-label={s.id}
              />
            ))}
          </div>
        </div>

        <OptRow label="Font pairing" k="fontPair" opts={[
          { l: 'Editorial', v: 'editorial' },
          { l: 'Classic',   v: 'classic' },
          { l: 'Modern',    v: 'modern' },
        ]}/>

        <OptRow label="Hero layout" k="heroVariant" opts={[
          { l: 'Split',    v: 'split' },
          { l: 'Centered', v: 'centered' },
        ]}/>

        <OptRow label="Density" k="density" opts={[
          { l: 'Spacious', v: 'spacious' },
          { l: 'Compact',  v: 'compact' },
        ]}/>

        <OptRow label="Before/After style" k="beforeAfterStyle" opts={[
          { l: 'Slider',  v: 'slider' },
          { l: 'Toggle',  v: 'toggle' },
          { l: 'Side-by-side', v: 'side' },
        ]}/>
      </div>
    </div>
  );
};

Object.assign(window, { TweaksPanel });
