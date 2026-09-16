import Link from "next/link";

const icons = {
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 3v18M17 7.5c0-1.66-2.24-3-5-3s-5 1.34-5 3 2.24 3 5 3 5 1.34 5 3-2.24 3-5 3-5-1.34-5-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2l3 6.5 7 1-5 5 1.2 7-6.2-3.4L5.8 21.5 7 14.5l-5-5 7-1L12 2z" strokeLinejoin="round" />
    </svg>
  ),
  comms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const pillars = [
  {
    icon: icons.time,
    title: "Time Management",
    desc: "We monitor the contractor's work to ensure progress is in accordance with the approved schedule — continually evaluating resources, materials and equipment on site, and flagging any points of concern in advance of their impact on work progress.",
  },
  {
    icon: icons.cost,
    title: "Cost / Claim Control",
    desc: "Our team utilizes analytical methods and procedures for monitoring, analyzing, forecasting and controlling costs on a construction project — protecting the budget at every stage.",
  },
  {
    icon: icons.quality,
    title: "Quality Management",
    desc: "We provide the planning, checking, reviewing and feedback needed to continually monitor and track project operations, addressing time, cost and product quality to ensure clients receive value for money.",
  },
  {
    icon: icons.comms,
    title: "Effective Communication",
    desc: "We promote effective communication between all parties involved, for exchanging information and resolving issues before they become problems — anticipating and resolving obstacles early in the construction process.",
  },
];

const scheduleItems = [
  "Master schedule development, monitoring and updating",
  "Risk assessment and management",
  "Detailed coordinated schedule establishment",
  "Progress monitoring, control and reporting",
  "Claim control and evaluation",
];

export default function ProjectManagement() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="pm-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pm-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Project Management
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            Completed within scope, on time, and within budget.
          </h1>
        </div>
      </section>

      {/* Intro + image */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-ink mb-5">
            Construction Management, done rigorously
          </h2>
          <div className="space-y-5 text-ink/70 leading-relaxed">
            <p>
              Our Construction Management goals are to ensure projects are
              completed within scope, on time, with the highest quality, and
              within budget. We take these objectives seriously and employ
              proven professional methods to ensure constructability
              reviews, project development and construction supervision
              conform to high standards of engineering excellence and all
              applicable plans, specifications, rules and regulations.
            </p>
            <p>
              We&apos;re convinced of the benefits our clients gain from the
              interaction of constructive expertise and design — improving
              contracting strategy and adapting design packages to fit a
              subcontracting plan. As construction managers, we believe our
              knowledge should be applied in the early phase of a project,
              where the most noteworthy savings can be realized.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] bg-surface-alt border border-line">
          <img
            src="/images/project-management.jpeg"
            alt="Janded project management on site"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            What we manage
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-14 max-w-xl">
            JANDED provides qualified and trained individuals to manage:
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {pillars.map((p) => (
              <div key={p.title} className="bg-surface p-10">
                <div className="w-12 h-12 border border-line flex items-center justify-center text-steel mb-6">
                  {p.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Management */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
            Schedule Management
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Our contemporary approach to pre-construction, construction and
            post-construction stages utilizes internationally recognized
            scheduling techniques, project control methods and computer
            applications.
          </p>
        </div>
        <ol className="space-y-0">
          {scheduleItems.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-5 py-5 border-b border-line last:border-b-0"
            >
              <span className="font-heading text-2xl font-semibold text-amber/40 shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink/80 leading-relaxed pt-1">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-xl mx-auto">
            Bring us in early — that&apos;s where the savings are.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/health-safety"
              className="border border-line text-ink px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
            >
              Health & Safety Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}