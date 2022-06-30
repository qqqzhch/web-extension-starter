import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  value:Array<any>
}

const initialState: CounterState = {
  value:[],
}

export const nftSlice = createSlice({
  name: 'nftdata',
  initialState,
  reducers: {
    addnft: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('action.payload',action.payload)

      state.value.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addnft } = nftSlice.actions

export default nftSlice.reducer

