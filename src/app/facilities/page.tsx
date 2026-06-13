"use client";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  UtensilsCrossed,
  Users,
  Wifi,
  Car,
  Sparkles,
  Baby,
  Sailboat,
  CheckCircle2,
  MoveRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";


const featuredFacilities = [
  {
    id: "restaurant",
    category: "Dining",
    name: "Lakeshore Restaurant",
    description:
      "Experience the fusion of Malawian flavors and international culinary excellence. Our fine-dining venue prioritizes organic, local ingredients served against the backdrop of the shifting lake tides.",
    highlights: ["Organic Menu", "Private Terrace", "500+ Wine Selection"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    icon: UtensilsCrossed,
    large: true,
  },
  {
    id: "bar",
    category: "Social",
    name: "Sunset Bar",
    description:
      "Artisanal cocktails and panoramic vistas. The definitive spot for the golden hour ritual on the shores of Lake Malawi.",
    highlights: [],
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
    icon: Waves,
    large: false,
  },
  {
    id: "conference",
    category: "Business",
    name: "Conference Centre",
    description:
      "Versatile spaces designed for up to 80 guests, featuring state-of-the-art acoustics and seamless connectivity for high-stakes summits and corporate retreats.",
    highlights: [
      "Hybrid Meeting Tech",
      "Climate Controlled",
      "Specialised Catering",
    ],
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200",
    icon: Users,
    large: false,
  },
];

const allFacilities = [
  {
    icon: Waves,
    name: "Private Beach Access",
    description:
      "A private staircase leads directly to our secluded white-sand cove, maintained exclusively for lodge residents.",
  },
  {
    icon: Sparkles,
    name: "Wellness & Spa",
    description:
      "Rejuvenate with traditional Malawian treatments, massages, and holistic therapies in our serene lakeside spa.",
  },
  {
    icon: Sailboat,
    name: "Water Sports",
    description:
      "Kayaking, snorkelling, boat tours, and fishing excursions on Lake Malawi. Equipment and guides available daily.",
  },
  {
    icon: Wifi,
    name: "Free High-Speed WiFi",
    description:
      "Complimentary high-speed wireless internet available in all rooms, suites, and common areas throughout the lodge.",
  },
  {
    icon: Car,
    name: "Airport Transfers",
    description:
      "Comfortable and reliable transfers from Karonga Airport. Arrange your pickup when booking your stay.",
  },
  {
    icon: Baby,
    name: "Children's Play Area",
    description:
      "A safe and fun dedicated space for younger guests, so the whole family can relax and enjoy the lodge.",
  },
];

const conferenceFeatures = [
  "Up to 80 delegates",
  "Full AV equipment",
  "High-speed WiFi",
  "Dedicated catering",
  "Breakout rooms",
  "Lakeside setting",
];

export default function FacilitiesPage() {
  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Facilities" }]} />
      </div>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
            alt="Mikoma Beach Lodge Facilities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-5"
          >
            What We Offer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="font-display text-4xl md:text-6xl text-white leading-tight text-shadow mb-6"
          >
            World-Class Sanctuary
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Every detail at 2NT is curated to harmonize with the shores of
            Lake Malawi, offering refined spaces for gathering, dining, and
            repose.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FEATURED FACILITIES — BENTO GRID
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
              Signature Spaces
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Our Featured Facilities
            </h2>
          </motion.div>

          {/* Row 1 — Restaurant + Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Restaurant — Large */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-8 group bg-surface overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={featuredFacilities[0].image}
                  alt={featuredFacilities[0].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary">
                    {featuredFacilities[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
                  {featuredFacilities[0].name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  {featuredFacilities[0].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {featuredFacilities[0].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-secondary" />
                      <span className="font-body text-xs text-on-surface-variant">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sunset Bar — Small */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group bg-surface overflow-hidden flex flex-col"
            >
              <div className="relative flex-1 min-h-[240px] overflow-hidden">
                <Image
                  src={featuredFacilities[1].image}
                  alt={featuredFacilities[1].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary">
                    {featuredFacilities[1].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl md:text-2xl text-primary mb-3">
                  {featuredFacilities[1].name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {featuredFacilities[1].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2 — Conference + Beach + Parking */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Conference */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 group bg-surface overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={featuredFacilities[2].image}
                  alt={featuredFacilities[2].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary">
                    {featuredFacilities[2].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl text-primary mb-3">
                  {featuredFacilities[2].name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
                  {featuredFacilities[2].description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {featuredFacilities[2].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-secondary shrink-0" />
                      <span className="font-body text-xs text-on-surface-variant">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Beach Access */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-primary p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                  <Waves size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl text-white mb-4">
                  Private Beach Access
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  A private staircase leads directly to our secluded
                  white-sand cove, maintained exclusively for lodge residents.
                </p>
              </div>
              <div className="mt-8 relative h-36 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
                  alt="Private beach"
                  fill
                  className="object-cover opacity-60"
                />
              </div>
            </motion.div>

            {/* Security / Parking */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-surface border border-outline-variant/30 p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-surface-high flex items-center justify-center mb-6">
                  <Car size={24} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl text-primary mb-4">
                  Secure Parking
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  24/7 monitored valet and guest parking, ensuring total peace
                  of mind throughout your stay.
                </p>
              </div>
              <div className="mt-8 bg-surface-high p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant/60">
                    Status
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>
                <p className="font-display text-base text-primary">
                  Active Surveillance
                </p>
                <p className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant mt-1">
                  Valet Service Included
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          ALL FACILITIES GRID
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-surface px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
              Everything Included
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              All Lodge Facilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {allFacilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface p-8 md:p-10 group hover:bg-primary transition-colors duration-500"
              >
                <div className="w-12 h-12 bg-surface-high flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                  <facility.icon
                    size={22}
                    className="text-secondary group-hover:text-accent transition-colors duration-500"
                  />
                </div>
                <h3 className="font-display text-lg text-primary group-hover:text-white mb-3 transition-colors duration-500">
                  {facility.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CONFERENCE ENQUIRY STRIP
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-5 md:px-16 bg-surface-high">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                Corporate & Events
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-5">
                Planning a Conference or Event?
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                Our dedicated events team will craft a bespoke experience for
                your corporate retreat, conference, or private celebration.
                Catering, AV, accommodation and lakeside activities — all in
                one place.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {conferenceFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-on-surface-variant"
                  >
                    <CheckCircle2 size={14} className="text-secondary shrink-0" />
                    <span className="font-body text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 flex flex-col gap-4"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800"
                  alt="Conference facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-body text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-primary-light transition-colors duration-300"
              >
                Enquire About Events <MoveRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
            alt="Lake Malawi"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent">
              Your Lakeside Sanctuary
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
              Experience Every Facility First-Hand
            </h2>
            <p className="font-body text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Book your stay today and discover why 2NT Lodge is
              Malawi's finest retreat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-accent text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-all duration-300"
              >
                Reserve Your Stay <MoveRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white text-white font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}