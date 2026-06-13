"use client";
import { fadeUp } from "@/lib/animations";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  MoveRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "General Inquiry",
  "Apartment Booking",
  "Long-Term Stay",
  "Corporate Booking",
  "Airport Pickup",
  "Feedback",
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Physical Address",
    value: "Area 47, Lilongwe\nMalawi",
  },
  {
    icon: Clock,
    label: "Lodge Operations",
    value: "Front Desk: 24/7 Available\nCheck-in: 14:00 | Check-out: 10:00",
  },
  {
    icon: Phone,
    label: "Reservations",
    value: "+265 999 000 000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@2ntapartments.com",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Contact" }]} />
      </div>

      {/* ═══════════════════════════════════
          PAGE HEADER
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6 leading-tight">
              Let's Get You Settled In.
            </h1>
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
              Whether you're booking a short stay, a longer relocation, or a
              corporate stay in Lilongwe, our team is here to help with every
              detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CONTACT GRID
      ═══════════════════════════════════ */}
      <section className="pb-20 md:pb-32 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

            {/* Left — Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="md:col-span-7"
            >
              <div className="bg-surface border border-outline-variant/30 p-8 md:p-12">
                <h2 className="font-display text-2xl md:text-3xl text-primary mb-8">
                  Send an Enquiry
                </h2>

                {/* Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl text-primary mb-3">
                      Message Sent
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
                      Thank you for reaching out. Our team will respond within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-secondary border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                          Full Name *
                        </label>
                        <input
                          {...register("fullName")}
                          type="text"
                          placeholder="John Banda"
                          className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                            errors.fullName
                              ? "border-red-400"
                              : "border-outline-variant/50"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="flex items-center gap-1 font-body text-xs text-red-500">
                            <AlertCircle size={12} />
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="hello@example.com"
                          className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                            errors.email
                              ? "border-red-400"
                              : "border-outline-variant/50"
                          }`}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 font-body text-xs text-red-500">
                            <AlertCircle size={12} />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Subject *
                      </label>
                      <select
                        {...register("subject")}
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.subject
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Your Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="How can we help with your stay?"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none ${
                          errors.message
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-body text-xs font-semibold tracking-[0.25em] uppercase py-4 hover:bg-primary-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "SEND MESSAGE"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="md:col-span-5 space-y-4"
            >
              {/* Contact Details */}
              <div className="bg-surface border border-outline-variant/30 p-8">
                <h3 className="font-display text-xl text-primary mb-6">
                  Our Location
                </h3>
                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4 items-start">
                      <detail.icon
                        size={18}
                        className="text-secondary shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="font-body text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                          {detail.label}
                        </p>
                        <p className="font-body text-sm text-on-surface-variant whitespace-pre-line leading-relaxed">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              
              <a
                href="https://wa.me/265999000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-secondary text-white p-5 hover:bg-secondary/90 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={20} />
                  <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                    WhatsApp Support
                  </span>
                </div>
                <MoveRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

<a
              
                href="tel:+265999000000"
                className="flex items-center justify-between bg-primary text-white p-5 hover:bg-primary-light transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <Phone size={20} />
                  <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                    Call Reservations
                  </span>
                </div>
                <MoveRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="mailto:info@2ntapartments.com"
                className="flex items-center justify-between border border-outline-variant/50 text-on-surface-variant p-5 hover:border-primary hover:text-primary transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Mail size={20} />
                  <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                    Email Us
                  </span>
                </div>
                <MoveRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Map */}
              <a
                href="https://maps.google.com/?q=Lilongwe,Malawi"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-52 overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
                  alt="Lilongwe, Malawi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-5 py-2.5 flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                      View on Google Maps
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          INFO STRIP
      ═══════════════════════════════════ */}
      <section className="bg-primary py-14 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-3">
                Address
              </p>
              <p className="font-display text-lg text-white mb-2">
                Area 47
              </p>
              <p className="font-body text-sm text-white/60">
                Lilongwe, Malawi
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-3">
                Hours
              </p>
              <p className="font-display text-lg text-white mb-2">
                24/7 Front Desk
              </p>
              <p className="font-body text-sm text-white/60">
                Check-in: 14:00 · Check-out: 10:00
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-3">
                Reservations
              </p>
              <p className="font-display text-lg text-white mb-2">
                +265 999 000 000
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-[0.15em] uppercase text-secondary-light hover:text-white transition-colors"
              >
                Book Online <MoveRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}