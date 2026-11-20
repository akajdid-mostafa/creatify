import Head from 'next/head';
import Hero404 from '@/components/404/Hero404';
import Suggestions404 from '@/components/404/Suggestions404';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Creatify</title>
        <meta name="description" content="Oops! The page you are looking for doesn't exist." />
      </Head>
      <Hero404 />
      <Suggestions404 />
    </>
  );
}
