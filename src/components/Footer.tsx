import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 relative overflow-hidden">
      {/* Blueprint grid texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white max-w-md">
            Bidding on a project? Let&apos;s build the proposal together.
          </h3>
          <Link
            href="/contact"
            className="shrink-0 bg-amber text-white px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity w-fit"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-lg font-semibold text-white">JANDED</p>
          <p className="mt-3 text-sm leading-relaxed max-w-sm">
            Janded Global Resources Ltd. — Civil & structural engineering,
            ICT & supply, electrical/mechanical services, and procurement.
            Est. 2012, Abuja.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-white/40 text-xs uppercase mb-3">Contact</p>
          <p>No. 9 Konoko Street, Wuse 2, Abuja, FCT</p>
          <p>09078921750</p>
          <p>08114381212</p>
          <p>info@jaded.ng</p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-white/40 text-xs uppercase mb-3">Company</p>
          <Link href="/about" className="block hover:text-white transition-colors">About</Link>
          <Link href="/services" className="block hover:text-white transition-colors">Services</Link>
          <Link href="/projects" className="block hover:text-white transition-colors">Projects</Link>
          <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Janded Global Resources Ltd. RC: 1003985.
      </div>
    </footer>
  );
}