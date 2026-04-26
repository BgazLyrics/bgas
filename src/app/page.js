import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 w-full flex flex-col overflow-hidden">
      <meta name="google-site-verification" content="iHXiimogguhYXMQ7-3sExWZWFTx2D7o_R5xxcmeU99A" />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
