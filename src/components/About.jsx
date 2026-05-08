import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/anurag.jpeg";
import iconStrategy from "../assets/icon_strategy.png";
import iconData from "../assets/icon_data.png";
import iconGrowth from "../assets/icon_growth.png";
import iconClient from "../assets/icon_client.png";
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const highlights = [
  { icon: iconStrategy, title: "Strategy-First", desc: "Every campaign starts with research and a clear roadmap." },
  { icon: iconData, title: "Data-Driven", desc: "Decisions backed by analytics, not guesswork." },
  { icon: iconGrowth, title: "Growth-Focused", desc: "Measurable ROI is always the goal." },
  { icon: iconClient, title: "Client-Centric", desc: "Transparent communication and regular reporting." },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28 bg-zinc-900 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
            About <span className="text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image card */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -inset-3 rounded-3xl border border-purple-500/20" />
              <div className="absolute -inset-6 rounded-3xl border border-purple-500/10" />

              <div className="relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 aspect-[4/5]">
                <img src={profileImg} alt="Anurag" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/20 pointer-events-none" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/80 backdrop-blur-md rounded-xl border border-zinc-700 p-4 flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-white font-semibold text-sm">Vadakara, Kerala</div>
                    <div className="text-zinc-400 text-xs">Digital Marketing HQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div
            className="space-y-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Best Digital Marketing Strategist in Vadakara
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Hi, I'm Anurag — a digital marketing expert from Vadakara, Kerala. I'm dedicated to pursuing a career in digital marketing and currently learning digital marketing at Thinkroom Institute, Kolathur, where I'm focused on the latest online marketing trends.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I possess skills in areas such as SEO, Meta Ads, Google Ads, website development, and branding. I strive to provide comprehensive digital solutions to drive exceptional results, with every strategy based on a profound understanding of the market and the latest trends in digital marketing.
            </p>

            {/* Certifications row */}
            <div className="pt-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Certified by</p>
              <div className="flex flex-wrap gap-3">
                {["Google", "HubSpot", "Meta", "SEMrush"].map((cert) => (
                  <span key={cert} className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-purple-500/50 transition-colors">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
              >
                Hire Me <span>→</span>
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-zinc-300 border border-zinc-700 hover:border-purple-500/50 transition-all">
                My Work
              </a>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.4 + i * 0.1}s, transform 0.6s ease ${0.4 + i * 0.1}s, border-color 0.3s, translate 0.3s`,
              }}
            >
              <div className="w-10 h-10 mb-4">
                <img src={h.icon} alt={h.title} className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <h4 className="text-white font-semibold mb-2">{h.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}