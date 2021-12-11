import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import DynamicComponent from './component/DynamicComponent';
import {BrowserRouter,Link,Route,Router,Routes} from 'react-router-dom';
import ComponentA from './component/compA/ComponentA';
import ComponentB from './component/compB/ComponentB';
import ComponentC from './component/compC/ComponentC';
//import Home from './component/Home';
import LoginPage from './component/login/LoginPage';
import SuccessPage from './component/success/SuccessPage';
import FailurePage from './component/failure/FailurePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserForm from './component/UserForm';
import RouterPage from './component/RouterPage';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';

function App(){
    let flag = true;
    return (
    
      <div className="App" >
       <LoginPage/>
      </div>
    );
  }
  

export default App;

// Redux
/*
const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
    
      <div className="App" >
              <h1>Counter: {counter}</h1>
		          <button onClick={()=>dispatch(increment())}>Increment(+)</button>
              
		          <button onClick={()=>dispatch(decrement())}>Decrement(-)</button>
      </div>
    );
*/
//--------------------------------------------------------

// For conditional Rendering
/*
return (
    
      <div className="App" >
         
         <BrowserRouter>
            <RouterPage/>
        </BrowserRouter>        

        </div>
    );
*/
//-----------------------------------------------
// Creating changing radio button components 
/*
const [user,changeUser] =useState("AboutUs");
      <DynamicComponent user = {user} />
      <input type="radio" id="html" name="component" value="AboutUs" onChange={()=>changeUser('AboutUs')} defaultChecked/>
      <label for="about-us">About Us</label>  
      <input type="radio" id="html" name="component" value="Home" onChange={()=>changeUser('Home')} />
      <label for="home">Home</label>  
*/
//-------------------------------------------

//Creating different user components
/*

const [user,changeUser] =useState("usera");
<DynamicComponent user = {user} />
      <button onClick={()=> changeUser('usera')}>Switch to User A</button>
      <button onClick={()=> changeUser('userb')}>Switch to User B</button>
    
*/
//----------------------------------------------
//Routing rendering example
/*
 <BrowserRouter>
        <nav>
          <ul class='nostyle'>
            <li><Link to ="/compA">Component A</Link></li>
            <li><Link to ="/compB">Component B</Link></li>
            <li><Link to ="/compC">Component C</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/compA" element = {<ComponentA/>}/>
          <Route path="/compB" element = {<ComponentB/>}/>
          <Route path="/compC" element = {<ComponentC/>}/>
        </Routes>
      </BrowserRouter>
*/
