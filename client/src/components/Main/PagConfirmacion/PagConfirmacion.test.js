import React from "react";
import { shallow } from "enzyme";
import PagConfirmacion from "./PagConfirmacion";

describe("PagConfirmacion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PagConfirmacion />);
    expect(wrapper).toMatchSnapshot();
  });
});
