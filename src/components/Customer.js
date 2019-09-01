import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          name={this.props.name}
        ></CustomerProfile>
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        ></CustomerInfo>
      </div>
    );
  }
}
class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.id}</h2>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
