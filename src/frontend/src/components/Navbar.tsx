import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,26,0.95)] backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={(e) => handleNav(e, "#home")}
          className="flex items-center gap-2 font-display font-bold text-xl cursor-pointer"
          data-ocid="navbar.logo_link"
        >
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center text-white text-sm font-bold">
            D
          </div>
          <span className="gradient-text">DigiPro</span>
          <span className="text-foreground/80">Academy</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium"
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => handleNav(e, "#contact")}
            className="hidden md:inline-flex btn-gradient px-5 py-2 rounded-full text-sm font-semibold text-white cursor-pointer"
            data-ocid="navbar.enroll_button"
          >
            Enroll Now
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg glass text-foreground"
            aria-label="Toggle menu"
            data-ocid="navbar.hamburger_button"
            type="button"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block py-3 text-foreground/80 hover:text-foreground border-b border-white/5 text-sm font-medium"
              data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={(e) => handleNav(e, "#contact")}
            className="block mt-4 btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center w-full"
            data-ocid="navbar.mobile_enroll_button"
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
