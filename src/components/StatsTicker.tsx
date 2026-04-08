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
    <section ref={sectionRef} className="bg-primary py-8 sm:py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mx-auto flex w-full max-w-xs flex-col justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm sm:last:col-span-2 sm:px-5 lg:max-w-none lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:last:col-span-1"
            >
              <div className="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-4xl">
                <CountUp target={s.value} suffix={s.suffix} trigger={trigger} />
              </div>
              <div className="mt-2 text-sm font-medium leading-snug text-secondary sm:text-[15px]">
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
