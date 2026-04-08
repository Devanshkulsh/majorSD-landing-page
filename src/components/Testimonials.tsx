import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Priya Sharma",
    program: "BBA AI & Digital Business",
    img: "/avatars/girl.gif",
    text: "The blend of business and AI completely changed how I think. I now understand both strategy and technology.",
  },
  {
    name: "Rahul Verma",
    program: "BCA AI & Data Science",
    img: "/avatars/boy.gif",
    text: "From coding to machine learning — this program gave me real-world skills. I landed my first tech role quickly.",
  },
  {
    name: "Anjali Gupta",
    program: "MBA AI & Digital Transformation",
    img: "/avatars/girl.gif",
    text: "This MBA is not traditional — it's future-focused. AI + business strategy is a game changer.",
  },
  {
    name: "Arjun Singh",
    program: "MCA AI & Advanced Computing",
    img: "/avatars/boy.gif",
    text: "Deep tech + AI concepts are taught with real applications. I feel industry-ready already.",
  },
  {
    name: "Sneha Kapoor",
    program: "BBA AI & Digital Business",
    img: "/avatars/girl.gif",
    text: "I love how practical the learning is. It’s not just theory — we actually build things using AI tools.",
  },
  {
    name: "Amit Mishra",
    program: "BCA AI & Data Science",
    img: "/avatars/boy.gif",
    text: "The coding + AI combination is perfect. I now feel confident applying for top tech roles.",
  },
  {
    name: "Neha Reddy",
    program: "MBA AI & Digital Transformation",
    img: "/avatars/girl.gif",
    text: "This program helped me transition from traditional business thinking to AI-driven decision making.",
  },
  {
    name: "Karan Mehta",
    program: "MCA AI & Advanced Computing",
    img: "/avatars/boy.gif",
    text: "The advanced computing modules are top-notch. I’m already working on real-world AI projects.",
  },
  {
    name: "Riya Patel",
    program: "BBA AI & Digital Business",
    img: "/avatars/girl.gif",
    text: "Best decision ever! The exposure, faculty, and curriculum are all aligned with future careers.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const groupSize = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + groupSize >= testimonials.length ? 0 : prev + groupSize,
      );
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(current, current + groupSize);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-light overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] left-[-80px] sm:top-[-100px] sm:left-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] sm:bottom-[-100px] sm:right-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-secondary/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Student Stories"
          title="What Our Students Say About AI Programs"
        />

        {/* Desktop - 3 Cards */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-6"
              style={{ willChange: "transform, opacity" }}
            >
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="text-secondary mb-3">★★★★★</div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full border border-primary object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm text-text-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.program}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile unchanged */}
        <div className="md:hidden px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-md border border-white/20"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="text-secondary mb-2 text-sm">★★★★★</div>

              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                  className="w-9 h-9 rounded-full border border-primary object-cover"
                />
                <div>
                  <p className="font-semibold text-xs sm:text-sm text-text-dark">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {testimonials[current].program}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-5" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
