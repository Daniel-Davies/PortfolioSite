import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types';
import CardFlag from "./CardFlag";


const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    margin: theme.spacing(1.5),
    height: "max-content",
    border: "1px solid #EBEDEF"
  },
  subHeader: {
    color: "grey"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  chip: {
    margin: theme.spacing(1)
  },
  smallSpace: {
    margin: theme.spacing(0.4)
  },
  overlapped: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    right: 0
  },
  media: {
    height: 200,
    objectFit: "fill",
    padding: theme.spacing(1),
    width: "96%"
  },
  heading: {
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
    alignItems: "flex-end",
    display: "flex"
  }
}));

function ImgMediaCard({
  Image,
  Title,
  Technologies,
  Type,
  Link,
  Description,
  Gif
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [cardimage, setImage] = React.useState(Image);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function goToLink() {
    window.open(Link, "_blank");
  }

  function displayGif() {
    const nextImage = cardimage === Image ? Gif : Image;
    setImage(nextImage);
  }

  return (
    <Card className={classes.card}>
      <CardFlag Type={Type} />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={cardimage}
        />
        <CardContent className={classes.heading}>
          <Typography gutterBottom variant="subtitle1" style={{ margin: 0 }}>
            <Box fontWeight="fontWeightBold" m={0}>
              {Title}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: 0 }}>
        <Grid
          style={{ padding: 0 }}
          item
          container
          xs={12}
          justify="space-between"
        >
          <div style={{ padding: 0 }}>
            <Button
              size="small"
              variant="outlined"
              className={classes.chip}
              onClick={goToLink}
              color="primary"
              disabled={Link == null}
            >
              Check it out
            </Button>
            <Button
              size="small"
              onClick={e => displayGif(e)}
              className={classes.chip}
              variant="outlined"
              color="primary"
              disabled={typeof Gif === "undefined"}
            >
              {cardimage === Image ? "Animate!" : "Back to image"}
            </Button>
          </div>
          <div>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <KeyboardArrowDown />
            </IconButton>
          </div>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.subHeader} variant="subtitle1">
            Background
          </Typography>
          <Grid item container justify="center" xs={12}>
            <Grid item container xs={12} lg={10}>
              <Typography variant="body1">{Description}</Typography>
            </Grid>
          </Grid>
          <br />
          <Typography className={classes.subHeader} variant="subtitle1">
            Main technologies
          </Typography>
          <Grid justify="center" item container>
            {Technologies.map((te, i) => (
              <Chip
                key={"tech" + i}
                label={te}
                color="primary"
                className={classes.smallSpace}
              />
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  Image: PropTypes.string,
  Title: PropTypes.string,
  Technologies: PropTypes.array,
  Type: PropTypes.string,
  Link: PropTypes.string,
  Description: PropTypes.string,
  Gif: PropTypes.string
};

export default ImgMediaCard;