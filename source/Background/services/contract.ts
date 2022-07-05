const  Contract = require('web3-eth-contract');

import jsonInterface from './abi/artblock.json'
import nftconfig from './nftconfig'


Contract.setProvider('https://eth-mainnet.alchemyapi.io/v2/_-mMjxdfTD-C6NBe24iwXsLFelLocsei');

var contract = new Contract(jsonInterface, nftconfig.artblock);

export {contract}

export async function getBlance(address:string):Promise<any>{
    console.log('contract',contract)
    let result = await contract.methods.balanceOf(address).call()
    return result

}

export async function getList(address:string) :Promise<any> {
    let blance = await getBlance(address)
    let list=[];
    for (let index = 0; index < blance; index++) {
        let tokenID = await contract.methods.tokenOfOwnerByIndex(address, index).call()
        list.push(tokenID)
    }
    return list
    

}


/**
 * tokenOfOwnerByIndex(owner, index)

tokenByIndex(index)
 * **/
