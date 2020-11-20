import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { navigateToUrl } from "single-spa";
import { defineConfigSchema, useExtensionConfig } from "@openmrs/esm-config";

import { esmFooExtSchema } from "./config-schemas/openmrs-esm-foo-ext-schema";
import { openmrsRootDecorator } from "@openmrs/esm-context";

defineConfigSchema("@openmrs/esm-foo-ext-app", esmFooExtSchema);

//import Root from "./root.component";

const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: openmrsRootDecorator({
    featureName: "foo",
    moduleName: "@openmrs/esm-foo-ext-app",
  })(Root),
});

export default { bootstrap, mount, unmount };

export function Root() {
  const className = `omrs-link omrs-filled-neutral`;
  const config = useExtensionConfig();
  return (
    <a
      className={className}
      href={""}
      onClick={(event) => navigateToUrl(event, "")}
    >
      {config.messages.helloWorldMessage}
    </a>
  );
}
