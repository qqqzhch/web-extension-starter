import 'emoji-log';
import {browser} from 'webextension-polyfill-ts';
import {wrapStore} from 'webext-redux';

import { store,RootState,AppDispatch } from "./store/index"

wrapStore(store);

export type BackgroundDispatch =  AppDispatch;

export type  { RootState }

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
});
