import React from 'react';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import './styles/styles.css'; // Import CSS styles

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;