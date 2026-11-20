import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Layers, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', hash: '#services' },
  { label: 'About', hash: '#about' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Clients', hash: '#clients' },
  { label: 'Why Us', hash: '#why-us' },
  { label: 'FAQs', hash: '#faqs' },
];

export default function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(0);

  const navHref = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = (scrollY) => {
      if (Math.abs(scrollY - scrollRef.current) > 5) {
        scrollRef.current = scrollY;
        setScrolled(scrollY > 50);
      }
    };

    // Try to use Lenis if available, otherwise fallback to native scroll
    let lenisCheck = null;
    
    const checkLenis = () => {
      if (window.lenis) {
        lenisCheck = window.lenis;
        lenisCheck.on('scroll', (e) => handleScroll(e.scroll));
        return true;
      }
      return false;
    };

    // Initial check
    if (!checkLenis()) {
      // If Lenis not ready yet, poll for it briefly
      const interval = setInterval(() => {
        if (checkLenis()) {
          clearInterval(interval);
        }
      }, 100);
      
      // Fallback to native scroll
      const nativeHandler = () => handleScroll(window.scrollY);
      window.addEventListener('scroll', nativeHandler, { passive: true });
      
      return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', nativeHandler);
        if (lenisCheck) lenisCheck.off('scroll');
      };
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll');
      }
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav
        className={`relative backdrop-blur-md border rounded-[2rem] md:rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center justify-between w-full max-w-6xl mx-auto transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-[#09090b] text-white border-transparent shadow-lg !py-3'
            : 'bg-white/80 text-zinc-900 border-zinc-200 shadow-sm'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tight">
          <Layers className="w-5 h-5 md:w-6 md:h-6" />
          Creatify
        </Link>

        <div
          className={`hidden md:flex items-center gap-8 font-medium text-sm ${
            scrolled ? 'text-zinc-300' : 'text-zinc-600'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={navHref(link.hash)}
              className={`transition-colors ${scrolled ? 'hover:text-white' : 'hover:text-zinc-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={navHref('#contact')}
            className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${
              scrolled ? 'bg-white text-black' : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] md:hidden rounded-[1.75rem] border p-3 shadow-xl backdrop-blur-md transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-3 pointer-events-none'
          } ${
            scrolled
              ? 'bg-[#09090b] border-zinc-800 text-white'
              : 'bg-white/95 border-zinc-200 text-zinc-900'
          }`}
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={navHref(link.hash)}
                className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                  scrolled ? 'text-zinc-300 hover:bg-white/10 hover:text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
