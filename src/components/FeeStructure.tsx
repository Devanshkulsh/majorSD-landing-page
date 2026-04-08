import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const FeeStructure = () => (
  <section id="fees" className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Admission" title="Affordable Fee Structure" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Fee Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-bold text-lg text-text-dark mb-4">💰 Fee Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-muted-foreground">Annual Fee</span>
              <span className="font-bold text-text-dark">₹85,000/year</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-muted-foreground">Total Program (3 Years)</span>
              <span className="font-bold text-text-dark">₹2,55,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-muted-foreground">EMI Option</span>
              <span className="font-bold text-text-dark">₹7,000/month</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-muted-foreground">Registration Fee</span>
              <span className="font-bold text-text-dark">₹2,000 (one-time)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Scholarship</span>
              <span className="font-bold text-secondary">Up to 50%</span>
            </div>
          </div>
        </motion.div>

        {/* Scholarship Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/30 rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-bold text-lg text-text-dark mb-4">🏆 Scholarships</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-text-dark">Merit Scholarship</p>
              <p className="text-muted-foreground">Up to 50% fee waiver for 12th &gt;85%</p>
            </div>
            <div>
              <p className="font-semibold text-text-dark">Sports Quota</p>
              <p className="text-muted-foreground">Special fee reduction for state-level athletes</p>
            </div>
            <div>
              <p className="font-semibold text-text-dark">Girl Child Empowerment</p>
              <p className="text-muted-foreground">25% additional waiver for female students</p>
            </div>
            <div>
              <p className="font-semibold text-text-dark">Early Bird Discount</p>
              <p className="text-muted-foreground">10% discount for early applications</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"
        >
          Check Your Scholarship Eligibility →
        </button>
      </div>
    </div>
  </section>
);

export default FeeStructure;
