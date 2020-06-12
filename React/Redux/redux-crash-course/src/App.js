import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/Postform";

import { connect } from "react-redux";
import { getCompanies } from "./redux/actions/companiesActions";

class App extends React.Component {
  componentWillMount() {
    this.props.getCompanies();
  }

  render() {
    const postItems = this.props.datas.map((item) => (
      <div>
        <p>{item}</p>
      </div>
    ));
    return (
      <div className="App">
        {postItems}
        <PostForm></PostForm>
        <hr></hr>
        <Posts></Posts>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datas: state.posts.companies,
  };
};

export default connect(mapStateToProps, { getCompanies })(App);
