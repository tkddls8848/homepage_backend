import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';
import Dashboard from './layout/dashboard'

class App extends Component {
    render(){
        return (
            <Fragment>
                <Header></Header>
                <div className='container'>
                    <Dashboard></Dashboard>
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));