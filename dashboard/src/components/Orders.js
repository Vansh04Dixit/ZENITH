import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const [hoverIndex , setHoverIndex] = useState(null)

//   const handleMouseEnter = ()=>setHoverIndex(index)
//   const handleMouseLeave = ()=>setShowSell(null)

  useEffect(() => {
    axios.get('http://localhost:3002/seeorders').then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Your Orders</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-group shadow-sm rounded">
            {allOrders.length > 0 ? (
              allOrders.map((order, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between text-center" onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(null)}>
                  <span className="fw-bold">{order.name}</span>

                  <div>
                  <span>Quantity:{order.qty} , </span>
                  <span className="fw-bold"> Price:{order.price}</span>
                  </div>
                  
                  {hoverIndex=== index && <ShowAction  />}
                </li>
              ))
            ) : (
              <p className="text-center">No Orders Found</p>
            )}
          </ul>

          <div className="text-center mt-4">
            <Link to="/buyAction">
              <button className="btn btn-success px-4 py-2">Buy Stocks..</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ShowAction = ()=>{
    return(
        <button className="btn btn-danger action-button">
            Sell
        </button>
    )
}