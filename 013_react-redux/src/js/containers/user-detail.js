import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <h4>Select a user...</h4>;
    }
    let user = this.props.user;
    return (
      <div>
        <img src={user.thumbnail}/>
        <h3>{user.first} {user.last}</h3>
        <h4>Edad: {user.age}</h4>
        <h4>Description: {user.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);