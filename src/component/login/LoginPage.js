import React, { useState } from 'react';
import {BrowserRouter,Link,Route,Router,Routes} from 'react-router-dom';
import FailurePage from '../failure/FailurePage';
import SuccessPage from '../success/SuccessPage';
import PropTypes from 'prop-types';

function LoginPage({ setToken }) {

    const[username,setUsername] = useState();
    const[password,setPassword] = useState();

    return (
        <div>
            <h2>Login Page</h2>
            <form>
            <label>USERNAME:<input type='text' id='username' className='userName' onChange={(e)=>setUsername(e.target.value)}/></label>
            <br></br>
            <label>PASSWORD:<input type='password' id='pwd' className='passWord' onChange={(e)=>setPassword(e.target.value)}/></label><br></br>
            <button type='submit'>Submit</button>
            </form>
            
        </div>
    );
}

export default LoginPage;
