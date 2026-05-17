import { useEffect, useRef } from "react";

const courses = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Master Facebook, Instagram, LinkedIn, and Twitter strategies to grow organic reach and build brand authority.",
    badge: "Beginner Friendly",
    color: "from-[#8b5cf6] to-[#a78bfa]",
  },
  {
    icon: "🎯",
    title: "Meta Ads Mastery",
    description:
      "Run high-converting Facebook and Instagram ad campaigns with advanced targeting, retargeting, and lookalike audiences.",
    badge: "Most Popular",
    color: "from-[#7c3aed] to-[#06b6d4]",
  },
  {
    icon: "🤖",
    title: "AI Marketing Tools",
    description:
      "Leverage ChatGPT, Midjourney, and 20+ AI tools to automate and supercharge your marketing campaigns.",
    badge: "Trending 🔥",
    color: "from-[#0891b2] to-[#06b6d4]",
  },
  {
    icon: "✍️",
    title: "Content Strategy",
    description:
      "Create viral content, plan editorial calendars, and craft compelling copy that converts followers into customers.",
    badge: "Creative Skills",
    color: "from-[#8b5cf6] to-[#ec4899]",
  },
  {
    icon: "💰",
    title: "Lead Generation",
    description:
      "Build high-quality lead funnels using landing pages, email marketing, and multi-channel paid acquisition.",
    badge: "High Income Skill",
    color: "from-[#059669] to-[#06b6d4]",
  },
  {
    icon: "📊",
    title: "Performance Marketing",
    description:
      "Master Google Ads, analytics, conversion rate optimization, and ROI-driven campaign management at scale.",
    badge: "Advanced",
    color: "from-[#d97706] to-[#8b5cf6]",
  },
];

export function CoursesSection() {
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
    <section
      id="courses"
      className="py-24 section-bg-alt"
      ref={sectionRef}
      data-ocid="courses.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30 mb-4">
            WHAT YOU'LL LEARN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Course <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Comprehensive curriculum designed by industry experts to make you
            job-ready in 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className="glass-card p-6 cursor-default reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-ocid={`courses.item.${i + 1}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}
              >
                {course.icon}
              </div>

              {/* Badge */}
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-gradient-to-r ${course.color} text-white`}
              >
                {course.badge}
              </span>

              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {course.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {course.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-[#8b5cf6] text-sm font-medium">
                Explore Module
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
