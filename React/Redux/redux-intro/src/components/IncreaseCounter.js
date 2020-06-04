import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

//Aksiyon bağlamak için
function mapDispatchToProps(dispatch) {
  //counterActions içerisindeki increaseCounterı çalıştırmak istediğimizi belirtiyoruz.
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

//IncreaseCounter comp. reduxa connect ediyoruz.
export default connect(mapDispatchToProps)(IncreaseCounter);
