import Canvas from "@/webgl/components/canvas";

import "./styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Powenel :: An independent creative experience studio.",
    template: "%s :: Powenel",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltf" className={geist.className} suppressHydrationWarning>
      <body>
        <Canvas />

        {children}
      </body>
    </html>
  );
}
