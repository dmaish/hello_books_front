import React, { Component } from 'react';
import Modal from './../../components/modal/Modal';
import Signup from './../../components/forms/signupForm/signup';

export default class Authentication extends Component{
    renderRegistrationForm (){

    }
    renderLoginForm (){

    }
    render() {
        return (
            <Modal width={"480px"} height={"375px"}>
                <Signup/>
            </Modal>
        );
    }
}