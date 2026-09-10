import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconComponent } from "reicon-react";

type Variant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: IconComponent;
  iconSize?: number;
  variant?: Variant;
};

const base =
  "relative py-xxs px-sm font-display text-sm rounded-lg flex items-center gap-xs";

const variants: Record<Variant, string> = {
  primary: "bg-accent/90 text-fg-primary hover:bg-accent/70",
  secondary: "bg-fg-primary text-bg-primary hover:bg-fg-primary/70",
};

export default function Button({
  children,
  className,
  icon: Icon,
  iconSize,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[base, variants[variant], className].join(" ")}
      {...props}
    >
      {Icon && <Icon size={iconSize ?? 18} />}
      {children}
    </button>
  );
}
