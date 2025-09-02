"use client";

export default function TermsList({ terms }: { terms: { body: string }[] }) {
    return (
        <div>
            {terms.map((t, idx) => (
                <section key={idx} className="rounded-xl py-6">
                    <p className="text-text-primary leading-relaxed whitespace-pre-line">
                        {t.body}
                    </p>
                </section>
            ))}
        </div>
    );
}
