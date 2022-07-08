import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';

import Popup from './Popup';

console.log('store 1')
const store = new Store();
console.log('store 2',store)
// wait for the store to connect to the background page
store.ready().then(() => {
    // The store implements the same interface as Redux's store
    // so you can use tools like `react-redux` no problem!
    console.log('store',store)
    ReactDOM.render(
      <Provider store={store}>
        <Popup />
      </Provider>
      , document.getElementById('popup-root'));
  });

// ReactDOM.render(<Popup />, document.getElementById('popup-root'));
