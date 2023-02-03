import * as React from 'react';
import {browser, Tabs} from 'webextension-polyfill-ts';

import './styles.scss';

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({url});
}
// let port = browser.runtime.connect(browser.runtime.id)
// browser.runtime.connect()
// Runtime.ConnectConnectInfoType
let PORT_EXTENSION = "abc-pop"
async function test() {
  //https://stackoverflow.com/questions/74224782/background-page-runs-but-popup-says-you-do-not-have-a-background-page-when-u
  
  
  const port = chrome.runtime.connect({ name: PORT_EXTENSION });  
  port.onMessage.addListener(function(msg) {
    console.log(msg)
  });
  port.onDisconnect.addListener((msg)=>{
  console.log('onDisconnect',msg)
  })
  
}
test()

const Popup: React.FC = () => {
  
  
  return (
    <section id="popup">
      <h2>WEB-EXTENSION-STARTER</h2>
      <button
        id="options__button"
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          
          return openWebPage('options.html');
        }}
      >
        Options Page
      </button>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          // port.postMessage({joke: "Knock knock"});
          
        }}
      >
        msg2
      </button>
      <div className="links__holder">
        <ul>
          <li>
            <button
              type="button"
              onClick={(): Promise<Tabs.Tab> => {
                return openWebPage(
                  'https://github.com/abhijithvijayan/web-extension-starter'
                );
              }}
            >
              GitHub
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={(): Promise<Tabs.Tab> => {
                return openWebPage(
                  'https://www.buymeacoffee.com/abhijithvijayan'
                );
              }}
            >
              Buy Me A Coffee
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Popup;
