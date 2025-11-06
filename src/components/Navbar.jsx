import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-sm sm:text-base tracking-tight">Meet Patel</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          <div className="flex items-center gap-3">
            <a href="https://github.com/meetpatelr" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-indigo-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/meetpatelr/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <a href="#contact" className="md:hidden inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-sm">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
