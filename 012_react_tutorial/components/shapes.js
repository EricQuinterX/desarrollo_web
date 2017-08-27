import React from 'react';

class Shape extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var boderRadiusValue = "0 0";
        if (this.props.name === "circle"){
            boderRadiusValue = "50% 50%";
        }

        var styles = {
            height: "100px",
            width: this.props.width ? this.props.width : "100px",
            borderRadius: boderRadiusValue,
            background: this.props.color,
            marginTop: "10px"
        };

        return(
            <div style={styles}>
            </div>
        );
    }
}

export {Shape};
