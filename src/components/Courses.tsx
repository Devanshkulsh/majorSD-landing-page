import { motion } from "framer-motion";

const courses = [
  {
    title: "BBA in AI & Digital Business",
    desc: "Master business strategy with AI-driven decision making, digital growth, and future-ready leadership.",
    img: "/courses/BBA.webp",
    imgPosition: "center 20%",
  },
  {
    title: "BCA in AI & Data Science",
    desc: "Build strong programming foundations with machine learning, data science, and real-world AI applications.",
    img: "/courses/BCA.webp",
    imgPosition: "center 25%",
  },
  {
    title: "MBA in AI & Digital Transformation",
    desc: "Lead organizations through AI-powered innovation, automation, and next-gen business transformation.",
    img: "/courses/MBA.webp",
    imgPosition: "center 30%",
  },
  {
    title: "MCA in Data Science",
    desc: "Master data science, machine learning, and advanced computing to build intelligent systems and drive data-driven innovation.",
    img: "/courses/MCA.webp",
    imgPosition: "center 22%",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="relative py-20 md:py-28 bg-dark overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-primary/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-secondary/20 blur-[140px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-secondary text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
            Our Programs
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Future-Ready AI Degree Programs
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Choose from industry-aligned programs designed to prepare you for
            high-growth AI careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* 🔥 Animated Glow Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

              {/* Card */}
              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden h-full shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-60 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700 will-change-transform brightness-105 contrast-110 saturate-110"
                    style={{ objectPosition: course.imgPosition }}
                  />

                  {/* Softer Overlay For Better Image Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Top Shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent)]" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-secondary transition">
                    {course.title}
                  </h3>

                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {course.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-2 text-secondary text-sm font-semibold opacity-80 group-hover:opacity-100 transition-all">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Explore Program →
                    </span>
                  </div>
                </div>

                {/* Bottom Glow Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

