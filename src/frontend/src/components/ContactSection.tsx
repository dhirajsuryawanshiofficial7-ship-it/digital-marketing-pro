import { useEffect, useRef, useState } from "react";

const courseOptions = [
  "Social Media Marketing",
  "Meta Ads Mastery",
  "AI Marketing Tools",
  "Content Strategy",
  "Lead Generation",
  "Performance Marketing",
  "Full Program (Pro/Premium)",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  course: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Please enter your full name (min 2 chars).";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.course)
      newErrors.course = "Please select a course you're interested in.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-[#8b5cf6]/60 focus:bg-white/8 transition-all duration-200";

  return (
    <section
      id="contact"
      className="py-24 section-bg-alt"
      ref={sectionRef}
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30 mb-4">
              FREE DEMO CLASS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Ready to <span className="gradient-text">Start Learning?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Book your free 90-minute demo class with our experts. No
              obligations, no credit card required. Experience the DigiPro
              Academy difference firsthand.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "hello@digipro.academy" },
                { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                {
                  icon: "📍",
                  label: "Address",
                  value: "DigiPro Academy, Baner, Pune — 411045",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 glass px-4 py-3 rounded-xl"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-foreground/50">
                      {item.label}
                    </div>
                    <div className="text-sm text-foreground/80 font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="glass-card p-8">
              {submitted ? (
                <div
                  className="text-center py-8"
                  data-ocid="contact.success_state"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-2xl gradient-text mb-3">
                    You're All Set!
                  </h3>
                  <p className="text-foreground/70">
                    Our counselor will call you within 2 hours to schedule your
                    free demo class. Check your email for a confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-xl mb-6 text-foreground">
                    Book Your Free Demo
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm text-foreground/70 mb-1.5"
                        htmlFor="name"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        onBlur={() => validate()}
                        className={inputClass}
                        data-ocid="contact.name_input"
                      />
                      {errors.name && (
                        <p
                          className="text-red-400 text-xs mt-1"
                          data-ocid="contact.name_field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm text-foreground/70 mb-1.5"
                        htmlFor="phone"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        onBlur={() => validate()}
                        className={inputClass}
                        data-ocid="contact.phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-red-400 text-xs mt-1"
                          data-ocid="contact.phone_field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm text-foreground/70 mb-1.5"
                        htmlFor="email"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="rahul@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        onBlur={() => validate()}
                        className={inputClass}
                        data-ocid="contact.email_input"
                      />
                      {errors.email && (
                        <p
                          className="text-red-400 text-xs mt-1"
                          data-ocid="contact.email_field_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm text-foreground/70 mb-1.5"
                        htmlFor="course"
                      >
                        Course Interest *
                      </label>
                      <select
                        id="course"
                        value={form.course}
                        onChange={(e) =>
                          setForm({ ...form, course: e.target.value })
                        }
                        onBlur={() => validate()}
                        className={`${inputClass} cursor-pointer`}
                        data-ocid="contact.course_select"
                      >
                        <option value="" className="bg-[#0a0a1a]">
                          Select a course...
                        </option>
                        {courseOptions.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-[#0a0a1a]"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p
                          className="text-red-400 text-xs mt-1"
                          data-ocid="contact.course_field_error"
                        >
                          {errors.course}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 btn-gradient py-3.5 rounded-xl font-semibold text-white text-sm disabled:opacity-70 cursor-pointer"
                    data-ocid="contact.submit_button"
                  >
                    {loading ? (
                      <span
                        className="flex items-center justify-center gap-2"
                        data-ocid="contact.loading_state"
                      >
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "📞 Book My Free Demo Class"
                    )}
                  </button>

                  <p className="text-center text-xs text-foreground/40 mt-3">
                    No spam. We respect your privacy. 🔒
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
