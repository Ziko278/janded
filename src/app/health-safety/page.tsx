import Link from "next/link";

const commitments = [
  "A safe and healthy working environment, with risk analyses and hazard identification",
  "Systems of work that are safe and without risk to health",
  "General training so employees are aware of hazards relevant to their work",
  "Specific training in safe working procedures, plant/machinery operation and accident prevention",
  "Regular review of workforce training needs, with refresher courses",
  "Basic training for new employees and young workers on any new plant or systems introduced",
  "Personal protective clothing and equipment appropriate to the job",
  "Guidance on what to do in the event of an emergency",
  "On-site welfare and first-aid provision, fully compliant with statutory requirements",
  "Adequate firefighting equipment and fire training, in liaison with the fire authority",
  "Ongoing contact with relevant health & safety bodies for up-to-date legislation and guidance",
];

const governance = [
  {
    title: "Safety Officer Oversight",
    desc: "The Board of Directors has appointed a Safety Officer responsible for health & safety, reviewing this policy at least annually — more frequently where new legislation, work types or equipment require it.",
  },
  {
    title: "Policy Awareness",
    desc: "The Health & Safety Officer ensures every employee has received this policy, and that its provisions are understood and carefully observed at all times.",
  },
  {
    title: "Employee Involvement",
    desc: "Employees are regularly consulted on matters affecting their health and safety at work, and are encouraged to take an active role in promoting it across the company.",
  },
  {
    title: "SHEQ Committee Meetings",
    desc: "Safety representatives from site and head office hold monthly Safety, Health, Environmental and Quality (SHEQ) committee meetings, with six-monthly management reviews for ongoing monitoring and forward planning.",
  },
];

export default function HealthSafety() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="hs-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hs-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Health &amp; Safety
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            The health, safety and welfare of everyone on site — non-negotiable.
          </h1>
        </div>
      </section>

      {/* Intro + image */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] bg-surface-alt border border-line order-2 md:order-1">
          <img
            src="/images/health-safety.jpeg"
            alt="Construction worker in full PPE on site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-2xl font-semibold text-ink mb-5">Our Policy</h2>
          <p className="text-ink/70 leading-relaxed">
            JANDED recognizes its responsibilities under Health and Safety
            policy, ensuring operations are executed at all times to
            protect the health, safety and welfare of everyone likely to be
            affected — employees, subcontractors, site visitors and members
            of the public. We are committed to continual improvement of our
            health and safety management system, complying with
            international standards and current legislation.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Our Commitments
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-14 max-w-2xl">
            As far as reasonably practicable, we aim to provide:
          </h2>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-1">
            {commitments.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 py-4 border-b border-line"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4 text-amber shrink-0 mt-1"
                >
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-ink/70 leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
        <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
          How It&apos;s Governed
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-14 max-w-xl">
          Policy is only as good as its oversight.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {governance.map((g) => (
            <div key={g.title} className="bg-surface p-10">
              <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                {g.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink max-w-xl mx-auto">
            Questions about our safety standards on your project?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/project-management"
              className="border border-line text-ink px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
            >
              Project Management
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}