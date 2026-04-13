export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
  content: string;
  headerImage?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  slug: string;
  date: string;
  fullDescription: string;
}
