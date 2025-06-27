'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-black shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand">ALTON</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'Features', 'Floor Plans', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-black dark:text-white hover:text-brand transition duration-300"
              >
                {item}
              </Link>
            ))}
            <a 
              href="tel:800NSHAMA" 
              className="text-brand font-medium"
            >
              800 NSHAMA
            </a>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Button (Mobile) */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            
            <button 
              className="text-black dark:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <ul className="space-y-4">
              {['Home', 'Features', 'Floor Plans', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-black dark:text-white hover:text-brand transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="tel:800NSHAMA" 
                  className="block text-brand font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  800 NSHAMA
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

