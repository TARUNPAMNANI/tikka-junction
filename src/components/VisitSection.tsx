import { ExternalLink, MapPin } from 'lucide-react';
import { isConfiguredUrl } from '../config/restaurantConfig';

interface VisitSectionProps {
  heading: string;
  fallbackMessage: string;
  address?: string;
  openingHours?: string[];
  phone?: string;
  directionsUrl?: string;
  orderingUrl?: string;
}

export function VisitSection({
  heading,
  fallbackMessage,
  address,
  openingHours,
  phone,
  directionsUrl,
  orderingUrl,
}: VisitSectionProps) {
  const cleanAddress = address?.trim();
  const cleanHours = openingHours?.map((line) => line.trim()).filter(Boolean) ?? [];
  const cleanPhone = phone?.trim();
  const hasDirections = isConfiguredUrl(directionsUrl);
  const hasOrdering = isConfiguredUrl(orderingUrl);

  const hasAnyDetails = Boolean(
    cleanAddress || cleanHours.length > 0 || cleanPhone || hasDirections || hasOrdering,
  );

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-16 border-t border-[#F6EBDD]/10 bg-[#171412] text-[#F6EBDD]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-lg border border-[#F6EBDD]/12 bg-[#1E1A17] p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <h2
                id="visit-heading"
                className="font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-tight text-[#F6EBDD] text-balance"
              >
                {heading}
              </h2>
            </div>

            <div className="lg:col-span-7">
              {!hasAnyDetails ? (
                <p className="text-base leading-relaxed text-[#F6EBDD]/80 sm:text-lg">
                  {fallbackMessage}
                </p>
              ) : (
                <div className="space-y-8">
                  {(cleanAddress || cleanHours.length > 0 || cleanPhone) && (
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {cleanAddress && (
                        <div>
                          <dt className="text-xs font-medium tracking-[0.04em] text-[#F0A52E]">
                            Address
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-[#F6EBDD]/90">
                            {cleanAddress}
                          </dd>
                        </div>
                      )}

                      {cleanHours.length > 0 && (
                        <div>
                          <dt className="text-xs font-medium tracking-[0.04em] text-[#F0A52E]">
                            Hours
                          </dt>
                          <dd className="mt-2 space-y-1 text-sm leading-relaxed text-[#F6EBDD]/90 tabular-nums">
                            {cleanHours.map((line) => (
                              <div key={line}>{line}</div>
                            ))}
                          </dd>
                        </div>
                      )}

                      {cleanPhone && (
                        <div>
                          <dt className="text-xs font-medium tracking-[0.04em] text-[#F0A52E]">
                            Phone
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-[#F6EBDD]/90 tabular-nums">
                            <a
                              href={`tel:${cleanPhone.replace(/[^+\d]/g, '')}`}
                              className="underline-offset-4 hover:text-[#F0A52E] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A52E]"
                            >
                              {cleanPhone}
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  )}

                  {(hasDirections || hasOrdering) && (
                    <div className="flex flex-wrap items-center gap-4">
                      {hasOrdering && (
                        <a
                          href={orderingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#F0A52E] px-6 py-3 text-sm font-semibold text-[#171412] transition-colors duration-150 hover:bg-[#f5b44b] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6EBDD]"
                        >
                          <span>Order Online</span>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}

                      {hasDirections && (
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#F6EBDD]/25 px-5 py-3 text-sm font-medium text-[#F6EBDD] transition-colors duration-150 hover:border-[#F0A52E] hover:text-[#F0A52E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A52E]"
                        >
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          <span>Get Directions</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
