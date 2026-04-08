import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const highlights = [
  { icon: "🎓", text: "3-Year Full-Time Program" },
  { icon: "🏛️", text: "UGC-Approved University" },
  { icon: "💼", text: "100% Placement Support" },
  { icon: "🤖", text: "AI-First Curriculum" },
  { icon: "📍", text: "Faridabad, Haryana" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

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
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Panel */}
          <motion.div className="flex-1 text-white" variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              🚀 New Launch | Batch 2025
            </motion.div>

            <motion.h1 variants={item} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              BBA in <span className="text-secondary">Artificial Intelligence</span>
            </motion.h1>

            <motion.h2 variants={item} className="text-lg md:text-xl font-medium text-white/80 mb-4">
              Shape the Future of Business with the Power of AI
            </motion.h2>

            <motion.p variants={item} className="text-white/70 mb-6 max-w-xl leading-relaxed">
              Be among the first to join India's most forward-thinking BBA program, blending business acumen with cutting-edge AI skills. Offered by Major SD Singh University, Faridabad.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
              {highlights.map((h) => (
                <span key={h.text} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-xs md:text-sm whitespace-nowrap">
                  {h.icon} {h.text}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm"
              >
                Apply Now →
              </button>
              <button
                onClick={handleDownload}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm"
              >
                Download Brochure
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2 text-sm text-white/70">
              <span className="text-secondary">★★★★★</span>
              <span>Rated 4.8/5 by 2000+ students</span>
            </motion.div>
          </motion.div>

          {/* Right Panel - Lead Form */}
          <motion.div
            className="w-full lg:w-[420px] flex-shrink-0"
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
