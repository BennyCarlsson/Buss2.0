import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Box from "../Box/Box"
import TimeBox from "./TimeBox"

describe("Snapshot Tests", () => {
  it("render TimeBox component", () => {
    const tree = renderer.create(<TimeBox time="11:12"/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("TimeBox", () => {
  it("render TimeBox", () => {
    const wrapper = shallow(<TimeBox time="12:12" />)
    expect(wrapper.contains(<Box><p>12:12</p></Box>)).toEqual(true)
  })
})
