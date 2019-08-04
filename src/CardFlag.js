import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    overlapped: {
      position: "absolute",
      top: 0,
      zIndex: 1000, 
      right: 0,
      backgroundColor: "grey"
    },
    flagText:{
        margin: 0,
        color: "white",
        padding: theme.spacing(1)
    }
  });

class CardFlag extends React.Component{
    render(){
        const { classes } = this.props
        return (
            <div style={{position: "relative"}}>
                <div className={classes.overlapped}>
                    
                    <Typography className={classes.flagText} variant="overline" gutterBottom>{this.props.Type}</Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CardFlag);