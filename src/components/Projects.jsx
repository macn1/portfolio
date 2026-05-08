import { useEffect, useRef, useState } from "react";
import projBrandRevival from "../assets/proj_brand_revival.png";
import projEcommerceSeo from "../assets/proj_ecommerce_seo.png";
import projLeadGen from "../assets/proj_lead_gen.png";
import projLocalBusiness from "../assets/proj_local_business.png";
import projSocialGrowth from "../assets/proj_social_growth.png";
import projSemCampaign from "../assets/proj_sem_campaign.png";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const projects = [
  {
    title: "Brand Revival Campaign",
    category: "Social Media · Strategy",
    description:
      "Led a comprehensive rebranding strategy that resulted in a 40% increase in social media engagement and a 25% boost in conversion rates within just 3 months.",
    metrics: [{ label: "Engagement", value: "+40%" }, { label: "Conversions", value: "+25%" }],
    tags: ["Brand Strategy", "Social Media", "Analytics"],
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    accent: "#a855f7",
    image: projBrandRevival,
  },
  {
    title: "E-commerce SEO Overhaul",
    category: "SEO · Content",
    description:
      "Optimized 500+ product pages for search engines, delivering a 150% increase in organic traffic and Page 1 rankings for highly competitive keywords.",
    metrics: [{ label: "Organic Traffic", value: "+150%" }, { label: "Keywords Ranked", value: "Page 1" }],
    tags: ["SEO", "E-commerce", "Content Strategy"],
    gradient: "from-pink-600 via-rose-600 to-red-600",
    accent: "#ec4899",
    image: projEcommerceSeo,
  },
  {
    title: "Lead Gen Funnel Optimization",
    category: "Email · PPC · Automation",
    description:
      "Designed and implemented an automated email marketing funnel that decreased cost-per-lead by 30% while dramatically improving overall lead quality.",
    metrics: [{ label: "Cost Per Lead", value: "-30%" }, { label: "Lead Quality", value: "↑ High" }],
    tags: ["Email Marketing", "Automation", "PPC"],
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    accent: "#3b82f6",
    image: projLeadGen,
  },
  {
    title: "Local Business Digital Launch",
    category: "Local SEO · Google Ads",
    description:
      "Helped a Vadakara-based business establish their complete online presence — from Google Business Profile to local SEO and targeted ad campaigns.",
    metrics: [{ label: "Local Reach", value: "3x" }, { label: "Leads/Month", value: "+60%" }],
    tags: ["Local SEO", "Google Ads", "GMB"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accent: "#f97316",
    image: projLocalBusiness,
  },
  {
    title: "Social Media Growth Sprint",
    category: "Meta Ads · Content",
    description:
      "Ran a 60-day growth sprint for a client using organic content and Meta Ads, scaling followers from 2K to 15K and driving consistent daily reach.",
    metrics: [{ label: "Followers", value: "2K→15K" }, { label: "Daily Reach", value: "+500%" }],
    tags: ["Instagram", "Meta Ads", "Content"],
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    accent: "#10b981",
    image: projSocialGrowth,
  },
  {
    title: "SEM Campaign – Google Ads",
    category: "Google Ads · SEM",
    description:
      "Managed a Google Ads campaign for a service business, achieving a 4.5x ROAS with smart bidding strategies and highly-targeted ad copy.",
    metrics: [{ label: "ROAS", value: "4.5x" }, { label: "CTR", value: "+65%" }],
    tags: ["Google Ads", "SEM", "ROAS"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    accent: "#0ea5e9",
    image: projSemCampaign,
  },
];

export default function Projects() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-28 bg-zinc-900 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">What I've built</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Featured <span className="text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Work</span>
            </h2>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
              Real campaigns. Real results. Every project tells a growth story.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 flex flex-col cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? hovered === i ? "translateY(-6px)" : "translateY(0)"
                  : "translateY(40px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.4s ease, border-color 0.3s, box-shadow 0.3s`,
                borderColor: hovered === i ? `${project.accent}50` : "",
                boxShadow: hovered === i ? `0 20px 40px -15px ${project.accent}30` : "",
              }}
            >
              {/* Image banner */}
              <div className="h-48 w-full relative overflow-hidden bg-zinc-900 border-b border-zinc-700">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                  {project.category}
                </div>
                {/* Metrics overlay */}
                <div className="absolute bottom-4 left-4 flex gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                      <div className="text-white font-bold text-sm">{m.value}</div>
                      <div className="text-white/60 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}