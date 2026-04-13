import { motion } from "framer-motion";

const images = [
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072550/1_kdwsuv.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072550/2_afdx4i.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072551/3_hl5iym.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072565/4_p4xwna.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072565/4_p4xwna.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1776072565/4_p4xwna.jpg", className: "md:col-span-1 md:row-span-1" },
];

const CampusLifeSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 md:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-text-dark sm:text-3xl md:text-5xl">
            Life Beyond the <span className="text-primary">Classroom</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-relaxed text-muted-foreground sm:px-0 sm:text-base md:text-lg">
            Engage in a lively campus featuring an Innovation Lab, Turf arena,
            and collaborative co-working spaces
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-3 auto-rows-[220px] sm:grid-cols-2 sm:gap-4 sm:auto-rows-[200px] md:grid-cols-3 md:gap-6 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`group relative min-h-[220px] overflow-hidden rounded-2xl ${img.className}`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt="Campus Life"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)] opacity-0 transition duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
