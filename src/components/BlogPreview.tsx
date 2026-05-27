import Link from "next/link";
import { BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPreview() {
  return (
    <section className="bg-[#F5F0E8] section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 border border-lionzGold text-lionzNavy text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
            <BookOpen size={13} className="text-lionzGold" />
            Our Blog
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-lionzDark">
            Our Blog &amp; <span className="text-lionzGold">Articles</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-12">
          Stay informed on the latest roofing tips, seasonal maintenance guides, and industry updates for
          business and homeowners across Florida.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image + date badge wrapper */}
              <div className="relative">
                {/* Image */}
                <div className="overflow-hidden aspect-[4/3] bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Date badge — overlaps image/content seam */}
                <div className="absolute bottom-0 translate-y-1/2 left-4 bg-lionzGold text-lionzNavy w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                  <span className="font-extrabold text-lg leading-none">{post.day}</span>
                  <span className="text-xs font-bold leading-none">{post.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 pb-6 px-5">
                <h3 className="text-lionzNavy font-bold text-base leading-snug mb-4 line-clamp-3">
                  {post.title}
                </h3>
                <span className="text-lionzNavy text-sm font-semibold group-hover:text-lionzGold transition-colors">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
