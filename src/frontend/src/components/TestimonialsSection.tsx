import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Digital Marketing Manager, TechStartup",
    avatar: "PS",
    rating: 5,
    text: "DigiPro Academy completely transformed my career! In just 3 months, I went from a fresher to landing a ₹8 LPA job. The Meta Ads module was exceptionally practical and the AI tools training gave me a huge competitive edge.",
    color: "from-[#8b5cf6] to-[#a78bfa]",
  },
  {
    name: "Rahul Verma",
    role: "Freelance Performance Marketer",
    avatar: "RV",
    rating: 5,
    text: "I was running my own clothing brand but had no idea about ads. After this course, my ROAS jumped from 1.2x to 4.5x within 2 months. The live project approach made everything click. Best investment I ever made.",
    color: "from-[#0891b2] to-[#06b6d4]",
  },
  {
    name: "Ananya Patel",
    role: "Social Media Manager, Agency",
    avatar: "AP",
    rating: 5,
    text: "The content strategy and Canva design modules alone were worth the entire fee. I now manage 12 brand accounts and earn ₹60k/month as a freelancer. The placement team was incredibly supportive throughout my job search.",
    color: "from-[#7c3aed] to-[#ec4899]",
  },
  {
    name: "Mohammed Khan",
    role: "Growth Marketer, E-commerce",
    avatar: "MK",
    rating: 5,
    text: "I had experience in marketing but needed to upskill on AI tools. The ChatGPT for Marketing module saved me 15+ hours per week on content creation. The Google Ads section helped me crack a Senior Marketer role at a top D2C brand.",
    color: "from-[#059669] to-[#06b6d4]",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetTimer = (fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
    intervalRef.current = setInterval(next, 5000);
  };

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

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24"
      ref={sectionRef}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30 mb-4">
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Real results from real students. No fake testimonials, ever.
          </p>
        </div>

        <div className="reveal max-w-3xl mx-auto">
          {/* Main testimonial card */}
          <div className="glass-card p-8 mb-6" data-ocid="testimonials.card">
            <div className="flex items-center gap-1 mb-6">
              {"★"
                .repeat(t.rating)
                .split("")
                .map((star, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: star position is stable within fixed-length rating array
                  <span key={i} className="text-yellow-400 text-xl">
                    {star}
                  </span>
                ))}
            </div>
            <blockquote className="text-foreground/85 text-lg leading-relaxed mb-8 italic">
              "{t.text}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-display font-bold text-white text-sm`}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-sm text-foreground/60">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => resetTimer(prev)}
              className="btn-outline-glass w-11 h-11 rounded-full flex items-center justify-center text-lg"
              aria-label="Previous testimonial"
              data-ocid="testimonials.prev_button"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((t2, i) => (
                <button
                  key={t2.name}
                  type="button"
                  onClick={() => resetTimer(() => setCurrent(i))}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2 btn-gradient"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid={`testimonials.dot.${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => resetTimer(next)}
              className="btn-outline-glass w-11 h-11 rounded-full flex items-center justify-center text-lg"
              aria-label="Next testimonial"
              data-ocid="testimonials.next_button"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
