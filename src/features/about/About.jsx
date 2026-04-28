import { motion } from 'motion/react';
import { User, History, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '@/src/constants';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-gold-500" />
              <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">
                About The Creator
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A Journey of <span className="text-gold-500">Continuous Growth</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
              <p>
                Hello! I'm Sushma Singh, a passionate Frontend Developer and a <span className="text-white font-medium italic underline decoration-gold-500/30">2024 Graduate</span> with a vision to build digital experiences that matter.
              </p>
              <p>
                My fascination with the web began during my college days when I realized that a few lines of code could create beautiful, interactive interfaces that anyone in the world could access. Since then, I've dedicated myself to mastering the modern frontend stack.
              </p>
              <p>
                I thrive in environments that challenge my technical skills and creative thinking. Whether it's optimizing a React application for performance , I approach every project with curiosity and precision.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-gold-500">Fresher</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Work Status</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-gold-500">2024</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Graduation Year</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-gold-500">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Projects Built</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Education Tracking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-10 rounded-[2rem] border border-white/5 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <GraduationCap className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">Academic Milestone</h3>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Education History</span>
                </div>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10 space-y-8">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-gold-500 border border-black shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  <div>
                    <div className="flex items-center gap-3 text-gold-500 text-xs font-mono mb-2">
                       <Calendar className="w-3 h-3" />
                       {edu.period}
                       <span className="px-2 py-0.5 bg-gold-500/10 rounded-full border border-gold-500/20 text-[10px]">
                         {edu.status}
                       </span>
                    </div>
                    <h4 className="text-xl font-medium text-white mb-1">{edu.degree}</h4>
                    <p className="text-white/50 mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.institution}
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-white/40 flex items-start gap-2 italic">
                          <span className="text-gold-500 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              <div className="mt-12 bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <History className="w-6 h-6 text-gold-500" />
                 </div>
                 <div>
                    <p className="text-xs text-white/60 leading-relaxed font-mono">
                      Currently exploring advanced Mern patterns.
                    </p>
                 </div>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-600/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
