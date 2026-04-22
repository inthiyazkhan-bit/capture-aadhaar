const CAROUSEL_STEPS = [
  { Visual: Step3Checklist },
  { Visual: Step3Select    },
];

function StepsCarousel({ intervalMs = 2250 }) {
  const [idx,   setIdx]   = React.useState(0);
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIdx(i => {
        const next = (i + 1) % CAROUSEL_STEPS.length;
        if (next === 0) setCycle(c => c + 1);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <div style={{
      marginTop: 16, width: '100%',
      background: '#FFFFFF',
      borderRadius: 14, padding: '12px 0 8px',
      overflow: 'hidden', boxSizing: 'border-box',
    }}>
      <div style={{
        fontSize: 14, fontWeight: 500, color: 'rgba(19,26,37,0.60)',
        lineHeight: 1.5, letterSpacing: '-0.01em',
        marginBottom: 14, textAlign: 'center',
        padding: '0 16px',
      }}>
        On the DigiLocker screen, select <b style={{ color: '#131A25' }}>Aadhaar Card</b> under Issued Documents, then tap <b style={{ color: '#131A25' }}>Allow</b>.
      </div>

      <div style={{ height: 240, position: 'relative' }}>
        {CAROUSEL_STEPS.map((s, i) => {
          const active = i === idx;
          return (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
              transform: `translateY(${active ? 0 : 10}px) scale(${active ? 1 : 0.96})`,
              opacity: active ? 1 : 0,
              transition: 'opacity 250ms cubic-bezier(0.4,0,0.2,1), transform 325ms cubic-bezier(0.34,1.25,0.64,1)',
              pointerEvents: active ? 'auto' : 'none',
            }}>
              <s.Visual key={`${i}-${cycle}`}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { StepsCarousel });
