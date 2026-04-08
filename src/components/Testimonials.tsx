import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  { name: "Priya Sharma", program: "B.Com 2023", img: "https://i.pravatar.cc/80?img=1", text: "MSDS gave me the platform to discover AI tools that changed my career path completely. The faculty is world-class!" },
  { name: "Rahul Verma", program: "BBA 2022", img: "https://i.pravatar.cc/80?img=3", text: "The placement support here is unmatched. Got placed at Infosys within 2 months of graduation." },
  { name: "Anjali Gupta", program: "MBA 2024", img: "https://i.pravatar.cc/80?img=5", text: "The campus facilities and smart AI labs are incredible. I feel ready for any challenge." },
  { name: "Arjun Singh", program: "BBA AI 2025", img: "https://i.pravatar.cc/80?img=8", text: "Just enrolled in BBA AI — the curriculum is exactly what the industry needs. Excited for this journey!" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Student Stories" title="Hear From Our Students" />

        {/* Desktop: show 3 */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="text-secondary mb-3">★★★★★</div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-text-dark">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="text-secondary mb-3">★★★★★</div>
              <p className="text-sm text-muted-foreground mb-4">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonials[current].img} alt={testimonials[current].name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[current].program}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
