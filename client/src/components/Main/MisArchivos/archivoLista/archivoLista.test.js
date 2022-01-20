import React from "react";
import { shallow } from "enzyme";
import ArchivoLista from "./archivoLista";

describe("ArchivoLista", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArchivoLista />);
    expect(wrapper).toMatchSnapshot();
  });
});
