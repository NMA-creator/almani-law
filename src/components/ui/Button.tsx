import Link from "next/link";

type ButtonVariant = "primary" | "outline-white" | "outline-navy" | "whatsapp";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue hover:bg-blue-light text-white border-2 border-blue hover:border-blue-light",
  "outline-white":
    "bg-transparent hover:bg-white hover:text-navy text-white border-2 border-white",
  "outline-navy":
    "bg-transparent hover:bg-navy hover:text-white text-navy border-2 border-navy",
  whatsapp:
    "bg-whatsapp hover:opacity-90 text-white",
};

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-3 font-inter font-medium text-sm uppercase tracking-widest transition-colors duration-200 rounded-none";

export function Button({
  href,
  variant = "primary",
  children,
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
