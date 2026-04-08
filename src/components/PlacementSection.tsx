import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const companies = ["TCS", "Infosys", "Wipro", "Deloitte", "IBM", "Amazon", "Microsoft", "Cognizant", "Accenture", "KPMG", "Google", "HCL"];

const roles = [
  { title: "AI Business Analyst", salary: "₹6–12 LPA" },
  { title: "Data Strategist", salary: "₹8–15 LPA" },
  { title: "Digital Marketing Head", salary: "₹5–10 LPA" },
  { title: "Product Manager (AI)", salary: "₹10–20 LPA" },
  { title: "AI Consultant", salary: "₹12–25 LPA" },
  { title: "Entrepreneur / Founder", salary: "Unlimited" },
];

const PlacementSection = () => (
  <section id="placements" className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Careers" title="Your Career After BBA in AI" />

      {/* Company logos strip */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: [0, -600] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((c, i) => (
            <span key={`${c}-${i}`} className="bg-light border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-semibold text-text-dark whitespace-nowrap">
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {roles.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-dark rounded-xl p-6 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h3 className="font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-secondary font-bold text-xl">{r.salary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlacementSection;
