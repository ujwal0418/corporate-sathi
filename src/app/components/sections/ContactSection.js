"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaSpinner } from "react-icons/fa";
import SectionBackground from "../ui/SectionBackground";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInput = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
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

          <AnimatePresence mode="wait">
            <motion.div key="register" variants={fade} initial="hidden" animate="visible" exit="exit">
              {submitted ? (
                <div className="max-w-2xl mx-auto section-card border border-brand p-8 rounded-xl text-center mt-4">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck size={24} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-brand">Thank You!</h3>
                  <p className="text-lg mb-4">Your message has been sent successfully.</p>
                  <p className="text-sm opacity-80">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl mx-auto section-card p-8 rounded-xl mt-8">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 p-4 rounded-lg text-center mt-4">
                      <p className="text-red-400">{error}</p>
                    </div>
                  )}
                  
                  {["name", "email", "phone"].map((field) => (
                    <div key={field}>
                      <label className="block mb-1 capitalize font-medium">{field} *</label>
                      <input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={handleInput}
                        required
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition"
                        placeholder={`Your ${field}`}
                        disabled={loading}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block mb-1 font-medium">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={form.message}
                      onChange={handleInput}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition"
                      placeholder="Tell us what you're looking for..."
                      disabled={loading}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-brand hover:bg-brand-hover text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mt-2 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" /> Sending...
                      </>
                    ) : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
