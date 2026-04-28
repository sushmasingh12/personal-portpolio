import { motion } from 'motion/react';
import { ExternalLink, Layers, Target, Info, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Layers className="w-5 h-5 text-gold-500" />
              <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">
                Project Orbit
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Selected <span className="text-gold-500">Builds</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed">
              A collection of digital solutions where design meets functionality. 
              Each project represents a milestone in my journey as a 2024 graduate developer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/20 transition-all duration-500"
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-white/50 border border-white/10 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                   
                    <a href={project.liveUrl} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <p className="text-white/60 font-light mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
<div className="flex flex-wrap gap-2 mb-8">
  {project.features.map((feature) => (
    <span
      key={feature}
      className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 font-medium"
    >
      <Sparkles className="w-3 h-3 flex-shrink-0" />
      {feature}
    </span>
  ))}
</div>

                {/* Footer Insight */}
                <div className="mt-10 pt-6 border-t border-white/5">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
                    <Info className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Key Learning</h5>
                      <p className="text-xs text-white/50 leading-relaxed italic">
                        "{project.learning}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
