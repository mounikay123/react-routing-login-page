import React, { Component } from 'react';
import { Route , Switch ,Link} from 'react-router-dom';
import logo from '../components/default-user.png';
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light padding-non">
        <div className="col-md-12 padding-non" href="#">
          <div className="row">
              <div className="col-md-3 col-xs-1 side-pad in" id="sidebar">
                <div className="list-group panel">
                  <a href="#menu1" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><img className="logo-imag" src={logo} alt="Logo"  /> </a>

                  <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                  <a href="#menu3" className="list-group-item collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-book"></i> <span className="hidden-sm-down">Item 3 </span></a>
                  <div className="collapse" id="menu3">
                    <a href="#" className="list-group-item" data-parent="#menu3">3.1</a>
                    <a href="#menu3sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">3.2 </a>
                    <div className="collapse" id="menu3sub2">
                      <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 a</a>
                      <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 b</a>
                      <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 c</a>
                    </div>
                    <a href="#" className="list-group-item" data-parent="#menu3">3.3</a>
                  </div>
                  <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-heart"></i> <span className="hidden-sm-down">Item 4</span></a>
                  <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-list"></i> <span className="hidden-sm-down">Item 5</span></a>
                  <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-clock-o"></i> <span className="hidden-sm-down">Link</span></a>
                  <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i className="fa fa-th"></i> <span className="hidden-sm-down">Link</span></a>
                  
                </div>
              </div>
              <div className="col-md-9 col-xs-11 side-pad2">
                 <span className="pull-left menu-sty" ><i className="fa fa-bars icon-sty"></i>Menu</span>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                  </ul>
                  <strong><button className="btn btn-link" data-toggle="modal" data-target="#myModal" href="/login">Register / log in</button></strong>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg mod-sty"   >
      <div className="modal-content back-colr-modal">
      <div className="modal-header">
          <span className="float-left"><b class="Sign-sty">Sign in to continue</b></span>
             <span className="float-right">Not a member yet? <a className="register"  ><Link to="/"><b>Register now</b></Link ></a></span>
          {/*<button type="button" className="close" data-dismiss="modal">&times;</button>*/}
        </div>
          <div className="modal-body mod-body-pad" >
         <form>
        <div className="form-group"> 
        <input type="text"  class= "form-control input-lg register-inp" placeholder="Email or Username" />
        </div>
         <div className="form-group"> 
          <input type="text" class= "form-control input-lg register-inp" placeholder="Password" />
          </div>
          <div className="form-group pull-left"> 
          <input type="checkbox"  /><span className="keep-colr">Keep me Logged in</span>
          </div>
           <div className="form-group"> 
             <Link to="/login">
<button type="submit" className="button  btn btn-lg form-control  register-inp2 text-uppercase">Login now</button></Link>
          </div>
          <div className="form-group">
            <a className="forgot-pwd">Forgot your password</a>
          </div>
            <div className="form-group">
         <h5 className="text-left">Or Sign In With</h5>
          </div>
          </form>
           
     
        </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
        
      </div>
    </div>
  </div>
  
       
                </div>
                <hr  calss="line-top"/>
              </div>
             

            </div>
   </div>


        </nav>
      </div>
    )
  }
}
export default Header;