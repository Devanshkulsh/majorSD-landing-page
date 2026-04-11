import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902469/robot_zdazi5.gif",
    title: "AI is the Future of Business",
    desc: "AI will transform every industry; be ready to lead the change.",
  },
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902464/wallet_on1q22.gif",
    title: "Highest Paying Roles",
    desc: "AI+Business professionals earn 40-60% more than traditional BBA grads.",
  },
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902461/globe_nnyefv.gif",
    title: "Global Career Opportunities",
    desc: "Work with MNCs, startups, and government AI initiatives worldwide.",
  },
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902462/growth_ba4bsk.gif",
    title: "Data-Driven Decision Making",
    desc: "Master analytics, ML, and business intelligence tools.",
  },
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902463/trophy_us2kjy.gif",
    title: "Industry-Aligned Curriculum",
    desc: "Built with inputs from AI companies and industry leaders.",
  },
  {
    gif: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775902464/handshake_okknik.gif",
    title: "Internship Guarantee",
    desc: "Guaranteed internship in AI-focused companies in year 2.",
  },
];

const WhyChoose = () => (
  <section id="why-choose" className="bg-light py-16 md:py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        tag="Future-Ready Program"
        title="Why Choose AI-Powered Degree Programs?"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-light">
              {c.gif ? (
                <img
                  src={c.gif}
                  alt={c.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-xs font-medium text-muted-foreground">
                  Add GIF
                </span>
              )}
            </div>
            <h3 className="mb-2 text-lg font-bold text-text-dark transition-colors group-hover:text-primary">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {c.desc}
            </p>
            <div className="mt-3 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-12" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
