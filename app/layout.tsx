import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SeoJsonLdSSR from "@/components/SeoJsonLd";

const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400", "600", "700"] ,display: "swap"});

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
        title: "حسابداری شخصی مانایا",
        description:
            "اپلیکیشن حسابداری شخصی مانایا برای مدیریت مالی، ثبت تراکنش و کنترل هزینه‌ها.",
        images: [
            {
                url: "https://manaya-acc.ir/tempImage/imagePreview.png",
                width: 1200,
                height: 630,
                alt: "حسابداری شخصی مانایا",
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
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    twitter: {
        card: "summary_large_image",
        site: "@manaya_app",
        title: "مانایا | حسابداری شخصی",
        description: "اپلیکیشن حسابداری شخصی برای مدیریت مالی بهتر.",
        images: ["https://manaya-acc.ir/logo.png"],
    },
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#121212" },
        { media: "(prefers-color-scheme: light)", color: "#F2F0F5" },
    ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl" className="h-full" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://manaya-acc.ir" />
            <link rel="preload" as="image" href="/tempImage/imagePreview.png" />
            <title>حسابداری شخصی مانایا</title>
        </head>
        <body className={`${vazirmatn.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
            <Header />
            <SeoJsonLdSSR />
            <main className="flex-grow">{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
