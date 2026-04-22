function CaptureAadhaarScreen() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ height: 62, flexShrink: 0 }} />

      <div style={{
        background: '#FFFFFF',
        padding: '12px 18px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
        boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 6px 10px -6px rgba(0,0,0,0.06)',
        position: 'relative', zIndex: 2,
      }}>
        <button style={{
          background: 'none', border: 'none', padding: 4,
          display: 'flex', alignItems: 'center', cursor: 'pointer',
        }}><BackArrow/></button>
        <IDfyLogo height={24}/>
        <div style={{
          fontSize: 18, fontWeight: 600, color: '#131A25',
          letterSpacing: '-0.01em', marginLeft: 2,
        }}>Capture Details</div>
      </div>

      <div style={{ flex: 1, padding: '20px 20px 16px', overflowY: 'auto', minHeight: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#131A25', letterSpacing: '-0.02em' }}>
          Capture Aadhaar
        </div>
        <StepsCarousel/>

        <PopupGuide/>
      </div>

      <div style={{
        padding: '12px 16px 16px', background: '#FFFFFF', flexShrink: 0,
        boxShadow: '0 -4px 10px -6px rgba(0,0,0,0.08)',
      }}>
        <button style={{
          width: '100%', height: 52,
          background: '#1766D6', border: 'none', borderRadius: 8,
          color: '#FFFFFF', fontSize: 17, fontWeight: 500,
          letterSpacing: '-0.01em', cursor: 'pointer',
          fontFamily: 'inherit',
          boxShadow: '0 1px 2px rgba(23,102,214,0.25)',
        }}>Continue</button>

        <div style={{
          marginTop: 10, display: 'flex', gap: 6, alignItems: 'flex-start', justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: 1 }}><InfoIcon/></div>
          <div style={{
            fontSize: 12, color: 'rgba(19,26,37,0.40)', lineHeight: 1.45,
            letterSpacing: '-0.005em', textAlign: 'center', maxWidth: 300,
          }}>No account needed to verify your Aadhaar</div>
        </div>
      </div>

      <div style={{
        background: '#0A0D13', padding: '10px 0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        fontSize: 12, color: '#ECEDED', fontWeight: 400,
      }}>
        <span>Secured by</span>
        <IDfySecuredLogo/>
      </div>
    </div>
  );
}

Object.assign(window, { CaptureAadhaarScreen });
