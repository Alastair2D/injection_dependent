import { shallow } from "enzyme";
import React from "react";
import BodyImages from "../components/BodyImages";

describe("BodyImages", () => {
  it("recognises Hello World Div", () => {
    let bi = shallow(<BodyImages />);
    expect(bi.containsMatchingElement(<div><Text>Hello World</Text></div>)).toEqual(true);
  });

});
