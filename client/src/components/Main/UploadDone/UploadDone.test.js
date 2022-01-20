import React from "react";
import { shallow } from "enzyme";
import { UploadDone } from "./UploadDone";

describe("UploadDone", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UploadDone />);
    expect(wrapper).toMatchSnapshot();
  });
});
