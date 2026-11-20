import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: '01 / What does the subscription include?',
    answer: 'This subscription gives you unlimited access to our design services, from UI/UX and branding to Webflow development. You can submit as many requests as you want, and we\'ll work on them one by one.',
  },
  {
    question: '02 / How do I get started?',
    answer: 'Simply choose your subscription plan, complete the checkout, and you\'ll immediately get access to your dedicated Trello dashboard where you can start submitting design requests.',
  },
  {
    question: '03 / Can I cancel my subscription anytime?',
    answer: 'Absolutely. There are no binding contracts. You can pause or cancel your monthly subscription at any time if you don\'t have enough design work.',
  },
  {
    question: '04 / How fast will I receive the designs?',
    answer: 'On average, most requests are completed in 48 hours or less. However, more complex requests like full web page designs may take longer.',
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">FAQs</div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-4">Need Answers?</h2>
          <p className="text-lg text-zinc-600">Learn more about how we can transform your business.</p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-zinc-200">
              <button
                type="button"
                className="w-full text-left py-6 flex justify-between items-center gap-6 focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-base md:text-lg font-bold text-zinc-900">{faq.question}</span>
                <div className={`shrink-0 bg-zinc-100 rounded-full p-2 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                  <Plus className="w-4 h-4 md:w-5 md:h-5 text-zinc-900" />
                </div>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${activeIndex === index ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="text-zinc-600 leading-relaxed pr-12">
                  {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
