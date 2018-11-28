import React , { Component } from 'react';

import './_signup.scss';

export default class SignupForm extends Component {

    render() {
        return(
            <div className="container">
            <div>
            <input type="text"/>
            </div> 
            <div>
            <input type="text"/>
            </div>
            <div>
            <input type="email"/>
            </div>
            <div>
            <input type="password"/>
            </div>
            </div>
        );
    }
}
