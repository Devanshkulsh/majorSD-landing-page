import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Rohit Saxena",
    role: "Alumni, Batch of 2022",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904142/boy_mul3fl.gif",
    text: "The campus infrastructure is world-class. State-of-the-art labs, modern classrooms, and a library that truly supports deep research — everything a student needs.",
  },
  {
    name: "Dr. Deepa Malhotra",
    role: "Visiting Professor",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904144/girl_ronvmv.gif",
    text: "Our faculty brings decades of industry experience into the classroom. The mentorship culture here is unlike anything I've seen at other institutions.",
  },
  {
    name: "Aakash Kumar",
    role: "HR Partner, TechCorp India",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904142/boy_mul3fl.gif",
    text: "The placement cell is incredibly proactive. With 300+ industry partners and dedicated career coaches, graduates are well-prepared for the job market.",
  },
  {
    name: "Sneha Iyer",
    role: "Current Student, 3rd Year",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904144/girl_ronvmv.gif",
    text: "Campus life here is vibrant — fests, hackathons, sports events, and cultural clubs. There's never a dull moment, and it shapes you beyond academics.",
  },
  {
    name: "Vikram Nair",
    role: "Parent of Graduate",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904142/boy_mul3fl.gif",
    text: "As a parent, I was impressed by the transparent communication, safe campus environment, and the genuine care faculty shows for every student's growth.",
  },
  {
    name: "Priya Joshi",
    role: "Research Scholar",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904144/girl_ronvmv.gif",
    text: "The research facilities and funding support are excellent. I've had the opportunity to publish two papers in my first year itself — truly research-driven.",
  },
  {
    name: "Manish Tiwari",
    role: "Industry Guest Lecturer",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904142/boy_mul3fl.gif",
    text: "Every time I visit for guest sessions, I'm struck by how curious and engaged the students are. The university fosters a real hunger for learning.",
  },
  {
    name: "Kavita Rao",
    role: "Alumni, Batch of 2020",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904144/girl_ronvmv.gif",
    text: "The alumni network is strong and very supportive. I got my first international opportunity through a connection I made right here on campus.",
  },
  {
    name: "Aryan Desai",
    role: "Startup Founder, Ex-Student",
    avatar:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904142/boy_mul3fl.gif",
    text: "The entrepreneurship cell gave my startup its first push. Mentorship, seed funding support, and co-working space — the university genuinely backs innovation.",
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(current, current + groupSize);

  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-20 bg-light overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] left-[-80px] sm:top-[-100px] sm:left-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] sm:bottom-[-100px] sm:right-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-secondary/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeading
          tag="About Our University"
          title="What People Say About Us"
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
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-sm text-text-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile */}
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
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-xs sm:text-sm text-text-dark">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {testimonials[current].role}
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
