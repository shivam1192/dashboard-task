import React,{useState} from 'react';
import {Bar} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
        bar:{
            marginTop:80
        }
}))
export default function Barchart () {
  const classes = useStyles();

    const [data,setData] = useState({
        labels: ['January', 'February', 'March',
                 'April', 'May','sep','oct','nov'],
                 datasets: [
                    {
                      label: 'Rainfall',
                      backgroundColor: '#885bc2',
                      borderColor: '#885bc2',
                      borderWidth: 2,
                      data: [65, 59, 80, 81, 56,23,57,23]
                    },
                    {
                      label: 'Rainfall',
                      backgroundColor: '#c488fc',
                      borderColor: '#c488fc',
                      borderWidth: 2,
                      data: [65, 59, 80, 81, 56,24,14,56]
                    },
                    {
                      label: 'Rainfall',
                      backgroundColor: '#e9d1ff',
                      borderColor: '#e9d1ff',
                      borderWidth: 2,
                      data: [65, 59, 80, 81, 56,13,5,7]
                    }
                  ]
      })
    return (
      <div className={classes.bar}>
        <Bar
          data={data}
          options={{
            legend:{
              display:true,
              position:'top',
              labels:{
                usePointStyle:true
              }
            },
            scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
          }}
        />
      </div>
    );
  }