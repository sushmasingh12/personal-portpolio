import { motion } from 'motion/react';
import { Terminal, Code2, Layout, Palette, Cpu, Wind, Container, GitBranch, Github,Server,Database,Figma } from 'lucide-react';
import { SKILLS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const iconMap = {
  Layout, Palette, Code2, Cpu, Wind, Container, GitBranch, Github, Server,Database,Figma
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Terminal className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">
              Developer Console
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="text-gold-500">Arsenal</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            As a 2024 graduate, I’ve spent the last few years immersing myself in modern web technologies. 
            My focus is on creating smooth, performant, and accessible user interfaces.
          </p>
        </div>

        {/* Skill Console Interface */}
        <div className="glass rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          {/* Header Bar */}
          <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
              Sushma@Universe: ~/skills
            </div>
            <div className="w-12 h-px" />
          </div>

          {/* Console Grid */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white/90 group-hover:text-gold-500 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-[10px] font-mono text-white/30">
                        {index < 10 ? `0${index + 1}` : index + 1}.exec()
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-gold-600 to-gold-400 border-r border-gold-400 border-glow"
                    />
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-white/40 flex justify-between">
                    <span>STATUS: READY</span>
                    <span>{skill.level}%</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Bar */}
          <div className="bg-white/5 px-8 py-4 border-t border-white/10">
            <div className="flex items-center gap-4 text-[10px] font-mono text-gold-500/60 overflow-hidden whitespace-nowrap">
              <span className="flex-shrink-0">SYSTEM LOG:</span>
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8"
              >
                <span>Analyzing ecosystem...</span>
                <span>Optimizing dependencies...</span>
                <span>Pushing to production...</span>
                <span>Rendering 3D assets...</span>
                <span>Hydrating React components...</span>
                <span>Applying Tailwind directives...</span>
                <span>Compiling modules...</span>
                <span>Sushma@Universe: Ready for recruitment.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
