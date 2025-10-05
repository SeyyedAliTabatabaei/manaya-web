"use client";

import { useSearchParams } from "next/navigation";
import Container from "@/components/Container";

export default function PaymentResultContent() {
    const searchParams = useSearchParams();

    const success = searchParams.get("success") === "true";
    const message = searchParams.get("message") || "";
    const amount = searchParams.get("amount");
    const refId = searchParams.get("ref_id");
    const orderId = searchParams.get("order_id");
    const daysRemaining = searchParams.get("days_remaining");

    return (
        <Container>
            <div className="py-16 bg-surface border-t border-divider shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h1
                    className={`text-2xl font-bold mb-4 ${
                        success ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {success ? "✅ پرداخت موفق" : "❌ پرداخت ناموفق"}
                </h1>

                <p className="text-text-secondary mb-6">{decodeURIComponent(message)}</p>

                <div className="space-y-2 text-text-primary">
                    <p><span className="text-lg">مبلغ: </span>{amount && Number(amount).toLocaleString()} ریال </p>
                    <p><span className="text-lg">شماره سفارش: </span>{orderId}</p>
                    {success && (
                        <>
                            <p><span className="text-lg">کد پیگیری پرداخت: </span>{refId}</p>
                            <p><span className="text-lg">روزهای باقی‌مانده اشتراک: </span>{daysRemaining}</p>
                        </>
                    )}
                </div>


                <button
                    onClick={() => {
                        window.location.href = "manaya://payment/result";
                    }}
                    className="mt-6 w-full bg-primary hover:bg-blue-700 text-white py-2 rounded-lg transition"
                >
                    بازگشت به مانایا
                </button>
            </div>
        </Container>
    );
}


