import { shallow } from "enzyme";
import React from "react";
import BodyImages from "../components/BodyImages";

describe("BodyImages", () => {
  it("renders an image", () => {
    let bi = shallow(<BodyImages />);
    expect(bi.instance().contains(<div>Hello World</div>)).to.equal(true);
  });
});
