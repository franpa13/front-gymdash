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
}

export const LocationComponent: FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="w-full flex justify-end mt-3 lg:mt-0  items-center space-x-2 text-sm text-gray-500">
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
