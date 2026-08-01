import meta from "./meta";
import common from "./common";
import home from "./home";
import about from "./about";
import projects from "./projects";
import privacy from "./privacy";
import notFound from "./notFound";
import contact from "./contact";

/**
 * English is the master dictionary. Split per page so several people (or agents)
 * can work on different sections without colliding on one file, and so the
 * Polish side can be translated module by module.
 */
const en = { meta, common, home, about, projects, privacy, notFound, contact };

export type Dict = typeof en;
export default en;
