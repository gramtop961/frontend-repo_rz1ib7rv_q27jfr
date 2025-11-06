import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something extraordinary</h2>
          <p className="text-sm text-black/60 dark:text-white/60 mt-2">Tell me about your vision and timeline. I’ll reply within 24–48 hours.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          <input name="name" required placeholder="Your name" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-indigo-500" />
          <input name="email" type="email" required placeholder="Email address" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-indigo-500" />
          <textarea name="message" required placeholder="Project details" rows="5" className="sm:col-span-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-indigo-500" />
          <div className="sm:col-span-2 flex items-center justify-between">
            <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-95 transition-opacity">Send message</button>
            <span className="text-sm text-black/60 dark:text-white/60">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
