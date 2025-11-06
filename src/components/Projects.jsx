import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Pebble Health — Web Experience',
    description: 'Led frontend experience and performance tuning for a healthcare platform.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: 'https://pebble.health',
  },
  {
    title: 'Design Systems Playground',
    description: 'Composable UI kit with tokens, motion primitives, and accessibility baked in.',
    tags: ['Radix', 'Framer Motion', 'Storybook'],
    link: '#',
  },
  {
    title: 'AI Workflow Studio',
    description: 'Interactive canvas to chain tools and visualize AI workflows.',
    tags: ['FastAPI', 'OpenAI', 'Next.js'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected work</h2>
            <p className="text-sm text-black/60 dark:text-white/60 mt-2">A snapshot of projects focused on craft, clarity, and speed.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold tracking-tight group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-black/70 dark:text-white/70">{p.description}</p>
                </div>
                <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-1">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
