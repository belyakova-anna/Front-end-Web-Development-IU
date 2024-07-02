import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Comic from './pages/Comic';
import './style.css';
// import './index.ts';

const App: React.FC = () => {
  return (
    <Router basename="/Front-end-Web-Development-IU">
      
      <Routes>
        <Route path="/" element={
          <main>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Photos />
            <Contact />
          </main>
        } />
        <Route path="/comic" element={<Comic />} />
      </Routes>
    </Router>
  );
};

export default App;
