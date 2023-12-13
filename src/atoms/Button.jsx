import { useState } from "react";

const Button = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`buttom-component ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Dark Mode' : 'Clear Mode'}
    </button>
  );
};

export default Button;
