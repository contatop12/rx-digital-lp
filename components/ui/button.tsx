import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md shadow-primary/15 hover:bg-primary/92 hover:shadow-lg hover:shadow-primary/20',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/25 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-md',
        outline:
          'border-2 border-border bg-background/80 backdrop-blur-sm shadow-sm hover:bg-accent/70 hover:text-accent-foreground hover:border-primary/25 hover:shadow-md dark:bg-input/25 dark:border-input dark:hover:bg-input/45',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/75 hover:shadow',
        ghost:
          'hover:bg-accent/80 hover:text-accent-foreground dark:hover:bg-accent/40 shadow-none active:scale-100',
        link: 'text-primary underline-offset-4 hover:underline shadow-none active:scale-100 rounded-none px-0 h-auto font-semibold',
        whatsapp:
          'rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.42)] hover:bg-[#20c55a] hover:shadow-[0_8px_28px_rgba(37,211,102,0.48)] focus-visible:ring-[#25D366]/40',
        whatsappOutline:
          'rounded-full border-2 border-[#25D366] bg-white/5 text-[#0d9488] shadow-sm hover:bg-[#25D366]/12 hover:shadow-md dark:bg-transparent dark:text-[#5dee8c]',
        whatsappOnDark:
          'rounded-full border-2 border-[#25D366]/80 bg-[#25D366]/30 text-white shadow-none backdrop-blur-md hover:bg-[#25D366]/45 hover:border-[#25D366]',
        ctaOnGreen:
          'rounded-full bg-white text-[#1b4332] shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:bg-[#f8faf8] hover:shadow-[0_10px_36px_rgba(0,0,0,0.18)] focus-visible:ring-white/50',
        subtle:
          'rounded-full border border-foreground/15 bg-transparent text-foreground shadow-none hover:bg-foreground/[0.06] hover:border-foreground/25',
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-4',
        sm: 'h-9 gap-1.5 rounded-lg px-3.5 text-xs has-[>svg]:px-3',
        lg: 'h-12 rounded-full px-8 text-base has-[>svg]:px-6',
        xl: 'h-14 rounded-full px-10 text-base has-[>svg]:px-8',
        icon: 'size-10 rounded-xl',
        'icon-sm': 'size-9 rounded-lg',
        'icon-lg': 'size-12 rounded-2xl',
        fab: 'size-16 rounded-full p-0 shadow-lg [&_svg]:!size-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
