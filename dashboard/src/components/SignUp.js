import React, { use, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {
    const [name , setName] = useState('');
    const [email , setEmail ] = useState('');
    const [pass , setPass] = useState('');
    const navigate = useNavigate();

    function handleSignClick() {
        axios.post('http://localhost:3002/signup',{
            fullName : name,
            email : email,
            password : pass,
    }).then(()=>{
        navigate('/')
    }
    )}


  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Create Zenith Account</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4 shadow bg-light">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder='Ex. JHON DOE'
                value={name}
                required
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder='example@email.com'
                value={email}
                required
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder='jhon@doe123'
                value={pass}
                required
                onChange={(e)=>{setPass(e.target.value)}}
              />
            </div>
            <button type="submit" onClick={handleSignClick} className="btn btn-primary w-100">Sign Up</button>
            <p className='text-center mt-2 text-muted'>If you are existing user then <Link to={'/login'}>Log-In</Link></p>
            <p className='mt-3 text-muted' style={{fontSize:'12px'}}>Zenith Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ0000, CDSL ‐ SEBI Reg. no.| Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ0000 | Smart Online Dispute Resolution | SEBI SCORES</p>
        </div>
      </div>
    </div>
  );
}
