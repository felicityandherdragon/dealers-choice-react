import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTitleDetail } from '../store.js';

const CategoryDetail = (props) => {
  return (
    <div className='category-detail'>
      {props.titles.map(each => (
        <div className='each-title' key={each.id}>
          <Link to={'/category/title/'+each.id}>
          <img src={each.cover} onClick={()=>props.getTitleDetail(each.id)} />
          </Link>
          <ul>
            <li>Name: {each.name}</li>
            <li>Link: {each.link}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTitleDetail: (titleId) => {
      return dispatch(getTitleDetail(titleId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetail);
