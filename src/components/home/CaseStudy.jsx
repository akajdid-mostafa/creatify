import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    image: '/images/cases/case-1.webp',
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    description: 'Complete dashboard redesign for a leading fintech startup, improving user engagement by 40%.',
  },
  {
    image: '/images/cases/case-2.webp',
    title: 'E-commerce Platform',
    category: 'Webflow Development',
    description: 'High-converting e-commerce site with custom animations and seamless checkout flow.',
  },
  {
    image: '/images/cases/case-3.webp',
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete visual identity including logo, guidelines, and marketing collateral.',
  },
];

export default function CaseStudy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-case').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cases" ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          Case Studies
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Featured Work
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
          Explore our latest projects and see how we help brands achieve their goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cases.map((item, index) => (
          <article
            key={index}
            className="gsap-case group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                  View Project <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{item.category}</span>
              <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
