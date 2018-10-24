import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import reducer from './store/reducers';
import middleware from './store/middleware';

import 'semantic-ui-css/semantic.min.css';

const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root')
);
