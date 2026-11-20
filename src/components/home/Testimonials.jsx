import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';

const reviews = [
  {
    text: '"Creatify transformed how we build products. The subscription process is incredibly easy to manage, yet produces outstanding high-quality designs."',
    name: 'Michael Torres',
    role: 'Head of Product',
    avatar: '/images/avatars/avatar-4.webp',
  },
  {
    text: '"They helped us redesign our entire app in weeks, not months. This limitless model is highly profitable and efficient."',
    name: 'Lucas Bennett',
    role: 'CEO & Founder',
    avatar: '/images/avatars/avatar-2.webp',
  },
  {
    text: '"We cut our traditional agency costs by over 50% while dramatically improving our brand\'s overall visual quality."',
    name: 'Amy Louis',
    role: 'Marketing Director',
    avatar: '/images/avatars/avatar-1.webp',
  },
  {
    text: '"The turnaround speed is unmatched. Every request came back polished, strategic, and ready to implement into our product workflow."',
    name: 'Sarah Klein',
    role: 'Startup Founder',
    avatar: '/images/avatars/avatar-3.webp',
  },
  {
    text: '"Creatify feels like having an in-house senior design team without the overhead. Communication and quality have been consistently excellent."',
    name: 'Daniel Kim',
    role: 'Product Lead',
    avatar: '/images/avatars/avatar-5.webp',
  },
];

export default function Testimonials() {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to('.testimonial-track', {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="clients" className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="mb-12 flex flex-col md:flex-row md:!text-left text-center justify-center md:justify-between md:items-end gap-6">
        <div>
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Our Clients</div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight">What They Say.</h2>
        </div>
        <p className="text-zinc-600 max-w-sm text-center md:text-right">Real stories from brands using Creatify to scale with measurable results.</p>
      </div>

      <div
        ref={marqueeRef}
        className="-mx-4 md:-mx-8 overflow-hidden py-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonial-track flex w-max gap-6 px-4 md:px-8 will-change-transform">
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.name}-${index}`} className="w-[85vw] sm:w-[420px] lg:w-[430px] shrink-0 bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
              <div className="flex text-red-500 mb-6">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xl font-bold mb-8 leading-snug">{review.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={`${review.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
