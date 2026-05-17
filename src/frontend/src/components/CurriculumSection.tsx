import { useEffect, useRef, useState } from "react";

const modules = [
  {
    number: "01",
    title: "Digital Marketing Basics",
    duration: "Week 1-2",
    topics: [
      "What is Digital Marketing?",
      "Marketing Funnel Fundamentals",
      "Brand Identity & Positioning",
      "Target Audience Research",
    ],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    duration: "Week 3-4",
    topics: [
      "Instagram Growth Strategy",
      "Facebook Page Optimization",
      "LinkedIn B2B Marketing",
      "Content Calendar Planning",
    ],
  },
  {
    number: "03",
    title: "Meta Ads (Facebook & Instagram)",
    duration: "Week 5-6",
    topics: [
      "Ads Manager Setup",
      "Campaign Objectives & Budgeting",
      "Advanced Audience Targeting",
      "Retargeting & Lookalike Audiences",
    ],
  },
  {
    number: "04",
    title: "Google Ads",
    duration: "Week 7-8",
    topics: [
      "Search Campaign Setup",
      "Keyword Research & Match Types",
      "Display & YouTube Ads",
      "Conversion Tracking",
    ],
  },
  {
    number: "05",
    title: "AI Tools for Marketing",
    duration: "Week 9",
    topics: [
      "ChatGPT for Content Creation",
      "Midjourney for Ad Creatives",
      "Automation with Zapier & Make",
      "AI Analytics & Insights",
    ],
  },
  {
    number: "06",
    title: "Canva Design for Marketing",
    duration: "Week 10",
    topics: [
      "Brand Kit Setup",
      "Social Media Templates",
      "Video & Reel Creation",
      "Ad Creative Design",
    ],
  },
  {
    number: "07",
    title: "ChatGPT & AI Marketing",
    duration: "Week 11",
    topics: [
      "Prompt Engineering",
      "Blog & Email Automation",
      "Chatbot for Lead Gen",
      "AI-Powered SEO Writing",
    ],
  },
  {
    number: "08",
    title: "Analytics & Reporting",
    duration: "Week 12",
    topics: [
      "Google Analytics 4",
      "Meta Pixel & Events",
      "Performance Dashboards",
      "Monthly Report Creation",
    ],
  },
  {
    number: "09",
    title: "Funnel Building & Lead Gen",
    duration: "Week 13-14",
    topics: [
      "Landing Page Design",
      "Email Sequences",
      "WhatsApp Marketing Funnels",
      "CRM & Lead Management",
    ],
  },
];

export function CurriculumSection() {
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let i = 0;
            for (const el of entry.target.querySelectorAll(".reveal")) {
              setTimeout(() => el.classList.add("visible"), i * 60);
              i++;
            }
          }
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="curriculum"
      className="py-24 section-bg-alt"
      ref={sectionRef}
      data-ocid="curriculum.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30 mb-4">
            FULL CURRICULUM
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Course <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            14-week comprehensive program — from zero to job-ready digital
            marketer.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] via-[#06b6d4] to-[#8b5cf6] opacity-30 hidden sm:block" />

          <div className="space-y-4">
            {modules.map((module, i) => (
              <div
                key={module.number}
                className="reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveModule(activeModule === i ? null : i)}
                  className="w-full text-left group"
                  data-ocid={`curriculum.module.${i + 1}`}
                >
                  <div
                    className={`glass-card px-6 py-4 flex items-center gap-4 ${
                      activeModule === i
                        ? "border-[#8b5cf6]/40 bg-white/[0.07]"
                        : ""
                    }`}
                  >
                    {/* Number bubble */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl font-display font-bold text-sm flex items-center justify-center transition-all duration-300 ${
                        activeModule === i
                          ? "btn-gradient text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                          : "bg-white/5 text-foreground/60 border border-white/10 group-hover:bg-white/10"
                      }`}
                    >
                      {module.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-[#a78bfa] transition-colors">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="hidden sm:block text-xs text-foreground/50 glass px-2 py-1 rounded-full">
                            {module.duration}
                          </span>
                          <span
                            className={`text-lg transition-transform duration-300 ${
                              activeModule === i ? "rotate-180" : ""
                            }`}
                          >
                            ↓
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {activeModule === i && (
                  <div className="ml-0 sm:ml-16 mt-2 glass-card p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {module.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <span className="text-[#8b5cf6] mt-0.5 shrink-0">
                            ✓
                          </span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
