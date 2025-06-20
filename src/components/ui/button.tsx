import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all duration-200",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-2 focus-visible:ring-destructive/50 focus-visible:ring-offset-2 transition-all duration-200",
        outline:
          "border border-primary bg-transparent text-primary shadow-sm hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-200",
        secondary:
          "bg-dark text-white shadow-sm hover:bg-dark/90 focus-visible:ring-2 focus-visible:ring-dark/50 focus-visible:ring-offset-2 transition-all duration-200",
        highlight:
          "bg-highlight text-black shadow-sm hover:bg-highlight/90 focus-visible:ring-2 focus-visible:ring-highlight/50 focus-visible:ring-offset-2 transition-all duration-200",
        ghost: "text-foreground hover:bg-accent/10 hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/90 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-md transition-all duration-200",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
