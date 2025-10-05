import { Suspense } from "react";
import Container from "@/components/Container";
import PaymentResultContent from "../../components/PaymentResultContent";

export default function PaymentResultPage() {
    return (
        <Container>
            <Suspense fallback={
                <div className="py-16 border-t border-divider shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                    <p>در حال بارگذاری...</p>
                </div>
            }>
                
                <PaymentResultContent/>
            </Suspense>
        </Container>
    );
}