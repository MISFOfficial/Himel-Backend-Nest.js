import Hero from "./_Component/HeroSecton/Hero";
import Navigaton from "./_Component/Navigation/Navigaton";
import Footer from "./_Component/Footer/Footer";
import WorkProcess from "./_Component/WorkProcess/WorkProcess";
import Clients from "./_Component/Clients/Clients";

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 w-full z-40">
        <Navigaton />
      </div>
      <div className="ratio  min-h-screen flex flex-col  lg:gap-30 ">
        <Hero />
        <Clients />
        <WorkProcess />
      </div>
      <Footer />
    </main>
  );
}
