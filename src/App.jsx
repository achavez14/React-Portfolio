import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
    const [selectedSection, setSelectedSection] = useState('Portfolio');

    const handleNavigationClick = (section) => {
        setSelectedSection(section);
    };

    let outletComponent;
    switch (selectedSection) {
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
            outletComponent = null; // You can set a default component here or leave it as null
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