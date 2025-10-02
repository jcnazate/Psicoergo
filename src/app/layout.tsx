import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyecto",
  description: "Next + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
