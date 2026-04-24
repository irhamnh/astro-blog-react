const Footer = () => (
  <footer className="border-t py-10 mt-20">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Irham. All rights reserved.</p>
      <div className="flex gap-6">
        <a
          href="https://github.com/irhamnh"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.upwork.com/freelancers/~0191cc64421d18070d"
          className="hover:text-foreground transition-colors"
        >
          Upwork
        </a>
        <a
          href="https://www.linkedin.com/in/irham-nur-hakim-4228b2129/"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
