import { useCallback } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Projects", path: "/projects" },
];

interface HeaderProps {
  pathname: string;
}

const Header = (props: HeaderProps) => {
  const { pathname } = props;

  const isActive = useCallback(
    (pathname: string, itemPath: string) => {
      if (pathname === "/" && itemPath === "/") {
        return true;
      }
      if (pathname !== "/") {
        return itemPath.startsWith(pathname);
      }
      return false;
    },
    [pathname],
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="/"
          className="font-heading text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors"
        >
          jd<span className="text-primary">.</span>
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(pathname, item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
