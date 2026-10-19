// Development build: block all crawlers. Remove/relax this when the site goes live on Syed Ali Baqi domain.
export default function robots() {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
