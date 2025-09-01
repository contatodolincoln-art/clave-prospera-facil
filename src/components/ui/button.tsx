import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-sm font-medium ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cta-hover",
  {
    variants: {
      variant: {
        // CTA primário - Duolingo style
        default: "bg-primary text-primary-foreground hover:bg-accent shadow-elegant font-semibold",
        // Hero CTA - destaque máximo
        hero: "bg-primary text-primary-foreground hover:bg-accent shadow-elegant font-bold text-lg hover-lift",
        // CTA secundário com borda
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        // Outline para CTAs secundários
        outline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground font-semibold",
        // Ghost para navegação
        ghost: "hover:bg-accent/10 hover:text-accent",
        // Link style
        link: "text-accent underline-offset-4 hover:underline font-medium",
        // CTA de urgência
        urgent: "bg-primary text-primary-foreground hover:bg-accent shadow-glow font-bold",
        // Soft para elementos secundários
        soft: "bg-card text-card-foreground hover:bg-card/80 hover-lift",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12 px-6 py-3 text-base", // Maior para melhor usabilidade
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg", // CTAs principais
        xl: "h-16 px-12 py-5 text-xl", // Hero CTA
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
