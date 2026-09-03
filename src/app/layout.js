import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mini Sensory Club",
  description:
    "Baby and toddler sensory play classes in Newcastle NSW.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navigation />

        {children}

        <Footer />

      </body>
    </html>
  );
}