import React from "react";
import { shallow, mount } from "enzyme";
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

  it("should generate 1st roll score on any button click", () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(Controls).find("button").at(0);
    startButton.simulate("click");

    expect(wrapper.find(Scorecard).props().frames[0]).toEqual([0]);
  });

  it("should generate 2nd roll score on any button click", () => {
    const wrapper = mount(<App />);
    const startButton1 = wrapper.find(Controls).find("button").at(0);
    const startButton2 = wrapper.find(Controls).find("button").at(1);
    startButton1.simulate("click");
    startButton2.simulate("click");

    expect(wrapper.find(Scorecard).props().frames[1]).toEqual([1]);
  });

  it("should generate first frame score on second button click", () => {
    const wrapper = mount(<App />);
    const startButton1 = wrapper.find(Controls).find("button").at(0);
    const startButton2 = wrapper.find(Controls).find("button").at(1);
    startButton1.simulate("click");
    startButton2.simulate("click");

    expect(wrapper.find(Scorecard).props().frameScores[0]).toEqual(1);
  });

  it("should generate Total Score on second button click", () => {
    const wrapper = mount(<App />);
    const startButton1 = wrapper.find(Controls).find("button").at(0);
    const startButton2 = wrapper.find(Controls).find("button").at(1);
    startButton1.simulate("click");
    startButton2.simulate("click");
    const firstFrameScore = wrapper.find(Scorecard).props().frameScores[0];

    expect(wrapper.find(Scorecard).props().totalScore).toEqual(firstFrameScore);
  });
});
