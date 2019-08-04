import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import CardFlag from './CardFlag';

const useStyles = makeStyles( theme => ({
  card: {
    width: "100%",
    margin: theme.spacing(1),
    height: "max-content"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chip: {
    margin: theme.spacing(1),
  },
  overlapped: {
    position: "absolute",
    top: 0,
    zIndex: 1000, 
    right: 0
  },
  media: {
    height: 250,
    objectFit: 'fill'
  },
  heading:{
    paddingTop:0,
    paddingBottom:0,
    margin:0,
    alignItems:"flex-end",
    display:"flex"
  }
}));

export default function ImgMediaCard({Image, Desc, Technologies, Type}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardFlag Type={Type}/>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={Image}
        />
        <CardContent className={classes.heading}>
          <Typography gutterBottom variant="h5" component="h2" style={{marginBottom:0, marginTop: "6px"}}>
            {Desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid item container xs={12} justify="space-between">
          <div>
            <Button size="small" className={classes.chip} variant="contained" color="primary">
            Check it out
          </Button>
          <Button size="small" className={classes.chip} variant="contained" color="primary" disabled>
            Animate!
          </Button>
          </div>
          <div>
            <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </div>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <p>Check back here soon for a description!</p>
            {Technologies.map((te,i) => 
                <Chip key={"tech"+i} label={te} color="primary" className={classes.chip} />
            )} 
        </CardContent>
      </Collapse>
    </Card>
  );
}