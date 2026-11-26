import { motion } from 'motion/react';
import { ResilientImage } from './ResilientImage';

interface StorySectionProps {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}

export function StorySection({
  heading,
  body,
  image,
  imageAlt,
}: StorySectionProps) {
  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="scroll-mt-16 border-t border-[#F6EBDD]/10 bg-[#171412] text-[#F6EBDD]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Offset image block */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pr-6"
          >
            <div className="relative pb-3 pr-3 sm:pb-4 sm:pr-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 left-4 top-4 rounded-lg border border-[#F0A52E]/35"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#F6EBDD]/15 bg-[#1E1A17]">
                <ResilientImage
                  src={image}
                  alt={imageAlt}
                  fallbackLabel="Skewers over glowing charcoal"
                  containerClassName="h-full w-full"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Compact editorial story copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <h2
              id="story-heading"
              className="font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-tight text-[#F6EBDD] text-balance"
            >
              {heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#F6EBDD]/80 sm:text-lg">
              {body}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
