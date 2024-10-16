"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  
  const combinedVariants = variant || defaultVariants;

  // Use a ref to track when the text is in view
  const ref = useRef(null);
  
  // Hook to detect if the element is in view
  const isInView = useInView(ref, { once: true }); // `once: true` ensures animation happens only once

  return (
    <motion.h1
      ref={ref} // Attach ref to the element
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
