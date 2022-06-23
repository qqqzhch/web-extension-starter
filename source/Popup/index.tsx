import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';

import Popup from './Popup';


const store = new Store();

// wait for the store to connect to the background page
store.ready().then(() => {
    // The store implements the same interface as Redux's store
    // so you can use tools like `react-redux` no problem!
    ReactDOM.render(
      <Provider store={store}>
        <Popup />
      </Provider>
      , document.getElementById('popup-root'));
  });

// ReactDOM.render(<Popup />, document.getElementById('popup-root'));
