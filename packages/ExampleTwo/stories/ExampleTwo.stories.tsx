import * as React from "react";
import { storiesOf } from "@storybook/react";
import ExampleTwo from "../src/index";

storiesOf("ExampleTwo", module).add("ExampleTwo", () => (
  <ExampleTwo compiler="TypeScript" framework="React" />
));
