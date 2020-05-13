import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Linechart from './Linechart'
import Circuler from './Circuler'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400
  },
  text:{
      marginLeft:'-80%'
  },
  text2:{
    marginLeft:'-90%'
},
three:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
     alignItems:'center'
},

}));

export default function MidBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><Typography variant="Caption" className={classes.text}>Total Revene</Typography><Circuler/>
          <Typography variant="Caption">Total Sales Made Today</Typography><br/>
          <Typography variant="Caption">$56</Typography><br/><br/>
          <div className={classes.three}>
          <Typography variant="Caption">Target</Typography>
          <Typography variant="Caption">Last week</Typography>
          <Typography variant="Caption">Last month</Typography>
              </div>
              <div className={classes.three}>
          <Typography variant="Caption">$56</Typography>
          <Typography variant="Caption">$56</Typography>
          <Typography variant="Caption">$678</Typography>
              </div>
</Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}><Typography variant="Caption" className={classes.text2}>Total Sales</Typography><Linechart/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
