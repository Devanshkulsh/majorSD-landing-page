import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Founded in 2013 | Faridabad, Haryana",
  "Approved by UGC, AICTE, PCI, INC, BCI",
  "10,000+ students enrolled across 25+ programs",
  "World-class infrastructure, smart classrooms, AI Labs",
  "50+ MOUs with industry leaders",
];

const badges = ["UGC Approved", "NAAC", "Govt. of Haryana", "AICTE"];

const UniversityOverview = () => (
  <section className="py-16 md:py-20 bg-light">
    <div className="container mx-auto px-4">
      <SectionHeading tag="About the University" title="Major SD Singh University, Faridabad" align="left" />
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
            alt="MSDS University Campus"
            className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-text-dark">
                <span className="text-secondary font-bold text-lg mt-0.5">✓</span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span key={b} className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-xs font-semibold">{b}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UniversityOverview;
