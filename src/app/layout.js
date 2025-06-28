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
  title: 'Corporate-साथी - Premium Event Management Services',
  description: 'India\'s leading corporate event management company with in-house production and pan-India reach. Trusted by top brands for exceptional event experiences.',
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
