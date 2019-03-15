import React, { Component } from 'react';
import { Route , Switch ,Link} from 'react-router-dom';
import Register from '../components/register';
import Login from '../components/login';
import Home from '../components/home';

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact={true} path="/" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    
                </Switch>
            </React.Fragment>

        )

    }
}
export default Router;