import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Photos from './components/Photos';
import Contact from './components/Contact';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Photos />
        <Contact />
      </main>
    </div>
  );
}

export default App;
