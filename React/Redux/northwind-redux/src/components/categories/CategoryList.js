import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    
  render() {
    return (
      <div>
        <h3>CategoryList {this.props.categories.length}</h3>
        <h5>Seçili Kategory : {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

//Stateti proplara bağla
function mapStateToStore(state) {
  return {
      currentCategory: state.changeCategoryReducer,
      categories:state.categoryListReducer
  };
}

//actionları propslara bağla
function mapDispachToProps(dispathc){
    return{
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories,dispathc)
        }
    }
}

export default connect(mapStateToStore,mapDispachToProps)(CategoryList);
