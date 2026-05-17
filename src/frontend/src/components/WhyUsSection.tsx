import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🏗️",
    title: "Live Projects",
    description:
      "Work on real client campaigns from day one. Build an actual portfolio that impresses employers.",
  },
  {
    icon: "⚡",
    title: "100% Practical Training",
    description:
      "No theory overload. Every concept is immediately applied through hands-on exercises and assignments.",
  },
  {
    icon: "💼",
    title: "Placement Assistance",
    description:
      "Dedicated placement team connects you with 200+ hiring partner agencies and brands.",
  },
  {
    icon: "🤖",
    title: "AI Tools Training",
    description:
      "Be ahead of the curve. Learn 30+ AI marketing tools including ChatGPT, Gemini, and Jasper.",
  },
  {
    icon: "♾️",
    title: "Lifetime Access",
    description:
      "Course materials, updates, and community access never expire. Learn at your own pace.",
  },
  {
    icon: "🎓",
    title: "Industry Certification",
    description:
      "Receive Google, Meta, and DigiPro Academy certifications recognized by top employers.",
  },
];

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let i = 0;
            for (const el of entry.target.querySelectorAll(".reveal")) {
              setTimeout(() => el.classList.add("visible"), i * 100);
              i++;
            }
          }
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" ref={sectionRef} data-ocid="whyus.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/30 mb-4">
            WHY DIGIPRO ACADEMY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Why <span className="gradient-text">Choose Us</span>?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We don't just teach. We transform careers with a proven methodology
            trusted by 5,000+ students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card p-6 reveal group"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-ocid={`whyus.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#06b6d4]/20 border border-white/10 flex items-center justify-center text-3xl mb-4 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
