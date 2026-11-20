import { Shield } from 'lucide-react';

export default function HeroPrivacy() {
  return (
    <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
          <Shield className="w-3.5 h-3.5" />
          Legal
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-zinc-500">
          Last updated: May 1, 2026
        </p>
      </div>
    </section>
  );
}
