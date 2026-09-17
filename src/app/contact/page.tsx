"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="contact-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <p className="text-amber text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Contact Us
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.1]">
            Let&apos;s talk about your project.
          </h1>
        </div>
      </section>

      {/* Form + details */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[1fr_1.3fr] gap-14">
        {/* Details */}
        <div className="space-y-10">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/50 mb-2">
              Office Address
            </p>
            <p className="text-ink/80">No. 9 Konoko Street, Wuse 2, Abuja, FCT</p>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/50 mb-2">
              Phone
            </p>
            <p className="text-ink/80">09078921750</p>
            <p className="text-ink/80">08114381212</p>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/50 mb-2">
              Email
            </p>
            <a href="mailto:info@janded.ng" className="text-ink/80 hover:text-amber transition-colors">
              info@janded.ng
            </a>
          </div>
          <div className="aspect-[4/3] border border-line overflow-hidden">
            <iframe
              title="Janded Global Resources location"
              src="https://www.google.com/maps?q=No.+9+Konoko+Street,+Wuse+2,+Abuja&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-ink/70 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-line px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink/70 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-line px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm text-ink/70 mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-line px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-ink/70 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full border border-line px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-ink/70 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full border border-line px-4 py-3 text-sm focus:outline-none focus:border-amber transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-amber transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-700">
              Message sent — we&apos;ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>
      </section>
    </>
  );
}