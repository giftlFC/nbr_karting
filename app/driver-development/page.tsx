import { FaCar, FaChartBar, FaBrain, FaHeadset, FaUser, FaSliders } from 'react-icons/fa6';
import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function DriverDevelopment() {
  return (
    <div className={zenDots.className}>
      {/* Hero Section */}
      <section className="section section-hero">
        <h1>Driver Development</h1>
        <p className="lead">Helping Drivers Become the Best</p>
      </section>

      {/* Philosophy */}
      <section className="section">
        <h2>Our Development Philosophy</h2>
        <div className="philosophy-container">
          <p className="lead-text">
            Every driver in the team is equally important and is an asset to the team. The team fosters a family spirit and we aim to help our drivers and clients build a concrete understanding of motorsport, telemetry, communication and personal brand presentation.
          </p>
          <p>
            We offer individual one-on-one off-track racing education and on-track practical experience to hone and develop driver knowledge and racecraft. We work closely with each driver to understand their own objectives and formulate a plan to achieve this together.
          </p>
        </div>
      </section>

      

      {/* Development Program */}
      <section className="section">
        <h2>Our Development Program</h2>
        <div className="program-container">
          <div className="program-section">
            <h3>Individual Coaching</h3>
            <p>
              One-on-one sessions with experienced coaches and drivers focused on identifying strengths, addressing weaknesses, and accelerating improvement.
            </p>
            <ul style={{marginTop:'1rem', paddingLeft:'1.5rem'}}>
              <li>Personalized racecraft training</li>
              <li>Mental coaching and pressure management</li>
              <li>Technical briefings and strategy sessions</li>
              <li>Video analysis of on-track performance</li>
            </ul>
          </div>
          <div className="program-section">
            <h3>On-Track Experience</h3>
            <p>
              Practical racing experience across multiple categories and tracks to build confidence and race knowledge.
            </p>
            <ul style={{marginTop:'1rem', paddingLeft:'1.5rem'}}>
              <li>Free practice days for skill development</li>
              <li>Race events across Rotax, Rok, and F-series</li>
              <li>Track-specific knowledge and preparation</li>
              <li>Real-world racing scenarios and challenges</li>
            </ul>
          </div>
          <div className="program-section">
            <h3>Telemetry & Analysis</h3>
            <p>
              Data-driven approach to performance improvement using advanced telemetry and analysis tools.
            </p>
            <ul style={{marginTop:'1rem', paddingLeft:'1.5rem'}}>
              <li>Real-time data monitoring</li>
              <li>Performance comparison and benchmarking</li>
              <li>Setup optimization through data</li>
              <li>Trend analysis and improvement tracking</li>
            </ul>
          </div>
          <div className="program-section">
            <h3>International Opportunities</h3>
            <p>
              Access to racing opportunities beyond South Africa through partnerships with teams in Europe and USA.
            </p>
            <ul style={{marginTop:'1rem', paddingLeft:'1.5rem'}}>
              <li>International Rok events</li>
              <li>Rotax International opportunities</li>
              <li>Competitive development at highest levels</li>
              <li>Exposure to world-class competition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Objectives & Planning */}
      <section className="section section-dark">
        <h2>Your Success, Our Plan</h2>
        <p style={{marginBottom:'2rem', maxWidth:'600px'}}>
          We work with every driver to understand their individual goals and aspirations, then create a customized development plan to achieve those objectives.
        </p>
        <div className="planning-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Assessment</h4>
            <p>Evaluate current skills, experience level, and competitive standing.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Goal Setting</h4>
            <p>Establish clear, measurable objectives for the season and beyond.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Plan Development</h4>
            <p>Create a detailed roadmap with specific milestones and training focus areas.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Execution</h4>
            <p>Execute the plan through coaching, racing, and continuous feedback.</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h4>Review & Adapt</h4>
            <p>Regular reviews to assess progress and adapt the plan as needed.</p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h4>Achieve Success</h4>
            <p>Reach your goals and celebrate achievements together as a team.</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <h2>What Our Drivers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p className="quote">
              "NBR gave me the professional support and mentorship I needed to compete at the highest level. The coaching and infrastructure are world-class."
            </p>
            <p className="author">- Championship Winner</p>
          </div>
          <div className="testimonial">
            <p className="quote">
              "The family spirit at NBR makes all the difference. Everyone is invested in your success, and the team feels like home."
            </p>
            <p className="author">- Current Team Member</p>
          </div>
          <div className="testimonial">
            <p className="quote">
              "From telemetry analysis to mental coaching, NBR covers every aspect of driver development. I've improved dramatically since joining."
            </p>
            <p className="author">- Rising Talent</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta-container">
          <h2>Start Your Development Journey</h2>
          <p>Join NBR Karting and unlock your full potential as a racing driver.</p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center'}}>
            <a href="/membership" className="btn btn-primary">View Membership Plans</a>
            <a href="/contact" className="btn btn-ghost">Talk to Our Team</a>
          </div>
        </div>
      </section>
    </div>
  );
}
