import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allHtmlTags: [],
  currentSelectedTag: {}
}

export const htmlElementCounterSlice = createSlice({
  name: "htmlElement",
  initialState,
  reducers: {
    addRootHtmlElement: (state,{payload}) => {
      state.allHtmlTags = [
        ...state.allHtmlTags,
        {
          "id": state.allHtmlTags?.length + 1,
          "rootElement":payload,
          "styles": [],
          "childElements": []
        }
      ];
    },
    addCurrentSelectedTag: (state, {payload}) => {
      console.log("payload",payload)
      state.currentSelectedTag = payload
    }
  } 
})

export const { addRootHtmlElement, addCurrentSelectedTag } = htmlElementCounterSlice.actions

export default htmlElementCounterSlice.reducer