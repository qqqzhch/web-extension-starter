import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface State {
  table1: Array<any>,
  table2: Array<any>
}

const initialState: State = {
    table1:[],
    table2:[],
}

export const DBSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    fetchtable: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    tableLoaded: (state, action: PayloadAction<any>) => {
      console.log('action.payload',action.payload)
      state.table1 = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { fetchtable,tableLoaded } = DBSlice.actions

export default DBSlice.reducer

