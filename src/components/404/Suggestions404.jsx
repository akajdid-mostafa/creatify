import Link from 'next/link';
import { PenTool, CreditCard, MessageCircle, Shield, FileText } from 'lucide-react';

const suggestions = [
  {
    icon: PenTool,
    title: 'Services',
    desc: 'Explore our design expertise',
    href: '/#services',
  },
  {
    icon: CreditCard,
    title: 'Pricing',
    desc: 'Find a plan that fits you',
    href: '/#pricing',
  },
  {
    icon: MessageCircle,
    title: 'Contact',
    desc: 'Get in touch with our team',
    href: '/#contact',
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    desc: 'How we handle your data',
    href: '/privacy-policy',
  },
  {
    icon: FileText,
    title: 'Terms of Service',
    desc: 'Our service agreement',
    href: '/terms-of-service',
  },
];

export default function Suggestions404() {
  return (
    <section className="pb-20 md:pb-28 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 text-center">
          Maybe try one of these
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {suggestions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="group bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all"
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-zinc-900 transition-colors">
                  <Icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
