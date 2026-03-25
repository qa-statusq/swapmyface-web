import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SwapMyFace - Free AI Face Swap App';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #09111f 0%, #101c31 50%, #09111f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(94,140,255,0.3) 0%, transparent 70%)',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Logo */}
        <img
          src="https://facefitswap.com/images/icons/icon-192.png"
          width="80"
          height="80"
          style={{
            borderRadius: '20px',
            marginBottom: '24px',
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#f4f7fb',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          <span style={{ color: '#f4f7fb' }}>Swap</span>
          <span style={{ color: '#5e8cff', fontStyle: 'oblique 6deg' }}>MyFace</span>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#7c5cfc', marginLeft: '4px', verticalAlign: 'super' }} />
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #5e8cff, #28d3b8)',
            backgroundClip: 'text',
            color: 'transparent',
            marginTop: '12px',
            textAlign: 'center',
          }}
        >
          Free AI Face Swap App | 500+ Templates
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '40px',
          }}
        >
          {['500+ Templates', '100% Free', 'Unlimited Swaps', 'Full HD'].map(
            (stat) => (
              <div
                key={stat}
                style={{
                  fontSize: '18px',
                  color: '#b4c1d6',
                  padding: '8px 20px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {stat}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
