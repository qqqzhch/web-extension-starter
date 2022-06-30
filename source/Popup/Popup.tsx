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

import { decrement, increment } from '../Background/store/counterSlice'

import  {fetchToken} from '../Background/store/tokenSlice'



console.log('fetchToken',fetchToken())

// import {connect} from 'react-redux';
// import {ReactReduxContext} from 'react-redux';



const Popup : React.FC = () => {
  // const context = useContext(ReactReduxContext);
  // console.log('context',context)

  const dispatch = useBackgroundDispatch()
  console.log('useStoreSelector',RR.useSelector)
  const count = RR.useSelector((state: RootState) => state.counter.value)
  const tokens = RR.useSelector((state: RootState) => state.token.value)
  const list = RR.useSelector((state: RootState) => state.nftdata.value)



  console.log(tokens,typeof tokens)
  
  
  console.log('-')
  

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
    
    console.log('click')
  }

  function openWebPage4(): void {
    console.log('click4')
    dispatch(fetchToken())
    console.log('click4')
  }

  function openWebPage5(): void {
    console.log('click5')
    window.postMessage('test1',"*")
    console.log('click5')
  }

  return (
    <section id="popup">
      
        <span>{count} </span>
      <h2>WEB-EXTENSION-STARTER</h2>
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage5();
        }}
      >
        发送信息
      </button>
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
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage4();
        }}
      >
        获取数据
      </button>
      {/* {typeof tokens} */}
      {tokens[1]?.name}

      {list.map((element:any)=> {
       return (<div>
         <img src={element.imgurl}></img>
         {element.name}
         </div>)
      })}
      
      
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
