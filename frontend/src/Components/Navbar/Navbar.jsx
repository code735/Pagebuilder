import React, { useState } from 'react'
import HtmlIcon from '@mui/icons-material/Html';
import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchController } from '../../store/features/htmlElementCounterSlice';

export default function Navbar() {

const [selectedOption, setselectedOption] = useState("")
const dispatch = useDispatch();
const { switchControl } = useSelector((state) => state.htmlElement)

console.log("switchControl",switchControl)

  return (
    <div className='navbar'>
      <div className={`options-container`}>
        <div onClick={()=>{
          switchControl === 'add-html' ? setselectedOption("") : setselectedOption("add-html")
          switchControl === 'add-html' ? dispatch(handleSwitchController("off")) : dispatch(handleSwitchController("add-html"))
        }} className={`html-icon add-html option-icons ${ switchControl === 'add-html' && "selected-option"}`}>
          <HtmlIcon />
        </div>
      </div>
    </div>
  )
}
