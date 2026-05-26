import Button from "./Button";
import { resolveImage } from "@/lib/resolveImage";

export default function Hero() {
  const heroRoof = resolveImage("hero", "hero-roof");
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-lionzDark"
      style={{
        backgroundImage: `url('${heroRoof}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-lionzDark/75" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-lionzGold leading-tight mb-6">
          <span className="block text-white text-xl md:text-2xl font-bold mb-3 opacity-80 tracking-wide">
            Fort Lauderdale Roofing Contractors
          </span>
          We&apos;ve Got You
          <br />
          <span className="text-white">Under Our Roof</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional roofing services for residential and commercial
          properties across South Florida. Licensed, insured, and ready to
          protect what matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary" className="text-lg px-10 py-4">
            Get Your Free Quote
          </Button>
          <Button href="tel:(954) 637-6835" variant="outline" className="text-lg px-10 py-4">
            Call Us Now
          </Button>
        </div>
      </div>

    </section>
  );
}
