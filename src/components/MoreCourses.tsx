import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock3, GraduationCap, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";

type Course = {
  name: string;
  duration: string;
  eligibility: string;
};

type Faculty = {
  name: string;
  courses: Course[];
};

const facultyData: Faculty[] = [
  {
    name: "Faculty of Ayurveda",
    courses: [
      {
        name: "B.A.M.S (Bachelor of Ayurvedic Medicine and Surgery)",
        duration: "4.5 Years + 1 Year Internship",
        eligibility: "10+2 PCB with NEET Qualified",
      },
      {
        name: "D.Pharma (Diploma in Ayurvedic Pharmacy)",
        duration: "2 Years",
        eligibility: "10+2 PCB 80%",
      },
      {
        name: "Ayurvedic Nursing",
        duration: "3.5 Years",
        eligibility: "10+2 PCB 50% (All Streams)",
      },
    ],
  },
  {
    name: "Faculty of Nursing",
    courses: [
      {
        name: "B.Sc. Nursing",
        duration: "4 Years",
        eligibility: "10+2 with PCBE 45%, Age 17-35",
      },
      {
        name: "GNM (General Nursing and Midwifery)",
        duration: "3 Years",
        eligibility: "10+2 Any Stream (English compulsory)",
      },
      {
        name: "ANM (Auxiliary Nurse Midwifery)",
        duration: "2 Years",
        eligibility: "10+2 Any Stream",
      },
      {
        name: "Diploma in OT Technician",
        duration: "2 Years",
        eligibility: "10+2 45% with PCM/PCB",
      },
      {
        name: "Diploma in Optometry",
        duration: "2 Years",
        eligibility: "10+2 45% with PCM/PCB",
      },
      {
        name: "Diploma in Physiotherapy",
        duration: "2 Years",
        eligibility: "10+2 45% with PCM/PCB",
      },
    ],
  },
  {
    name: "Faculty of Pharmacy",
    courses: [
      {
        name: "B.Pharm. (Bachelor of Pharmacy)",
        duration: "4 Years",
        eligibility: "10+2 with 50% in PCM/PCB (As per PCI Norms)",
      },
      {
        name: "D.Pharm. (Diploma in Pharmacy)",
        duration: "2 Years",
        eligibility: "10+2 with 50% in PCM/PCB (As per PCI Norms)",
      },
      {
        name: "MPH (Master of Public Health)",
        duration: "2 Years",
        eligibility: "Graduation with 50%",
      },
    ],
  },
  {
    name: "Faculty of Engineering & Technology",
    courses: [
      {
        name: "B.Tech. (Regular / Evening)",
        duration: "4 Years",
        eligibility: "Passed 10+2 Examination",
      },
      {
        name: "B.Tech. (Lateral Entry)",
        duration: "3 Years",
        eligibility: "10+2 with 50% or Equivalent Science Degree",
      },
      {
        name: "B.Tech. (Agriculture)",
        duration: "4 Years",
        eligibility: "10+2 with 50% or Equivalent Science Degree",
      },
      {
        name: "M.Tech. (Regular)",
        duration: "2 Years",
        eligibility: "B.Tech.",
      },
      {
        name: "M.Tech. (Part-Time)",
        duration: "3 Years",
        eligibility: "B.Tech.",
      },
    ],
  },
  {
    name: "Faculty of Fashion Designing",
    courses: [
      {
        name: "BFD (Bachelor of Fashion Designing)",
        duration: "4 Years",
        eligibility: "10+2 Passed with 45%",
      },
      {
        name: "MFD (Master of Fashion Designing)",
        duration: "2 Years",
        eligibility: "UG with 50%",
      },
    ],
  },
  {
    name: "Faculty of Agriculture",
    courses: [
      {
        name: "Diploma in Agriculture",
        duration: "1 Year",
        eligibility: "10 Pass from Recognized Board",
      },
      {
        name: "B.Sc. (Agriculture)",
        duration: "4 Years",
        eligibility: "As per UGC Norms",
      },
      {
        name: "M.Sc. Agriculture",
        duration: "2 Years",
        eligibility: "B.Sc. Agri. with 50%",
      },
    ],
  },
  {
    name: "Faculty of Science",
    courses: [
      {
        name: "B.Sc. (Hons.)",
        duration: "3 Years",
        eligibility: "As per UGC Norms",
      },
      {
        name: "B.Sc. (Bachelor of Science)",
        duration: "3 Years",
        eligibility: "As per UGC Norms",
      },
      {
        name: "M.Sc. (Master of Science)",
        duration: "2 Years",
        eligibility: "As per UGC Norms",
      },
    ],
  },
  {
    name: "Faculty of Social Science",
    courses: [
      {
        name: "B.A. (Bachelor of Arts)",
        duration: "3 Years",
        eligibility: "10+2 with 50%",
      },
      {
        name: "B.A. (Hons.)",
        duration: "3 Years",
        eligibility: "10+2 with 50%",
      },
      {
        name: "B.A. J.M.C",
        duration: "3 Years",
        eligibility: "10+2 with 50%",
      },
      {
        name: "B.LIS.",
        duration: "3 Years",
        eligibility: "Graduation with Relevant Subjects",
      },
      {
        name: "M.A.",
        duration: "2 Years",
        eligibility: "Graduation with Relevant Subjects",
      },
      {
        name: "M.A. (J.M.C.)",
        duration: "2 Years",
        eligibility: "Bachelor's Degree in Any Stream",
      },
      {
        name: "MSW (Masters of Social Work)",
        duration: "2 Years",
        eligibility: "Graduation with Relevant Subjects",
      },
      {
        name: "M.LIs. (Master of Library Information Science)",
        duration: "1 Year",
        eligibility: "Completed B.Lib / B.Lis",
      },
    ],
  },
  {
    name: "Doctorate of Philosophy",
    courses: [
      {
        name: "Ph.D.",
        duration: "3 Years",
        eligibility: "Postgraduate Degree with 55%",
      },
    ],
  },
];

