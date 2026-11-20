import { Check, X } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-zinc-100">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Why Us</div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-4">Design Partner, Done Right.</h2>
          <p className="text-lg text-zinc-600">We bring your vision to life with precision custom design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Freelancers */}
        <div className="bg-transparent p-8 rounded-[2rem]">
          <h3 className="text-xl font-bold mb-8 text-zinc-500">Freelancers</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Unpredictable availability</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Limited/specific expertise</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Hard to have strategic discussions</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Messy project management</li>
          </ul>
        </div>

        {/* Traditional Agencies */}
        <div className="bg-transparent p-8 rounded-[2rem]">
          <h3 className="text-xl font-bold mb-8 text-zinc-500">Traditional Agencies</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Complicated pricing discovery</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Repetitive design templates</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Takes months to launch</li>
            <li className="flex items-start gap-4 text-zinc-500"><X className="w-6 h-6 shrink-0 mt-0.5" /> Extremely high hourly rates</li>
          </ul>
        </div>

        {/* Working with Us */}
        <div className="bg-[#09090b] text-white p-8 rounded-[2rem] shadow-xl">
          <h3 className="text-xl font-bold mb-8">Working with Us</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><Check className="w-6 h-6 shrink-0 text-white mt-0.5" /> Laser-focused, clear ROI from day 1</li>
            <li className="flex items-start gap-4"><Check className="w-6 h-6 shrink-0 text-white mt-0.5" /> Custom designs for your identity</li>
            <li className="flex items-start gap-4"><Check className="w-6 h-6 shrink-0 text-white mt-0.5" /> Fast delivery in 2-3 business days</li>
            <li className="flex items-start gap-4"><Check className="w-6 h-6 shrink-0 text-white mt-0.5" /> Fixed pricing, no hidden fees</li>
            <li className="flex items-start gap-4"><Check className="w-6 h-6 shrink-0 text-white mt-0.5" /> Unlimited revisions until perfect</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
