import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import configureStoreFunction from './store/configureStore'
import { getUsersSaga } from "./sagas/saga";


const store = configureStoreFunction();
store.runSaga(getUsersSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);