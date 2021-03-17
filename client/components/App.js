import React from "react";
import Category from './Category.js';
import CategoryDetail from './CategoryDetail.js';
import TitleDetail from './TitleDetail.js';
import { connect } from 'react-redux';
import { fetchCategory } from '../store.js';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategory();
  }

  render() {
    return (
      <div className='container'>
        <Category />
        <CategoryDetail />
        <TitleDetail />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: function() {
      return dispatch(fetchCategory());
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
