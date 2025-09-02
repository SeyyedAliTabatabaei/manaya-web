
type FAQ = {
    question: string;
    answer: string;
};

type FAQListProps = {
    faqs: FAQ[];
};

export default function FAQList({ faqs }: FAQListProps) {
    return (
        <div className="space-y-4 mt-10">
            {faqs.map((f, idx) => (
                <details
                    key={idx}
                    className="group bg-surface rounded-xl border border-divider p-4 open:shadow-sm"
                >
                    <summary className="cursor-pointer select-none font-medium">{f.question}</summary>
                    <div className="pt-2 text-text-secondary">{f.answer}</div>
                </details>
            ))}
        </div>
    );
}
