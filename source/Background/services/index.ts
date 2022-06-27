import {emitter} from "./event"
import browser from "webextension-polyfill"

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
  
  
  function handleAlarm(alarmInfo:{
    name:string
  }) {
      console.log("on alarm: " + alarmInfo.name);
      emitter.emit(Jobname,'+1')
    }
    
    browser.alarms.onAlarm.addListener(handleAlarm);

}

