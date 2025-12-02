import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-logo">
        <Image 
          src="/logo/NBR logo 2.jpg" 
          alt="NBR Racing Logo" 
          width={50} 
          height={50}
          style={{ objectFit: "contain" }}
        />
        <div>
          <div style={{fontSize:14}}>NBR Racing</div>
          <div style={{fontSize:12, opacity:.7}}>Team - Randburg</div>
        </div>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/team-culture">Team Culture</Link>
        <Link href="/race-system">Race System</Link>
        <Link href="/driver-development">Driver Dev</Link>
        <Link href="/membership">Membership</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
