import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what customers say about Lionz Roofing. Trusted by homeowners and businesses across Fort Lauderdale and South Florida.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
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
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              label="Google Reviews"
              title="See What Our Customers Are Saying"
            />
            <div
              className="elfsight-app-74ada3ac-ad98-42a9-83f6-3e023b25ba97"
              data-elfsight-app-lazy
            />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
