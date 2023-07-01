import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Volumeslider = (props) => {
  var music= props.music
  return (
    <Box width={100}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>)
}

export default Volumeslider