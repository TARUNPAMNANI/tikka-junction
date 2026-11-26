import { useState } from 'react';
import { Flame } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
  darkSurface?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  fallbackLabel,
  darkSurface = true,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 p-6 text-center ${
          darkSurface
            ? 'bg-[#221D1A] text-[#F6EBDD]/70 border border-[#F6EBDD]/10'
            : 'bg-[#E9DCCB] text-[#171412]/70 border border-[#171412]/10'
        } ${containerClassName}`}
      >
        <Flame className="h-6 w-6 text-[#F0A52E]" aria-hidden="true" />
        <span className="font-display text-sm font-medium">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
