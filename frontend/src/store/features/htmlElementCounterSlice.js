import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allHtmlTags: {}
}

export const htmlElementCounterSlice = createSlice({
  name: "htmlElement",
  initialState,
  reducers: {
    addHtmlElement: (state,{payload}) => {
      state.allHtmlTags = payload;
    }
  }
})

export const { addHtmlElement } = htmlElementCounterSlice.actions

export default htmlElementCounterSlice.reducer