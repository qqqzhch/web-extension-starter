// import  { useContext,FC } from 'react';
import * as React from 'react';
// import {browser} from 'webextension-polyfill-ts';

// import './styles.scss';
import *  as RR from 'react-redux'

import {  
  useBackgroundDispatch,
  // useBackgroundSelector,
  RootState
} from "./hooks/redux-hooks"

// import { decrement, increment } from '../Background/store/counterSlice'

import  {fetchToken} from '../Background/store/tokenSlice'
import {fetchArtblock} from '../Background/store/dbSlice'



console.log('fetchToken',fetchToken())

// import {connect} from 'react-redux';
// import {ReactReduxContext} from 'react-redux';



const Popup : React.FC = () => {
  // const context = useContext(ReactReduxContext);
  // console.log('context',context)

  const dispatch = useBackgroundDispatch()
  console.log('useStoreSelector',RR.useSelector)
  dispatch(fetchArtblock())
  // const count = RR.useSelector((state: RootState) => state.counter.value)
  // const tokens = RR.useSelector((state: RootState) => state.token.value)
  // const list = RR.useSelector((state: RootState) => state.nftdata.value)

  const table1 = RR.useSelector((state: RootState) => state.db.table1)



//   console.log(tokens,typeof tokens)
  
  
//   console.log('-')
  

//   function openWebPage(): void {
  
//     dispatch(increment())
//     console.log('click')
//   }

//   function openWebPage2(): void {
  
//     dispatch(decrement())
//     console.log('click')
//   }

//   function openWebPage3(): void {
//     console.log('click3')
    
//     console.log('click')
//   }

//   function openWebPage4(): void {
//     console.log('click4')
//     dispatch(fetchToken())
//     console.log('click4')
//   }

//   function openWebPage5(): void {
//     console.log('click5')
//     window.postMessage('test1',"*")
//     console.log('click5')
//   }

//   function openWebPage6():void{
//     browser.tabs.create({ url: "options.html" });
//   }

// function openWebPage7():void{
  
//   dispatch(fetchArtblock())
// }

  return (
    <section id="popup">
      
        
      <h2>Art Blocks</h2>
      {/* <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage6();
        }}
      >
        打开设置页面
      </button>
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
      <button
        id="options__button"
        type="button"
        onClick={():void => {
          return openWebPage7();
        }}
      >
        获取数据库中的数据
      </button> */}
      
      {table1.map((element:any)=>{
        let url = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_384,q_auto/https://artblocks-mainnet.s3.amazonaws.com/"+element.tokenid+".png";
        return (
          <div>
          <img src={url}/>
          
          </div>
          )

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
