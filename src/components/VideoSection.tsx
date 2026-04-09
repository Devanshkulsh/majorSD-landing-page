import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const thumbnails = [
  {
    label: "Campus Tour",
    video: "https://youtu.be/DcC_1dFdxEw?si=KiVcvCg4h6KqBYbF",
  },
  {
    label: "Campus Review",
    video: "https://youtu.be/YkWHVg_Z0PY?si=IrloNIzOVut3xmjX",
  },
  {
    label: "Student Testimonial",
    video: "https://youtu.be/miD0IgiZAN4?si=Kc-rLpB7DmLXwRvk",
  },
];

// 🔥 Extract YouTube Video ID from any URL
const getVideoId = (url) => {
  const regExp = /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : url;
};

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(
    getVideoId(thumbnails[0].video),
  );

  return (
    <section id="videos" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Campus Life" title="Experience MSDS University" />

        {/* Main Video */}
        <motion.div
          key={activeVideo}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-10"
        >
          <div className="relative group">
            {/* Glow Border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/70 via-secondary/70 to-primary/70 rounded-3xl blur-lg opacity-40 transition duration-500" />

            {/* Video Container */}
            <div className="relative w-full pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-xl">
              {/* ✅ Smooth Themed Background (fixes black flash) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900/40 to-secondary/20" />

              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0`}
                title="MSDS University Campus Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {thumbnails.map((t, i) => {
            const videoId = getVideoId(t.video);

            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveVideo(videoId)}
                className={`relative group rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-lg ${
                  activeVideo === videoId ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={t.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Label */}
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="text-white text-xs md:text-sm font-semibold bg-slate-900/55 px-3 py-1 rounded-full backdrop-blur">
                    {t.label}
                  </span>
                </div>

                {/* Active Glow */}
                <div
                  className={`absolute inset-0 border rounded-2xl transition ${
                    activeVideo === videoId
                      ? "border-primary"
                      : "border-white/30 group-hover:border-primary/40"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

