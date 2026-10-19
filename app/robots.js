// Development build: block all crawlers. Remove/relax this when the site goes live on Deepak's domain.
export default function robots() {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
