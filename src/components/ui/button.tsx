import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary hover:shadow-glow hover:scale-105 transition-spring font-bold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl hover:scale-105 transition-spring font-bold",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-gradient-primary hover:text-primary-foreground shadow-lg hover:shadow-primary hover:scale-105 transition-spring font-bold",
        secondary:
          "bg-gradient-secondary text-secondary-foreground hover:opacity-90 shadow-secondary hover:shadow-glow hover:scale-105 transition-spring font-bold",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-spring font-semibold",
        link: "text-primary underline-offset-4 hover:underline font-semibold",
        hero: "bg-gradient-cta text-primary-foreground hover:opacity-90 shadow-glow hover:shadow-xl hover:scale-110 transition-spring font-extrabold tracking-wide",
        cta: "bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-elegant hover:shadow-glow hover:scale-110 transition-spring font-extrabold tracking-wide",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-lg",
        xl: "h-16 rounded-xl px-12 text-xl",
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
