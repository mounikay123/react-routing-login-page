import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../components/header';
class Home extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div>
                <Header />
           
            </div>
        )
    }
}
 export default  Home;