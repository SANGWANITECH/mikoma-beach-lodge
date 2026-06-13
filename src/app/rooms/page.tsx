"use client";
import { fadeUp } from "@/lib/animations";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Maximize2,
  Users,
  MoveRight,
  CheckCircle2,
} from "lucide-react";
import { rooms } from "@/data/rooms";
import { Room } from "@/types";
import Breadcrumb from "@/components/ui/Breadcrumb";

const categories = ["All", "Standard", "Deluxe", "Executive", "Family"];


export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered: Room[] =
    activeCategory === "All"
      ? rooms
      : rooms.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Suites" }]} />
      </div>

      {/* ═══════════════════════════════════
          PAGE HERO
      ═══════════════════════════════════ */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-16 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto text-center border-b border-outline-variant/30 pb-12 md:pb-16">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4"
          >
            Accommodation
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-primary mb-6"
          >
            The Sanctuary
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Discover a collection of refined living spaces, each meticulously
            crafted to merge contemporary luxury with the raw beauty of 2NT
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FILTER BAR
      ═══════════════════════════════════ */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant/20 py-4 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-6 py-2 font-body text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto shrink-0 hidden md:flex items-center gap-2 text-on-surface-variant">
            <span className="font-body text-xs tracking-wider">
              {filtered.length}{" "}
              {filtered.length === 1 ? "room" : "rooms"} available
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          ROOMS GRID
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-primary mb-3">
                No rooms found
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {filtered.map((room, i) => (
                <motion.div
                  key={room.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col bg-surface overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-[280px] md:h-[360px] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {room.featured && (
                        <span className="bg-accent text-primary font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1">
                          FEATURED
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-primary font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1">
                        {room.category}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 text-right">
                      <span className="font-body text-[10px] text-white/70 block tracking-wider uppercase">
                        From
                      </span>
                      <span className="font-display text-base text-white">
                        MK {room.price.toLocaleString()}
                      </span>
                      <span className="font-body text-[10px] text-white/70">
                        /night
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow border border-t-0 border-outline-variant/30">
                    {/* Name */}
                    <h2 className="font-display text-xl md:text-2xl text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                      {room.name}
                    </h2>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-5 text-on-surface-variant">
                      <span className="flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase">
                        <Users size={13} />
                        {room.maxGuests} Guests
                      </span>
                      <span className="flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase">
                        <Maximize2 size={13} />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase">
                        <BedDouble size={13} />
                        {room.bedType}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-2">
                      {room.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {room.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-on-surface-variant"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-secondary shrink-0"
                          />
                          <span className="font-body text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex gap-3">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="flex-1 bg-primary text-white font-body text-xs font-semibold tracking-[0.15em] uppercase py-4 text-center hover:bg-primary-light transition-colors duration-300"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/booking?room=${room.slug}`}
                        className="flex-1 border border-primary text-primary font-body text-xs font-semibold tracking-[0.15em] uppercase py-4 text-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════ */}
      <section className="bg-primary py-12 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-2">
              Need Help Choosing?
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white">
              Can't decide? Talk to us.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-accent hover:text-white transition-all duration-300 shrink-0"
          >
            Contact Our Team <MoveRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}