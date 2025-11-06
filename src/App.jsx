import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white selection:bg-indigo-500/20 selection:text-indigo-600">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="opacity-70">© {new Date().getFullYear()} Meet Patel — All rights reserved.</p>
          <div className="opacity-70">
            Built with React, Tailwind & Spline
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
