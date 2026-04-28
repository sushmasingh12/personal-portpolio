import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
       {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <MessageSquare className="w-5 h-5 text-gold-500" />
              <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold">
                Connectivity Center
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's Start a <span className="text-gold-500">New Chapter</span>
            </h2>
            <p className="text-white/60 font-light text-lg mb-12 max-w-lg">
              Whether you have a job opportunity, a project idea, or just want to say hi, 
              my inbox is always open.
            </p>

            <div className="space-y-8">
              <a href="mailto:officialsushmasingh@gmail.com" className="group flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email Me</h4>
                   <p className="text-lg font-display text-white/80 transition-colors group-hover:text-gold-500">
                     sushmasingh12140@gmail.com
                   </p>
                </div>
              </a>
              
              <div className="flex gap-4">
               
                <a href="https://github.com/sushmasingh12" className="flex-1 group flex flex-col items-center gap-4 p-6 glass rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all">
                   <Github className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                   <span className="text-sm font-medium text-white/60">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
