import { useEffect, useRef, useState } from "react";
import anuImg from "../assets/anu.png";
const ROLES = ["Digital Marketing Strategist", "SEO Specialist", "Social Media Marketer", "Growth Partner"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-6"
      style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-950/75 z-0" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent 70%)",
            animation: "blobFloat 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent 70%)",
            animation: "blobFloat 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute -bottom-24 left-1/3 w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 70%)",
            animation: "blobFloat 12s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      {/* Scrolling marquee line */}
      <div className="md:hidden absolute bottom-32 left-0 right-0 z-10 overflow-hidden border-y border-white/5 py-3">
        <div
          className="flex gap-16 text-zinc-600 text-xs font-medium tracking-widest uppercase whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              <span>SEO</span><span className="text-purple-500">✦</span>
              <span>Social Media</span><span className="text-purple-500">✦</span>
              <span>SEM</span><span className="text-purple-500">✦</span>
              <span>Content Strategy</span><span className="text-purple-500">✦</span>
              <span>Google Ads</span><span className="text-purple-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 py-32">
        <div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work · Vadakara, Kerala
          </div>

          <h1
            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            I'm{" "}
            <span
              className="text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Anurag
            </span>
          </h1>

          {/* Typewriter role */}
          <div
            className="h-10 flex items-center mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          >
            <span className="text-xl md:text-2xl text-zinc-300 font-light">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-purple-400 ml-1 animate-pulse align-middle" />
            </span>
          </div>

          <p
            className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            I help businesses in Vadakara and beyond grow their online presence through
            data-driven digital marketing strategies — turning clicks into customers.
          </p>

          {/* Stats row */}
          <div
            className="flex gap-10 mb-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
            }}
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "50+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
            }}
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full font-semibold text-zinc-950 overflow-hidden transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
            >
              <span className="relative z-10">Let's Work Together</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)" }}
              />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold text-white border border-zinc-700 hover:border-purple-500/60 hover:bg-zinc-900 transition-all"
            >
              View My Work →
            </a>
          </div>
        </div>

        {/* Right side decorative card */}
        <div
          className="hidden lg:flex flex-col gap-4 w-72 shrink-0"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
          }}
        >
          {/* Profile card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur-md pb-6">
            <div className="w-full h-32 border-b border-purple-500/50 flex items-center justify-center mb-5 overflow-hidden">
              <img src={anuImg} alt="Anurag" className="w-full h-full object-cover object-top" />
            </div>
            <div className="px-6">
              <div className="text-white font-bold text-lg">Anurag</div>
              <div className="text-purple-400 text-sm mb-4">Digital Marketing Strategist</div>
              <div className="flex flex-wrap gap-2">
                {["Google Certified", "HubSpot", "Meta Ads"].map((cert) => (
                  <span key={cert} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Live metric cards */}
          <div
            className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-5"
            style={{ animation: "floatY 4s ease-in-out infinite" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-400 text-sm">Avg. Traffic Growth</span>
              <span className="text-green-400 text-xs font-medium">↑ 150%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/4" />
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-5"
            style={{ animation: "floatY 4s ease-in-out infinite 1s" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-400 text-sm">Conversion Rate Boost</span>
              <span className="text-green-400 text-xs font-medium">↑ 40%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 w-2/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase"
        style={{ animation: "bounce 2s ease-in-out infinite" }}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.05); }
          66% { transform: translate(-20px,15px) scale(0.95); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}