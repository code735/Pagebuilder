import React, { useState } from 'react'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useSelector } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Leftsidebar() {
 const { currentSelectedTag } = useSelector((state) => state.htmlElement)

  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-navigation">
        <div className="nav-options">
          <div className="search-option">
            <SearchOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
