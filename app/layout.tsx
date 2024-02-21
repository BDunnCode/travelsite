import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel Site Project",
  description: "Feeding Wanderlust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
