import React from "react";
import Category from './Category.js';
import CategoryDetail from './CategoryDetail.js';
import TitleDetail from './TitleDetail.js';
import AddNew from './AddNew.js';
import { connect } from 'react-redux';
import { fetchCategory } from '../store.js';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategory();
  }

  render() {
    return (
      <Router>
        <div className='container'>
          {/* <Route path='/' component={Category} /> */}
          <Category />
          <Route exact path='/' component={AddNew} />
          <Route path='/category/:id' component={CategoryDetail} />
          <TitleDetail />
        </div>
      </Router>
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
