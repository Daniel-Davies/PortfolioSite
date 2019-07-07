import React, {Component} from 'react';
import {Navbar} from './Navbar';

export class Contact extends React.Component {
    render() {
        return (
            <div>

                <Navbar />

            <div>
                <div class="container col-6">
        <div class="d-flex justify-content-center mt-4">
            <p class="header-leading">Don't be shy...say hello!</p>
        </div>
        <form action="/sendMail" method="GET">
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control bg-dark text-white border-dark" id="exampleFormControlInput1" name="name" placeholder="What should I address you as?"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput2">Organisation</label>
                <input type="text" class="form-control bg-dark text-white border-dark" id="exampleFormControlInput2" name="organisation"
                    placeholder="Who do you represent/ how would I know you?"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput3">Email</label>
                <input type="email" class="form-control bg-dark text-white border-dark" id="exampleFormControlInput3" name="email" placeholder="How should I contact you?"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">What's on your mind?</label>
                <textarea class="form-control bg-dark text-white border-dark" id="exampleFormControlTextarea1" name="message" rows="6"></textarea>
            </div>
        </form>
    </div>
            </div>

            </div>
      );
    }
}