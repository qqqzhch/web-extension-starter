/// <reference lib="webworker" />
//@ts-ignore
globalThis=self;
declare var globalThis: ServiceWorkerGlobalScope;
import { browser } from "webextension-polyfill-ts";
import 'emoji-log';


browser.runtime.onConnect.addListener(function(port) {
  console.log(port.name)
  port.onMessage.addListener(function(msg) {
    console.log(msg)
    if (msg.joke === "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer === "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer === "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});

browser.runtime.onConnectExternal.addListener(function(port) {
  console.log(port.name)
  port.onMessage.addListener(function(msg) {
    console.log(msg)
    if (msg.joke === "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer === "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer === "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
});



