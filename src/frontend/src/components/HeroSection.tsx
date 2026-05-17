import { useEffect, useRef } from "react";

const stats = [
  { value: "5,000+", label: "Students Enrolled" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Placement Rate" },
  { value: "50+", label: "Live Projects" },
];

const trustBadges = [
  { icon: "🏆", text: "Industry Certified" },
  { icon: "✅", text: "100% Practical" },
  { icon: "🚀", text: "Job Ready Skills" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    setTimeout(() => {
      el.querySelectorAll(".hero-reveal").forEach((item, i) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, i * 150);
      });
    }, 100);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#8b5cf6] opacity-[0.08] blur-[120px]" />
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#06b6d4] opacity-[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-[#8b5cf6]/5 to-transparent blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div>
          <div className="reveal hero-reveal mb-6">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#a78bfa]">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
              India's #1 Digital Marketing Course
            </span>
          </div>

          <h1 className="reveal hero-reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Master <span className="gradient-text">Digital Marketing,</span>
            <br />
            <span className="gradient-text">Meta Ads</span> & AI Skills
          </h1>

          <p className="reveal hero-reveal text-foreground/70 text-lg mb-8 leading-relaxed max-w-lg">
            Learn practical digital marketing from experts and build a
            high-paying career or grow your business. Real projects, real
            results.
          </p>

          {/* Trust badges */}
          <div className="reveal hero-reveal flex flex-wrap gap-3 mb-8">
            {trustBadges.map((badge) => (
              <span
                key={badge.text}
                className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-foreground/80"
              >
                <span>{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal hero-reveal flex flex-wrap gap-4 mb-10">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gradient px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] cursor-pointer"
              type="button"
              data-ocid="hero.demo_button"
            >
              📞 Book Free Demo
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#curriculum")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline-glass px-7 py-3.5 rounded-full text-base font-semibold cursor-pointer"
              type="button"
              data-ocid="hero.curriculum_button"
            >
              View Curriculum →
            </button>
          </div>

          {/* Star rating row */}
          <div className="reveal hero-reveal flex items-center gap-3 text-sm text-foreground/60">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <span>
              <strong className="text-foreground">4.9/5</strong> from 2,000+
              reviews
            </span>
          </div>
        </div>

        {/* Right: Dashboard Illustration */}
        <div className="reveal hero-reveal relative flex items-center justify-center">
          <div className="relative">
            {/* Main image */}
            <div className="animate-float">
              <img
                src="/assets/generated/hero-dashboard.dim_800x600.png"
                alt="Digital Marketing Dashboard"
                className="w-full max-w-lg rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] border border-white/10"
              />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -top-4 -left-8 glass px-4 py-3 rounded-xl shadow-lg">
              <div className="text-xs text-foreground/60">Monthly Reach</div>
              <div className="font-display font-bold text-lg gradient-text">
                2.4M+
              </div>
            </div>
            <div className="absolute -bottom-4 -right-6 glass px-4 py-3 rounded-xl shadow-lg">
              <div className="text-xs text-foreground/60">Ad ROAS</div>
              <div className="font-display font-bold text-lg text-[#06b6d4]">
                4.8x
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 px-6 text-center">
                <div className="font-display font-bold text-2xl gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/60 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
