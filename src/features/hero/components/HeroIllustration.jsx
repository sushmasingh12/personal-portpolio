import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MousePointer2, Atom, Code2, Layout, Palette, Terminal, Brackets, Layers } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const FloatingElement = ({ children, delay = 0, duration = 4, className = "" }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const CodeSnippet = () => {
  const [lines, setLines] = useState([
    "const App = () => {",
    "  return (",
    "    <div className='p-8'>",
    "      <h1>Hello World</h1>",
    "    </div>",
    "  );",
    "};"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev];
        const last = newLines.shift();
        if (last) newLines.push(last);
        return newLines;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[6px] text-amber-500/80 leading-tight">
      {lines.map((line, i) => (
        <motion.div
          key={line}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="whitespace-nowrap"
        >
          {line}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-1 h-2 bg-amber-500 inline-block align-middle ml-0.5"
      />
    </div>
  );
};

export default function HeroIllustration() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center cursor-default perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Main Illustration Container */}
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">

          {/* Character Shell (Simplified 3D style) */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
              {/* Desk */}
              <rect x="50" y="300" width="300" height="10" rx="5" fill="#1a1a1a" />
              <rect x="70" y="310" width="10" height="60" fill="#1a1a1a" />
              <rect x="320" y="310" width="10" height="60" fill="#1a1a1a" />

              {/* Character */}
              <g id="character">
                {/* Torso */}
                <path d="M160 210C160 210 140 280 140 300H260C260 280 240 210 240 210H160Z" fill="#262626" />
                {/* Neck */}
                <rect x="192" y="195" width="16" height="15" rx="4" fill="#d1d5db" />
                {/* Head */}
                <rect x="175" y="145" width="50" height="55" rx="20" fill="#d1d5db" />
                {/* Hair */}
                <path d="M170 160C170 140 185 130 200 130C215 130 230 140 230 160V190C230 190 235 190 235 170C235 150 225 125 200 125C175 125 165 150 165 170C165 190 170 190 170 190V160Z" fill="#111" />
                {/* Arms/Hands typing */}
                <motion.circle
                  animate={{ y: [-1, 1, -1], x: [-1, 1, -1] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  cx="180" cy="285" r="5" fill="#d1d5db"
                />
                <motion.circle
                  animate={{ y: [1, -1, 1], x: [1, -1, 1] }}
                  transition={{ duration: 0.12, repeat: Infinity }}
                  cx="220" cy="285" r="5" fill="#d1d5db"
                />
              </g>

              {/* Laptop Shell */}
              <path d="M150 290L130 300H270L250 290H150Z" fill="#171717" />
              <rect x="155" y="225" width="90" height="65" rx="4" fill="#262626" stroke="#404040" strokeWidth="2" />
            </svg>

            {/* Live Code on Screen */}
            <div className="absolute left-[calc(50%-40px)] top-[calc(50%+30px)] w-[80px] h-[55px] bg-[#0c0c0c] rounded overflow-hidden p-1.5 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <CodeSnippet />
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          <FloatingElement className="absolute top-[10%] right-[15%] z-20" delay={0.5}>
            <div className="glass p-3 rounded-xl glow-amber">
              <Atom className="w-8 h-8 text-sky-400 animate-spin-slow" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute bottom-[20%] left-[10%] z-20" delay={1.2} duration={5}>
            <div className="glass p-2 px-3 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono opacity-80">Tailwind.css</span>
            </div>
          </FloatingElement>

          <FloatingElement className="absolute top-[25%] left-[15%] z-20" delay={0.8} duration={4.5}>
            <div className="glass p-2 px-3 rounded-lg border-l-2 border-l-amber-500 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-mono opacity-80">vdom.render()</span>
            </div>
          </FloatingElement>

          <FloatingElement className="absolute top-[50%] right-[10%] z-20" delay={2} duration={3.5}>
            <div className="glass p-2 rounded-lg opacity-50 space-y-1">
              <div className="w-12 h-1 bg-white/20 rounded" />
              <div className="w-8 h-1 bg-white/10 rounded" />
              <div className="w-10 h-1 bg-white/20 rounded" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute bottom-[35%] right-[20%] z-20" delay={1.5} duration={6}>
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center rotate-12">
              <Brackets className="w-5 h-5 text-amber-400/60" />
            </div>
          </FloatingElement>

          {/* Ambients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 bg-[radial-gradient(circle,rgba(245,158,11,0.03)_0%,transparent_70%)]" />
        </div>
      </motion.div>
    </div>
  );
}
