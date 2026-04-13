import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import { scrollToLeadForm } from "@/lib/utils";

const highlights = [
  { icon: "FT", text: "Full-Time Programs" },
  { icon: "UGC", text: "UGC-Approved University" },
  { icon: "UP", text: "Fastest Growing Private University In Uttar Pradesh" },
  { icon: "100%", text: "Guaranteed Placement" },
  { icon: "AI", text: "AI-First Curriculum" },
  { icon: "IN", text: "Farrukhabad, Uttar Pradesh" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,JVBERi0xLjQK";
    link.download = "MSDS_BBA_AI_Brochure.pdf";
    link.click();
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902364/hero_ribdkz.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-16 pt-10 sm:px-6 lg:px-8 md:py-16 lg:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Panel */}
          <motion.div
            className="flex w-full flex-1 flex-col items-center text-center text-white lg:items-start lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur-md sm:px-5 sm:py-2 sm:text-xs md:text-sm"
            >
              New Launch | Batch 2026
            </motion.div>

            <motion.div
              variants={item}
              className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-secondary/35 bg-secondary/15 px-4 py-3 text-left shadow-lg shadow-secondary/20 backdrop-blur-md sm:mb-8 sm:px-5 lg:justify-start"
            >
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-dark sm:text-[11px]">
                Admission Alert
              </span>
              <span className="text-sm font-semibold text-white sm:text-base">
                Last date: <span className="text-secondary">20 June</span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mb-4 text-4xl font-extrabold leading-[1.15] sm:text-5xl sm:mb-6 md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl"
            >
              <span className="text-secondary">AI-Powered</span> Degree Program
            </motion.h1>

            <motion.h2
              variants={item}
              className="mb-4 px-2 text-base font-medium text-white/90 sm:mb-6 sm:px-0 sm:text-xl md:text-2xl"
            >
              Shape the Future of Business with the Power of AI
            </motion.h2>

            <motion.p
              variants={item}
              className="mb-8 max-w-2xl px-2 text-sm leading-relaxed text-white/80 sm:mb-10 sm:px-0 sm:text-base md:text-lg"
            >
              Be among the first to join India's most forward-thinking AI-powered degree
              programs - BBA, BCA, MBA, and MCA - blending business, technology, and
              cutting-edge artificial intelligence skills. Offered by Major SD Singh
              University, Farrukhabad.
            </motion.p>

            <motion.div
              variants={item}
              className="mb-8 flex w-full flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3 lg:justify-start"
            >
              {highlights.map((h) => (
                <span
                  key={h.text}
                  className={
                    h.text === "Guaranteed Placement"
                      ? "z-10 whitespace-nowrap rounded-full border-2 border-secondary/80 bg-secondary px-4 py-2 text-xs font-extrabold text-white shadow-lg shadow-secondary/50 transition-all hover:-translate-y-0.5 hover:bg-secondary/90 sm:px-5 sm:py-2.5 sm:text-sm md:text-base"
                      : "whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] shadow-sm backdrop-blur-md transition-colors hover:bg-white/20 sm:px-4 sm:py-2 sm:text-xs md:text-sm"
                  }
                >
                  {h.icon} {h.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mb-8 flex w-full flex-col justify-center gap-3 sm:mb-10 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start"
            >
              <button
                onClick={scrollToLeadForm}
                className="flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95 sm:w-auto sm:py-3.5"
              >
                Apply Now
              </button>
              <button
                onClick={handleDownload}
                className="flex w-full items-center justify-center rounded-full border-2 border-secondary bg-transparent px-8 py-4 text-base font-semibold text-secondary transition-all hover:scale-105 hover:bg-secondary hover:text-white active:scale-95 sm:w-auto sm:py-3.5"
              >
                Download Brochure
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="mx-auto flex w-max flex-row items-center justify-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-xs text-white/80 lg:mx-0 lg:justify-start sm:text-sm md:text-base"
            >
              <span className="text-[10px] tracking-widest text-secondary sm:text-sm">
                5-STAR
              </span>
              <span>Rated 4.8/5 by 2000+ students</span>
            </motion.div>
          </motion.div>

          {/* Right Panel - Lead Form */}
          <motion.div
            className="relative z-20 mt-4 mx-auto w-full max-w-md flex-shrink-0 lg:mx-0 lg:mt-0 lg:w-[440px] xl:w-[480px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
