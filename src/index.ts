import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { attach } from "@openmrs/esm-extensions";
import { defineConfigSchema, useExtensionConfig } from "@openmrs/esm-config";
import { esmFooExtSchema } from "./config-schemas/openmrs-esm-foo-ext-schema";

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

export { backendDependencies, importTranslation, setupOpenMRS };
