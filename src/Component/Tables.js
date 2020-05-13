import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import {APIcallContext} from '../Context/APIcall'

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  tablecont:{
    maxHeight: 360
  }
});


export default function Tables() {
  const classes = useStyles();
  const {data1,data2} = useContext(APIcallContext)
  return (
    <div>
    {data2.length?
      <div>
      <TableContainer component={Paper} className={classes.tablecont}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Order</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map(row => (
            <TableRow key={row.product}>
              <TableCell component="th" scope="row">
                <MobileFriendlyIcon fontSize="small"/>
              </TableCell>
              <TableCell align="right">{row.orderDate}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right"> <EditIcon fontSize="small"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      :<div>Loading...</div>}
      </div>
  );
}
