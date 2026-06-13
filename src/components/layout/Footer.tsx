import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Apartments", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
];

const quickLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Book a Stay", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      {/* Gold Accent Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            {/* Logo */}
            <Link href="/" className="block">
              <span className="font-display text-xl tracking-[0.2em] uppercase text-white block">
                2NT
              </span>
              <span className="font-display text-xl tracking-[0.2em] uppercase text-accent block">
                APARTMENTS LODGE
              </span>
            </Link>

            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Modern, fully furnished apartments in a secure compound in the
              heart of Lilongwe — your comfortable home away from home.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Twitter"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4l16 16M4 20L20 4"/>
                  <path d="M20 4 4 20M4 4l16 16" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/60">
                  Area 47, Lilongwe, Malawi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                <span className="font-body text-sm text-white/60">
                  +265 999 000 000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                <span className="font-body text-sm text-white/60">
                  info@2ntapartments.com
                </span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2 md:col-start-6 space-y-6">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Explore
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-300 relative group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-300 relative group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 md:col-start-10 space-y-6">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Newsletter
            </h4>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Stay updated with exclusive offers and availability at 2NT
              Apartments Lodge.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/15 text-white placeholder:text-white/30 font-body text-sm px-4 py-3 w-full focus:outline-none focus:border-accent transition-colors"
              />
              <button className="w-full bg-accent text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase py-3 hover:bg-accent/90 transition-colors duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-6 pb-24 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-white/30">
            © 2026 2NT Apartments Lodge. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            Lilongwe, Malawi
          </p>
        </div>
      </div>
    </footer>
  );
}