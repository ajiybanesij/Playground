import React, { Component } from "react";
import { connect } from "react-redux";
import {createProject,getCompanies} from "../redux/actions/companiesActions";

class PostFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      folder_name: this.state.title,
      description: this.state.body,
    };
    this.props.createProject(post);
   
    
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title : </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            ></input>
          </div>
          <div>
            <label>Body : </label>
            <br />
            <textarea
              type="body"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createProject,getCompanies })(PostFrom);
