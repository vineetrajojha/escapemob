import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <HeroSection />
      <Hero />
    </main>
  );
}
