const Footer = () => (
  <footer className="border-t py-10 mt-20">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
