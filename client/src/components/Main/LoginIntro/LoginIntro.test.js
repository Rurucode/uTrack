import React from "react";
import { shallow } from "enzyme";
import LoginIntro from "./LoginIntro";

describe("LoginIntro", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginIntro />);
    expect(wrapper).toMatchSnapshot();
  });
});
