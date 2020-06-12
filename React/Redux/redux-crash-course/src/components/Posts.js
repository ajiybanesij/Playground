import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import { getCompanies } from "../redux/actions/companiesActions";

class Posts extends Component {
 
  
  componentWillMount() {
    this.props.getCompanies();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.new) {
      this.props.datas.unshift(nextProps.new);
    }
  }

  render() {
    const postItems = this.props.datas.map((item) => (
      <div>
        <p>{item}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
       
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  new: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    datas: state.posts.companies,
    new:state.posts.result
  };
};
export default connect(mapStateToProps, { getCompanies })(Posts);
