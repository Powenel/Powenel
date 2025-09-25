import "./styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Vazen :: Strict monorepo starter",
    template: "%s :: Vazen",
  },
  description: "A strict monorepo starter I built to kickstart projects, ideas, and experiments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltf" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
