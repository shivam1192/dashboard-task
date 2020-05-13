import React,{useState} from 'react';
import {Line} from 'react-chartjs-2';


export default function Linechart () {
    const [data,setData] = useState({
        labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '#885bc2',
      borderColor: '#885bc2',
      borderWidth: 3,
      data: [65, 59, 80, 81, 56],
      pointRadius:0
    },
     {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '#59eeff',
      borderColor: '#59eeff',
      borderWidth: 3,
      data: [61, 52, 84, 86, 46],
      pointRadius:0
    }
  ]
      })
    return (
      <div>
         <Line
          data={data}
          options={{
            legend:{
              display:true,
              position:'top',
              labels:{
                usePointStyle:true
              }
            }
          }}
        />
      </div>
    );
  }