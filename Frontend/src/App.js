import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop'; // ✅ Import BackToTop

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="section"
        >
          <About />
        </motion.section>

        <motion.section
          id="highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="section"
        >
          <Highlights />
        </motion.section>

        <motion.section
          id="speakers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="section"
        >
          <Speakers />
        </motion.section>

        <motion.section
          id="schedule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          className="section"
        >
          <Schedule />
        </motion.section>

        <motion.section
          id="registration"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="section"
        >
          <Registration />
        </motion.section>
      </div>

      <BackToTop /> {/* ✅ Add this above footer */}

      <div className="full-width">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
