interface Props {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: Props) {
  return (
    <div className="group relative rounded-xl border border-border bg-bg-secondary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="text-2xl mb-3">{emoji}</div>
      <h3 className="font-mono font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
