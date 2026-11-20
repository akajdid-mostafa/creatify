const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you sign up for our services, contact us, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, company name, and billing information.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.',
      },
      {
        subtitle: 'Cookies & Tracking',
        text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        text: 'We use the information we collect to provide, maintain, and improve our services; process transactions and send related information; send promotional communications (with your consent); respond to your comments, questions, and requests; monitor and analyze trends, usage, and activities; detect, investigate, and prevent fraudulent transactions and other illegal activities.',
      },
    ],
  },
  {
    title: '3. Information Sharing',
    content: [
      {
        text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you — so long as those parties agree to keep this information confidential.',
      },
      {
        subtitle: 'Exceptions',
        text: 'We may disclose your information if required by law, to protect our rights, privacy, safety, or property, or to respond to lawful requests from public authorities.',
      },
    ],
  },
  {
    title: '4. Data Security',
    content: [
      {
        text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.',
      },
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      {
        text: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymize it.',
      },
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      {
        text: 'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
      },
      {
        subtitle: 'Access & Portability',
        text: 'You have the right to request a copy of your personal data and receive it in a structured, commonly used format.',
      },
      {
        subtitle: 'Correction & Deletion',
        text: 'You may request that we correct inaccurate data or delete your personal information, subject to certain legal obligations.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'You can opt out of receiving promotional emails at any time by clicking the "unsubscribe" link in any marketing email we send.',
      },
    ],
  },
  {
    title: '7. Third-Party Links',
    content: [
      {
        text: 'Our website may contain links to third-party websites that are not operated by us. We have no control over the content, privacy policies, or practices of these sites and assume no responsibility for them. We encourage you to review the privacy policy of every site you visit.',
      },
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: [
      {
        text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this page periodically for any changes.',
      },
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      {
        text: 'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
      },
      {
        subtitle: '',
        text: 'Email: hello@creatify.com\nPhone: +1 800 123 4567\nAddress: 123 Design Avenue, New York, NY',
      },
    ],
  },
];

export default function ContentPrivacy() {
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
