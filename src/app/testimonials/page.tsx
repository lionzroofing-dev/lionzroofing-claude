import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what customers say about Lionz Roofing. Trusted by homeowners and businesses across Fort Lauderdale and South Florida.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-lionzNavy section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lionzGold mb-4">
            Customer Reviews
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by homeowners and businesses across South Florida.
          </p>
        </section>
        <section className="section-padding bg-lionzLight">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              label="What Clients Say"
              title="Real Reviews From Real Customers"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-7 shadow-md border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-lionzGold fill-lionzGold"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-lionzNavy font-bold">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
