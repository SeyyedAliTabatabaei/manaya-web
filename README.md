# پروژه Next.js + TypeScript + Tailwind (مانایا)

پروژه لندینگ مدرن با Next.js (App Router)، TypeScript و Tailwind CSS با پشتیبانی کامل RTL و فونت فارسی Vazirmatn.

## اجرای پروژه

- Node.js 18+ پیشنهاد می‌شود.
- وابستگی‌ها را نصب کنید:

```bash
npm install
```

- اجرای محیط توسعه:

```bash
npm run dev
```

- بیلد و اجرا:

```bash
npm run build
npm start
```

## ساختار پوشه‌ها

- `app/` صفحات و layout سراسری (Server Components)
- `components/` کامپوننت‌های قابل استفاده مجدد (Server Components)
- `lib/content.ts` داده‌های سرور ساید (شبیه‌سازی سرویس محتوا)
- `app/globals.css` استایل سراسری و Tailwind

## صفحات

- `/` لندینگ
- `/faq` سوالات متداول
- `/terms` قوانین
- `/about` درباره ما

## نکات

- تمام صفحات Server Component هستند و محتوا در سرور فراهم می‌شود.
- RTL فعال است (`dir="rtl"`) و فونت فارسی Vazirmatn استفاده شده است.
- استایل‌ها با Tailwind پیاده‌سازی شده‌اند.
