import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact Lionz Roofing — Free Roofing Estimate",
  description:
    "Contact Lionz Roofing for a free roofing estimate in Fort Lauderdale and South Florida. Call, email, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-lionzNavy section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lionzGold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready for a free estimate? Reach out and we&apos;ll get back to you fast.
          </p>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-lionzNavy mb-6">
                Get In Touch
              </h2>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Address</p>
                    <p className="text-gray-600">
                      5200 NW 33rd Ave Suite 200
                      <br />
                      Fort Lauderdale, FL 33309
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Phone</p>
                    <a
                      href="tel:(954) 637-6835"
                      className="text-gray-600 hover:text-lionzGold transition-colors"
                    >
                      (954) 637-6835
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-lionzGold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lionzNavy">Email</p>
                    <a
                      href="mailto:contact@lionzroofing.com"
                      className="text-gray-600 hover:text-lionzGold transition-colors"
                    >
                      contact@lionzroofing.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-lionzLight rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-lionzNavy mb-6">
                Request a Free Quote
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-lionzNavy mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(954) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Roof Repair</option>
                    <option>Roof Replacement</option>
                    <option>Residential Roofing</option>
                    <option>Commercial Roofing</option>
                    <option>Storm Damage</option>
                    <option>Roof Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-lionzNavy mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your roofing project..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lionzGold resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full text-center justify-center">
                  Send My Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
