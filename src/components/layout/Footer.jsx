import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-display font-bold">SUSHMA</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              © 2026 Frontend Universe. Built with React & 3D.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 text-white/40 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-white/40 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:officialsushmasingh@gmail.com" className="p-2 text-white/40 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Current Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-green-500/80">Available For Hire</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
