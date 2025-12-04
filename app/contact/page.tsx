import { FaLocationDot, FaEnvelope, FaFlagCheckered } from 'react-icons/fa6';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ContactPage() {
  return (
    <div className={zenDots.className}>
      {/* Hero Section */}
      <section className="section section-hero">
        <h1>Contact NBR Karting</h1>
        <p className="lead">Let's Talk Racing</p>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="contact-grid">
          <div className="contact-card">
            <h3><FaLocationDot style={{marginRight: '0.5rem', display: 'inline'}} /> Team Headquarters</h3>
            <p>3 Wonderboom</p>
            <p>Randburg, South Africa</p>
          </div>
          <div className="contact-card">
            <h3><FaEnvelope style={{marginRight: '0.5rem', display: 'inline'}} /> Email</h3>
            <p><a href="mailto:info@nbrkarting.co.za" className="accent-red">info@nbrkarting.co.za</a></p>
            <p style={{fontSize: '0.9rem', opacity: '0.8'}}>For general inquiries and membership questions</p>
          </div>
          <div className="contact-card">
            <h3><FaFlagCheckered style={{marginRight: '0.5rem', display: 'inline'}} /> Primary Base</h3>
            <p>Zwartkops Kart Circuit</p>
            <p style={{fontSize: '0.9rem', opacity: '0.8'}}>Team facilities and training headquarters</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section section-dark">
        <h2>Send us a Message</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject...</option>
                <option value="membership">Membership Inquiry</option>
                <option value="coaching">Driver Development & Coaching</option>
                <option value="race-system">Race System Details</option>
                <option value="sponsorship">Sponsorship Inquiry</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
          <div className="contact-info-box">
            <h4>Quick Response Times</h4>
            <p style={{fontSize:'0.95rem'}}>We typically respond to inquiries within 24-72 hours during business days.</p>
            <h4 style={{marginTop: '1.5rem'}}>What We're Looking For</h4>
            <ul style={{paddingLeft: '1.5rem', fontSize:'0.95rem'}}>
              <li>Aspiring drivers ready to commit to development</li>
              <li>Racing enthusiasts interested in our programs</li>
              <li>Potential sponsors and partners</li>
              <li>Media and press inquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How do I apply to join NBR?</h4>
            <p>Contact us with your racing background and goals. We'll discuss membership options and create a development plan tailored to your needs.</p>
          </div>
          <div className="faq-item">
            <h4>What age can drivers join?</h4>
            <p>We work with drivers from junior categories through senior levels. Age requirements depend on the racing category (Rotax, Rok, F-series).</p>
          </div>
          <div className="faq-item">
            <h4>Can I visit the facility?</h4>
            <p>Yes! We welcome visits to Zwartkops Kart Circuit. Contact us to arrange a time that works best.</p>
          </div>
          <div className="faq-item">
            <h4>Do you work with sponsors?</h4>
            <p>Absolutely. We have multiple drivers at different sponsorship levels. Let's discuss what sponsorship opportunities might work for you.</p>
          </div>
          <div className="faq-item">
            <h4>What about international racing?</h4>
            <p>Members have access to international opportunities through our partnerships in Europe and USA. This is discussed during your consultation.</p>
          </div>
          <div className="faq-item">
            <h4>How can media reach us?</h4>
            <p>For press inquiries, race reports, or media features, reach out via email and we'll connect you with the right person on our team.</p>
          </div>
        </div>
      </section>

      {/* Social / CTA */}
      <section className="section">
        <div className="cta-container">
          <h2>Ready to Take the Next Step?</h2>
          <p>Whether you're an aspiring driver, sponsor, or just want to learn more about NBR Karting - we'd love to hear from you.</p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center'}}>
            <a href="mailto:info@nbrkarting.co.za" className="btn btn-primary">Email Us Now</a>
            <a href="/membership" className="btn btn-ghost">View Membership</a>
          </div>
        </div>
      </section>
    </div>
  );
}
