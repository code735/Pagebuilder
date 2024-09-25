import React, { useState } from 'react'
import HtmlIcon from '@mui/icons-material/Html';

export default function Navbar() {

const [selectedOption, setselectedOption] = useState("")

  return (
    <div className='navbar'>
      <div className={`options-container`}>
        <div onClick={()=>{
          selectedOption === 'add-html' ? setselectedOption("") : setselectedOption("add-html")
        }} className={`html-icon add-html option-icons ${ selectedOption === 'add-html' && "selected-option"}`}>
          <HtmlIcon />
        </div>
      </div>
    </div>
  )
}
