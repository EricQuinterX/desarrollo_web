import React from 'react';
import PropTypes from 'prop-types';

export class HelloPlanet extends React.Component {
    constructor(props) {
        super();
        //console.log(props);
        this.state = {
            counter: 0
        }
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000);
    }

    render() {
        //console.log(this.props);
        return <h1>Hey! Your favorite number is {this.state.counter}</h1>;
    }
}

HelloPlanet.defaultProps = {
    num: 10
};

HelloPlanet.propTypes = {
    num: PropTypes.number
};
