import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function BuyAction() {
    const navigate = useNavigate();
    const [stockName , setStockName] = useState('Tata Consultancy Services (TCS)')
    const [stockQuantity , setStockQuantity] = useState(1);
    const [stockPrice , setStockPrice] = useState(1000);

    function handleBuyClick() {
    axios.post('http://localhost:3002/neworder',{
        name : stockName,
        qty : stockQuantity,
        price : stockPrice,
        mode : 'BUY',
    }).then(()=>{
        navigate('/')
    })}

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 p-4 border rounded shadow-sm bg-light">
                    <h2 className="text-center mb-4">Buy & Invest Instantly</h2>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Enter name of Stock"
                            className="form-control mb-2"
                            name='name'
                            value={stockName}
                            onChange={(e)=>setStockName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Enter Quantity"
                            className="form-control mb-2"
                            name='qty'
                            value={stockQuantity}
                            onChange={(e)=>setStockQuantity(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="form-control"
                            name='price'
                            value={stockPrice}
                            onChange={(e)=>setStockPrice(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <p className="fw-semibold">
                            Margin required: <span className="text-success">&#8377;140.65</span>
                        </p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success w-45" onClick={handleBuyClick}>Buy</button>
                        <Link to={'/'}>
                        <button className="btn btn-outline-secondary w-45">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
