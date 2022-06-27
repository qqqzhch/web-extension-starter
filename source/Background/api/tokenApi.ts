import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// 这个方案不行， pop和bc是分开的
type Token ={
    name:string,
    address:string,
    symbol:string,
    decimals:number,
    chainId:number,
    logoURI:string
}
//https://app.tryroll.com/tokens.json
export const TokenApi = createApi({
    reducerPath: 'TokenApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://app.tryroll.com/',
    }),
    tagTypes: ['Token'],
    endpoints: (build) => ({
      getToken: build.query<Token[],void>({
        // note: an optional `queryFn` may be used in place of `query`
        query: () => ({ url: `tokens.json` }),
        // Pick out data and prevent nested properties in a hook or selector
        transformResponse: (response: { data: {tokens:Token[]} }) => response.data.tokens,
        
        
        
        
      }),
    }),
  })

  export let getToken = TokenApi.endpoints.getToken.useQuery
  
  

  