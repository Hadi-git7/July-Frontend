import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const loginNavigate = () => {
    navigate('/login')
  };

  return (
    <div>
      <button onClick={loginNavigate}>Login</button>
    </div>
  )
}

export default Home