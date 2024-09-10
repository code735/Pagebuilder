import { configureStore } from '@reduxjs/toolkit'
import htmlElementCounterSliceReducer from './features/htmlElementCounterSlice'

export const store = configureStore({
  reducer: {
    htmlElement: htmlElementCounterSliceReducer
  },
})