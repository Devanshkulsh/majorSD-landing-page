import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const thumbnails = [
  { label: "Campus Tour", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
  { label: "AI Lab Walkthrough", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
  { label: "Student Life", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80" },
];

const VideoSection = () => (
  <section className="py-16 md:py-20 bg-light">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Campus Life" title="Experience MSDS University" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-xl mb-8">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="MSDS University Campus Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {thumbnails.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-xl overflow-hidden aspect-video group cursor-pointer"
          >
            <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-3xl mb-1">▶</div>
                <span className="text-white text-sm font-medium">{t.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
