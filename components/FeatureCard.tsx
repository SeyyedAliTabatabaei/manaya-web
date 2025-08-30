type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="rounded-xl border border-divider bg-surface p-6 shadow-sm hover:bg-card-inner-bg transition-colors">
      <h3 className="font-semibold text-lg mb-2 text-text-primary">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
