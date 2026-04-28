import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Skills from './features/skills/Skills';
import Projects from './features/projects/Projects';
import RecruiterPitch from './features/pitch/RecruiterPitch';
import Contact from './features/contact/Contact';
import CustomCursor from './components/ui/CustomCursor';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <RecruiterPitch />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="relative bg-[#050505] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />

      
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
