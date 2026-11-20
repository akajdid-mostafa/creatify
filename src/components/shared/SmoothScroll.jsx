import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    function lenisRaf(time) {
      lenis.raf(time * 1000);
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenisRaf);
      if (typeof window !== 'undefined') {
        window.lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
