import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveImage } from "@/lib/resolveImage";

export const metadata: Metadata = {
  title: "Privacy Policy | Lionz Roofing",
  description:
    "Read Lionz Roofing's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const heroImg = resolveImage("privacy-policy", "hero");

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
              <span className="text-lionzGold">Privacy</span>{" "}
              <span className="text-white">Policy</span>
            </h1>
          </div>
        </section>

        {/* ── Policy Content ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 mb-6 font-semibold">
              Last Updated: August 11, 2025
            </p>

            <h2 className="text-3xl font-extrabold text-lionzDark mb-6">
              Privacy Policy
            </h2>

            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Introduction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to Lionz Roofing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We value your
                privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use,
                and protect your information when you visit our website,{" "}
                <span className="font-bold">lionzroofing.com</span> (the
                &ldquo;Site&rdquo;), or interact with us via phone, SMS, or other
                communication channels. By using our Site, you agree to the
                terms of this Privacy Policy. If you do not agree, please do
                not use the Site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Information We Collect
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We may collect information from you in the following ways:
              </p>
              <ol className="list-decimal list-outside ml-5 space-y-3 text-gray-600 text-sm">
                <li>
                  <span className="font-bold text-lionzDark">
                    Personal Data
                  </span>
                  <br />
                  Information you voluntarily provide, such as your name,
                  address, email address, telephone number, and other contact
                  details when you register, request a service, or fill out
                  forms.
                </li>
                <li>
                  <span className="font-bold text-lionzDark">
                    Derivative Data
                  </span>
                  <br />
                  Information automatically collected when you visit our Site,
                  such as your IP address, browser type, operating system,
                  access times, and referring website pages.
                </li>
                <li>
                  <span className="font-bold text-lionzDark">
                    Financial Data
                  </span>
                  <br />
                  Payment details (e.g., credit card number, expiration date)
                  when you purchase or request services.
                </li>
                <li>
                  <span className="font-bold text-lionzDark">
                    Mobile Device Data
                  </span>
                  <br />
                  Information about your mobile device, such as device ID,
                  model, manufacturer, and location if you access our Site from
                  a mobile device.
                </li>
              </ol>
            </div>

            {/* Use of Your Information */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Use of Your Information
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 text-sm">
                <li>Provide and manage our services.</li>
                <li>Process payments and send confirmations.</li>
                <li>
                  Communicate with you regarding services, updates, promotions,
                  and offers (with your consent where required by law).
                </li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Improve our Site, services, and user experience.</li>
                <li>Ensure compliance with legal obligations.</li>
              </ul>
            </div>

            {/* SMS Communications & Consent */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                SMS Communications &amp; Consent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                If you choose to receive SMS communications from us, we will
                only send messages to users who have explicitly opted in to
                receive them. You can opt out at any time by replying STOP.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-bold">
                SMS messages are only sent after the customer confirms their
                subscription via a double opt-in message.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                We do not share, sell, rent, or trade mobile opt-in information
                with third parties or affiliates for any purpose.
              </p>
              <p className="text-sm font-bold text-lionzDark">
                We do not share, sell, rent, or trade mobile opt-in information
                with third parties or affiliates for any purpose.
              </p>
            </div>

            {/* Disclosure of Your Information */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Disclosure of Your Information
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                We may disclose information in the following situations:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 text-sm mb-4">
                <li>
                  <span className="font-bold text-lionzDark">
                    Legal Requirements
                  </span>{" "}
                  &ndash; When required by law or to protect our rights and
                  safety.
                </li>
                <li>
                  <span className="font-bold text-lionzDark">
                    Business Transfers
                  </span>{" "}
                  &ndash; In the event of a merger, acquisition, or sale of
                  assets.
                </li>
                <li>
                  <span className="font-bold text-lionzDark">
                    Service Providers
                  </span>{" "}
                  &ndash; To trusted vendors who assist in providing our
                  services (e.g., payment processors, hosting providers), under
                  strict confidentiality agreements.
                </li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                We <span className="font-bold">do not</span> disclose mobile
                phone numbers or SMS opt-in data to third parties for marketing
                or any unrelated purposes.
              </p>
            </div>

            {/* Security */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Security of Your Information
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use reasonable administrative, technical, and physical
                safeguards to protect your information. However, no method of
                transmission or storage is 100% secure.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Children&apos;s Privacy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We do not knowingly collect information from children under the
                age of 13. If such information is collected inadvertently, we
                will delete it immediately.
              </p>
            </div>

            {/* Changes */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Changes to This Privacy Policy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. The latest
                version will always be posted on our Site with the &ldquo;Last
                Updated&rdquo; date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-lionzDark mb-3">
                Contact Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="font-bold text-lionzDark text-sm mb-2">
                Lionz Roofing
              </p>
              <a
                href="mailto:contact@lionzroofing.com"
                className="text-lionzGold text-sm font-medium hover:underline block mb-1"
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
