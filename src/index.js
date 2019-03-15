import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css'; 
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
export class AppRoue extends React.Component {
    render() {
        return (
            <App />
        )
    }
};

const RootApp = withRouter(App);

ReactDOM.render(
    <Router>
        <RootApp />
    </Router>
    , document.getElementById('root'));


