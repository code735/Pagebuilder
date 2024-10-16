import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allHtmlTags: [],
  switchControl: "add-html",
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
    deleteElement: (state,{payload}) => {
      const filteredArray = state.allHtmlTags?.filter( item => item.id !== payload.id )
      console.log("filteredArray",filteredArray)
      console.log("payloadid",payload.id)
      state.allHtmlTags = state.allHtmlTags?.filter( item => item.id !== payload.id )
    },
    addCurrentSelectedTag: (state, {payload}) => {
      console.log("payload",payload)
      state.currentSelectedTag = payload
    },
    handleSwitchController: (state, {payload}) => {
      state.switchControl = payload
    }
  } 
})

export const { addRootHtmlElement, addCurrentSelectedTag, handleSwitchController, deleteElement } = htmlElementCounterSlice.actions

export default htmlElementCounterSlice.reducer