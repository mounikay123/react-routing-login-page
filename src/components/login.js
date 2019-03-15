import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../components/home';
class Login extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
          <div>
    <div className="panel panel-body">
        <div className="container">
            <div className="panel">
             
                    <div className="row">
                        <div className="col-md-9 "> <h3 className="login-margin">Login Registered Candidates Only</h3></div>
                        <div className="col-md-3 ">  <Link to="/">
                    <button type="button " className="btn btn-xs btn-success pull-right signUp-mar">Sign Up</button>
                    </Link></div>
                    </div>
                <div className="panel-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                             <div className=" col-md-offset-2  col-md-8">
                                    <form>
                                        <label>UserName</label>
                                        <input type="email" className="form-control"/>
                                        <label>Password</label>
                                        <input type="password" className="form-control"/><br />
                                          <Link to="/home"><input type="submit" value="Submit" /></Link>
                                    </form>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                        )
    }
}
export default Login;