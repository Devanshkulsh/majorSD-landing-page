import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Founded in 2013 | Farrukhabad, Uttar Pradesh",
  "Approved by UGC, AICTE, PCI, INC, BCI",
  "10,000+ students enrolled across 25+ programs",
  "World-class infrastructure, smart classrooms, AI Labs",
  "50+ MOUs with industry leaders",
];

const badges = ["UGC Approved", "NAAC", "Govt. of Uttar Pradesh", "AICTE"];

const UniversityOverview = () => (
  <section className="relative py-12 sm:py-16 md:py-20 bg-light overflow-hidden">
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-80px] left-[-80px] sm:top-[-100px] sm:left-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] sm:bottom-[-100px] sm:right-[-100px] w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-secondary/20 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4">
      <SectionHeading
        tag="About the University"
        title="Major SD Singh University, Faridabad"
        align="left"
      />

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-center">
        {/* Image */}
        <motion.div
          className="lg:w-1/2 relative group w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition" />

          <img
            src="/campus.jpg"
            alt="MSDS University Campus"
            className="relative rounded-2xl w-full h-[220px] sm:h-[280px] md:h-[400px] object-cover shadow-2xl border border-white/20"
          />

          {/* Floating Card */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md text-[10px] sm:text-xs md:text-sm font-medium">
            🎓 10,000+ Students
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Bullet Cards */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-secondary font-bold text-base sm:text-lg mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm md:text-base text-text-dark leading-relaxed">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold shadow-sm hover:shadow-md transition"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UniversityOverview;
