import { Middleware } from "redux";
import {getOrCreateDB} from '../../services/db'

const fetchDBiddleware:Middleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('fetchDBiddleware action',action)
    if (action.type === 'db/fetchArtblock') {
      // Make an API call to fetch todos from the server
    getOrCreateDB()
    .then(async DB=>{
       let addr = await DB.getaddress();
       if(addr!=null){
        console.log('addr',addr)
        return DB.artlist(addr)
       }else{
         return []
       }
        
    })
    .then(data=>{
        storeAPI.dispatch({ type: 'db/artblockLoaded', payload: data })

    })

    }
    
    if(action.type === 'db/addaddress'){
      
      getOrCreateDB()
      .then(DB=>{
          return DB.addaddress(action.payload)
      })

    }
    if(action.type === 'db/getaddress'){
      getOrCreateDB()
      .then(DB=>{
          return DB.getaddress()
      })
      .then(data=>{
        storeAPI.dispatch({ type: 'db/addressLoaded', payload: data })
      })

    }

  
    return next(action)
  }

  export {fetchDBiddleware}