import * as React from 'react';
// import *  as RR from 'react-redux'

// import {  
//     useBackgroundDispatch,
//     // useBackgroundSelector,
//     RootState
//   } from "./hooks/redux-hooks"

let Home:React.FC = () =>{
  const [address, setAddress] = React.useState("");
  function submit():void{
    console.log(address)

  }


    return (
        <div style={{ padding: "1rem 0" }}>
          <h2>home</h2>
         <div>
          <input onChange={(e:React.FormEvent<HTMLInputElement>)=>{setAddress(e.currentTarget.value)}} style={{width:'98%'}} placeholder='Please enter Ethereum address'></input>
          </div>
          <br/>
          {address}
          <br/>
          <button onClick={submit} >Submit</button>
        </div>
      );
}

export default Home