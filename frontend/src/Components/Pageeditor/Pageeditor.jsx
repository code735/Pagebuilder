import React from 'react'
import FloatingIsland from '../FloatingIsland/FloatingIsland'

export default function Pageeditor() {
  return (
    <div className='page-editor'>
      <h4>Landing Page</h4>
      <div className="main-page-playarea">

      </div>
      <div className="island-container">
        <FloatingIsland/>
      </div>
    </div>
  )
}
