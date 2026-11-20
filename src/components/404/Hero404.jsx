import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import gsap from 'gsap';

export default function Hero404() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-404', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.to('.glitch-text', {
        skewX: -2,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)',
        repeatDelay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 max-w-[1400px] mx-auto"
    >
      <div className="text-center max-w-2xl">
        <div className="gsap-404 mb-8">
          <span className="glitch-text inline-block text-[10rem] sm:text-[14rem] md:text-[18rem] font-black leading-none tracking-tighter text-zinc-900 select-none">
            404
          </span>
        </div>

        <h1 className="gsap-404 text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="gsap-404 text-lg md:text-xl text-zinc-500 mb-12 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved to another URL.
        </p>

        <div className="gsap-404 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-transform hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') window.history.back();
            }}
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
