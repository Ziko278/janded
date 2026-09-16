import Link from "next/link";

const icons = {
  civil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h.01M9 15h.01M15 11h.01M15 15h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ict: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
    </svg>
  ),
  electrical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 10h18l-2 8H5l-2-8z" strokeLinejoin="round" />
      <path d="M6 10l1.5 8M12 10v8M18 10l-1.5 8M12 6v4" strokeLinecap="round" />
    </svg>
  ),
  general: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.5 9.5a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8L14.7 6.3z" strokeLinejoin="round" />
    </svg>
  ),
  procurement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const services = [
  {
    id: "civil-structural",
    icon: icons.civil,
    image: "/images/services/civil.jpeg",
    title: "Civil & Structural Engineering",
    desc: "We design economical structural systems suited to a wide range of project types — from buildings to road infrastructure. Our philosophy is to create structural designs that complement the architectural vision while facilitating ease of construction, backed by rigorous constructability reviews before ground is ever broken.",
    points: [
      "Structural design & analysis",
      "Building and civil works",
      "Road construction",
      "Constructability reviews",
    ],
  },
  {
    id: "ict-supply",
    icon: icons.ict,
    image: "/images/services/ict.jpeg",
    title: "ICT, Computers & Supply",
    desc: "We equip organizations with the technology infrastructure and hardware they need to run reliably — from computer and network equipment supply to full ICT infrastructure setup. Every deployment is scoped around what the client's operations actually demand, not a one-size-fits-all package.",
    points: [
      "Computer & IT equipment supply",
      "ICT infrastructure setup",
      "Network systems",
      "Technology consulting",
    ],
  },
  {
    id: "electrical-mechanical",
    icon: icons.electrical,
    image: "/images/services/electrical.jpeg",
    title: "Electrical & Mechanical Services",
    desc: "Our electrical and mechanical teams deliver installation and maintenance work engineered for long-term reliability, including solar energy systems for clients looking to integrate renewable power into new or existing projects — reducing long-term operating costs while meeting sustainability goals.",
    points: [
      "Electrical installation & maintenance",
      "Mechanical systems",
      "Solar energy systems",
      "Renewable energy integration",
    ],
  },
  {
    id: "general-services",
    icon: icons.general,
    image: "/images/services/general.jpeg",
    title: "General Services",
    desc: "Beyond our core disciplines, we provide flexible, multi-disciplinary support for project needs that fall outside a single specialization. Through our network of associates, we bring in the right expertise depending on project complexity, so clients get one point of contact instead of managing multiple contractors.",
    points: [
      "Facility support services",
      "Multi-disciplinary project support",
      "General contracting",
      "Partner & associate network access",
    ],
  },
  {
    id: "procurement",
    icon: icons.procurement,
    image: "/images/services/procurement.jpeg",
    title: "Procurement",
    desc: "We manage sourcing and supply chains for project materials with an emphasis on cost control and timeline reliability. Our vendor relationships, built over years of operation, mean clients get dependable pricing and delivery — critical for keeping a project on schedule and within budget.",
    points: [
      "Materials sourcing",
      "Supply chain management",
      "Vendor management",
      "Cost-controlled purchasing",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="services-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Our Services
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            Reliable total project solutions, from a multi-disciplinary team.
          </h1>
          <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
            Our deep skill set and fundamental understanding of every aspect
            of project development allow us to offer innovative services
            uniquely fit to each client&apos;s requirements.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-5 flex flex-wrap gap-x-8 gap-y-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-ink/60 hover:text-amber transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Service sections — zig-zag */}
      {services.map((s, i) => {
        const imageFirst = i % 2 === 0;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 ${i % 2 === 1 ? "bg-surface-alt" : ""}`}
          >
            <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div
                className={`relative aspect-[4/3] border border-line ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -left-4 md:-left-6 w-14 h-14 bg-surface border border-line flex items-center justify-center text-amber">
                  {s.icon}
                </div>
              </div>

              <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
                  {s.title}
                </h2>
                <p className="text-ink/70 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 border-l-2 border-amber pl-6">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-ink/70 flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-1 bg-amber shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-xl mx-auto">
          Have a project that needs multi-disciplinary expertise?
        </h2>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/project-management"
            className="border border-line text-ink px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
          >
            See Our Project Management
          </Link>
        </div>
      </section>
    </>
  );
}