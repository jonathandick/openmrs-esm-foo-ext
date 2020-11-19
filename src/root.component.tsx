import React from "react";
import { openmrsRootDecorator } from "@openmrs/esm-context";

const Root: React.FC = () => (
  <div>
    <button>Hello world</button>
  </div>
);


export default openmrsRootDecorator({
  featureName: "foo",
  moduleName: "@openmrs/esm-foo-ext",
})(Root);
