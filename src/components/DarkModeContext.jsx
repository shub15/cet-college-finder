import React, { createContext, useState, useContext } from 'react';

// Create context
export const DarkModeContext = createContext();

// Context provider
export const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const setDarkMode = (value) => {
        setDark(value);
    };

    return (
        <DarkModeContext.Provider value={{ dark, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Custom hook for easier access to the context
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export default DarkModeContext;
