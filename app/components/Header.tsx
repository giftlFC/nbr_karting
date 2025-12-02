import Link from "next/link";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({ weight: "400", subsets: ["latin"] });

export default function Header() {


  return (
    <header className={`site-header ${zenDots.className}`}>
      <div className="site-logo">
        <Image 
          src="/logo/NBR Logo 2022.png" 
          alt="NBR Racing Logo" 
          width={300} 
          height={200}
          style={{ objectFit: "contain" }}
        />
        <div>
     
         
        </div>
      </div>

      <nav className={` ${zenDots.className}    w-full items-center justify-center gap-8 flex flex-row`} aria-label="Main navigation">
        <Link className="text-2xl" href="/">Home</Link>
        <Link className="text-2xl" href="/about">About</Link>
        <Link className="text-2xl" href="/team-culture">Team Culture</Link>
        <Link className="text-2xl" href="/race-system">Race System</Link>
        <Link className="text-2xl" href="/driver-development">Driver Dev</Link>
        <Link className="text-2xl" href="/membership">Membership</Link>
        <Link className="text-2xl" href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
