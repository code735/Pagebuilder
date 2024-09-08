import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'

export default function Leftsidebar() {
  const [cssProperties, setCssProperties] = useState([
    "color",
    "background-color",
    "font-size",
    "margin",
    "padding",
    "border",
    "width",
    "height",
    "display",
    "position",
    "top",
    "bottom",
    "left",
    "right",
    "overflow",
    "z-index",
    "opacity",
    "cursor",
    "flex",
    "grid",
    "align-items",
    "justify-content",
    "text-align",
    "line-height",
    "letter-spacing",
    "text-decoration",
    "font-family",
    "font-weight",
    "box-shadow",
    "border-radius",
    "transition",
    "animation",
    "transform",
  ]);
  

  return (
    <div className='left-sidebar'>
      <p>CSS properties</p>
      <Autocomplete
        disablePortal
        options={cssProperties}
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "2px solid #fff",
            color: "#fff",
            padding: "0"
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover": {
            border: "2px solid #fff",
            color: "#fff"
          }
        }}
        renderInput={(params) => <TextField {...params} label="" />}
      />
    </div>
  )
}
