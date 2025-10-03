import Script from "next/script";

export default function SeoJsonLdSSR() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "مانایا | حسابداری شخصی",
        url: "https://manaya-acc.ir",
        description:
            "اپلیکیشن حسابداری شخصی برای مدیریت مالی بهتر، ثبت تراکنش و کنترل هزینه‌ها.",
        publisher: {
            "@type": "Organization",
            name: "مانایا",
            logo: {
                "@type": "ImageObject",
                url: "https://manaya-acc.ir/logo.png",
            },
        },
    };

    return (
        <Script
            id="json-ld-webpage"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}