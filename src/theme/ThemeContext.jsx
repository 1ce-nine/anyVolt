import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Context object
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // State management: Load theme from local storage or default to 'dark'
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    // Effect to update the body class and local storage whenever the theme changes
    useEffect(() => {
        const body = document.body;
        
        // Remove old theme class and add the new one
        body.classList.remove('theme-light', 'theme-dark');
        body.classList.add(`theme-${theme}`);
        
        // Save preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle between themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};