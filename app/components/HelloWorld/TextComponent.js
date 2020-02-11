import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from "semantic-ui-react";

export default class TextComponent extends React.Component {

    static propTypes = { text: PropTypes.string };
    static defaultProps = { text: 'I require a text prop.' };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment>
                {this.props.text}
            </Segment>
        );
    }
}
