const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: "f",
    label: "Facebook",
    href: "https://facebook.com",
    color: "hover:text-[#1877f2]",
  },
  {
    icon: "in",
    label: "Instagram",
    href: "https://instagram.com",
    color: "hover:text-[#e1306c]",
  },
  {
    icon: "li",
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-[#0a66c2]",
  },
  {
    icon: "yt",
    label: "YouTube",
    href: "https://youtube.com",
    color: "hover:text-[#ff0000]",
  },
];

const SocialIcon = ({
  icon,
  label,
  href,
  color,
}: { icon: string; label: string; href: string; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-9 h-9 rounded-full glass flex items-center justify-center text-xs font-bold text-foreground/60 ${color} transition-all duration-200 hover:scale-110`}
    data-ocid={`footer.${label.toLowerCase()}_link`}
  >
    {icon}
  </a>
);

export function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="bg-[rgba(10,10,26,0.98)] border-t border-white/10 pt-16 pb-8"
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg btn-gradient flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="font-display font-bold text-xl">
                <span className="gradient-text">DigiPro</span>
                <span className="text-foreground/80"> Academy</span>
              </span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              India's leading digital marketing institute. Transforming careers
              with practical training, AI tools, and guaranteed placement
              support since 2019.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-foreground/60 text-sm hover:text-[#a78bfa] transition-colors flex items-center gap-1.5"
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                  >
                    <span className="text-[#8b5cf6] text-xs">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {[
                "Social Media Marketing",
                "Meta Ads Mastery",
                "AI Tools for Marketing",
                "Content Strategy",
                "Performance Marketing",
                "Lead Generation",
              ].map((c) => (
                <li key={c}>
                  <span className="text-foreground/60 text-sm flex items-center gap-1.5">
                    <span className="text-[#06b6d4] text-xs">›</span>
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="text-base mt-0.5">📧</span>
                <span>hello@digipro.academy</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="text-base mt-0.5">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="text-base mt-0.5">📍</span>
                <span>
                  DigiPro Academy, Baner Road, Pune — 411045, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <span className="text-base mt-0.5">🕐</span>
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <span>© {year} DigiPro Academy. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
