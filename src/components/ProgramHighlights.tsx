import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tabs = [
  {
    label: "Curriculum Overview",
    content: (
      <div className="space-y-4">
        {["Sem 1: Business Fundamentals + Intro to AI & Python", "Sem 2: Marketing + Data Analytics + ML Basics", "Sem 3: Finance + Deep Learning + BI Tools", "Sem 4: HRM + NLP + AI in E-Commerce", "Sem 5: AI Strategy & Ethics + Entrepreneurship", "Sem 6: Capstone Project + Internship + Placement Prep"].map((s) => (
          <div key={s} className="bg-light rounded-lg p-3 text-sm text-text-dark">{s}</div>
        ))}
      </div>
    ),
  },
  {
    label: "AI Tools & Technologies",
    content: (
      <div className="flex flex-wrap gap-3">
        {["Python", "TensorFlow", "ChatGPT API", "Power BI", "SQL", "Tableau", "Scikit-Learn", "Pandas", "NumPy"].map((t) => (
          <span key={t} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">{t}</span>
        ))}
      </div>
    ),
  },
  {
    label: "Business Core",
    content: (
      <div className="flex flex-wrap gap-3">
        {["Marketing Management", "Financial Accounting", "Human Resource Management", "Entrepreneurship", "Operations Management", "Business Communication"].map((t) => (
          <span key={t} className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">{t}</span>
        ))}
      </div>
    ),
  },
  {
    label: "Career Pathways",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {["AI Business Analyst", "Data Strategist", "Product Manager", "AI Consultant", "Digital Marketing Head"].map((r) => (
          <div key={r} className="bg-white border border-gray-100 rounded-lg p-4 text-sm font-medium text-text-dark shadow-sm">{r}</div>
        ))}
      </div>
    ),
  },
  {
    label: "Eligibility",
    content: (
      <div className="space-y-3 text-sm text-text-dark">
        <p className="flex items-start gap-2"><span className="text-secondary">✓</span> 10+2 from any recognized board</p>
        <p className="flex items-start gap-2"><span className="text-secondary">✓</span> Minimum 45% aggregate marks</p>
        <p className="flex items-start gap-2"><span className="text-secondary">✓</span> Any stream (Science / Commerce / Arts)</p>
        <p className="flex items-start gap-2"><span className="text-secondary">✓</span> No entrance exam required</p>
        <p className="flex items-start gap-2"><span className="text-secondary">✓</span> Direct admission on merit basis</p>
      </div>
    ),
  },
];

const ProgramHighlights = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Program Details" title="What Makes This Program Unique" />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  active === i ? "bg-primary text-white" : "bg-light text-text-dark hover:bg-primary/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex-1 min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[active].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
