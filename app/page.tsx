import Hero from "@/components/Hero";
import Container from "@/components/Container";
import { getComments } from "@/lib/content";
import Values from "@/components/values";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewsSlider from "@/components/ReviewsSlider";

export default async function Page() {
  const comments = await getComments();

  return (
    <>
      <Hero />
      <Values />
      <section aria-label="نظرات کاربران اپلیکیشن مانایا">
        <Container className="py-12 md:py-16 border-t border-divider">
          <div className="mb-8 text-center">
            <SectionTitle>صدای کاربران ما</SectionTitle>
            <p className="text-text-secondary mt-5">
              تجربه‌ها و دیدگاه‌های واقعی کاربران مانایا رو بخونید و شما هم نظر
              خودتون رو در کافه بازار یا مایکت با ما به اشتراک بگذارید.
            </p>
          </div>
          {/* 🔥 اسلایدر نظرات */}
          <ReviewsSlider items={comments} />
        </Container>
      </section>
    </>
  );
}
