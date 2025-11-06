import React from 'react';
import { Button } from 'react-bootstrap';
// Import the necessary icons (Sun for light, Moon for dark)
import { MoonFill, SunFill } from 'react-bootstrap-icons'; 
import { useTheme } from '../theme/ThemeContext'; 

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    // Determine which icon and color to use based on the current theme
    const Icon = theme === 'dark' ? SunFill : MoonFill; // Show Sun when dark, Moon when light
    const iconColor = theme === 'dark' ? '#ffc107' : '#343a40'; // Yellow for Sun, dark grey for Moon

    return (
        <Button
            variant="link" // Use link variant for a transparent button style
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            className="p-0 border-0 ms-2" // Adjust spacing and remove padding/border
            style={{ 
                lineHeight: 1, 
                color: iconColor 
            }}
        >
            <Icon size={24} /> {/*  */}
        </Button>
    );
}