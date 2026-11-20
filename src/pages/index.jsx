import Head from "next/head";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import CaseStudy from "@/components/home/CaseStudy";
import Team from "@/components/home/Team";
import Gallery from "@/components/home/Gallery";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import Faqs from "@/components/home/Faqs";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creatify | Design Subscription Service</title>
        <meta name="description" content="Scale your startup with a ready-to-go elite design team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <About />
      <CaseStudy />
      <Team />
      <Gallery />
      <Pricing />
      <Testimonials />
      <WhyUs />
      <Faqs />
      <Contact />
    </>
  );
}
