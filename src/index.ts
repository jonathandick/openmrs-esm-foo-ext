import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { attach } from "@openmrs/esm-extensions";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  return {
    //    lifecycle: () => import("./openmrs-esm-foo-ext"),
    //    activate: "login",
    extensions: [
      {
        name: "foo-ext",
        load: () => import("./openmrs-esm-foo-ext"),
      },
    ],
  };
}

//attach("home-page-buttons","foo-ext");

export { backendDependencies, importTranslation, setupOpenMRS };
