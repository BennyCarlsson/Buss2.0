import React from "react"
import { Box as StyledBox } from "./BoxStyles"

const Box: React.FC = (props) => {
  return <StyledBox>{props.children}</StyledBox>
}

export default Box
