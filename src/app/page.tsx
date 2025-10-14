import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Organizers from "../components/Organizers";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Organizers />
      <Tracks />
      <Timeline />
      <Sponsors />
      <Contact />
      <FAQ />
    </>
  );
}
