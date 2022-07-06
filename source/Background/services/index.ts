import {emitter} from "./event"
import browser from "webextension-polyfill"
import {getBlance,getList} from './contract'

import {getOrCreateDB} from './db'

//import browser, { Alarms } from "webextension-polyfill-ts"

//need start stop


const periodInMinutes = 2;
const Jobname="incrementJob"


export {Jobname}


export  function startService(){
  console.log('browser',browser)
  browser.alarms.create(Jobname, {
    periodInMinutes
  });
  
  
  
  let jopmap=new Map<String,(alarmInfo:{
    name:string
  })=>void>();
  
  
  
  jopmap.set(Jobname,handleAlarm)
  
  
  async function handleAlarm(alarmInfo:{
    name:string
  }) {
      console.log("on alarm: " + alarmInfo.name);
      let db = await getOrCreateDB();
      let useraddress = await db.getaddress();
      if(useraddress!=null){
        let Blance = await getBlance(useraddress)
        let tokenlist = await getList(useraddress)
        console.log('Blance',Blance)
        console.log('tokenlist',tokenlist)
        //['95000562', '95000549', '95000835']
      
        let result = await db.addaddartList(tokenlist,useraddress)
        console.log('add nft list',result)
      }
      


      //https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_384,q_auto/https://artblocks-mainnet.s3.amazonaws.com/95000562.png

      emitter.emit(Jobname,'+1')
    }
    
    browser.alarms.onAlarm.addListener(handleAlarm);

}

