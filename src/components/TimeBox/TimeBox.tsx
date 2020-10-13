import React from "react"
import Box from "components/Box/Box"
interface Props {
  time: string
}

const TimeBox: React.FC<Props> = (props) => {
  return <Box>{props.time}</Box>
}

export default TimeBox
