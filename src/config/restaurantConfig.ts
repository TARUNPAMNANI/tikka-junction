export type MenuCategory = 'All' | 'Chicken' | 'Vegetarian' | 'Rolls';

export type DietaryLabel = 'Vegetarian' | 'Non-vegetarian';

export interface DishItem {
  id: string;
  name: string;
  description: string;
  category: Exclude<MenuCategory, 'All'>;
  dietary: DietaryLabel;
  image: string;
  alt: string;
  /** Optional price string (e.g. "$14"). Omit or leave undefined to hide pricing. */
  price?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface RestaurantConfig {
  brandName: string;
  navLinks: NavLinkItem[];
  hero: {
    headline: string;
    supportingLine: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
  };
  menu: {
    heading: string;
    categories: MenuCategory[];
    items: DishItem[];
  };
  story: {
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  visit: {
    heading: string;
    fallbackMessage: string;
    /** Populate with real street address when ready */
    address?: string;
    /** Populate with real opening hours lines when ready */
    openingHours?: string[];
    /** Populate with real contact phone number when ready */
    phone?: string;
    /** Populate with a valid https:// maps/directions URL to show "Get Directions" */
    directionsUrl?: string;
    /** Populate with a valid https:// ordering URL to show "Order Now" & "Order Online" */
    orderingUrl?: string;
  };
  social: {
    /** Populate with a valid https:// Instagram URL to show the Instagram link in the footer */
    instagramUrl?: string;
  };
}

/**
 * Validates that a configured external URL uses http(s) and is non-empty.
 */
export function isConfiguredUrl(url?: string): url is string {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export const restaurantConfig: RestaurantConfig = {
  brandName: 'Tikka Junction',
  navLinks: [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Visit', href: '#visit' },
  ],
  hero: {
    headline: 'Straight off the tandoor.',
    supportingLine: 'Smoky tikkas, juicy kebabs, and rolls worth coming back for.',
    primaryCta: 'Explore Menu',
    secondaryCta: 'Find Us',
    image: '/src/assets/images/hero_tandoor_platter_1795665746592.jpg',
    imageAlt:
      'Charred tandoori chicken tikka skewers on a dark metal tray served with fresh lime wedges, sliced red onion rings, and green mint chutney.',
  },
  menu: {
    heading: 'From the Grill',
    categories: ['All', 'Chicken', 'Vegetarian', 'Rolls'],
    items: [
      {
        id: 'tandoori-chicken-tikka',
        name: 'Tandoori Chicken Tikka',
        description: 'Charred chicken, lime, and green chutney.',
        category: 'Chicken',
        dietary: 'Non-vegetarian',
        image: '/src/assets/images/dish_tandoori_chicken_tikka_1795665746781.jpg',
        alt: 'Charred Tandoori Chicken Tikka pieces plated on dark stoneware with a lime wedge and vibrant green mint chutney.',
      },
      {
        id: 'malai-chicken-tikka',
        name: 'Malai Chicken Tikka',
        description: 'Creamy marinated chicken with a gentle smoky finish.',
        category: 'Chicken',
        dietary: 'Non-vegetarian',
        image: '/src/assets/images/dish_malai_chicken_tikka_1795665747237.jpg',
        alt: 'Tender Malai Chicken Tikka with golden tandoor char marks, crushed cardamom, and fresh coriander on a dark plate.',
      },
      {
        id: 'achari-paneer-tikka',
        name: 'Achari Paneer Tikka',
        description: 'Grilled paneer with tangy pickle spices.',
        category: 'Vegetarian',
        dietary: 'Vegetarian',
        image: '/src/assets/images/dish_achari_paneer_tikka_1795665747764.jpg',
        alt: 'Skewered Achari Paneer Tikka cubes coated in spiced mustard pickle marinade alongside roasted red onions.',
      },
      {
        id: 'chicken-seekh-kebab',
        name: 'Chicken Seekh Kebab',
        description: 'Spiced minced chicken, grilled on skewers.',
        category: 'Chicken',
        dietary: 'Non-vegetarian',
        image: '/src/assets/images/dish_chicken_seekh_kebab_1795665748262.jpg',
        alt: 'Spiced minced Chicken Seekh Kebabs sliced on a dark metal platter with charred lime and red onion rings.',
      },
      {
        id: 'mushroom-tikka',
        name: 'Mushroom Tikka',
        description: 'Marinated mushrooms with smoky, golden edges.',
        category: 'Vegetarian',
        dietary: 'Vegetarian',
        image: '/src/assets/images/dish_mushroom_tikka_1795665748544.jpg',
        alt: 'Whole marinated Mushroom Tikka skewers roasted to golden-charred edges and garnished with coriander and lime.',
      },
      {
        id: 'tikka-junction-roll',
        name: 'Tikka Junction Roll',
        description: 'Chicken tikka, onions, and chutney wrapped in flatbread.',
        category: 'Rolls',
        dietary: 'Non-vegetarian',
        image: '/src/assets/images/dish_tikka_junction_roll_1795665749721.jpg',
        alt: 'Flaky flatbread Tikka Junction Roll halved to show charred chicken tikka, crisp red onions, and green chutney.',
      },
    ],
  },
  story: {
    heading: 'Good things take a little heat.',
    body: 'Charred edges, bright chutneys, and spice you can taste in every bite. That’s Tikka Junction.',
    image: '/src/assets/images/story_grill_skewers_1795665750025.jpg',
    imageAlt:
      'Close-up of spiced tikka skewers sizzling over glowing red-orange charcoal embers inside an open Indian grill.',
  },
  visit: {
    heading: 'Come Hungry.',
    fallbackMessage: 'Location details coming soon.',
    // Optional fields below — leave empty until confirmed details are ready:
    address: '',
    openingHours: [],
    phone: '',
    directionsUrl: '',
    orderingUrl: '',
  },
  social: {
    // Optional field — leave empty until a valid Instagram URL is ready:
    instagramUrl: '',
  },
};
