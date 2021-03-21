import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { setCategoryDetail } from '../store';

const Category = (props) => {
  const categories = props.category;
  return (
    <div className='category'>
      {categories.map(each => (
        <div className='each-category' key={each.id}>
          <Link to={'/category/'+each.id} onClick={()=>props.setCategoryDetail(each.id)}>
            {each.name}
          </Link>
        </div>
      ))}
      <div className='new-category'>
        +
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategoryDetail: (categoryId) => {
       return dispatch(setCategoryDetail(categoryId))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);
