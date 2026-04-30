import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Тарифы", href: "#tariffs" },
    { label: "Зоны", href: "#zones" },
    { label: "Турниры", href: "#tournaments" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1">
          <span className="font-display text-2xl font-black text-primary neon-text tracking-widest">R2D</span>
          <span className="font-display text-2xl font-black text-accent neon-cyan tracking-widest">CLUB</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:inline-flex items-center px-5 py-2 rounded border border-primary text-primary text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase neon-border"
        >
          Забронировать
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 border-t border-border px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacts" onClick={() => setMenuOpen(false)} className="block text-center px-5 py-2 rounded border border-primary text-primary text-sm uppercase">
            Забронировать
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
