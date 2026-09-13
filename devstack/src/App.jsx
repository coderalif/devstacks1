import { useState } from "react";
import TechnologyCard from "./components/TechnologyCard.jsx";
import YourStack from "./components/YourStack.jsx";
import technologies from "./data/technologies.json";

function App() {
  const [stack, setStack] = useState([]);

  const addTechnology = (technology) => {
    if (!stack.some((item) => item.id === technology.id)) {
      setStack((currentStack) => [...currentStack, technology]);
    }
  };

  const removeTechnology = (technologyId) => {
    setStack((currentStack) => currentStack.filter((technology) => technology.id !== technologyId));
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-sm font-bold text-slate-950">
            <span className="brand-mark">DS</span>
            <span>Dev<span className="text-pink-500">Stack</span></span>
          </a>
          <div className="hidden items-center gap-7 text-[11px] text-slate-600 md:flex">
            <a className="font-semibold text-pink-500" href="#top">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button className="hidden text-slate-600 sm:block">Sign In</button>
            <button className="rounded-full bg-pink-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-pink-600">Sign Up</button>
          </div>
        </div>
      </nav>

      <header id="top" className="hero-section">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1fr_0.8fr] md:py-20 lg:px-8">
          <div>
            <h1 className="hero-title">Build Your Ideal<br /><span>Development Stack</span></h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#technologies" className="rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:brightness-105">Explore Technologies</a>
              <a href="#about" className="rounded-md border border-slate-200 px-6 py-3 text-xs font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-500">Learn More</a>
            </div>
          </div>
          <div className="hero-art-wrap">
            <img src="/assets/banner-stack.png" alt="Neon layered development stack illustration" className="hero-art" />
          </div>
        </div>
      </header>

      <main id="technologies" className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-8">
        <section>
          <div className="mb-7">
            <h2 className="section-title">Explore the <span>Technologies</span></h2>
            <p className="mt-1 text-xs text-slate-500">Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="technology-layout">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  tech={technology}
                  onAdd={addTechnology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                />
              ))}
            </div>
            <YourStack
              stack={stack}
              onRemove={removeTechnology}
              onRemoveAll={() => setStack([])}
            />
          </div>
        </section>
      </main>

      <footer id="about" className="mt-8 border-t border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950"><span className="brand-mark">DS</span> Dev<span className="text-pink-500">Stack</span></div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-500">Curated tools, technologies, and resources for developers building modern software.</p>
            <div id="contact" className="mt-5 flex gap-4 text-[11px] font-medium text-slate-600"><a href="#contact">GitHub</a><a href="#contact">Twitter</a><a href="#contact">LinkedIn</a></div>
          </div>
          <div><h3 className="footer-heading">Product</h3><a href="#top">Home</a><a href="#technologies">Technologies</a><a id="projects" href="#projects">Projects</a></div>
          <div><h3 className="footer-heading">Company</h3><a href="#about">About</a><a href="#contact">Contact</a><a href="#about">Careers</a></div>
          <div><h3 className="footer-heading">Legal</h3><a href="#about">Privacy Policy</a><a href="#about">Terms of Service</a></div>
        </div>
        <div className="border-t border-slate-100 px-6 py-5 text-[10px] text-slate-400 sm:px-8"><div className="mx-auto flex max-w-7xl justify-between"><span>© 2026 DevStack. All rights reserved.</span><span>Privacy &nbsp;&nbsp; Terms</span></div></div>
      </footer>
    </div>
  );
}

export default App;
