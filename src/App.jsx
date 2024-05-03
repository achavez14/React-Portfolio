import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
    const [selectedSection, setSelectedSection] = useState('About Me');

    const handleNavigationClick = (section) => {
        setSelectedSection(section);
    };

    let outletComponent;
    switch (selectedSection) {
        case 'About Me':
            outletComponent = <AboutMe />;
            break;
        case 'Portfolio':
            outletComponent = <Portfolio />;
            break;
        case 'Contact':
            outletComponent = <Contact />;
            break;
        case 'Resume':
            outletComponent = <Resume />;
            break;
        default:
            outletComponent = <AboutMe />;
    }

    return (
        <div>
            <Header />
            <Navigation selectedSection={selectedSection} handleNavigationClick={handleNavigationClick} />
            {outletComponent}
            <Footer />
        </div>
    );
};

export default App;
