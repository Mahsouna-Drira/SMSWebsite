import TvFrame from './components/TvFrame';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Registration from './components/Registration';
import Committees from './components/Committees';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="crt-overlay"></div>
      <Header />
      <Hero />
      <About />
      <Committees />
      <Schedule />
      <Team />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}
