'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className ?: string
}

export const LocationComponent: FC<BreadcrumbProps> = ({ items ,className}) => {
    return (
        <nav className={`${className} w-full flex justify-start px-2 lg:px-8 mt-4 lg:mt-6 gap-3  my-2  items-center  text-sm text-gray-500`}>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {item.href ? (
                        <Link href={item.href} className="hover:text-gray-700">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-gray-700">{item.label}</span>
                    )}

                    {index < items.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                </div>
            ))}
        </nav>
    );
};
