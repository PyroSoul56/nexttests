import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Import and configure the JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  // Specify the character subsets to include (Latin characters)
  subsets: ["latin"], 
  // Define the available font weights
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  // Set a CSS custom property for the font
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Tomas Quevedo\'s portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
      <PageTransition>
          {children}
      </PageTransition>
      </body>
    </html>
  );
}

