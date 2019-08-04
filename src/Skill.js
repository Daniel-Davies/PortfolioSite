import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    label: {
      color: "white",
      fontSize: "1.3rem",
      padding: theme.spacing(2.5),
      margin: theme.spacing(1)
    },
    button: {
        border: "2px solid"
    }
  });

class Skill extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            // <Button variant="outlined" color="primary" size="large" classes={{label: classes.label, root: classes.button}}>
            //     {this.props.name}
            // </Button>
            <Chip
                //icon={<FaceIcon />}
                label={this.props.name}
                color="primary"
                className={classes.label}
                //deleteIcon={<DoneIcon />}
                variant="outlined"
            />
        );
    }
} 
        
export default withStyles(styles)(Skill);
