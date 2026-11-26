import { useState } from 'react';
import { motion } from 'motion/react';
import { DietaryLabel, DishItem, MenuCategory } from '../config/restaurantConfig';
import { ResilientImage } from './ResilientImage';

interface MenuSectionProps {
  heading: string;
  categories: MenuCategory[];
  items: DishItem[];
}

function DietaryIndicator({ label }: { label: DietaryLabel }) {
  const isVegetarian = label === 'Vegetarian';
  const colorClass = isVegetarian ? 'border-[#166534] text-[#166534]' : 'border-[#991B1B] text-[#991B1B]';
  const dotClass = isVegetarian ? 'bg-[#166534]' : 'bg-[#991B1B]';

  return (
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border ${colorClass}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      </span>
      <span className="text-xs font-medium tracking-[0.01em] text-[#171412]/75">
        {label}
      </span>
    </div>
  );
}

export function MenuSection({ heading, categories, items }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="scroll-mt-16 bg-[#F6EBDD] text-[#171412]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header + category filter controls */}
        <div className="flex flex-col gap-6 border-b border-[#171412]/15 pb-8 md:flex-row md:items-end md:justify-between">
          <h2
            id="menu-heading"
            className="font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-tight text-[#171412] text-balance"
          >
            {heading}
          </h2>

          <div
            role="group"
            aria-label="Filter menu by category"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[44px] rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171412] ${
                    isSelected
                      ? 'border-[#171412] bg-[#171412] text-[#F6EBDD]'
                      : 'border-[#171412]/20 bg-transparent text-[#171412]/80 hover:border-[#171412]/55 hover:text-[#171412]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial dish grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-base text-[#171412]/70">
              No dishes listed in this category yet.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredItems.map((dish, index) => (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.04, 0.16),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-lg border border-[#171412]/12 bg-[#FAF3E8]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E7DAC8]">
                  <ResilientImage
                    src={dish.image}
                    alt={dish.alt}
                    darkSurface={false}
                    fallbackLabel={dish.name}
                    containerClassName="h-full w-full"
                    className="h-full w-full object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
                  <DietaryIndicator label={dish.dietary} />

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[#171412]">
                      {dish.name}
                    </h3>
                    {dish.price && (
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-[#171412]">
                        {dish.price}
                      </span>
                    )}
                  </div>

                  <p className="text-[15px] leading-relaxed text-[#171412]/75">
                    {dish.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
