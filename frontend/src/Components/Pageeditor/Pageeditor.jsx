import React, { useEffect } from 'react'
import FloatingIsland from '../FloatingIsland/FloatingIsland'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentSelectedTag } from '../../store/features/htmlElementCounterSlice';
import { current } from '@reduxjs/toolkit';

export default function Pageeditor() {

  const { allHtmlTags, currentSelectedTag } = useSelector((state) => state.htmlElement);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("currentSelectedTag-allHtmlTags",currentSelectedTag,allHtmlTags)
  }, [currentSelectedTag,allHtmlTags])
  
  
  return (
    <div className='page-editor'>
      <h4>Landing Page</h4>
      <div className="main-page-playarea">
        {
          allHtmlTags?.map((el) => {
            return React.createElement(el.rootElement, { 
              className: `root-element ${ currentSelectedTag.id === el.id && 'selected-element' }`,
              onClick: () => {
                if ( currentSelectedTag.id === el.id ) {
                  dispatch(addCurrentSelectedTag({}))
                }
                else {
                  dispatch(addCurrentSelectedTag(el))
                }
              }
            });
          })
        }
      </div>
      <div className="island-container">
        <FloatingIsland/>
      </div>
    </div>
  )
}
