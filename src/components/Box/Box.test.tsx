import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import { Box as StyledBox } from "./BoxStyles"
import Box from "./Box"

describe("Snapshot Tests", () => {
  it("render Box component", () => {
    const tree = renderer.create(<Box />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("render Box with children component", () => {
    const tree = renderer
      .create(
        <Box>
          <p>Hello World</p>
        </Box>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Box", () => {
  it("render Box", () => {
    const wrapper = shallow(<Box />)
    expect(wrapper.contains(<StyledBox></StyledBox>)).toEqual(true)
  })
  it("render Box", () => {
    const wrapper = shallow(<Box>
      13:37
    </Box>)
    expect(wrapper.text()).toEqual("13:37")
  })
})
