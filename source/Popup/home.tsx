import * as React from 'react';

const Web3Utils = require('web3-utils');
import *  as RR from 'react-redux'

import {  
    useBackgroundDispatch,
    // useBackgroundSelector,
    RootState
  } from "./hooks/redux-hooks"


import  {addaddress,getaddress} from '../Background/store/dbSlice'

import {
  useNavigate
} from "react-router-dom";


let Home:React.FC = () =>{
  const [address, setAddress] = React.useState("");
  const [isaddress, setIsddress] = React.useState(true);

  const dispatch = useBackgroundDispatch()
  
  
  const saveaddress = RR.useSelector((state: RootState) => state.db.address)
  let navigate =useNavigate()
  React.useEffect(()=>{
     if(saveaddress.length>0){
      navigate('/list')
     }

   })


  function submit():void{
    console.log(address)
    let falg =  Web3Utils.isAddress(address)
    setIsddress(falg);
    if(falg){
      dispatch(addaddress(address))
      setTimeout(()=>{
        dispatch(getaddress())
        console.log('read')
      },1000)
    }
    

  }


    return (
        <div style={{ padding: "1rem 0" }}>
          <h2>home</h2>
         <div>
          <input onChange={(e:React.FormEvent<HTMLInputElement>)=>{setAddress(e.currentTarget.value)}} style={{width:'98%'}} placeholder='Please enter Ethereum address'></input>
          </div>
          <br/>
          {isaddress?"":"need address with correct format"}
          <br/>
          <button onClick={submit} >Submit</button>
          
        </div>
      );
}

export default Home