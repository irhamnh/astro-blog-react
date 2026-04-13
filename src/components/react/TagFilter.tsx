interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

const TagFilter = ({ tags, activeTag, onTagClick }: TagFilterProps) => (
  <div className="flex flex-wrap gap-2 mb-8">
    <button
      onClick={() => onTagClick(null)}
      className={`tag-pill ${activeTag === null ? "active" : ""}`}
    >
      All
    </button>
    {tags.map((tag) => (
      <button
        key={tag}
        onClick={() => onTagClick(tag)}
        className={`tag-pill ${activeTag === tag ? "active" : ""}`}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default TagFilter;
