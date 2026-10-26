import { ImageResponse } from 'next/og';

export const alt = 'Nicolas Picon · Product manager. Good products start with people. So do I.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fbfaf6', color: '#253a34', padding: '72px 80px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <div style={{ display: 'flex', width: 112, height: 112, borderRadius: 25, background: '#253a34', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', color: '#ffffff', fontSize: 52, fontWeight: 700, letterSpacing: -2, marginRight: 8 }}>NP</div>
          <div style={{ position: 'absolute', display: 'flex', width: 12, height: 12, borderRadius: 6, background: '#9c6548', right: 12, bottom: 34 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 132, fontWeight: 700, letterSpacing: -6, lineHeight: 1 }}>
            <span>Nicolas Picon</span>
            <span style={{ color: '#9c6548' }}>.</span>
          </div>
          <div style={{ display: 'flex', marginTop: 36, fontSize: 48, letterSpacing: -1.5, color: '#253a34' }}>
            <span>Good products start with people.&nbsp;</span>
            <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>So do I.</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#596660', letterSpacing: 0.5 }}>Product manager · UW Foster MBA · Engineer by training</div>
      </div>
    ),
    { ...size },
  );
}
