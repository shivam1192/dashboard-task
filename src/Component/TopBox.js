import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import Typography from '@material-ui/core/Typography';
import {APIcallContext} from '../Context/APIcall'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:70
  },
  box:{
    display:'flex'
  },
  paisa:{
      marginLeft:'30%'
  }
}));

export default function TopBox() {
  const classes = useStyles();
  const {data1,data2} = useContext(APIcallContext)
  console.log(data1)
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}><div className={classes.box}><MonetizationOnIcon style={{ fontSize: 80, color: '#8AC7DB'}}/>
          <Typography variant="body1" className={classes.paisa}>{data1.totalRevenue}<br/><Typography variant="caption">Total Revene</Typography></Typography>
          
          </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}><div className={classes.box}><ShoppingCartRoundedIcon style={{ fontSize: 80, color: '#885bc2'}}/>
          <Typography variant="body1" className={classes.paisa}>{data1.todaysSales}<br/><Typography variant="caption">Today's Sales</Typography></Typography>          </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}><div className={classes.box}><EqualizerRoundedIcon style={{ fontSize: 80, color: '#8AC7DB'}}/>
          <Typography variant="body1" className={classes.paisa}>{data1.conversion}<br/><Typography variant="caption">Conversion</Typography></Typography>          </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}><div className={classes.box}><VisibilityRoundedIcon  style={{ fontSize: 80, color: '#885bc2'}}/>
          <Typography variant="body1" className={classes.paisa}>{data1.todaysVisits}<br/><Typography variant="caption">Today's Visit</Typography></Typography>

          </div></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
