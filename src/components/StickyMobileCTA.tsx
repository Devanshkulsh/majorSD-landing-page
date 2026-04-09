const StickyMobileCTA = () => (
  <div className="fixed bottom-12 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-2 flex gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
    <a
      href="tel:+916387236091"
      className="flex-1 bg-secondary text-white text-center py-3 rounded-lg font-semibold text-sm"
    >
      📞 Call Now
    </a>
    <button
      onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
      className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold text-sm"
    >
      Apply Now
    </button>
  </div>
);

export default StickyMobileCTA;

