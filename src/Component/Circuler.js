import React,{useContext}from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import {APIcallContext} from '../Context/APIcall'


const useStyles = makeStyles(theme => ({
    circuler:{
        width:'50%',
        marginTop:50,
        paddingBottom:30
    }
}))

export default function Circuler(){
  const classes = useStyles();
  const {data1,data2} = useContext(APIcallContext)
    const percentage = 50;
 return(
<div>
<CircularProgressbar value={percentage} text={`${percentage}%`}  strokeWidth={5} className={classes.circuler}/>;

    </div>
 )
}