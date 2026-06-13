"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Lodge", href: "/about" },
  { label: "Suites", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Only go transparent on homepage before scroll
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-[#fbfbe2]/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <nav className="flex items-center justify-between py-5">

            {/* Logo */}
            <Link
              href="/"
              className={`font-display text-sm tracking-[0.18em] uppercase font-bold transition-colors duration-300 shrink-0 ${
                isTransparent ? "text-white" : "text-primary"
              }`}
            >
              2NT APARTMENT LODGE
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 relative group ${
                    isTransparent
                      ? pathname === link.href
                        ? "text-secondary-light"
                        : "text-white/80 hover:text-white"
                      : pathname === link.href
                      ? "text-secondary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isTransparent ? "bg-white" : "bg-secondary"
                    } ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Book Now */}
            <div className="hidden md:flex items-center">
              <Link
                href="/booking"
                className={`font-body text-xs font-semibold tracking-[0.18em] uppercase px-6 py-2.5 transition-all duration-300 ${
                  isTransparent
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                BOOK NOW
              </Link>
            </div>

            {/* Mobile — Hamburger Only */}
            <button
              className={`md:hidden p-1 transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-primary"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-primary flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                <span className="font-display text-xs tracking-widest text-white uppercase">
                  MIKOMA BEACH LODGE
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col px-8 py-10 gap-8 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display text-2xl transition-colors ${
                        pathname === link.href
                          ? "text-secondary-light"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Book Now */}
              <div className="px-8 py-8 border-t border-white/10">
                <Link
                  href="/booking"
                  className="block w-full bg-white text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase text-center py-4 hover:bg-secondary-light transition-colors duration-300"
                >
                  BOOK NOW
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}