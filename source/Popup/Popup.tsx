// import  { useContext,FC } from 'react';
import * as React from 'react';
// import {browser} from 'webextension-polyfill-ts';

// import './styles.scss';
// import *  as RR from 'react-redux'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

// import {  
//   useBackgroundDispatch,
//   // useBackgroundSelector,
//   // RootState
// } from "./hooks/redux-hooks"

// import { decrement, increment } from '../Background/store/counterSlice'

// import  {fetchToken} from '../Background/store/tokenSlice'
// import {fetchArtblock} from '../Background/store/dbSlice'

import Home from './home'
import List from './list'



// console.log('fetchToken',fetchToken())

// import {connect} from 'react-redux';
// import {ReactReduxContext} from 'react-redux';



const Popup : React.FC = () => {
  // const context = useContext(ReactReduxContext);
  // console.log('context',context)

  // const dispatch = useBackgroundDispatch()
  // console.log('useStoreSelector',RR.useSelector)
  // dispatch(fetchArtblock())
  // const count = RR.useSelector((state: RootState) => state.counter.value)
  // const tokens = RR.useSelector((state: RootState) => state.token.value)
  // const list = RR.useSelector((state: RootState) => state.nftdata.value)

  // const table1 = RR.useSelector((state: RootState) => state.db.table1)
  console.log('pop')



  return (
    <section id="popup" style={{width:300}}>
      <div>
        Art Blocks
      </div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List />} />
      </Routes>
    </HashRouter>
    
    </section>
  );
};

export default Popup ;


