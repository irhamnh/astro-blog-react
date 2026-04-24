import ProjectCard from "@/components/react/ProjectCard";
import type { CollectionEntry } from "astro:content";
import { useMemo, useState } from "react";

type Props = {
  tags: string[];
  projects: CollectionEntry<"projects">[];
};

export default function ProjectList({ tags, projects }: Props) {
  const [selectedTag, setSelectedTag] = useState<string[]>(["All"]);
  const filteredProjects = useMemo(() => {
    if (selectedTag.includes("All")) {
      return projects;
    }
    return projects.filter((project) =>
      project.data.tags.some((tag) => selectedTag.includes(tag)),
    );
  }, [selectedTag, projects]);
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        {tags.map((tag, index) => (
          <button
            className="tag-pill"
            data-active={selectedTag.includes(tag) ? "true" : "false"}
            type="button"
            key={index}
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              project={project.data}
              id={project.id}
              index={index}
              key={index}
            />
          ))
        ) : (
          <p className="text-muted-foreground">
            No projects found for the selected tags.
          </p>
        )}
      </div>
    </>
  );
}
