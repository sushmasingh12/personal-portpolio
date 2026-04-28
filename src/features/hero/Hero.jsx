import { motion } from 'motion/react';
import HeroContent from './components/HeroContent';
import HeroIllustration from './components/HeroIllustration';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-14 relative overflow-hidden">
      {/* Background Ambience moved to App or kept here for local context */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-widest opacity-20 uppercase">Explore Works</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
