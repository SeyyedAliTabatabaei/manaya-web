import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "مانایا | حسابداری شخصی ",
    template: "%s | مانایا",
  },
  description: "لندینگ مدرن با Next.js، TypeScript و Tailwind CSS",
  metadataBase: new URL("https://manaya-acc.ir"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className={`${vazirmatn.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
