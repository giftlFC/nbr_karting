export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{maxWidth:'100%', margin:'0 auto', padding:'0 1rem'}}>
        <div style={{display:'flex', flexDirection:'column', gap:'1rem', alignItems:'center', textAlign:'center', flexWrap:'wrap'}}>
          <div>
            <strong>NBR Racing Team</strong>
            <div style={{fontSize:'0.85rem', color:'var(--muted)', marginTop:'0.5rem'}}>3 Wonderboom, Randburg • info@nbrracing.co.za</div>
          </div>
          <div style={{fontSize:'0.85rem', color:'var(--muted)'}}>© 2025 NBR Racing Team. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
