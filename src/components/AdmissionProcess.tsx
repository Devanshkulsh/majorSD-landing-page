import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { scrollToLeadForm } from "@/lib/utils";

const steps = [
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904314/form_knae2x.gif"
        alt="Enquiry"
        className="w-14 h-14 object-contain"
      />
    ),
    title: "Enquiry Form",
    desc: "Start your journey by filling out our digital application form.",
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904313/call_mdk3yg.gif"
        alt="Counselling"
        className="w-10 h-10 object-contain"
      />
    ),
    title: "Expert Counselling",
    desc: "Speak with our AI career mentors to choose the right track.",
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904337/uploadgif1_xxkfph.gif"
        alt="Documents"
        className="w-13 h-13 object-contain"
      />
    ),
    title: "Document Upload",
    desc: "Quickly verify your credentials via our secure portal.",
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775904315/graduation_dvgdpn.gif"
        alt="Admission"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Secure Seat",
    desc: "Complete the enrollment and join the next AI cohort.",
  },
];

const AdmissionProcess = () => (
  <section
    id="admission-process"
    className="relative py-16 md:py-24 bg-white overflow-hidden"
  >
    {/* Abstract Background Decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform origin-right -z-10" />

    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16 flex flex-col items-center">
        <SectionHeading tag="Admission" title="Your Path to an AI Career" />
        <p className="mt-[-1rem] md:mt-[-1.25rem] inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs md:text-sm font-medium text-slate-600">
          Total process time: ~48 Hours
          <ArrowRight size={16} className="text-primary" />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 z-0">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
          />
        </div>

        {/* Vertical Line (Mobile Only) */}
        <div className="absolute left-8 top-8 bottom-8 w-[2px] border-l-2 border-dashed border-slate-200 md:hidden z-0" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative z-10 group flex flex-row md:flex-col gap-6 md:gap-0"
          >
            {/* Step Number Background */}
            <span className="absolute -top-6 -left-2 text-6xl font-bold text-slate-50 opacity-[0.03] select-none group-hover:opacity-10 transition-opacity hidden md:block">
              0{i + 1}
            </span>

            {/* Icon Circle */}
            <div className="relative mb-0 md:mb-8 flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary transition-all duration-300 md:group-hover:-translate-y-1">
                {s.icon}
              </div>

              {/* Desktop Progress Node */}
              <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%]">
                {i !== steps.length - 1 && (
                  <div className="w-2 h-2 rounded-full bg-slate-200 border-4 border-white shadow-sm" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="pr-0 md:pr-4 pt-2 md:pt-0">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 flex items-center gap-3">
                <span className="text-sm font-mono text-primary/50 md:hidden">
                  0{i + 1}.
                </span>
                <span className="hidden md:inline text-sm font-mono text-primary/50">
                  0{i + 1}.
                </span>
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </div>

            {/* Decorative Card Background */}
            <div className="absolute -inset-2 md:-inset-4 bg-slate-50/0 group-hover:bg-slate-50/50 rounded-3xl -z-10 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 md:mt-20 rounded-[1.5rem] md:rounded-[2rem] border border-secondary/20 bg-gradient-to-br from-secondary via-secondary/95 to-primary p-6 md:p-8 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.24),transparent_35%)]" />
        <h4 className="text-xl md:text-2xl font-bold mb-4 relative z-10">
          Ready to start your application?
        </h4>
        <button
          onClick={scrollToLeadForm}
          className="w-full md:w-auto px-8 py-3 bg-white text-secondary hover:bg-slate-100 rounded-full font-bold transition-all transform hover:scale-105 relative z-10 shadow-xl shadow-slate-900/15"
        >
          Apply Now
        </button>
      </motion.div>
    </div>
  </section>
);

export default AdmissionProcess;
