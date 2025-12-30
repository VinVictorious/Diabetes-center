import React, { useMemo, useState } from "react";

const phoneNumber = "+91 73059 69836";
const phoneDigits = "917305969836";
const address =
  "P109, 2nd Main Road, Krishna Nagar, Medavakkam, Chennai 600 100, Tamil Nadu, India";

const trustItems = [
  {
    title: "Experienced Care",
    desc: "Guided by decades of clinical focus on diabetes management."
  },
  {
    title: "Lifestyle Coaching",
    desc: "Nutrition, activity, and habit support tailored to your routine."
  },
  {
    title: "Ongoing Monitoring",
    desc: "Structured follow-ups to keep glucose trends on track."
  },
  {
    title: "Patient First",
    desc: "Clear, calm guidance with time for your questions."
  }
];

const services = [
  "Diabetes Consultation",
  "Blood Sugar Monitoring Guidance",
  "Diet & Lifestyle Plan",
  "Medication Review",
  "Preventive Screening",
  "Follow-up Care"
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Call the clinic or send a WhatsApp message. Our team will confirm the best available slot."
  },
  {
    question: "What are the clinic timings?",
    answer:
      "Timings can vary by day. Please call ahead and we will share the latest schedule."
  },
  {
    question: "What should I bring for my visit?",
    answer:
      "Bring recent lab reports, current medications, and a list of any concerns or symptoms."
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Online consults may be available for follow-ups. Call to confirm eligibility and availability."
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We can guide you on documentation if you plan to claim through insurance."
  },
  {
    question: "How often are follow-ups needed?",
    answer:
      "Follow-up frequency depends on your goals and readings. We recommend a schedule after evaluation."
  }
];

