import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const faqs = [
  { q: "Is BBA in AI a UGC-recognized degree?", a: "Yes, Major SD Singh University is UGC-approved under the UGC Act 1956. The degree is recognized nationwide." },
  { q: "What is the eligibility for BBA AI?", a: "10+2 from any recognized board with minimum 45% marks. Students from any stream (Science, Commerce, Arts) can apply." },
  { q: "Is there an entrance exam?", a: "No entrance exam required. Direct admission on merit basis." },
  { q: "What is the fee structure?", a: "₹85,000/year with EMI options starting ₹7,000/month. Scholarships up to 50% available." },
  { q: "Does the university provide placement?", a: "Yes, 100% placement assistance with 50+ hiring partners including TCS, Infosys, Wipro, and more." },
  { q: "What AI tools will I learn?", a: "Python, TensorFlow, ChatGPT API, Power BI, SQL, Tableau, Scikit-Learn, and more." },
  { q: "Is hostel available?", a: "Yes, separate hostels for boys and girls with all amenities including Wi-Fi, mess, and recreation." },
  { q: "How can I apply?", a: "Fill the form on this page or call +91-7064666666 to speak with our admissions team." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading tag="FAQs" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <span className="font-semibold text-sm md:text-base text-text-dark pr-4">{f.q}</span>
                <span className={`text-secondary text-xl flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
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
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
