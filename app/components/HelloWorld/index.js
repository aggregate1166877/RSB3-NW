import React from 'react';
import { Button, Header } from "semantic-ui-react";

import TextComponent from "./TextComponent";

/**
 * Stateless functional component example.
 * @param name
 * @returns {string}
 * @constructor
 */
const HelloMessage = ({ name }) => {
    return (
        <Header>
            Hello, {name}!
        </Header>
    );
};

export default class HelloWorld extends React.Component {

    static defaultProps = {};
    static defaultState = {
        text: 'Click the button to change me.'
    };

    constructor(props) {
        super(props);
        this.state = HelloWorld.defaultState;
    }

    generateRandomNumber = () => {
        const intString = `${Math.random()}`.split('.')[1];
        this.setState({
            text: intString,
        });
    };

    render() {
        return (
            <div>
                <HelloMessage name="world" />

                <TextComponent text={this.state.text} />
                <Button onClick={this.generateRandomNumber}>
                    Generate random number
                </Button>
            </div>
        );
    }
}
