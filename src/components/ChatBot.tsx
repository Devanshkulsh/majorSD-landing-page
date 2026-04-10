import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToLeadForm } from "@/lib/utils";

const steps = [
  {
    question: "Hi 👋 What are you interested in?",
    options: [
      "BBA in AI & Digital Business",
      "BCA in AI & Data Science",
      "MBA in AI & Digital Transformation",
      "MCA in Data Science",
    ],
  },
  {
    question: "Great choice! What would you like to know?",
    options: ["Eligibility", "Placements", "Course Details"],
  },
  {
    question: "Awesome! What would you like to do next?",
    options: ["Apply Now", "Talk to Counselor"],
  },
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [chat, setChat] = useState<any[]>([
    { type: "bot", text: steps[0].question },
  ]);
  const [typing, setTyping] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const chatEndRef = useRef<any>(null);

  useEffect(() => {
    let showTimer: any;
    let hideTimer: any;

    const loop = () => {
      showTimer = setTimeout(() => {
        setShowPrompt(true);

        hideTimer = setTimeout(() => {
          setShowPrompt(false);
          loop();
        }, 2500);
      }, 4000);
    };

    loop();

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 640) return;

    let interval: any;

    interval = setInterval(() => {
      setSlideOut(true);

      setTimeout(() => {
        setSlideOut(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleClick = (option: string) => {
    const updated = [...chat, { type: "user", text: option }];
    setChat(updated);

    if (option === "Apply Now") {
      scrollToLeadForm();
    }

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      if (step + 1 < steps.length) {
        setChat((prev) => [
          ...prev,
          { type: "bot", text: steps[step + 1].question },
        ]);
        setStep(step + 1);
      } else {
        setChat((prev) => [
          ...prev,
          { type: "bot", text: "Let’s get you connected 🚀" },
        ]);
        setStep(step + 1);
      }
    }, 800);
  };

  const whatsappLink = () => {
    const msg = chat
      .map((c) =>
        c.type === "user" ? `User: ${c.text}` : `Bot: ${c.text}`
      )
      .join("\n");

    return `https://wa.me/916387236091?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <div
        className={`
          fixed z-50 flex flex-col items-end gap-2 transition-all duration-700

          top-[42%] -translate-y-1/2 right-0

          ${slideOut ? "translate-x-[70%]" : "translate-x-0"}

          sm:right-6 sm:bottom-6 sm:top-auto sm:translate-y-0 sm:translate-x-0
        `}
      >

        {/* ✅ FIXED CONDITION */}
        <AnimatePresence>
          {showPrompt && !open && !slideOut && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black text-xs px-3 py-2 rounded-xl shadow-lg"
            >
              Talk to me 👋
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setOpen(!open);
            setShowPrompt(false);
          }}
          className="w-14 h-14 rounded-l-full sm:rounded-full bg-gradient-to-br from-[#E0A817] to-yellow-500 text-white shadow-xl flex items-center justify-center hover:scale-110 transition overflow-hidden"
        >
          <img
            src="/animated/robot.gif"
            alt="AI Chatbot"
            className="w-16 h-16 object-contain"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="
              fixed right-4 sm:right-6 z-50 w-[340px] max-w-[92vw] h-[480px]

              top-[48%] -translate-y-1/2

              sm:bottom-24 sm:top-auto sm:translate-y-0

              bg-white/80 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden
            "
          >
            <div className="bg-gradient-to-r from-[#E0A817] to-yellow-500 text-white px-4 py-3 font-semibold flex justify-between items-center">
              AI Assistant 🤖
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.type === "bot"
                      ? "bg-white text-black"
                      : "bg-[#E0A817] text-white ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {typing && (
                <div className="text-sm text-gray-500">Typing...</div>
              )}

              <div ref={chatEndRef} />
            </div>

            {step < steps.length && !typing && (
              <div className="p-3 border-t flex flex-wrap gap-2">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleClick(opt)}
                    className="text-xs bg-[#E0A817]/10 text-[#E0A817] px-3 py-2 rounded-full hover:bg-[#E0A817] hover:text-white transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {step >= steps.length && (
              <div className="p-3 border-t flex gap-2">
                <a
                  href="tel:+916387236091"
                  className="flex-1 text-center bg-[#E0A817] text-white py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  Call 📞
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-green-500 text-white py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  WhatsApp 💬
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
