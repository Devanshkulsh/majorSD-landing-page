import { scrollToLeadForm } from "@/lib/utils";

const BottomInfoStrip = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 text-white shadow-[0_-3px_10px_rgba(0,0,0,0.15)] md:static md:shadow-none">
    <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-2 px-3 py-2 text-[11px] font-semibold sm:text-xs md:min-h-14 md:px-6 md:text-sm">
      <a href="tel:+916387236091" className="whitespace-nowrap hover:opacity-90">
        +91-6387236091
      </a>
      <div className="flex min-w-0 items-center justify-center gap-2 text-center">
        <span className="hidden truncate sm:inline">100% Guaranteed Placement</span>
        <span className="rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:px-3 sm:text-[10px] md:text-[11px]">
          Last date: 20 June
        </span>
      </div>
      <button
        onClick={scrollToLeadForm}
        className="whitespace-nowrap rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-bold text-red-700 transition-colors hover:bg-yellow-300 sm:text-xs md:px-4 md:py-2"
      >
        Apply now
      </button>
    </div>
    <p className="border-t border-red-500/60 px-3 py-1 text-center text-[10px] font-medium sm:text-[11px]">
      Developed &amp; maintained by{" "}
      <a
        href="https://ntechzy.in"
        target="_blank"
        rel="noreferrer"
        className="font-bold hover:opacity-90"
      >
        Ntechzy
      </a>
    </p>
  </div>
);

export default BottomInfoStrip;
