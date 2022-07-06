import * as React from 'react';
import *  as RR from 'react-redux'


import {  
  useBackgroundDispatch,
  // useBackgroundSelector,
  RootState
} from "./hooks/redux-hooks"

import {fetchArtblock} from '../Background/store/dbSlice'

let List:React.FC = () =>{
  const dispatch = useBackgroundDispatch()
  console.log('useStoreSelector',RR.useSelector)
  dispatch(fetchArtblock())
  const table1 = RR.useSelector((state: RootState) => state.db.table1)

    return (
        <div style={{ padding: "1rem 0" }}>
          <h2>NftList</h2>
            {table1.map((element:any)=>{
          let url = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_384,q_auto/https://artblocks-mainnet.s3.amazonaws.com/"+element.tokenid+".png";
          return (
            <div>
            <img src={url}/>
            
            </div>
            )

        })}
        </div>
      );
}

export default List