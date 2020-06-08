import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import Scorecard from "../components/scorecard";
import Controls from "../components/controls";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render title correctly", () => {
    expect(wrapper.find("h1").text()).toEqual("Bowling Game");
  });

  it("should render Scorecard component", () => {
    expect(wrapper.find(Scorecard).length).toEqual(1);
  });

  it("should render Controls component", () => {
    expect(wrapper.find(Controls).length).toEqual(1);
  });
});
