"use client";

import { motion } from "framer-motion";

/**
 * Pops its children up every time they scroll into view (and resets when
 * they leave, so it replays when the user comes back).
 * `as` picks the element (div, section, ...), `pop={false}` drops the scale
 * (use it for full-width backgrounds), `delay` staggers siblings.
 */
const Reveal = ({
  as = "div",
  pop = true,
  delay = 0,
  amount = 0.15,
  children,
  ...rest
}) => {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: 60, scale: pop ? 0.92 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount }}
      transition={{ type: "spring", stiffness: 110, damping: 18, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
