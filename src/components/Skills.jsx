import { useEffect, useRef, useState } from "react";
import iconSeo from "../assets/icon_seo.png";
import iconSocial from "../assets/icon_social.png";
import iconAds from "../assets/icon_ads.png";
import iconAnalytics from "../assets/icon_analytics.png";

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

const skillGroups = [
  {
    category: "SEO & SEM",
    icon: iconSeo,
    color: "from-purple-600 to-violet-600",
    items: [
      { name: "Search Engine Optimization", level: 92 },
      { name: "Search Engine Marketing", level: 88 },
      { name: "Keyword Research", level: 95 },
      { name: "On-Page Optimization", level: 90 },
      { name: "Local SEO (Vadakara)", level: 94 },
    ],
  },
  {
    category: "Social Media",
    icon: iconSocial,
    color: "from-pink-600 to-rose-600",
    items: [
      { name: "Social Media Management", level: 90 },

      { name: "Meta Ads (Facebook/Instagram)", level: 87 },
      { name: "Content Strategy", level: 88 },
      { name: "Community Building", level: 85 },
      { name: "Influencer Marketing", level: 80 },
    ],
  },
  {
    category: "Advertising",
    icon: iconAds,
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "Google Ads", level: 89 },
      { name: "PPC Campaigns", level: 86 },
      { name: "Remarketing", level: 84 },
      { name: "A/B Testing", level: 82 },
      { name: "Conversion Optimization", level: 88 },
    ],
  },
  {
    category: "Tools & Analytics",
    icon: iconAnalytics,
    color: "from-blue-600 to-cyan-500",
    items: [
      { name: "Google Analytics", level: 91 },
      { name: "SEMrush / Ahrefs", level: 87 },
      { name: "Meta Ads Manager", level: 88 },
      { name: "Mailchimp / HubSpot", level: 82 },
      { name: "Data Visualization", level: 78 },
    ],
  },
];

function AnimatedBar({ level, inView, delay }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          width: inView ? `${level}%` : "0%",
          transition: `width 1s ease ${delay}s`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-28 bg-zinc-950 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 60%)" }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">What I bring</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            My <span className="text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Expertise</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
            From search to social — a full-stack digital marketing arsenal built through hands-on experience.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.2)]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + gi * 0.1}s, transform 0.7s ease ${0.1 + gi * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-7">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} p-1.5 shadow-lg`}>
                  <img src={group.icon} alt={group.category} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                      <span className="text-zinc-500 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <AnimatedBar level={skill.level} inView={inView} delay={0.3 + gi * 0.1 + si * 0.05} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Services quick tags */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.6s",
          }}
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-5">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Email Marketing", "Brand Strategy", "Website Development", "Copywriting",
              "Lead Generation", "CRO", "Competitor Analysis", "Funnel Design"
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm rounded-full border border-zinc-800 text-zinc-400 hover:border-purple-500/50 hover:text-purple-300 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}