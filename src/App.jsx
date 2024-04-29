import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Story from './components/Story';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useContext } from 'react';
import { ColorContext } from './context/ColorContext';
import { useRef } from 'react';

function App() {
  const mode = useContext(ColorContext);
  const myref = useRef(null);
  const [scrolling, setscrolling] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      setscrolling(window.scrollY);
    });
  }, []);

  return (
    <div
      ref={myref}
      className={`pb-10 select-none ${mode.clr ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      <Header value={scrolling} />
      <Hero />
      <Skills />
      <Story />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
