import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lionz Roofing",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-extrabold text-lionzDark mb-6">Terms &amp; Conditions</h1>
        <p className="text-gray-600">Terms and conditions content coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
