import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function HeroAnimation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1, 1.4]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -150]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-10, 10]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.img
          src="/images/project.png"
          alt="Project"
          style={{
            scale,
            y,
            rotate,
          }}
          className="w-[600px]"
        />
      </div>
    </section>
  );
}