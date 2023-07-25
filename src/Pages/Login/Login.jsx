import { React, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
  let navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/api/user/login',
        {
          email: email,
          password: password
        });

      localStorage.setItem('token', response.data.token);

      navigate('/dashboard')
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='login-container'>
      <form onSubmit={handleLogin} className='login-form'>
        <label htmlFor='email'>
          Please enter your Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' id='email' required />
        </label>
        <label htmlFor='password'>
          Please enter your Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password' required />
        </label>
        <button onClick={handleLogin}>Login</button>

      </form>
    </div>
  )
}

export default Login