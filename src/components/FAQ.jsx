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

const faqs = [
  {
    question: "Does Anurag provide digital marketing services outside Vadakara and Kerala?",
    answer: "Yes, Anurag's digital marketing services are not confined to Vadakara or Kerala. His reputation as a skilled strategist has earned him clients from all over India and beyond. Whether you're a local business or an international brand, his solutions are designed to deliver measurable results."
  },
  {
    question: "What services does a digital marketer offers ?",
    answer: "As a comprehensive digital marketing expert, I offer a wide range of services including Search Engine Optimization (SEO), Social Media Management, Meta Ads, Google Ads (SEM), Content Strategy, and Local SEO to help businesses build a strong online presence and drive revenue."
  },
  {
    question: "What sets digital marketing apart from traditional marketing?",
    answer: "Digital marketing allows for precise targeting, real-time analytics, and measurable ROI. Unlike traditional marketing, it enables two-way communication with your audience and gives you the ability to optimize campaigns on the fly for maximum effectiveness and cost-efficiency."
  },
  {
    question: "What is the difference between a digital marketer and a freelance digital marketer?",
    answer: "A freelance digital marketer like myself offers direct, personalized service with more flexibility and often better value compared to large agencies. You work directly with the strategist handling your campaigns, ensuring clear communication, agility, and dedicated attention to your business goals."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 bg-zinc-950 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 -right-40 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 60%)" }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Left: Heading */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-widest">
              Frequently<br />
              Asked<br />
              Questions
            </h2>
            <div className="mt-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>

          {/* Right: Accordion */}
          <div
            className="space-y-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className={`border-b border-zinc-800 pb-2 transition-colors duration-300 ${isOpen ? "border-purple-500/50" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <h3 className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? "text-purple-400" : "text-white group-hover:text-purple-300"}`}>
                      {faq.question}
                    </h3>
                    <div className="shrink-0 text-zinc-500 transition-transform duration-300">
                      {isOpen ? (
                        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 group-hover:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-6 text-zinc-400 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <div
          className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.6s",
          }}
        >
          <p>© {new Date().getFullYear()} Anurag. All rights reserved. · Vadakara, Kerala</p>
          <div className="flex gap-6">
            {["LinkedIn", "Instagram", "Twitter", "Facebook"].map((s) => (
              <a key={s} href="#" className="hover:text-purple-400 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
