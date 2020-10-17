import React from "react"
import Box from "components/Box/Box"
interface Props {
  time: string
}

const TimeBox: React.FC<Props> = (props) => {
  return <Box><p>{props.time}</p></Box>
}

export default TimeBox
