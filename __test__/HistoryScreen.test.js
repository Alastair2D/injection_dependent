import { shallow } from "enzyme";
import React from "react";
import HistoryScreen from '../screens/HistoryScreen'

import CurrentSite from "../components/CurrentSite";

describe("HistoryScreen", () => {
  beforeEach(() => {
    historyscreen = shallow(<HistoryScreen />)
  })

  it("renders a current site component", () => {
    expect(historyscreen.containsMatchingElement(<CurrentSite />)).toEqual(true);
  })
})