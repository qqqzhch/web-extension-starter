import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface State {
  table1: Array<any>,
  table2: Array<any>,
  address:string
}

const initialState: State = {
    table1:[],
    table2:[],
    address:""
}

export const DBSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    addaddress:(state, action: PayloadAction<any>)=>{
      console.log(state, action)

    },
    getaddress:()=>{

    },
    fetchArtblock: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    artblockLoaded: (state, action: PayloadAction<any>) => {
      console.log('action.payload',action.payload)
      state.table1 = action.payload
    },
    addressLoaded:(state, action: PayloadAction<any>)=>{
      console.log('addressLoaded',action.payload)
      state.address = action.payload

    }

  }
})

// Action creators are generated for each case reducer function
export const { fetchArtblock,artblockLoaded,addaddress,getaddress,addressLoaded } = DBSlice.actions

export default DBSlice.reducer

