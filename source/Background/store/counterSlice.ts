import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
require('isomorphic-fetch');

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'tokens',
  async () => {
    const response = await fetch('https://app.tryroll.com/tokens.json')
    return response.json()
  }
)

interface TokenList {
  entities:any[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const list = {
  entities: [],
  loading: 'idle',
} as TokenList

export interface CounterState {
  value: number,
  list:TokenList
}

const initialState: CounterState = {
  value: 0,
  list:list
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.list.entities.push(action.payload)
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

export {fetchUserById}