import React from "react";
import { shallow } from "enzyme";
import SubmitData from "./SubmitData";

describe("SubmitData", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SubmitData />);
    expect(wrapper).toMatchSnapshot();
  });
});
