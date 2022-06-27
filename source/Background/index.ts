import 'emoji-log';
import browser from 'webextension-polyfill';
import {wrapStore} from 'webext-redux';

import { store,RootState,AppDispatch } from "./store/index"

import {startService,Jobname} from './services/index'

import {emitter} from './services/event'
import {increment} from './store/counterSlice'


wrapStore(store);

export type BackgroundDispatch =  AppDispatch;

export type  { RootState }

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
  startService();
  emitter.on(Jobname, (data:string) => {
    console.log(data)
    store.dispatch(increment())
  });

});
