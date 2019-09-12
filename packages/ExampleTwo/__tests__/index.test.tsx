import * as React from "react";
import { shallow } from "enzyme";
import ExampleTwo from "../src/index";

describe("ExampleTwo package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ExampleTwo compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
