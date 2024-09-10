import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Drawer } from '@mui/material';

export default function FloatingIsland() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className='island-drawer'>
      <Button onClick={() => {
        setIsDrawerOpen(true)
      }}>
        <KeyboardArrowUpIcon />
      </Button>
      <Drawer anchor={"bottom"} open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false)
        }}
      >
        sample
      </Drawer>
    </div>
  )
}
