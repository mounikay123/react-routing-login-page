import React, { Component } from 'react';
import Register from './components/register';
import Router from './components/routing';
import firebase from './firebase'
import './App.css';

class App extends Component {
  componentDidMount(){
    firebase.auth().onAuthStateChanged(users=>{
        console.log("che.b",users)
        if(users){
            this.props.history.push('/')
            sessionStorage.setItem("users",JSON.stringify(users))
        }else{
            this.props.history.push('/login')
        }
    })
}
  render() {
    console.log(this.props)
    return (
      <div className="App">
<Router />
      </div>
    );
  }
}

export default App;
