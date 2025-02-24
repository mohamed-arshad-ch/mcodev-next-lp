import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
}

const buttonSizes = {
  default: "px-4 py-2",
  sm: "px-3 py-1.5 text-sm",
  lg: "px-8 py-3 text-lg",
  icon: "h-9 w-9",
}

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={`
        ${buttonVariants[variant as keyof typeof buttonVariants]}
        ${buttonSizes[size as keyof typeof buttonSizes]}
        ${className}
        rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
      `}
      {...props}
    />
  )
}

