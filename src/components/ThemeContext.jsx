import React, { createContext, useState } from 'react';

// Define famous light and dark themes
const themes = {
  defaultLight: {
    background: 'bg-gray-50',
    text: 'text-gray-900',
    button: 'bg-blue-900 hover:bg-blue-800 text-white',
    notification: 'bg-blue-100 text-blue-700',
  },
  defaultDark: {
    background: 'bg-slate-950',
    text: 'text-white',
    button: 'bg-blue-700 hover:bg-blue-600 text-white',
    notification: 'bg-slate-800 text-blue-300',
  },
  solarizedLight: {
    background: 'bg-solarized-light-bg',
    text: 'text-solarized-light-text',
    button: 'bg-solarized-light-button hover:bg-solarized-light-hover text-white',
    notification: 'bg-solarized-light-notification text-solarized-light-notif-text',
  },
  solarizedDark: {
    background: 'bg-solarized-dark-bg',
    text: 'text-solarized-dark-text',
    button: 'bg-solarized-dark-button hover:bg-solarized-dark-hover text-white',
    notification: 'bg-solarized-dark-notification text-solarized-dark-notif-text',
  },
  // Add more themes here
};

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.defaultLight);

  const toggleTheme = (newTheme) => {
    setTheme(themes[newTheme] || themes.defaultLight);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
