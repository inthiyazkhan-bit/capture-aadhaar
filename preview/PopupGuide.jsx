function PopupGuide() {
  const [tab, setTab] = React.useState('mobile');

  const step = (n, label) => (
    <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <div style={{
        width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
        background: '#1766D6', color: '#FFFFFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, fontWeight: 700, marginTop: 1,
      }}>{n}</div>
      <div style={{ fontSize: 12, color: '#131A25', lineHeight: 1.5, fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );

  const sectionLabel = (label) => (
    <div style={{
      fontSize: 11, fontWeight: 700, color: 'rgba(19,26,37,0.40)',
      letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 8,
    }}>{label}</div>
  );

  const divider = () => (
    <div style={{ height: 1, background: '#ECEDED', margin: '12px 0' }}/>
  );

  const mobileContent = (
    <>
      {sectionLabel('iOS · Safari')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Settings')}
        {step(2, 'Go to Safari')}
        {step(3, 'Turn off Block Pop-ups')}
      </div>
      {divider()}
      {sectionLabel('Android · Chrome')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Chrome → tap ⋮ → Settings')}
        {step(2, 'Site settings → Pop-ups and redirects')}
        {step(3, 'Toggle to Allow')}
      </div>
    </>
  );

  const desktopContent = (
    <>
      {sectionLabel('Windows · Chrome')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Chrome → tap ⋮ → Settings')}
        {step(2, 'Privacy and security → Site settings')}
        {step(3, 'Pop-ups and redirects → Allow')}
      </div>
      {divider()}
      {sectionLabel('macOS · Safari')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Safari → Settings')}
        {step(2, 'Go to website settings')}
        {step(3, 'Pop-up Windows → Allow for this site')}
      </div>
    </>
  );

  return (
    <div style={{ marginTop: 20 }}>

      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path d="M15.1133 11.6467L9.74666 2.31335C9.5732 2.00236 9.31985 1.74332 9.01279 1.563C8.70573 1.38267 8.35609 1.2876 8 1.2876C7.6439 1.2876 7.29426 1.38267 6.9872 1.563C6.68014 1.74332 6.42679 2.00236 6.25333 2.31335L0.919999 11.6467C0.740529 11.9494 0.644094 12.294 0.640428 12.6459C0.636763 12.9978 0.725997 13.3444 0.899123 13.6507C1.07225 13.9571 1.32313 14.2123 1.62645 14.3907C1.92977 14.5691 2.27479 14.6643 2.62667 14.6667H13.3733C13.728 14.6702 14.0773 14.5793 14.3853 14.4033C14.6933 14.2273 14.9489 13.9726 15.126 13.6652C15.3031 13.3579 15.3952 13.009 15.393 12.6542C15.3908 12.2995 15.2943 11.9518 15.1133 11.6467Z" fill="#FFAA00"/>
          <path d="M7.62962 10.7792C7.73926 10.7059 7.86815 10.6668 8 10.6668C8.17681 10.6668 8.34638 10.7371 8.47141 10.8621C8.59643 10.9871 8.66667 11.1567 8.66667 11.3335C8.66667 11.4654 8.62757 11.5942 8.55432 11.7039C8.48106 11.8135 8.37694 11.899 8.25513 11.9494C8.13331 11.9999 7.99926 12.0131 7.86994 11.9874C7.74062 11.9616 7.62183 11.8981 7.5286 11.8049C7.43536 11.7117 7.37187 11.5929 7.34615 11.4636C7.32042 11.3342 7.33362 11.2002 7.38408 11.0784C7.43454 10.9566 7.51999 10.8524 7.62962 10.7792Z" fill="white"/>
          <path d="M7.5286 5.52876C7.65362 5.40373 7.82319 5.3335 8 5.3335C8.17681 5.3335 8.34638 5.40373 8.47141 5.52876C8.59643 5.65378 8.66667 5.82335 8.66667 6.00016V8.66683C8.66667 8.84364 8.59643 9.01321 8.47141 9.13823C8.34638 9.26326 8.17681 9.3335 8 9.3335C7.82319 9.3335 7.65362 9.26326 7.5286 9.13823C7.40357 9.01321 7.33334 8.84364 7.33334 8.66683V6.00016C7.33334 5.82335 7.40357 5.65378 7.5286 5.52876Z" fill="white"/>
        </svg>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#131A25', letterSpacing: '-0.01em' }}>
          Make sure to allow website pop-ups
        </div>
      </div>

      {/* Block segmented tabs */}
      <div style={{
        display: 'flex', gap: 4, padding: 4,
        background: '#FAFAFB', borderRadius: 10,
        marginBottom: 16,
      }}>
        {['mobile', 'desktop'].map(t => (
          <div
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1, padding: '7px 8px', borderRadius: 7,
              background: tab === t ? 'rgba(23,102,214,0.12)' : 'transparent',
              textAlign: 'center',
              fontSize: 14, fontWeight: tab === t ? 700 : 500,
              color: tab === t ? '#1766D6' : '#484E56',
              cursor: 'pointer', transition: 'all 180ms ease',
              letterSpacing: '-0.01em',
            }}
          >
            {t === 'mobile' ? 'Mobile' : 'Desktop'}
          </div>
        ))}
      </div>

      {/* Static steps */}
      {tab === 'mobile' ? mobileContent : desktopContent}

    </div>
  );
}

Object.assign(window, { PopupGuide });
