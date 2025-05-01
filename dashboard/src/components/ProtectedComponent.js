import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedComponent({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/check-auth', { withCredentials: true })
      .then(res => {
        if (!res.data.loggedIn) {
          navigate('/login');
        }
      }).catch(() => {
        navigate('/login');
      });
  }, []);

  return <>{children}</>; 
}
