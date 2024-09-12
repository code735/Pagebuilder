import React from 'react'
import FloatingIsland from '../FloatingIsland/FloatingIsland'
import { useSelector } from 'react-redux';

export default function Pageeditor() {

  const { allHtmlTags } = useSelector((state) => state.htmlElement);

  return (
    <div className='page-editor'>
      <h4>Landing Page</h4>
      <div className="main-page-playarea">
        {
          allHtmlTags?.map((el) => {
            return React.createElement(el.rootElement, { className: "root-element" });
          })
        }
      </div>
      <div className="island-container">
        <FloatingIsland/>
      </div>
    </div>
  )
}
