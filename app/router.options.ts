import type { RouteLocationNormalized } from "vue-router";

const SUPPORTED_LOCALES = ["de", "en"] as const;

const stripLocalePrefix = (fullPath: string): string => {
  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `/${locale}`;
    if (fullPath === prefix) return "/";
    if (fullPath.startsWith(`${prefix}/`)) return fullPath.slice(prefix.length);
  }
  return fullPath;
};

export default {
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    savedPosition: { left: number; top: number } | null,
  ) {
    if (savedPosition) return savedPosition;

    const fromWithoutLocale = stripLocalePrefix(from.fullPath);
    const toWithoutLocale = stripLocalePrefix(to.fullPath);
    const isLocaleSwitchOnly = fromWithoutLocale === toWithoutLocale;

    if (isLocaleSwitchOnly) {
      // Keep current scroll exactly for locale-only route changes.
      return false;
    }

    if (to.hash) {
      return { el: to.hash, top: 0 };
    }

    return { top: 0, left: 0 };
  },
};
