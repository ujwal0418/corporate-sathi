import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';
import { ThemeProvider } from './context/ThemeContext';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: 'ALTON by NSHAMA - Town Square Dubai',
  description: 'Modern 1, 2 & 3 Bedroom Apartments with 50/50 Payment Plan | Handover May 2028',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorantGaramond.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
