import React from 'react';
import { Routes, Route } from "react-router-dom";
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Bids from './Bids';
import BuyAction from './BuyAction';
import ProtectedComponent from './ProtectedComponent';

export default function Dash(){
    return(
        <>
        <Routes>
            <Route path='/' element={<ProtectedComponent><Summary /></ProtectedComponent>} />
            <Route path='/orders' element={<ProtectedComponent><Orders /></ProtectedComponent>} />
            <Route path='/holdings' element={<ProtectedComponent><Holdings /></ProtectedComponent>} />
            <Route path='/positions' element={<ProtectedComponent><Positions /></ProtectedComponent>} />
            <Route path='/funds' element={<ProtectedComponent><Funds /></ProtectedComponent>} />
            <Route path='/bids' element={<ProtectedComponent><Bids /></ProtectedComponent>} />
            <Route path='/buyaction' element={<ProtectedComponent><BuyAction /></ProtectedComponent>} />
        </Routes>
        <WatchList />
        </>
    )
}