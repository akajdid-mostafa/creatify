import { useEffect, useRef } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center">
        <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Our Services</div>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">Problem-Solving Design.</h2>
        <p className="text-lg text-zinc-600 mb-16 max-w-2xl mx-auto">Explore the key expertise that drives our partners&apos; growth day after day.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Service Card 1 */}
          <div className="gsap-card bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">UI/UX &amp; Web Design</h3>
            <p className="text-zinc-500 mb-8">We design intuitive and aesthetic interfaces to increase your user conversion and retention.</p>
            <div className="bg-zinc-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                <div className="bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center"><Smartphone className="w-4 h-4 text-white" /></div>
                <span className="font-medium text-sm">Mobile App Design</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                <div className="bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center"><Monitor className="w-4 h-4 text-white" /></div>
                <span className="font-medium text-sm">SaaS Dashboard</span>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="gsap-card bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Branding &amp; Identity</h3>
            <p className="text-zinc-500 mb-8">Build an unforgettable brand with a coherent visual identity from logo to brand guidelines.</p>
            <div className="bg-zinc-50 rounded-xl p-4 flex justify-between items-end h-32">
              <div className="w-8 bg-zinc-200 rounded-t-md h-1/3"></div>
              <div className="w-8 bg-zinc-300 rounded-t-md h-1/2"></div>
              <div className="w-8 bg-zinc-400 rounded-t-md h-3/4"></div>
              <div className="w-8 bg-zinc-900 rounded-t-md h-full"></div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="gsap-card bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Webflow Development</h3>
            <p className="text-zinc-500 mb-8">We implement your designs into Webflow for lightning-fast, responsive, and easy-to-manage websites.</p>
            <div className="bg-zinc-50 rounded-xl p-4 space-y-3">
              <div className="h-4 bg-zinc-200 rounded-full w-3/4"></div>
              <div className="h-4 bg-zinc-200 rounded-full w-1/2"></div>
              <div className="h-4 bg-zinc-200 rounded-full w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
