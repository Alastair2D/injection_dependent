import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import CurrentSite from "../src/CurrentSite";
import PreviousSite from "../src/PreviousSite";
import { equal } from "assert";

describe("App", () => {
  it("renders a current site component", () => {
    let wrapper = shallow(<CurrentSite />);
    expect(wrapper.find("<CurrentSite />").length).toEqual(1);
  });

  it("renders a previous site compoent", () => {
    let wrapper = shallow(<PreviousSite />);
    expect(wrapper.find("<PreviousSite />").length).toEqual(1);
  });
});
