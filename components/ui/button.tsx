"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;     // 👈 añadimos size
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const base =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

    const variants: Record<ButtonVariant, string> = {
      primary: "bg-brand-greenAccent text-white hover:opacity-90",
      secondary: "bg-brand-gray text-brand-grayDark hover:opacity-80",
      ghost:
        "bg-transparent text-brand-grayDark hover:bg-brand-gray/60 border border-transparent",
      link: "bg-transparent text-brand-blue underline decoration-2 underline-offset-4 hover:opacity-80",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <Comp
        ref={ref as unknown as React.RefObject<HTMLButtonElement>}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
