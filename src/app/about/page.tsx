import Link from "next/link";

const facts = [
  { label: "Established", value: "3rd January, 2012" },
  { label: "Registration", value: "RC 1003985" },
  { label: "Specialization", value: "Multi-disciplinary" },
  { label: "Base", value: "Abuja, FCT" },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="about-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            About Us
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            A new-generation construction firm, built on trust and delivery.
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] bg-surface-alt border border-line order-2 md:order-1">
          <img
            src="/images/about.jpeg"
            alt="Janded Global Resources engineering team on site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-2xl font-semibold text-ink mb-5">Introduction</h2>
          <div className="space-y-5 text-ink/70 leading-relaxed">
            <p>
              JANDED was incorporated as a new-generation construction firm
              under the Companies and Allied Matters Act 1990 on 3rd January,
              2012, with Registration Number RC 1003985 at the Corporate
              Affairs Commission. We belong to a generation of dependable and
              reliable companies, with a main focus on Building and Civil
              Works, Project Management and Services, Architectural
              Consultancy Services, and General Services.
            </p>
            <p>
              We render first-class and highly rated effective services to
              both individuals and corporate organizations. Our legacy is
              quick response to clients&apos; needs, dedication to duty, and
              teamwork geared toward timely project completion.
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/50 mb-2">
                {f.label}
              </p>
              <p className="font-heading font-semibold text-ink">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-px bg-line border border-line">
        <div className="bg-surface p-10 md:p-12">
          <h2 className="font-heading text-xl font-semibold text-ink mb-4">
            Mission Statement
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Our goal is to achieve total satisfaction that will meet or
            exceed our clients&apos; individual expectations by consistently
            delivering services with the highest level of professionalism
            and quality.
          </p>
        </div>
        <div className="bg-surface p-10 md:p-12">
          <h2 className="font-heading text-xl font-semibold text-ink mb-4">
            Vision Statement
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Our vision is to establish a reputation in building dream
            structures and roads for our clients, and to promote innovation
            that will enhance communities at the private, international
            organisation, NGO, local, state and federal levels.
          </p>
        </div>
      </section>

      {/* Values, Approach, Team */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-3 gap-px bg-line border border-line">
          <div className="bg-surface p-10">
            <h2 className="font-heading text-lg font-semibold text-ink mb-4">Values</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              We believe in individual creative capabilities, education,
              employee empowerment and team collaboration — bringing value
              to our clients, our jobs and the community, and a competitive
              edge over our competitors.
            </p>
          </div>
          <div className="bg-surface p-10">
            <h2 className="font-heading text-lg font-semibold text-ink mb-4">Approach</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              We pull together the best expertise into every project team.
              Long-standing joint venture and alliance relationships let us
              respond creatively to project challenges, controlling costs
              while delivering on time with the highest quality.
            </p>
          </div>
          <div className="bg-surface p-10">
            <h2 className="font-heading text-lg font-semibold text-ink mb-4">Our Team</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              A highly skilled, professionally trained workforce, working
              across departments headed by well-seasoned, time-tested
              professionals — networked with associates across Nigeria and
              beyond for added flexibility on complex projects.
            </p>
          </div>
        </div>
      </section>

      {/* CAC download */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink mb-2">
              Registered &amp; Certified
            </h2>
            <p className="text-ink/70 text-sm">
              JANDED is duly incorporated with the Corporate Affairs
              Commission, RC 1003985.
            </p>
          </div>
          <a
            href="/cac-certificate.pdf"
            download
            className="shrink-0 inline-flex items-center gap-2 bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-amber transition-colors w-fit"
          >
            Download CAC Certificate
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M8 2v9m0 0l3-3m-3 3L5 8M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-xl mx-auto">
          Want to see how we work in practice?
        </h2>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/project-management"
            className="bg-ink text-white px-7 py-3.5 text-sm font-medium hover:bg-amber transition-colors"
          >
            Our Project Management
          </Link>
          <Link
            href="/projects"
            className="border border-line text-ink px-7 py-3.5 text-sm font-medium hover:border-ink transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>
    </>
  );
}