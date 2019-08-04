import React from 'react';
import Skill from './Skill';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
      color: "white",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1)
    },
  });

class Languages extends React.Component{
    render(){
        const {classes}=this.props;
        return (
            <Grid alignItems="center" direction="column" xs={12} item container>
                <Grid alignItems="center" direction="column" xs={8} item container>
                    <Typography variant="h3" className={classes.root}>Technologies</Typography>
                </Grid>
                <Grid xs={8} item container alignItems="flex-start" direction="column">
                    <Typography className={classes.root} variant="body1">I've put my keyboard to a lot of use on these languages...</Typography>
                    <Grid item container justify="center" xs={12}>
                        <Grid justify="flex-start" xs={8} item container>
                            <Skill name={"JavaScript"}></Skill>
                            <Skill name={"Typescript"}></Skill>
                            <Skill name={"C#"}></Skill>
                            <Skill name={"Java"}></Skill>
                            <Skill name={"Haskell"}></Skill>
                            <Skill name={"Python"}></Skill>
                            <Skill name={"C/C++"}></Skill>
                            <Skill name={"HTML/CSS/JSX"}></Skill>
                            <Skill name={"PHP"}></Skill>
                        </Grid>
                    </Grid>
                    <Typography  className={classes.root} variant="body1">Ask me about these frameworks...</Typography>
                    <Grid item container justify="center" xs={12}>
                        <Grid justify="flex-start" xs={8} item container>
                            <Skill name={"ASP.NET Core"}></Skill>
                            <Skill name={"React JS"}></Skill>
                            <Skill name={"Redux"}></Skill>
                            <Skill name={"NodeJS"}></Skill>
                            <Skill name={"MaterialUI"}></Skill>
                            <Skill name={"Bootstrap"}></Skill>
                            <Skill name={"Play (Java)"}></Skill>
                            <Skill name={"Django"}></Skill>
                            <Skill name={"Flask"}></Skill>
                            <Skill name={"SKLearn"}></Skill>
                            <Skill name={"Openfin"}></Skill>
                            <Skill name={"Maven"}></Skill>
                        </Grid>
                    </Grid>
                    <Typography  className={classes.root} variant="body1">And I can tell you my opinion on these platforms...</Typography>
                    <Grid item container justify="center" xs={12}>
                        <Grid justify="flex-start" xs={8} item container>
                            <Skill name={"Azure"}></Skill>
                            <Skill name={"AWS"}></Skill>
                            <Skill name={"Google Cloud"}></Skill>
                            <Skill name={"Heroku"}></Skill>
                        </Grid>
                    </Grid>
                    <Typography  className={classes.root} variant="body1">Last but not least, Databases</Typography>
                    <Grid item container justify="center" xs={12}>
                        <Grid justify="flex-start" xs={8} item container>
                            <Skill name={"SQL Server"}></Skill>
                            <Skill name={"KDB/Q"}></Skill>
                            <Skill name={"MySQL"}></Skill>
                            <Skill name={"MongoDB"}></Skill>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Languages);
