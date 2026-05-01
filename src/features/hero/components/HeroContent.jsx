import { motion } from 'motion/react';
import { ArrowRight, FileText, Send, Github, Linkedin, Twitter } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroContent() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6 max-w-2xl"
    >
      <motion.div variants={item} className="flex items-center gap-3">
        <span className="w-8 h-[1px] bg-amber-500" />
        <span className="text-xs font-mono tracking-widest text-amber-500 uppercase font-medium">
          Frontend Developer
        </span>
      </motion.div>

      <motion.div variants={item} className="space-y-2">
        <h1 className="text-6xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-none text-glow">
          Sushma <span className="text-white/40">Singh</span>
        </h1>

        <div className="flex items-center gap-4 py-2">
          <div className="px-3 py-1 glass rounded-full text-[10px] font-mono text-amber-400 font-semibold tracking-tighter uppercase whitespace-nowrap">
            Fresher | 2024 Graduate
          </div>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>
      </motion.div>

      <motion.p variants={item} className="text-xl sm:text-2xl font-display text-white/90 leading-tight">
        Crafting <span className="text-amber-400">clean</span>, responsive, and <br className="hidden sm:block" />
        user-focused web experiences.
      </motion.p>

      <motion.p variants={item} className="text-base text-white/50 max-w-lg leading-relaxed">
        I build modern interfaces with creativity, performance, and meticulous attention to detail. 
        Transforming complex ideas into polished digital realities.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
  <a
    href="#projects"
    className="group relative px-8 py-4 bg-amber-500 text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
  >
    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
    <span className="relative flex items-center gap-2">
      View Projects <ArrowRight className="w-4 h-4" />
    </span>
  </a>

  <a
    href="/resume/SushmaCv.pdf"
    download="SushmaCv.pdf"
    className="glass px-8 py-4 text-white font-semibold rounded-xl transition-all hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center gap-2"
  >
    <FileText className="w-4 h-4 opacity-70" />
    Download Resume
  </a>

  <button className="w-14 h-14 glass flex items-center justify-center rounded-xl transition-all hover:bg-white/10 hover:scale-105 active:scale-95 text-amber-400">
    <Send className="w-5 h-5" />
  </button>
</motion.div>

      <motion.div variants={item} className="flex items-center gap-6 pt-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <Github className="w-5 h-5 cursor-pointer hover:text-amber-500" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:text-amber-500" />
        <Twitter className="w-5 h-5 cursor-pointer hover:text-amber-500" />
        <div className="h-4 w-[1px] bg-white/20" />
        <span className="text-[10px] font-mono tracking-tighter">ESTD. 2024</span>
      </motion.div>
    </motion.div>
  );
}