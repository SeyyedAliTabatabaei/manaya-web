"use client";

import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import type {Route} from "next";
import {useThemeCustom} from "@/components/ThemeProvider";

export default function Footer() {
    const {isDark} = useThemeCustom();
    const enamadHtml = `
    <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=651134&Code=nV50t06YINUHmNBLtdTlbMPHOaO4wcIE">
      <img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=651134&Code=nV50t06YINUHmNBLtdTlbMPHOaO4wcIE" alt="نماد اعتماد الکترونیکی" style="cursor:pointer" code="nV50t06YINUHmNBLtdTlbMPHOaO4wcIE">
    </a>
  `;

    const links: { href: Route; label: string }[] = [
        {href: "/faq", label: "سوالات متداول"},
        {href: "/terms", label: "قوانین و حریم خصوصی"},
        {href: "/about", label: "درباره ما"},
    ];
    console.log(isDark);

    return (
        <footer className=" bg-surface">
            <Container>
                <div
                    className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr] gap-10 md:gap-5 text-sm text-text-secondary"
                >
                    {/* Logo & Desc */}
                    <div
                        className="order-1 md:order-1 flex flex-col md:items-start items-start text-right md:text-right gap-2"
                    >
                        <Link href="/" className="flex items-center gap-2 md:pl-10">
                            <Image src="/logo.svg" alt="مانایا" width={52} height={32} />
                            <span className="font-black text-xl text-primary">مانایا</span>
                        </Link>
                        <p className="text-text-secondary font-medium text-base mt-4">
                            مدیریت هوشمند و حرفه‌ای حساب‌های بانکی
                        </p>
                    </div>

                    {/* Links */}
                    <div
                        className="order-2 md:order-2 flex flex-col md:items-start items-start gap-2.5 text-right w-full"
                    >
                        <p className="font-bold text-base text-text-primary">مطالب مرتبط</p>
                        {links.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-primary text-text-secondary text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Download */}
                    <div
                        className="order-3 md:order-3 flex flex-col items-start md:items-end gap-4"
                    >
                        <p className="font-bold text-base text-text-primary">دانلود اپلیکیشن</p>
                        <div className="flex flex-row gap-3 md:flex-col">
                            <Link href="https://myket.ir/app/ir.manaya" target="_blank">
                                <Image
                                    src={isDark ? "/tempImage/DownloadMyket-dark.svg" : "/tempImage/DownloadMyket.svg"}
                                    alt="دریافت و دانلود اپلیکیشن حسابداری شخصی مانایا از مایکت"
                                    width={180}
                                    height={56}
                                />
                            </Link>
                            <Link href="https://cafebazaar.ir/app/ir.manaya" target="_blank">
                                <Image
                                    src={isDark ? "/tempImage/DownloadBazaar-dark.svg" : "/tempImage/DownloadBazaar.svg"}
                                    alt="دریافت و دانلود اپلیکیشن حسابداری شخصی مانایا از کافه بازار"
                                    width={180}
                                    height={56}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Enamad */}
                    <div
                        className="order-4 md:order-4 flex flex-col items-start md:items-end gap-4"
                        dangerouslySetInnerHTML={{ __html: enamadHtml }}
                    />
                </div>

                <div className="flex -mb-8 flex-row mt-2.5 justify-between items-center border-t border-divider py-2.5">
                    {/* Copyright */}
                    <div className=" text-center text-sm text-text-secondary">
                        © {new Date().getFullYear()} تمامی حقوق محفوظ است. مانایا
                    </div>
                    {/* Social */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="flex items-center gap-4">
                            <Link href="https://instagram.com" target="_blank" aria-label="Instagram"
                                  className="hover:opacity-80">
                                <Image src="/icons/instagram.svg" alt="اینستاگرام" width={30} height={30}/>
                            </Link>
                            <Link href="https://t.me" target="_blank" aria-label="Telegram"
                                  className="hover:opacity-80">
                                <Image src="/icons/telegram.svg" alt="تلگرام" width={30} height={30}/>
                            </Link>
                        </div>
                    </div>
                </div>


            </Container>
        </footer>
);
}



