import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import chat from "./reducers";
let store = createStore(chat);

it('renders components no issues', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
});
