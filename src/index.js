import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import middleware from './store/middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
, document.getElementById('root')
);
