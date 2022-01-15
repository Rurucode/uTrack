import React from "react";
import { shallow } from "enzyme";
import Auth0 from "./Login";

describe("Auth0", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Auth0 />);
    expect(wrapper).toMatchSnapshot();
  });
});
