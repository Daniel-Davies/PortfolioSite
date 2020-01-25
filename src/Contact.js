import React from "react";
import Navbar from "./Navbar";
import SubmitConfirmation from "./SubmitConfirmation";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import { ReCaptcha } from "react-recaptcha-google";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types';
import Footer from "./Footer";
import { makePostReqToServer } from "./utils/request.js";
import {
  isInvalidName,
  isInvalidOrganisation,
  isInvalidEmail,
  isInvalidMessage,
  validateForm
} from "./utils/validationUtils";

const styles = theme => ({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& label": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5"
      }
    },
    width: "100%",
    color: "white !important"
  },
  multiline: {
    color: "white !important"
  },
  button: {
    color: "white",
    border: "2px solid #3f51b5",
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  buttonWhite: {
    color: "white",
    borderColor: "white",
    margin: theme.spacing(2)
  },
  bigSpace: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7)
  },
  progress: {
    margin: theme.spacing(1),
    color: "white"
  }
});

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      organisation: "",
      email: "",
      message: "",
      captchaToken: "",
      submittedForm: false,
      loadingResp: false,
      errorName: false,
      errorOrganisation: false,
      errorMessage: false,
      errorEmail: false
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeOrganisation = this.changeOrganisation.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  changeMessage(e) {
    this.setState({ message: e.target.value });
  }

  changeName(e) {
    this.setState({ name: e.target.value.replace(/[^a-zA-Z-]/g, "") });
  }

  changeOrganisation(e) {
    this.setState({
      organisation: e.target.value.replace(/[^0-9a-zA-Z-.]/g, "")
    });
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    if (validateForm(this.state)) {
      this.setState({ loadingResp: true });
      makePostReqToServer(
        this.state,
        "https://chtf3ulod5.execute-api.us-east-2.amazonaws.com/StagingLive/create"
      ).then(
        serverResponse => {
          const response = JSON.parse(serverResponse);
          if (response["success"] == true) {
            this.setState({ submittedForm: true });
          } else {
            this.setState({ loadingResp: false });
          }
        },
        reject => {
          this.setState({ loadingResp: false });
        }
      );
    }
  }

  changeField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    this.setState({ captchaToken: recaptchaToken });
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#343a40" }}>
        <div
          style={{
            minHeight: "100vh",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div>
            <Navbar fillColor={"none"} nowActive="Contact" />
          </div>
          <div>
            {!this.state.submittedForm && (
              <Fade
                in={true}
                style={{ transitionDelay: true ? "100ms" : "0ms" }}
                {...(true ? { timeout: 2000 } : {})}
              >
                <Grid
                  alignItems="center"
                  item
                  container
                  direction="column"
                  justify="center"
                >
                  <Grid item container justify="center">
                    <Typography className={classes.multiline} variant="h3">
                      Contact Me
                    </Typography>
                  </Grid>
                  <Grid item container justify="center">
                    <Typography className={classes.multiline} variant="h6">
                      Don't be shy...say hello!
                    </Typography>
                  </Grid>
                  <Grid justify="center" item container lg={4} xs={10}>
                    <div style={{ width: "100%" }}>
                      <div>
                        <TextField
                          id="outlined-name"
                          label="Name"
                          name="Name"
                          margin="normal"
                          variant="outlined"
                          className={classes.root}
                          onChange={e => this.changeName(e)}
                          InputProps={{
                            classes: {
                              input: classes.multiline
                            }
                          }}
                          onBlur={e =>
                            this.setState({
                              errorName: isInvalidName(e.target.value)
                            })
                          }
                          error={this.state.errorName}
                          inputProps={{ maxLength: 40 }}
                          value={this.state.name}
                          helperText={
                            this.state.errorName &&
                            "Non Empty and less than 40 chars"
                          }
                        />
                      </div>
                      <div>
                        <TextField
                          id="outlined-name"
                          label="Organisation"
                          className={classes.root}
                          name="Organisation"
                          onChange={e => this.changeField(e)}
                          InputProps={{
                            classes: {
                              input: classes.multiline
                            }
                          }}
                          error={this.state.errorOrganisation}
                          onChange={e => this.changeOrganisation(e)}
                          style={{ pattern: "[A-Za-z-]", maxLength: 40 }}
                          margin="normal"
                          variant="outlined"
                          inputProps={{ maxLength: 40 }}
                          onBlur={e =>
                            this.setState({
                              errorOrganisation: isInvalidOrganisation(
                                e.target.value
                              )
                            })
                          }
                          value={this.state.organisation}
                          helperText={
                            this.state.errorOrganisation &&
                            "Non Empty and less than 40 chars"
                          }
                        />
                      </div>
                      <div>
                        <TextField
                          id="outlined-name"
                          label="Email"
                          className={classes.root}
                          name="Email"
                          onChange={e => this.changeEmail(e)}
                          InputProps={{
                            classes: {
                              input: classes.multiline
                            }
                          }}
                          style={{ pattern: "[A-Za-z-]", maxLength: 40 }}
                          margin="normal"
                          variant="outlined"
                          type="email"
                          autoComplete="email"
                          inputProps={{ maxLength: 40 }}
                          value={this.state.email}
                          onBlur={e =>
                            this.setState({
                              errorEmail: isInvalidEmail(e.target.value)
                            })
                          }
                          error={this.state.errorEmail}
                          helperText={
                            this.state.errorEmail &&
                            "Please enter a valid email [example@example.com]"
                          }
                        />
                      </div>
                      <div>
                        <TextField
                          onChange={e => this.changeMessage(e)}
                          value={this.state.message}
                          onBlur={e =>
                            this.setState({
                              errorMessage: isInvalidMessage(e.target.value)
                            })
                          }
                          error={this.state.errorMessage}
                          id="outlined-name"
                          label="Message"
                          className={classes.root}
                          InputProps={{
                            classes: {
                              input: classes.multiline
                            }
                          }}
                          name="Message"
                          margin="normal"
                          variant="outlined"
                          rows="4"
                          multiline={true}
                          style={{ maxLength: 400 }}
                          helperText={
                            this.state.errorMessage &&
                            "Non Empty and less than 400 chars"
                          }
                        />
                      </div>
                      <Grid justify="space-between" item container xs={12}>
                        <Grid
                          justify="flex-start"
                          xs={12}
                          lg={6}
                          item
                          container
                          className={classes.bigSpace}
                        >
                          <ReCaptcha
                            ref={el => {
                              this.captchaDemo = el;
                            }}
                            size="normal"
                            render="explicit"
                            sitekey="6LdZGK0UAAAAANk570d1w9jth1KbNckliBUwyCXw"
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                          />
                        </Grid>
                        <Grid
                          direction="column"
                          alignItems="flex-end"
                          justify="center"
                          xs={12}
                          lg={6}
                          item
                          container
                        >
                          {!this.state.loadingResp && (
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={this.handleSubmit}
                              className={classes.button}
                            >
                              Send
                            </Button>
                          )}
                          {this.state.loadingResp && (
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={this.handleSubmit}
                              className={classes.button}
                            >
                              Wait for it...{" "}
                              <CircularProgress
                                className={classes.progress}
                                size={25}
                              />
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Fade>
            )}
            {this.state.submittedForm && <SubmitConfirmation />}
          </div>
          <div>
            <Footer backgroundColor="#343a40" color="white" />
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Contact);
