import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { store } from './features/movies/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}> <App /> </Provider>)