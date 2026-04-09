import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Are these AI-powered programs UGC-recognized?",
    a: "Yes, Major SD Singh University is UGC-approved under the UGC Act 1956. All programs (BBA, BCA, MBA, MCA) are recognized nationwide and valid for jobs and higher studies.",
  },
  {
    q: "What AI-based courses are offered?",
    a: "We offer BBA in AI & Digital Business, BCA in AI & Data Science, MBA in AI & Digital Transformation, and MCA in Data Science — all designed for future-ready careers.",
  },
  {
    q: "What is the duration of each course?",
    a: "BBA and BCA are 3-year undergraduate programs, while MBA and MCA are 2-year postgraduate programs.",
  },
  {
    q: "What is the eligibility for BBA and BCA programs?",
    a: "You must have completed 10+2 from any recognized board with at least 45% marks. Students from all streams (Science, Commerce, Arts) can apply.",
  },
  {
    q: "What is the eligibility for MBA and MCA programs?",
    a: "You need a graduation degree from a recognized university with a minimum of 45% marks. Eligibility may vary slightly depending on the program.",
  },
  {
    q: "Is there any entrance exam for admission?",
    a: "No entrance exam is required. Admissions are granted based on merit and a simple counseling process.",
  },
  {
    q: "What skills and tools will I learn?",
    a: "You will gain hands-on experience with AI tools and technologies such as Python, Machine Learning, Data Science, Power BI, SQL, Tableau, and more, depending on your chosen program.",
  },
  {
    q: "What makes these AI programs different from traditional degrees?",
    a: "These programs combine core academics with real-world AI tools, live projects, and industry-aligned curriculum, ensuring you graduate with practical, job-ready skills.",
  },
  {
    q: "Are internships included in the programs?",
    a: "Yes, all programs include internship opportunities to provide real-world exposure and hands-on industry experience before graduation.",
  },
  {
    q: "Does the university provide placement support?",
    a: "Yes, we offer 100% placement assistance through our corporate network of 50+ companies including TCS, Infosys, Wipro, Deloitte, and more.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative py-14 md:py-24 bg-light overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/15 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeading
            tag="Knowledge Base"
            title="Frequently Asked Questions"
          />
        </div>

        <div className="grid gap-3 md:gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  backgroundColor: isOpen
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0.78)",
                  scale: isOpen ? 1.01 : 1,
                }}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/25 shadow-xl shadow-primary/10"
                    : "border-white/60 hover:border-primary/20 shadow-sm backdrop-blur-xl"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-3 p-4 md:p-6 text-left outline-none"
                >
                  <div className="flex min-w-0 flex-1 gap-3 md:gap-4 items-start md:items-center">
                    <span
                      className={`hidden md:flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-white text-muted-foreground border border-slate-200 group-hover:border-primary/20 group-hover:text-primary"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`block pr-1 text-sm sm:text-base md:text-lg leading-snug font-bold transition-colors ${
                        isOpen
                          ? "text-text-dark"
                          : "text-text-dark/80 group-hover:text-primary"
                      }`}
                    >
                      {f.q}
                    </span>
                  </div>

                  <div
                    className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/20"
                        : "bg-white text-muted-foreground border border-slate-200 group-hover:border-primary/20 group-hover:text-primary"
                    }`}
                  >
                    <ChevronDown size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                    >
                      <div className="px-4 md:px-16 pb-5 md:pb-6">
                        <div className="flex gap-3 md:gap-4">
                          {/* Accent line for the answer */}
                          <div className="w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-40" />
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base pr-1">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Footer */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center p-8 rounded-3xl border border-secondary/20 bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white shadow-2xl shadow-secondary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.24),transparent_35%)]" />
          <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-white/15 text-white rounded-full mb-4 border border-white/20">
            <MessageCircleQuestion size={24} />
          </div>
          <h4 className="relative z-10 text-lg font-bold text-white">Still have questions?</h4>
          <p className="relative z-10 text-white/80 mb-6">Our admissions team is here to help you 24/7.</p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917064666666" className="px-6 py-3 bg-white text-secondary rounded-full font-bold hover:bg-slate-100 transition-all">
              Call Support
            </a>
            <a href="#contact" className="px-6 py-3 bg-white/10 text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all">
              Email Admissions
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FAQSection;
