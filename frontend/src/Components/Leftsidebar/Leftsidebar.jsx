import React, { useEffect, useState } from 'react'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { addRootHtmlElement, handleSwitchController } from '../../store/features/htmlElementCounterSlice';
import CloseIcon from '@mui/icons-material/Close';

export default function Leftsidebar() {
  // Redux
  const dispatch = useDispatch();
  const htmlElementRedux = useSelector((state) => state.htmlElement.allHtmlTags);
  const switchControlRedux = useSelector((state) => state.htmlElement.switchControl);

  // useStates
  const [htmlElements, setHtmlElements] = useState([
    'div',
    'span',
    'p', // Paragraph
    'a', // Anchor link
    'img', // Image
    'ul', // Unordered List
    'ol', // Ordered List
    'li', // List Item
    'h1', // Heading 1
    'h2', // Heading 2
    'h3', // Heading 3
    'h4', // Heading 4
    'h5', // Heading 5
    'h6', // Heading 6
    'button', // Button
    'input', // Input field
    'form', // Form
    'label', // Label for form elements
    'table', // Table
    'thead', // Table head
    'tbody', // Table body
    'tr', // Table row
    'td', // Table cell
    'th', // Table header cell
    'nav', // Navigation
    'header', // Header
    'footer', // Footer
    'section', // Section
    'article', // Article
    'aside', // Aside
    'main', // Main content area
    'figure', // Figure with optional caption
    'figcaption', // Caption for figure
    'video', // Video
    'audio', // Audio
    'canvas', // Canvas for graphics
    'iframe', // Inline frame
    'blockquote', // Blockquote
    'code', // Inline code
    'pre', // Preformatted text
  ]);
  const [selectedValue, setSelectedValue] = useState('');

  // useEffects
  useEffect(() => {
    console.log("htmlElementRedux", htmlElementRedux)
  }, [htmlElementRedux])


  // Functions
  const addElement = () => {
    if (selectedValue) {
      dispatch(addRootHtmlElement(selectedValue));
    }
  };

  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-navigation">
        <div className="nav-options">
          <div className="search-option">
            <div className="search-icon" onClick={() => {

            }}>
              <SearchOutlinedIcon />
            </div>
            {
              switchControlRedux === 'add-html' ? <div className="search-bar">
                <input type="text" />
              </div> : <div className="search-option-text">
                <p>DOM</p>
              </div>
            }
          </div>
          <div className="close-option" onClick={()=>{
            dispatch(handleSwitchController("off"));
          }}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
