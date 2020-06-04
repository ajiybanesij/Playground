import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          -1
        </button>
            </div>
        )
    }
}
//Aksiyon bağlamak için
function mapDispatchToProps(dispatch) {
    //counterActions içerisindeki increaseCounterı çalıştırmak istediğimizi belirtiyoruz.
    return { actions: bindActionCreators(decreaseCounter, dispatch) };
  }
  
  //DecreaseCounter comp. reduxa connect ediyoruz.
  export default connect(mapDispatchToProps)(DecreaseCounter);
  