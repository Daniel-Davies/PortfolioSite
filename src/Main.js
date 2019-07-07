import React from 'react';
import {About} from './About';
import {Contact} from './Contact';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>

    </Switch>
);

export default Main;