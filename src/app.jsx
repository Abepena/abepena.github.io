// App root — composes everything.

const App = () => {
  const [tweaks, update] = useTweaks(window.TWEAKS);
  const [panelVisible, setPanelVisible] = useTweaksVisible();
  useReveal();

  return (
    <>
      <Nav />
      <Hero variant={tweaks.heroVariant} />
      <Services />
      <BeforeAfter style={tweaks.beforeAfterStyle} />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      {panelVisible && (
        <TweaksPanel
          tweaks={tweaks}
          update={update}
          onClose={() => {
            setPanelVisible(false);
            try { window.parent.postMessage({ type: '__edit_mode_deactivated_by_child' }, '*'); } catch (e) {}
          }}
        />
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
