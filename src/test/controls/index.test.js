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
});
