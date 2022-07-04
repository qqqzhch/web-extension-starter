import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import tokenSlice from './tokenSlice'
import nftSlice from './nftSlice'
import DBSlice from './dbSlice'

import {fetchTokenMiddleware} from './midd/queryq'
import {fetchDBiddleware} from './midd/dbdata'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token:tokenSlice,
    nftdata:nftSlice,
    db:DBSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([fetchTokenMiddleware,fetchDBiddleware])

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


