import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased selection:bg-zinc-800 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
