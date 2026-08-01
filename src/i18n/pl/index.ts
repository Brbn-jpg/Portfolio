import meta from "./meta";
import common from "./common";
import home from "./home";
import about from "./about";
import projects from "./projects";
import privacy from "./privacy";
import notFound from "./notFound";
import contact from "./contact";
import type { Dict } from "../en";

/**
 * Annotated as `Dict` so the compiler reports every key English has and Polish
 * lacks. Each module is separately typed against its English counterpart, so
 * errors point at the specific section rather than the whole dictionary.
 */
const pl: Dict = { meta, common, home, about, projects, privacy, notFound, contact };

export default pl;
