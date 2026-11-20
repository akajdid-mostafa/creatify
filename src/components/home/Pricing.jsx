import { useEffect, useRef, useState } from 'react';
import { CreditCard, Code, RefreshCw, Check } from 'lucide-react';
import gsap from 'gsap';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const proPriceRef = useRef(null);
  const enterprisePriceRef = useRef(null);
  const priceStateRef = useRef({
    pro: 3995,
    enterprise: 5995,
  });

  const prices = {
    monthly: {
      pro: 3995,
      enterprise: 5995,
      suffix: '/mo',
    },
    yearly: {
      pro: 3196,
      enterprise: 4796,
      suffix: '/mo',
    },
  };

  useEffect(() => {
    const target = prices[billing];

    gsap.to(priceStateRef.current, {
      pro: target.pro,
      enterprise: target.enterprise,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        if (proPriceRef.current) {
          proPriceRef.current.textContent = Math.round(priceStateRef.current.pro).toLocaleString('en-US');
        }
        if (enterprisePriceRef.current) {
          enterprisePriceRef.current.textContent = Math.round(priceStateRef.current.enterprise).toLocaleString('en-US');
        }
      },
    });
  }, [billing]);

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div>
        <div className="text-center mb-16">
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Our Pricing</div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-8">Simple, Flexible Plans.</h2>

          {/* Toggle */}
          <div className="inline-flex bg-white p-1 rounded-full border border-zinc-200 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                billing === 'monthly'
                  ? 'font-semibold bg-zinc-100 text-zinc-900 shadow-sm'
                  : 'font-medium text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                billing === 'yearly'
                  ? 'font-semibold bg-zinc-100 text-zinc-900 shadow-sm'
                  : 'font-medium text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Yearly (-20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Features List (Left) */}
          <div className="flex flex-col justify-center space-y-6 lg:pr-8">
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
              <div>
                <h5 className="font-bold">Subscribe</h5>
                <p className="text-sm text-zinc-500">Pick a plan that fits your workflow.</p>
              </div>
              <CreditCard className="text-zinc-300" />
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
              <div>
                <h5 className="font-bold">Build</h5>
                <p className="text-sm text-zinc-500">We develop custom designs &amp; websites.</p>
              </div>
              <Code className="text-zinc-300" />
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
              <div>
                <h5 className="font-bold">Test &amp; Optimize</h5>
                <p className="text-sm text-zinc-500">Unlimited revisions until you&apos;re satisfied.</p>
              </div>
              <RefreshCw className="text-zinc-300" />
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-zinc-800 text-white p-10 rounded-[2rem] shadow-xl relative">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-300 mb-2">Pro</h3>
              <div className="text-5xl font-black mb-4">
                $<span ref={proPriceRef}>3,995</span>
                <span className="text-lg font-normal text-zinc-400">{prices[billing].suffix}</span>
              </div>
              {billing === 'yearly' && <p className="text-sm text-green-400 font-semibold mb-4">Billed yearly • save $9,588/year</p>}
              <p className="text-zinc-400">Ideal for growing startups</p>
            </div>
            <button className="w-full bg-white text-zinc-900 py-4 rounded-full font-bold mb-8 hover:bg-zinc-100 transition-colors">Subscribe Now</button>
            <div>
              <p className="font-bold mb-4">Features Include:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">One active request at a time</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">48-hour average delivery</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Unlimited revisions</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Source files &amp; full assets</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Communication via Trello &amp; Slack</span></li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#09090b] text-white p-10 rounded-[2rem] shadow-xl relative border border-zinc-700">
            <div className="absolute top-6 right-6 bg-zinc-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-300 mb-2">Enterprise</h3>
              <div className="text-5xl font-black mb-4">
                $<span ref={enterprisePriceRef}>5,995</span>
                <span className="text-lg font-normal text-zinc-400">{prices[billing].suffix}</span>
              </div>
              {billing === 'yearly' && <p className="text-sm text-green-400 font-semibold mb-4">Billed yearly • save $14,388/year</p>}
              <p className="text-zinc-400">For organizations &amp; large teams</p>
            </div>
            <button className="w-full bg-white text-zinc-900 py-4 rounded-full font-bold mb-8 hover:bg-zinc-100 transition-colors">Subscribe Now</button>
            <div>
              <p className="font-bold mb-4">All Pro features, plus:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm font-semibold">Two concurrent requests</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Exclusive Webflow development</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Weekly strategy meetings</span></li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-400" /> <span className="text-sm">Dedicated Project Manager</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
