import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';

export default function FloatingIsland() {
  return (
    <div className='island-drawer'>
      <Button>
        <KeyboardArrowUpIcon/>
      </Button>
    </div>
  )
}
