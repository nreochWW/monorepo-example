import * as React from "react";
import { shallow } from "enzyme";
import ExampleOne from "../src/index";

describe("ExampleOne package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <ExampleOne compiler="TypeScript" framework="React" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
