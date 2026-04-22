const { useState: _useS, useEffect: _useE } = React;

function MiniPhone({ children }) {
  return (
    <div style={{
      width: 210, height: 240, borderRadius: '30px 30px 4px 4px',
      border: '3px solid #131A25', borderBottom: 'none',
      background: '#FFFFFF', position: 'relative', overflow: 'hidden',
      boxShadow: '0 14px 30px -18px rgba(0,0,0,0.35)',
      padding: '28px 16px 14px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
    }}>
      <div style={{
        position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
        width: 60, height: 7, borderRadius: 4, background: '#131A25',
      }}/>
      {children}
    </div>
  );
}

function MiniPhoneHeader() {
  return (
    <div style={{
      width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingBottom: 10, marginBottom: 10,
      borderBottom: '1px solid #ECEDED',
    }}>
      <DigiLockerLogo height={15}/>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 5.99962C6.94563 5.99962 9.8495 4.75049 12 2.71387C14.1505 4.75049 17.0544 5.99962 20.25 5.99962C20.3008 5.99962 20.3515 5.9993 20.4021 5.99867C20.7901 7.17878 21 8.43971 21 9.74966C21 15.3412 17.1757 20.0395 12 21.3716C6.82432 20.0395 3 15.3412 3 9.74966C3 8.43971 3.2099 7.17878 3.59789 5.99867C3.64852 5.9993 3.69922 5.99962 3.75 5.99962Z" fill="#00B887" stroke="#00B887" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12.4286L10.4 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    </div>
  );
}

/* Step 3a: User arrives at the document checklist */
function Step3Checklist() {
  const [highlighted, setHighlighted] = _useS(false);

  _useE(() => {
    const id = setTimeout(() => setHighlighted(true), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <MiniPhone>
      <MiniPhoneHeader/>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 600, color: '#131A25',
        }}>
          <span>Issued Documents (2)</span>
          <span style={{ color: '#1766D6' }}>Select all</span>
        </div>

        <div style={{
          padding: '8px 10px',
          border: `1.5px solid ${highlighted ? '#1766D6' : '#BFC2C4'}`,
          borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 11, fontWeight: 600, color: '#131A25',
          background: highlighted ? 'rgba(23,102,214,0.08)' : '#FFFFFF',
          transition: 'all 175ms ease',
        }}>
          <span>Aadhaar Card</span>
          <div style={{ width: 12, height: 12, borderRadius: 3, border: '1.5px solid #BFC2C4' }}/>
        </div>

        <div style={{
          padding: '8px 10px',
          border: '1px solid #ECEDED', borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 500, color: 'rgba(19,26,37,0.40)',
        }}>
          <span>PAN Verification</span>
          <div style={{ width: 12, height: 12, borderRadius: 3, border: '1.5px solid #BFC2C4' }}/>
        </div>
      </div>
    </MiniPhone>
  );
}

/* Step 3b: User selects Aadhaar — checkbox animates in */
function Step3Select() {
  const [selected, setSelected] = _useS(false);

  _useE(() => {
    const id = setTimeout(() => setSelected(true), 350);
    return () => clearTimeout(id);
  }, []);

  return (
    <MiniPhone>
      <MiniPhoneHeader/>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 600, color: '#131A25',
        }}>
          <span>Issued Documents (2)</span>
          <span style={{ color: '#1766D6' }}>Select all</span>
        </div>

        <div style={{
          padding: '8px 10px',
          border: selected ? '2px solid #E23318' : '1.5px solid #BFC2C4',
          borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 11, fontWeight: 700, color: '#131A25',
          animation: selected ? 'pulseRed 1.6s ease-in-out infinite' : 'none',
          transition: 'border 100ms ease',
        }}>
          <span>Aadhaar Card</span>
          <div style={{
            width: 14, height: 14, borderRadius: 3,
            background: selected ? '#1A7A1E' : 'transparent',
            border: selected ? 'none' : '1.5px solid #BFC2C4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 110ms ease',
          }}>
            {selected && (
              <svg width="9" height="9" viewBox="0 0 12 12">
                <path d="M2 6 L5 9 L10 3" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>

        <div style={{
          padding: '8px 10px',
          border: '1px solid #ECEDED', borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 500, color: 'rgba(19,26,37,0.40)',
        }}>
          <span>PAN Verification</span>
          <div style={{ width: 12, height: 12, borderRadius: 3, border: '1.5px solid #BFC2C4' }}/>
        </div>
      </div>
    </MiniPhone>
  );
}

Object.assign(window, { MiniPhone, MiniPhoneHeader, Step3Checklist, Step3Select });
