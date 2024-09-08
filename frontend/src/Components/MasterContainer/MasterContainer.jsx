import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Pageeditor from '../Pageeditor/Pageeditor'
import Rightsidebar from '../RightSidebar/Rightsidebar'

export default function MasterContainer() {
  return (
    <div className="main-container">
      <Leftsidebar />
      <Pageeditor />
      <Rightsidebar />
    </div>
  )
}
