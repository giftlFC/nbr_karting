import { FaTrophy, FaWrench, FaGlobe, FaUsers, FaChartLine, FaHeart } from 'react-icons/fa6';
import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function AboutPage() {
  return (
    <div className={zenDots.className}>
      {/* Hero Section */}
      <section className="hero">
        <Image 
          src="/image.png" 
          alt="About NBR Karting" 
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay">
          <div className="hero-copy">
            <h1>About NBR Karting</h1>
            <p className="lead">Developing Champions Since 2012</p>
          </div>
        </div>
      </section>

      {/* Neil Basilio Story */}
      <section className="section">
        <div className="about-grid">
          <div>
            <div style={{marginBottom: '1.5rem', position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/victory.jpeg"
                alt="Neil Basilio, NBR Founder"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h2>Founded by Neil Basilio</h2>
            <p>
              NBR Karting was established in 2012 by <strong>Neil Basilio</strong>, a former National Karter who raced on the South African circuit for nearly a decade. Drawing from years of personal racing experience at the highest levels of motorsport, Neil identified a critical gap in South Africa's karting landscape.
            </p>
            <p>
              He saw talented young drivers with tremendous potential but lacking the professional support structure and mentorship needed to reach their goals. With this vision, NBR Karting was born.
            </p>
          </div>
          <div>
            <div style={{marginBottom: '1.5rem', position: 'relative', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/nbr_team.jpeg"
                alt="NBR Karting Team Mission"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h2>Our Mission</h2>
            <p>
              We are committed to taking young talented South African Karters under our wing and helping them achieve their goals and win championships. Every driver who joins NBR becomes part of a family dedicated to:
            </p>
            <ul style={{marginTop:'1rem', paddingLeft:'1.5rem'}}>
              <li>Professional development and mentorship</li>
              <li>Building championship mentality</li>
              <li>Creating international racing opportunities</li>
              <li>Fostering long-term success in motorsport</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-dark">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">2012</div>
            <div className="timeline-content">
              <h3>NBR Karting Founded</h3>
              <p>Neil Basilio establishes NBR Karting in Randburg with a vision to develop young South African drivers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2015</div>
            <div className="timeline-content">
              <h3>First Championships</h3>
              <p>NBR drivers begin winning at local and regional levels across Rotax, Rok, and F-series categories.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2018</div>
            <div className="timeline-content">
              <h3>International Expansion</h3>
              <p>Partnerships established with teams in Europe and USA for international racing opportunities.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2025</div>
            <div className="timeline-content">
              <h3>Today</h3>
              <p>NBR Karting continues as South Africa's premier development team with a track record of consistent excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Deep Dive */}
      <section className="section">
        <h2>Why Choose NBR?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/victory.jpeg"
                alt="Championship Legacy"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaTrophy style={{marginRight: '0.5rem', display: 'inline'}} /> Championship Legacy</h3>
            <p>Successful track record of winning championships at all levels of local competition.</p>
          </div>
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/kart_side.jpeg"
                alt="Professional Infrastructure"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaWrench style={{marginRight: '0.5rem', display: 'inline'}} /> Professional Infrastructure</h3>
            <p>Based at Zwartkops Kart Circuit with pit facilities at all major tracks across South Africa.</p>
          </div>
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/nbr_cart.jpeg"
                alt="Expert Support"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaUsers style={{marginRight: '0.5rem', display: 'inline'}} /> Expert Support</h3>
            <p>Full-time team manager, mechanics, and coaching staff dedicated to driver success.</p>
          </div>
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/cinematic.jpeg"
                alt="Global Opportunities"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaGlobe style={{marginRight: '0.5rem', display: 'inline'}} /> Global Opportunities</h3>
            <p>Access to international racing opportunities through partnerships in Europe and USA.</p>
          </div>
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/karts_lined.jpeg"
                alt="Continuous Development"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaChartLine style={{marginRight: '0.5rem', display: 'inline'}} /> Continuous Development</h3>
            <p>Ongoing testing, equipment analysis, and performance improvement programs.</p>
          </div>
          <div className="feature-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/nbr_team.jpeg"
                alt="Family Environment"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaHeart style={{marginRight: '0.5rem', display: 'inline'}} /> Family Environment</h3>
            <p>A team that treats every driver as equally important and valuable to our collective success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
