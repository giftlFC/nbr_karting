'use client';

import Link from "next/link";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import { useState } from "react";

const zenDots = Zen_Dots({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team-culture", label: "Team Culture" },
    { href: "/race-system", label: "Race System" },
    { href: "/driver-development", label: "Driver Dev" },
    { href: "/membership", label: "Membership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${zenDots.className}`}>
      <div className="flex items-center justify-between w-full">
        <div className="site-logo flex-shrink-0">
          <Image 
            src="/logo/NBR Logo 2022.png" 
            alt="NBR Racing Logo" 
            width={200} 
            height={140}
            className="w-32 sm:w-40 md:w-52 h-auto"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav 
          className={`${zenDots.className} hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-row`} 
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              className="text-lg lg:text-2xl hover:text-opacity-80 transition-opacity whitespace-nowrap" 
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          className={`${zenDots.className} md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-opacity-20`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-lg hover:text-opacity-80 transition-opacity py-2 px-4"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
