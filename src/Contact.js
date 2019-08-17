import React from 'react';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import { ReCaptcha } from 'react-recaptcha-google';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './Footer';

const styles = theme => ({
    root: {
        '& label.Mui-focused': {
         color: 'white',
        },
        '& label': {
            color: 'white',
           },
        '& .MuiInput-underline:after': {
         borderBottomColor: 'white',
        },
       '& .MuiOutlinedInput-root': {
         '& fieldset': {
           borderColor: 'white',
         },
         '&:hover fieldset': {
           borderColor: 'white',
         },
         '&.Mui-focused fieldset': {
           borderColor: '#3f51b5',
         },
       },
       width: "100%",
       color: "white !important",
  },
  multiline:{
      color: "white !important"
  },
  button: {
    color: 'white',
    border: "2px solid #3f51b5",
    //borderColor: "white", 
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  buttonWhite: {
    color: 'white',
    borderColor: "white",
    margin: theme.spacing(2),
  },
  bigSpace:{
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7)
  },
  progress: {
      margin: theme.spacing(1),
      color:"white",
  }
});

function makePostReqToServer(state, url){
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.responseType = "text";
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => resolve(xhr.response);
        xhr.send(JSON.stringify(state));
    });
}

class Contact extends React.Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name:"", organisation: "", email: "", message:"", captchaToken: "", submittedForm: false, loadingResp: false, errorName: false, errorOrganisation: false, errorMessage: false, errorEmail: false}
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeOrganisation = this.changeOrganisation.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    isInvalidName(value){
        return value < 1 || value > 40
    }

    isInvalidOrganisation(value){
        return  value < 1 || value > 40
    }

    isInvalidEmail(value){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regexTester = new RegExp(re);
        const validated = regexTester.test(value)
        return !validated;
    }

    isInvalidMessage(value){
        return value < 1 || value > 100
    }

    isInvalidCaptcha(value){
        return value === ""
    }

    componentDidMount() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
      }

    changeMessage(e){
        this.setState({message: e.target.value})
    }

    changeName(e){
        this.setState({name: e.target.value.replace(/[^a-zA-Z-]/g, '')})
    }

    changeOrganisation(e){
        this.setState({organisation: e.target.value.replace(/[^0-9a-zA-Z-.]/g, '')})
    }

    changeEmail(e){
        this.setState({email: e.target.value})
    }

    validateForm(){
        const { errorEmail, errorMessage, errorName, errorOrganisation } = this.state;

        if(errorEmail || errorMessage || errorName || errorOrganisation){
            return false
        } else{
            if(this.isInvalidCaptcha(this.state.captchaToken) || this.isInvalidEmail(this.state.email) || this.isInvalidMessage(this.state.message) || this.isInvalidOrganisation(this.state.organisation) || this.isInvalidName(this.state.name)){
                return false
            } else {
                return true
            }
        }
    }

    handleSubmit(e){
        if(this.validateForm()){
            this.setState({loadingResp: true})
            makePostReqToServer(this.state, "https://thawing-savannah-70212.herokuapp.com/email").then(
                serverResponse =>{ 
                    const response = JSON.parse(serverResponse)
                    if(response.success){
                        this.setState({submittedForm: true})
                    } else{
                        this.setState({loadingResp: false})
                    }
                }, 
                reject => {
                    this.setState({loadingResp: false})
                }
            );
        }
    }

    changeField(e, field){
        this.setState({[field]: e.target.value})
    }

    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback(recaptchaToken) {
        this.setState({captchaToken: recaptchaToken})
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{minHeight: "100vh", backgroundColor: "#343a40"}}>
                <div style={{minHeight: "100vh", justifyContent: "space-between", display: "flex", flexDirection: "column"}}>
                    <div><Navbar fillColor={"none"} nowActive="Contact" /></div>
                    <div>
                    {!this.state.submittedForm &&
                <Fade in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }} {...(true ? { timeout: 2000 } : {})} >
                <Grid alignItems="center" item container direction="column" justify="center" >
                    <Grid item container justify="center">
                        <Typography className={classes.multiline} variant="h3">Contact Me</Typography>
                    </Grid>
                    <Grid item container justify="center">
                        <Typography className={classes.multiline} variant="h6">Don't be shy...say hello!</Typography>
                    </Grid>
                    <Grid justify="center" item container lg={4} xs={10} >
                        <div style={{width: "100%"}}>
                            <div >
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    name="Name"
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.root}
                                    onChange={(e) => this.changeName(e)}
                                    InputProps={{
                                        classes: {
                                            input: classes.multiline
                                        }
                                    }}
                                    onBlur={(e) => this.setState({errorName: this.isInvalidName(e.target.value)})}
                                    error={this.state.errorName}
                                    inputProps={{ maxLength: 40}}
                                    value={this.state.name}
                                    helperText={this.state.errorName && "Non Empty and less than 40 chars"}
                                />
                            </div>
                            <div >
                                <TextField
                                    id="outlined-name"
                                    label="Organisation"
                                    className={classes.root}
                                    name="Organisation"
                                    onChange={(e) => this.changeField(e)}
                                    InputProps={{
                                        classes: {
                                            input: classes.multiline
                                        }
                                    }}
                                    error={this.state.errorOrganisation}
                                    onChange={(e) => this.changeOrganisation(e)}
                                    inputProps={{ pattern: "[A-Za-z-]", maxLength: 40}}
                                    margin="normal"
                                    variant="outlined"
                                    onBlur={(e) => this.setState({errorOrganisation: this.isInvalidOrganisation(e.target.value)})}
                                    value={this.state.organisation}
                                    helperText={this.state.errorOrganisation && "Non Empty and less than 40 chars"}
                                    />
                            </div>
                            <div >
                                <TextField
                                    id="outlined-name"
                                    label="Email"
                                    className={classes.root}
                                    name="Email"
                                    onChange={(e) => this.changeEmail(e)}
                                    InputProps={{
                                        classes: {
                                            input: classes.multiline
                                        }
                                    }}
                                    inputProps={{ pattern: "[A-Za-z-]", maxLength: 40}}
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onBlur={(e) => this.setState({errorEmail: this.isInvalidEmail(e.target.value)})}
                                    error={this.state.errorEmail}
                                    helperText={this.state.errorEmail && "Please enter a valid email [example@example.com]"}
                                />
                            </div>
                            <div >
                                <TextField
                                    onChange={(e) => this.changeMessage(e)}
                                    value={this.state.message}
                                    onBlur={(e) => this.setState({errorMessage: this.isInvalidMessage(e.target.value)})}
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
                                    inputProps={{ maxLength: 400 }}
                                    helperText={this.state.errorMessage && "Non Empty and less than 400 chars"}
                                />
                            </div>
                            <Grid justofy="space-between" item container xs={12}>
                                <Grid justify="flex-start" xs={12} lg={6} item container className={classes.bigSpace}>
                                    <ReCaptcha
                                            ref={(el) => {this.captchaDemo = el;}}
                                            size="normal"
                                            render="explicit"
                                            sitekey="6LdZGK0UAAAAANk570d1w9jth1KbNckliBUwyCXw"
                                            onloadCallback={this.onLoadRecaptcha}
                                            verifyCallback={this.verifyCallback}  
                                        />
                                </Grid>
                                <Grid direction="column" alignItems="flex-end" justify="center" xs={12} lg={6} item container>
                                    {!this.state.loadingResp && 
                                        <Button variant="outlined" color="primary" onClick={this.handleSubmit} className={classes.button}>
                                            Send
                                        </Button>
                                    }
                                    {this.state.loadingResp && 
                                        <Button variant="outlined" color="primary" onClick={this.handleSubmit} className={classes.button}>
                                            Wait for it... <CircularProgress className={classes.progress} size={25} />
                                        </Button>
                                    }
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                </Fade>
            }
                {
                    this.state.submittedForm && 
                    <Grid alignItems="center" item container direction="column" justify="center" style={{minHeight: "50vh"}}>
                    <Grid item container justify="center">
                        <Typography className={classes.multiline} variant="h3">Got it. Thank you!</Typography>
                    </Grid>
                    <Grid item container justify="center">
                        <Typography className={classes.multiline} variant="h6">It's great you want to talk! I will aim to respond in 24 hours.</Typography>
                    </Grid>
                    <Grid justify="center" xs={12} item container>
                        <Button variant="outlined" color="primary" to="/" component={Link} className={classes.buttonWhite} size={"large"}>
                            Back to homepage
                        </Button>
                    </Grid>
                </Grid>
                }
                    </div>
                    <div><Footer/></div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);