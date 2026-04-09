import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import LeadForm from "./LeadForm";

const contactItems = [
  {
    icon: "📍",
    label: "Visit campus",
    content: "Major SD Singh University, Kanpur Road, Farrukhabad, Uttar Pradesh",
    href: "https://maps.google.com/?q=Major+SD+Singh+University",
  },
  {
    icon: "📞",
    label: "Call admissions",
    content: "+91-6387236091",
    href: "tel:+916387236091",
  },
  {
    icon: "📧",
    label: "Email admissions",
    content: "enquiry@msds.ac.in",
    href: "mailto:enquiry@msds.ac.in",
  },
  {
    icon: "🌐",
    label: "Visit website",
    content: "www.msds.ac.in",
    href: "https://www.msds.ac.in",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/majorsdsuniversity" },
  { label: "Instagram", href: "https://www.instagram.com/msds.ac.in/" },
];

const ContactSection = () => (
  <section
    id="contact"
    className="relative py-16 md:py-20 bg-white overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-secondary/15 blur-[120px] rounded-full" />
    </div>

    <div className="container mx-auto px-4">
      <SectionHeading
        tag="Reach Us"
        title="Contact Major SD Singh University"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/30 bg-white/80 p-4 shadow-xl backdrop-blur-xl transition-all hover:border-primary/20 hover:shadow-md"
                aria-label={item.label}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 text-xl transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </span>
                <span className="flex flex-col pt-0.5">
                  <span className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-text-dark">
                    {item.content}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-primary shadow-sm backdrop-blur-xl transition-all hover:bg-primary hover:text-white hover:shadow-md"
              >
                {s.label}
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <div className="pt-2">
            <LeadForm compact />
          </div>
        </motion.div>

        {/* RIGHT - MAP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[350px] md:h-full min-h-[350px] group"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/70 via-secondary/70 to-primary/70 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

          {/* Map */}
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.5651448308777!2d79.62089617530863!3d27.295496276421098!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bcd26cffa6b%3A0xc3da5aff5c71e11a!2sMajor%20SD%20Singh%20University!5e0!3m2!1sen!2sin!4v1775681037221!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="MSDS University Location"
            />
          </div>

          {/* Floating Badge */}
          <a
            href="https://maps.google.com/?q=Major+SD+Singh+University"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-text-dark shadow-md backdrop-blur-md transition-colors hover:text-primary"
          >
            📍 Visit Campus
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
