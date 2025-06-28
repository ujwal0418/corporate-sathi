'use client';
import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always use dark theme
  const theme = 'dark';

  useEffect(() => {
    // Always add dark class to document
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Keep the toggleTheme function to avoid breaking existing code,
  // but it won't actually change the theme
  const toggleTheme = () => {
    // No-op function - theme will always stay dark
    console.log('Theme toggle attempted, but site is locked to dark theme');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
