import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const contactLinks = [
  {
    label: "Phone",
    value: "+91 70347 58181",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: "tel:+917034758181",
    color: "#a855f7",
  },
  {
    label: "Email",
    value: "anuragdigital@email.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:anuragdigital@email.com",
    color: "#ec4899",
  },
  {
    label: "Location",
    value: "Vadakara, Kozhikode, Kerala",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "#",
    color: "#3b82f6",
  },
];

const socials = [
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "Twitter / X", href: "#", icon: "𝕏" },
  { name: "Facebook", href: "#", icon: "f" },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-zinc-950 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent 60%)",
            animation: "contactPulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 60%)",
            animation: "contactPulse 8s ease-in-out infinite reverse",
          }}
        />

        {/* Horizontal scanlines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }} />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">

        {/* Top heading */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Let's Work{" "}
            <span
              className="text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
            >
              Together
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Currently available for freelance projects and full-time opportunities. Have a project that needs a marketing push? I'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact info */}
          <div
            className="space-y-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Reach Out Directly</h3>
              <p className="text-zinc-500 text-sm">Based in Vadakara — working with clients locally and remotely.</p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-opacity-50 transition-all duration-300 hover:-translate-x-1"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s, border-color 0.3s`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${link.color}20`, border: `1px solid ${link.color}30`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">{link.label}</div>
                    <div className="text-white font-medium group-hover:text-purple-300 transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    title={s.name}
                    className="w-11 h-11 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:border-purple-500/50 hover:text-purple-400 hover:-translate-y-1 transition-all text-sm font-bold"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-green-500/20 bg-green-500/5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              <span className="text-green-400 text-sm font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className="relative"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8">
              {sent ? (
                <div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  style={{ animation: "fadeIn 0.5s ease" }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-3xl mb-4">✓</div>
                  <h4 className="text-white text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-zinc-400 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
                  <button
                    onClick={() => { setSent(false); setFormState({ name: "", email: "", message: "" }); }}
                    className="mt-6 text-purple-400 text-sm hover:text-purple-300 transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                  <div>
                    <label className="text-zinc-400 text-sm mb-2 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-zinc-400 text-sm mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-zinc-400 text-sm mb-2 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {sending ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes contactPulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}