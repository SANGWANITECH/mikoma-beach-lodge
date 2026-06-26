import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Conference", href: "/conference" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      {/* Accent Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="block">
              <span className="font-display text-xl tracking-[0.2em] uppercase text-white block">
                MPHATSO
              </span>
              <span className="font-display text-xl tracking-[0.2em] uppercase text-accent block">
                MOTEL
              </span>
            </Link>

            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Your comfortable stop along the M1 Road in Mzuzu — clean rooms,
              conference facilities, and warm Malawian hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
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
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/60">
                  Along M1 Road, Chiwanja, Mzuzu P.O. Box 895
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                <span className="font-body text-sm text-white/60">
                  098 35 78 271
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={15} className="text-accent shrink-0" />
                <span className="font-body text-sm text-white/60">
                  089 22 59 165 (WhatsApp)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                <span className="font-body text-sm text-white/60">
                  mphatsomotel@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Page Links */}
          <div className="md:col-span-2 md:col-start-6 space-y-6">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Navigate
            </h4>
            <ul className="space-y-4">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Actions */}
          <div className="md:col-span-4 md:col-start-9 space-y-6">
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Make a Booking
            </h4>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              To reserve a room or conference hall, contact us directly via
              call or WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              
                href="tel:+265983578271"
                className="flex items-center justify-center gap-3 bg-accent text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase py-3 hover:bg-accent/90 transition-colors duration-300"
              >
                <Phone size={14} />
                CALL TO BOOK
              </a>
              
                href="https://wa.me/265892259165"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-white/20 text-white font-body text-xs font-semibold tracking-[0.2em] uppercase py-3 hover:bg-white/10 transition-colors duration-300"
              >
                <MessageCircle size={14} />
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-6 pb-24 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-white/30">
            © 2026 Mphatso Motel. All Rights Reserved.
          </p>
          
            href="https://ram-techs.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/30 hover:text-accent transition-colors duration-300"
          >
            Designed & Developed by RamTech
          </a>
        </div>
      </div>
    </footer>
  );
}
