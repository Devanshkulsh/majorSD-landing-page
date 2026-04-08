import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { icon: "📋", title: "Fill Enquiry Form", desc: "Complete the quick online form" },
  { icon: "📞", title: "Get Counselling Call", desc: "Our expert will guide you" },
  { icon: "📄", title: "Submit Documents", desc: "Upload your academic records" },
  { icon: "🎓", title: "Confirm Admission", desc: "Pay fee and secure your seat" },
];

const AdmissionProcess = () => (
  <section className="py-16 md:py-20 bg-light">
    <div className="container mx-auto px-4">
      <SectionHeading tag="How To Apply" title="Simple 4-Step Admission Process" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-0"
          >
            <div className="flex flex-col items-center text-center w-36 md:w-40">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-2xl mb-3">
                {s.icon}
              </div>
              <h3 className="font-bold text-sm text-text-dark mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-12 h-0.5 bg-secondary mx-2" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdmissionProcess;
