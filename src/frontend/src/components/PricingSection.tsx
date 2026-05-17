import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    duration: "/ one-time",
    description:
      "Perfect for beginners exploring digital marketing fundamentals.",
    features: [
      "Social Media Marketing",
      "Content Strategy Basics",
      "Canva Design Module",
      "3 Live Projects",
      "Community Access",
      "Course Certificate",
    ],
    cta: "Get Started",
    popular: false,
    color: "border-white/10",
  },
  {
    name: "Pro",
    price: "₹9,999",
    duration: "/ one-time",
    description:
      "Most popular. Complete marketing toolkit for career-starters.",
    features: [
      "Everything in Basic",
      "Meta Ads Mastery",
      "Google Ads Training",
      "AI Tools (ChatGPT, etc.)",
      "8 Live Projects",
      "Placement Assistance",
      "Google & Meta Certifications",
      "1-Year Mentorship Access",
    ],
    cta: "Enroll Now — Most Popular",
    popular: true,
    color: "border-[#8b5cf6]/60",
  },
  {
    name: "Premium",
    price: "₹14,999",
    duration: "/ one-time",
    description:
      "Complete career transformation with 1:1 mentorship and agency training.",
    features: [
      "Everything in Pro",
      "Performance Marketing Advanced",
      "Lead Generation Mastery",
      "Funnel Building & Automation",
      "15+ Live Projects",
      "1:1 Mentor Sessions (4x)",
      "Resume & LinkedIn Review",
      "Lifetime Updates Access",
    ],
    cta: "Get Premium Access",
    popular: false,
    color: "border-[#06b6d4]/40",
  },
];

export function PricingSection() {
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
      id="pricing"
      className="py-24 section-bg-alt"
      ref={sectionRef}
      data-ocid="pricing.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/30 mb-4">
            PRICING PLANS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg">
            One-time payment, lifetime value. No hidden fees, no monthly
            subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card p-6 reveal relative ${
                plan.popular
                  ? "border-[#8b5cf6]/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] scale-[1.02]"
                  : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`pricing.item.${i + 1}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl mb-1 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-foreground/50 text-sm">
                    {plan.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/75"
                  >
                    <span className="text-[#8b5cf6] shrink-0 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? "btn-gradient text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    : "btn-outline-glass text-foreground"
                }`}
                data-ocid={`pricing.enroll_button.${i + 1}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
