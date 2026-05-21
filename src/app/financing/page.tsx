import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Flexible roofing financing options from Lionz Roofing. Get the roof you need now and pay over time.",
};

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-lionzNavy section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lionzGold mb-4">
            Financing Options
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Flexible payment options to get your roof done — coming soon.
          </p>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
