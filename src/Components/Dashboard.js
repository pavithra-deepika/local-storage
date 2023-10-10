import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  '../App.css'


function Dashboard() {
  const navigate = useNavigate()
  useEffect( () =>  {

    if(!!! localStorage.getItem("isAuthenticated", true)){
      navigate('/login')
      
    }

  },[navigate])
  // !!! used to suppose define , undefine pannama iruntha athu true, false matha use pannurom
  return (
    <div>
      <h1> Welcome to user</h1>
      </div>
  )
}

export default Dashboard