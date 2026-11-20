const sections = [
  {
    title: '1. Agreement to Terms',
    content: [
      {
        text: 'By accessing or using the services provided by Creatify ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not access or use our services.',
      },
      {
        text: 'These Terms apply to all visitors, users, subscribers, and others who access or use the service. We reserve the right to update or modify these Terms at any time without prior notice.',
      },
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      {
        text: 'Creatify provides design-as-a-service through a subscription model. Our services include, but are not limited to, UI/UX design, branding & identity, Webflow development, and related creative services as described on our website and pricing plans.',
      },
      {
        subtitle: 'Service Delivery',
        text: 'We process design requests in the order they are received. Turnaround times are estimates and may vary depending on the complexity of the request. We aim to deliver most requests within 48 hours.',
      },
    ],
  },
  {
    title: '3. Subscription & Billing',
    content: [
      {
        subtitle: 'Plans & Pricing',
        text: 'All subscription plans are billed on a recurring basis (monthly or annually). Prices are listed on our pricing page and are subject to change with 30 days\' prior written notice.',
      },
      {
        subtitle: 'Payment',
        text: 'Payment is due at the beginning of each billing cycle. All fees are non-refundable unless otherwise stated. If payment fails, we reserve the right to suspend your access to the service until payment is received.',
      },
      {
        subtitle: 'Cancellation',
        text: 'You may cancel your subscription at any time through your account dashboard. Cancellations take effect at the end of the current billing period. No partial refunds are issued for unused time within a billing cycle.',
      },
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      {
        subtitle: 'Ownership of Deliverables',
        text: 'Upon full payment, you own all rights to the final design deliverables created specifically for you. We retain the right to showcase completed work in our portfolio unless you request otherwise in writing.',
      },
      {
        subtitle: 'Our Property',
        text: 'All content on the Creatify website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Creatify and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without our express written consent.',
      },
    ],
  },
  {
    title: '5. User Responsibilities',
    content: [
      {
        text: 'As a user of our services, you agree to:',
      },
      {
        text: '• Provide accurate and complete information when creating your account and submitting design requests.\n• Use our services only for lawful purposes and in accordance with these Terms.\n• Not submit content that is illegal, offensive, defamatory, or infringes on the rights of others.\n• Not attempt to reverse-engineer, decompile, or interfere with the operation of our platform.\n• Maintain the confidentiality of your account credentials.',
      },
    ],
  },
  {
    title: '6. Revisions & Modifications',
    content: [
      {
        text: 'All subscription plans include unlimited revisions on active design requests. Revisions must be related to the original request. Requests that significantly change the scope or direction of the original brief may be treated as a new request.',
      },
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      {
        text: 'To the fullest extent permitted by applicable law, Creatify shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:',
      },
      {
        text: '• Your use or inability to use our services.\n• Any unauthorized access to or use of our servers and/or any personal information stored therein.\n• Any interruption or cessation of transmission to or from our services.\n• Any bugs, viruses, or the like that may be transmitted through our services by any third party.',
      },
    ],
  },
  {
    title: '8. Indemnification',
    content: [
      {
        text: 'You agree to indemnify and hold harmless Creatify and its officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of and access to the service, or your violation of any term of these Terms of Service.',
      },
    ],
  },
  {
    title: '9. Termination',
    content: [
      {
        text: 'We may terminate or suspend your account and access to the service immediately, without prior notice or liability, if you breach any provision of these Terms. Upon termination, your right to use the service will immediately cease.',
      },
      {
        text: 'All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
      },
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      {
        text: 'These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in New York, NY.',
      },
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      {
        text: 'If you have any questions about these Terms of Service, please contact us at:',
      },
      {
        text: 'Email: hello@creatify.com\nPhone: +1 800 123 4567\nAddress: 123 Design Avenue, New York, NY',
      },
    ],
  },
];

export default function ContentTerms() {
  return (
    <section className="pb-20 md:pb-28 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-3xl space-y-12">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((block, j) => (
                <div key={j}>
                  {block.subtitle && (
                    <h3 className="text-base font-bold text-zinc-800 mb-2">{block.subtitle}</h3>
                  )}
                  <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
