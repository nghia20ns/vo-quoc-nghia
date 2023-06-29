import React from 'react';
import './Login.css'
import User from './User';
import { Link } from 'react-router-dom';
const Login = () => {
  const imageAVT ={
    width:'200px',
    height:'200px'
  }
  const btnSignup = {
    width:'100%'
  }
  const signleLogin = event =>{
    event.preventDefault()
    
}
    return (
    <form action='user' onSubmit={signleLogin}>
      <div className="imgcontainer">
        <img src="https://www.shutterstock.com/image-vector/people-icon-vector-person-sing-260nw-707883430.jpg" alt="Avatar" className="avatar" style={imageAVT}/>
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required="" />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
        />
        <button type="" className='btn btn-success' >Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          Remember me
        </label>
        <hr/>
        <Link to={"signup"} className='btn btn-info' style={btnSignup}>Signup</Link>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>

    </form>    
  );
};

export default Login;