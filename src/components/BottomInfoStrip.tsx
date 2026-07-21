import { scrollToLeadForm } from "@/lib/utils";

const BottomInfoStrip = () => (
  <div className="bg-red-600 text-white md:shadow-none">
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white px-1.5 py-1.5 shadow-[0_-3px_10px_rgba(0,0,0,0.12)] md:static md:bg-red-600 md:px-0 md:py-0 md:shadow-none">
      <div className="mx-auto flex max-w-md items-center justify-center gap-2 text-xs font-semibold sm:text-sm md:min-h-14 md:max-w-7xl md:justify-between md:px-6">
        <a
          href="tel:+919554964646"
          className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-yellow-500 px-4 text-sm font-bold text-white transition-colors hover:bg-yellow-400 md:min-h-0 md:flex-none md:bg-transparent md:px-0 md:text-sm md:shadow-none md:hover:bg-transparent md:hover:opacity-90"
        >
          <span className="md:hidden">Call Now</span>
          <span className="hidden md:inline">+91-9554964646</span>
        </a>
        <div className="hidden min-w-0 items-center justify-center gap-2 text-center md:flex">
          <span className="hidden truncate sm:inline">100% Guaranteed Placement</span>
          <span className="hidden rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:px-3 sm:text-[10px] md:inline md:text-[11px]">
            Last date: 5 August 2026
          </span>
        </div>
        <button
          onClick={scrollToLeadForm}
          className="min-h-11 flex-1 whitespace-nowrap rounded-md bg-red-800 px-4 text-sm font-bold text-white transition-colors hover:bg-red-700 md:min-h-0 md:flex-none md:bg-yellow-400 md:px-4 md:py-2 md:text-xs md:text-red-700"
        >
          Apply Now
        </button>
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 border-t border-red-500/60 px-3 pb-16 pt-2 text-center sm:flex-row sm:gap-3 md:py-2">
      <span className="rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:px-3 sm:text-[10px] md:hidden">
        Last date: 5 August 2026
      </span>
      <p className="text-[10px] font-medium sm:text-[11px]">
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
  </div>
);

export default BottomInfoStrip;
