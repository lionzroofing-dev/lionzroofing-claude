import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lionz Roofing",
  description:
    "Read Lionz Roofing's Terms & Conditions to understand your rights and responsibilities when using our roofing services and website.",
};

export default function TermsAndConditionsPage() {
  const heroImg = resolveImage("terms-and-conditions", "hero");

  return (
    <>
      <Header />
      <main>
        {/* ── Hero Banner ── */}
        <section className="relative h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-lionzDark/70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-lionzGold">Terms &amp;</span>{" "}
              <span className="text-white">Conditions</span>
            </h1>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Effective Date:</span> August 11, 2025
            </p>
            <p className="text-sm text-gray-600 mb-10">
              Please review our{" "}
              <Link href="/privacy-policy" className="text-lionzGold hover:underline font-medium">
                Privacy Policy
              </Link>{" "}
              for details on how we collect and use your personal information.
            </p>

            {/* 1. Agreement to Terms */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                By accessing or using the services of{" "}
                <span className="font-bold">Lionz Roofing</span> (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including our website{" "}
                <span className="font-bold">lionzroofing.com</span> (the &ldquo;Site&rdquo;)
                and our SMS messaging services, you agree to be bound by these
                Terms &amp; Conditions and our Privacy Policy. If you do not
                agree, do not use our services.
              </p>
            </div>

            {/* 2. Services Provided */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                2. Services Provided
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide roofing-related services, including inspections,
                repairs, installations, and customer communications through
                phone, email, and SMS messaging.
              </p>
            </div>

            {/* 3. SMS Messaging Terms */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                3. SMS Messaging Terms
              </h2>

              <div className="mb-5">
                <h3 className="text-sm font-bold text-lionzDark mb-2">
                  3.1 Consent to Receive Messages
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  By providing your mobile number and opting in (verbally,
                  online, or in writing), you consent to receive SMS/text
                  messages from Lionz Roofing regarding your services,
                  appointments, promotions, and updates.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-bold text-lionzDark mb-2">
                  3.2 Message Frequency
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Message frequency varies and may include multiple messages per
                  month depending on your service needs.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-bold text-lionzDark mb-2">
                  3.3 Opt-Out Instructions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You may opt out at any time by replying{" "}
                  <span className="font-bold">STOP</span> to any message. You
                  may also reply <span className="font-bold">HELP</span> for
                  support or contact us directly using the details below.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-bold text-lionzDark mb-2">
                  3.4 Message &amp; Data Rates
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Message and data rates may apply. Please consult your mobile
                  carrier for details on applicable charges.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-bold text-lionzDark mb-2">
                  3.5 No Sharing of Opt-In Data
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We{" "}
                  <span className="font-bold">
                    do not share, sell, rent, or trade mobile opt-in information
                    with third parties or affiliates for any purpose.
                  </span>
                </p>
              </div>
            </div>

            {/* 4. User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                4. User Responsibilities
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                You agree to provide accurate information when interacting with
                us and to use our services only for lawful purposes.
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are not liable for any damages arising from the use of our
                services, except as required by law. Services are provided
                &ldquo;as is&rdquo; without warranties of any kind.
              </p>
            </div>

            {/* 6. Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                6. Changes to Terms
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may update these Terms &amp; Conditions from time to time.
                The latest version will always be posted on this page with the
                &ldquo;Effective Date.&rdquo; Continued use of our services after
                changes means you accept the updated terms.
              </p>
            </div>

            {/* 7. Contact Us */}
            <div className="mb-8">
              <h2 className="text-base font-bold text-lionzDark mb-3">
                7. Contact Us
              </h2>
              <a
                href="mailto:contact@lionzroofing.com"
                className="text-lionzGold text-sm font-medium hover:underline block mb-2"
              >
                contact@lionzroofing.com
              </a>
              <a
                href="tel:9546376835"
                className="text-lionzDark text-sm font-bold hover:text-lionzGold transition-colors"
              >
                (954) 637-6835
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
