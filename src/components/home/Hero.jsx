import { useEffect, useRef } from 'react';
import { PenTool, LayoutTemplate, Aperture, Smartphone, Palette, Globe } from 'lucide-react';
import gsap from 'gsap';

const pills = [
  { icon: PenTool, title: 'UI/UX Design', desc: 'App & Web' },
  { icon: LayoutTemplate, title: 'Webflow Dev', desc: 'Fast & Responsive' },
  { icon: Aperture, title: 'Brand Identity', desc: 'Logo & Guidelines' },
  { icon: Smartphone, title: 'Mobile Design', desc: 'iOS & Android' },
  { icon: Palette, title: 'Illustration', desc: 'Custom Art' },
  { icon: Globe, title: 'Web App', desc: 'SaaS & Dashboard' },
];

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-fade-up', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.gsap-fade-right', {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative maxH720:pt-[3rem] pt-[10rem] px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 maxH720:min-h-screen">
        {/* Left - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="gsap-fade-up inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
            Design Agency
          </div>
          <h1 className="gsap-fade-up text-5xl md:text-6xl lg:text-7xl  font-bold tracking-tight text-zinc-900 leading-[1.08] mb-6">
            Premium Design Without Limits.
          </h1>
          <p className="gsap-fade-up text-lg md:text-xl text-zinc-600 max-w-xl mb-10 mx-auto lg:mx-0">
            Scale your startup with a ready-to-go elite design team. World-class agency quality, with the flexibility of a monthly subscription.
          </p>
          <div className="gsap-fade-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-transform hover:scale-105">
              Get Started
            </a>
            <a href="#pricing" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-transform hover:scale-105">
              See Our Pricing
            </a>
          </div>
        </div>

        {/* Right - Floating Pills Effect */}
        <div className="gsap-fade-right lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md h-[380px] md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#f4f4f5] via-transparent to-[#f4f4f5] z-10 pointer-events-none rounded-3xl"></div>
            <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-3xl">
              <div className="float-pills flex flex-col gap-4 px-4 pt-2">
                {[...pills, ...pills].map((pill, index) => {
                  const Icon = pill.icon;
                  return (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                      <div className="bg-zinc-100 p-2.5 rounded-xl shrink-0">
                        <Icon className="w-5 h-5 text-zinc-700" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-zinc-900">{pill.title}</p>
                        <p className="text-xs text-zinc-500">{pill.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Marquee */}
      <div className="w-full border-y border-zinc-200 py-8 bg-white/40 backdrop-blur-sm rounded-3xl text-center">
        <p className="text-sm text-zinc-500 font-medium mb-6 uppercase tracking-wider">Trusted by innovative teams</p>
        <div className="marquee-container opacity-60">
          <div className="marquee-content items-center grayscale">
            <h3 className="text-2xl font-bold font-serif">amara</h3>
            <h3 className="text-2xl font-black">atica.</h3>
            <h3 className="text-2xl font-bold tracking-tighter">aven.</h3>
            <h3 className="text-2xl font-mono">{'{CodeLab}'}</h3>
            <h3 className="text-2xl font-bold italic">hexa</h3>
            <h3 className="text-2xl font-semibold">ideaa.</h3>
            <h3 className="text-2xl font-bold">LightAI</h3>
          </div>
          <div className="marquee-content items-center grayscale">
            <h3 className="text-2xl font-bold font-serif">amara</h3>
            <h3 className="text-2xl font-black">atica.</h3>
            <h3 className="text-2xl font-bold tracking-tighter">aven.</h3>
            <h3 className="text-2xl font-mono">{'{CodeLab}'}</h3>
            <h3 className="text-2xl font-bold italic">hexa</h3>
            <h3 className="text-2xl font-semibold">ideaa.</h3>
            <h3 className="text-2xl font-bold">LightAI</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
