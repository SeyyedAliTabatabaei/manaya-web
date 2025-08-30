import Container from "@/components/Container";
import { getTerms } from "@/lib/content";

export const metadata = { title: "قوانین" };

export default async function TermsPage() {
  const terms = await getTerms();
  return (
    <Container className=" ">
      <h1 className="text-3xl font-bold ">
        سیاست حفظ حریم خصوصی مانایا
      </h1>
      <div className="">
        {terms.map((t, idx) => (
          <section key={idx} className="rounded-xl py-6">
            <p className="text-text-primary leading-relaxed whitespace-pre-line">
              {t.body}
            </p>
          </section>
        ))}
      </div>
    </Container>
  );
}
