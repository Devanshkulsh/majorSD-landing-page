import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const highlights = [
  { icon: "🎓", text: "3-Year Full-Time Program" },
  { icon: "🏛️", text: "UGC-Approved University" },
  { icon: "💼", text: "100% Guaranteed Placement" },
  { icon: "🤖", text: "AI-First Curriculum" },
  { icon: "📍", text: "Farrukhabad, Uttar Pradesh" },
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
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          {/* Left Panel */}
          <motion.div
            className="flex-1 w-full text-white text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium mb-6 sm:mb-8 shadow-sm"
            >
              🚀 New Launch | Batch 2026
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] md:leading-tight lg:leading-tight mb-4 sm:mb-6"
            >
              BBA in{" "}
              <span className="text-secondary">Artificial Intelligence</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-base sm:text-xl md:text-2xl font-medium text-white/90 mb-4 sm:mb-6 px-2 sm:px-0"
            >
              Shape the Future of Business with the Power of AI
            </motion.h2>

            <motion.p
              variants={item}
              className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2 sm:px-0"
            >
              Be among the first to join India's most forward-thinking BBA
              program, blending business acumen with cutting-edge AI skills.
              Offered by Major SD Singh University, Farrukhabad.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 w-full"
            >
              {highlights.map((h) => (
                <span
                  key={h.text}
                  className={
                    h.text === "100% Guaranteed Placement"
                      ? "bg-secondary text-white hover:bg-secondary/90 transition-all hover:-translate-y-0.5 border-2 border-secondary/80 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base whitespace-nowrap shadow-lg shadow-secondary/50 font-extrabold z-10"
                      : "bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm whitespace-nowrap shadow-sm"
                  }
                >
                  {h.icon} {h.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-white px-8 py-4 sm:py-3.5 rounded-full font-semibold transition-all text-base shadow-lg shadow-primary/30 flex items-center justify-center"
              >
                Apply Now →
              </button>
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-105 active:scale-95 px-8 py-4 sm:py-3.5 rounded-full font-semibold transition-all text-base flex items-center justify-center"
              >
                Download Brochure
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-row items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm md:text-base text-white/80 bg-white/5 px-5 py-2.5 rounded-full w-max mx-auto lg:mx-0"
            >
              <span className="text-secondary tracking-widest text-[10px] sm:text-sm">
                ★★★★★
              </span>
              <span>Rated 4.8/5 by 2000+ students</span>
            </motion.div>
          </motion.div>

          {/* Right Panel - Lead Form */}
          <motion.div
            className="w-full lg:w-[440px] xl:w-[480px] flex-shrink-0 max-w-md mx-auto lg:mx-0 relative z-20 mt-4 lg:mt-0"
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
