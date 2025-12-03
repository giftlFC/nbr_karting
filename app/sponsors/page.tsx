import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function SponsorsPage() {
  return (
    <div className={`section ${zenDots.className}`}>
      <h2>Sponsors & Partners</h2>
      <div style={{marginBottom: '2rem', position: 'relative', width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden'}}>
        <Image
          src="/images/placeholder-sponsors.jpg"
          alt="NBR Racing Partners and Sponsors"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className="card">
        <ul>
          <li><strong>Sparco South Africa</strong> - Professional racewear and safety equipment</li>
          <li><strong>Green Sky Branding</strong> - Creative and marketing support</li>
          <li><strong>Q4 Fuel SA</strong> - Performance fuels</li>
          <li><strong>Laerskool Wierdapark</strong> - Supporting youth in motorsport</li>
        </ul>
      </div>
    </div>
  );
}
