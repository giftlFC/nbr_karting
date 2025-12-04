import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <video autoPlay muted loop playsInline poster="/images/hero-poster.svg" aria-hidden>
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-copy">
          <h1>
            NBR Racing Team - Passion, Precision and Pace
          </h1>
          <p className="lead">
            Founded in Randburg, South Africa, we develop young drivers into champions. From grassroots to national and continental events - teamwork and performance drive us.
          </p>

          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1rem'}}>
            <a className="btn btn-primary" href="/gallery">View Gallery</a>
            <a className="btn btn-ghost" href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="hidden md:block md:flex-1" aria-hidden>
          <div className="card float" style={{padding:'1rem', maxWidth:'360px'}}>
            <strong>Latest Highlights</strong>
            <ul style={{marginTop:'0.75rem', marginBottom:0, paddingLeft:'1.25rem', fontSize:'0.95rem'}}>
              <li>F400 Race at Idubi - intense competition</li>
              <li>Rotax National & African Open - huge weekend</li>
              <li>Rok Regional & Rotax Regionals - podiums and pace</li>
            </ul>
            <div style={{marginTop:'1rem'}}>
              <a className="btn btn-primary" href="https://www.instagram.com/p/CWBPBpjNh40/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer">Watch Featured Video</a>
            </div>
          </div>
        </div>
      </div>

      <div className="kart-rail" aria-hidden>
        <div className="kart" style={{width:220, marginLeft:'-10%'}}>
          {/* simple inline SVG kart (decorative) */}
          <svg viewBox="0 0 200 80" width="220" height="88" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect x="0" y="30" width="180" height="20" rx="6" fill="#111" opacity="0.9" />
              <circle cx="30" cy="60" r="10" fill="#222" />
              <circle cx="140" cy="60" r="10" fill="#222" />
              <path d="M20 34 C50 10, 120 10, 160 34" stroke="#d31010" strokeWidth="6" fill="none" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
