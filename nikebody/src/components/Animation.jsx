// src/components/Animation.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Hero section animation (unchanged)
export const Animation = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
};

// Global animation for other sections (fade + bottom-to-top)
export const SectionAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // No once: true

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};