import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      if (target) {
        setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold-500/50 pointer-events-none z-[9999] hidden lg:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-1 h-1 bg-gold-500 rounded-full" />
    </motion.div>
  );
}
