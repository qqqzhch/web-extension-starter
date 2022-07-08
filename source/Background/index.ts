import 'emoji-log';
import browser from 'webextension-polyfill';
import {wrapStore} from 'webext-redux';

import { store,RootState,AppDispatch } from "./store/index"

import {startService,Jobname} from './services/index'

import {emitter} from './services/event'
import {increment} from './store/counterSlice'

import {channel,providerbridge} from  './services/provider-bridge'

import {addnft} from './store/nftSlice'

import {getOrCreateDB} from './services/db'
console.log('---2')
wrapStore(store);
console.log('---3')
export type BackgroundDispatch =  AppDispatch;

export type  { RootState }

browser.runtime.onInstalled.addListener(async (): Promise<void> => {
  console.emoji('🦄', 'extension installed');
  startService();
  emitter.on(Jobname, (data:string) => {
    console.log(data)
    store.dispatch(increment())
  });
  emitter.on(channel, (data:any) => {
    console.log('channel',data)
    if(data.site== "opensea"){
      store.dispatch(addnft(data))
      console.log(store.getState())

    }
  });
  let db = await getOrCreateDB();
  let bridge = new providerbridge(db);
  console.log(bridge)



});
