import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  linkTo?: string;
  linkLabel?: string;
  ariaLabel?: string;
}

const SectionHeading = ({
  title,
  linkTo,
  linkLabel = "View all",
  ariaLabel,
}: SectionHeadingProps) => (
  <div className="flex items-end justify-between mb-8">
    <h2 className="heading-display text-2xl md:text-3xl">{title}</h2>
    {linkTo && (
      <a
        href={linkTo}
        className="flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
        aria-label={ariaLabel}
      >
        {linkLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    )}
  </div>
);

export default SectionHeading;
