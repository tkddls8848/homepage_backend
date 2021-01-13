import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';
import Dashboard from './leads/dashboard'
import Alerts from './layout/alert'

import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {Provider} from 'react-redux'
import store from '../store'

//Alert Options
const alertOptions = {
    time : 300,
    position : 'top center'
}

class App extends Component {
    render(){
        return (
            <Provider  store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header></Header>
                        <Alerts></Alerts>
                        <div className='container'>
                            <Dashboard></Dashboard>
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));