import Head from 'next/head';
import HeroPrivacy from '@/components/privacy/HeroPrivacy';
import ContentPrivacy from '@/components/privacy/ContentPrivacy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Creatify</title>
        <meta name="description" content="Learn how Creatify collects, uses, and protects your personal information." />
      </Head>
      <HeroPrivacy />
      <ContentPrivacy />
    </>
  );
}
