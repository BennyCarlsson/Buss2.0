import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import App from "./App"
import { shallow } from "enzyme"
import logo from "./logo.svg"

it("renders learn react link", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

it("render App component", () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("render an image", () => {
  const wrapper = shallow(<App />)
  wrapper.contains(<img src={logo} className="App-logo" alt="logo" />)
})
