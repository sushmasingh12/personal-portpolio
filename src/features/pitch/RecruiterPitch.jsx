import { motion } from 'motion/react';
import { Target, Zap, Layers, Eye, ShieldCheck } from 'lucide-react';
import { RECRUITER_REASONS } from '@/src/constants';

const iconMap = {
  Target, Zap, Layers, Eye,
};

export default function RecruiterPitch() {
  return (
    <section className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ShieldCheck className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">
              The Recruiter's Guide
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Sushma Singh <span className="text-gold-500">Should Be Noticed</span>
          </h2>
          <p className="text-white/50 font-light text-lg">
            As a 2024 graduate, I bring fresh energy combined with a solid foundation in modern frontend architecture. 
            Here's why I'd be an asset to your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RECRUITER_REASONS.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Target;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-500/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all">
                  <Icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-gold-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rounded-[2rem]"
        >
          <div className="bg-[#080808] p-12 rounded-[1.9rem] flex flex-col items-center text-center">
            <h3 className="text-3xl font-display font-bold mb-4 italic">
              "Ready to innovate from day one."
            </h3>
            <p className="max-w-xl text-white/50 font-light mb-8 italic">
              I am actively looking for opportunities to contribute to high-impact projects. 
              Let's build something exceptional together.
            </p>
            <a
              href="#contact"
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gold-500 transition-colors duration-300 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
