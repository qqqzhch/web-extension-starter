import { Middleware } from "redux";
import {getOrCreateDB} from '../../services/db'

const fetchDBiddleware:Middleware = (storeAPI: any) => (next: any) => (action: any) => {
    if (action.type === 'db/fetchArtblock') {
      // Make an API call to fetch todos from the server
      
    getOrCreateDB()
    .then(DB=>{
        return DB.artlist()
    })
    .then(data=>{
        storeAPI.dispatch({ type: 'db/artblockLoaded', payload: data })

    })

    }
  
    return next(action)
  }

  export {fetchDBiddleware}