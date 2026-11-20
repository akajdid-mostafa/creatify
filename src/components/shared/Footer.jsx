import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 py-12 px-4 border-t border-zinc-200">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="md:w-1/3">
          <h3 className="font-bold text-lg mb-4">Join 5K+ Readers</h3>
          <p className="text-zinc-500 mb-6 text-sm">Get actionable design tips every Saturday. Under 4 minutes.</p>
          <div className="flex items-center bg-white rounded-full p-1 border border-zinc-300">
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-transparent focus:outline-none text-sm" />
            <button className="bg-zinc-900 text-white p-2 rounded-full shrink-0 hover:bg-zinc-800 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:gap-16 gap-8">
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#services" className="hover:text-zinc-900">Services</a></li>
              <li><a href="#about" className="hover:text-zinc-900">About</a></li>
              <li><a href="#pricing" className="hover:text-zinc-900">Pricing</a></li>
              <li><a href="#why-us" className="hover:text-zinc-900">Why Us</a></li>
              <li><a href="#clients" className="hover:text-zinc-900">Reviews</a></li>
              <li><a href="#faqs" className="hover:text-zinc-900">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/privacy-policy" className="hover:text-zinc-900">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-zinc-900">Terms of Service</Link></li>
              <li><Link href="/404" className="hover:text-zinc-900">404 Page</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4">Socials</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-zinc-900">LinkedIn</a></li>
              <li><a href="#" className="hover:text-zinc-900">YouTube</a></li>
              <li><a href="#" className="hover:text-zinc-900">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 border-t border-zinc-200 pt-8 gap-4 md:gap-0 text-center md:text-left">
        <p>&copy; 2026 Creatify. Designed &amp; Built worldwide.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Systems Operational
        </div>
      </div>
    </footer>
  );
}
