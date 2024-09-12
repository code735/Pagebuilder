import React, { useState } from 'react'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useSelector } from 'react-redux';

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

  const { currentSelectedTag } = useSelector((state) => state.htmlElement)

  return (
    <div className='left-sidebar'>
      {
        Object.keys(currentSelectedTag)?.length > 0 ? <div className="add-style-container">
          <p>Add Styles</p>
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
          <Button className='add-btn'>Add</Button>
        </div> : <div className="no-element-selected">
          <h4>No element selected</h4>
        </div>
      }
    </div>
  )
}
