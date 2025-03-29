import type { Lang } from "@/types/Lang";
import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
  zh: () => import("./zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Lang) =>
  dictionaries[locale]();
