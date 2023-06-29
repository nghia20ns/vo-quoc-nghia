import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Signup = () => {
    const imageAVT ={
        width:'200px',
        height:'200px'
      }
      const btnLogin = {
        width:'100%'
      }
      const textLogin={
        color: '#ffffff',
        float:'center'
      }
    
    return (
        <form action='user'>
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
            <label htmlFor="psw">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="repws"
              required=""
            />

            <button type="" >SignUp</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
              Remember me
            </label>
            <hr/>
            <Link to={"/"} className='btn btn-info' style={btnLogin}><p style={textLogin}><b>Login</b></p></Link>

          </div>
        </form>    
    );
        
};

export default Signup;