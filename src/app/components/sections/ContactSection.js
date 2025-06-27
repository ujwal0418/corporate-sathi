"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaClock, FaCheck } from "react-icons/fa";
import SectionBackground from "../ui/SectionBackground";

export default function ContactSection() {
  const [tab, setTab] = useState("register");
  const [submitted, setSubmitted] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [callForm, setCallForm] = useState({ name: "", email: "", phone: "", date: "", time: "" });

  const handleInput = (e, setter) =>
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    setScheduled(true);
    setTimeout(() => setScheduled(false), 4000);
  };

  const fade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section id="contact">
      <SectionBackground position="bottom" />
      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-20 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <h2 className="section-title text-center mb-8 w-full">Get in Touch<div className="section-title-underline" /></h2>

          {/* Tabs */}
          <div className="flex justify-center my-8 border-b border-white/10">
            {["register", "schedule"].map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`py-3 px-6 text-sm font-medium ${
                  tab === key ? "text-white border-b-2 border-brand" : "text-gray-400 hover:text-white"
                }`}
              >
                {key === "register" ? "Register Interest" : "Schedule a Call"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {tab === "register" && (
              <motion.div key="register" variants={fade} initial="hidden" animate="visible" exit="exit">
                {submitted ? (
                  <div className="text-center bg-green-700/60 p-6 rounded-xl text-white">
                    <FaCheck size={32} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Thank you! We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl mx-auto">
                    {["name", "email", "phone"].map((field) => (
                      <div key={field}>
                        <label className="block mb-1 capitalize">{field} *</label>
                        <input
                          name={field}
                          value={form[field]}
                          onChange={(e) => handleInput(e, setForm)}
                          required
                          className="form-input"
                          placeholder={`Your ${field}`}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block mb-1">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={(e) => handleInput(e, setForm)}
                        className="form-input"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>
                    <button type="submit" className="btn-primary">Submit</button>
                  </form>
                )}
              </motion.div>
            )}

            {tab === "schedule" && (
              <motion.div key="schedule" variants={fade} initial="hidden" animate="visible" exit="exit">
                {scheduled ? (
                  <div className="text-center bg-green-700/60 p-6 rounded-xl text-white">
                    <FaCheck size={32} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Call scheduled successfully!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSchedule} className="grid gap-6 max-w-2xl mx-auto">
                    {["name", "email", "phone"].map((field) => (
                      <div key={field}>
                        <label className="block mb-1 capitalize">{field} *</label>
                        <input
                          name={field}
                          value={callForm[field]}
                          onChange={(e) => handleInput(e, setCallForm)}
                          required
                          className="form-input"
                          placeholder={`Your ${field}`}
                        />
                      </div>
                    ))}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={callForm.date}
                          onChange={(e) => handleInput(e, setCallForm)}
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Preferred Time *</label>
                        <input
                          type="time"
                          name="time"
                          value={callForm.time}
                          onChange={(e) => handleInput(e, setCallForm)}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn-primary">Schedule Call</button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
