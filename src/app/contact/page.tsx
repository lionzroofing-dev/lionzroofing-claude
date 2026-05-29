"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
declare global {
  interface Window {
    grecaptcha: { getResponse: () => string; reset: () => void };
  }
}

export default function ContactPage() {
  const heroImg = "/images/contact/hero.jpg";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const recaptchaToken = window.grecaptcha?.getResponse() ?? "";

    const payload = {
      firstName:      data.get("firstName"),
      lastName:       data.get("lastName"),
      phone:          data.get("phone"),
      email:          data.get("email"),
      service:        data.get("service"),
      location:       data.get("location"),
      message:        data.get("message"),
      smsConsent:     data.get("smsConsent") === "on",
      recaptchaToken,
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed.");
      setStatus("success");
      formRef.current?.reset();
      window.grecaptcha?.reset();
    } catch (err) {
      clearTimeout(timeout);
      setStatus("error");
      if (err instanceof Error && err.name === "AbortError") {
        setErrorMsg("Request timed out. Please try again or call us directly.");
      } else {
        setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      }
    }
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <Header />
      <main>
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Contact <span className="text-lionzGold">Us</span>
            </h1>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="rounded-2xl overflow-hidden mb-6 h-52 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3!2d-80.1765!3d26.1612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9009c4a1b6f0d%3A0x1!2s5200+NW+33rd+Ave+Suite+200%2C+Fort+Lauderdale%2C+FL+33309!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lionz Roofing location"
                />
              </div>

              <h2 className="text-2xl font-extrabold text-lionzNavy mb-6">Get In Touch</h2>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Address</p>
                    <a
                      href="https://www.google.com/maps?q=5200+NW+33rd+Ave+Suite+200,+Fort+Lauderdale,+FL+33309"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-lionzGold transition-colors"
                    >
                      5200 NW 33rd Ave Suite 200<br />Fort Lauderdale, FL 33309
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Email</p>
                    <a href="mailto:contact@lionzroofing.com" className="text-gray-600 hover:text-lionzGold transition-colors">
                      contact@lionzroofing.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Phone</p>
                    <a href="tel:(954) 637-6835" className="text-gray-600 hover:text-lionzGold transition-colors">
                      (954) 637-6835
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Working Hours</p>
                    <p className="text-gray-600">Monday – Friday: 9:00am – 5:00pm</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-lionzLight rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-lionzNavy mb-6">Request a Free Quote</h2>

              {/* Success state */}
              {status === "success" && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-800">Request Sent!</p>
                    <p className="text-green-700 text-sm">Thank you! We&apos;ll be in touch within 1 business day.</p>
                  </div>
                </div>
              )}

              {/* Error state */}
              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800">Submission Failed</p>
                    <p className="text-red-700 text-sm">{errorMsg || "Please try again or call us directly."}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Location */}
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">
                    Enter A Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" name="location" required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                  />
                </div>

                {/* First / Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="firstName" required placeholder="First Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="lastName" required placeholder="Last Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                    />
                  </div>
                </div>

                {/* Phone / Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel" name="phone" required placeholder="Phone"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" name="email" required placeholder="Email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">Select Your Service</label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Commercial Roofing">Commercial Roofing</option>
                    <option value="Residential Roofing">Residential Roofing</option>
                    <option value="Roof Repair">Roof Repair</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">Message</label>
                  <textarea
                    name="message" rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white resize-none"
                  />
                </div>

                {/* SMS Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="smsConsent" className="mt-0.5 shrink-0 accent-lionzGold" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    By checking this box, you agree to receive transaction messages from Lionz Roofing. Text and data rates may apply. Message frequency varies. Reply STOP to unsubscribe or HELP for help.
                  </span>
                </label>

                {/* Privacy / Terms Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="termsConsent" required className="mt-0.5 shrink-0 accent-lionzGold" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    By checking I accept{" "}
                    <Link href="/privacy-policy" className="font-bold text-lionzNavy hover:text-lionzGold transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-and-conditions" className="font-bold text-lionzNavy hover:text-lionzGold transition-colors">
                      Terms &amp; Conditions
                    </Link>.
                  </span>
                </label>

                {/* reCAPTCHA */}
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary text-center justify-center flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : "Send My Request"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
