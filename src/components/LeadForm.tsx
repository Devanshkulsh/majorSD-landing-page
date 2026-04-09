import { type RefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LeadFormProps {
  compact?: boolean;
}

const LeadForm = ({ compact = false }: LeadFormProps) => {
  const courseOptions = [
    "BBA in AI & Digital Business",
    "BCA in AI & Data Science",
    "MBA in AI & Digital Transformation",
    "MCA in Data Science",
  ];
  const streamOptions = ["Science", "Commerce", "Arts", "Other"];
  const modeOptions = ["Full-Time", "Distance"];
  const [form, setForm] = useState({
    name: "", phone: "", email: "", course: "", city: "", stream: "", mode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"course" | "stream" | "mode" | null>(null);
  const courseDropdownRef = useRef<HTMLDivElement | null>(null);
  const streamDropdownRef = useRef<HTMLDivElement | null>(null);
  const modeDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDropdown =
        courseDropdownRef.current?.contains(target) ||
        streamDropdownRef.current?.contains(target) ||
        modeDropdownRef.current?.contains(target);

      if (!isInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderCustomDropdown = ({
    dropdownKey,
    value,
    placeholder,
    options,
    onSelect,
    dropdownRef,
  }: {
    dropdownKey: "course" | "stream" | "mode";
    value: string;
    placeholder: string;
    options: string[];
    onSelect: (selectedValue: string) => void;
    dropdownRef: RefObject<HTMLDivElement | null>;
  }) => {
    const isOpen = openDropdown === dropdownKey;

    return (
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setOpenDropdown((prev) => (prev === dropdownKey ? null : dropdownKey))}
          className={`flex w-full items-center justify-between rounded-xl border bg-gradient-to-b from-white to-primary/5 px-4 py-3 text-left text-sm font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/40 ${!value ? "border-gray-200 text-gray-400" : "border-primary/30 text-text-dark"} ${isOpen ? "ring-2 ring-primary/20 border-primary" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">{value || placeholder}</span>
          <span className={`ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all ${isOpen ? "bg-primary text-white rotate-180" : ""}`}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden="true">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-primary/15 bg-white shadow-2xl">
            <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(option);
                      setOpenDropdown(null);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-primary/10 hover:text-primary ${value === option ? "bg-primary/10 font-semibold text-primary" : "text-text-dark"}`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter valid 10-digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter valid email";
    if (compact && !form.course.trim()) e.course = "Course is required";
    if (!compact) {
      if (!form.city.trim()) e.city = "City is required";
      if (!form.stream) e.stream = "Select your stream";
      if (!form.mode) e.mode = "Select mode";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";
  const errorClass = "text-red-500 text-xs mt-1";

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 text-center shadow-xl border-t-4 border-primary"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-text-dark mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Our counsellor will contact you soon!</p>
      </motion.div>
    );
  }

  return (
    <div id="lead-form" className="bg-white rounded-2xl shadow-xl border-t-4 border-primary p-6 md:p-8">
      {!compact && (
        <>
          <h3 className="text-xl font-bold text-text-dark mb-1">Get Free Counselling</h3>
          <p className="text-sm text-muted-foreground mb-5">Limited Seats Available — Enroll Now</p>
        </>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <div className="flex">
            <span className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg px-3 py-3 text-sm text-muted-foreground">+91</span>
            <input type="tel" placeholder="Mobile Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} className={`${inputClass} rounded-l-none`} />
          </div>
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        {compact && (
          <div>
            {renderCustomDropdown({
              dropdownKey: "course",
              value: form.course,
              placeholder: "Course Interested In",
              options: courseOptions,
              dropdownRef: courseDropdownRef,
              onSelect: (course) => setForm({ ...form, course }),
            })}
            {errors.course && <p className={errorClass}>{errors.course}</p>}
          </div>
        )}
        {!compact && (
          <>
            <div>
              <input type="text" placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className={inputClass} />
              {errors.city && <p className={errorClass}>{errors.city}</p>}
            </div>
            <div>
              {renderCustomDropdown({
                dropdownKey: "stream",
                value: form.stream,
                placeholder: "12th Stream",
                options: streamOptions,
                dropdownRef: streamDropdownRef,
                onSelect: (stream) => setForm({ ...form, stream }),
              })}
              {errors.stream && <p className={errorClass}>{errors.stream}</p>}
            </div>
            <div>
              {renderCustomDropdown({
                dropdownKey: "mode",
                value: form.mode,
                placeholder: "Preferred Mode of Study",
                options: modeOptions,
                dropdownRef: modeDropdownRef,
                onSelect: (mode) => setForm({ ...form, mode }),
              })}
              {errors.mode && <p className={errorClass}>{errors.mode}</p>}
            </div>
          </>
        )}
        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-lg transition-all text-sm">
          {compact ? "Get Callback →" : "Get Free Counselling →"}
        </button>
        <p className="text-xs text-center text-muted-foreground">🔒 Your data is safe and secure with us</p>
      </form>
    </div>
  );
};

export default LeadForm;
