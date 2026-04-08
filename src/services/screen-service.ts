import {
  categoryLabels,
  categoryOrder,
  featuredScreens,
  getScreenBySlug,
  screens,
} from "@/lib/screens";

export const screenService = {
  getAll: () => screens,
  getFeatured: () => featuredScreens,
  getBySlug: (slug: string) => getScreenBySlug(slug),
  getCategories: () =>
    categoryOrder.map((category) => ({
      key: category,
      label: categoryLabels[category],
      screens: screens.filter((screen) => screen.category === category),
    })),
};
