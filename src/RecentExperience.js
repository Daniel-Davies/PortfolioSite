import React from "react";
import Card from "./Card";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import cardObjects from "./utils/contentStore";

class RecentExperience extends React.Component {
  render() {
    return (
      <Grid
        data-aos="fade-up"
        alignItems="center"
        direction="column"
        item
        container
        xs={12}
      >
        <Grid
          alignItems="center"
          direction="column"
          xs={12}
          item
          container
          style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
        >
          <Fade in={true} {...(true ? { timeout: 1000 } : {})}>
            <Grid xs={12} item container justify="center">
              {cardObjects.slice(1, 4).map((contentObj, k) => {
                return (
                  <Grid key={k} lg={4} md={6} xs={12} item container>
                    <Card
                      Type={contentObj.type}
                      Image={contentObj.image}
                      Link={contentObj.link}
                      Title={contentObj.title}
                      Description={contentObj.description}
                      Technologies={contentObj.technologies}
                      Gif={contentObj.gif}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    );
  }
}

export default RecentExperience;
