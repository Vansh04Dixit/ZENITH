import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

export default function Login() {
    const [name , setName] = useState('Vansh Dixit')
    const [pass , setPass] = useState('')
    const navigate = useNavigate()

    const handleLogin = async ()=>{
        try{
            const response = await axios.post('http://localhost:3002/login',{
                fullName : name,
                pass : pass,
            }, {withCredentials: true})
    
            if(response.status === 200){
                navigate('/')
            }
        }catch(err){
            const message = err.response?.data;

            if(message === 'User not found'){
                alert('User does not exist , Redirecting to Sign-Up');
                navigate('/signup')
            }
            if(message === 'Incorrect Password'){
                alert('Password is Incorrect');
            }
            else{
                alert('Login failed , Try again..')
            }
        }
    }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Log In to Zenith</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 border rounded shadow-sm bg-light">

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. JOHN DOE"
              required
              name='fullName'
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your password"
              name='pass'
              required
              onChange={(e)=>{setPass(e.target.value)}}
            />
          </div>

          <button className="btn btn-primary w-100" onClick={handleLogin}>Log In</button>
          <p className="mt-3 text-muted" style={{ fontSize: '12px' }}>
            New to Zenith? <Link to="/signup">Sign up here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
