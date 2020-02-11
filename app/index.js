import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from "./components/HelloWorld";

class MainComponent extends React.Component {

	static defaultState = {};

	constructor(props) {
		super(props);
		this.state = MainComponent.defaultState;
	}

	render() {
		return (
			<div>
				<HelloWorld />
			</div>
		);
	}
}

const domContainer = document.querySelector('#react-element');
const element = React.createElement;
ReactDOM.render(element(MainComponent), domContainer);
