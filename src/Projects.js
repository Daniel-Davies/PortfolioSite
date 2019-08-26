import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import cardObjects from "./utils/contentStore";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Navbar fillColor={"#343a40"} nowActive="Projects" />
        <Grid alignItems="center" direction="column" item container xs={12}>
          <Grid
            alignItems="center"
            direction="column"
            xs={12}
            md={10}
            lg={8}
            sm={9}
            item
            container
            style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
          >
            <Fade in={true} {...(true ? { timeout: 1000 } : {})}>
              <Grid xs={12} item container justify="center">
                {cardObjects.map((contentObj, k) => {
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
        <Footer backgroundColor="white" color="black" />
      </div>
    );
  }
}

export default Projects;
