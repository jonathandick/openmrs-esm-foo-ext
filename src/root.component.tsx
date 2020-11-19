import React from "react";
import { openmrsRootDecorator } from "@openmrs/esm-context";

const Root: React.FC = () => (
  <div>
    <h1>Hello world</h1>
  </div>
);

export default openmrsRootDecorator({
  featureName: "foo",
  moduleName: "@openmrs/esm-foo-ext",
})(Root);
