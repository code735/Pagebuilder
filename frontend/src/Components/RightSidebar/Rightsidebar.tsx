import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRootHtmlElement } from '../../store/features/htmlElementSlice';
import { CurrentRootState } from '../../store/store';

export default function Rightsidebar() {
  // Redux
  const dispatch = useDispatch();
  const htmlElementRedux = useSelector((state: CurrentRootState)=>state.htmlElement.allHtmlTags);

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
    console.log("htmlElementRedux",htmlElementRedux)
  }, [htmlElementRedux])
  

  // Functions
  const addElement = () => {
    if (selectedValue) {
      dispatch(addRootHtmlElement(selectedValue));
    }
  };

  return (
    <div className='right-sidebar'>
      
    </div>
  );
}
