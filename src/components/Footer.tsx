const links = {
  About: ["Our Story", "Leadership", "Accreditations", "Campus"],
  Programs: ["BBA AI", "BBA", "MBA", "B.Tech", "Pharmacy"],
  Admissions: ["Apply Now", "Fee Structure", "Scholarships", "FAQs"],
  Contact: ["+91-7064666666", "enquiry@msds.ac.in", "Faridabad, Haryana"],
};

const Footer = () => (
  <footer className="bg-dark text-white pt-14 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-bold text-sm mb-4 text-secondary">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© 2025 Major SD Singh University. All rights reserved.</p>
        <p>Designed with ❤️ for aspiring AI leaders</p>
      </div>
    </div>
  </footer>
);

export default Footer;
