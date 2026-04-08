import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Is BBA in AI a UGC-recognized degree?",
    a: "Yes, Major SD Singh University is UGC-approved under the UGC Act 1956. The degree is recognized nationwide, ensuring your credentials hold value in both public and private sectors.",
  },
  {
    q: "What is the eligibility for BBA AI?",
    a: "10+2 from any recognized board with minimum 45% marks. Students from any stream (Science, Commerce, Arts) are encouraged to apply as the program starts from basics.",
  },
  {
    q: "Is there an entrance exam?",
    a: "No entrance exam is required for this session. Admissions are granted directly based on your 10+2 merit and a personal counseling round.",
  },
  {
    q: "What is the fee structure?",
    a: "The program fee is ₹85,000 per year. We offer flexible EMI options starting at just ₹7,000/month. Merit-based scholarships up to 50% are available for eligible students.",
  },
  {
    q: "Does the university provide placement?",
    a: "Absolutely. We provide 100% placement assistance through our dedicated corporate cell, partnering with 50+ tech giants like TCS, Infosys, and Wipro.",
  },
  {
    q: "What AI tools will I learn?",
    a: "You'll gain hands-on expertise in Python, TensorFlow, ChatGPT API, Power BI, SQL, Tableau, and Scikit-Learn through our industry-aligned lab sessions.",
  },
  {
    q: "Is hostel available?",
    a: "Yes, we provide premium separate hostels for boys and girls. Facilities include 24/7 Wi-Fi, nutritious mess meals, laundry, and indoor recreation zones.",
  },
  {
    q: "How can I apply?",
    a: "You can apply directly via the form on this page or reach out to our admissions counselors at +91-7064666666 for a guided application process.",
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
