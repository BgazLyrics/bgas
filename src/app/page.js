import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/context/LanguageContext";
import PreLoader from "@/components/PreLoader";
import DynamicTitle from "@/components/DynamicTitle";

export default function Home() {
  return (
    <LanguageProvider>
      <DynamicTitle />
      <PreLoader />
      <ScrollProgress />
      <Navbar />
      <Terminal />
      <main className="relative z-10 w-full flex flex-col overflow-hidden">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
