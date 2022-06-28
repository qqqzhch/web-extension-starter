import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface State {
  value: Array<any>
}

const initialState: State = {
  value:[],
}

export const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    fetchToken: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    tokensLoaded: (state, action: PayloadAction<any>) => {
      console.log('action.payload',action.payload.tokens)
      state.value = action.payload.tokens
    },
  }
})

// Action creators are generated for each case reducer function
export const { tokensLoaded,fetchToken } = tokenSlice.actions

export default tokenSlice.reducer

