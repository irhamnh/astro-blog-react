export interface BlogPost {
  title: string;
  excerpt: string;
  pubDate: Date;
  updatedDate?: Date;
  tags: string[];
  readTime: string;
  heroImage?: ImageMetadata;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repoLink: string;
  pubDate: Date;
  updatedDate?: Date;
}
