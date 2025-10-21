'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface LoaderProps {
  size?: number;
  gifSrc?: string;
  className?: string
}

export const Loader = ({
  size = 86,
  gifSrc = '/gym/piston-gym.gif',
  className
}: LoaderProps) => {
  return (
    <div className={`${className} fixed inset-0 z-50 flex items-start pt-72 lg:pt-80 justify-center bg-black/20 `}>
      {/* Contenedo del spinner */}
      <div className="relative flex items-center justify-center">
        {/* Spinner */}
        <div
          className={clsx(
            'animate-spin rounded-full border-3 border-t-primary border-gray-200 '
          )}
          style={{ width: size, height: size }}
        ></div>

        {/* GIF en el centro */}
        <div className="absolute inset-0 flex items-center justify-center mr-4">
          <Image
            src={gifSrc}
            alt="loading"
            width={size * 0.8}
            height={size * 0.8}
            className="rounded-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
