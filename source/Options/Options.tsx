import * as React from 'react';

import './styles.scss';
let PORT_EXTENSION = "abc-opt"
const port = chrome.runtime.connect({ name: PORT_EXTENSION });

const Options: React.FC = () => {
  React.useEffect(()=>{
    port.onMessage.addListener(function(msg) {
      console.log(msg)
    });

  })
  
  return (
    <div>
      <form>
        <p>
          <label htmlFor="username">Your Name</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            spellCheck="false"
            autoComplete="off"
            required
          />
        </p>
        <p>
          <label htmlFor="logging">
            <input type="checkbox" name="logging" /> Show the features enabled
            on each page in the console
          </label>

          <p>cool cool cool</p>
        </p>
        <button
        id="options__button"
        type="button"
        onClick={() => {
          port.postMessage({joke: "Knock knock"});
          
        }}
      >
        msg
      </button>
      </form>
    </div>
  );
};

export default Options;
