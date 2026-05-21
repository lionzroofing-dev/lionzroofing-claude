import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Share2,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogContent } from "@/data/blogContent";
import { blogPosts } from "@/data/blogPosts";

function FacebookIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return blogContent.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!post || !meta || post.blocks.length === 0) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const COMPANY = {
    facebook: "https://www.facebook.com/LionzRoofing/",
    tiktok: "https://www.tiktok.com/@lionzroofing",
    instagram: "https://www.instagram.com/lionzroofing",
    whatsapp: "https://wa.me/19546376835",
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero — cover image with dark overlay */}
        <section className="relative h-[320px] md:h-[400px] overflow-hidden bg-lionzNavy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meta.image}
            alt={post.heroTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lionzDark/60" />
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight text-center max-w-3xl">
              {post.heroTitle}
            </h1>
          </div>
        </section>

        {/* Body — two column: article left, sidebar right */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article */}
            <article className="flex-1 min-w-0">
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                <Calendar size={15} className="text-lionzGold" />
                <span>
                  {meta.month} {meta.day}, 2026
                </span>
              </div>
              {/* Post H1 */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-lionzDark mb-8 leading-tight">
                {post.heroTitle}
              </h2>
              {/* Content blocks */}
              <div>
                {post.blocks.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h3
                        key={i}
                        className="text-lg md:text-xl font-extrabold text-lionzDark mt-8 mb-3"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "p") {
                    return (
                      <p
                        key={i}
                        className="text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: block.html }}
                      />
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul
                        key={i}
                        className="list-disc list-inside text-gray-700 mb-4 space-y-1 pl-2"
                      >
                        {block.items.map((item, j) => (
                          <li key={j} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "cta") {
                    return (
                      <p
                        key={i}
                        className="font-bold text-lionzDark leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: block.html }}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              {/* Back to Blogs */}
              <div className="flex justify-center mt-10 mb-12">
                <Link
                  href="/blog"
                  className="bg-lionzGold text-lionzNavy font-bold px-8 py-3 rounded-xl hover:brightness-90 transition-all"
                >
                  Back To Blogs
                </Link>
              </div>
              {/* Prev / Next */}
              <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 mb-10">
                <div>
                  {prevPost && (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="flex items-start gap-2 group"
                    >
                      <ChevronLeft
                        size={18}
                        className="shrink-0 text-lionzGold mt-0.5"
                      />
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                        <p className="text-sm font-semibold text-lionzNavy group-hover:text-lionzGold transition-colors line-clamp-2">
                          {prevPost.title}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="flex justify-end">
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="flex items-start gap-2 group text-right"
                    >
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Next</p>
                        <p className="text-sm font-semibold text-lionzNavy group-hover:text-lionzGold transition-colors line-clamp-2">
                          {nextPost.title}
                        </p>
                      </div>
                      <ChevronRight
                        size={18}
                        className="shrink-0 text-lionzGold mt-0.5"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              {/* Search */}
              <div className="flex items-center gap-2 mb-8">
                <input
                  type="text"
                  placeholder="Type to start searching..."
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-lionzGold"
                />
                <button className="bg-lionzGold text-lionzNavy p-3 rounded-lg hover:brightness-90 transition-all">
                  <Search size={16} />
                </button>
              </div>
              {/* Share On */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold mb-3">
                  <Share2 size={15} className="text-lionzGold" />
                  Share On
                </div>
                <div className="flex gap-3">
                  <a
                    href={COMPANY.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={COMPANY.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <TikTokIcon />
                  </a>
                  <a
                    href={COMPANY.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-base font-extrabold text-lionzDark mb-4">
                  Recent Posts
                </h4>
                <ul className="space-y-4">
                  {recentPosts.map((recent) => (
                    <li key={recent.slug}>
                      <Link
                        href={`/blog/${recent.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={recent.image}
                            alt={recent.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            {recent.month} {recent.day}, 2026
                          </p>
                          <p className="text-sm font-semibold text-lionzNavy group-hover:text-lionzGold transition-colors leading-snug line-clamp-2">
                            {recent.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
