import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTitleDetail,setCategoryDetail } from '../store.js';

class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setCategoryDetail(this.props.match.params.id*1)
  }

  render() {
    console.log(this.props)
    return (
      <div className='category-detail'>
        {this.props.titles.map(each => (
          <div className='each-title' key={each.id} onClick={()=>this.props.getTitleDetail(each.id)}>
            <Link to={'/category/title/'+each.id}>
              <img src={each.cover} />
            <div className='title-brief'>
              <ul>
                <li><h3><b>Name</b>: {each.name}</h3></li>
                <li><h3><b>Link</b>: {each.link}</h3></li>
              </ul>
            </div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
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
    },
    setCategoryDetail: (categoryId) => {
      return dispatch(setCategoryDetail(categoryId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetail);
