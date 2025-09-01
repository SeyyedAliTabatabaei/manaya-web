import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://manaya-acc.ir"),
    title: {
        default: "مانایا | حسابداری شخصی",
        template: "%s | مانایا",
    },
    description:
        "مانایا؛ اپلیکیشن حسابداری شخصی برای مدیریت مالی بهتر، ثبت تراکنش‌ها و کنترل هزینه‌ها.",
    keywords: [
        "حسابداری شخصی",
        "مدیریت مالی",
        "کنترل هزینه",
        "اپلیکیشن حسابداری",
        "مانایا",
        "اپلیکیشن حسابداری شخصی اندروید"
    ],
    openGraph: {
        type: "website",
        locale: "fa_IR",
        url: "https://manaya-acc.ir",
        siteName: "مانایا",
        title: "مانایا | حسابداری شخصی",
        description:
            "اپلیکیشن حسابداری شخصی مانایا برای مدیریت مالی، ثبت تراکنش و کنترل هزینه‌ها.",
        images: [
            {
                url: "https://manaya-acc.ir/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "مانایا | حسابداری شخصی",
            },
        ],
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "https://manaya-acc.ir",
        languages: {
            "fa-IR": "https://manaya-acc.ir",
            "en-US": "https://manaya-acc.ir/en",
        },
    },
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#121212" },
        { media: "(prefers-color-scheme: light)", color: "#F2F0F5" },
    ],
    icons: {
        icon: "/logo.svg",
        apple: "/apple-touch-icon.png",
    },
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
