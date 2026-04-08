import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Alumni Network" },
  { value: 50, suffix: "+", label: "Industry Partners" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 25, suffix: "+", label: "Specializations" },
];

const CountUp = ({
  target,
  suffix,
  trigger,
}: {
  target: number;
  suffix: string;
  trigger: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;

    setCount(0);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsTicker = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.35 });
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (inView) {
      setTrigger((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="bg-primary py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                <CountUp target={s.value} suffix={s.suffix} trigger={trigger} />
              </div>
              <div className="text-secondary text-sm font-medium mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTicker;
