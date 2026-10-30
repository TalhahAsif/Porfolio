"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, [data-cursor]";

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Arrow tracks the pointer tightly, ring trails behind it.
  const arrowX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.3 });
  const arrowY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  // Tilt the arrow in the direction of horizontal movement.
  const velocityX = useVelocity(arrowX);
  const tilt = useTransform(velocityX, [-1500, 0, 1500], [-25, 0, 25], {
    clamp: true,
  });
  const rotate = useSpring(tilt, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => setHovering(!!e.target.closest?.(INTERACTIVE));
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-9998 h-10 w-10 rounded-full border-2 border-blue-500"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.7 : hovering ? 1.6 : 1,
          backgroundColor: hovering
            ? "rgba(59, 130, 246, 0.2)"
            : "rgba(59, 130, 246, 0)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* arrow — its tip sits exactly on the pointer position */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-9999"
        style={{ x: arrowX, y: arrowY, rotate, transformOrigin: "0 0" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.85 : hovering ? 1.25 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 2.5 L3 19 L7.5 14.8 L10.6 21.5 L13.3 20.3 L10.3 13.7 L16.5 13.7 Z"
            fill="#facc15"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default Cursor;
