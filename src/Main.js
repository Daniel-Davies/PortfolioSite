import React from 'react';
import About from './About';
import Contact from './Contact';
import {Switch, Route} from 'react-router-dom';
import Projects from './Projects';

const Main = () => (
    <Switch style={{padding: 0, margin: 0}}>
        <Route exact path="/" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/projects" component={Projects}></Route>
    </Switch>
);

export default Main;