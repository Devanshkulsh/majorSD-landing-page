import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: "🤖", title: "AI is the Future of Business", desc: "AI will transform every industry; be ready to lead the change." },
  { icon: "💰", title: "Highest Paying Roles", desc: "AI+Business professionals earn 40–60% more than traditional BBA grads." },
  { icon: "🌍", title: "Global Career Opportunities", desc: "Work with MNCs, startups, and government AI initiatives worldwide." },
  { icon: "📊", title: "Data-Driven Decision Making", desc: "Master analytics, ML, and business intelligence tools." },
  { icon: "🏆", title: "Industry-Aligned Curriculum", desc: "Built with inputs from AI companies and industry leaders." },
  { icon: "🤝", title: "Internship Guarantee", desc: "Guaranteed internship in AI-focused companies in year 2." },
];

const WhyBBAinAI = () => (
  <section id="why-bba" className="py-16 md:py-20 bg-light">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Future-Ready Program" title="Why BBA in Artificial Intelligence?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            <div className="h-0.5 w-0 group-hover:w-12 bg-secondary transition-all duration-300 mt-3" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBBAinAI;
