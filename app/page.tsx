import Hero from "./components/Hero";
import { FaHandshake, FaArrowTrendUp, FaBullseye } from 'react-icons/fa6';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Introduction Section */}
      <section className="section">
        <div className="intro-container">
          <div className="intro-card">
            <h2>NBR Karting</h2>
            <p className="intro-lead">
              NBR Karting is a private Kart Team established in 2012 by <strong>Neil Basilio</strong>, a former National Karter who raced on the South African circuit for nearly a decade.
            </p>
            <p className="intro-text">
              Neil saw the need to grow young talented South African Karters by taking them under his wing and helping them achieve their goals and win championships. We are committed to developing the next generation of motorsport champions through dedication, teamwork, and excellence.
            </p>
            <div className="intro-stats">
              <div className="stat">
                <div className="stat-number">2012</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Drivers Trained</div>
              </div>
              <div className="stat">
                <div className="stat-number">Randburg</div>
                <div className="stat-label">Based At</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="section section-dark">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaHandshake /></div>
            <h3>Teamwork</h3>
            <p>A dedicated, full-time professional team manager and support crew working together at the office, workshop, and track.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaArrowTrendUp /></div>
            <h3>Development</h3>
            <p>Continuous improvement through testing, engine development, and driver capability enhancement at the highest levels.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaBullseye /></div>
            <h3>Dedication</h3>
            <p>Striving for that extra tenth using every possible resource. Our search for speed and pursuit of perfection is never ending.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Join NBR Karting</h2>
            <p>Become part of a championship-winning team with world-class coaching and development programs.</p>
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem'}}>
              <a href="/membership" className="btn btn-primary">View Membership</a>
              <a href="/driver-development" className="btn btn-ghost">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
