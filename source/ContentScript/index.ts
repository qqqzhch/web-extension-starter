// import {browser, Tabs} from 'webextension-polyfill-ts';
let PORT_EXTENSION = "abc-content"
console.log('helloworld from content script');
const port = chrome.runtime.connect({ name: PORT_EXTENSION });  
  port.onMessage.addListener(function(msg) {
    console.log(msg)
});
  port.onDisconnect.addListener((msg)=>{
    console.log('onDisconnect',msg)
})

export {};
