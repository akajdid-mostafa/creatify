import { useEffect, useRef } from 'react';
import { Star, BarChart2, TrendingDown, Clock, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const avatars = [
  '/images/avatars/avatar-1.webp',
  '/images/avatars/avatar-2.webp',
  '/images/avatars/avatar-3.webp',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = sectionRef.current?.querySelectorAll('.counter');
      if (!counters) return;

      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: 'power2.out',
              onUpdate: function () {
                counter.innerHTML = Math.ceil(this.targets()[0].innerHTML);
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto" ref={sectionRef}>
      <div>
        <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">About Us</div>
        <div className="flex flex-col lg:flex-row gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight lg:w-1/2">
            Next-Gen Design Solutions.
          </h2>
          <p className="text-lg text-zinc-600 lg:w-1/2 flex items-end">
            Deep technical expertise + lightning-fast execution—so you can move with confidence and make a maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* Dark Mission Card */}
          <div className="bg-[#111111] text-white p-10 rounded-[2rem] flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-400 mb-12 text-lg">We empower startups and visionary teams with the top-tier design expertise they need to launch faster and smarter.</p>
            </div>
            <div>
              <div className="flex -space-x-3 mb-4">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Client avatar ${index + 1}`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#111111]"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-[#111111] flex items-center justify-center text-xs">+9</div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-semibold">Trusted by 150+ businesses</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <h4 className="text-6xl font-black text-zinc-900 tracking-tighter"><span className="counter" data-target="155">0</span>+</h4>
                <BarChart2 className="text-zinc-300 w-8 h-8" />
              </div>
              <p className="text-zinc-500 font-medium text-lg">Happy clients worldwide</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <h4 className="text-6xl font-black text-zinc-900 tracking-tighter"><span className="counter" data-target="55">0</span>%</h4>
                <TrendingDown className="text-zinc-300 w-8 h-8" />
              </div>
              <p className="text-zinc-500 font-medium text-lg">Reduction in manual work</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <h4 className="text-6xl font-black text-zinc-900 tracking-tighter"><span className="counter" data-target="292">0</span>+</h4>
                <Clock className="text-zinc-300 w-8 h-8" />
              </div>
              <p className="text-zinc-500 font-medium text-lg">Hours saved per month</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <h4 className="text-6xl font-black text-zinc-900 tracking-tighter"><span className="counter" data-target="44">0</span>%</h4>
                <Zap className="text-zinc-300 w-8 h-8" />
              </div>
              <p className="text-zinc-500 font-medium text-lg">Increase in release speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
