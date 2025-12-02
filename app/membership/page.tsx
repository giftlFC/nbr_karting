import { FaCheck } from 'react-icons/fa6';

export default function Membership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section section-hero">
        <h1>Team Membership</h1>
        <p className="lead">Join NBR Karting and Elevate Your Racing</p>
      </section>

      {/* Membership Introduction */}
      <section className="section">
        <h2>Become Part of the NBR Family</h2>
        <p style={{marginBottom:'2rem', maxWidth:'700px'}}>
          NBR Karting offers professional team membership with comprehensive support, expert coaching, and world-class infrastructure. A formal contract is signed between NBR Karting and the team member stipulating team and driver responsibilities, conduct, payment conditions, disputes and membership termination.
        </p>
        <div className="intro-highlight">
          <p><strong>Every driver is equally important and is an asset to the team.</strong> We foster a family spirit committed to helping you achieve your racing goals.</p>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="section section-dark">
        <h2>Flexible Payment Options</h2>
        <p style={{marginBottom:'2rem', textAlign:'center'}}>Choose the payment plan that works best for you. All payment options are made in advance with a 2-month termination notice penalty.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Monthly</h3>
              <div className="pricing-amount">R15,000<span className="pricing-period">/month</span></div>
            </div>
            <div className="pricing-total">Total: R180,000</div>
            <p className="pricing-note">Pay as you go with maximum flexibility</p>
            <a href="#contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'1rem'}}>Choose Monthly</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-badge">BEST VALUE</div>
            <div className="pricing-header">
              <h3>Quarterly</h3>
              <div className="pricing-amount">R42,750<span className="pricing-period">/quarter</span></div>
            </div>
            <div className="pricing-total">Total: R171,000</div>
            <p className="pricing-note">Save R9,000 compared to monthly payments</p>
            <a href="#contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'1rem'}}>Choose Quarterly</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Upfront Annual</h3>
              <div className="pricing-amount">R165,000<span className="pricing-period">/year</span></div>
            </div>
            <div className="pricing-total">Total: R165,000</div>
            <p className="pricing-note">Maximum savings with full year commitment</p>
            <a href="#contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'1rem'}}>Choose Annual</a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <h2>What's Included in Your Membership</h2>
        <div className="included-grid">
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Kart Storage & Maintenance</h4>
            <p>Secure storage at team premises with regular service and preparation before and after events.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Free Practice Days</h4>
            <p>3 free practice days per month in addition to all race events for skill development.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Driver Coaching</h4>
            <p>On-track and off-track coaching from experienced drivers and engineers.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Transportation</h4>
            <p>Transportation to all local racetracks and pre-arranged transportation to venues outside of Gauteng.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Pit Support</h4>
            <p>Pre-arranged pit space, setup assistance, and takedown at all racing events.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Emergency Support</h4>
            <p>Access to team mechanics in the event of emergency at the track.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>Technical Knowledge</h4>
            <p>Access to NBR intellectual property on setup, engine tuning, and carburetor optimization.</p>
          </div>
          <div className="included-item">
            <span className="check-icon"><FaCheck /></span>
            <h4>International Opportunities</h4>
            <p>Access to international racing opportunities in Rok & Rotax with team partners in Europe and USA.</p>
          </div>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="section section-dark">
        <h2>Important Notes</h2>
        <div className="notes-grid">
          <div className="note-card">
            <h4>Not Included</h4>
            <ul style={{paddingLeft:'1.5rem'}}>
              <li>Kart license and club memberships</li>
              <li>Pit rental fees at some venues</li>
              <li>Spare parts and fuel</li>
              <li>Additional services beyond stated package</li>
            </ul>
          </div>
          <div className="note-card">
            <h4>Important Terms</h4>
            <ul style={{paddingLeft:'1.5rem'}}>
              <li>All payment options are made in advance</li>
              <li>2-month termination notice penalty applies</li>
              <li>Formal contract signed between NBR and driver</li>
              <li>Standard conduct and responsibility terms apply</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Membership Contract */}
      <section className="section">
        <h2>Team Membership Contract</h2>
        <div className="contract-info">
          <p>
            A formal contract is signed between NBR Karting and the team member stipulating:
          </p>
          <ul style={{paddingLeft:'1.5rem', marginTop:'1rem'}}>
            <li><strong>Team Responsibilities:</strong> Our commitment to driver development and support</li>
            <li><strong>Driver Responsibilities:</strong> Expected conduct and professionalism</li>
            <li><strong>Payment Conditions:</strong> Payment schedule and terms</li>
            <li><strong>Dispute Resolution:</strong> Procedures for handling any issues</li>
            <li><strong>Membership Termination:</strong> Conditions and notice periods</li>
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-dark">
        <h2>Racing Categories We Support</h2>
        <div className="categories-offered">
          <div className="category-option">
            <h3>Rotax</h3>
            <p>South African Championships, National Rounds, African Opens, and international opportunities.</p>
          </div>
          <div className="category-option">
            <h3>Rok Cup</h3>
            <p>Regional and National rounds with factory-supported development engines.</p>
          </div>
          <div className="category-option">
            <h3>F-Series</h3>
            <p>F200 Sprint and F400 Sprint series events with competitive support.</p>
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="section">
        <h2>Your First Year with NBR</h2>
        <div className="timeline-membership">
          <div className="timeline-month">
            <h4>Months 1-2</h4>
            <p>Assessment, goal setting, and personalized development plan creation.</p>
          </div>
          <div className="timeline-month">
            <h4>Months 3-6</h4>
            <p>Intensive coaching and racing experience building racecraft and confidence.</p>
          </div>
          <div className="timeline-month">
            <h4>Months 7-9</h4>
            <p>Competition focus with multiple race events and continued skill refinement.</p>
          </div>
          <div className="timeline-month">
            <h4>Months 10-12</h4>
            <p>Championship push with telemetry analysis and final optimization for peak performance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I switch payment plans?</h4>
            <p>Yes, you can switch between payment plans with advance notice. Contact the team to discuss options.</p>
          </div>
          <div className="faq-item">
            <h4>What if I need to leave?</h4>
            <p>A 2-month termination notice is required. Specific terms will be outlined in your membership contract.</p>
          </div>
          <div className="faq-item">
            <h4>How much kart practice is included?</h4>
            <p>3 free practice days per month plus all race events you choose to participate in.</p>
          </div>
          <div className="faq-item">
            <h4>Are spare parts included?</h4>
            <p>No, spare parts and fuel are purchased separately. We provide access to parts through our dealer relationships.</p>
          </div>
          <div className="faq-item">
            <h4>Can I race internationally?</h4>
            <p>Yes! Members have access to international opportunities through our partnerships in Europe and USA.</p>
          </div>
          <div className="faq-item">
            <h4>What if I have sponsorship?</h4>
            <p>We work with sponsored drivers. Discuss your situation with our team for custom arrangements.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="contact">
        <div className="cta-container">
          <h2>Ready to Join NBR Karting?</h2>
          <p>Contact our team to discuss membership options and get started on your championship journey.</p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center'}}>
            <a href="mailto:info@nbrkarting.co.za" className="btn btn-primary">Get in Touch</a>
            <a href="/contact" className="btn btn-ghost">Contact Form</a>
          </div>
        </div>
      </section>
    </div>
  );
}
