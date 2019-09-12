import * as React from "react";
import { storiesOf } from "@storybook/react";
import ExampleOne from "../src/index";

storiesOf("ExampleOne", module).add("ExampleOne", () => (
  <ExampleOne compiler="TypeScript" framework="React" />
));
