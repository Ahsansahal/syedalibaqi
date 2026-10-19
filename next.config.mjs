/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development build: tell crawlers not to index anything, including media and PDFs.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, noimageindex" }],
      },
    ];
  },
  // Permanent redirects from the old Wix URLs so existing links & SEO keep working.
  async redirects() {
    return [
      { source: "/s-projects-side-by-side", destination: "/work", permanent: true },
      { source: "/about-1", destination: "/case-study", permanent: true },
      { source: "/about-3", destination: "/projects", permanent: true },
      { source: "/projects-7", destination: "/generative-ai", permanent: true },
      { source: "/about-7", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
