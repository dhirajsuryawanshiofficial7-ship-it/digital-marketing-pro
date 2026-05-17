import { useEffect, useRef } from "react";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden"
      ref={ref}
      data-ocid="cta_banner.section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/20 via-transparent to-[#0891b2]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8b5cf6] opacity-10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/20 text-[#a78bfa] border border-[#8b5cf6]/40 mb-6">
            🚀 LIMITED SEATS AVAILABLE
          </span>
        </div>

        <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
          Start Your <span className="gradient-text">Digital Marketing</span>
          <br />
          Career Today
        </h2>

        <p className="reveal text-foreground/70 text-xl mb-10 max-w-2xl mx-auto">
          Join 5,000+ students who transformed their careers. New batch starting
          soon — limited seats available.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gradient px-10 py-4 rounded-full text-lg font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.4)] cursor-pointer"
            data-ocid="cta_banner.enroll_button"
          >
            🎓 Enroll Now — Start Learning
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline-glass px-10 py-4 rounded-full text-lg font-semibold cursor-pointer"
            data-ocid="cta_banner.pricing_button"
          >
            View Pricing Plans
          </button>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50">
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> No prior experience needed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Live online + offline
            classes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Placement guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
