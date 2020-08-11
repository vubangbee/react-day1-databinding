import React, { Component } from "react";
import ChildComponent_Pure from "./ChildComponent_Pure";
import _ from "lodash";

export default class ChildComponent extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log("newProps", newProps);
    console.log("newState", newState);
    if (!_.isEqual(this.props.user, newProps.user)) {
      return true;
    }
    return true;
  }
  render() {
    console.log("childComponentRender");
    return (
      <div className="container">
        <p>{this.props.user.name}</p>

        {/* <ChildComponent_Pure user={this.state.user}  */}
        <ChildComponent_Pure user={this.props.user} />
      </div>
    );
  }
}
