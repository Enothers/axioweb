import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-neutral-800",

        primary:
          "bg-[linear-gradient(90deg,#4f1d95_0%,#0b0b0b_25%,#0b0b0b_100%)] text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl",

        secondary:
          "border border-neutral-200 bg-white text-black shadow-sm hover:shadow-md",

        ghost:
          "bg-transparent text-neutral-700 hover:bg-neutral-100",

        outline:
          "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        link:
          "text-blue-600 underline-offset-4 hover:underline",
      },

      size: {
        default: "h-14 rounded-full px-10 text-[18px]",
        sm: "h-10 rounded-full px-4 text-sm",
        lg: "h-16 rounded-full px-12 text-lg",
        icon: "h-10 w-10 rounded-full p-0",
        "icon-sm": "h-8 w-8 rounded-full p-0",
        "icon-lg": "h-12 w-12 rounded-full p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="flex items-center justify-center gap-3">
        {children}

        {variant !== "ghost" &&
          variant !== "outline" &&
          variant !== "link" &&
          size !== "icon" &&
          size !== "icon-sm" &&
          size !== "icon-lg" && <span>→</span>}
      </span>
    </button>
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;