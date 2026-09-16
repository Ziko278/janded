import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";

const icons = {
  civil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h.01M9 15h.01M15 11h.01M15 15h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ict: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
    </svg>
  ),
  electrical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 10h18l-2 8H5l-2-8z" strokeLinejoin="round" />
      <path d="M6 10l1.5 8M12 10v8M18 10l-1.5 8M12 6v4" strokeLinecap="round" />
    </svg>
  ),
  general: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.5 9.5a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8L14.7 6.3z" strokeLinejoin="round" />
    </svg>
  ),
  procurement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const specializations = [
  {
    title: "Civil & Structural Engineering",
    desc: "Structural systems designed for constructability, built to complement the architectural vision.",
    icon: icons.civil,
  },
  {
    title: "ICT, Computers & Supply",
    desc: "Technology infrastructure and equipment supply for modern operations.",
    icon: icons.ict,
  },
  {
    title: "Electrical & Mechanical Services",
    desc: "Including solar energy systems, engineered for reliability.",
    icon: icons.electrical,
  },
  {
    title: "General Services",
    desc: "Flexible, multi-disciplinary support across project needs.",
    icon: icons.general,
  },
  {
    title: "Procurement",
    desc: "Reliable sourcing and supply chain management for project materials.",
    icon: icons.procurement,
  },
];

const facts = [
  { label: "Established", value: "2012" },
  { label: "Registration", value: "RC 1003985" },
  { label: "Base", value: "Abuja, FCT" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink text-white">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div className="animate-[fadeUp_0.7s_ease-out]">
            <p className="text-amber text-sm font-medium mb-5">
              Est. 2012 · RC 1003985 · Abuja, Nigeria
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold leading-[1.1] max-w-xl">
              Total project solutions, delivered on time and on budget.
            </h1>
            <TypewriterText
              text="Janded Global Resources Ltd. brings multi-disciplinary engineering, technology and procurement expertise to every project — from civil works to full-scale project management."
              className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed min-h-[7rem]"
            />
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-amber text-white px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-[5/4] bg-white/5 border border-white/10">
            {/* Swap src once hero image is generated */}
            <img
              src="/images/hero.jpeg"
              alt="Janded Global Resources construction site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ SPECIALIZATIONS ============ */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-24">
        <div className="max-w-xl mb-14">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Our Capabilities
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink">
            What we do
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            A multi-disciplinary team built to fit any project requirement,
            from design through delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {specializations.map((s) => (
            <Link
              key={s.title}
              href="/services"
              className="group bg-surface p-8 flex flex-col gap-6 relative hover:bg-surface-alt transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 border border-line flex items-center justify-center text-steel group-hover:border-amber group-hover:text-amber transition-colors">
                  {s.icon}
                </div>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4 text-ink/20 group-hover:text-amber group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                >
                  <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}

          <Link
            href="/services"
            className="relative bg-ink p-8 flex flex-col justify-between group overflow-hidden"
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
            <div className="relative">
              <span className="text-amber text-xs font-semibold uppercase tracking-[0.15em]">
                Full portfolio
              </span>
              <p className="font-heading text-xl font-semibold text-white mt-3 max-w-[14rem] leading-snug">
                Explore every service we offer
              </p>
            </div>
            <span className="relative text-amber text-sm font-medium mt-6 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 w-fit">
              View Services
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ============ WHY JANDED ============ */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Why Janded
          </p>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 md:gap-20">
            {/* Left: heading + facts */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-md leading-tight">
                Built on professionalism, delivered with precision.
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
                We pair deep technical capability with a project-first mindset —
                so clients get solutions that fit the brief, the budget and the
                timeline.
              </p>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/50 mb-2">
                      {f.label}
                    </dt>
                    <dd className="font-heading font-semibold text-ink text-base">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: principles */}
            <div className="space-y-10 border-l-2 border-amber pl-8 md:pl-10">
              <div>
                <h3 className="font-heading font-semibold text-ink mb-3 text-lg">
                  Our Approach
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed max-w-lg">
                  We pull together the best expertise into every project team,
                  responding creatively to challenges and reducing costs
                  without compromising quality. Our legacy is quick response
                  to client needs, and delivery driven by teamwork.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-ink mb-3 text-lg">
                  Our Values
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed max-w-lg">
                  Individual creative capability, employee empowerment and team
                  collaboration — backed by modern technology and continuous
                  education. This is what gives us a competitive edge and, more
                  importantly, what our clients benefit from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GET IN TOUCH ============ */}
        <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-28 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block w-12 h-[3px] bg-amber mx-auto mb-7" />
            <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Get in touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink leading-[1.1]">
              Ready to discuss your project?
            </h2>
            <p className="mt-6 text-ink/70 text-lg max-w-xl mx-auto leading-relaxed">
              Reach out with the scope, the timeline, or just a rough brief —
              we&apos;ll respond promptly.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/projects"
                className="border border-line text-ink px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}