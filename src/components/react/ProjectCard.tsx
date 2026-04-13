import type { Project } from "@/types";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project; // Replace with Project type when available
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => (
  <a
    href={`/projects/${project.slug}`}
    className="group card-elevated rounded-xl bg-card p-6 flex flex-col justify-between animate-fade-up"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div>
      <h3 className="heading-display text-lg mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag-pill text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
    </div>
  </a>
);

export default ProjectCard;
