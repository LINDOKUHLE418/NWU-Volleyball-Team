import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <section id="join" className="bg-slate-950 px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">Join Us</h2>
          <p className="mt-4 text-slate-400">Coming next.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}