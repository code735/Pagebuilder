import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Drawer } from '@mui/material';
import { useSelector } from 'react-redux';

export default function FloatingIsland() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { allHtmlTags } = useSelector((state) => state.htmlElement);
  const [htmlElements, setHtmlElements] = useState(allHtmlTags)

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
        <div className="html-tags-container">
          {
            allHtmlTags?.map((el) => {
              return <div className="html-tag">{el.rootElement}</div>
            })
          }
        </div>
      </Drawer>
    </div>
  )
}
