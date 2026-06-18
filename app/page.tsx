import Hero from "./_Component/HeroSecton/Hero";
import Navigaton from "./_Component/Navigation/Navigaton";
import Footer from "./_Component/Footer/Footer";
import WorkProcess from "./_Component/WorkProcess/WorkProcess";
import Clients from "./_Component/Clients/Clients";
import Viewer3D from "./_Component/3DViewer/3DViewer";
import Projects from "./_Component/Projects/Projects";
import About from "./_Component/About/About";
import Testimonials from "./_Component/Testimonials/Testimonials";
import Faq from "./_Component/Faq/Faq";
import Skill from "./_Component/Skill/Skill";

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 w-full z-40">
        <Navigaton />
      </div>
      <div className="ratio  min-h-screen flex flex-col  lg:gap-30 pb-10 lg:pb-30">
        <Hero />
        <Skill />
        <About />
        <Projects />
        <Clients />
        <WorkProcess />
        <Viewer3D />
        <Testimonials />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
