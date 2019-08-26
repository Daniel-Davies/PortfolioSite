import React from "react";
import Main from "./Main";
import { loadReCaptcha } from "react-recaptcha-google";
import AOS from "aos";
import "aos/dist/aos.css";

export class App extends React.Component {
  componentDidMount() {
    loadReCaptcha();
    AOS.init({ duration: 800 });
  }

  render() {
    return <Main />;
  }
}
