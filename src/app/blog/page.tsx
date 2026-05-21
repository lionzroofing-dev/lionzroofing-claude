import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Roofing Blog",
  description:
    "Roofing tips, guides, and news from Lionz Roofing in Fort Lauderdale, FL.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lionzNavy py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lionzGold mb-4">
            Roofing Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay informed on the latest roofing tips, seasonal maintenance guides, and industry
            updates for homeowners across South Florida.
          </p>
        </section>

        {/* Posts grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <div className="overflow-hidden aspect-[4/3] bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 translate-y-1/2 left-4 bg-lionzGold text-lionzNavy w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                    <span className="font-extrabold text-lg leading-none">{post.day}</span>
                    <span className="text-xs font-bold leading-none">{post.month}</span>
                  </div>
                </div>
                <div className="pt-10 pb-6 px-5">
                  <h2 className="text-lionzNavy font-bold text-base leading-snug mb-4 line-clamp-3">
                    {post.title}
                  </h2>
                  <span className="text-lionzNavy text-sm font-semibold group-hover:text-lionzGold transition-colors">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
