import React, { useState } from 'react'
import HtmlIcon from '@mui/icons-material/Html';

export default function Navbar() {

const [selectedOption, setselectedOption] = useState("")

  return (
    <div className='navbar'>
      <div className={`options-container ${ selectedOption === 'add-html' && "selected-option"}`}>
        <div onClick={()=>{
          selectedOption === 'add-html' ? setselectedOption("") : setselectedOption("add-html")
        }} className="html-icon add-html option-icons">
          <HtmlIcon />
        </div>
      </div>
    </div>
  )
}
