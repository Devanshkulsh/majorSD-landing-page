import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tabs = [
  {
    label: "Curriculum Overview",
    content: (
      <div className="space-y-4">
        {[
          "Foundation: Business / Computer Fundamentals + Intro to AI & Python",
          "Core: Data Analytics + Machine Learning + Programming Concepts",
          "Advanced: Deep Learning + AI Applications + Cloud & Tools",
          "Specialization: AI in Business / Data Science / Digital Transformation",
          "Strategy: AI Ethics + Innovation + Entrepreneurship",
          "Final Phase: Capstone Project + Internship + Placement Preparation",
        ].map((s) => (
          <div
            key={s}
            className="bg-light rounded-lg p-3 text-sm text-text-dark"
          >
            {s}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "AI Tools & Technologies",
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          "Python",
          "TensorFlow",
          "ChatGPT API",
          "Power BI",
          "SQL",
          "Tableau",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
          "Excel",
          "Cloud Platforms",
        ].map((t) => (
          <span
            key={t}
            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Core Subjects",
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          "Marketing Management",
          "Financial Accounting",
          "Human Resource Management",
          "Programming Fundamentals",
          "Data Structures",
          "Business Communication",
          "Operations Management",
          "Database Management Systems",
        ].map((t) => (
          <span
            key={t}
            className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Career Pathways",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "AI Business Analyst",
          "Data Scientist / Analyst",
          "Product Manager",
          "AI Consultant",
          "Software Developer (AI)",
          "Digital Transformation Specialist",
          "Machine Learning Engineer",
        ].map((r) => (
          <div
            key={r}
            className="bg-white border border-gray-100 rounded-lg p-4 text-sm font-medium text-text-dark shadow-sm"
          >
            {r}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Eligibility",
    content: (
      <div className="space-y-3 text-sm text-text-dark">
        <p className="flex items-start gap-2">
          <span className="text-secondary">✓</span> Undergraduate Programs (BBA
          / BCA): 10+2 from any recognized board
        </p>
        <p className="flex items-start gap-2">
          <span className="text-secondary">✓</span> Postgraduate Programs (MBA /
          MCA): Graduation from a recognized university
        </p>
        <p className="flex items-start gap-2">
          <span className="text-secondary">✓</span> Minimum 45% aggregate marks
          (may vary by program)
        </p>
        <p className="flex items-start gap-2">
          <span className="text-secondary">✓</span> Open to all streams (Science
          / Commerce / Arts)
        </p>
        <p className="flex items-start gap-2">
          <span className="text-secondary">✓</span> Direct admission based on
          merit (as per university norms)
        </p>
      </div>
    ),
  },
];

const ProgramHighlights = () => {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);

  const handleTabClick = (index) => {
    setActive(index);

    if (tabsRef.current[index]) {
      tabsRef.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="Program Details"
          title="What Makes This Program Unique"
        />
        <div className="flex flex-col md:flex-row gap-6">
          <div
            className="md:w-64 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {tabs.map((t, i) => (
              <button
                key={t.label}
                ref={(el) => (tabsRef.current[i] = el)}
                onClick={() => handleTabClick(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  active === i
                    ? "bg-primary text-white"
                    : "bg-light text-text-dark hover:bg-primary/10"
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

      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default ProgramHighlights;
