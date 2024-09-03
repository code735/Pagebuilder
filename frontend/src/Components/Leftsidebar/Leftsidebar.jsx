import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'

export default function Leftsidebar() {
  const [cssProperties, setCssProperties] = useState([])

  return (
    <div className='left-sidebar'>
      Css properties
      <Autocomplete
        disablePortal
        options={cssProperties}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  )
}
