import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse completed roofing projects by Lionz Roofing — residential and commercial work across Fort Lauderdale and South Florida.",
};

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `Roofing project ${i + 1} by Lionz Roofing in South Florida`,
}));

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-lionzNavy section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lionzGold mb-4">
            Our Work
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A look at our latest residential and commercial roofing projects
            across South Florida.
          </p>
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle label="Portfolio" title="Recent Projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl aspect-square bg-gray-200 group cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img.src}')` }}
                    role="img"
                    aria-label={img.alt}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium bg-gray-200">
                    Photo {i + 1}
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
