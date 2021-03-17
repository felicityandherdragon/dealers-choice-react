import React from 'react';
import { connect } from 'react-redux';

const Category = (props) => {
  const categories = props.category;
  return (
    <div className='category'>
      {categories.map(each => (
        <div key={each.id} className='each-category'>
          {each.name}
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

export default connect(mapStateToProps)(Category);
