import React, {useState} from "react";
import { ConfigurableLink } from '@openmrs/esm-react-utils';

export default function Root() {
  return (
    <ConfigurableLink to="${openmrsSpaBase}/home/patient-search" className="bx--side-nav__link">
      Patient Search
    </ConfigurableLink>
  );
}