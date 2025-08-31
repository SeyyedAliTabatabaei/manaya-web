import Container from "@/components/Container";
import { getFaqs } from "@/lib/content";

export const metadata = { title: "سوالات متداول" };

export default async function FAQPage() {
  const faqs = await getFaqs();
  return (
    <Container className="">
      <h1 className="text-3xl font-bold mb-6">سوالات متداول</h1>
      <p className="text-text-secondary mt-5">
        پاسخ سؤالات متداول خود را از اینجا بخوانید </p>
      <div className="space-y-4 mt-10 ">
        {faqs.map((f, idx) => (
          <details key={idx} className="group bg-surface rounded-xl border p-4 open:shadow-sm">
            <summary className="cursor-pointer select-none font-medium">{f.question}</summary>
            <div className="pt-2 text-gray-700">{f.answer}</div>
          </details>
        ))}
      </div>
    </Container >
  );
}
