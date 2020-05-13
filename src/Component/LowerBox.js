import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Barchart from './Barchart'
import Tables from './Tables'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 380
  },
  text:{
    marginLeft:'-75%'
}
}));

export default function LowerBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Typography variant="Caption" className={classes.text}>Sales Analytics</Typography><Barchart/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Typography variant="Caption" className={classes.text}>Recents Orders</Typography><Tables/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