const MoreCourses = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = facultyData.length;

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => setActiveSlide(api.selectedScrollSnap());
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const sliderValue = useMemo(() => [activeSlide + 1], [activeSlide]);

  return (
    <section
      id="more-courses"
      className="relative py-16 md:py-20 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 md:mb-12 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            More Courses Available
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-text-dark">
            Explore More Courses
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse faculty-wise programs from Ayurveda, Nursing, Engineering,
            Science, Social Science and more.
          </p>
        </motion.div>

        <div className="relative px-0 md:px-8">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {facultyData.map((faculty, idx) => (
                <CarouselItem
                  key={faculty.name}
                  className="md:basis-1/2 xl:basis-1/3"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className="h-full rounded-2xl border border-primary/15 bg-white/85 backdrop-blur-sm p-6 shadow-[0_16px_40px_-22px_rgba(123,17,19,0.35)]"
                  >
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-lg font-bold leading-snug text-text-dark">
                          {faculty.name}
                        </h3>
                        <p className="mt-2 inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                          <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                          {faculty.courses.length} Programs
                        </p>
                      </div>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                        <GraduationCap className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="space-y-3">
                      {faculty.courses.slice(0, 4).map((course) => (
                        <div
                          key={`${faculty.name}-${course.name}`}
                          className="rounded-xl border border-secondary/20 bg-light px-3.5 py-3"
                        >
                          <p className="text-sm font-semibold text-text-dark leading-snug">
                            {course.name}
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock3 className="h-3.5 w-3.5 text-primary" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {faculty.courses.length > 4 && (
                      <p className="mt-4 inline-flex items-center text-xs font-semibold text-primary">
                        <Sparkles className="mr-1.5 h-3.5 w-3.5" />+
                        {faculty.courses.length - 4} more programs in this
                        faculty
                      </p>
                    )}

                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                      Eligibility snapshot: {faculty.courses[0]?.eligibility}
                    </p>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:inline-flex -left-3 bg-white text-primary border-primary/25 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:inline-flex -right-3 bg-white text-primary border-primary/25 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        <div className="mt-8 md:mt-10 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-2">
            <span>Swipe Courses</span>
            <span className="font-semibold text-primary">
              {activeSlide + 1} / {totalSlides}
            </span>
          </div>
          <Slider
            min={1}
            max={totalSlides}
            step={1}
            value={sliderValue}
            onValueChange={(value) => api?.scrollTo((value[0] ?? 1) - 1)}
            aria-label="Faculty course slider"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreCourses;
