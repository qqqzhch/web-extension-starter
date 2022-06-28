import { Middleware } from "redux";
require('isomorphic-fetch');

const fetchTokenMiddleware:Middleware = (storeAPI: any) => (next: any) => (action: any) => {
    if (action.type === 'tokens/fetchToken') {
      // Make an API call to fetch todos from the server
    fetch('https://app.tryroll.com/tokens.json')
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        storeAPI.dispatch({ type: 'tokens/tokensLoaded', payload: data })

    })

    }
  
    return next(action)
  }

  export {fetchTokenMiddleware}