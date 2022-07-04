import { Middleware } from "redux";
import {getOrCreateDB} from '../../services/db'

const fetchDBiddleware:Middleware = (storeAPI: any) => (next: any) => (action: any) => {
    if (action.type === 'db/fetchtable') {
      // Make an API call to fetch todos from the server
      
    getOrCreateDB()
    .then(DB=>{
        return DB.list()
    })
    .then(data=>{
        storeAPI.dispatch({ type: 'db/tableLoaded', payload: data })

    })

    }
  
    return next(action)
  }

  export {fetchDBiddleware}