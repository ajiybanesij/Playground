import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
class IncreaseByTwoCounter extends Component {
  render() {
    return <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          +2
        </button>
    </div>;
  }
}

//Aksiyon bağlamak için
function mapDispatchToProps(dispatch) {
  //counterActions içerisindeki increaseCounterı çalıştırmak istediğimizi belirtiyoruz.
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

//IncreaseByTwoCounter comp. reduxa connect ediyoruz.
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
