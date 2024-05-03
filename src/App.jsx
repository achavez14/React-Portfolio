import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
    const [selectedSection, setSelectedSection] = useState('Project');

    const handleNavigationClick = (section) => {
        setSelectedSection(section);
    };

    let outletComponent;
    switch (selectedSection) {
        case 'Project':
            outletComponent = <Project />;
            break;
        default:
            outletComponent = null;
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
