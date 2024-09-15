// ThemeToggler.js
import SwitchLight from '../../public/Switch.svg'; 
import SwitchDark from '../../public/Switch2.svg';
import { useState } from 'react';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark'; // Applying theme globally
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
}

export default ThemeToggler;
