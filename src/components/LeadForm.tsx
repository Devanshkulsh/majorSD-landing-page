import { useState } from "react";
import { motion } from "framer-motion";

interface LeadFormProps {
  compact?: boolean;
}

const LeadForm = ({ compact = false }: LeadFormProps) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", stream: "", mode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter valid 10-digit number";
    if (!compact) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter valid email";
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
        {!compact && (
          <>
            <div>
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
            <div>
              <input type="text" placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className={inputClass} />
              {errors.city && <p className={errorClass}>{errors.city}</p>}
            </div>
            <div>
              <select value={form.stream} onChange={e => setForm({ ...form, stream: e.target.value })} className={`${inputClass} ${!form.stream ? "text-gray-400" : ""}`}>
                <option value="">12th Stream</option>
                <option>Science</option>
                <option>Commerce</option>
                <option>Arts</option>
                <option>Other</option>
              </select>
              {errors.stream && <p className={errorClass}>{errors.stream}</p>}
            </div>
            <div>
              <select value={form.mode} onChange={e => setForm({ ...form, mode: e.target.value })} className={`${inputClass} ${!form.mode ? "text-gray-400" : ""}`}>
                <option value="">Preferred Mode of Study</option>
                <option>Full-Time</option>
                <option>Distance</option>
              </select>
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
