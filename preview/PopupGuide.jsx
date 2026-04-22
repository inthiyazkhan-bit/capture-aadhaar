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

  const settingsIcon = (
    <svg width="13" height="16" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.01956 0.099976H11.1804C11.7146 0.0999653 12.1604 0.0999565 12.5247 0.129716C12.9046 0.160753 13.2612 0.227864 13.5985 0.399709C14.1159 0.66336 14.5366 1.08406 14.8003 1.6015C14.9721 1.93877 15.0392 2.29542 15.0703 2.67531C15.1 3.03954 15.1 3.48538 15.1 4.01952V5.68043C15.1 6.21457 15.1 6.66042 15.0703 7.02465C15.0392 7.40453 14.9721 7.76119 14.8003 8.09845C14.5366 8.6159 14.1159 9.03659 13.5985 9.30024C13.2612 9.47209 12.9046 9.5392 12.5247 9.57024C12.1604 9.6 11.7146 9.59999 11.1805 9.59998H4.01955C3.4854 9.59999 3.03956 9.6 2.67533 9.57024C2.29544 9.5392 1.93879 9.47209 1.60153 9.30024C1.08408 9.03659 0.663383 8.6159 0.399731 8.09845C0.227887 7.76119 0.160776 7.40453 0.129738 7.02465C0.0999794 6.66041 0.0999882 6.21457 0.0999989 5.68041V4.01954C0.0999882 3.48539 0.0999794 3.03954 0.129738 2.67531C0.160776 2.29542 0.227887 1.93877 0.399731 1.6015C0.663383 1.08406 1.08408 0.66336 1.60153 0.399708C1.93879 0.227864 2.29544 0.160753 2.67533 0.129716C3.03956 0.0999565 3.48541 0.0999653 4.01956 0.099976ZM2.79748 1.62473C2.51035 1.64819 2.37307 1.69008 2.28251 1.73622C2.04731 1.85606 1.85608 2.04729 1.73624 2.28249C1.6901 2.37305 1.64822 2.51033 1.62476 2.79745C1.60058 3.09333 1.6 3.47755 1.6 4.04998V5.64998C1.6 6.2224 1.60058 6.60662 1.62476 6.9025C1.64822 7.18962 1.6901 7.3269 1.73624 7.41746C1.85608 7.65267 2.04731 7.84389 2.28251 7.96373C2.37307 8.00988 2.51035 8.05176 2.79748 8.07522C3.09336 8.09939 3.47757 8.09998 4.05 8.09998H11.15C11.7224 8.09998 12.1066 8.09939 12.4025 8.07522C12.6896 8.05176 12.8269 8.00988 12.9175 7.96373C13.1527 7.84389 13.3439 7.65267 13.4638 7.41746C13.5099 7.3269 13.5518 7.18962 13.5752 6.9025C13.5994 6.60662 13.6 6.2224 13.6 5.64998V4.04998C13.6 3.47755 13.5994 3.09333 13.5752 2.79745C13.5518 2.51033 13.5099 2.37305 13.4638 2.28249C13.3439 2.04729 13.1527 1.85606 12.9175 1.73622C12.8269 1.69008 12.6896 1.64819 12.4025 1.62473C12.1066 1.60056 11.7224 1.59998 11.15 1.59998H4.05C3.47757 1.59998 3.09336 1.60056 2.79748 1.62473ZM0.0999992 13.35C0.0999992 12.9358 0.435786 12.6 0.849999 12.6H14.35C14.7642 12.6 15.1 12.9358 15.1 13.35C15.1 13.7642 14.7642 14.1 14.35 14.1H0.849999C0.435786 14.1 0.0999992 13.7642 0.0999992 13.35ZM0.0999992 17.35C0.0999992 16.9358 0.435786 16.6 0.849999 16.6H10.35C10.7642 16.6 11.1 16.9358 11.1 17.35C11.1 17.7642 10.7642 18.1 10.35 18.1H0.849999C0.435786 18.1 0.0999992 17.7642 0.0999992 17.35Z" fill="#1B1B1B" stroke="#1B1B1B" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const mobileContent = (
    <>
      {sectionLabel('iOS · Safari')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>Open Settings {settingsIcon}</span>)}
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
      {sectionLabel('macOS · Safari')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Safari → Settings')}
        {step(2, 'Go to website settings')}
        {step(3, 'Pop-up Windows → Allow for this site')}
      </div>
      {divider()}
      {sectionLabel('Windows · Chrome')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {step(1, 'Open Chrome → tap ⋮ → Settings')}
        {step(2, 'Privacy and security → Site settings')}
        {step(3, 'Pop-ups and redirects → Allow')}
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

      {/* Dropdown selector */}
      <div style={{ position: 'relative', marginBottom: 14 }}>
        <select
          value={tab}
          onChange={e => setTab(e.target.value)}
          style={{
            width: '100%',
            appearance: 'none', WebkitAppearance: 'none',
            padding: '9px 36px 9px 12px',
            borderRadius: 8, border: '1.5px solid #BFC2C4',
            background: '#FFFFFF',
            fontSize: 14, fontWeight: 600, color: '#131A25',
            cursor: 'pointer', fontFamily: 'inherit', outline: 'none',
          }}
        >
          <option value="mobile">Mobile</option>
          <option value="desktop">Desktop</option>
        </select>
        <div style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#BFC2C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {tab === 'mobile' ? mobileContent : desktopContent}

    </div>
  );
}

Object.assign(window, { PopupGuide });
