import React from "react";
import { shallow } from "enzyme";
import MisArchivos from "./MisArchivos";

describe("MisArchivos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MisArchivos />);
    expect(wrapper).toMatchSnapshot();
  });
});
