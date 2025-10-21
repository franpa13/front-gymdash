'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Button } from '../ui/button';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export default function CustomButton({
  loading = false,
  children,
  className,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      {...props}
      disabled={loading || disabled}
      className={clsx(
        'relative flex items-center justify-center gap-2 transition-all',
        '[&:disabled]:opacity-100 [&:disabled]:text-opacity-100',
        loading && 'cursor-not-allowed',
        className
      )}
    >
      {loading && (
        <span className="loader mr-2" aria-hidden="true"></span>
      )}
      {children}
    </Button>
  );
}
