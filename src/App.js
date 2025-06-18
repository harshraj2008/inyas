import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

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

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />

      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="section">
        <About />
      </motion.section>

      <motion.section id="highlights" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="section">
        <Highlights />
      </motion.section>

      <motion.section id="speakers" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="section">
        <Speakers />
      </motion.section>

      <motion.section id="registration" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="section">
        <Registration />
      </motion.section>

      <motion.section id="schedule" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionVariants} className="section">
        <Schedule />
      </motion.section>

      <div className="full-width">
        <Footer />
      </div>
    </div>
  );
}

export default App;
