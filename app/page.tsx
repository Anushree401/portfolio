import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import FooterCTA from './components/FooterCTA';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#f2ff44]/50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Experience />
          <Achievements />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
}
