import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Work from './components/Works';
import Experience from './components/Experience';
import Contacts from './components/Contacts';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutMe />;
      case 'experience':
        return <Experience />;
      case 'work':
        return <Work />;
      case 'contacts':
        return <Contacts />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Navigation setCurrentSection={setCurrentSection} />
      {renderSection()}
    </div>
  );

}

export default App;
