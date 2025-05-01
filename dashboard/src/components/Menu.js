import React from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Menu (){
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
          await axios.post('http://localhost:3002/logout', {}, {
            withCredentials: true,
          });
          navigate('/login');
        } catch (err) {
          alert('Logout failed');
        }
      };
    return(
        <div className='menu p-3 d-flex border ' style={{width:"70%"}}>
            <div className='logo ' style={{marginRight:"250px"}}>
                <Link to='/'><img src='media/images/kite-34931.png' style={{width:"100px"}} alt=''></img></Link>
            </div>
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/'}>Dashboard</Link>
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/orders'}>Orders</Link> 
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/holdings'}>Holdings</Link>
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/positions'}>Positions</Link>
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/funds'}>Funds</Link>
            <Link className='me-5 text-decoration-none mt-2' style={{color: "black"}} to={'/bids'}>Bids</Link>
            <button 
            className="btn btn-primary btn-sm" 
            style={{ padding: '2px', fontSize: '14px' }} 
            onClick={handleLogout}
            >
            Log Out
            </button>

        </div>
    )
}