import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import LeadForm from "./LeadForm";

const ContactSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading tag="Reach Us" title="Contact Major SD Singh University" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-3"><span className="text-xl">📍</span><span>Major SD Singh University, Fatehgarh Road, Faridabad, Haryana</span></p>
            <p className="flex items-start gap-3"><span className="text-xl">📞</span><a href="tel:+917064666666" className="hover:text-primary">+91-7064666666</a></p>
            <p className="flex items-start gap-3"><span className="text-xl">📧</span><a href="mailto:enquiry@msds.ac.in" className="hover:text-primary">enquiry@msds.ac.in</a></p>
            <p className="flex items-start gap-3"><span className="text-xl">🌐</span><a href="https://www.msds.ac.in" target="_blank" rel="noreferrer" className="hover:text-primary">www.msds.ac.in</a></p>
          </div>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-primary hover:text-white transition-colors">{s}</a>
            ))}
          </div>
          <LeadForm compact />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden h-[350px] md:h-full min-h-[350px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.123!2d77.312!3d28.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMajor+SD+Singh+University!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="MSDS University Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
