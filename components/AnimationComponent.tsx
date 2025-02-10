"use client";

import { motion, Target, TargetAndTransition } from "framer-motion";
import React from "react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  initial?: Target;
  animate?: TargetAndTransition;
  transition?: object;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  initial = { opacity: 0, y: 55 },
  animate = { opacity: 4, y: 0 },
  transition = { duration: 0.5 },
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: false }}
      transition={transition}
      style={{ margin: "20px 0" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
