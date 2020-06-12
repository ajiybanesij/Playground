import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    
  }

  render() {
    return (
      <div>
        <h3>CategoryList {this.props.categories.length}</h3>
        <h5>Seçili Kategory : {this.props.currentCategory.categoryName}</h5>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      )}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

