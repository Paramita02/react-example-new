import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoginPage from './login/LoginPage';


class Header extends Component{
render(){
  return(
    <div>
        
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                <li><Link to={LoginPage}>Login</Link></li>            
                </ul>
            </div>
            </nav>
        
    </div>
   );
 } 
}

export default Header;