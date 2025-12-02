export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{maxWidth:980, margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', gap:12, alignItems:'center', flexWrap:'wrap'}}>
          <div>
            <strong>NBR Racing Team</strong>
            <div style={{fontSize:13, color:'var(--muted)'}}>3 Wonderboom, Randburg • info@nbrracing.co.za</div>
          </div>
          <div style={{fontSize:13, color:'var(--muted)'}}>© 2025 NBR Racing Team. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
