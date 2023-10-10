import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  '../App.css'

function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user === "test" && pass === "test"){
          localStorage.setItem("isAuthenticated", true);
          navigate("/dashboard")
        }


    }
   

    
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
      <h1> Login </h1>
            <input type='text' onChange={(e) => setUser(e.target.value)}/> <br />
            <input type='password' onChange={(e) => setPass(e.target.value)}/>
            <button type='submit' value='login'>Submit</button>
        </form>
    </div>
  )
}

export default Login