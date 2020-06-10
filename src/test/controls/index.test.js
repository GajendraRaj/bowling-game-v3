import React from "react";
import { shallow } from "enzyme";
import Controls from "../../components/controls";

describe("Controls component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Controls />);
  });

  it("should render 11 buttons", () => {
    expect(wrapper.find("button").length).toEqual(11);
  });

  it("should render the correct button text", () => {
    expect(wrapper.find("button").at(0).text()).toEqual("0");
    expect(wrapper.find("button").at(1).text()).toEqual("1");
    expect(wrapper.find("button").at(2).text()).toEqual("2");
    expect(wrapper.find("button").at(3).text()).toEqual("3");
    expect(wrapper.find("button").at(4).text()).toEqual("4");
    expect(wrapper.find("button").at(5).text()).toEqual("5");
    expect(wrapper.find("button").at(6).text()).toEqual("6");
    expect(wrapper.find("button").at(7).text()).toEqual("7");
    expect(wrapper.find("button").at(8).text()).toEqual("8");
    expect(wrapper.find("button").at(9).text()).toEqual("9");
    expect(wrapper.find("button").at(10).text()).toEqual("10");
  });

  it("should disable button only if the sum of the last roll and its value is greater than 10", () => {
    const lastRoll = 5;
    const rolls = 1;
    const wrapper = shallow(<Controls lastRoll={lastRoll} rolls={rolls} />);
    expect(wrapper.find("button").at(0).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(1).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(2).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(3).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(4).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(5).prop("disabled")).toEqual(false);
    expect(wrapper.find("button").at(6).prop("disabled")).toEqual(true);
    expect(wrapper.find("button").at(7).prop("disabled")).toEqual(true);
    expect(wrapper.find("button").at(8).prop("disabled")).toEqual(true);
    expect(wrapper.find("button").at(9).prop("disabled")).toEqual(true);
    expect(wrapper.find("button").at(10).prop("disabled")).toEqual(true);
  });
});
