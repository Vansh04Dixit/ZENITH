import React  from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios'
// import { VerticalGraph } from './VerticalGraph';

export default function Holdings() {
  const [allholdings , setallholdings] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3002/allholdings', {withCredentials: true}).then((res)=>{
      setallholdings(res.data);
    })
  }, [])

//   const labels = allholdings.map((subArray) => subArray['name']);

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Stock Name',
//       data: allholdings.map((stock) => stock.price),
//       // backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  
  
  return (
    <>
      <div className='main mt-5 mb-4' style={{width:"90%", marginLeft:'75px'}}>
      <h3 className="title">Holdings ({allholdings.length})</h3>

      <div className="order-table">
        <table className="table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            {allholdings.map((stocks , index)=>{
                let currStocksValue = stocks.price * stocks.qty;
                let isProfit = currStocksValue - stocks.avg * stocks.qty >= 0.0;
                let profitClass = isProfit ? "text-success" : "text-danger";
                let dayClass = stocks.isLoss ? "text-danger" : "text-success";
                
                return(
                    <tr key={index}>
                        <td>{stocks.name}</td>
                        <td>{stocks.qty}</td>
                        <td>{stocks.avg}</td>
                        <td>{stocks.price}</td>
                        <td>{currStocksValue}</td>
                        <td className={profitClass}>
                            {(currStocksValue - stocks.avg * stocks.qty).toFixed(2)}
                        </td>
                        <td className={profitClass}>{stocks.net}</td>
                        <td className={dayClass}>{stocks.day}</td>
                    </tr>
                );
            })}
          </thead>
          <tbody>
            <tr>
              <td>Stock Name</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td className="text-success">0.00</td>
              <td className="text-success">+0%</td>
              <td className="text-success">+0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row text-center mt-4">
        <div className="col">
          <h5>29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className="text-success">1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      </div>
      {/* <VerticalGraph data={data} /> */}
    </>
  );
}
