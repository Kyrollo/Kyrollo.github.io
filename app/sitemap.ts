import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from './data/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kyrollo.github.io';

  const projectUrls = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
