import * as React from 'react';
// import {browser, Tabs} from 'webextension-polyfill-ts';

import './styles.scss';

import {  
  useBackgroundDispatch,
  // useBackgroundSelector,
  RootState
} from "./hooks/redux-hooks"

import { decrement, increment } from '../Background/store/counterSlice'

import {connect} from 'react-redux';



const Popup : React.FC = (props:any) => {

  const dispatch = useBackgroundDispatch()

  // const count = useBackgroundSelector(
  //   (state: RootState) =>{
  //    console.log('state',state)
  //     // return state.counter.value
  //     return 0
  //   } 
  // )

  function openWebPage(): void {
  
    dispatch(increment())
    console.log('click')
  }

  function openWebPage2(): void {
  
    dispatch(decrement())
    console.log('click')
  }

  return (
    <section id="popup">
        <span>{props.count}</span>
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
      
    </section>
  );
};

const mapStateToProps = (state:RootState) => {
  return {
    count: state.counter.value
  };
};

export default connect(mapStateToProps)(Popup) ;
