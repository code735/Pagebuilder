import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allHtmlTags: []
}

export const htmlElementCounterSlice = createSlice({
  name: "htmlElement",
  initialState,
  reducers: {
    addRootHtmlElement: (state,{payload}) => {
      state.allHtmlTags = [
        ...state.allHtmlTags,
        {
          "rootElement":payload
        }
      ];
    }
  } 
})

export const { addRootHtmlElement } = htmlElementCounterSlice.actions

export default htmlElementCounterSlice.reducer