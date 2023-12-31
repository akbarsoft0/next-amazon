import type { Metadata } from "next";
import "@styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "@components/layout/Header";
import MobHeader from "@components/layout/MobHeader";
import BottomHeader from "@components/BottomHeader";
import Footer from "@components/layout/Footer";
import { Providers } from "@providers/Provider";

export const metadata: Metadata = {
  title: "Next Amazon",
  description: "Amazon Clone Generated by Next.js",
  authors: [
    {
      name: "Amazon",
      url: "https://www.linkedin.com/in/mohammad-akbar63/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont bg-gray-300">
        <Providers>
          <Header />
          <MobHeader />
          <BottomHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
