import BlogCard from "@/components/react/BlogCard";
import type { CollectionEntry } from "astro:content";
import { useMemo, useState } from "react";

type Props = {
  tags: string[];
  blog: CollectionEntry<"blog">[];
};

export default function BlogList({ tags, blog }: Props) {
  const [selectedTag, setSelectedTag] = useState<string[]>(["All"]);
  const filteredBlogPosts = useMemo(() => {
    if (selectedTag.includes("All")) {
      return blog;
    }
    return blog.filter((post) =>
      post.data.tags.some((tag) => selectedTag.includes(tag)),
    );
  }, [selectedTag, blog]);
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        {tags.map((tag) => (
          <button
            className="tag-pill"
            data-active={selectedTag.includes(tag) ? "true" : "false"}
            type="button"
            key={tag}
            onClick={() => {
              // reset filter if All tag is clicked
              if (tag === "All") {
                setSelectedTag(["All"]);
                return;
              }
              // reset filter if only 1 tag is selected and it's the same as the clicked tag
              if (selectedTag.length === 1 && selectedTag.includes(tag)) {
                setSelectedTag(["All"]);
                return;
              }
              // toggle tag selection and remove "All" tag
              setSelectedTag((prev) =>
                prev.includes(tag)
                  ? prev.filter((t) => t !== tag)
                  : [...prev.filter((t) => t !== "All"), tag],
              );
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogPosts.length > 0 ? (
          filteredBlogPosts.map((post, index) => (
            <BlogCard
              post={post.data}
              id={post.id}
              index={index}
            />
          ))
        ) : (
          <p className="text-muted-foreground">
            No blog posts found for the selected tags.
          </p>
        )}
      </div>
    </>
  );
}
