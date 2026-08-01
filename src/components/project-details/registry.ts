// Explicit, statically-imported map from locale + project slug -> detail component.
//
// Deliberately not a Vite glob import: glob keys are relative file specifiers
// that silently change (or stop matching) when files move or get renamed,
// which is exactly how the previous `${project.name}.astro` lookup went
// missing for `todrawn` without anyone noticing. A plain `Record` keyed by a
// literal union type turns "missing project" into a compile error instead of
// a silent runtime fallback — and nesting it as `Record<Locale, Record<ProjectId, ...>>`
// means a missing `pl/` component is a compile error too, not a silent fallback
// to English or to the one-paragraph `longDescription`.
//
// Keyed by `slug`, never `name` — slugs are stable, URL-safe and dot-free;
// `project.name` values like "todrawn.com" are not valid file-path segments.
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import type { Locale } from "../../i18n/config";

import Todrawn from "./en/Todrawn.astro";
import LlamaTalks from "./en/LlamaTalks.astro";
import Gamelog from "./en/Gamelog.astro";
import MapGenerator from "./en/MapGenerator.astro";
import Cibaria from "./en/Cibaria.astro";
import SosniakPortfolio from "./en/SosniakPortfolio.astro";
import StrefaSA from "./en/StrefaSA.astro";

import TodrawnPl from "./pl/Todrawn.astro";
import LlamaTalksPl from "./pl/LlamaTalks.astro";
import GamelogPl from "./pl/Gamelog.astro";
import MapGeneratorPl from "./pl/MapGenerator.astro";
import CibariaPl from "./pl/Cibaria.astro";
import SosniakPortfolioPl from "./pl/SosniakPortfolio.astro";
import StrefaSAPl from "./pl/StrefaSA.astro";

export type ProjectId =
  | "todrawn"
  | "llama-talks"
  | "gamelog"
  | "map-generator"
  | "cibaria"
  | "sosniak-portfolio"
  | "strefa-sa";

export const projectDetails: Record<Locale, Record<ProjectId, AstroComponentFactory>> = {
  en: {
    todrawn: Todrawn,
    "llama-talks": LlamaTalks,
    gamelog: Gamelog,
    "map-generator": MapGenerator,
    cibaria: Cibaria,
    "sosniak-portfolio": SosniakPortfolio,
    "strefa-sa": StrefaSA,
  },
  pl: {
    todrawn: TodrawnPl,
    "llama-talks": LlamaTalksPl,
    gamelog: GamelogPl,
    "map-generator": MapGeneratorPl,
    cibaria: CibariaPl,
    "sosniak-portfolio": SosniakPortfolioPl,
    "strefa-sa": StrefaSAPl,
  },
};
