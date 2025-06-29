import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Corporate-साथी - Premium Event Management Services",
  description:
    "India's leading corporate event management company with in-house production and pan-India reach. Trusted by top brands for exceptional event experiences.",
  keywords: [
    "event management",
    "corporate events",
    "event planning",
    "India",
    "brand activation",
    "conferences",
    "product launches",
  ],
  authors: [{ name: "Corporate-साथी Team" }],
  creator: "Corporate-साथी",
  publisher: "Corporate-साथी",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.corporatesathi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corporate-साथी - Premium Event Management Services",
    description:
      "India's leading corporate event management company with in-house production and pan-India reach.",
    url: "https://www.corporatesathi.com",
    siteName: "Corporate-साथी",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate-साथी - Premium Event Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate-साथी - Premium Event Management Services",
    description:
      "India's leading corporate event management company with in-house production and pan-India reach.",
    images: ["/twitter-image.jpg"],
    creator: "@corporatesaathi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorantGaramond.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
