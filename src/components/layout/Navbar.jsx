import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="relative group">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              SUSHMA<span className="text-gold-500">.</span>
            </span>
          </div>

          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gold-400"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 px-6 py-2 rounded-full border border-gold-500/20 text-xs uppercase tracking-widest font-bold transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-bold text-white/70 hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}