import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Perez Art | Fine Art & Murals",
  description: "Transforming spaces through fine art, murals, and creative services. Based in Miami, FL.",
  keywords: "fine art, murals, Miami artist, Jason Perez, contemporary art, commissioned art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
