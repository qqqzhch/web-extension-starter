// import  { useContext,FC } from 'react';
import * as React from 'react';
// import {browser, Tabs} from 'webextension-polyfill-ts';

// import './styles.scss';
import *  as RR from 'react-redux'

import {  
  useBackgroundDispatch,
  // useBackgroundSelector,
  RootState
} from "./hooks/redux-hooks"

import { decrement, increment,fetchUserById } from '../Background/store/counterSlice'
import {getToken} from '../Background/api/tokenApi'

console.log('getToken',getToken)

// import {connect} from 'react-redux';
// import {ReactReduxContext} from 'react-redux';



const Popup : React.FC = () => {
  // const context = useContext(ReactReduxContext);
  // console.log('context',context)

  const dispatch = useBackgroundDispatch()
  console.log('useStoreSelector',RR.useSelector)
  const count = RR.useSelector((state: RootState) => state.counter.value)
  const list = RR.useSelector((state: RootState) => state.counter.list.entities)
  const loading = RR.useSelector((state: RootState) => state.counter.list.loading)
  
  console.log()
  

  function openWebPage(): void {
  
    dispatch(increment())
    console.log('click')
  }

  function openWebPage2(): void {
  
    dispatch(decrement())
    console.log('click')
  }

  function openWebPage3(): void {
    console.log('click3')
    dispatch(fetchUserById())
    console.log('click')
  }

  return (
    <section id="popup">
      
        <span>{count} </span>
      <h2>WEB-EXTENSION-STARTER</h2>
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage();
        }}
      >
        test click
      </button>
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage2();
        }}
      >
        test click2
      </button>
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage3();
        }}
      >
        test click3
      </button>
      {list}|{loading}
      
    </section>
  );
};

// const mapStateToProps = (state:RootState) => {
//   return {
//     count: state.counter.value
//   };
// };

export default Popup ;

// export default connect(mapStateToProps)(Popup) ;
