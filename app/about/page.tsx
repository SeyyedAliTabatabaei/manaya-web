import Container from "@/components/Container";
import { getAboutParagraphs } from "@/lib/content";

export const metadata = { title: "درباره ما" };

export default async function AboutPage() {
  const paragraphs = await getAboutParagraphs();
  return (
    <Container className=" ">
      <h1 className="text-3xl font-bold mb-6">درباره ما</h1>
      <div className="space-y-4 text-text-primary  leading-relaxed">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </Container>
  );
}