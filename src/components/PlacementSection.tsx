import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const companies = [
  {
    name: "TCS",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903582/tcs_zajdn5.webp",
  },
  {
    name: "Infosys",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903577/infosys_r35oac.webp",
  },
  {
    name: "Wipro",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903584/wipro_uejbe7.webp",
  },
  {
    name: "Deloitte",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903573/deloitte_v6qa81.webp",
  },
  {
    name: "IBM",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903576/ibm_luaawy.webp",
  },
  {
    name: "Ntechzy",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903581/ntechzy2_sgiij7.png",
  },
  {
    name: "Amazon",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903571/amazon_ct7ul6.webp",
  },
  {
    name: "Microsoft",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903579/microsoft_qlx2wi.webp",
  },
  {
    name: "Cognizant",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903572/cognizant_erc6fb.webp",
  },
  {
    name: "Accenture",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903571/accenture_uq11qi.webp",
  },
  {
    name: "KPMG",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903578/kpmg_scuvak.webp",
  },
  {
    name: "Google",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903574/google_kqqi2c.webp",
  },
  {
    name: "HCL",
    logo: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1775903575/hcl_zyk3yn.webp",
  },
];

const roles = [
  { title: "AI Business Analyst", salary: "₹6–12 LPA" },
  { title: "Data Scientist / Analyst", salary: "₹8–18 LPA" },
  { title: "Software Developer (AI)", salary: "₹6–15 LPA" },
  { title: "Product Manager (AI)", salary: "₹10–25 LPA" },
  { title: "AI Consultant / Specialist", salary: "₹12–30 LPA" },
  { title: "Digital Transformation Manager", salary: "₹8–20 LPA" },
  { title: "Machine Learning Engineer", salary: "₹10–22 LPA" },
  { title: "Entrepreneur / Startup Founder", salary: "Unlimited" },
  { title: "Business Intelligence (BI) Analyst", salary: "₹6–14 LPA" },
];

const PlacementSection = () => (
  <section id="placements" className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading
        tag="Careers"
        title="Your Career After AI-Powered Degree Programs"
      />

      {/* Company logos strip */}
      <div className="mb-8 sm:mb-12 overflow-hidden">
        <motion.div
          className="flex gap-3 sm:gap-6 w-max items-center"
          animate={{ x: [0, -600] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="bg-light border border-gray-200 px-3 sm:px-5 py-2 sm:py-3 rounded-lg flex items-center justify-center min-w-[90px] sm:min-w-[120px]"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {roles.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-dark rounded-xl p-4 sm:p-6 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
              {r.title}
            </h3>
            <p className="text-secondary font-bold text-lg sm:text-xl">
              {r.salary}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlacementSection;
