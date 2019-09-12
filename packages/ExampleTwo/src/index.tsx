import * as React from "react";
import styled from "styled-components";
import ExampleOne from "example-one";

export interface ExampleTwoProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const ExampleTwo = (props: ExampleTwoProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
    <ExampleOne compiler="TypeScript" framework="React" />
  </Wrapper>
);

export default ExampleTwo;
