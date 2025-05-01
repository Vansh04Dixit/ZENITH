import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";

const Positions = () => {

  const [allPositionsData , setAllPositionsData ] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3002/allpositions' , {withCredentials: true}).then((res)=>{
      setAllPositionsData(res.data);
    })
  }, [])

  return (
    <>
    <div className="main fs-6 mt-5 mb-5" style={{marginLeft:"480px"}}>
      <h3 className="title">Positions ({allPositionsData.length})</h3>
      <div className="order-table">
        <table className="mt-3">
          <tbody>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositionsData.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-success" : "text-danger";
            const dayClass = stock.isLoss ? "text-danger" : "text-success";

            return (
              <tr key={index} className="border-bottom">
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Positions;