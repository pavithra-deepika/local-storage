import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
            <input type='text' onChange={(e) => setUser(e.target.value)}/>
            <input type='password' onChange={(e) => setPass(e.target.value)}/>
            <input type='submit' value='login' />
        </form>
    </div>
  )
}

export default Login