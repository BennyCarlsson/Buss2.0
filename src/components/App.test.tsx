import React from "react"
import {shallow} from 'enzyme'
import App from "./App"
import TimeBox from "./TimeBox/TimeBox"

it("render App with Timebox", () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.contains(<TimeBox time="12:00"/>)).toEqual(true)
})
