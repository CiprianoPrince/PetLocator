import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(['transition-colors'], {
    variants: {
        variant: {
            primary: 'rounded bg-primary-500 font-bold text-white hover:bg-primary-600',
            secondary: 'rounded bg-secondary-500 font-bold text-white hover:bg-secondary-600',
            dark: 'rounded bg-slate-900 font-bold text-white/90 hover:bg-slate-700',
            icon: 'rounded-full bg-primary-500 font-bold text-white hover:bg-primary-600',
        },
        size: {
            xs: 'px-2 py-1 text-xs',
            sm: 'px-4 py-1 text-sm',
            md: 'px-6 py-2 text-base',
            lg: 'px-8 py-2 text-lg',
            xl: 'px-10 py-3 text-xl',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    className?: string;
    children: ReactNode;
}

const Button = ({ variant, size, className, children, ...props }: ButtonProps) => {
    return (
        <button className={twMerge(buttonVariants({ variant, size }), className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
