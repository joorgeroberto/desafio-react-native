/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';

export default class App extends Component<Props> {
    render() {
        // Primeiro argumento: Indica os reducers.
        // Segundo argumento: os estados iniciais do app (se quisermos popular email e senha no começo do app passamos aqui).
        // Terceiro argumento: aprimoramentos do store que adicionarão funcionalidades ao store.
        //const store = createStore( reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //<Provider store={store}>
                <Router />
            //</Provider>
        );
    }
}
