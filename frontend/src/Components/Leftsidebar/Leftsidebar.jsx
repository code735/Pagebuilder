import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { addRootHtmlElement, handleSwitchController } from '../../store/features/htmlElementCounterSlice';
import { Add, Close } from '@mui/icons-material';

export default function Leftsidebar() {
  const dispatch = useDispatch();
  const htmlElementRedux = useSelector((state) => state.htmlElement.allHtmlTags);
  const switchControlRedux = useSelector((state) => state.htmlElement.switchControl);

  // HTML Elements List with both tagName and tag JSX elements
  const htmlElementsList = [
    { tagName: 'div', fullName: 'division', tag: "<div></div>" },
    { tagName: 'span', fullName: 'span', tag: "<span></span>" },
    { tagName: 'p', fullName: 'paragraph', tag: "<p></p>" },
    { tagName: 'a', fullName: 'anchor', tag: `<a href="#">Link</a>` },
    { tagName: 'img', fullName: 'image', tag: `<img src="" alt=""/>` },
    { tagName: 'ul', fullName: 'unordered list', tag: `<ul><li>Item</li></ul>` },
    { tagName: 'ol', fullName: 'ordered list', tag: `<ol><li>Item</li></ol>` },
    { tagName: 'li', fullName: 'list item', tag: "<li></li>" },
    { tagName: 'h1', fullName: 'heading 1', tag: "<h1></h1>" },
    { tagName: 'h2', fullName: 'heading 2', tag: "<h2></h2>" },
    { tagName: 'h3', fullName: 'heading 3', tag: "<h3></h3>" },
    { tagName: 'button', fullName: 'button', tag: "<button>Button</button>" },
    { tagName: 'input', fullName: 'input field', tag: `<input type="text" />` },
    { tagName: 'form', fullName: 'form', tag: "<form></form>" },
    { tagName: 'label', fullName: 'label', tag: "<label>Label</label>" },
    { tagName: 'table', fullName: 'table', tag: "<table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table>" },
    { tagName: 'nav', fullName: 'navigation', tag: "<nav></nav>" },
    { tagName: 'header', fullName: 'header', tag: "<header></header>" },
    { tagName: 'footer', fullName: 'footer', tag: "<footer></footer>" },
    { tagName: 'section', fullName: 'section', tag: "<section></section>" },
    { tagName: 'article', fullName: 'article', tag: "<article></article>" },
    { tagName: 'aside', fullName: 'aside', tag: "<aside></aside>" },
    { tagName: 'main', fullName: 'main content area', tag: "<main></main>" },
    { tagName: 'figure', fullName: 'figure', tag: "<figure></figure>" },
    { tagName: 'figcaption', fullName: 'figure caption', tag: "<figcaption></figcaption>" },
    { tagName: 'video', fullName: 'video', tag: "<video></video>" },
    { tagName: 'audio', fullName: 'audio', tag: "<audio></audio>" },
    { tagName: 'canvas', fullName: 'canvas', tag: "<canvas></canvas>" },
    { tagName: 'iframe', fullName: 'inline frame', tag: "<iframe></iframe>" },
    { tagName: 'blockquote', fullName: 'blockquote', tag: "<blockquote></blockquote>" },
    { tagName: 'code', fullName: 'code', tag: "<code></code>" },
    { tagName: 'pre', fullName: 'preformatted text', tag: "<pre></pre>" },
  ];


  // State for storing the input value and the filtered suggestions
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    console.log("htmlElementRedux", htmlElementRedux)
  }, [htmlElementRedux])

  // Filter suggestions based on user input
  useEffect(() => {
    const filteredSuggestions = htmlElementsList.filter(element =>
      element.tagName.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [inputValue]);

  const addElement = () => {
    const selectedElement = suggestions.find(el => el.tagName === inputValue);
    if (selectedElement) {
      dispatch(addRootHtmlElement(selectedElement.tagName));
    }
  };

  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-navigation">
        <div className="nav-options">
          <div className="search-option">
            <div className="search-icon">
              <SearchOutlinedIcon />
            </div>
            {
              switchControlRedux === 'add-html' ? (
                <div className="searchbar-addicon-container">
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder='Add HTML...'
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  <div className="add-html-icon" onClick={addElement}>
                    <Add />
                  </div>
                </div>
              ) : (
                <div className="search-option-text">
                  <p>DOM</p>
                </div>
              )
            }
          </div>
          <div className="close-option" onClick={() => dispatch(handleSwitchController("off"))}>
            <Close />
          </div>
        </div>
      </div>
      <div className="left-sidebar-container">
        {
          switchControlRedux === "add-html" ? (
            <div className="suggestions-container">
              {
                suggestions?.map((el, index) => (
                  <div
                    className='html-element'
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => setInputValue(el.tagName)}
                  >
                    {el.fullName}
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="dom-container">
              DOM elements will show up here
            </div>
          )
        }
      </div>
    </div>
  )
}
