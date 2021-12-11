import React, { useState } from 'react';
import {BrowserRouter,Link,Route,Routes,useRoutes} from 'react-router-dom';
import FailurePage from '../failure/FailurePage';
import SuccessPage from '../success/SuccessPage';
import PropTypes from 'prop-types';
import RouterPage from '../RouterPage';
import Home from '../Home';
import ComponentA from '../compA/ComponentA';
import ComponentB from '../compB/ComponentB';
import ComponentC from '../compC/ComponentC';


function LoginPage(props) {

    const [state,setState] = useState(false);


    let isValid = false;
    
    //const [state,setState] = useState(false);

    const onSubmit =() =>{
        setState(true);
    }

    
    return (
        
        <div>
            
            <h2>Login Page</h2>
            <form onSubmit={()=>{<SuccessPage/>}}>
            <label>USERNAME:<input type='text' id='username' className='userName' /></label>
            <br></br>
            <label>PASSWORD:<input type='password' id='pwd' className='passWord' /></label><br></br>
            <input type='submit' value='Submit'/>  
            </form> 
           
            
     
        </div>
                                        
    );
}

export default LoginPage;


/*
 <nav>
                <ul class='nostyle'>
                    <li><Link to ={strPath}>Log In</Link></li>
                    
                </ul>
                </nav>
                <Routes>
                <Route path={strPath} element = {<strComp/>}/>                
                </Routes>
            
*/