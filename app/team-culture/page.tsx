import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function TeamCulture() {
  return (
    <div className={zenDots.className}>
      {/* Hero Section */}
      <section className="hero">
        <Image 
          src="/images/nbr_team.jpeg" 
          alt="Team Culture" 
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay">
          <div className="hero-copy">
            <h1>Team Culture</h1>
            <p className="lead">Built on Teamwork, Development, and Dedication</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <h2>Our Core Values</h2>
        <div className="values-detail-grid">
          <div className="value-detail">
            <div className="value-number">1</div>
            <h3>TEAMWORK</h3>
            <p>
              NBR has a dedicated, full-time professional team manager who works together with NBR support crew. Supporting the team in the office, at the workshop and at the track.
            </p>
            <p>
              Motorsport comes with the price of deadlines and pressure. We manage this on a daily basis and integrate our drivers into this mentality. Success is achieved through collaboration, communication, and unified purpose.
            </p>
          </div>
          <div className="value-detail">
            <div className="value-number">2</div>
            <h3>DEVELOPMENT</h3>
            <p>
              We continuously focus on improving our performance by testing equipment, engine development and driver capability. We draw from the extensive experience gained racing at the highest levels locally and internationally.
            </p>
            <p>
              Our infrastructure and support structures allow us to complete extensive controlled tests on and off the track. Every lap is a learning opportunity, and every session feeds into our continuous improvement philosophy.
            </p>
          </div>
          <div className="value-detail">
            <div className="value-number">3</div>
            <h3>DEDICATION</h3>
            <p>
              During a race weekend, our clients will find the team striving for that extra tenth using every possible resource available. Our search for speed, attitude towards perfection and quality is never ending.
            </p>
            <p>
              We apply this mentality in all aspects of the team and its operations to ensure solid and long-term relationships with all our team members. Excellence is not an event - it's a practice.
            </p>
          </div>
        </div>
      </section>

      {/* Team Environment */}
      <section className="section section-dark">
        <h2>Our Team Environment</h2>
        <div className="environment-grid">
          <div className="env-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_rq5alwrq5alwrq5a.png"
                alt="Professional Structure"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>Professional Structure</h3>
            <p>A simple yet professional race team system that has successfully won championships at all levels of competition locally.</p>
          </div>
          <div className="env-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_irf6v9irf6v9irf6.png"
                alt="Family Spirit"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>Family Spirit</h3>
            <p>Every driver in the team is equally important and is an asset to the team. We foster a family spirit where success is shared.</p>
          </div>
          <div className="env-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_ouack5ouack5ouac.png"
                alt="Mentorship"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>Mentorship</h3>
            <p>Drivers build a concrete understanding of motorsport, telemetry, communication and personal brand presentation through dedicated coaching.</p>
          </div>
          <div className="env-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_s3h3sis3h3sis3h3.png"
                alt="Individual Focus"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>Individual Focus</h3>
            <p>We work closely with each driver to understand their own objectives and formulate a plan to achieve this together.</p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section">
        <h2>What We Believe</h2>
        <div className="beliefs">
          <div className="belief-item">
            <span className="belief-icon"><FaArrowRight /></span>
            <p>Racing teaches life lessons that extend far beyond the track: discipline, resilience, teamwork, and the value of hard work.</p>
          </div>
          <div className="belief-item">
            <span className="belief-icon"><FaArrowRight /></span>
            <p>Young drivers with proper mentorship and infrastructure can achieve greatness on both national and international stages.</p>
          </div>
          <div className="belief-item">
            <span className="belief-icon"><FaArrowRight /></span>
            <p>Success is measured not just in trophies, but in the development and growth of each driver as both racers and individuals.</p>
          </div>
          <div className="belief-item">
            <span className="belief-icon"><FaArrowRight /></span>
            <p>A unified team with clear communication and shared purpose will always outperform disorganized competitors.</p>
          </div>
          <div className="belief-item">
            <span className="belief-icon"><FaArrowRight /></span>
            <p>Continuous improvement is a non-negotiable commitment in everything we do - training, equipment, strategy, and driver development.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="cta-container">
          <h2>Experience NBR Culture Firsthand</h2>
          <p>Join a team where your success is our priority and your growth is our passion.</p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center'}}>
            <a href="/membership" className="btn btn-primary">View Membership Options</a>
            <a href="/driver-development" className="btn btn-ghost">Learn About Development</a>
          </div>
        </div>
      </section>
    </div>
  );
}
