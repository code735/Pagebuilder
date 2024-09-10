import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addHtmlElement } from '../../store/features/htmlElementCounterSlice';

export default function Rightsidebar() {

  // redux
  const dispatch = useDispatch();

  // useStates
  const [htmlElements, setHtmlElements] = useState([
    "div",
    "span",
    "p",          // Paragraph
    "a",          // Anchor link
    "img",        // Image
    "ul",         // Unordered List
    "ol",         // Ordered List
    "li",         // List Item
    "h1",         // Heading 1
    "h2",         // Heading 2
    "h3",         // Heading 3
    "h4",         // Heading 4
    "h5",         // Heading 5
    "h6",         // Heading 6
    "button",     // Button
    "input",      // Input field
    "form",       // Form
    "label",      // Label for form elements
    "table",      // Table
    "thead",      // Table head
    "tbody",      // Table body
    "tr",         // Table row
    "td",         // Table cell
    "th",         // Table header cell
    "nav",        // Navigation
    "header",     // Header
    "footer",     // Footer
    "section",    // Section
    "article",    // Article
    "aside",      // Aside
    "main",       // Main content area
    "figure",     // Figure with optional caption
    "figcaption", // Caption for figure
    "video",      // Video
    "audio",      // Audio
    "canvas",     // Canvas for graphics
    "iframe",     // Inline frame
    "blockquote", // Blockquote
    "code",       // Inline code
    "pre",        // Preformatted text
  ]);

  const [selectedValue, setSelectedValue] = useState("")

  // functions
  const addElement = () => {
    dispatch(addHtmlElement())
  }

  return (
    <div className='right-sidebar'>
      <p>Add html element</p>
      <div className="html-tag-container">
        <Autocomplete
          disablePortal
          options={htmlElements}
          // value={selectedValue}
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
          renderInput={(params) => <TextField {...params} onChange={(e)=>{
            console.log(e.currentTarget.value)
          }} label="" />}
        />
        <Button className='add-btn' variant='outlined' onChange={addElement}>Add</Button>
      </div>
    </div>
  )
}
