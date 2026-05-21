export interface BlogPost {
  slug: string;

  title: string;
  image: string;
  day: string;
  month: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "quick-seasonal-roof-care-checklist",
    title:
      "Quick Seasonal Roof Care Checklist: Protect Your Home Before Small Roof Problems Turn Into Big Repairs",
    image: "/images/blog/blog-01.jpg",
    day: "19",
    month: "May",
  },
  {
    slug: "why-hiring-local-florida-roofer",
    title:
      "Why Hiring A Local Florida Roofer Who Stays Updated on State Laws Matters",
    image: "/images/blog/blog-02.jpg",
    day: "12",
    month: "May",
  },
  {
    slug: "roofing-warranties-why-important",
    title:
      "Roofing Warranties: Why They Are Important for Homeowners in South Florida",
    image: "/images/blog/blog-03.jpg",
    day: "04",
    month: "May",
  },
];
