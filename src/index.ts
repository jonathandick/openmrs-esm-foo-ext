import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { attach } from "@openmrs/esm-extensions";
import { defineConfigSchema } from "@openmrs/esm-config";
import { esmFooExtSchema } from "./config-schemas/openmrs-esm-foo-ext-schema";
import {getAsyncLifecycle} from "@openmrs/esm-react-utils";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-foo-ext-app";

  const options = {
    featureName: "foo",
    moduleName
  };

  return {
    extensions: [
      {
        id: "foo-ext",
        slot: 'nav-menu',
        load: getAsyncLifecycle(() =>  import("./openmrs-esm-foo-ext"), options),
      }
    ]
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
