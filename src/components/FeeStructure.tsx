import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const FeeStructure = () => (
  <section id="fees" className="relative py-16 md:py-20 bg-white overflow-hidden">
    
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-secondary/20 blur-3xl rounded-full" />
    </div>

    <div className="container mx-auto px-4">
      <SectionHeading tag="Admission" title="Affordable Fee Structure" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Fee Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-50" />

          <div className="relative">
            <h3 className="font-bold text-lg text-text-dark mb-5 flex items-center gap-2">
              💰 Fee Details
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Annual Fee</span>
                <span className="font-bold text-text-dark text-base">₹85,000/year</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Total Program</span>
                <span className="font-bold text-text-dark text-base">₹2,55,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">EMI Option</span>
                <span className="font-bold text-primary text-base">₹7,000/month</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Registration Fee</span>
                <span className="font-bold text-text-dark">₹2,000</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Scholarship</span>
                <span className="font-bold text-secondary text-base">Up to 50%</span>
              </div>
            </div>

            {/* Highlight Tag */}
            <div className="mt-6 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold">
              Most Affordable AI Program 🎯
            </div>
          </div>
        </motion.div>

        {/* Scholarship Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-secondary/30 to-primary/20 rounded-2xl blur opacity-50" />

          <div className="relative">
            <h3 className="font-bold text-lg text-text-dark mb-5 flex items-center gap-2">
              🏆 Scholarships
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-3 rounded-lg bg-white/60 backdrop-blur border border-gray-100">
                <p className="font-semibold text-text-dark">Merit Scholarship</p>
                <p className="text-muted-foreground">Up to 50% for 12th &gt;85%</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 backdrop-blur border border-gray-100">
                <p className="font-semibold text-text-dark">Sports Quota</p>
                <p className="text-muted-foreground">For state-level athletes</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 backdrop-blur border border-gray-100">
                <p className="font-semibold text-text-dark">Girl Child</p>
                <p className="text-muted-foreground">25% additional waiver</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 backdrop-blur border border-gray-100">
                <p className="font-semibold text-text-dark">Early Bird</p>
                <p className="text-muted-foreground">10% discount</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() =>
            document
              .getElementById("lead-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="relative bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
        >
          Check Your Scholarship Eligibility →
        </button>
      </div>
    </div>
  </section>
);

export default FeeStructure;