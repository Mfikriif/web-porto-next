import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portofolio } from "@/components/Portofolio";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portofolio />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