const testimonials = [
  {
    name: "Ananya R.",
    quote:
      "The explanations were clear and practical. I felt supported with small, realistic changes."
  },
  {
    name: "Karthik S.",
    quote:
      "Check-ins were consistent and encouraging. The plan felt personalized and manageable."
  },
  {
    name: "Meera V.",
    quote:
      "I appreciated the calm approach and the focus on long-term habits over quick fixes."
  }
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState("");

  const faqsWithIndex = useMemo(
    () => faqs.map((faq, index) => ({ ...faq, id: index })),
    []
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formValues.phone.trim()) {
      errors.phone = "Please enter a phone number.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Please add a short message.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormSuccess("");
      return;
    }

    setFormSuccess("Thanks! We will reach out to confirm your appointment soon.");
    setFormValues({ name: "", phone: "", message: "" });
  };

  return (
    <div className="text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
              MDC
            </div>
            <div>
              <p className="text-lg font-semibold">Madras Diabetic Care</p>
              <p className="text-xs text-slate-500">Dr. S. Nitin</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phoneDigits}`}
              className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-ring"
            >
              Book Appointment
            </a>
          </div>
          <button
            type="button"
            className="md:hidden focus-ring"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 rounded-full bg-slate-700"></span>
              <span className="block h-0.5 w-6 rounded-full bg-slate-700"></span>
              <span className="block h-0.5 w-6 rounded-full bg-slate-700"></span>
            </div>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-200/80 bg-white md:hidden">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${phoneDigits}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2 font-semibold text-white"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-slate-50" />
          <div className="absolute inset-0 -z-10 opacity-50 hero-grid" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 sm:px-6 lg:flex-row lg:items-center lg:pt-20">
            <div className="flex-1 space-y-6 section-fade">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Trusted Diabetes Clinic
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Personalized Diabetes Care in Medavakkam, Chennai
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Evidence-based diabetes management with lifestyle guidance, monitoring plans, and
                long-term support. We focus on steady progress, clear education, and practical steps
                that fit your day-to-day life.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${phoneDigits}`}
                  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-ring"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${phoneDigits}`}
                  className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:text-brand-800 focus-ring"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Clinic Address</span>
                <span>{address}</span>
              </div>
            </div>
            <div className="flex-1 section-fade">
              <div className="rounded-3xl bg-white/70 p-6 shadow-card">
                <DioramaIllustration />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Services</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Comprehensive diabetes care designed around you
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="text-base font-semibold text-slate-800">{service}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Focused guidance and practical steps to support day-to-day diabetes management.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-card sm:items-start sm:text-left">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-2xl font-semibold text-brand-700">
                SN
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Dr. S. Nitin</h3>
                <p className="mt-2 text-sm font-medium text-brand-700">
                  M.B.B.S, FDiab, PGDRM, CCEBDM, CCGDM
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                About the Doctor
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Calm, patient-centered guidance at every step
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Dr. S. Nitin focuses on collaborative care that respects your lifestyle and goals.
                Each visit emphasizes clear education, thoughtful medication review, and steady
                progress with measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Reviews</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Words from patients
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">Testimonials shown as examples.</p>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">FAQ</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Common questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqsWithIndex.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-800 focus-ring"
                  onClick={() =>
                    setActiveFaq((prev) => (prev === faq.id ? null : faq.id))
                  }
                  aria-expanded={activeFaq === faq.id}
                >
                  {faq.question}
                  <span className="ml-4 text-xl text-brand-600">
                    {activeFaq === faq.id ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === faq.id && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Contact</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Reach the clinic
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Call us
                  </p>
                  <a
                    href={`tel:${phoneDigits}`}
                    className="mt-3 block text-lg font-semibold text-slate-900"
                  >
                    {phoneNumber}
                  </a>
                  <p className="mt-2 text-sm text-slate-500">We respond promptly during clinic hours.</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Address
                  </p>
                  <p className="mt-3 text-sm text-slate-600">{address}</p>
                </div>
              </div>

              <form
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus-ring"
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="mt-2 text-xs text-rose-500">{formErrors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus-ring"
                    placeholder="Contact number"
                  />
                  {formErrors.phone && (
                    <p className="mt-2 text-xs text-rose-500">{formErrors.phone}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formValues.message}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus-ring"
                    placeholder="How can we help?"
                  />
                  {formErrors.message && (
                    <p className="mt-2 text-xs text-rose-500">{formErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-ring"
                >
                  Send Message
                </button>
                {formSuccess && (
                  <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-700">
                    {formSuccess}
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">Scan QR</p>
                <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
                  QR Placeholder
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Use the QR code on the clinic card to connect quickly.
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-soft">
                <p className="text-sm uppercase tracking-wide text-white/80">Quick access</p>
                <h3 className="mt-3 text-2xl font-semibold">Book with confidence</h3>
                <p className="mt-3 text-sm text-white/90">
                  A dedicated team is ready to help you manage diabetes with clarity and care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6">
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-slate-900">Madras Diabetic Care</p>
            <p>Dr. S. Nitin</p>
            <p>{phoneNumber}</p>
            <p>{address}</p>
          </div>
          <p className="text-xs text-slate-400">
            This website does not provide emergency medical services.
          </p>
        </div>
      </footer>

      <a
        href={`tel:${phoneDigits}`}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-ring md:hidden"
        aria-label="Call Madras Diabetic Care"
      >
        Call
      </a>
    </div>
  );
}

function DioramaIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-full w-full"
      role="img"
      aria-label="Isometric tech diorama illustration"
    >
      <defs>
        <linearGradient id="platform" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9f5f8" />
          <stop offset="1" stopColor="#b4ecf3" />
        </linearGradient>
        <linearGradient id="tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c5eef2" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12b8c8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0ea5b4" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <ellipse cx="260" cy="350" rx="190" ry="30" fill="#cfeff3" opacity="0.7" />
        <path
          d="M100 150 L260 70 L420 150 L260 230 Z"
          fill="url(#platform)"
          stroke="#c8e8ed"
          strokeWidth="2"
        />
        <path
          d="M260 230 L420 150 L420 250 L260 330 Z"
          fill="#b2e7ee"
        />
        <path
          d="M260 230 L100 150 L100 250 L260 330 Z"
          fill="#c6eff4"
        />

        <g>
          <path d="M230 120 L290 120 L310 200 L210 200 Z" fill="url(#tower)" />
          <path d="M290 120 L320 140 L340 220 L310 200 Z" fill="#b0e3ea" />
          <path d="M230 120 L210 140 L210 200 L230 200 Z" fill="#e1f7fa" />
          <rect x="245" y="145" width="30" height="40" rx="6" fill="url(#gloss)" />
          <circle cx="260" cy="165" r="6" fill="#ffffff" opacity="0.9" />
          <rect x="246" y="190" width="28" height="10" rx="5" fill="#9fe0e8" />
        </g>

        <g opacity="0.9">
          <path d="M150 190 L175 175 L200 190 L175 205 Z" fill="#c5eef2" />
          <path d="M175 175 L185 182 L185 205 L175 205 Z" fill="#aee3ea" />
        </g>

        <g>
          <path d="M360 185 L380 170 L400 185 L380 200 Z" fill="#c5eef2" />
          <path d="M380 170 L390 177 L390 200 L380 200 Z" fill="#aee3ea" />
        </g>

        <g>
          <path d="M145 250 L165 235 L185 250 L165 265 Z" fill="#e2f8fb" />
          <circle cx="165" cy="240" r="10" fill="#9fe0e8" />
          <rect x="160" y="248" width="10" height="14" rx="4" fill="#6cc7d2" />
        </g>

        <g>
          <path d="M340 245 L360 230 L380 245 L360 260 Z" fill="#e2f8fb" />
          <circle cx="360" cy="235" r="10" fill="#9fe0e8" />
          <rect x="355" y="243" width="10" height="14" rx="4" fill="#6cc7d2" />
        </g>

        <path
          d="M190 285 C205 270 225 270 240 285 C255 300 275 300 290 285"
          stroke="#7fd3dc"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M300 290 C312 278 330 276 346 288"
          stroke="#9be0e8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
