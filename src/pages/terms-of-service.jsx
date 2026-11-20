import Head from 'next/head';
import HeroTerms from '@/components/terms/HeroTerms';
import ContentTerms from '@/components/terms/ContentTerms';

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Creatify</title>
        <meta name="description" content="Read the Terms of Service that govern your use of Creatify design services." />
      </Head>
      <HeroTerms />
      <ContentTerms />
    </>
  );
}
