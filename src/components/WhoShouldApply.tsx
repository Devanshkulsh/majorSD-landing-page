import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: "🎓", title: "Fresh 12th Pass Students", desc: "Any stream welcome — Science, Commerce, or Arts" },
  { icon: "💡", title: "Tech Enthusiasts", desc: "Curious about AI and its business impact" },
  { icon: "📈", title: "Aspiring Entrepreneurs", desc: "Build AI-first startups from day one" },
  { icon: "🌐", title: "Future Digital Leaders", desc: "Ready to lead in the digital economy" },
  { icon: "🔁", title: "Career Switchers", desc: "Looking to pivot into AI-adjacent roles" },
  { icon: "🎯", title: "Ambitious Professionals", desc: "Want to upskill with a recognized degree" },
];

const WhoShouldApply = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Eligibility" title="Is This Program For You?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-light border-l-4 border-secondary rounded-xl p-5 hover:scale-[1.02] transition-transform"
          >
            <div className="text-2xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-text-dark mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoShouldApply;
