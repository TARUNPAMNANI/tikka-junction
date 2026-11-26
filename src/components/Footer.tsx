import { ExternalLink } from 'lucide-react';
import { isConfiguredUrl, NavLinkItem } from '../config/restaurantConfig';

interface FooterProps {
  brandName: string;
  navLinks: NavLinkItem[];
  instagramUrl?: string;
}

export function Footer({ brandName, navLinks, instagramUrl }: FooterProps) {
  const hasInstagram = isConfiguredUrl(instagramUrl);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#F6EBDD]/12 bg-[#171412] text-[#F6EBDD]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col gap-1">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#F6EBDD] whitespace-nowrap w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A52E]"
          >
            {brandName}
          </a>
          <p className="text-xs text-[#F6EBDD]/55">
            &copy; {currentYear} {brandName}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 sm:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#F6EBDD]/80 underline-offset-4 transition-colors duration-150 hover:text-[#F6EBDD] hover:underline decoration-[#F0A52E] whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A52E]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {hasInstagram && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F0A52E] underline-offset-4 transition-colors duration-150 hover:text-[#f5b44b] hover:underline whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A52E]"
            >
              <span>Instagram</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
