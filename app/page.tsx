import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Team from "@/components/sections/team/Team";
import Story from "@/components/sections/Story";
import CallToAction from "@/components/sections/call-to-action/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Hero />
        <Team />
        <Projects />
        <Story />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
