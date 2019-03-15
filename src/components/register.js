import React, { Component } from 'react';
import firebase from '../firebase';
import { Route , Switch ,Link} from 'react-router-dom';
import './main.css';
import md5 from 'md5';
import Login from '../components/login';
class Register extends Component {
    state = {
        userName: '',
        emailId: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        errors: [],
        usersRef: firebase.database().ref('users')
    }
    isFormEmpty = ({ userName, emailId, lastName, password, confirmPassword }) => {
        return !userName.length && !emailId.length && !lastName.length && !password.length && !confirmPassword.length;
    }
    isPassWordValid = (password, confirmPassword) => {
        if (!password.length > 6 && !confirmPassword.length > 6) {
            return false;
        }
        else if (password !== confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    }
    isFormValid = () => {
        let error;
        let errors = [];
        if (this.isFormEmpty(this.state)) {
            error = { message: "Fill all the details" }
            this.setState({ errors: errors.concat(error) });
            return false
        }
     else if (this.isPassWordValid(this.state)) {
      error = { message: "please check password" }
      this.setState({ errors: errors.concat(error) });
      return false
    }
    else{
        return true;
    }
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    submitHandler = event => {
        event.preventDefault()
        // console.log(this.state.userName, this.state.emailId, this.state.lastName, this.state.password, this.state.confirmPassword);
        if (this.isFormValid()) {
            this.setState({ error: [] })
             firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
        .then((createdUser) => {
          createdUser.user.updateProfile({
            displayName: this.state.username,
            photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
          })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved")
             this.setState({userName:'' , emailId: '',  lastName: '',
         password: '',
         confirmPassword: '',})
        console.log("this.props.history" , this.props.history);
         this.props.history.push('/login')
                
              })
                .catch(err => {
                 this.setState({errors:this.state.errors.concat(err)})
                })
            })
        })
        .catch(err => {
          this.setState({errors:this.state.errors.concat(err)})
        })
        }
    }
      saveUser = userData => {
    return this.state.usersRef.child(userData.user.uid).set({
      name: userData.user.displayName,
      avatar: userData.user.photoURL
    })
  }
    render() {
        const { userName, emailId, lastName, password, confirmPassword } = this.state
        return (
            <div>
                <div>
                     <legend>Register</legend>
                     <Link to="/Login" ><button type="button " className="btn btn-xs btn-primary" >
                         SignIn</button></Link>
                </div>
               
                <div className="container register-form"  >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-3"></div>
                            <div className="col-md-8">
                                <form onSubmit={this.submitHandler}>
                                    <div className="col-md-2">
                                        <span>UserName</span>
                                    </div>
                                    <div className="col-md-10">
                                        <input type="text"
                                            name="userName"
                                            className="form-control"
                                            placeholder="Enter User name"
                                            onChange={this.handleChange}
                                            value={userName} />
                                    </div>
                                    <br />
                                    <div className="col-md-2">
                                        <span>Email Id</span>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control"
                                            type="email"
                                            placeholder="email"
                                            name="emailId"
                                            onChange={this.handleChange}
                                            value={emailId}
                                        /><br />
                                    </div>
                                    <div className="col-md-2">
                                        <span>LastName</span>
                                    </div>
                                    <div className="col-md-10">
                                        <input type="text"
                                            className="form-control"
                                            name="lastName"
                                            placeholder="Enter lastName"
                                            onChange={this.handleChange}
                                            value={lastName}
                                        /></div>
                                    <br />
                                    <div className="col-md-2">
                                        <span>Password</span></div>
                                    <div className="col-md-10">
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter password"
                                            onChange={this.handleChange}
                                            value={password} />
                                    </div>
                                    <br />
                                    <div className="col-md-2">
                                        <span>confirmpassword</span>
                                    </div>
                                    <div className="col-md-10">
                                        <input type="password"
                                            className="form-control"
                                            placeholder="Enter Confirm password"
                                            name="confirmPassword"
                                            onChange={this.handleChange}
                                            value={confirmPassword} />
                                    </div>
                                    <br />
                                    <input type="submit" value="submit"  />
                                    

                                </form>
                                 {
          this.state.errors.length>0 &&  this.state.errors.map((error,i)=><p key={i} className="error" style={{color:'red'}}>{error.message}</p>)
        }
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Register;