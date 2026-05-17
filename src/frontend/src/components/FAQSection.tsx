import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Who is this course suitable for?",
    a: "This course is ideal for students, job seekers, entrepreneurs, small business owners, and working professionals who want to build or grow their digital marketing skills. No prior experience is required for the Basic plan.",
  },
  {
    q: "Is the training online or offline?",
    a: "We offer both online (live via Zoom) and offline (Pune, Mumbai centres) modes. All live sessions are recorded and available for lifetime replay access, so you never miss a class.",
  },
  {
    q: "What is the duration of the course?",
    a: "The complete program spans 14 weeks (3.5 months) with 5 hours of live training per week. Flexible weekend batches are also available for working professionals.",
  },
  {
    q: "Will I get a job after completing the course?",
    a: "Our dedicated placement team has a 98% placement record. We connect you with 200+ hiring partners and guide you through resume building, mock interviews, and LinkedIn optimization.",
  },
  {
    q: "Are Google and Meta certifications included?",
    a: "Yes! We help you prepare for and pass Google Ads, Google Analytics, and Meta Blueprint certifications. These are globally recognized credentials that boost your hirability significantly.",
  },
  {
    q: "Can I pay the fee in installments?",
    a: "Absolutely. We offer 0% interest EMI options through Razorpay (3, 6, or 12 months). Contact our admissions team to explore the best plan for your budget.",
  },
  {
    q: "What AI tools will I learn?",
    a: "The AI marketing module covers ChatGPT, Google Gemini, Jasper AI, Canva AI, Midjourney, Perplexity, Zapier Automation, and more. You'll learn how to use AI to 10x your productivity.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" ref={sectionRef} data-ocid="faq.section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30 mb-4">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-foreground/60">
            Can't find an answer? Reach us at hello@digipro.academy
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="glass-card overflow-hidden reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
              data-ocid={`faq.item.${i + 1}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                data-ocid={`faq.toggle.${i + 1}`}
              >
                <span className="font-display font-semibold text-foreground group-hover:text-[#a78bfa] transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                    openIndex === i
                      ? "btn-gradient text-white rotate-180"
                      : "bg-white/5 text-foreground/60 border border-white/10"
                  }`}
                >
                  ↓
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="border-t border-white/10 pt-4 text-foreground/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
