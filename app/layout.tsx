import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 import { ThemeProvider } from "next-themes";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "مانایا | حسابداری شخصی ",
    template: "%s | مانایا",
  },
  description: "لندینگ مدرن با Next.js، TypeScript و Tailwind CSS",
  metadataBase: new URL("https://manaya-acc.ir"),
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
    { media: "(prefers-color-scheme: light)", color: "#F2F0F5" },
  ],
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="h-full" suppressHydrationWarning>
      <body className={`${vazirmatn.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
