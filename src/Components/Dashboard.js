import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  useEffect( () =>  {

    if(!!! localStorage.getItem("isAuthenticated", true)){
      navigate('/login')
      
    }

  },[navigate])
  // !!! used to suppose define , undefine pannama iruntha athu true, false matha use pannurom
  return (
    <div>Welcome to User</div>
  )
}

export default Dashboard