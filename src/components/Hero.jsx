import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-black/5 dark:ring-white/10">Interactive • Modern • Playful</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Premium portfolio with extraordinary animations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-xl">
            I craft delightful, high-performance web experiences blending creative code, motion, and 3D.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform">View work</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-95 transition-opacity">Get in touch</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
    </section>
  );
}
