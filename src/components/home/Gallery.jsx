import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  { image: '/images/gallery/gallery-1.webp', alt: 'Modern office workspace' },
  { image: '/images/gallery/gallery-2.webp', alt: 'Creative studio space' },
  { image: '/images/gallery/gallery-3.webp', alt: 'Design collaboration area' },
  { image: '/images/gallery/gallery-4.webp', alt: 'Team meeting room' },
  { image: '/images/gallery/gallery-5.webp', alt: 'Lounge and break area' },
  { image: '/images/gallery/gallery-6.webp', alt: 'Presentation space' },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-gallery').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          Our Studio
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Where Magic Happens
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
          A glimpse into our creative workspace where ideas come to life.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="gsap-gallery group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/2]"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
