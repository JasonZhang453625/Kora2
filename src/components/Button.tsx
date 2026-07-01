interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 font-mono font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200";

  const styles = {
    primary:
      "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/30",
    secondary:
      "border border-border bg-bg-secondary text-text-primary hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-accent",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
