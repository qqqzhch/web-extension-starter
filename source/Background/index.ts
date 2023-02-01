/// <reference lib="webworker" />
//@ts-ignore
globalThis=self;
declare var globalThis: ServiceWorkerGlobalScope;
import { browser } from "webextension-polyfill-ts";
import 'emoji-log';

console.log('globalThis',globalThis)




browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
});



