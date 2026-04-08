import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const semesters = [
  { sem: "Semester 1", title: "Foundations", desc: "Foundations of Business + Introduction to AI & Python Programming" },
  { sem: "Semester 2", title: "Analytics", desc: "Marketing Principles + Data Analytics + Machine Learning Basics" },
  { sem: "Semester 3", title: "Deep Dive", desc: "Financial Management + Deep Learning + Business Intelligence Tools" },
  { sem: "Semester 4", title: "Specialization", desc: "HRM + NLP + AI in E-Commerce & Digital Marketing" },
  { sem: "Semester 5", title: "Strategy", desc: "AI Strategy & Ethics + Entrepreneurship + Power BI / Tableau" },
  { sem: "Semester 6", title: "Capstone", desc: "Capstone AI Project + Corporate Internship + Placement Preparation" },
];

const CurriculumRoadmap = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading tag="Academics" title="3-Year BBA AI Curriculum" />
        <div className="space-y-3">
          {semesters.map((s, i) => (
            <motion.div
              key={s.sem}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-xs text-secondary font-semibold uppercase">{s.sem}</span>
                    <h3 className="font-bold text-text-dark text-sm md:text-base">{s.title}</h3>
                  </div>
                </div>
                <span className={`text-secondary text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[4.5rem] text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumRoadmap;
