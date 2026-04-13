import { motion } from "framer-motion";

const leaders = [
  {
    name: "Nikhil Sachan",
    company: "Ntechzy",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072431/nikhil_sachan_gbpwfg.jpg",
  },
  {
    name: "Deepinder Goyal",
    company: "Zomato",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072431/deepinder_arhtqm.jpg",
  },
  {
    name: "Kunal Shah",
    company: "CRED",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072431/kunal_jajmdn.webp",
  },
  {
    name: "Nithin Kamath",
    company: "Zerodha",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072432/nithin_zb7py7.webp",
  },
  {
    name: "Aman Gupta",
    company: "Boat",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072431/aman_yjzssu.jpg",
  },
  {
    name: "Roshni Nadar",
    company: "HCL",
    img: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072436/roshni_rf1are.jpg",
  },
];

const LeadersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
            Backed by India’s
          </h2>
          <p className="text-primary text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
            Top Business Leaders
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[300px] sm:h-[320px] overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-sm font-semibold">
                  {leader.name}
                </p>

                <p className="text-white/90 text-lg font-bold mt-1 tracking-wide">
                  {leader.company}
                </p>
              </div>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-primary/50 transition" />

              {/* Premium Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
