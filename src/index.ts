import { visitSitemap } from 'gangleri';

const sitemapUrl = 'https://old-icelandic.vercel.app/sitemap.xml';

const walkTheSitemap = async () => {
  await visitSitemap(sitemapUrl, 5);
}

walkTheSitemap();
