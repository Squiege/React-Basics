import React, { Component } from 'react';

class Contact extends Component {
    state = {
        email: "example@email.com"
    };

    render() {
        return (
            <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>{this.state.email}</h1>
            </p>
        );
    }
}

export default Contact;