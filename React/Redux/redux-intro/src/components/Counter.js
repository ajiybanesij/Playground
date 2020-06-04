import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter : {this.props.counter}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) { 
    //State bilgisini reducerdan çek
  return {counter: state.counterReducer}; 
}

export default connect(mapStateToProps)(Counter);
