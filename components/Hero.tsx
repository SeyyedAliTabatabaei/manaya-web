"use client";


import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {useThemeCustom} from "@/components/ThemeProvider";

export default function Hero() {
    const { isDark } = useThemeCustom();

    return (
    <section className=" md:pb-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* متن */}
        <div className="order-1 lg:order-1 space-y-6 text-right" dir="rtl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-snug">
            حسابداری شخصی مانایا
          </h1>
          <p className="text-lg md:text-2xl font-medium text-text-secondary leading-relaxed max-w-xl">
            مدیریت هوشمند و حرفه‌ای حساب‌های بانکی
          </p>

          {/* دکمه‌های دانلود */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
            <Link href="https://cafebazaar.ir/app/ir.manaya" aria-label="دانلود از بازار">
              <Image
                  src={isDark ? "/tempImage/DownloadBazaar-dark.svg" : "/tempImage/DownloadBazaar.svg"}
                alt="دریافت و دانلود اپلیکیشن حسابداری شخصی مانایا از کافه بازار"
                width={160}
                height={50}
                className="w-[140px] md:w-[170px] h-auto [&_text]:fill-white"
                priority
              />
            </Link>
            <Link href="https://myket.ir/app/ir.manaya" aria-label="دانلود از مایکت">
              <Image
                  src={isDark ? "/tempImage/DownloadMyket-dark.svg" : "/tempImage/DownloadMyket.svg"}
                alt="دریافت و دانلود اپلیکیشن حسابداری شخصی مانایا از مایکت"
                width={160}
                height={50}
                className="w-[140px] md:w-[170px] h-auto [&_text]:fill-white"
              />
            </Link>
          </div>

          {/* تصویر کارت فقط در موبایل */}
          <div className="mt-8 block lg:hidden">
            <Image
              src="/tempImage/heroImg2.png"
              alt="نمایش کارت‌ها"
              width={600}
              height={450}
              className="mx-auto w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>

        {/* تصاویر دسکتاپ */}
        <div className="relative hidden lg:flex order-1 lg:order-2  justify-center">
          <div className="relative w-[260px] h-[360px] sm:w-[360px] sm:h-[480px] lg:w-[460px] lg:h-[640px]">
            <Image
              src="/tempImage/heroImg.png"
              alt="نمایش اپلیکیشن مانایا"
              fill
              className=" object-contain drop-shadow-2xl"
              priority
            />
          </div>
          {/* کارت شناور فقط در دسکتاپ */}
          <Image
            src="/tempImage/heroImg2.png"
            alt="نمایش کارت‌ها"
            width={500}
            height={400}
            className=" absolute top-2/4  left-1/2   drop-shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
