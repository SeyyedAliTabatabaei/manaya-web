import Container from "@/components/Container";
import TermsList from "@/components/TermsList";
import { getTerms } from "@/lib/content";

export const metadata = { title: "قوانین" };

export default async function TermsPage() {
    const terms = await getTerms();
    return (
        <Container>
            <h1 className="text-3xl font-bold ">سیاست حفظ حریم خصوصی مانایا</h1>
            <TermsList terms={terms} />
        </Container>
    );
}
