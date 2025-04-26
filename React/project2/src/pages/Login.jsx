import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    function handleSubmit(event){
        let loginObj={
            username,
            password,
        };
        axios
        .post("https://fakestoreapi.com/auth/login",loginObj)
        .then((res)=>{
            console.log(res);
            if (res.status===200){
                alert("Login Successfull!");
                navigate("/");
                //store the token in the local storage of the browser
                const token = res.data.token;
                localStorage.setItem("token", token);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        // "username": "johnd",
        // "password": "m38rmF$",
        console.log(loginObj);
        event.preventDefault();
    }
  return (
    <div>
      <form className='login-form'>
        <h2>Login</h2>
        <div>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username'name='username'onChange={(e)=>{
                setUsername(e.target.value);
            }}
            />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password'onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
        </div>
        <div>
            <button onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login



//http status codes