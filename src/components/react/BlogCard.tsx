// import { Link } from "react-router-dom";
// import type { BlogPost } from "@/data/posts";
import type { BlogPost } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost; // Replace with BlogPost type when available
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group card-elevated rounded-xl bg-card p-6 flex flex-col justify-between animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <time>{formattedDate}</time>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="heading-display text-lg mb-2 group-hover:text-blue-500 transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {post.excerpt}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="tag-pill text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
      </div>
    </a>
  );
};

export default BlogCard;
