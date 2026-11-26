import { ArrowDownRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  headline: string;
  supportingLine: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  imageAlt: string;
}

export function Hero({
  headline,
  supportingLine,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: HeroProps) {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden bg-[#171412] text-[#F6EBDD]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left column (above photo on mobile for immediate action) */}
          <div className="lg:col-span-5 lg:pr-4">
            <h1
              id="hero-headline"
              className="font-display text-[clamp(2.625rem,5.2vw,4.5rem)] font-bold leading-[1.03] tracking-tight text-[#F6EBDD] text-balance"
            >
              {headline}
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-[#F6EBDD]/80 sm:text-lg">
              {supportingLine}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#menu"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#F0A52E] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-[#171412] transition-colors duration-150 hover:bg-[#f5b44b] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6EBDD]"
              >
                {primaryCta}
              </a>

              <a
                href="#visit"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm px-2 py-2 text-sm font-medium text-[#F6EBDD] underline underline-offset-4 decoration-[#F6EBDD]/40 transition-colors duration-150 hover:text-[#F0A52E] hover:decoration-[#F0A52E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A52E]"
              >
                <span>{secondaryCta}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right column: Tandoor platter photography */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#F6EBDD]/12 bg-[#1E1A17]">
              <ResilientImage
                src={image}
                alt={imageAlt}
                priority
                fallbackLabel="Charred tandoori tikka skewers"
                containerClassName="h-full w-full"
                className="h-full w-full object-cover object-center"
              />
              {/* Subtle edge blend on desktop so the dark left surface stays cohesive */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#171412]/70 to-transparent lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
