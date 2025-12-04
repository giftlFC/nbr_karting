import { FaCheck, FaMapPin, FaWrench, FaGear, FaFlag, FaToolbox, FaTruck } from 'react-icons/fa6';
import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RaceSystem() {
  return (
    <div className={zenDots.className}>
      {/* Hero Section */}
      <section className="section section-hero">
        <h1>Race Team System</h1>
        <p className="lead">Simplicity, Professionalism, and Results</p>
      </section>

      {/* Race Winning Method */}
      <section className="section">
        <h2>Our Race Winning Method</h2>
        <div className="method-container">
          <div className="method-card">
            <div className="method-icon"><FaCheck /></div>
            <h3>Simplicity</h3>
            <p>
              Our race team system is simple yet professional. The team has successfully won championships at all levels of competition locally. We offer a variety of services which make up the core of our program.
            </p>
          </div>
          <div className="method-card">
            <div className="method-icon"><FaMapPin /></div>
            <h3>Logistics</h3>
            <p>
              The team is based at the <strong>Zwartkops Kart Circuit</strong>. We have pit facilities at all tracks. We also provide and arrange transportation to all races outside of Gauteng.
            </p>
          </div>
          <div className="method-card">
            <div className="method-icon"><FaWrench /></div>
            <h3>Chassis Support</h3>
            <p>
              NBR is a Registered Kart Dealer with all the Top Karting Brands in South Africa. Being in direct contact with all the Top Brands allows us access to new race parts as they become available.
            </p>
          </div>
          <div className="method-card">
            <div className="method-icon"><FaGear /></div>
            <h3>Engine Development</h3>
            <p>
              We have a local partnership with an independent Engine Tuner. This partnership allows NBR to develop and maintain both Rotax and Rok engines at championship-winning standards.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section section-dark">
        <h2>Our Infrastructure</h2>
        <div className="infrastructure-grid">
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_uic4dhuic4dhuic4.png"
                alt="Zwartkops Kart Circuit"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaFlag style={{marginRight: '0.5rem', display: 'inline'}} /> Primary Base</h3>
            <p><strong>Zwartkops Kart Circuit</strong> - fully equipped facilities for storage, maintenance, and preparation.</p>
          </div>
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_pgjbuapgjbuapgjb.png"
                alt="Workshop Support"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaToolbox style={{marginRight: '0.5rem', display: 'inline'}} /> Workshop Support</h3>
            <p>State-of-the-art workshop for kart maintenance, service, and pre/post-race preparation.</p>
          </div>
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_57cgxs57cgxs57cg.png"
                alt="Transportation"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaTruck style={{marginRight: '0.5rem', display: 'inline'}} /> Transportation</h3>
            <p>Dedicated transportation arrangements to all local racetracks and venues outside of Gauteng.</p>
          </div>
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_90zxu790zxu790zx.png"
                alt="Engine Tuning"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3><FaGear style={{marginRight: '0.5rem', display: 'inline'}} /> Engine Tuning</h3>
            <p>Professional engine development and maintenance for Rotax and Rok categories through expert partnerships.</p>
          </div>
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_70yglp70yglp70yg.png"
                alt="Telemetry Analysis"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>📊 Telemetry</h3>
            <p>Data analysis and performance monitoring to identify areas for improvement and optimize setup.</p>
          </div>
          <div className="infra-card">
            <div style={{marginBottom: '1rem', position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image
                src="/images/Gemini_Generated_Image_rq5alwrq5alwrq5a.png"
                alt="Support Team"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>👥 Support Team</h3>
            <p>Full-time mechanics and support staff available during practice, qualifying, and race events.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2>Core Services</h2>
        <div className="services-list">
          <div className="service-item">
            <span className="service-number">1</span>
            <div>
              <h4>Pre-Race Preparation</h4>
              <p>Complete kart inspection, maintenance, setup optimization, and testing before every event.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">2</span>
            <div>
              <h4>Track Support</h4>
              <p>Pit space, setup assistance, emergency mechanical support, and race strategy consultation during events.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">3</span>
            <div>
              <h4>Driver Coaching</h4>
              <p>On-track and off-track coaching with expert drivers and engineers focused on continuous improvement.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">4</span>
            <div>
              <h4>Technical Support</h4>
              <p>Access to NBR intellectual property on setup, engine tuning, and carburetor optimization.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">5</span>
            <div>
              <h4>Parts & Equipment</h4>
              <p>Direct access to top karting brands and latest race parts as they become available.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">6</span>
            <div>
              <h4>Storage & Maintenance</h4>
              <p>Secure storage at team premises with regular maintenance and service between races.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories We Support */}
      <section className="section section-dark">
        <h2>Competition Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h4>Rotax</h4>
            <p>South African Kart Championships, National Rounds, African Open events, and international opportunities.</p>
          </div>
          <div className="category-card">
            <h4>Rok</h4>
            <p>Rok Cup Regional and National rounds with factory-supported engines and competitive program.</p>
          </div>
          <div className="category-card">
            <h4>F-Series</h4>
            <p>F200 Sprint and F400 sprint series events with dedicated support and competitive preparation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta-container">
          <h2>Ready to Join Our Winning System?</h2>
          <p>Experience professional karting support that delivers results.</p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center'}}>
            <a href="/membership" className="btn btn-primary">Explore Membership</a>
            <a href="/contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
