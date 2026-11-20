import { useEffect, useRef } from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    image: '/images/team/team-1.webp',
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    linkedin: '#',
    twitter: '#',
  },
  {
    image: '/images/team/team-2.webp',
    name: 'James Anderson',
    role: 'Lead Designer',
    linkedin: '#',
    twitter: '#',
  },
  {
    image: '/images/team/team-3.webp',
    name: 'Emily Chen',
    role: 'UX Strategist',
    linkedin: '#',
    twitter: '#',
  },
  {
    image: '/images/team/team-4.webp',
    name: 'Michael Brooks',
    role: 'Webflow Developer',
    linkedin: '#',
    twitter: '#',
  },
];

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-team').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-zinc-50">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Our Team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Meet the Experts
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            A dedicated team of designers and developers passionate about crafting exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div key={index} className="gsap-team group text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.linkedin} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                    <ExternalLink className="w-4 h-4 text-zinc-700" />
                  </a>
                  <a href={member.twitter} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                    <Share2 className="w-4 h-4 text-zinc-700" />
                  </a>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-zinc-900">{member.name}</h3>
              <p className="text-sm text-zinc-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
