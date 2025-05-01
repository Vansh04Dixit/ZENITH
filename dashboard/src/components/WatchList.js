import React, { useState } from 'react';
import { watchlist } from '../data/data';

export default function WatchList() {
    return (
            <div className='border p-3 mb-3'>
            <h1 className='mb-3 text-muted'><i class="fa-solid fa-square-poll-vertical me-3"></i>Stocks you're ready to take off with.</h1>
            <div className='d-flex align-items-center mb-3'>
                <input 
                    type='text' 
                    className='form-control me-3' 
                    style={{ width: "95%" }} 
                    placeholder='Search eg: infy bse, nifty fut, index fund, etc' 
                    />
                    <span>{watchlist.length}/50</span>
                {/* <button type='submit' className='btn btn-primary'><i className="fa-solid fa-magnifying-glass"></i></button> */}
            </div>

            <ul className='list-group'>
                {watchlist.map((stock, index) => (
                    <WatchListItem stock={stock} key={index} /> 
                ))}
            </ul>
        </div>
    );
}

function WatchListItem({ stock }) {
  const [showAction, setAction] = useState(false);

  const handleMouseEnter = () => setAction(true);
  const handleMouseLeave = () => setAction(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center px-4 py-3 border-0 shadow-sm rounded mb-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: showAction ? '#f8f9fa' : 'white',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Stock Name */}
      <div className={`fw-semibold ${stock.isDown ? 'text-danger' : 'text-success'}`}>
        {stock.name}
      </div>

      {/* Price Change */}
      <div className="d-flex align-items-center">
        
      </div>
      {/* Current Price */}
      <div>
        <span>{stock.percent}</span>
      {stock.isDown ? (
        <i className="fa-solid fa-arrow-down text-danger"></i>
      ) : (
        <i className="fa-solid fa-arrow-up text-success"></i>
      )}
      <span className="text-muted fw-medium" style={{marginLeft:'10px'}}>{stock.price}&#8377;</span>
      </div>
      {showAction && <WatchlistAction uid={stock.name} /> }
    </li>
  );
}

const WatchlistAction = ({ uid }) => {
  return (
      <div className="ms-3 d-flex gap-2">
          <button className="btn btn-warning action-button">
          <i className="fa-solid fa-chart-line"></i>
          </button>

          <button className="btn btn-info action-button">
          <i className="fa-solid fa-info"></i>
          </button>
      </div>
  );
};
