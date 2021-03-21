import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

const CategoryDetail = (props) => {
  console.log(props);
  return (
    <div className='category-detail'>
      <p>This is the detail section for each category</p>
      {props.titles.map(each => (
        <div className='each-title' key={each.id}>
          <img src={each.cover} />
          {each.name}
          <br />
          {each.link}
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

export default connect(mapStateToProps)(CategoryDetail);
