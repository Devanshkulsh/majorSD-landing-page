import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ tag, title, subtitle, align = "center" }: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col ${alignment} mb-10 md:mb-14`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">{tag}</span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark leading-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl text-base md:text-lg">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
