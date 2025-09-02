import Container from "@/components/Container";
import { getFaqs } from "@/lib/content";
import FAQList from "@/components/FAQList";

export const metadata = { title: "سوالات متداول" };

export default async function FAQPage() {
    const faqs = await getFaqs();
    return (
        <Container>
            <h1 className="text-3xl font-bold mb-6">سوالات متداول</h1>
            <p className="text-text-secondary mt-5">
                پاسخ سؤالات متداول خود را از اینجا بخوانید
            </p>
            <FAQList faqs={faqs} />
        </Container>
    );
}