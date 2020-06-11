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

    expect(wrapper.find(Scorecard).props().frames[0][1]).toEqual(1);
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

  it("should display roll score on each frame", () => {
    const wrapper = mount(<App />);
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Controls).find("button").at(2);
      const startButton2 = wrapper.find(Controls).find("button").at(2);
      startButton1.simulate("click");
      startButton2.simulate("click");

      expect(wrapper.find(Scorecard).props().frames[i][0]).toEqual(2);
      expect(wrapper.find(Scorecard).props().frames[i][1]).toEqual(2);
    }
  });

  it("should generate each frame score", () => {
    const wrapper = mount(<App />);
    let frameScore = 0;
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Controls).find("button").at(4);
      const startButton2 = wrapper.find(Controls).find("button").at(3);
      startButton1.simulate("click");
      startButton2.simulate("click");
      frameScore = frameScore + 7;

      expect(wrapper.find(Scorecard).props().frameScores[i]).toEqual(
        frameScore
      );
    }
  });

  it("should generate correct frames score if sum of both rolls are 10", () => {
    const wrapper = mount(<App />);
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Controls).find("button").at(5);
      const startButton2 = wrapper.find(Controls).find("button").at(5);
      startButton1.simulate("click");
      startButton2.simulate("click");
      if (i === 9) {
        const startButton3 = wrapper.find(Controls).find("button").at(5);
        startButton3.simulate("click");
      }
    }

    expect(wrapper.find(Scorecard).props().totalScore).toEqual(150);
  });

  it("should generate correct frames score if first rolls of the fame is 10, except 10 frame", () => {
    const wrapper = mount(<App />);
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Controls).find("button").at(10);
      startButton1.simulate("click");
      if (i === 9) {
        const startButton2 = wrapper.find(Controls).find("button").at(10);
        startButton2.simulate("click");
      }
    }

    expect(wrapper.find(Scorecard).props().totalScore).toEqual(240);
  });

  it("should generate last frame score correctly if got the spare in last frame", () => {
    const wrapper = mount(<App />);
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Controls).find("button").at(5);
      const startButton2 = wrapper.find(Controls).find("button").at(5);
      startButton1.simulate("click");
      startButton2.simulate("click");
      if (i === 9) {
        const startButton3 = wrapper.find(Controls).find("button").at(5);
        startButton3.simulate("click");
      }
    }

    expect(wrapper.find(Scorecard).props().totalScore).toEqual(150);
  });
});
