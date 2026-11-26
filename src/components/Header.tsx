import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { isConfiguredUrl, NavLinkItem } from '../config/restaurantConfig';

interface HeaderProps {
  brandName: string;
  navLinks: NavLinkItem[];
  orderingUrl?: string;
}

export function Header({ brandName, navLinks, orderingUrl }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasOrderingUrl = isConfiguredUrl(orderingUrl);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#F6EBDD]/12 bg-[#171412]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-[#F6EBDD] whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A52E]"
        >
          {brandName}
        </a>

        {/* Zone 2: Desktop single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#F6EBDD]/85 underline-offset-4 transition-colors duration-150 hover:text-[#F6EBDD] hover:underline decoration-[#F0A52E] whitespace-nowrap shrink-0 rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A52E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Ordering CTA (when configured) + accessible mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {hasOrderingUrl && (
            <a
              href={orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#F0A52E] px-4 py-2 text-sm font-semibold text-[#171412] transition-colors duration-150 hover:bg-[#f5b44b] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6EBDD]"
            >
              Order Now
            </a>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#F6EBDD]/20 text-[#F6EBDD] transition-colors duration-150 hover:border-[#F6EBDD]/45 hover:bg-[#F6EBDD]/5 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A52E]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#F6EBDD]/12 bg-[#171412] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#F6EBDD]/90 transition-colors duration-150 hover:bg-[#F6EBDD]/8 hover:text-[#F6EBDD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A52E]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
