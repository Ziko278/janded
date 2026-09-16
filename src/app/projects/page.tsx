import Link from "next/link";

const projects = [
  {
    title: "Telecom Tower Installation",
    category: "Electrical & Mechanical",
    type: "single",
    image: "/images/projects/telecom-tower-1.jpg",
  },
  {
    title: "Broadcast Studio Fit-Out",
    category: "General Services",
    type: "mosaic",
    images: [
      "/images/projects/broadcast-studio-1.jpg",
      "/images/projects/broadcast-studio-2.jpg",
      "/images/projects/broadcast-studio-3.jpg",
      "/images/projects/broadcast-studio-4.jpg",
    ],
  },
  {
    title: "Civil & Structural Works",
    category: "Civil & Structural Engineering",
    type: "single",
    image: "/images/projects/civil-foundation.jpg",
  },
  {
    title: "Steel Materials Procurement",
    category: "Procurement",
    type: "single",
    image: "/images/projects/steel-materials.jpg",
  },
  {
    title: "Mechanical & Plumbing Works",
    category: "Electrical & Mechanical",
    type: "single",
    image: "/images/projects/mechanical-valve.jpg",
  },
  {
    title: "Telecom Grounding & Earthing",
    category: "Civil & Structural Engineering",
    type: "single",
    image: "/images/projects/telecom-tower-2.jpg",
  },
];

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="projects-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Our Projects
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            A track record across engineering, technology and infrastructure.
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group">
              <div className="relative aspect-[4/3] border border-line overflow-hidden">
                {p.type === "mosaic" ? (
                  <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5">
                    {p.images!.map((img) => (
                      <div key={img} className="relative overflow-hidden">
                        <img
                          src={img}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.1em] text-amber font-semibold mb-1.5">
                  {p.category}
                </p>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-xl mx-auto">
            Ready to add your project to this list?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}