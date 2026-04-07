import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-black text-white hover:bg-black/90': variant === 'default',
            'border border-[#0000001A] bg-transparent hover:bg-[#F0EEED] text-black': variant === 'outline',
            'bg-[#F0EEED] text-black hover:bg-[#F0EEED]/80': variant === 'secondary',
            'hover:bg-[#F0EEED] text-black': variant === 'ghost',
            'h-[52px] px-14 py-4 text-base': size === 'default',
            'h-10 px-5 py-2 text-sm': size === 'sm',
            'h-14 px-16 text-lg': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
