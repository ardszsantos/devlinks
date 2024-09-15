// ThemeToggler.js
import SwitchLight from '../Switch.svg'; 
import SwitchDark from '../Switch2.svg';
import { useState } from 'react';
import './styles/toggler.css';

const ThemeToggler = () => {
  // Set the initial state to true to start with dark mode
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark';
  };

  return (
    <div className="theme-toggler" onClick={toggleTheme}>
      <img
        src={darkMode ? SwitchDark : SwitchLight}
        alt="Theme Switch"
        className={`switch ${darkMode ? 'dark' : 'light'}`}
      />
    </div>
  );
};


export default ThemeToggler;
