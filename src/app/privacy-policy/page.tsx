import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Lionz Roofing",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-extrabold text-lionzDark mb-6">Privacy Policy</h1>
        <p className="text-gray-600">Privacy policy content coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
